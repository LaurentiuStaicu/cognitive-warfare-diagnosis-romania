import fs from 'node:fs';
import path from 'node:path';
import { ALL_SUBCHAPTER_STEPS, GLOSSARY_CONCEPTS, BIBLIOGRAPHY_DATA } from '../src/data/tablesAndReference.ts';
import { FIGURE_METADATA } from '../src/components/InteractiveFigures.tsx';

const BASE_URL = 'https://laurentiustaicu.github.io/cognitive-warfare-diagnosis-romania';
const outDir = path.join(import.meta.dirname ? path.resolve(import.meta.dirname, "..") : process.cwd(), 'public', 'share');
fs.mkdirSync(outDir, { recursive: true });

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildShareHtml({ slug, targetHash, title, description, imageRelPath, imageAlt }) {
  const sharePageUrl = `${BASE_URL}/share/${slug}.html`;
  const targetAppUrl = `${BASE_URL}/#${targetHash}`;
  const fullImageUrl = `${BASE_URL}/${imageRelPath.replace(/^\//, '')}`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="author" content="Laurențiu Staicu" />
    <link rel="canonical" href="${sharePageUrl}" />
    <link rel="icon" type="image/svg+xml" href="../favicon.svg" />

    <!-- OpenGraph Social Sharing Cards (Section / Chapter Specific) -->
    <meta property="og:type" content="article" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Diagnosis of Cognitive Warfare in Romania" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${sharePageUrl}" />
    <meta property="og:image" content="${fullImageUrl}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />

    <!-- Twitter / X Cards (Section / Chapter Specific) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${fullImageUrl}" />
    <meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />

    <meta http-equiv="refresh" content="0; url=${targetAppUrl}" />
    <script>
      window.location.replace(${JSON.stringify(`../#${targetHash}`)});
    </script>
  </head>
  <body style="background:#F6F5EE;color:#222426;font-family:Inter,system-ui,-apple-system,sans-serif;padding:2rem;text-align:center;">
    <p>Redirecting to the selected monograph section...</p>
    <p><a href="../#${targetHash}" style="color:#222426;font-weight:bold;">Open ${escapeHtml(title)}</a></p>
  </body>
</html>
`;
}

// 1. Generate share pages for all 19 Subchapter Steps (pasul-1.html .. pasul-19.html)
for (const step of ALL_SUBCHAPTER_STEPS) {
  const figId = step.linkedFigureId || 1;
  const figMeta = FIGURE_METADATA[figId] || FIGURE_METADATA[1];
  const html = buildShareHtml({
    slug: `pasul-${step.stepNumber}`,
    targetHash: `pasul-${step.stepNumber}`,
    title:
      step.stepNumber === 1
        ? 'Introduction · Diagnosis of Cognitive Warfare in Romania (Version 1.0)'
        : `${step.title} (Diagnosis of Cognitive Warfare in Romania)`,
    description: step.summaryThesis,
    imageRelPath: `og/og-fig-${figId}-en.png`,
    imageAlt: `${step.title} (${figMeta.title})`
  });
  fs.writeFileSync(path.join(outDir, `pasul-${step.stepNumber}.html`), html, 'utf-8');
}

// 2. Generate share pages for the 6 Chapters (capitolul-1.html .. capitolul-6.html)
const CHAPTERS_META = [
  {
    num: 1,
    slug: 'capitolul-1',
    targetHash: 'capitolul-1',
    title: 'Chapter 1 (Structural Vulnerabilities of Romanian Society and the Erosion of Endogenous Resilience)',
    description: 'Three-layer causal architecture: the historical anomaly of forms without substance, chronic allostatic load, and learned helplessness.',
    imageRelPath: 'og/og-fig-1-en.png',
    imageAlt: 'Chapter 1 (Three-Layer Causal Architecture)'
  },
  {
    num: 2,
    slug: 'capitolul-2',
    targetHash: 'capitolul-2',
    title: 'Chapter 2 (The Architecture of Putinist Ideology and Sovereignist Discursive Camouflage)',
    description: 'The sistema network, Russkii Antimir, the Bobok state, and the double axiological falsification of conservatism and Orthodoxy.',
    imageRelPath: 'og/og-fig-2-en.png',
    imageAlt: 'Chapter 2 (Double Axiological Falsification and Discursive Camouflage)'
  },
  {
    num: 3,
    slug: 'capitolul-3',
    targetHash: 'capitolul-3',
    title: 'Chapter 3 (The Mechanism of Cognitive Capture and Decision Colonization in the Sixth Operational Domain)',
    description: 'Penetration of the Orientation phase of the OODA loop through second-order reflexive control and the binary semiosis of annihilation.',
    imageRelPath: 'og/og-fig-3-en.png',
    imageAlt: 'Chapter 3 (Hijacking the Orientation Phase of the OODA Loop)'
  },
  {
    num: 4,
    slug: 'capitolul-4',
    targetHash: 'capitolul-4',
    title: 'Chapter 4 (Social Polarization, Projection of the Collective Shadow, and Vulnerability to Manipulation)',
    description: 'Group defense mechanisms, enantiodromia, functional conversion of latent resources from the Shadow, and Cipolla’s behavioral matrix.',
    imageRelPath: 'og/og-fig-4-en.png',
    imageAlt: 'Chapter 4 (Functional Conversion of Latent Resources from the Collective Shadow)'
  },
  {
    num: 5,
    slug: 'capitolul-5',
    targetHash: 'capitolul-5',
    title: 'Chapter 5 (Decision-Making Behavior in Acute Crisis: Cipolla’s Matrix and Neurocognitive Bifurcation)',
    description: 'Sliding into Quadrant III of collective self-sabotage and bifurcation between reactive Track A and deliberative Track B.',
    imageRelPath: 'og/og-fig-5.png',
    imageAlt: 'Chapter 5 (Cipolla’s Matrix and Track A / Track B Bifurcation)'
  },
  {
    num: 6,
    slug: 'capitolul-6',
    targetHash: 'capitolul-6',
    title: 'Chapter 6 (The Sequential Protocol for Reconstructing Societal Cognitive Resilience)',
    description: 'Three-phase sequential protocol across the Lalonde-Dever determinants: Phase I decompression, Phase II prebunking, Phase III organic modernity.',
    imageRelPath: 'og/og-fig-7-en.png',
    imageAlt: 'Chapter 6 (Three-Phase Sequential Protocol)'
  }
];

for (const chap of CHAPTERS_META) {
  const html = buildShareHtml({
    slug: chap.slug,
    targetHash: chap.targetHash,
    title: `${chap.title} (Diagnosis of Cognitive Warfare in Romania)`,
    description: chap.description,
    imageRelPath: chap.imageRelPath,
    imageAlt: chap.imageAlt
  });
  fs.writeFileSync(path.join(outDir, `${chap.slug}.html`), html, 'utf-8');
}

// 3. Generate share pages for all 7 Interactive Vector Figures (figura-1.html .. figura-7.html)
for (const figId of [1, 2, 3, 4, 5, 6, 7]) {
  const fig = FIGURE_METADATA[figId];
  const html = buildShareHtml({
    slug: `figura-${figId}`,
    targetHash: `figura-${figId}`,
    title: `${fig.title} (Diagnosis of Cognitive Warfare in Romania)`,
    description: fig.caption,
    imageRelPath: `og/og-fig-${figId}-en.png`,
    imageAlt: `${fig.title} (${fig.subtitle})`
  });
  fs.writeFileSync(path.join(outDir, `figura-${figId}.html`), html, 'utf-8');
}

// 4. Generate share pages for Tabele and Glosar
fs.writeFileSync(
  path.join(outDir, 'tabele.html'),
  buildShareHtml({
    slug: 'tabele',
    targetHash: 'tabele',
    title: 'Synthesis Tables (1 and 2) and Regional Control Group (Estonia, Poland, Moldova) (Diagnosis of Cognitive Warfare in Romania)',
    description:
      'Matrix synthesis of the diagnosis across Layers A, B, and C (Table 1), the 3-phase Lalonde-Dever sequential protocol (Table 2), and comparison with the regional control group.',
    imageRelPath: 'og/og-fig-7-en.png',
    imageAlt: 'Synthesis Tables 1 and 2 and the Lalonde-Dever Protocol'
  }),
  'utf-8'
);

fs.writeFileSync(
  path.join(outDir, 'glosar.html'),
  buildShareHtml({
    slug: 'glosar',
    targetHash: 'glosar',
    title: `Conceptual Glossary (${GLOSSARY_CONCEPTS.length} concepts) and Complete Bibliography (${BIBLIOGRAPHY_DATA.length} works) (Diagnosis of Cognitive Warfare in Romania)`,
    description:
      `Interdisciplinary conceptual apparatus (institutional sociology, neuroscience, semiotics, analytical psychology) and the ${BIBLIOGRAPHY_DATA.length} verified academic references of the monograph.`,
    imageRelPath: 'og/og-fig-1-en.png',
    imageAlt: 'Conceptual Glossary and Complete Bibliography'
  }),
  'utf-8'
);

console.log('Generated static OpenGraph share pages in public/share/:', fs.readdirSync(outDir).length);

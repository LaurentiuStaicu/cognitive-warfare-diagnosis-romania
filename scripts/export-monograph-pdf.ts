import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import {
  ALL_SUBCHAPTER_STEPS,
  TABLE_1_DATA,
  TABLE_2_DATA,
  REGIONAL_CONTROL_GROUP,
  GLOSSARY_CONCEPTS,
  BIBLIOGRAPHY_DATA,
  CHAPTER_EXECUTIVE_SUMMARIES,
  OPERATIONAL_PROTOCOL_TABLE
} from '../src/data/tablesAndReference';
import { FIGURE_METADATA } from '../src/components/InteractiveFigures';

const require = createRequire(import.meta.url);
const playwrightPkgPath =
  process.env.PLAYWRIGHT_PATH || '/usr/local/share/bun-global/node_modules/playwright';
const { chromium } = require(playwrightPkgPath);

const WORKSPACE = process.cwd();
const DIST_DIR = path.join(WORKSPACE, 'dist');
const PUBLIC_PDF_PATH = path.join(
  WORKSPACE,
  'public',
  'Diagnosticul_razboiului_cognitiv_in_Romania_Complet.pdf'
);
const ARTIFACT_PDF_PATH =
  '/.aistudio/artifacts/brain/b8124c0f-3eb4-43ba-a2e1-0cca2e35b9fd/Diagnosticul_razboiului_cognitiv_in_Romania_Complet.pdf';

function escapeHtml(text: string): string {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface ExtractedNodeDetail {
  key: string;
  regimeALabel?: string;
  regimeAText?: string;
  regimeBLabel?: string;
  regimeBText?: string;
  text?: string;
}

/**
 * Deterministically extracts COVER_BLOCK_INFO from LandingCoverPage.tsx.
 */
function extractCoverBlocks(): Array<{
  id: string;
  badge: string;
  title: string;
  synthesis: string;
  chapterLabel: string;
  figureLabel: string;
}> {
  const filePath = path.join(WORKSPACE, 'src', 'components', 'LandingCoverPage.tsx');
  const code = fs.readFileSync(filePath, 'utf8');
  const marker = 'const COVER_BLOCK_INFO';
  const startIdx = code.indexOf(marker);
  if (startIdx === -1) return [];
  const eqIdx = code.indexOf('= {', startIdx);
  if (eqIdx === -1) return [];
  const braceStart = code.indexOf('{', eqIdx);

  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let escaped = false;
  let braceEnd = -1;
  for (let i = braceStart; i < code.length; i++) {
    const ch = code[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (ch === '\\') {
      escaped = true;
      continue;
    }
    if (!inDouble && ch === "'") {
      inSingle = !inSingle;
      continue;
    }
    if (!inSingle && ch === '"') {
      inDouble = !inDouble;
      continue;
    }
    if (inSingle || inDouble) continue;
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        braceEnd = i;
        break;
      }
    }
  }
  if (braceEnd === -1) return [];
  const objLiteral = code.slice(braceStart, braceEnd + 1);
  const parsed = vm.runInNewContext(`(${objLiteral})`) as Record<string, any>;
  return Object.entries(parsed).map(([id, val]) => ({
    id,
    badge: val.badge || '',
    title: val.title || '',
    synthesis: val.synthesis || '',
    chapterLabel: val.chapterLabel || '',
    figureLabel: val.figureLabel || ''
  }));
}

/**
 * Deterministically extracts all interactive node inspection descriptions from InteractiveFigures.tsx.
 */
function extractFigureInspectionDetails(): Record<number, ExtractedNodeDetail[]> {
  const filePath = path.join(WORKSPACE, 'src', 'components', 'InteractiveFigures.tsx');
  const code = fs.readFileSync(filePath, 'utf8');

  const varToFig: Array<{ varName: string; figId: number }> = [
    { varName: 'fig1SelectedNode', figId: 1 },
    { varName: 'fig2Inspect', figId: 2 },
    { varName: 'fig3SelectedStage', figId: 3 },
    { varName: 'fig4ActiveNode', figId: 4 },
    { varName: 'fig5SelectedQuadrant', figId: 5 },
    { varName: 'fig6SelectedStep', figId: 6 },
    { varName: 'fig7SelectedNode', figId: 7 }
  ];

  const result: Record<number, ExtractedNodeDetail[]> = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: []
  };
  const seenKeys: Record<number, Set<string>> = {
    1: new Set(),
    2: new Set(),
    3: new Set(),
    4: new Set(),
    5: new Set(),
    6: new Set(),
    7: new Set()
  };

  // Match every inspection expression block inside JSX: { ... && ( ... ) } or { ... && '...' }
  for (const { varName, figId } of varToFig) {
    const pattern = new RegExp(`\\{(?:\\()?${varName}\\s*===\\s*'([^']+)'`, 'g');
    let m: RegExpExecArray | null;
    while ((m = pattern.exec(code)) !== null) {
      const key = m[1];
      const exprStart = m.index;
      // Extract the balanced {...} JSX expression
      let depth = 0;
      let inSingle = false;
      let inDouble = false;
      let escaped = false;
      let exprEnd = -1;
      for (let i = exprStart; i < code.length; i++) {
        const ch = code[i];
        if (escaped) {
          escaped = false;
          continue;
        }
        if (ch === '\\') {
          escaped = true;
          continue;
        }
        if (!inDouble && ch === "'") {
          inSingle = !inSingle;
          continue;
        }
        if (!inSingle && ch === '"') {
          inDouble = !inDouble;
          continue;
        }
        if (inSingle || inDouble) continue;
        if (ch === '{') depth++;
        else if (ch === '}') {
          depth--;
          if (depth === 0) {
            exprEnd = i;
            break;
          }
        }
      }
      if (exprEnd === -1) continue;
      const block = code.slice(exprStart + 1, exprEnd);
      const ampIdx = block.lastIndexOf('&&');
      if (ampIdx === -1) continue;
      const rhs = block.slice(ampIdx + 2).trim();
      // Only consider inspection text blocks (string literals or ternary of string literals, not JSX SVG groups)
      if (rhs.startsWith('<')) continue;
      if (seenKeys[figId].has(key)) continue;

      // Extract all single-quoted string literals inside rhs
      const strings: string[] = [];
      let strMatch: RegExpExecArray | null;
      const strRe = /'((?:[^'\\]|\\.)*)'/g;
      while ((strMatch = strRe.exec(rhs)) !== null) {
        strings.push(strMatch[1].replace(/\\'/g, "'"));
      }

      if (strings.length === 1 && (rhs.startsWith("'") || rhs.startsWith("('"))) {
        seenKeys[figId].add(key);
        result[figId].push({ key, text: strings[0] });
      } else if (rhs.includes('?') && rhs.includes(':') && strings.length >= 2) {
        // Check if ternary compares fig1Mode === 'vulnerable' or fig3ReflexiveActive
        const textStrings = strings.filter((s) => s.length > 40);
        if (textStrings.length >= 2) {
          seenKeys[figId].add(key);
          const isFig1 = rhs.includes('fig1Mode');
          const isFig3 = rhs.includes('fig3ReflexiveActive');
          result[figId].push({
            key,
            regimeALabel: isFig1
              ? 'Vulnerable regime'
              : isFig3
                ? 'Reflexive capture regime'
                : 'State A',
            regimeAText: textStrings[0],
            regimeBLabel: isFig1
              ? 'Resilient regime'
              : isFig3
                ? 'Democratic compromise regime'
                : 'State B',
            regimeBText: textStrings[1]
          });
        }
      }
    }
  }

  return result;
}

function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  const map: Record<string, string> = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.json': 'application/json',
    '.woff2': 'font/woff2'
  };
  return map[ext] || 'application/octet-stream';
}

function startStaticServer(rootDir: string): Promise<{ server: http.Server; baseUrl: string }> {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const reqPath = (req.url || '/').split('?')[0];
      let filePath = path.join(rootDir, reqPath === '/' ? 'index.html' : reqPath);
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(rootDir, 'index.html');
      }
      res.writeHead(200, { 'Content-Type': getMimeType(filePath) });
      fs.createReadStream(filePath).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address();
      const port = typeof addr === 'object' && addr ? addr.port : 4173;
      resolve({ server, baseUrl: `http://127.0.0.1:${port}` });
    });
  });
}

interface CapturedFigureSvgs {
  coverSvg: string;
  figures: Record<
    number,
    {
      primaryLabel: string;
      primarySvg: string;
      secondaryLabel?: string;
      secondarySvg?: string;
    }
  >;
}

async function captureAllVectorSvgs(browser: any, baseUrl: string): Promise<CapturedFigureSvgs> {
  const page = await browser.newPage({ viewport: { width: 1280, height: 960 } });

  // 1. Capture Cover SVG
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('svg[aria-label*="Interactive conceptual map"]');
  const coverSvg = await page.evaluate(() => {
    const svg = document.querySelector('svg[aria-label*="Interactive conceptual map"]');
    if (!svg) return '';
    svg.setAttribute('style', 'width: 100%; height: auto; display: block;');
    return svg.outerHTML;
  });

  const regimeConfig: Record<
    number,
    { primaryLabel: string; secondaryLabel?: string; secondaryButtonText?: string }
  > = {
    1: {
      primaryLabel: 'Regime 1: Endogenous Vulnerability and Hostile Coupling',
      secondaryLabel: 'Regime 2: Axiological Filter and Operational Closure',
      secondaryButtonText: 'Axiological Filter and Operational Closure'
    },
    2: {
      primaryLabel: 'Mode 1: Active Disguise and Semiotic Parasitism',
      secondaryLabel:
        'Mode 2: Deconstruction via Patristic Discernment (proairesis) and Historical Memory',
      secondaryButtonText: 'Mode 2: Deconstruction'
    },
    3: {
      primaryLabel: 'Regime 1: Binary Compression via Reflexive Control',
      secondaryLabel: 'Regime 2: Democratic Compromise and Ternary Mediation',
      secondaryButtonText: 'Democratic Compromise and Ternary Mediation'
    },
    4: {
      primaryLabel: 'Pathway 1: Conversion into Organic Modernity',
      secondaryLabel: 'Pathway 2: Slippage into Enantiodromia and Cynicism',
      secondaryButtonText: 'Slippage into Enantiodromia and Cynicism'
    },
    5: {
      primaryLabel: 'Trajectory 1: Collapse into Collective Self-Sabotage · Quadrant III',
      secondaryLabel: 'Trajectory 2: Transition to Intelligent Cooperation · Quadrant I',
      secondaryButtonText: 'Transition to Intelligent Cooperation'
    },
    6: {
      primaryLabel: 'Simulation A: Acute Shock without Co-Regulation (Track A Loop Dominance)',
      secondaryLabel: 'Simulation B: CERC Institutional Co-Regulation and Phase I (Track B Activation)',
      secondaryButtonText: 'Simulation: CERC Institutional Co-Regulation'
    },
    7: {
      primaryLabel: 'Integrated Sequential Protocol (Phase I → Phase II → Phase III)'
    }
  };

  const figures: CapturedFigureSvgs['figures'] = {};

  for (let figId = 1; figId <= 7; figId++) {
    await page.goto(`${baseUrl}/#figura-${figId}`, { waitUntil: 'networkidle' });
    await page.waitForSelector('svg[role="img"]');
    await page.waitForTimeout(150);

    const primarySvg = await page.evaluate(() => {
      const svg = document.querySelector('svg[role="img"]');
      if (!svg) return '';
      svg.setAttribute('class', 'w-full h-auto select-none block');
      svg.setAttribute('style', 'width: 100%; height: auto; display: block;');
      return svg.outerHTML;
    });

    const cfg = regimeConfig[figId];
    let secondarySvg: string | undefined;

    if (cfg.secondaryButtonText) {
      const btn = page.locator('button', { hasText: cfg.secondaryButtonText }).first();
      if ((await btn.count()) > 0) {
        await btn.click();
        await page.waitForTimeout(150);
        secondarySvg = await page.evaluate(() => {
          const svg = document.querySelector('svg[role="img"]');
          if (!svg) return '';
          svg.setAttribute('class', 'w-full h-auto select-none block');
          svg.setAttribute('style', 'width: 100%; height: auto; display: block;');
          return svg.outerHTML;
        });
      }
    }

    figures[figId] = {
      primaryLabel: cfg.primaryLabel,
      primarySvg,
      secondaryLabel: cfg.secondaryLabel,
      secondarySvg
    };
  }

  await page.close();
  return { coverSvg, figures };
}

const NODE_KEY_LABELS: Record<string, string> = {
  servicii: 'Layer A · Institutional System and Public Services',
  mediu: 'Layer A · Socioeconomic and Sociospatial Environment',
  alostazie: 'Layer B · Allostasis, Allostatic Load, and the Brain Triad',
  reactiv: 'Layer B · Reactive System 1 vs. Hijacked System 2',
  persona: 'Layer C · Mimetic Institutional Persona ("forms without substance") / Track A',
  fatalism: 'Layer C · Expression in the Cultural Unconscious',
  'filtru-moral': 'Layer C · Filter of Christian-Secular Moral Values',
  vector: 'External Cognitive Warfare Vector and Representation Vacuum',
  'sinteza-stanga': 'European Christian-Secular Synthesis (Imago Dei & Rule of Law)',
  'falsificare-ortodoxie': 'Falsification I · Russkii Mir Ethnophyletism',
  'falsificare-suveranitate': 'Falsification II · False Isolationist Sovereignism',
  'nucleu-antimir': 'Real Operative Core · The Antiworld (Antimir) and the Bobok State',
  'retele-spalare': 'Three-Tier Architecture of Information Laundering',
  subordonare: 'Strategic Finality · Imperial Subordination and Anomie',
  'primul-sistem': 'First Ethical System (Lefebvre)',
  'poluare-mad': 'Two-Stage Synthetic Pollution (RAG / MAD) and D1/D2 Striatal Capture',
  observare: 'Observation Phase (OODA)',
  orientare: 'Orientation Phase (John Boyd\x27s Schwerpunkt)',
  reflexiv: 'Second-Order Reflexive Control and Aberrant Precision-Weighting',
  decizie: 'Decision Phase (OODA)',
  actiune: 'Action Phase (OODA)',
  contagiune: 'Complex Contagion via Wide Bridges (Centola)',
  binar: 'Compression into the Fractured Binary System (Second Ethical System)',
  'umbra-bruta': 'Collective Shadow (Latent Resources)',
  memorie: 'Defensive Historical Memory',
  trickster: 'Ambivalence of the Trickster Archetype',
  'filtru-lege': 'First Filter (Layer A) · Impersonal Law and Islands of Operational Closure',
  'filtru-istorie': 'Second Filter (Layer B) · Critical Discernment and Historical Truth',
  'filtru-meta': 'Third Filter (Layer B) · Prefrontal Metacognitive Vigilance',
  'functie-transcendenta': 'Transcendent Function (Jung) on the Ego–Self Axis',
  modernitate: 'Organic Modernity and Trust',
  cooperare: 'Autonomous Institutional Cooperation',
  anomizare: 'Unfiltered Lower Pathway · Inability to Mourn, Projection, and Enantiodromia',
  I: 'Quadrant I (+X, +Y) · Intelligent Cooperation',
  II: 'Quadrant II (-X, +Y) · Vulnerable Citizens',
  IV: 'Quadrant IV (+X, -Y) · Extractive Elites and External Russian Catalyst',
  III: 'Quadrant III (-X, -Y) · Collective Self-Sabotage and Punitive Vote',
  bifurcatie: 'Single Bifurcation Node (Acute Stress and Polycrisis)',
  'punte-cerc': 'CDC CERC Institutional Co-Regulation Bridge and Phase I Measures',
  anxietate: 'Track A · Chronic Anxiety, dlPFC Inhibition, and Motivated Rationalization',
  nfcc: 'Track A · Need for Cognitive Closure (NFCC)',
  umbra: 'Track A · Collective Shadow, Puer Aeternus, and Basic Assumptions (Bion)',
  bucla_algoritmica: 'Track A · Algorithmic Feedback Loop and Self-Amplification (R)',
  b1: 'Track B (1) · Acceptance of Uncertainty (Negative Capability)',
  b2: 'Track B (2) · Reactivation of System 2 and Actively Open-Minded Thinking (Rank 2+)',
  b3: 'Track B (3) · Dissonance Tolerance and Integration of Trickster Ingenuity',
  b4: 'Track B (4) · Critical Discernment and the Work Group (Bion)',
  b5: 'Track B (5) · Sovereign Action and the Ego–Self Axis',
  trackA: 'Track A Synthesis · Closed-Loop Defensive Processing',
  trackB: 'Track B Synthesis · Deliberative Adaptive Processing',
  faza1: 'Phase I · Acute Triage (0–72h) and Structural Decompression (0–12 months)',
  'faza1-1': '1.1 Acute Triage 0–72h: CDC CERC, STIX/DISARM, and Technical DSA Measures',
  'faza1-2': '1.2 Blocking Illicit Financial Flows (Follow the Money, 24–72h)',
  'faza1-3': '1.3 Allostatic Decompression and Administrative Simplification (0–12 months)',
  poarta1: 'Causal Gate 1 · Unlocking dlPFC and the 3 Mechanisms of Premature Fact-Checking',
  faza2: 'Phase II · Reconstructing OODA Orientation (1–3 years)',
  'faza2-1': '2.1 Community Validation and Wide-Bridge Networks (1–3 years)',
  'faza2-2': '2.2 Prebunking and Consolidation on the Ebbinghaus Curve (1–3 years)',
  'faza2-3': '2.3 Christian-Secular Axiological Partnership (1–3 years)',
  poarta2: 'Causal Gate 2 · Civic Pressure in the "Narrow Corridor"',
  faza3: 'Phase III · Rule of Law, Polycentric Governance, and Individuation (3–10 years)',
  'faza3-1': '3.1 Operational Closure and Fiscal Isonomy (CCR 694/2015, CPF)',
  'faza3-2': '3.2 Polycentric Governance (Ostrom) and Cooperative Reform (Law 566/2004)',
  'faza3-3': '3.3 Collective Individuation and Dual Independent Audit (Court of Accounts & Art. 40 DSA)',
  fronton: 'Pediment · Synthesis of Organic Modernity and Democratic Sovereignty',
  fundament: 'Foundation · The 4 Determinants of the Lalonde–Dever Model'
};

function buildHtmlDocument(
  compiledCss: string,
  coverBlocks: ReturnType<typeof extractCoverBlocks>,
  figureNodes: Record<number, ExtractedNodeDetail[]>,
  svgs: CapturedFigureSvgs
): string {
  const conceptMap = new Map(GLOSSARY_CONCEPTS.map((c) => [c.id, c]));

  const renderFigureBlock = (figId: number) => {
    const meta = FIGURE_METADATA[figId];
    const svgPair = svgs.figures[figId];
    const nodes = figureNodes[figId] || [];
    if (!meta || !svgPair) return '';

    return `
      <div class="figure-block border-2 border-[#222426] bg-[#F6F5EE] my-5">
        <div class="svg-panel">
          <div class="px-4 py-2.5 border-b border-[#222426] bg-[#222426]/[0.04]">
            <div class="flex items-center gap-2 mb-0.5">
              <span class="bg-[#E5B822] text-[#222426] border border-[#222426] px-2 py-0.5 font-mono text-[10px] font-bold">
                FIGURE 0${meta.id}
              </span>
              <span class="text-[10px] font-mono text-[#6E7376]">${escapeHtml(meta.chapterRef)}</span>
            </div>
            <div class="font-bold text-[14px] text-[#222426]">${escapeHtml(meta.title)}</div>
            <div class="text-[11px] text-[#6E7376] mt-0.5">${escapeHtml(meta.subtitle)}</div>
          </div>

          <div class="p-3 bg-[#F6F5EE]">
            <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#222426] bg-[#222426]/[0.04] border border-[#8C9BA5] px-2.5 py-1 mb-2">
              ${escapeHtml(svgPair.primaryLabel)}
            </div>
            <div class="svg-wrapper border border-[#8C9BA5] p-2 bg-[#F6F5EE]">
              ${svgPair.primarySvg}
            </div>
          </div>
        </div>

        ${
          svgPair.secondarySvg && svgPair.secondaryLabel
            ? `
        <div class="px-3 pb-3 bg-[#F6F5EE]">
          <div class="svg-panel">
            <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#222426] bg-[#E5B822]/25 border border-[#222426] px-2.5 py-1 mb-2">
              ${escapeHtml(svgPair.secondaryLabel)}
            </div>
            <div class="svg-wrapper border border-[#222426] p-2 bg-[#F6F5EE]">
              ${svgPair.secondarySvg}
            </div>
          </div>
        </div>`
            : ''
        }

        <div class="border-t border-[#8C9BA5] px-4 py-3 text-[11.5px] leading-relaxed space-y-1.5 bg-[#F6F5EE]">
          <p class="text-[#222426]"><strong>Academic caption:</strong> ${escapeHtml(meta.caption)}</p>
          <p class="text-[#6E7376] text-[10.5px]"><strong>Methodological note (${escapeHtml(meta.chapterRef)}):</strong> ${escapeHtml(meta.methodologicalNote)}</p>
        </div>

        ${
          nodes.length > 0
            ? `
        <div class="border-t border-[#222426] px-4 py-3 bg-[#222426]/[0.025] space-y-2">
          <div class="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#222426]">
            Detailed description of interactive elements, nodes, and regimes in Figure ${meta.id}
          </div>
          <div class="space-y-1.5">
            ${nodes
              .map((n) => {
                const label = NODE_KEY_LABELS[n.key] || n.key;
                if (n.text) {
                  return `
                  <div class="node-card border border-[#8C9BA5] bg-[#F6F5EE] p-2.5 text-[10.5px] leading-relaxed">
                    <div class="font-bold text-[#222426] mb-0.5">${escapeHtml(label)}</div>
                    <div class="text-[#222426]">${escapeHtml(n.text)}</div>
                  </div>`;
                }
                return `
                  <div class="node-card border border-[#8C9BA5] bg-[#F6F5EE] p-2.5 text-[10.5px] leading-relaxed space-y-1">
                    <div class="font-bold text-[#222426]">${escapeHtml(label)}</div>
                    <div><span class="font-bold text-[#F01E1E]">[${escapeHtml(n.regimeALabel || 'A')}]</span> ${escapeHtml(n.regimeAText || '')}</div>
                    <div><span class="font-bold text-[#222426] bg-[#E5B822]/40 px-1">[${escapeHtml(n.regimeBLabel || 'B')}]</span> ${escapeHtml(n.regimeBText || '')}</div>
                  </div>`;
              })
              .join('')}
          </div>
        </div>`
            : ''
        }
      </div>
    `;
  };

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Diagnosis of Cognitive Warfare in Romania (Version 1.0) — Complete Edition</title>
  <style>
    ${compiledCss}

    @page {
      size: A4 portrait;
      margin: 18mm 14mm 18mm 14mm;
    }

    html, body {
      background-color: #F6F5EE !important;
      background-image: none !important;
      color: #222426 !important;
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      font-size: 11px;
      line-height: 1.55;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    .page-break {
      page-break-before: always;
      break-before: page;
    }

    .avoid-break, .node-card, .dual-row, .glossary-card, .bib-item, .exec-card, .regional-card, .svg-panel {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }
    thead {
      display: table-header-group;
    }
    tr {
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .svg-wrapper svg {
      width: 100% !important;
      height: auto !important;
      max-height: 185mm !important;
      display: block !important;
      min-width: 0 !important;
    }

    .cover-svg-wrapper svg {
      width: 100% !important;
      max-width: 115mm !important;
      height: auto !important;
      display: block !important;
      margin: 0 auto !important;
    }
  </style>
</head>
<body class="bg-[#F6F5EE] text-[#222426]">

  <!-- =======================================================================
       PAGE 1: MONOGRAPH COVER & SYNOPTIC BOARD
       ======================================================================= -->
  <section class="border-2 border-[#222426] p-6 bg-[#F6F5EE]">
    <div class="flex items-center justify-between border-b border-[#222426] pb-3 mb-5 text-[10px] font-mono text-[#6E7376]">
      <span class="px-2.5 py-0.5 border border-[#222426] text-[#222426] font-bold uppercase">
        SCIENTIFIC MONOGRAPH • VERSION 1.0 • COMPLETE EDITION
      </span>
      <span>19 sections · 7 diagrams · Tables & Matrix · 55 concepts · 152 references</span>
    </div>

    <div class="text-[10.5px] font-mono text-[#6E7376] mb-1.5">
      Three-layer causal architecture: Institutional Sociology · Neuroscience and Semiotics · Analytical Psychology
    </div>
    <h1 class="text-[26px] font-bold text-[#222426] leading-tight mb-2">
      Diagnosis of Cognitive Warfare in Romania
    </h1>
    <p class="text-[13px] text-[#222426] leading-relaxed mb-4 pb-4 border-b border-[#8C9BA5]">
      The Institutional, Neurocognitive, and Cultural Architecture of Societal Vulnerability and Resilience in the Face of Russian Information Operations and Putinist Ideology
    </p>

    <div class="space-y-2.5 text-[11px] text-[#222426] leading-relaxed mb-5">
      <p>
        This work demonstrates that the cognitive vulnerability of Romanian society is not a mere media literacy deficit, but the emergent outcome of the interaction across three causal tiers: the historical anomaly of "forms without substance", the chronic deficit of operational closure, the political representation vacuum, and the persistence of extractive institutions (Layer A); chronic allostatic load with switching to reactive System 1 in precarious environments, the hijacking of System 2 via motivated rationalization in urban bubbles, and the colonization of the Orientation phase of the OODA loop through reflexive control (Layer B); and the projection of the collective Shadow, enantiodromia, and slippage into collective self-sabotage under acute crisis conditions (Layer C).
      </p>
      <p class="text-[#6E7376]">
        This complete edition brings together in a single document: the cover synoptic board and layer descriptions, the full text of all 19 sections with dual-register decomposition, all 7 vector diagrams with both visual regimes and complete interactive node descriptions, the chapter executive summaries, Tables 1 and 2, the institutional responsibility matrix, the regional control group comparative analysis, the complete conceptual glossary, and the full bibliography.
      </p>
    </div>

    <div class="border border-[#222426] p-3 bg-[#F6F5EE] mb-4">
      <div class="text-[10px] font-mono text-[#6E7376] pb-2 mb-2 border-b border-[#8C9BA5] flex justify-between">
        <span>Cover Synoptic Board · Macro–Micro–Macro Model</span>
        <span>Fig. I–VII · Architecture Synthesis</span>
      </div>
      <div class="cover-svg-wrapper">
        ${svgs.coverSvg}
      </div>
    </div>

    <div class="page-break border border-[#222426] p-4 bg-[#F6F5EE] space-y-2">
      <div class="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#222426] border-b border-[#222426] pb-1.5">
        Elements of the Cover Synoptic Board
      </div>
      ${coverBlocks
        .map(
          (b) => `
      <div class="avoid-break border border-[#222426] bg-[#F6F5EE] p-2.5 text-[10.5px]">
        <div class="flex items-center justify-between gap-2 mb-0.5">
          <span class="font-mono font-bold text-[9.5px] px-1.5 py-0.5 bg-[#E5B822] text-[#222426] border border-[#222426]">${escapeHtml(b.badge)}</span>
          <span class="font-mono text-[9.5px] text-[#6E7376]">${escapeHtml(b.chapterLabel)} · ${escapeHtml(b.figureLabel)}</span>
        </div>
        <div class="font-bold text-[#222426] mb-0.5">${escapeHtml(b.title)}</div>
        <div class="text-[#222426] leading-relaxed">${escapeHtml(b.synthesis)}</div>
      </div>`
        )
        .join('')}
    </div>
  </section>

  <!-- =======================================================================
       CUPRINS GENERAL
       ======================================================================= -->
  <section class="page-break border border-[#222426] p-4 bg-[#F6F5EE]">
    <div class="border-b-2 border-[#222426] pb-1.5 mb-2.5">
      <div class="text-[9.5px] font-mono uppercase tracking-wider text-[#6E7376]">Complete Volume Structure</div>
      <h2 class="text-base font-bold text-[#222426]">General Table of Contents of the Monograph and Appendices</h2>
    </div>

    <div class="space-y-2.5 text-[10px] leading-snug">
      <div>
        <div class="font-bold text-[#222426] border-b border-[#222426] pb-0.5 mb-1">
          Part I · Full Text of the Monograph, Dual Registers, and Graphic Plates (Steps 01–19)
        </div>
        <div class="space-y-0.5">
          ${ALL_SUBCHAPTER_STEPS.map(
            (s) => `
            <div class="flex items-baseline justify-between gap-2 border-b border-[#8C9BA5]/40 py-0.5">
              <div>
                <span class="font-mono font-bold text-[#6E7376]">STEP ${String(s.stepNumber).padStart(2, '0')} · ${escapeHtml(s.code)}:</span>
                <span class="font-semibold text-[#222426]">${escapeHtml(s.title)}</span>
              </div>
              <span class="font-mono text-[9px] text-[#6E7376] shrink-0">Str. ${s.dominantStrata.join(', ')}${s.paragraphs.some((p) => p.startsWith('Figure ')) && s.linkedFigureId ? ` · Fig. ${s.linkedFigureId}` : ''}</span>
            </div>`
          ).join('')}
        </div>
      </div>

      <div>
        <div class="font-bold text-[#222426] border-b border-[#222426] pb-0.5 mb-0.5">
          Part II · Chapter Executive Summaries for Policymakers (Chapters 0–6)
        </div>
        <p class="text-[9.5px] text-[#6E7376]">${CHAPTER_EXECUTIVE_SUMMARIES.length} operational syntheses with public policy directives and implications.</p>
      </div>

      <div>
        <div class="font-bold text-[#222426] border-b border-[#222426] pb-0.5 mb-0.5">
          Part III · Synthesis Tables 1 and 2, Institutional Matrix, and Regional Control Group
        </div>
        <p class="text-[9.5px] text-[#6E7376]">
          Table 1 (${TABLE_1_DATA.length} dimensions × 3 layers) · Table 2 Lalonde–Dever (${TABLE_2_DATA.length} phases × 4 determinants) · Institutional Responsibility Matrix (${OPERATIONAL_PROTOCOL_TABLE.length} phases) · Regional Control Group (Romania, Estonia, Poland, Republic of Moldova).
        </p>
      </div>

      <div class="grid grid-cols-2 gap-3 pt-0.5">
        <div class="font-bold text-[#222426] border-b border-[#222426] pb-0.5">
          Part IV · Conceptual Glossary (${GLOSSARY_CONCEPTS.length} key concepts)
        </div>
        <div class="font-bold text-[#222426] border-b border-[#222426] pb-0.5">
          Part V · Complete Bibliography (${BIBLIOGRAPHY_DATA.length} works)
        </div>
      </div>
    </div>
  </section>

  <!-- =======================================================================
       PART I: ALL 19 FULL SECTIONS + DUAL REGISTERS + FIGURES 1–7
       ======================================================================= -->
  ${ALL_SUBCHAPTER_STEPS.map((step) => {
    const conceptsHtml = step.keyConceptIds
      .map((id) => conceptMap.get(id))
      .filter((c): c is NonNullable<typeof c> => Boolean(c))
      .map(
        (c) =>
          `<span class="inline-block px-2 py-0.5 text-[9.5px] border border-[#222426] bg-[#E5B822]/25 text-[#222426] font-semibold mr-1 mb-1">${escapeHtml(c.term)} (Layer ${c.stratum})</span>`
      )
      .join('');

    const dualHtml = step.dualRegister
      .map(
        (dr) => `
      <div class="dual-row grid grid-cols-2 gap-3 my-2">
        <div class="border border-[#222426] bg-[#F6F5EE]">
          <div class="border-b border-[#222426] px-2.5 py-1.5 bg-[#222426]/[0.05] text-[9.5px] font-mono font-bold uppercase text-[#222426]">
            ■ Theoretical Register · LAYER ${dr.stratum}
          </div>
          <div class="p-2.5 text-[10.5px] leading-relaxed">
            <div class="font-bold text-[#222426]">${escapeHtml(dr.theoreticalConcept)}</div>
            <div class="text-[9.5px] font-mono text-[#6E7376] mb-1">${escapeHtml(dr.theoreticalAuthor)}</div>
            <div>${escapeHtml(dr.theoreticalMechanism)}</div>
          </div>
        </div>
        <div class="border border-[#222426] bg-[#F6F5EE]">
          <div class="border-b border-[#222426] px-2.5 py-1.5 bg-[#222426]/[0.05] text-[9.5px] font-mono font-bold uppercase text-[#222426]">
            ${dr.systemicOutcome === 'tension' ? '■ Empirical Reality · Structural Vulnerability' : '■ Empirical Reality · Resilience Mechanism'}
          </div>
          <div class="p-2.5 text-[10.5px] leading-relaxed">
            ${escapeHtml(dr.empiricalReality)}
          </div>
        </div>
      </div>`
      )
      .join('');

    const paragraphsHtml = step.paragraphs
      .map((para, idx) => {
        if (para.startsWith('Figure ') && step.linkedFigureId) {
          return renderFigureBlock(step.linkedFigureId);
        }
        return `<p class="mb-3 text-[11.2px] leading-[1.68] text-[#222426] text-justify">${escapeHtml(para)}</p>`;
      })
      .join('');

    return `
    <article class="page-break space-y-4">
      <header class="border-b-2 border-[#222426] pb-3">
        <div class="flex items-center justify-between text-[10px] font-mono text-[#6E7376] mb-1">
          <span class="font-bold text-[#222426]">STEP ${String(step.stepNumber).padStart(2, '0')} / 19 · ${escapeHtml(step.chapterTitle)}</span>
          <span>Dominant layers: ${step.dominantStrata.join(', ')}</span>
        </div>
        <h2 class="text-lg font-bold text-[#222426] leading-snug">${escapeHtml(step.title)}</h2>
        ${step.subtitle ? `<p class="text-xs text-[#6E7376] mt-1">${escapeHtml(step.subtitle)}</p>` : ''}
      </header>

      <div class="avoid-break border border-[#222426] bg-[#E5B822]/15 p-3">
        <div class="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#222426] mb-1">
          Causal Synthesis and Structural Thesis
        </div>
        <p class="text-[10.8px] leading-relaxed text-[#222426]">${escapeHtml(step.summaryThesis)}</p>
      </div>

      <div>
        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6E7376] mb-1">
          Anatomy of Tension and Dual-Register Decomposition (Theoretical vs. Empirical)
        </div>
        ${dualHtml}
      </div>

      <div class="pt-2 border-t border-[#222426]">
        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6E7376] mb-2.5">
          Full Text of the Monograph Section
        </div>
        ${paragraphsHtml}
      </div>

      <footer class="avoid-break border-t border-[#8C9BA5] pt-2.5 space-y-2">
        ${
          conceptsHtml
            ? `<div><div class="text-[9.5px] font-mono font-bold text-[#6E7376] mb-1">Key Concepts in This Section:</div><div>${conceptsHtml}</div></div>`
            : ''
        }
        ${
          step.citedAuthorNames.length > 0
            ? `<div><div class="text-[9.5px] font-mono font-bold text-[#6E7376] mb-1">Authors and Works Cited in This Section:</div><div class="text-[10px] font-mono text-[#222426]">${step.citedAuthorNames.map(escapeHtml).join(' · ')}</div></div>`
            : ''
        }
      </footer>
    </article>`;
  }).join('')}

  <!-- =======================================================================
       PART II: CHAPTER EXECUTIVE SUMMARIES
       ======================================================================= -->
  <section class="page-break space-y-4">
    <div class="border-b-2 border-[#222426] pb-3">
      <div class="text-[10px] font-mono uppercase tracking-wider text-[#6E7376]">Part II · Executive Digest for Institutional Policymakers</div>
      <h2 class="text-xl font-bold text-[#222426]">Chapter Executive Summaries (Chapters 0–6)</h2>
    </div>

    ${CHAPTER_EXECUTIVE_SUMMARIES.map(
      (chap) => `
      <div class="exec-card border border-[#222426] bg-[#F6F5EE] p-3.5 space-y-2.5">
        <div class="border-b border-[#8C9BA5] pb-1.5 font-bold text-sm text-[#222426]">
          ${escapeHtml(chap.chapterTitle)}
        </div>
        <div class="space-y-2">
          ${chap.executiveSynthesis
            .map(
              (pt, idx) => `
            <div class="border border-[#8C9BA5] p-2.5 bg-[#F6F5EE] space-y-1">
              <div class="flex items-center justify-between gap-2 text-[10px] font-mono">
                <span class="font-bold text-[#222426]">Directive ${idx + 1}</span>
                <span class="px-1.5 py-0.5 border border-[#222426] bg-[#E5B822]/25 font-bold">${escapeHtml(pt.title)}</span>
              </div>
              <div class="font-bold text-[11px] text-[#222426]">${escapeHtml(pt.takeaway)}</div>
              <div class="text-[10.5px] text-[#222426] leading-relaxed">${escapeHtml(pt.implication)}</div>
            </div>`
            )
            .join('')}
        </div>
      </div>`
    ).join('')}
  </section>

  <!-- =======================================================================
       PART III: TABLE 1, TABLE 2, INSTITUTIONAL MATRIX & REGIONAL GROUP
       ======================================================================= -->
  <section class="page-break space-y-5">
    <div class="border-b-2 border-[#222426] pb-3">
      <div class="text-[10px] font-mono uppercase tracking-wider text-[#6E7376]">Part III · Matrix Syntheses and Comparative Analysis</div>
      <h2 class="text-xl font-bold text-[#222426]">Tables 1 and 2, Institutional Matrix, and Regional Control Group</h2>
    </div>

    <!-- TABELUL 1 -->
    <div>
      <h3 class="text-sm font-bold text-[#222426] mb-2">
        Table 1. Synthesis of the Upward Causal Architecture of the Institutional, Neurocognitive, and Cultural Diagnosis
      </h3>
      <table class="border border-[#222426] text-[10px] leading-relaxed">
        <thead>
          <tr class="bg-[#222426] text-[#F6F5EE]">
            <th class="p-2 border-r border-[#8C9BA5] text-left w-[18%]">Analytical Dimension</th>
            <th class="p-2 border-r border-[#8C9BA5] text-left w-[27%]">LAYER A · Institutional, Historical, and Sociological</th>
            <th class="p-2 border-r border-[#8C9BA5] text-left w-[27%]">LAYER B · Neurocognitive, Semiotic, and Axiological</th>
            <th class="p-2 text-left w-[28%]">LAYER C · Cultural Unconscious and Archetypal Dynamics</th>
          </tr>
        </thead>
        <tbody>
          ${TABLE_1_DATA.map(
            (r) => `
            <tr class="border-t border-[#8C9BA5] align-top">
              <td class="p-2 border-r border-[#8C9BA5] font-bold text-[#222426]">${escapeHtml(r.dimensionTitle)}</td>
              <td class="p-2 border-r border-[#8C9BA5] text-[#222426]">${escapeHtml(r.stratumA)}</td>
              <td class="p-2 border-r border-[#8C9BA5] text-[#222426]">${escapeHtml(r.stratumB)}</td>
              <td class="p-2 text-[#222426]">${escapeHtml(r.stratumC)}</td>
            </tr>`
          ).join('')}
        </tbody>
      </table>
    </div>

    <!-- TABELUL 2 -->
    <div class="page-break">
      <h3 class="text-[13px] font-bold text-[#222426] mb-1.5" style="break-after: avoid; page-break-after: avoid;">
        Table 2. Sequential Protocol for Reconstructing Cognitive and Institutional Resilience Structured on the Determinants of the Lalonde–Dever Model
      </h3>
      <table class="border border-[#222426] text-[7.9px] leading-[1.28]">
        <thead>
          <tr class="bg-[#222426] text-[#F6F5EE]">
            <th class="p-1 border-r border-[#8C9BA5] text-left w-[11%]">Phase and Horizon</th>
            <th class="p-1 border-r border-[#8C9BA5] text-left w-[16%]">Human Biology and Neurocognitive Reserve</th>
            <th class="p-1 border-r border-[#8C9BA5] text-left w-[20%]">Digital and Sociospatial Environment</th>
            <th class="p-1 border-r border-[#8C9BA5] text-left w-[16%]">Information Lifestyle and Axiology</th>
            <th class="p-1 text-left w-[37%]">Institutional and Constitutional System</th>
          </tr>
        </thead>
        <tbody>
          ${TABLE_2_DATA.map(
            (r) => `
            <tr class="border-t border-[#8C9BA5] align-top">
              <td class="p-1 border-r border-[#8C9BA5]">
                <div class="inline-block bg-[#E5B822] text-[#222426] border border-[#222426] font-mono font-bold px-1 py-0.5 mb-0.5">${escapeHtml(r.phaseCode)}</div>
                <div class="font-bold text-[#222426]">${escapeHtml(r.phaseSubtitle)}</div>
                <div class="font-mono text-[7.4px] text-[#6E7376] mt-0.5">${escapeHtml(r.horizon)}</div>
              </td>
              <td class="p-1 border-r border-[#8C9BA5]">${escapeHtml(r.humanBiology)}</td>
              <td class="p-1 border-r border-[#8C9BA5]">${escapeHtml(r.digitalAndSociospatial)}</td>
              <td class="p-1 border-r border-[#8C9BA5]">${escapeHtml(r.informationalLifestyle)}</td>
              <td class="p-1">${escapeHtml(r.institutionalSystem)}</td>
            </tr>`
          ).join('')}
        </tbody>
      </table>
    </div>

    <!-- MATRICEA RESPONSABILITĂȚILOR INSTITUȚIONALE -->
    <div class="page-break">
      <h3 class="text-sm font-bold text-[#222426] mb-2">
        Institutional Responsibility Matrix Across the Three Sequential Phases (Romania and the European Union)
      </h3>
      <table class="border border-[#222426] text-[8.8px] leading-[1.38]">
        <thead>
          <tr class="bg-[#222426] text-[#F6F5EE]">
            <th class="p-1.5 border-r border-[#8C9BA5] text-left w-[17%]">Phase and Horizon</th>
            <th class="p-1.5 border-r border-[#8C9BA5] text-left w-[22%]">Strategic and Neurocognitive Objective</th>
            <th class="p-1.5 border-r border-[#8C9BA5] text-left w-[38%]">Tactical, Legislative, and Algorithmic Actions</th>
            <th class="p-1.5 text-left w-[23%]">Responsible Institutions and Partners</th>
          </tr>
        </thead>
        <tbody>
          ${OPERATIONAL_PROTOCOL_TABLE.map(
            (r) => `
            <tr class="border-t border-[#8C9BA5] align-top">
              <td class="p-1.5 border-r border-[#8C9BA5]">
                <div class="inline-block bg-[#E5B822] text-[#222426] border border-[#222426] font-mono font-bold px-1.5 py-0.5 mb-1">${escapeHtml(r.phaseCode)}</div>
                <div class="font-bold text-[#222426]">${escapeHtml(r.phaseTitle)}</div>
                <div class="font-mono text-[8px] text-[#6E7376] mt-0.5">${escapeHtml(r.horizon)}</div>
              </td>
              <td class="p-1.5 border-r border-[#8C9BA5] font-medium">${escapeHtml(r.targetObjective)}</td>
              <td class="p-1.5 border-r border-[#8C9BA5]">${escapeHtml(r.concreteIntervention)}</td>
              <td class="p-1.5 font-mono text-[8.5px]">${escapeHtml(r.responsibleActors)}</td>
            </tr>`
          ).join('')}
        </tbody>
      </table>
    </div>

    <!-- GRUPUL DE CONTROL REGIONAL -->
    <div class="page-break space-y-3">
      <h3 class="text-sm font-bold text-[#222426]">
        Systematic Comparison of Romania with the Regional Control Group (Estonia, Poland, Republic of Moldova) · Subchapter 2.3
      </h3>
      <div class="space-y-3">
        ${REGIONAL_CONTROL_GROUP.map(
          (c) => `
          <div class="regional-card border-2 ${c.statusType === 'tension' ? 'border-[#F01E1E]' : 'border-[#222426]'} p-3 bg-[#F6F5EE] space-y-1.5 text-[10.5px] leading-relaxed">
            <div class="flex items-center justify-between border-b border-[#8C9BA5] pb-1">
              <span class="font-bold text-sm text-[#222426]">${escapeHtml(c.country)}</span>
              <span class="font-mono text-[9.5px] px-2 py-0.5 border ${c.statusType === 'tension' ? 'border-[#F01E1E] text-[#F01E1E]' : 'border-[#222426] bg-[#E5B822]/30 text-[#222426]'} font-bold">
                ${escapeHtml(c.roleInModel)}
              </span>
            </div>
            <div><strong>Russian Vector Exposure Profile:</strong> ${escapeHtml(c.exposureProfile)}</div>
            <div><strong>Layer A · Institutional Architecture:</strong> ${escapeHtml(c.stratumA)}</div>
            <div><strong>Layer B · Neurocognitive Preparedness and Information Defense:</strong> ${escapeHtml(c.stratumB)}</div>
            <div><strong>Layer C · Cultural Unconscious and Ego–Self Axis:</strong> ${escapeHtml(c.stratumC)}</div>
            <div class="p-2 border ${c.statusType === 'tension' ? 'border-[#F01E1E] bg-[#F01E1E]/10' : 'border-[#222426] bg-[#E5B822]/20'}">
              <strong>Demonstrated Causal Conclusion:</strong> ${escapeHtml(c.strategicLesson)}
            </div>
          </div>`
        ).join('')}
      </div>
    </div>
  </section>

  <!-- =======================================================================
       PART IV: COMPLETE CONCEPTUAL GLOSSARY (55 KEY CONCEPTS)
       ======================================================================= -->
  <section class="page-break space-y-3">
    <div class="border-b-2 border-[#222426] pb-3">
      <div class="text-[10px] font-mono uppercase tracking-wider text-[#6E7376]">Part IV · Interdisciplinary Conceptual Apparatus</div>
      <h2 class="text-xl font-bold text-[#222426]">Complete Theoretical Glossary (${GLOSSARY_CONCEPTS.length} Key Concepts)</h2>
    </div>

    <div class="space-y-2.5">
      ${GLOSSARY_CONCEPTS.map(
        (g, idx) => `
        <div class="glossary-card border border-[#222426] bg-[#F6F5EE] p-3 text-[10.5px] leading-relaxed">
          <div class="flex items-center justify-between gap-2 border-b border-[#8C9BA5] pb-1 mb-1 text-[9.5px] font-mono">
            <span class="text-[#6E7376]">#${String(idx + 1).padStart(2, '0')} · Layer ${g.stratum} · ${escapeHtml(g.domain)}</span>
            <span class="font-bold ${
              g.polarity === 'tension'
                ? 'text-[#F01E1E]'
                : g.polarity === 'synthesis'
                  ? 'text-[#222426] bg-[#E5B822]/35 px-1.5 border border-[#222426]'
                  : 'text-[#6E7376]'
            }">
              ${g.polarity === 'tension' ? 'Vulnerability and Tension' : g.polarity === 'synthesis' ? 'Resilience and Synthesis' : 'Analytical Framework'}
            </span>
          </div>
          <div class="font-bold text-xs text-[#222426]">${escapeHtml(g.term)}</div>
          <div class="text-[9.5px] font-mono text-[#6E7376] mb-1">Theoretical References: ${escapeHtml(g.authors)}</div>
          <p class="text-[#222426] mb-1.5">${escapeHtml(g.definition)}</p>
          <div class="p-2 border ${g.polarity === 'tension' ? 'border-[#F01E1E] bg-[#F01E1E]/5' : 'border-[#222426] bg-[#E5B822]/15'} text-[10px]">
            <span class="font-mono font-bold">Function in the Monograph Architecture: </span>${escapeHtml(g.monographContext)}
          </div>
        </div>`
      ).join('')}
    </div>
  </section>

  <!-- =======================================================================
       PART V: COMPLETE APA 7TH BIBLIOGRAPHY (152 WORKS)
       ======================================================================= -->
  <section class="page-break space-y-3">
    <div class="border-b-2 border-[#222426] pb-3">
      <div class="text-[10px] font-mono uppercase tracking-wider text-[#6E7376]">Part V · Verified Academic Sources · APA 7th Edition</div>
      <h2 class="text-xl font-bold text-[#222426]">Complete Bibliography (${BIBLIOGRAPHY_DATA.length} works)</h2>
    </div>

    <div class="border border-[#222426] divide-y divide-[#8C9BA5] bg-[#F6F5EE]">
      ${BIBLIOGRAPHY_DATA.map(
        (b, idx) => `
        <div class="bib-item p-2.5 text-[10.5px] leading-relaxed">
          <div class="flex items-center justify-between text-[9.5px] font-mono text-[#6E7376] mb-0.5">
            <span>[${idx + 1}] ${escapeHtml(b.authors)} (${escapeHtml(b.year)})</span>
            <span>${escapeHtml(b.domain)}</span>
          </div>
          <p class="text-[#222426] pl-4 -indent-4">${escapeHtml(b.fullCitation)}</p>
        </div>`
      ).join('')}
    </div>
  </section>

</body>
</html>`;
}

async function main() {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error('Directorul dist/ nu există. Rulează `npm run build` înainte de export.');
  }

  const assetsDir = path.join(DIST_DIR, 'assets');
  const cssFile = fs.readdirSync(assetsDir).find((f) => f.endsWith('.css'));
  if (!cssFile) {
    throw new Error('Fișierul CSS compilat din dist/assets nu a fost găsit.');
  }
  const compiledCss = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');

  console.log('1. Extragere structură copertă și detalii noduri din codul sursă...');
  const coverBlocks = extractCoverBlocks();
  const figureNodes = extractFigureInspectionDetails();
  for (let i = 1; i <= 7; i++) {
    console.log(`   -> Figura ${i}: ${figureNodes[i].length} descrieri de noduri/regimuri extrase.`);
  }

  console.log('2. Pornire server static și capturare diagrame SVG vectoriale cu Playwright...');
  const { server, baseUrl } = await startStaticServer(DIST_DIR);
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });

  try {
    const svgs = await captureAllVectorSvgs(browser, baseUrl);
    console.log('   -> Toate planșele SVG (Copertă + Figurile 1–7 cu regimurile lor) au fost capturate.');

    console.log('3. Asamblare HTML complet al monografiei...');
    const html = buildHtmlDocument(compiledCss, coverBlocks, figureNodes, svgs);

    console.log('4. Randare PDF A4 cu Chromium...');
    const pdfPage = await browser.newPage();
    await pdfPage.setContent(html, { waitUntil: 'networkidle' });

    fs.mkdirSync(path.dirname(PUBLIC_PDF_PATH), { recursive: true });
    await pdfPage.pdf({
      path: PUBLIC_PDF_PATH,
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="width:100%; font-family: Inter, sans-serif; font-size: 7.5pt; color: #6E7376; padding: 0 14mm; display: flex; justify-content: space-between; border-bottom: 0.5pt solid #8C9BA5; padding-bottom: 2mm;">
          <span>Diagnosis of Cognitive Warfare in Romania (Version 1.0)</span>
          <span>Complete Scientific Monograph</span>
        </div>`,
      footerTemplate: `
        <div style="width:100%; font-family: Inter, sans-serif; font-size: 7.5pt; color: #6E7376; padding: 0 14mm; display: flex; justify-content: space-between; border-top: 0.5pt solid #8C9BA5; padding-top: 2mm;">
          <span>Complete Edition · Text, Diagrams, Tables, Glossary, and Bibliography</span>
          <span>Page <span class="pageNumber"></span> / <span class="totalPages"></span></span>
        </div>`,
      margin: {
        top: '18mm',
        bottom: '18mm',
        left: '14mm',
        right: '14mm'
      }
    });

    await pdfPage.close();

    // Copy to artifact directory as well
    if (fs.existsSync(path.dirname(ARTIFACT_PDF_PATH))) {
      fs.copyFileSync(PUBLIC_PDF_PATH, ARTIFACT_PDF_PATH);
    }

    const stats = fs.statSync(PUBLIC_PDF_PATH);
    console.log(`=====================================================`);
    console.log(`PDF GENERAT CU SUCCES!`);
    console.log(`Fișier public: ${PUBLIC_PDF_PATH}`);
    console.log(`Dimensiune: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`=====================================================`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

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
              ? 'Regim vulnerabil'
              : isFig3
                ? 'Regim de capturare reflexivă'
                : 'Starea A',
            regimeAText: textStrings[0],
            regimeBLabel: isFig1
              ? 'Regim rezilient'
              : isFig3
                ? 'Regim de compromis democratic'
                : 'Starea B',
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
  await page.waitForSelector('svg[aria-label*="Harta conceptuală"]');
  const coverSvg = await page.evaluate(() => {
    const svg = document.querySelector('svg[aria-label*="Harta conceptuală"]');
    if (!svg) return '';
    svg.setAttribute('style', 'width: 100%; height: auto; display: block;');
    return svg.outerHTML;
  });

  const regimeConfig: Record<
    number,
    { primaryLabel: string; secondaryLabel?: string; secondaryButtonText?: string }
  > = {
    1: {
      primaryLabel: 'Regim 1: Vulnerabilitate endogenă și cuplare ostilă',
      secondaryLabel: 'Regim 2: Filtru axiologic și închidere operațională',
      secondaryButtonText: 'Filtru axiologic și închidere operațională'
    },
    2: {
      primaryLabel: 'Mod 1: Disimulare și parazitare semiotică activă',
      secondaryLabel:
        'Mod 2: Deconstrucție prin discernământ patristic (proairesis) și memorie istorică',
      secondaryButtonText: 'Mod 2: Deconstrucție'
    },
    3: {
      primaryLabel: 'Regim 1: Compresie binară prin control reflexiv',
      secondaryLabel: 'Regim 2: Compromis democratic și mediere ternară',
      secondaryButtonText: 'Compromis democratic și mediere ternară'
    },
    4: {
      primaryLabel: 'Traseu 1: Conversie în modernitate organică',
      secondaryLabel: 'Traseu 2: Alunecare în enantiodromie și cinism',
      secondaryButtonText: 'Alunecare în enantiodromie și cinism'
    },
    5: {
      primaryLabel: 'Traiectorie 1: Prăbușire în autosabotaj colectiv · Cadranul III',
      secondaryLabel: 'Traiectorie 2: Tranziție spre cooperare inteligentă · Cadranul I',
      secondaryButtonText: 'Tranziție spre cooperare inteligentă'
    },
    6: {
      primaryLabel: 'Simulare A: Șoc acut fără coreglare (Dominanța buclei Track A)',
      secondaryLabel: 'Simulare B: Coreglare instituțională CERC și Faza I (Activarea Track B)',
      secondaryButtonText: 'Simulare: Coreglare instituțională CERC'
    },
    7: {
      primaryLabel: 'Protocolul secvențial integrat (Faza I → Faza II → Faza III)'
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
  servicii: 'Stratul A · Sistemul instituțional și serviciile publice',
  mediu: 'Stratul A · Mediul socioeconomic și sociospațial',
  alostazie: 'Stratul B · Alostazia, uzura alostatică și triada cerebrală',
  reactiv: 'Stratul B · Sistemul 1 reactiv vs. Sistemul 2 deturnat',
  persona: 'Stratul C · Persona instituțională mimetică („forme fără fond”) / Track A',
  fatalism: 'Stratul C · Expresia în inconștientul cultural',
  'filtru-moral': 'Stratul C · Filtrul valorilor morale creștin-seculare',
  vector: 'Vectorul extern de război cognitiv și vidul de reprezentare',
  'sinteza-stanga': 'Sinteza creștin-seculară europeană (Imago Dei & Statul de drept)',
  'falsificare-ortodoxie': 'Falsificarea I · Etnofiletismul Russkii Mir',
  'falsificare-suveranitate': 'Falsificarea II · Falsul suveranism izolaționist',
  'nucleu-antimir': 'Nucleul operativ real · Antilumea (Antimir) și starea Bobok',
  'retele-spalare': 'Arhitectura pe 3 paliere a reciclării informaționale (Information Laundering)',
  subordonare: 'Finalitatea strategică · Subordonarea imperială și anomia',
  'primul-sistem': 'Primul sistem etic (Lefebvre)',
  'poluare-mad': 'Poluarea sintetică în două stadii (RAG / MAD) și capturarea striatală D1/D2',
  observare: 'Faza de Observare (OODA)',
  orientare: 'Faza de Orientare (Schwerpunkt-ul lui John Boyd)',
  reflexiv: 'Controlul reflexiv de rang secund și aberrant precision-weighting',
  decizie: 'Faza de Decizie (OODA)',
  actiune: 'Faza de Acțiune (OODA)',
  contagiune: 'Contagiunea complexă prin punți largi (Centola)',
  binar: 'Compresia în sistemul binar fracturat (al doilea sistem etic)',
  'umbra-bruta': 'Umbra colectivă (resurse latente)',
  memorie: 'Memoria istorică defensivă',
  trickster: 'Ambivalența arhetipului Tricksterului',
  'filtru-lege': 'Primul filtru (Stratul A) · Legea impersonală și insulele de închidere operațională',
  'filtru-istorie': 'Al doilea filtru (Stratul B) · Discernământul critic și adevărul istoric',
  'filtru-meta': 'Al treilea filtru (Stratul B) · Vigilența metacognitivă prefrontală',
  'functie-transcendenta': 'Funcția transcendentă (Jung) pe axa Ego–Sine',
  modernitate: 'Modernitate organică și încredere',
  cooperare: 'Cooperare instituțională autonomă',
  anomizare: 'Traseul inferior fără filtru · Incapacitate de doliu, proiecție și enantiodromie',
  I: 'Cadranul I (+X, +Y) · Cooperare inteligentă',
  II: 'Cadranul II (-X, +Y) · Cetățeni vulnerabili',
  IV: 'Cadranul IV (+X, -Y) · Elite extractive și catalizator extern rus',
  III: 'Cadranul III (-X, -Y) · Autosabotaj colectiv și vot punitiv',
  bifurcatie: 'Nodul unic de bifurcație (stres acut și policriză)',
  'punte-cerc': 'Puntea de coreglare instituțională CDC CERC și măsurile Fazei I',
  anxietate: 'Track A · Anxietatea cronică, inhibiția dlPFC și raționalizarea motivată',
  nfcc: 'Track A · Nevoia de închidere cognitivă (NFCC)',
  umbra: 'Track A · Umbra colectivă, Puer Aeternus și ipotezele de bază (Bion)',
  bucla_algoritmica: 'Track A · Bucla de feedback algoritmic și autoamplificarea (R)',
  b1: 'Track B (1) · Acceptarea incertitudinii (capacitatea negativă)',
  b2: 'Track B (2) · Reactivarea Sistemului 2 și gândirea activ deschisă (Rang 2+)',
  b3: 'Track B (3) · Toleranța disonanței și integrarea ingeniozității Trickster',
  b4: 'Track B (4) · Discernământul critic și Grupul de Lucru (Bion)',
  b5: 'Track B (5) · Acțiunea suverană și Axa Ego–Sine',
  trackA: 'Sinteză Track A · Procesare defensivă în buclă închisă',
  trackB: 'Sinteză Track B · Procesare adaptativă deliberativă',
  faza1: 'Faza I · Triaj acut (0–72h) și decompresie structurală (0–12 luni)',
  'faza1-1': '1.1 Triaj acut 0–72h: CDC CERC, STIX/DISARM și măsuri tehnice DSA',
  'faza1-2': '1.2 Blocarea fluxurilor financiare ilicite (Follow the Money, 24–72h)',
  'faza1-3': '1.3 Decompresie alostatică și simplificare administrativă (0–12 luni)',
  poarta1: 'Poarta cauzală 1 · Deblocarea dlPFC și cele 3 mecanisme ale fact-checking-ului prematur',
  faza2: 'Faza II · Reconstrucția Orientării OODA (1–3 ani)',
  'faza2-1': '2.1 Validare comunitară și rețele cu punți largi (1–3 ani)',
  'faza2-2': '2.2 Prebunking și consolidare pe curba Ebbinghaus (1–3 ani)',
  'faza2-3': '2.3 Parteneriat axiologic creștin-secular (1–3 ani)',
  poarta2: 'Poarta cauzală 2 · Presiunea civică în „Coridorul îngust”',
  faza3: 'Faza III · Stat de drept, guvernanță policentrică și individuare (3–10 ani)',
  'faza3-1': '3.1 Închidere operațională și isonomie fiscală (CCR 694/2015, CPF)',
  'faza3-2': '3.2 Guvernanță policentrică (Ostrom) și reforma cooperativelor (Legea 566/2004)',
  'faza3-3': '3.3 Individuare colectivă și dublu audit independent (Curtea de Conturi & art. 40 DSA)',
  fronton: 'Fronton · Sinteza modernității organice și a suveranității democratice',
  fundament: 'Fundament · Cei 4 determinanți ai modelului Lalonde–Dever'
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
                FIGURA 0${meta.id}
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
          <p class="text-[#222426]"><strong>Legendă academică:</strong> ${escapeHtml(meta.caption)}</p>
          <p class="text-[#6E7376] text-[10.5px]"><strong>Notă metodologică (${escapeHtml(meta.chapterRef)}):</strong> ${escapeHtml(meta.methodologicalNote)}</p>
        </div>

        ${
          nodes.length > 0
            ? `
        <div class="border-t border-[#222426] px-4 py-3 bg-[#222426]/[0.025] space-y-2">
          <div class="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#222426]">
            Descrierea detaliată a elementelor, nodurilor și regimurilor interactive din Figura ${meta.id}
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
<html lang="ro">
<head>
  <meta charset="UTF-8" />
  <title>Diagnosticul războiului cognitiv în România (Versiunea 1.0) — Ediție integrală</title>
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
       PAGINA 1: COPERTA MONOGRAFIEI & PLANȘA SINOPTICĂ
       ======================================================================= -->
  <section class="border-2 border-[#222426] p-6 bg-[#F6F5EE]">
    <div class="flex items-center justify-between border-b border-[#222426] pb-3 mb-5 text-[10px] font-mono text-[#6E7376]">
      <span class="px-2.5 py-0.5 border border-[#222426] text-[#222426] font-bold uppercase">
        MONOGRAFIE ȘTIINȚIFICĂ • VERSIUNEA 1.0 • EDIȚIE INTEGRALĂ
      </span>
      <span>19 secțiuni · 7 diagrame · Tabele & Matrice · 55 concepte · 152 referințe</span>
    </div>

    <div class="text-[10.5px] font-mono text-[#6E7376] mb-1.5">
      Arhitectura cauzală pe trei straturi: Sociologie instituțională · Neuroștiințe și semiotică · Psihologie analitică
    </div>
    <h1 class="text-[26px] font-bold text-[#222426] leading-tight mb-2">
      Diagnosticul războiului cognitiv în România
    </h1>
    <p class="text-[13px] text-[#222426] leading-relaxed mb-4 pb-4 border-b border-[#8C9BA5]">
      Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale în fața operațiunilor informaționale ruse și a ideologiei putiniste
    </p>

    <div class="space-y-2.5 text-[11px] text-[#222426] leading-relaxed mb-5">
      <p>
        Această lucrare demonstrează că vulnerabilitatea cognitivă a societății românești nu reprezintă un simplu deficit de alfabetizare media, ci rezultatul emergent al interacțiunii dintre trei paliere cauzale: anomalia istorică a „formelor fără fond”, deficitul cronic de închidere operațională, vidul de reprezentare politică și persistența instituțiilor extractive (Stratul A); uzura alostatică cronică cu comutare pe Sistemul 1 reactiv în mediile afectate de precaritate, deturnarea Sistemului 2 prin raționalizare motivată în bulele urbane și colonizarea fazei de Orientare din bucla OODA prin control reflexiv (Stratul B); respectiv proiecția Umbrei colective, enantiodromia și alunecarea în autosabotaj colectiv în condiții de criză acută (Stratul C).
      </p>
      <p class="text-[#6E7376]">
        Ediția completă de față reunește într-un singur document: planșa sinoptică de copertă și descrierile straturilor, textul integral al celor 19 secțiuni cu descompunerea pe două registre, toate cele 7 diagrame vectoriale cu ambele regimuri vizuale și descrierile integrale ale nodurilor interactive, sintezele executive de capitol, Tabelele 1 și 2, matricea instituțională, analiza comparativă a grupului de control regional, glosarul conceptual complet și bibliografia integrală.
      </p>
    </div>

    <div class="border border-[#222426] p-3 bg-[#F6F5EE] mb-4">
      <div class="text-[10px] font-mono text-[#6E7376] pb-2 mb-2 border-b border-[#8C9BA5] flex justify-between">
        <span>Planșa sinoptică de copertă · Modelul Macro–Micro–Macro</span>
        <span>Fig. I–VII · Sinteza arhitecturii</span>
      </div>
      <div class="cover-svg-wrapper">
        ${svgs.coverSvg}
      </div>
    </div>

    <div class="page-break border border-[#222426] p-4 bg-[#F6F5EE] space-y-2">
      <div class="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#222426] border-b border-[#222426] pb-1.5">
        Elementele planșei sinoptice de copertă
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
      <div class="text-[9.5px] font-mono uppercase tracking-wider text-[#6E7376]">Structura completă a volumului</div>
      <h2 class="text-base font-bold text-[#222426]">Cuprins general al monografiei și anexelor</h2>
    </div>

    <div class="space-y-2.5 text-[10px] leading-snug">
      <div>
        <div class="font-bold text-[#222426] border-b border-[#222426] pb-0.5 mb-1">
          Partea I · Textul integral al monografiei, registrele duale și planșele grafice (Pașii 01–19)
        </div>
        <div class="space-y-0.5">
          ${ALL_SUBCHAPTER_STEPS.map(
            (s) => `
            <div class="flex items-baseline justify-between gap-2 border-b border-[#8C9BA5]/40 py-0.5">
              <div>
                <span class="font-mono font-bold text-[#6E7376]">PASUL ${String(s.stepNumber).padStart(2, '0')} · ${escapeHtml(s.code)}:</span>
                <span class="font-semibold text-[#222426]">${escapeHtml(s.title)}</span>
              </div>
              <span class="font-mono text-[9px] text-[#6E7376] shrink-0">Str. ${s.dominantStrata.join(', ')}${s.paragraphs.some((p) => p.startsWith('Figura ')) && s.linkedFigureId ? ` · Fig. ${s.linkedFigureId}` : ''}</span>
            </div>`
          ).join('')}
        </div>
      </div>

      <div>
        <div class="font-bold text-[#222426] border-b border-[#222426] pb-0.5 mb-0.5">
          Partea a II-a · Sinteze executive de capitol pentru decidenți (Capitolele 0–6)
        </div>
        <p class="text-[9.5px] text-[#6E7376]">${CHAPTER_EXECUTIVE_SUMMARIES.length} sinteze operaționale cu directive și implicații de politici publice.</p>
      </div>

      <div>
        <div class="font-bold text-[#222426] border-b border-[#222426] pb-0.5 mb-0.5">
          Partea a III-a · Tabelele de sinteză 1 și 2, Matricea instituțională și Grupul de control regional
        </div>
        <p class="text-[9.5px] text-[#6E7376]">
          Tabelul 1 (${TABLE_1_DATA.length} dimensiuni × 3 straturi) · Tabelul 2 Lalonde–Dever (${TABLE_2_DATA.length} faze × 4 determinanți) · Matricea responsabilităților instituționale (${OPERATIONAL_PROTOCOL_TABLE.length} faze) · Grupul de control regional (România, Estonia, Polonia, Republica Moldova).
        </p>
      </div>

      <div class="grid grid-cols-2 gap-3 pt-0.5">
        <div class="font-bold text-[#222426] border-b border-[#222426] pb-0.5">
          Partea a IV-a · Glosar conceptual (${GLOSSARY_CONCEPTS.length} concepte-cheie)
        </div>
        <div class="font-bold text-[#222426] border-b border-[#222426] pb-0.5">
          Partea a V-a · Bibliografie integrală (${BIBLIOGRAPHY_DATA.length} lucrări)
        </div>
      </div>
    </div>
  </section>

  <!-- =======================================================================
       PARTEA I: CELE 19 SECȚIUNI INTEGRALE + REGISTRE DUALE + FIGURILE 1–7
       ======================================================================= -->
  ${ALL_SUBCHAPTER_STEPS.map((step) => {
    const conceptsHtml = step.keyConceptIds
      .map((id) => conceptMap.get(id))
      .filter((c): c is NonNullable<typeof c> => Boolean(c))
      .map(
        (c) =>
          `<span class="inline-block px-2 py-0.5 text-[9.5px] border border-[#222426] bg-[#E5B822]/25 text-[#222426] font-semibold mr-1 mb-1">${escapeHtml(c.term)} (Stratul ${c.stratum})</span>`
      )
      .join('');

    const dualHtml = step.dualRegister
      .map(
        (dr) => `
      <div class="dual-row grid grid-cols-2 gap-3 my-2">
        <div class="border border-[#222426] bg-[#F6F5EE]">
          <div class="border-b border-[#222426] px-2.5 py-1.5 bg-[#222426]/[0.05] text-[9.5px] font-mono font-bold uppercase text-[#222426]">
            ■ Registrul teoretic · STRATUL ${dr.stratum}
          </div>
          <div class="p-2.5 text-[10.5px] leading-relaxed">
            <div class="font-bold text-[#222426]">${escapeHtml(dr.theoreticalConcept)}</div>
            <div class="text-[9.5px] font-mono text-[#6E7376] mb-1">${escapeHtml(dr.theoreticalAuthor)}</div>
            <div>${escapeHtml(dr.theoreticalMechanism)}</div>
          </div>
        </div>
        <div class="border border-[#222426] bg-[#F6F5EE]">
          <div class="border-b border-[#222426] px-2.5 py-1.5 bg-[#222426]/[0.05] text-[9.5px] font-mono font-bold uppercase text-[#222426]">
            ${dr.systemicOutcome === 'tension' ? '■ Realitatea empirică · Vulnerabilitate structurală' : '■ Realitatea empirică · Mecanism de reziliență'}
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
        if (para.startsWith('Figura ') && step.linkedFigureId) {
          return renderFigureBlock(step.linkedFigureId);
        }
        return `<p class="mb-3 text-[11.2px] leading-[1.68] text-[#222426] text-justify">${escapeHtml(para)}</p>`;
      })
      .join('');

    return `
    <article class="page-break space-y-4">
      <header class="border-b-2 border-[#222426] pb-3">
        <div class="flex items-center justify-between text-[10px] font-mono text-[#6E7376] mb-1">
          <span class="font-bold text-[#222426]">PASUL ${String(step.stepNumber).padStart(2, '0')} / 19 · ${escapeHtml(step.chapterTitle)}</span>
          <span>Straturi dominante: ${step.dominantStrata.join(', ')}</span>
        </div>
        <h2 class="text-lg font-bold text-[#222426] leading-snug">${escapeHtml(step.title)}</h2>
        ${step.subtitle ? `<p class="text-xs text-[#6E7376] mt-1">${escapeHtml(step.subtitle)}</p>` : ''}
      </header>

      <div class="avoid-break border border-[#222426] bg-[#E5B822]/15 p-3">
        <div class="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#222426] mb-1">
          Sinteză cauzală și teză structurală
        </div>
        <p class="text-[10.8px] leading-relaxed text-[#222426]">${escapeHtml(step.summaryThesis)}</p>
      </div>

      <div>
        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6E7376] mb-1">
          Anatomia tensiunii și descompunerea pe două registre (Teoretic vs. Empiric)
        </div>
        ${dualHtml}
      </div>

      <div class="pt-2 border-t border-[#222426]">
        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6E7376] mb-2.5">
          Textul integral al secțiunii din monografie
        </div>
        ${paragraphsHtml}
      </div>

      <footer class="avoid-break border-t border-[#8C9BA5] pt-2.5 space-y-2">
        ${
          conceptsHtml
            ? `<div><div class="text-[9.5px] font-mono font-bold text-[#6E7376] mb-1">Concepte-cheie în această secțiune:</div><div>${conceptsHtml}</div></div>`
            : ''
        }
        ${
          step.citedAuthorNames.length > 0
            ? `<div><div class="text-[9.5px] font-mono font-bold text-[#6E7376] mb-1">Autori și lucrări citate în secțiune:</div><div class="text-[10px] font-mono text-[#222426]">${step.citedAuthorNames.map(escapeHtml).join(' · ')}</div></div>`
            : ''
        }
      </footer>
    </article>`;
  }).join('')}

  <!-- =======================================================================
       PARTEA A II-A: SINTEZE EXECUTIVE DE CAPITOL
       ======================================================================= -->
  <section class="page-break space-y-4">
    <div class="border-b-2 border-[#222426] pb-3">
      <div class="text-[10px] font-mono uppercase tracking-wider text-[#6E7376]">Partea a II-a · Decupaj pentru decidenți instituționali</div>
      <h2 class="text-xl font-bold text-[#222426]">Sinteze executive de capitol (Capitolele 0–6)</h2>
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
                <span class="font-bold text-[#222426]">Directiva ${idx + 1}</span>
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
       PARTEA A III-A: TABELUL 1, TABELUL 2, MATRICEA INSTITUȚIONALĂ & GRUPUL REGIONAL
       ======================================================================= -->
  <section class="page-break space-y-5">
    <div class="border-b-2 border-[#222426] pb-3">
      <div class="text-[10px] font-mono uppercase tracking-wider text-[#6E7376]">Partea a III-a · Sinteze matriciale și analiză comparativă</div>
      <h2 class="text-xl font-bold text-[#222426]">Tabelele 1 și 2, Matricea instituțională și Grupul de control regional</h2>
    </div>

    <!-- TABELUL 1 -->
    <div>
      <h3 class="text-sm font-bold text-[#222426] mb-2">
        Tabelul 1. Sinteza arhitecturii cauzale ascendente a diagnosticului instituțional, neurocognitiv și cultural
      </h3>
      <table class="border border-[#222426] text-[10px] leading-relaxed">
        <thead>
          <tr class="bg-[#222426] text-[#F6F5EE]">
            <th class="p-2 border-r border-[#8C9BA5] text-left w-[18%]">Dimensiunea analitică</th>
            <th class="p-2 border-r border-[#8C9BA5] text-left w-[27%]">STRATUL A · Instituțional, istoric și sociologic</th>
            <th class="p-2 border-r border-[#8C9BA5] text-left w-[27%]">STRATUL B · Neurocognitiv, semiotic și axiologic</th>
            <th class="p-2 text-left w-[28%]">STRATUL C · Inconștient cultural și dinamică arhetipală</th>
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
        Tabelul 2. Protocolul secvențial de reconstrucție a rezilienței cognitive și instituționale structurat pe determinanții modelului Lalonde–Dever
      </h3>
      <table class="border border-[#222426] text-[7.9px] leading-[1.28]">
        <thead>
          <tr class="bg-[#222426] text-[#F6F5EE]">
            <th class="p-1 border-r border-[#8C9BA5] text-left w-[11%]">Faza și orizontul</th>
            <th class="p-1 border-r border-[#8C9BA5] text-left w-[16%]">Biologia umană și rezerva neurocognitivă</th>
            <th class="p-1 border-r border-[#8C9BA5] text-left w-[20%]">Mediul digital și sociospațial</th>
            <th class="p-1 border-r border-[#8C9BA5] text-left w-[16%]">Stil de viață informațional și axiologie</th>
            <th class="p-1 text-left w-[37%]">Sistem instituțional și constituțional</th>
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
        Matricea responsabilităților instituționale pe cele trei faze secvențiale (România și Uniunea Europeană)
      </h3>
      <table class="border border-[#222426] text-[8.8px] leading-[1.38]">
        <thead>
          <tr class="bg-[#222426] text-[#F6F5EE]">
            <th class="p-1.5 border-r border-[#8C9BA5] text-left w-[17%]">Faza și orizontul</th>
            <th class="p-1.5 border-r border-[#8C9BA5] text-left w-[22%]">Obiectivul strategic și neurocognitiv</th>
            <th class="p-1.5 border-r border-[#8C9BA5] text-left w-[38%]">Acțiuni tactice, legislative și algoritmice</th>
            <th class="p-1.5 text-left w-[23%]">Instituții responsabile și parteneri</th>
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
        Comparația sistematică a României cu grupul de control regional (Estonia, Polonia, Republica Moldova) · Subcapitolul 2.3
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
            <div><strong>Profil de expunere la vectorul rus:</strong> ${escapeHtml(c.exposureProfile)}</div>
            <div><strong>Stratul A · Arhitectura instituțională:</strong> ${escapeHtml(c.stratumA)}</div>
            <div><strong>Stratul B · Pregătirea neurocognitivă și apărarea informațională:</strong> ${escapeHtml(c.stratumB)}</div>
            <div><strong>Stratul C · Inconștientul cultural și axa Ego–Sine:</strong> ${escapeHtml(c.stratumC)}</div>
            <div class="p-2 border ${c.statusType === 'tension' ? 'border-[#F01E1E] bg-[#F01E1E]/10' : 'border-[#222426] bg-[#E5B822]/20'}">
              <strong>Concluzie cauzală demonstrată:</strong> ${escapeHtml(c.strategicLesson)}
            </div>
          </div>`
        ).join('')}
      </div>
    </div>
  </section>

  <!-- =======================================================================
       PARTEA A IV-A: GLOSAR CONCEPTUAL COMPLET (55 CONCEPTE-CHEIE)
       ======================================================================= -->
  <section class="page-break space-y-3">
    <div class="border-b-2 border-[#222426] pb-3">
      <div class="text-[10px] font-mono uppercase tracking-wider text-[#6E7376]">Partea a IV-a · Aparat conceptual interdisciplinar</div>
      <h2 class="text-xl font-bold text-[#222426]">Glosar teoretic complet (${GLOSSARY_CONCEPTS.length} concepte-cheie)</h2>
    </div>

    <div class="space-y-2.5">
      ${GLOSSARY_CONCEPTS.map(
        (g, idx) => `
        <div class="glossary-card border border-[#222426] bg-[#F6F5EE] p-3 text-[10.5px] leading-relaxed">
          <div class="flex items-center justify-between gap-2 border-b border-[#8C9BA5] pb-1 mb-1 text-[9.5px] font-mono">
            <span class="text-[#6E7376]">#${String(idx + 1).padStart(2, '0')} · Stratul ${g.stratum} · ${escapeHtml(g.domain)}</span>
            <span class="font-bold ${
              g.polarity === 'tension'
                ? 'text-[#F01E1E]'
                : g.polarity === 'synthesis'
                  ? 'text-[#222426] bg-[#E5B822]/35 px-1.5 border border-[#222426]'
                  : 'text-[#6E7376]'
            }">
              ${g.polarity === 'tension' ? 'Vulnerabilitate și tensiune' : g.polarity === 'synthesis' ? 'Reziliență și sinteză' : 'Cadru analitic'}
            </span>
          </div>
          <div class="font-bold text-xs text-[#222426]">${escapeHtml(g.term)}</div>
          <div class="text-[9.5px] font-mono text-[#6E7376] mb-1">Referințe teoretice: ${escapeHtml(g.authors)}</div>
          <p class="text-[#222426] mb-1.5">${escapeHtml(g.definition)}</p>
          <div class="p-2 border ${g.polarity === 'tension' ? 'border-[#F01E1E] bg-[#F01E1E]/5' : 'border-[#222426] bg-[#E5B822]/15'} text-[10px]">
            <span class="font-mono font-bold">Funcția în arhitectura monografiei: </span>${escapeHtml(g.monographContext)}
          </div>
        </div>`
      ).join('')}
    </div>
  </section>

  <!-- =======================================================================
       PARTEA A V-A: BIBLIOGRAFIE INTEGRALĂ APA 7TH (152 LUCRĂRI)
       ======================================================================= -->
  <section class="page-break space-y-3">
    <div class="border-b-2 border-[#222426] pb-3">
      <div class="text-[10px] font-mono uppercase tracking-wider text-[#6E7376]">Partea a V-a · Surse academice verificate · APA 7th Edition</div>
      <h2 class="text-xl font-bold text-[#222426]">Bibliografie integrală (${BIBLIOGRAPHY_DATA.length} lucrări)</h2>
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
          <span>Diagnosticul războiului cognitiv în România (Versiunea 1.0)</span>
          <span>Monografie științifică integrală</span>
        </div>`,
      footerTemplate: `
        <div style="width:100%; font-family: Inter, sans-serif; font-size: 7.5pt; color: #6E7376; padding: 0 14mm; display: flex; justify-content: space-between; border-top: 0.5pt solid #8C9BA5; padding-top: 2mm;">
          <span>Ediție completă · Text, diagrame, tabele, glosar și bibliografie</span>
          <span>Pagina <span class="pageNumber"></span> / <span class="totalPages"></span></span>
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

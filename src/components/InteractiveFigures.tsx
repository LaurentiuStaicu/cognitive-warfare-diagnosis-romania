import React, { useState } from 'react';
import { SocialShareButtons } from './SocialShareButtons';

interface InteractiveFiguresProps {
  figureId: number;
  onSelectFigure?: (id: number) => void;
  showSelector?: boolean;
}

export const FIGURE_METADATA: Record<
  number,
  {
    id: number;
    title: string;
    subtitle: string;
    chapterRef: string;
    caption: string;
    methodologicalNote: string;
  }
> = {
  1: {
    id: 1,
    title: 'Figure 1. Three-layer causal architecture of endogenous societal vulnerability',
    subtitle:
      'Articulating Coleman and Hedström\'s Macro–Micro–Macro model with Lalonde–Dever systemic determinants',
    chapterRef: 'Chapter 1 · Subchapter 1.3',
    caption:
      'The structural deficits in Layer A — the lack of public services, the incomplete operational closure of institutions, the precarious socioeconomic environment and the vacuum of political representation (Mair, 2013; Mudde, 2004) — induce in Layer B two complementary regimes of neurocognitive vulnerability that intertwine transversally in society: on the one hand, chronic allostatic stress (flattening the circadian rhythm of cortisol, desensitization of receptors glucocorticoids, systemic inflammation and dendritic retraction in the dlPFC), over which acute shocks add rapid catecholaminergic synaptic inhibition (Arnsten, 2009), switching processing to reactive System 1; on the other hand, the recruitment of an intact biological System 2 in dysrationality and motivated rationalization (Stanovich, 2009; Kahan, 2017) in two symmetrically dysfunctional directions (elitist civic secession in the status bubble or the construction of pseudoscientific, esoteric and radical revisionist rationalizations). Through the three Micro-Macro transformational mechanisms (affective synchronization, complex contagion through wide bridges and opportunistic political intermediation), these processes are sedimented in Layer C in the form of defensive fatalism, learned helplessness and chronic distrust of the constitutional order, offering the vector of cognitive warfare a vulnerable ground that it can directly exploit and amplify.',
    methodologicalNote:
      'The Macro–Micro–Macro causal model (Coleman, 1990; Hedström, 2005), grounded in the criterion of falsifiability (Popper, 1934/2002) and the ecological anti-error clause (Robinson, 1950), articulates the institutional, socio-spatial determinants and political representation vacuum of Layer A with the double neurocognitive vulnerability of Layer B and the defensive structures of the cultural unconscious in Layer C.'
  },
  2: {
    id: 2,
    title: 'Figure 2. The mechanism of double axiological falsification and semiotic parasitism',
    subtitle:
      'The structural opposition between the European Christian-secular synthesis and the revisionist ideology of the Antiworld',
    chapterRef: 'Chapter 2 · Subchapter 2.2',
    caption:
      'In the left half, the Christian-secular European synthesis is represented, in which the principle of inalienable human dignity, based on the concept of Imago Dei and the universalism of fundamental rights, supports the moral and constitutional filter of the rule of law, generating organic modernity and responsible freedom. In the right half is illustrated the operation to conceal the revisionist ideology of the Antiworld (Epstein, 2022), which projects on the surface an orthodox traditionalist and sovereignist camouflage to bypass the historical aversion of the target population towards Russia, masking the real operative core based on normative inversion and transgressive cynicism, whose strategic finality is imperial subordination and the disintegration of the normative cohesion of the targeted society.',
    methodologicalNote:
      'The comparative semiotic model highlights the contrast between the anthropology of the free person in the European Christian-secular synthesis and the operation of axiological dissimulation through which Antiworld ideology masks the normative inversion under a traditionalist camouflage.'
  },
  3: {
    id: 3,
    title:
      'Figure 3. The cybernetic and semiotic mechanism of cognitive capture in the sixth operational domain',
    subtitle:
      'Integrating Boyd\'s OODA decision loop, Lefebvre\'s reflexive control, and Lotman and Peirce\'s semiotics of culture',
    chapterRef: 'Chapter 3 · Subchapters 3.1–3.3',
    caption:
      'The raw information flow from the Observation phase, polluted with synthetic data in two stages—non-parametric contamination at the time of querying search engines and RAG (inference-time RAG poisoning) systems in the short term, followed by parametric degradation upon retraining (Model Collapse and Model Autophagy Disorder – MAD) in the medium term—and algorithmically amplified by capturing reward prediction error and dopamine D2 receptors, enters the phase of Orientation, where the subject\'s mental and cultural models are targeted by second-order reflexive control and automated by recommendation algorithms (DRLs), which maintain the target at Rank 0 and Rank 1 reflexivity (Lefebvre, 1982, 2001) and distort precision-weighting (aberrant precision-weighting, Friston, 2010: assigning rigid hyperprecision to conspiratorial belief and mitigating factual prediction errors). This intervention compromises the axiological filter of the first ethical system, blocks the path of ternary mediation and prefrontal rational discernment, and diverts processing down the path of the second ethical system and the binary logic of annihilation. The result is a Decision phase dominated by induced emotional selection, cognitive closure and defensive processing motivated by the protection of group identity, which translates into the Action phase, through complex social contagion on wide bridges (Centola, 2018), in acute social polarization and anti-institutional conflict.',
    methodologicalNote:
      'The cybernetic model integrates the OODA decision loop (Boyd, 1987/2018) with reflexive control theory (Lefebvre, 1982, 2001) and ternary semiotics (Peirce, 1931–1958; Lotman, 1990), demonstrating how capturing the Orientation phase suppresses democratic compromise.'
  },
  4: {
    id: 4,
    title: 'Figure 4. Functional conversion of latent resources in the collective Shadow',
    subtitle:
      'Institutional and metacognitive mediating architecture on the Ego–Self axis and the conversion of psychodynamic flows',
    chapterRef: 'Chapter 4 · Subchapter 4.2',
    caption:
      'On the left are the repressed psychodynamic energies in Layer C: the defensive historical memory and unchanneled adaptive vitality associated with the Trickster archetype. In the absence of mediation, these resources slide down the lower, red-marked path into enantiodromia, cynicism, and destructive revolt against democratic rules. When processed through the three central filters of Layers A and B—the framework of impersonal righteous law with operational closure (incrementally activated by islands of operational closure and administrative predictability in Ostrom, 1990 and Acemoglu & Robinson, 2019), critical discernment, and prefrontal metacognitive vigilance—they are converted on the Ego–Self axis into organic modernity, trust, and autonomous institutional cooperation.',
    methodologicalNote:
      'The diagram illustrates the structural conditions by which the resources repressed in the collective Shadow, namely the defensive historical memory and the adaptive vitality of the Trickster archetype, cease to fuel the destructive revolt against democratic rules and are converted into organic modernity.'
  },
  5: {
    id: 5,
    title: 'Figure 5. Carlo M. Cipolla\'s behavioral matrix in cognitive warfare',
    subtitle:
      'Dynamics of systemic spoliation (+X, -Y), vulnerability (-X, +Y) and collective self-sabotage (-X, -Y)',
    chapterRef: 'Chapter 4 · Subchapter 4.3',
    caption:
      'The primary endogenous cause is the systemic spoliation pressure exerted by internal extractive actors in Quadrant IV (+X, -Y) on the vulnerable citizen in Quadrant II (-X, +Y) on two orthogonal barriers: the vertical extractive dam (blocking horizontal meritocratic mobility to Quadrant I) and the cracked horizontal constitutional and epistemic floor of protection. Against this background of allostatic attrition and legitimate resentment—and in tactical convergence with internal oligarchic factions that encourage anti-institutional chaos to save their impunity before the European rule of law—the intervention of the external catalyst of cognitive warfare exploits hyperbolic discounting of the future (Laibson, 1997) and the diversion of altruistic punishment into symbolic self-destructive revenge and antisocial punishment (spiteful and antisocial punishment; Fehr & Gächter, 2002), pushing the vulnerable citizen vertically down through the cracked floor into Quadrant III of collective self-sabotage (-X, -Y), where his anti-institutional actions simultaneously destroy the public good and his own socioeconomic security; in the mirror, the removal of the extractive dam and the consolidation of the constitutional floor through the architecture of institutional choice (Thaler & Sunstein, 2008) open the restorative trajectory towards Quadrant I of intelligent cooperation (+X, +Y).',
    methodologicalNote:
      'The adaptation of the two-dimensional matrix of Carlo M. Cipolla (1976/2011) highlights the mechanism by which the systemic spoliation pressure exerted by extractive actors (+X, -Y) and the cracking of the constitutional floor of protection push the vulnerable citizen (-X, +Y), under the impulse of external cognitive capture, into the quadrant of self-destructive behavior and collective self-sabotage (-X, -Y), while the architecture of institutional choice (Thaler & Sunstein, 2008) opens the transition to Quadrant I (+X, +Y).'
  },
  6: {
    id: 6,
    title: 'Figure 6. Comparative model of cognitive processing in acute crisis: Track A vs. Track B',
    subtitle:
      'Divergence between the Track A defensive reactive loop and the Track B adaptive deliberative pathway',
    chapterRef: 'Chapter 5 · Subchapter 5.2',
    caption:
      'The single upper bifurcation node, triggered by acute stress and polycrisis, divergently separates Track A defensive reactive processing, left, from Track B adaptive deliberative processing, right. On Track A, chronic anxiety, prefrontal inhibition (System 1 under allostatic exhaustion) or motivated rationalization (System 2 hijacked in urban bubbles either to elitist civic secession or to pseudoscientific and revisionist justifications) and the need for cognitive closure (seizing and freezing) push subjects toward the facade conformism of the Mimetic Persona, toward regression into Bion\'s basic assumptions (baD, baP, baF) and towards the hostile projection of the collective Shadow, in an algorithmic self-amplification loop (R). On Track B—opened at the moment of the acute shock through the CDC CERC institutional calm bridge (Reynolds & Seeger, 2005), the verifiable technical proving ground and the proximity community validators, and stabilized at the population level by allostatic decompression and the technical measures to limit algorithmic amplification in Phase I—processing goes through the five adaptive stages: (1) negative capability (tolerance of uncertainty), (2) reactivation of the System 2 in the mode of actively open-minded thinking to Rank 2 and Rank 3 of reflexivity (Lefebvre), (3) the constructive conversion of the agility of the Trickster archetype, (4) critical discernment in ternary mediation and the constitution of the community as a rational "work group" (Bion, 1961) and (5) sovereign action on the Ego–Self axis.',
    methodologicalNote:
      'The systemic model of cognitive processing in crisis, based on the works of Kruglanski, Kahneman, Stanovich, Kahan, Bion and analytical psychology, highlights the bifurcation between the reactive self-amplification loop and the adaptive deliberative path opened by the polycentric architecture of CERC co-regulation and integrated on the Ego–Self axis.'
  },
  7: {
    id: 7,
    title: 'Figure 7. Three-phase sequential protocol of societal resilience reconstruction',
    subtitle:
      'Mandatory order of interventions on Lalonde–Dever determinants and Layers A, B, and C',
    chapterRef: 'Chapter 6 · Subchapters 6.1–6.4',
    caption:
      'The diagram highlights the mandatory causal order of interventions based on the determinants of the Lalonde–Dever model: Phase I, dedicated to allostatic decompression and regulation of the digital ecosystem, creates the neurobiological conditions for Phase II, focused on preventive psychocognitive training through prebunking, Ebbinghaus mnemonic consolidation and reconciliation of the Christian-secular moral filter. This in turn supports Phase III, which aims at the operational closure of the rule of law, polycentric governance and collective individuation, culminating in the architecture of democratic sovereignty and organic modernity.',
    methodologicalNote:
      'The sequential architecture of the reconstruction of cognitive and institutional resilience demonstrates why the educational interventions of Phase II and the structural reforms of Phase III are causally dependent on the prior achievement of Phase I, consisting in the allostatic decompression of the population and the regulation of the digital ecosystem.'
  }
};

const SharedSvgDefs: React.FC = () => (
  <defs>
    <marker
      id="arrow-dark"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6.5"
      markerHeight="6.5"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#222426" />
    </marker>
    <marker
      id="arrow-slate"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#6E7376" />
    </marker>
    <marker
      id="arrow-gold"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6.5"
      markerHeight="6.5"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#E5B822" stroke="#222426" strokeWidth="0.8" />
    </marker>
    <marker
      id="arrow-red"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6.5"
      markerHeight="6.5"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 8.5 5 L 0 8.5 z" fill="#F01E1E" />
    </marker>
    <pattern id="stipple-bg" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="0.6" fill="#222426" fillOpacity="0.12" />
      <circle cx="8" cy="7" r="0.5" fill="#222426" fillOpacity="0.09" />
    </pattern>
    <pattern
      id="diagonal-hatch"
      width="8"
      height="8"
      patternTransform="rotate(45 0 0)"
      patternUnits="userSpaceOnUse"
    >
      <line x1="0" y1="0" x2="0" y2="8" stroke="#222426" strokeWidth="1" strokeOpacity="0.12" />
    </pattern>
  </defs>
);

export const InteractiveFigures: React.FC<InteractiveFiguresProps> = ({
  figureId,
  onSelectFigure,
  showSelector = false
}) => {
  const meta = FIGURE_METADATA[figureId] || FIGURE_METADATA[1];

  // Figure 1 state
  const [fig1Mode, setFig1Mode] = useState<'vulnerable' | 'resilient'>('vulnerable');
  const [fig1SelectedNode, setFig1SelectedNode] = useState<string>('vector');

  // Figure 2 state
  const [fig2Mode, setFig2Mode] = useState<'camouflage' | 'deconstructed'>('camouflage');
  const [fig2Inspect, setFig2Inspect] = useState<
    | 'sinteza-stanga'
    | 'falsificare-ortodoxie'
    | 'falsificare-suveranitate'
    | 'nucleu-antimir'
    | 'retele-spalare'
    | 'subordonare'
  >('falsificare-ortodoxie');

  // Figure 3 state
  const [fig3ReflexiveActive, setFig3ReflexiveActive] = useState<boolean>(true);
  const [fig3SelectedStage, setFig3SelectedStage] = useState<string>('orientare');

  // Figure 4 state
  const [fig4FiltersActive, setFig4FiltersActive] = useState<boolean>(true);
  const [fig4ActiveNode, setFig4ActiveNode] = useState<string>('filtru-lege');

  // Figure 5 state
  const [fig5BarrierIntact, setFig5BarrierIntact] = useState<boolean>(false);
  const [fig5SelectedQuadrant, setFig5SelectedQuadrant] = useState<'I' | 'II' | 'III' | 'IV'>('III');

  // Figure 6 state
  const [fig6ActiveTrack, setFig6ActiveTrack] = useState<'A' | 'B'>('A');
  const [fig6InterventionActive, setFig6InterventionActive] = useState<boolean>(false);
  const [fig6SelectedStep, setFig6SelectedStep] = useState<string>('bifurcatie');

  // Figure 7 state
  const [fig7ActivePhase, setFig7ActivePhase] = useState<1 | 2 | 3>(1);
  const [fig7SelectedNode, setFig7SelectedNode] = useState<string>('faza1');

  // Mobile responsive SVG display mode ('fit' scales cleanly to phone screen; 'pan' enables horizontal zoom)
  const [mobileSvgMode, setMobileSvgMode] = useState<'fit' | 'pan'>('fit');
  const svgClass =
    mobileSvgMode === 'fit'
      ? 'w-full h-auto select-none'
      : 'w-full h-auto min-w-[660px] select-none';

  return (
    <div className="border-2 border-[#222426] bg-[#F6F5EE] my-8">
      {showSelector && onSelectFigure && (
        <div className="px-5 pt-4 pb-3 border-b border-[#8C9BA5] bg-[#222426]/[0.03]">
          <div className="flex flex-wrap gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7].map((id) => (
              <button
                key={id}
                onClick={() => onSelectFigure(id)}
                className={`px-3 py-1.5 text-xs font-mono font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  figureId === id
                    ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-bold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
                }`}
              >
                FIGURE 0{id}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 1. Header Bar (Antet tehnic al planșei) */}
      <div className="px-5 py-4 border-b border-[#222426] bg-[#222426]/[0.03]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="bg-[#E5B822] text-[#222426] border border-[#222426] px-2.5 py-0.5 font-mono text-xs font-bold">
              FIGURE 0{meta.id}
            </span>
            <span className="text-xs font-mono text-[#6E7376]">
              {meta.chapterRef}
            </span>
          </div>
        </div>
        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#222426] headline-balance">
          {meta.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#6E7376] mt-1">{meta.subtitle}</p>
        <div className="mt-3 pt-2.5 border-t border-[#8C9BA5] flex flex-wrap items-center justify-between gap-2">
          <SocialShareButtons
            url={`https://laurentiustaicu.github.io/cognitive-warfare-diagnosis-romania/share/figura-${meta.id}.html?v=1`}
            title={`${meta.title} (Diagnosis of Cognitive Warfare in Romania)`}
            label={`Share Figure ${meta.id} on`}
            compact={!showSelector}
          />
          <div className="flex md:hidden items-center gap-1 text-[11px] font-mono">
            <span className="text-[#6E7376] mr-1">Mobile display</span>
            <button
              type="button"
              onClick={() => setMobileSvgMode('fit')}
              className={`px-2 py-1 border cursor-pointer ${
                mobileSvgMode === 'fit'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-bold'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
              }`}
            >
              Adapted to the screen
            </button>
            <button
              type="button"
              onClick={() => setMobileSvgMode('pan')}
              className={`px-2 py-1 border cursor-pointer ${
                mobileSvgMode === 'pan'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426] font-bold'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
              }`}
            >
              Panning magnifier
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          FIGURE 1: Three-Layer Causal Architecture (Page 8)
         ===================================================================== */}
      {figureId === 1 && (
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] px-5 py-3 border-b border-[#8C9BA5]">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#222426]">
              Systemic regime on Layers A, B and C
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFig1Mode('vulnerable')}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig1Mode === 'vulnerable'
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Endogenous vulnerability and hostile coupling
              </button>
              <button
                type="button"
                onClick={() => setFig1Mode('resilient')}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig1Mode === 'resilient'
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Axiological filter and operational closure
              </button>
            </div>
          </div>

          <div className="w-full h-auto bg-[#F6F5EE] p-4 overflow-x-auto">
            <svg
              viewBox="0 0 940 650"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="940" height="650" fill="#F6F5EE" />
              <rect x="0" y="0" width="940" height="650" fill="url(#stipple-bg)" />

              {/* STRATUL A CONTAINER (x=75..665, y=28..154, height=126) */}
              <rect
                x="75"
                y="28"
                width="590"
                height="126"
                fill="#F6F5EE"
                stroke="#222426"
                strokeWidth="2.5"
              />
              <rect x="200" y="16" width="340" height="24" fill="#F6F5EE" stroke="#6E7376" strokeWidth="1" />
              <text
                x="370"
                y="32"
                textAnchor="middle"
                className="font-sans text-[12.5px] font-bold fill-[#222426]"
              >
                Layer A · Structural and institutional determinants
              </text>

              {/* Node A1: Det. I · Servicii publice (x=95, y=52, width=240, height=82, center=215,93) */}
              <g
                onClick={() => setFig1SelectedNode('servicii')}
                className="cursor-pointer"
              >
                <rect
                  x="95"
                  y="52"
                  width="240"
                  height="82"
                  fill={fig1SelectedNode === 'servicii' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'servicii' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="215"
                  y="75"
                  textAnchor="middle"
                  className="font-mono text-[10px] font-bold fill-[#6E7376]"
                >
                  Lalonde–Dever Field · Public Services
                </text>
                <text
                  x="215"
                  y="96"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Deficit of operational closure' : 'Honest public services'}
                </text>
                <text
                  x="215"
                  y="117"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  {fig1Mode === 'vulnerable' ? 'extractive institutions and capture' : 'firm operational closure'}
                </text>
              </g>

              {/* Horizontal arrow A1 -> A2 (x1=335, y1=93 to x2=398, y2=93) */}
              {fig1Mode === 'resilient' && (
                <line
                  x1="335"
                  y1="93"
                  x2="398"
                  y2="93"
                  stroke="#222426"
                  strokeWidth="4.5"
                />
              )}
              <line
                x1="335"
                y1="93"
                x2="398"
                y2="93"
                stroke={fig1Mode === 'vulnerable' ? '#F01E1E' : '#E5B822'}
                strokeWidth="3"
                markerEnd={fig1Mode === 'vulnerable' ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />

              {/* Node A2: Det. II · Mediu socioeconomic (x=405, y=52, width=240, height=82, center=525,93) */}
              <g
                onClick={() => setFig1SelectedNode('mediu')}
                className="cursor-pointer"
              >
                <rect
                  x="405"
                  y="52"
                  width="240"
                  height="82"
                  fill={fig1SelectedNode === 'mediu' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'mediu' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="525"
                  y="75"
                  textAnchor="middle"
                  className="font-mono text-[10px] font-bold fill-[#6E7376]"
                >
                  Lalonde–Dever Field · Socioeconomic Environment
                </text>
                <text
                  x="525"
                  y="96"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-semibold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Precarity and polarization' : 'Sociospatial cohesion'}
                </text>
                <text
                  x="525"
                  y="117"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  {fig1Mode === 'vulnerable' ? 'disparities and tacit secession' : 'social capital and balance'}
                </text>
              </g>

              {/* CORIDORUL 1: Stratul A -> Stratul B (y=154..216, 62px înălțime) */}
              <line
                x1="215"
                y1="134"
                x2="215"
                y2="210"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="525"
                y1="134"
                x2="525"
                y2="210"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />

              {/* Etichetă casetată centrală: 1. Tranziție Macro → Micro (x=185, y=166, width=370, height=22) */}
              <rect
                x="185"
                y="166"
                width="370"
                height="22"
                fill="#F6F5EE"
                stroke="#6E7376"
                strokeWidth="1"
              />
              <text
                x="370"
                y="181"
                textAnchor="middle"
                className="font-mono text-[9.5px] font-bold fill-[#222426]"
              >
                1. Macro → Micro Transition (Coleman Situational Mechanisms)
              </text>

              {/* STRATUL B CONTAINER (x=75..665, y=216..384, height=168) */}
              <rect
                x="75"
                y="216"
                width="590"
                height="168"
                fill="#F6F5EE"
                stroke="#222426"
                strokeWidth="2.5"
              />
              <rect x="200" y="204" width="340" height="24" fill="#F6F5EE" stroke="#6E7376" strokeWidth="1" />
              <text
                x="370"
                y="220"
                textAnchor="middle"
                className="font-sans text-[12.5px] font-bold fill-[#222426]"
              >
                Layer B · Neurocognitive and cybernetic mechanisms
              </text>
              <text
                x="370"
                y="242"
                textAnchor="middle"
                className="font-mono text-[10.5px] font-bold fill-[#6E7376]"
              >
                2. Micro Level (Action Formation) · Lalonde–Dever Field: Neurobiological reserve
              </text>

              {/* Node B1: Romb (center 215, 302) */}
              <g
                onClick={() => setFig1SelectedNode('alostazie')}
                className="cursor-pointer"
              >
                <polygon
                  points="215,254 305,302 215,350 125,302"
                  fill={fig1SelectedNode === 'alostazie' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'alostazie' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="215"
                  y="296"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'Allostatic stress' : 'Executive regulation'}
                </text>
                <text
                  x="215"
                  y="314"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  {fig1Mode === 'vulnerable' ? 'Amygdalar System 1' : 'Prefrontal latency'}
                </text>
              </g>

              {/* Forward arrow B1 -> B2 (x1=305, y1=294 to x2=430, y2=294) */}
              {fig1Mode === 'resilient' && (
                <line
                  x1="305"
                  y1="294"
                  x2="430"
                  y2="294"
                  stroke="#222426"
                  strokeWidth="4"
                />
              )}
              <line
                x1="305"
                y1="294"
                x2="430"
                y2="294"
                stroke={fig1Mode === 'vulnerable' ? '#F01E1E' : '#E5B822'}
                strokeWidth="2.5"
                markerEnd={fig1Mode === 'vulnerable' ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />

              {/* Cybernetic Feedback Arc B2 -> B1 */}
              {fig1Mode === 'resilient' && (
                <path
                  d="M 465,326 C 415,358 325,358 275,326"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="3.5"
                  strokeDasharray="4 3"
                />
              )}
              <path
                d="M 465,326 C 415,358 325,358 275,326"
                fill="none"
                stroke={fig1Mode === 'vulnerable' ? '#F01E1E' : '#E5B822'}
                strokeWidth="2"
                strokeDasharray="4 3"
                markerEnd={fig1Mode === 'vulnerable' ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />
              <rect x="305" y="343" width="130" height="18" fill="#F6F5EE" />
              <text
                x="370"
                y="356"
                textAnchor="middle"
                className="font-mono text-[9.5px] font-semibold fill-[#6E7376]"
              >
                Cybernetic loop
              </text>

              {/* Node B2: Romb (center 525, 302) */}
              <g
                onClick={() => setFig1SelectedNode('reactiv')}
                className="cursor-pointer"
              >
                <polygon
                  points="525,254 615,302 525,350 435,302"
                  fill={fig1SelectedNode === 'reactiv' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'reactiv' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="525"
                  y="296"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'dlPFC inhibition and' : 'Active System 2'}
                </text>
                <text
                  x="525"
                  y="314"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  {fig1Mode === 'vulnerable' ? 'S2 dysrationalia' : 'Rational mediation'}
                </text>
              </g>

              {/* CORIDORUL 2: Stratul B -> Stratul C (y=384..446, 62px înălțime) */}
              <line
                x1="215"
                y1="350"
                x2="215"
                y2="440"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="525"
                y1="350"
                x2="525"
                y2="440"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />

              {/* Etichetă casetată centrală: 3. Tranziție Micro → Macro (x=195, y=396, width=350, height=22) */}
              <rect
                x="195"
                y="396"
                width="350"
                height="22"
                fill="#F6F5EE"
                stroke="#6E7376"
                strokeWidth="1"
              />
              <text
                x="370"
                y="411"
                textAnchor="middle"
                className="font-mono text-[9.5px] font-bold fill-[#222426]"
              >
                3. Micro → Macro Transition (Transformational Aggregation)
              </text>

              {/* STRATUL C CONTAINER (x=75..665, y=446..606, height=160) */}
              <rect
                x="75"
                y="446"
                width="590"
                height="160"
                fill="#F6F5EE"
                stroke="#6E7376"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <rect x="200" y="434" width="340" height="24" fill="#F6F5EE" stroke="#6E7376" strokeWidth="1" />
              <text
                x="370"
                y="450"
                textAnchor="middle"
                className="font-sans text-[12.5px] font-bold fill-[#222426]"
              >
                Layer C · Psychocultural Architecture and the Unconscious
              </text>

              {/* Node C1: Elipsă Persona mimetică (cx=215, cy=508, rx=95, ry=38) */}
              <g
                onClick={() => setFig1SelectedNode('persona')}
                className="cursor-pointer"
              >
                <ellipse
                  cx="215"
                  cy="508"
                  rx="95"
                  ry="38"
                  fill={fig1SelectedNode === 'persona' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'persona' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="215"
                  y="503"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  Mimetic persona
                </text>
                <text
                  x="215"
                  y="521"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  "forms without substance"
                </text>
              </g>

              {/* Axa de simetrie psihoculturală: Axa Ego–Self (x1=310..430, y=508) */}
              <line
                x1="310"
                y1="508"
                x2="430"
                y2="508"
                stroke="#6E7376"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <rect x="331" y="499" width="78" height="18" fill="#F6F5EE" />
              <text
                x="370"
                y="512"
                textAnchor="middle"
                className="font-mono text-[10px] font-bold fill-[#6E7376]"
              >
                Ego–Self axis
              </text>

              {/* Node C2: Elipsă Umbra colectivă (cx=525, cy=508, rx=95, ry=38) */}
              <g
                onClick={() => setFig1SelectedNode('fatalism')}
                className="cursor-pointer"
              >
                <ellipse
                  cx="525"
                  cy="508"
                  rx="95"
                  ry="38"
                  fill={fig1SelectedNode === 'fatalism' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'fatalism' ? '0.3' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="525"
                  y="503"
                  textAnchor="middle"
                  className="font-sans text-[12.5px] font-bold fill-[#222426]"
                >
                  {fig1Mode === 'vulnerable' ? 'The collective shadow' : 'Psychodynamic integration'}
                </text>
                <text
                  x="525"
                  y="521"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  {fig1Mode === 'vulnerable' ? 'learned helplessness' : 'critical assumption'}
                </text>
              </g>

              {/* FILTRUL VALORILOR MORALE CREȘTINE ȘI SECULARE (Det. III: x=175, y=560, width=390, height=30) */}
              <g
                onClick={() => setFig1SelectedNode('filtru-moral')}
                className="cursor-pointer"
              >
                <rect
                  x="175"
                  y="560"
                  width="390"
                  height="30"
                  fill={fig1Mode === 'resilient' ? '#E5B822' : '#F6F5EE'}
                  stroke={fig1Mode === 'resilient' ? '#222426' : '#6E7376'}
                  strokeWidth={fig1Mode === 'resilient' ? '2.5' : '1.5'}
                  strokeDasharray={fig1Mode === 'vulnerable' ? '4 3' : undefined}
                />
                <text
                  x="370"
                  y="580"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] font-bold fill-[#222426]"
                >
                  {fig1Mode === 'resilient'
                    ? 'Lalonde–Dever Field · Integral Christian-Secular Moral Filter'
                    : 'Lalonde–Dever Field · Short-circuited Christian-secular moral filter'}
                </text>
              </g>

              {/* Săgeți punctate ascendente de retroacțiune C -> B -> A pe flancul stâng (x=36, în afara containerelor x=75..665) */}
              <line
                x1="75"
                y1="508"
                x2="36"
                y2="508"
                stroke="#6E7376"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <line
                x1="36"
                y1="508"
                x2="36"
                y2="302"
                stroke="#6E7376"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <line
                x1="36"
                y1="302"
                x2="72"
                y2="302"
                stroke="#6E7376"
                strokeWidth="2"
                strokeDasharray="4 3"
                markerEnd="url(#arrow-slate)"
              />
              <line
                x1="36"
                y1="302"
                x2="36"
                y2="93"
                stroke="#6E7376"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <line
                x1="36"
                y1="93"
                x2="72"
                y2="93"
                stroke="#6E7376"
                strokeWidth="2"
                strokeDasharray="4 3"
                markerEnd="url(#arrow-slate)"
              />
              <rect
                x="4"
                y="392"
                width="64"
                height="30"
                fill="#F6F5EE"
                stroke="#6E7376"
                strokeWidth="1"
              />
              <text
                x="36"
                y="404"
                textAnchor="middle"
                className="font-mono text-[8.5px] font-bold fill-[#222426]"
              >
                Recursion
              </text>
              <text
                x="36"
                y="417"
                textAnchor="middle"
                className="font-mono text-[8.5px] font-bold fill-[#6E7376]"
              >
                C → B → A
              </text>

              {/* In vulnerable mode: Scurtcircuitarea filtrului moral de către vectorul roșu */}
              {fig1Mode === 'vulnerable' && (
                <path
                  d="M 715,508 L 715,575 L 568,575"
                  fill="none"
                  stroke="#F01E1E"
                  strokeWidth="3"
                  strokeDasharray="6 3"
                  markerEnd="url(#arrow-red)"
                />
              )}

              {/* RIGHT SIDE: VECTOR DE RĂZBOI COGNITIV (x=755, y=263, width=160, height=78, center=835,302) */}
              <g
                onClick={() => setFig1SelectedNode('vector')}
                className="cursor-pointer"
              >
                <rect
                  x="755"
                  y="263"
                  width="160"
                  height="78"
                  fill={fig1SelectedNode === 'vector' ? '#F01E1E' : '#F6F5EE'}
                  fillOpacity={fig1SelectedNode === 'vector' ? '0.14' : '1'}
                  stroke="#F01E1E"
                  strokeWidth="3"
                />
                <text
                  x="835"
                  y="295"
                  textAnchor="middle"
                  className="font-sans text-[13.5px] font-bold fill-[#F01E1E]"
                >
                  Vector of
                </text>
                <text
                  x="835"
                  y="316"
                  textAnchor="middle"
                  className="font-sans text-[13.5px] font-bold fill-[#F01E1E]"
                >
                  cognitive warfare
                </text>
              </g>

              {/* Vertical red collector spine at x=715 */}
              <line
                x1="755"
                y1="302"
                x2="715"
                y2="302"
                stroke="#F01E1E"
                strokeWidth="3"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
              />
              <line
                x1="715"
                y1="93"
                x2="715"
                y2="508"
                stroke="#F01E1E"
                strokeWidth="3"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
              />

              {/* 3 Horizontal coupling arrows into Strata A, B, C (stopping at x2=693 before shield when resilient!) */}
              <line
                x1="715"
                y1="93"
                x2={fig1Mode === 'resilient' ? '693' : '648'}
                y2="93"
                stroke="#F01E1E"
                strokeWidth="3"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
                markerEnd="url(#arrow-red)"
              />
              <line
                x1="715"
                y1="302"
                x2={fig1Mode === 'resilient' ? '693' : '619'}
                y2="302"
                stroke="#F01E1E"
                strokeWidth="3"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
                markerEnd="url(#arrow-red)"
              />
              <line
                x1="715"
                y1="508"
                x2={fig1Mode === 'resilient' ? '693' : '623'}
                y2="508"
                stroke="#F01E1E"
                strokeWidth="3"
                strokeDasharray={fig1Mode === 'resilient' ? '5 4' : undefined}
                markerEnd="url(#arrow-red)"
              />

              {/* Resilient Shield Bar at x=685 when in resilient mode */}
              {fig1Mode === 'resilient' && (
                <g>
                  <line
                    x1="685"
                    y1="45"
                    x2="685"
                    y2="595"
                    stroke="#222426"
                    strokeWidth="8"
                  />
                  <line
                    x1="685"
                    y1="45"
                    x2="685"
                    y2="595"
                    stroke="#E5B822"
                    strokeWidth="6"
                  />
                  <rect
                    x="608"
                    y="602"
                    width="154"
                    height="24"
                    fill="#E5B822"
                    stroke="#222426"
                    strokeWidth="1.5"
                  />
                  <text
                    x="685"
                    y="618"
                    textAnchor="middle"
                    className="font-mono text-[10px] font-bold fill-[#222426]"
                  >
                    Operational closure
                  </text>
                </g>
              )}
            </svg>

            {/* Node inspection detail */}
            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig1SelectedNode === 'servicii' &&
                  (fig1Mode === 'vulnerable'
                    ? 'Layer A (Lalonde–Dever Field: Institutional system and public services — vulnerable regime): Organization of the institutional system and public services. When justice, administration, education and health suffer from a lack of operational closure (Luhmann) and are permeable to extractive clientelistic networks, the citizen perceives formal rules as a hypocritical screen (Macro → Micro transition through situational mechanisms Coleman, 1990).'
                    : 'Layer A (Lalonde–Dever Field: Institutional system and public services — resilient regime): Operational closure of justice and administration (Luhmann, 1995, 2004), fiscal isonomy, proactive digital de-bureaucratization (e-Estonia model) and predictable quality of basic services eliminate bureaucratic arbitrariness and strengthen the legitimacy of the constitutional order.')}
                {fig1SelectedNode === 'mediu' &&
                  (fig1Mode === 'vulnerable'
                    ? 'Layer A (Lalonde–Dever Field: Socioeconomic and sociospatial environment—vulnerable regime): Severe polarization between metropolitan centers and deindustrialized or rural peripheries, deepened by mass emigration, destroys bridging social capital (Putnam, 2000) through amoral familism (Banfield) at one pole and tacit secession into private services at the other.'
                    : 'Layer A (Lalonde–Dever Field: Socioeconomic and sociospatial environment — resilient regime): Polycentric governance (Ostrom, 1990), objective mathematical equalization of local budgets, proximity associative infrastructure (schools, libraries, professionalized cooperatives according to Law no. 566/2004) and networks with "wide bridges" (Centola, 2018) restore territorial cohesion and bridging social capital (Putnam, 2000).')}
                {fig1SelectedNode === 'alostazie' &&
                  (fig1Mode === 'vulnerable'
                    ? 'Layer B (Micro level of action formation · Lalonde–Dever field: Neurobiological reserve — vulnerable regime): Allostasis (Sterling & Eyer, 1988), allostatic load/wear (McEwen & Stellar, 1993; McEwen, 1998) and the triad model of brain networks (Menon, 2011; Seeley et al., 2007; Sapolsky, Arnsten). Chronic exposure to insecurity and bureaucratic humiliation induces HPA axis dysfunction (flattening of the circadian cortisol curve, glucocorticoid receptor desensitization, and systemic inflammation), causing hypertrophy of the basolateral amygdala, hyperactivation of the Salience Network (SN), disruption of the Default Mode Network (DMN), and dendritic retraction in the hippocampus and dorsolateral prefrontal cortex (dlPFC), over which acute shocks add fast catecholaminergic synaptic inhibition.'
                    : 'Layer B (Micro Level of Action Formation · Lalonde–Dever Field: Neurobiological reserve—resilient mode): Structural allostatic decompression, regulation of the HPA axis, restoration of myelinated ventral vagal tone (vagal brake and social engagement system, Porges, 2011; Thayer & Lane, 2009), and restoration of dendritic arborization in the hippocampus and dorsolateral prefrontal cortex (dlPFC) restore balance to the triad of brain networks (CEN, SN and DMN, Menon, 2011).')}
                {fig1SelectedNode === 'reactiv' &&
                  (fig1Mode === 'vulnerable'
                    ? 'Layer B (Vulnerable Regime): The two complementary regimes of neurocognitive vulnerability on System 1 and System 2. In the vulnerable regime, two mechanisms are activated that intersect transversely in society: (a) switching to amygdala System 1 by remodeling and inhibiting the executive functions of the dorsolateral prefrontal cortex (dlPFC) under chronic allostatic stress (both in disadvantaged peripheries and in urban environments subject to professional exhaustion) and (b) hijacking a System 2 biologically intact in dysrationality and motivated rationalization (Stanovich, 2009; Kahan, 2017) in two symmetrically dysfunctional directions: elitist civic secession in private services or the construction of pseudoscientific, esoteric and radical revisionist rationalizations.'
                    : 'Layer B (Resilient Regime): Functional coupling between System 1 (emotionally regulated by the ventral vagal complex and GABAergic inhibition of the amygdala) and deliberative System 2, supported by actively open-minded thinking (Stanovich, 2009), metacognitive vigilance at Rank 2/3 reflexivity, and resilience against dopaminergic capture and precision weighting errors (Friston, 2010).')}
                {fig1SelectedNode === 'persona' &&
                  (fig1Mode === 'vulnerable'
                    ? 'Layer C (Micro → Macro transition through the three transformational mechanisms — affective synchronization, complex contagion through wide bridges and political intermediation in the vacuum of representation, respecting William S. Robinson\'s (1950) clause against the ecological fallacy and Karl Popper\'s (1934/2002) falsifiability criterion — vulnerable regime): Mimetic institutional persona ("forms without substance", Maiorescu). The formal copying of Western institutions without assimilating their normative content creates a vulnerable bureaucratic facade, disconnected from the real needs of citizens.'
                    : 'Layer C (Resilient Regime): Overcoming the "forms without substance" syndrome through organic modernity and the critical integration of vital resources from the collective Shadow on the Ego–Self axis (Jung, 1916/1960; Edinger, 1972). Democratic institutions cease to be perceived as mimetic facades and become the authentic expression of civic autonomy and societal solidarity.')}
                {fig1SelectedNode === 'fatalism' &&
                  (fig1Mode === 'vulnerable'
                    ? 'Layer C (Vulnerable Regime): Expression in the cultural unconscious. The lowering of conscious tension (abaissement du niveau mental, Janet and Jung) and the blocking of the Ego–Self axis (Edinger) produce the oscillation between learned helplessness (Seligman), regressive basic assumptions (Bion) and compensatory defensive inflation.'
                    : 'Layer C (Resilient Regime): Activation of transcendent function (Jung, 1916/1960), negative capability (Bion, 1970) and reality-anchored Work Group (Bion, 1961) on the Ego–Self axis, replacing learned helplessness and paranoid projection with moral discernment (proairesis) and historical responsibility.')}
                {fig1SelectedNode === 'filtru-moral' &&
                  'Layer C (Lalonde–Dever Field: Filter of Christian-Secular Moral Values and Associative Lifestyle): In its intact state, patristic anthropology of human dignity (Imago Dei) reconciled with secular universalism protects the civic conscience. In conditions of cognitive warfare, the hostile actor short-circuits this filter through ethnophyletic instrumentalization and normative inversion.'}
                {fig1SelectedNode === 'vector' &&
                  'The vector of external cognitive warfare does not create the vulnerabilities of the target society out of nothing, but is grafted parasitically on the faults and pre-existing vulnerabilities of Layers A, B and C, when the failure of representation of traditional parties (Mair, 2013) leaves a political vacuum that populist intermediaries (Mudde, 2004) and reflexive control operations divert to false targets.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURE 2: Mechanism of Dual Axiological Falsification (Page 12)
         ===================================================================== */}
      {figureId === 2 && (
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] px-5 py-3 border-b border-[#8C9BA5]">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#222426]">
              Semiotic and axiological regime
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFig2Mode('camouflage')}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig2Mode === 'camouflage'
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Mode 1: Disguise and active semiotic parasitism
              </button>
              <button
                type="button"
                onClick={() => setFig2Mode('deconstructed')}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig2Mode === 'deconstructed'
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Mode 2: Deconstruction through patristic discernment (proairesis) and historical memory
              </button>
            </div>
          </div>

          <div className="w-full h-auto bg-[#F6F5EE] p-4 overflow-x-auto">
            <svg
              viewBox="0 0 920 520"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="920" height="520" fill="#F6F5EE" />
              <rect x="0" y="0" width="920" height="520" fill="url(#stipple-bg)" />

              {/* Central Vertical Divider at x=420 (interrupted in center channel y=190..310) & Top Header Line at y=80 */}
              <line x1="420" y1="15" x2="420" y2="190" stroke="#8C9BA5" strokeWidth="2" />
              <line x1="420" y1="310" x2="420" y2="475" stroke="#8C9BA5" strokeWidth="2" />
              <line x1="25" y1="80" x2="895" y2="80" stroke="#8C9BA5" strokeWidth="1.5" />

              {/* Left Column Header (center x=170) */}
              <text
                x="170"
                y="40"
                textAnchor="middle"
                className="font-sans text-[16px] font-bold fill-[#222426]"
              >European Christian-secular</text>
              <text
                x="170"
                y="62"
                textAnchor="middle"
                className="font-sans text-[16px] font-bold fill-[#222426]"
              >
                synthesis</text>

              {/* Right Column Header (center x=710) */}
              <text
                x="710"
                y="40"
                textAnchor="middle"
                className="font-sans text-[16px] font-bold fill-[#222426]"
              >
                Revisionist ideology
              </text>
              <text
                x="710"
                y="62"
                textAnchor="middle"
                className="font-sans text-[16px] font-bold fill-[#222426]"
              >
                of the Antiworld
              </text>

              {/* LEFT COLUMN NODES (x=45, width=250, center=170) */}
              <g onClick={() => setFig2Inspect('sinteza-stanga')} className="cursor-pointer">
                {/* Box L1 (y=102..176) */}
                <rect
                  x="45"
                  y="102"
                  width="250"
                  height="74"
                  fill={fig2Inspect === 'sinteza-stanga' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'sinteza-stanga' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="170"
                  y="130"
                  textAnchor="middle"
                  className="font-sans text-[13.5px] font-bold fill-[#222426]"
                >
                  Inalienable human dignity
                </text>
                <text
                  x="170"
                  y="151"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Imago Dei, proairesis and universal rights
                </text>

                {/* Arrow L1 -> L2 */}
                <line
                  x1="170"
                  y1="176"
                  x2="170"
                  y2="238"
                  stroke="#222426"
                  strokeWidth="5"
                />
                <line
                  x1="170"
                  y1="176"
                  x2="170"
                  y2="238"
                  stroke="#E5B822"
                  strokeWidth="3.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* Box L2 (y=244..316, center y=280) */}
                <rect
                  x="45"
                  y="244"
                  width="250"
                  height="72"
                  fill={fig2Inspect === 'sinteza-stanga' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'sinteza-stanga' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="170"
                  y="268"
                  textAnchor="middle"
                  className="font-sans text-[13.5px] font-bold fill-[#222426]"
                >
                  Moral and constitutional filter
                </text>
                <text
                  x="170"
                  y="288"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Legitimate debates in the First Ethical System
                </text>
                <text
                  x="170"
                  y="305"
                  textAnchor="middle"
                  className="font-sans text-[10px] fill-[#6E7376]"
                >
                  (Habermas · Lefebvre)
                </text>

                {/* Arrow L2 -> L3 */}
                <line
                  x1="170"
                  y1="316"
                  x2="170"
                  y2="420"
                  stroke="#222426"
                  strokeWidth="5"
                />
                <line
                  x1="170"
                  y1="316"
                  x2="170"
                  y2="420"
                  stroke="#E5B822"
                  strokeWidth="3.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* Box L3 (y=426..494) */}
                <rect
                  x="45"
                  y="426"
                  width="250"
                  height="68"
                  fill={fig2Inspect === 'sinteza-stanga' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'sinteza-stanga' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="170"
                  y="454"
                  textAnchor="middle"
                  className="font-sans text-[13.5px] font-bold fill-[#222426]"
                >
                  Organic modernity and freedom
                </text>
                <text
                  x="170"
                  y="475"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Sovereign autonomy in Euro-Atlantic alliances
                </text>
              </g>

              {/* CANALUL CENTRAL DE 250px LĂȚIME (x=295..545, centru x=420) */}
              {fig2Mode === 'camouflage' ? (
                <g>
                  <line
                    x1="545"
                    y1="272"
                    x2="302"
                    y2="272"
                    stroke="#F01E1E"
                    strokeWidth="3"
                    markerEnd="url(#arrow-red)"
                  />
                  <rect
                    x="320"
                    y="226"
                    width="200"
                    height="34"
                    fill="#F6F5EE"
                    stroke="#F01E1E"
                    strokeWidth="1.5"
                  />
                  <text
                    x="420"
                    y="241"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] font-bold fill-[#F01E1E]"
                  >
                    Semiotic parasitism of
                  </text>
                  <text
                    x="420"
                    y="253"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] font-bold fill-[#F01E1E]"
                  >
                    legitimate debates
                  </text>
                </g>
              ) : (
                <g>
                  {/* În stânga T-bar-ului (x=295..416): linie orizontală aurie dublată de contur #222426 din Filtrul moral spre T-bar */}
                  <line
                    x1="295"
                    y1="272"
                    x2="416"
                    y2="272"
                    stroke="#222426"
                    strokeWidth="6"
                  />
                  <line
                    x1="295"
                    y1="272"
                    x2="416"
                    y2="272"
                    stroke="#E5B822"
                    strokeWidth="4"
                  />
                  {/* În dreapta T-bar-ului (x=426..545): linie punctată gri-ardezie oprită/neutralizată */}
                  <line
                    x1="426"
                    y1="272"
                    x2="545"
                    y2="272"
                    stroke="#8C9BA5"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                    opacity="0.55"
                  />
                  {/* T-bar scut auriu în Modul 2 exact la x=420, y=252..292 */}
                  <line
                    x1="420"
                    y1="252"
                    x2="420"
                    y2="292"
                    stroke="#222426"
                    strokeWidth="8"
                  />
                  <line
                    x1="420"
                    y1="252"
                    x2="420"
                    y2="292"
                    stroke="#E5B822"
                    strokeWidth="5.5"
                  />
                  <rect
                    x="315"
                    y="204"
                    width="210"
                    height="36"
                    fill="#E5B822"
                    stroke="#222426"
                    strokeWidth="1.5"
                  />
                  <text
                    x="420"
                    y="219"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] font-bold fill-[#222426]"
                  >
                    Shield of discernment (proairesis)
                  </text>
                  <text
                    x="420"
                    y="232"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] font-bold fill-[#222426]"
                  >
                    and of historical memory
                  </text>
                </g>
              )}

              {/* RIGHT COLUMN NODES (x=545..875, center=710) */}
              {/* Outer Camouflage Container (x=535, y=96, width=350, height=114, y=96..210) */}
              <rect
                x="535"
                y="96"
                width="350"
                height="114"
                fill="#8C9BA5"
                fillOpacity={fig2Mode === 'deconstructed' ? '0.08' : '0.22'}
                stroke="#6E7376"
                strokeWidth="2"
                strokeDasharray="5 3"
              />
              <text
                x="710"
                y="115"
                textAnchor="middle"
                className="font-sans text-[10.5px] font-bold fill-[#222426]"
              >
                {fig2Mode === 'camouflage'
                  ? 'Surface Discursive Camouflage (Mimetic Falsification · Solovyov)'
                  : 'Camouflage unmasked by patristic and historical discernment'}
              </text>

              {/* Sub-casetă 1: Falsificarea I (x=547, y=126, width=160, height=72, center=627, bottom=198) */}
              <g
                onClick={() => setFig2Inspect('falsificare-ortodoxie')}
                className="cursor-pointer"
              >
                <rect
                  x="547"
                  y="126"
                  width="160"
                  height="72"
                  fill={fig2Inspect === 'falsificare-ortodoxie' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'falsificare-ortodoxie' ? '0.32' : '1'}
                  stroke="#222426"
                  strokeWidth="1.8"
                />
                <text
                  x="627"
                  y="147"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] font-bold fill-[#222426]"
                >
                  Falsification I: Ethnophyletism
                </text>
                <text
                  x="627"
                  y="165"
                  textAnchor="middle"
                  className="font-sans text-[10px] font-semibold fill-[#F01E1E]"
                >
                  Russkii Mir (Synod 1872)
                </text>
                <text
                  x="627"
                  y="183"
                  textAnchor="middle"
                  className="font-sans text-[9px] fill-[#6E7376]"
                >
                  Militaristic Religion vs. Image of God
                </text>
              </g>

              {/* Sub-casetă 2: Falsificarea II (x=715, y=126, width=160, height=72, center=795, bottom=198) */}
              <g
                onClick={() => setFig2Inspect('falsificare-suveranitate')}
                className="cursor-pointer"
              >
                <rect
                  x="715"
                  y="126"
                  width="160"
                  height="72"
                  fill={fig2Inspect === 'falsificare-suveranitate' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'falsificare-suveranitate' ? '0.32' : '1'}
                  stroke="#222426"
                  strokeWidth="1.8"
                />
                <text
                  x="795"
                  y="147"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] font-bold fill-[#222426]"
                >
                  Falsification II: False
                </text>
                <text
                  x="795"
                  y="165"
                  textAnchor="middle"
                  className="font-sans text-[10px] font-semibold fill-[#F01E1E]"
                >
                  isolationist sovereignty
                </text>
                <text
                  x="795"
                  y="183"
                  textAnchor="middle"
                  className="font-sans text-[9px] fill-[#6E7376]"
                >
                  Strategic disarmament vs. ALLIANCE
                </text>
              </g>

              {/* Arrows from Camouflage sub-boxes (y1=198) to Inner Core Antimir (y2=254) — 56px vertical run */}
              <g opacity={fig2Mode === 'deconstructed' ? '0.35' : '1'}>
                <line
                  x1="627"
                  y1="198"
                  x2="665"
                  y2="254"
                  stroke="#F01E1E"
                  strokeWidth="2"
                  markerEnd="url(#arrow-red)"
                />
                <line
                  x1="795"
                  y1="198"
                  x2="755"
                  y2="254"
                  stroke="#F01E1E"
                  strokeWidth="2"
                  markerEnd="url(#arrow-red)"
                />
              </g>

              {/* Inner Core Box: Inversiune normativă (Antimir) și cinism (Bobok) (x=545, y=256..316, width=330) */}
              <g onClick={() => setFig2Inspect('nucleu-antimir')} className="cursor-pointer">
                <rect
                  x="545"
                  y="256"
                  width="330"
                  height="60"
                  fill={fig2Inspect === 'nucleu-antimir' ? '#F01E1E' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'nucleu-antimir' ? '0.14' : '1'}
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                />
                <text
                  x="710"
                  y="281"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-bold fill-[#222426]"
                >
                  Normative inversion (Antimir) and cynicism (Bobok)
                </text>
                <text
                  x="710"
                  y="301"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Epstein (2022) · Dostoevsky (1873) · Transgressive nihilism
                </text>
              </g>

              {/* Red arrow down to 3 Paliere de disimulare a sursei (y1=316 to y2=346, 30px) */}
              <line
                x1="710"
                y1="316"
                x2="710"
                y2="346"
                stroke="#F01E1E"
                strokeWidth="3"
                opacity={fig2Mode === 'deconstructed' ? '0.35' : '1'}
                markerEnd="url(#arrow-red)"
              />

              {/* Intermediate Node: 3 paliere de disimulare a sursei (x=545, y=348..404, width=330, height=56) */}
              <g onClick={() => setFig2Inspect('retele-spalare')} className="cursor-pointer">
                <rect
                  x="545"
                  y="348"
                  width="330"
                  height="56"
                  fill={fig2Inspect === 'retele-spalare' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'retele-spalare' ? '0.28' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="710"
                  y="371"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-bold fill-[#222426]"
                >
                  3 levels of source concealment
                </text>
                <text
                  x="710"
                  y="390"
                  textAnchor="middle"
                  className="font-mono text-[9.5px] fill-[#6E7376]"
                >
                  (Kremlin → Intermediaries → Doppelgänger/TikTok)
                </text>
              </g>

              {/* Red arrow down to Subordonare imperială și anomie (y1=404 to y2=434, 30px) */}
              <line
                x1="710"
                y1="404"
                x2="710"
                y2="434"
                stroke="#F01E1E"
                strokeWidth="3.5"
                opacity={fig2Mode === 'deconstructed' ? '0.35' : '1'}
                markerEnd="url(#arrow-red)"
              />

              {/* Bottom Right Box: Subordonare imperială și anomie (x=545, y=436..494, width=330, height=58) */}
              <g
                onClick={() => setFig2Inspect('subordonare')}
                className="cursor-pointer"
                opacity={fig2Mode === 'deconstructed' ? '0.45' : '1'}
              >
                <rect
                  x="545"
                  y="436"
                  width="330"
                  height="58"
                  fill={fig2Inspect === 'subordonare' ? '#F01E1E' : '#F6F5EE'}
                  fillOpacity={fig2Inspect === 'subordonare' ? '0.14' : '1'}
                  stroke={fig2Mode === 'deconstructed' ? '#6E7376' : '#F01E1E'}
                  strokeWidth="2.5"
                  strokeDasharray={fig2Mode === 'deconstructed' ? '5 3' : undefined}
                />
                <text
                  x="710"
                  y="460"
                  textAnchor="middle"
                  className="font-sans text-[13.5px] font-bold fill-[#222426]"
                >
                  Imperial subordination and anomie
                </text>
                <text
                  x="710"
                  y="480"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Decoupling from NATO/EU and asymmetric bilateralism
                </text>
              </g>
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {(
                    [
                      { id: 'sinteza-stanga', label: '1. Christian-secular synthesis' },
                      { id: 'falsificare-ortodoxie', label: '2. Falsification I (Russkii Mir)' },
                      { id: 'falsificare-suveranitate', label: '3. Falsification II (False sovereignism)' },
                      { id: 'nucleu-antimir', label: '4. Antimir & Bobok Core' },
                      { id: 'retele-spalare', label: '5. Networks of concealment (3 levels)' },
                      { id: 'subordonare', label: '6. Imperial subordination' }
                    ] as const
                  ).map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setFig2Inspect(btn.id)}
                      className={`px-2.5 py-1 text-[11px] font-mono border cursor-pointer ${
                        fig2Inspect === btn.id
                          ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                          : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig2Inspect === 'sinteza-stanga' &&
                  'The Christian-secular European synthesis unites the patristic anthropology of the free person created in the divine image (Imago Dei and the discernment of proairesis — Berdyaev, Stăniloae, Kalaitzidis) with the rule of impersonal law and the autonomy of critical judgment in the post-secular society (Habermas, Taylor, Lefebvre). The debates between conservative ethics and modern secularism are resolved peacefully in the first ethical system, generating organic modernity.'}
                {fig2Inspect === 'falsificare-ortodoxie' &&
                  'Falsification I: Russkii Mir Ethnophyletism. To circumvent the Romanians\' historical aversion to Russian imperialism (the 12 invasions, the seizure of Bessarabia in 1812 and the re-annexation of the three southern counties of Bessarabia — Cahul, Ismail and Bolgrad — in 1878, the Treasury and the Gulag), the propaganda projects a pseudo-orthodox mask that substitutes Christian universalism (Imago Dei) with the militaristic state religion of the "Russian World" — a mimetic falsification (Solovyov, 1900/1994) condemned as an ethnophyletic heresy at the Synod of Constantinople in 1872.'}
                {fig2Inspect === 'falsificare-suveranitate' &&
                  'Falsification II: False Isolationist Sovereignism. Under the slogan of defending national sovereignty against European institutions, the operation parasitises legitimate debates in constitutional democracy to promote exit from the NATO and EU security architecture, turning patriotism into a tool for strategic disarmament of the target state.'}
                {fig2Inspect === 'nucleu-antimir' &&
                  'The real operative nucleus: The normative inversion of the Antiworld (Antimir — Epstein, 2022) and the cynicism of the Bobok state (Dostoevsky, 1873). Under traditionalist camouflage, the real operative regime reverses the meaning of fundamental concepts (war of aggression is called "peace", the sovereignty of neighboring states is treated as "anomaly") and cultivates the cynical belief that truth and law are mere hypocritical fictions.'}
                {fig2Inspect === 'retele-spalare' &&
                  'The architecture in 3 levels of recycling and dissimulation of the information source through intermediaries (information laundering): (1) the ideological laboratories and strategic platforms of the Kremlin (RT, Sputnik, the Strategic Culture Foundation, Katehon and the aggregators of the Pravda network); (2) ideological intermediaries, opportunistic political actors, and informal autochthonous paraecclesial nuclei; (3) digital distribution infrastructure through cloned sites (Doppelgänger), swarms of bots (Matryoshka), contamination of linguistic model corpora (LLM grooming) and micro-influencer networks on TikTok and Telegram.'}
                {fig2Inspect === 'subordonare' &&
                  'Strategic Finality: Imperial Subordination and Anomie. By compromising internal normative cohesion and decoupling Romania from Western collective guarantees, the target state is pushed into a gray area of insecurity and asymmetrical bilateralism in the face of revisionist aggression.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURE 3: Cybernetic and Semiotic Mechanism in the OODA Loop (Page 20)
         ===================================================================== */}
      {figureId === 3 && (
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] px-5 py-3 border-b border-[#8C9BA5]">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#222426]">
              Orientation phase in the OODA decision loop
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFig3ReflexiveActive(true)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig3ReflexiveActive
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Binary compression by reflexive control
              </button>
              <button
                type="button"
                onClick={() => setFig3ReflexiveActive(false)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  !fig3ReflexiveActive
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Democratic compromise and ternary mediation
              </button>
            </div>
          </div>

          <div className="w-full h-auto bg-[#F6F5EE] p-4 overflow-x-auto">
            <svg
              viewBox="0 0 980 430"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="980" height="430" fill="#F6F5EE" />
              <rect x="0" y="0" width="980" height="430" fill="url(#stipple-bg)" />

              {/* ============================================================
                  ZONA STÂNGA: Cadrul echilibrat în #E5B822
                  (Primul sistem etic / Spațiul compromisului democratic)
                 ============================================================ */}
              <g
                onClick={() => setFig3SelectedStage('primul-sistem')}
                className="cursor-pointer"
              >
                <text
                  x="109"
                  y="42"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold tracking-wider fill-[#6E7376]"
                >
                  THE FIRST ETHICAL SYSTEM
                </text>
                <rect
                  x="18"
                  y="110"
                  width="182"
                  height="176"
                  fill="#E5B822"
                  fillOpacity={
                    fig3SelectedStage === 'primul-sistem'
                      ? '0.45'
                      : !fig3ReflexiveActive
                        ? '0.32'
                        : '0.18'
                  }
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="109"
                  y="170"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-bold fill-[#222426]"
                >
                  The first ethical system
                </text>
                <text
                  x="109"
                  y="194"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-semibold fill-[#222426]"
                >
                  Democratic compromise
                </text>
                <text
                  x="109"
                  y="215"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  and ternary mediation
                </text>
                <text
                  x="109"
                  y="236"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  legitimate competitor
                </text>
              </g>

              {/* Dotted border line separating Left and Center zones at x=212 */}
              <line
                x1="212"
                y1="30"
                x2="212"
                y2="380"
                stroke="#8C9BA5"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />

              {/* ============================================================
                  ZONA CENTRU: Bucla cibernetică OODA în 4 pași
                  cu injecția de control reflexiv străpungând Orientarea
                 ============================================================ */}
              <text
                x="509"
                y="42"
                textAnchor="middle"
                className="font-sans text-[11px] font-bold tracking-wider fill-[#6E7376]"
              >
                OODA CYBER LOOP · BOYD
              </text>

              {/* TOP LEFT BOX ABOVE OBSERVARE: Poluare sintetică (MAD) și capturare D2 (x=222, y=55, width=148, height=56, ends at x=370, center=296) */}
              <g
                onClick={() => setFig3SelectedStage('poluare-mad')}
                className="cursor-pointer"
                opacity={fig3ReflexiveActive ? '1' : '0.35'}
              >
                <rect
                  x="222"
                  y="55"
                  width="148"
                  height="56"
                  fill={fig3SelectedStage === 'poluare-mad' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'poluare-mad' ? '0.32' : '1'}
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#6E7376'}
                  strokeWidth="2"
                />
                <text
                  x="296"
                  y="78"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  Synthetic pollution (MAD)
                </text>
                <text
                  x="296"
                  y="96"
                  textAnchor="middle"
                  className="font-sans text-[10px] fill-[#6E7376]"
                >
                  and capture D2
                </text>
              </g>
              <line
                x1="296"
                y1="111"
                x2="296"
                y2="188"
                stroke={fig3ReflexiveActive ? '#F01E1E' : '#6E7376'}
                strokeWidth="2"
                strokeDasharray="4 3"
                opacity={fig3ReflexiveActive ? '1' : '0.35'}
                markerEnd={fig3ReflexiveActive ? 'url(#arrow-red)' : 'url(#arrow-slate)'}
              />

              {/* TOP BOX: Control reflexiv de rang secund (x=390, y=55, width=168, height=56, ends at x=558, center=474; 20px gap from x=370) */}
              <g
                onClick={() => setFig3SelectedStage('reflexiv')}
                className="cursor-pointer"
                opacity={fig3ReflexiveActive ? '1' : '0.35'}
              >
                <rect
                  x="390"
                  y="55"
                  width="168"
                  height="56"
                  fill="#F6F5EE"
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#8C9BA5'}
                  strokeWidth={fig3ReflexiveActive ? '2.5' : '1.5'}
                />
                <text
                  x="474"
                  y="78"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >Second-order</text>
                <text
                  x="474"
                  y="96"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  reflexive control</text>
              </g>

              {/* PIERCING VERMILION VECTOR: Injecție de control reflexiv străpungând Orientarea (x=474) */}
              <g opacity={fig3ReflexiveActive ? '1' : '0.35'}>
                <line
                  x1="474"
                  y1="111"
                  x2="474"
                  y2="188"
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#8C9BA5'}
                  strokeWidth={fig3ReflexiveActive ? '4' : '2'}
                  strokeDasharray={fig3ReflexiveActive ? undefined : '5 4'}
                  markerEnd={fig3ReflexiveActive ? 'url(#arrow-red)' : 'url(#arrow-slate)'}
                />
                <rect x="379" y="136" width="190" height="22" fill="#F6F5EE" />
                <text
                  x="474"
                  y="151"
                  textAnchor="middle"
                  className={`font-sans text-[10.5px] font-bold ${
                    fig3ReflexiveActive ? 'fill-[#F01E1E]' : 'fill-[#6E7376]'
                  }`}
                >
                  Reflexive control injection
                </text>
              </g>

              {/* Săgeată dinspre „Primul sistem etic” către nodul „Orientare” */}
              {!fig3ReflexiveActive ? (
                <g>
                  <line
                    x1="200"
                    y1="215"
                    x2="408"
                    y2="215"
                    stroke="#222426"
                    strokeWidth="4.5"
                  />
                  <line
                    x1="200"
                    y1="215"
                    x2="408"
                    y2="215"
                    stroke="#E5B822"
                    strokeWidth="3"
                    markerEnd="url(#arrow-gold)"
                  />
                </g>
              ) : (
                <g>
                  <line
                    x1="200"
                    y1="215"
                    x2="408"
                    y2="215"
                    stroke="#F01E1E"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />
                  {/* T-bar roșu de blocare a primului sistem etic la x=212 */}
                  <line
                    x1="212"
                    y1="203"
                    x2="212"
                    y2="227"
                    stroke="#F01E1E"
                    strokeWidth="4"
                  />
                </g>
              )}

              {/* OODA 1: Observare (x=246, y=190, width=100, height=72, center=296) */}
              <g
                onClick={() => setFig3SelectedStage('observare')}
                className="cursor-pointer"
              >
                <rect
                  x="246"
                  y="190"
                  width="100"
                  height="72"
                  fill={fig3SelectedStage === 'observare' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'observare' ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="296"
                  y="218"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Observation
                </text>
                <text
                  x="296"
                  y="236"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  data flow
                </text>
              </g>

              {/* Arrow Observare -> Orientare (x1=346 to x2=408) */}
              <line
                x1="346"
                y1="226"
                x2="408"
                y2="226"
                stroke="#222426"
                strokeWidth="2.5"
                markerEnd="url(#arrow-dark)"
              />

              {/* OODA 2: Orientare (x=414, y=190, width=120, height=72, center=474) */}
              <g
                onClick={() => setFig3SelectedStage('orientare')}
                className="cursor-pointer"
              >
                <rect
                  x="414"
                  y="190"
                  width="120"
                  height="72"
                  fill={
                    fig3SelectedStage === 'orientare' || !fig3ReflexiveActive
                      ? '#E5B822'
                      : '#F6F5EE'
                  }
                  fillOpacity={
                    fig3SelectedStage === 'orientare'
                      ? '0.35'
                      : !fig3ReflexiveActive
                        ? '0.22'
                        : '1'
                  }
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#222426'}
                  strokeWidth="2.5"
                />
                <text
                  x="474"
                  y="211"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Orientation
                </text>
                <text
                  x="474"
                  y="228"
                  textAnchor="middle"
                  className="font-sans text-[10px] fill-[#6E7376]"
                >
                  mental models
                </text>
                <text
                  x="474"
                  y="246"
                  textAnchor="middle"
                  className={`font-mono text-[9.5px] font-bold ${
                    fig3ReflexiveActive ? 'fill-[#F01E1E]' : 'fill-[#222426]'
                  }`}
                >
                  {fig3ReflexiveActive ? 'Rank 0/1 reflexivity' : 'Rank 2+ reflexivity'}
                </text>
              </g>

              {/* Arrow Orientare -> Decizie (x1=534 to x2=552) */}
              {!fig3ReflexiveActive && (
                <line
                  x1="534"
                  y1="226"
                  x2="552"
                  y2="226"
                  stroke="#222426"
                  strokeWidth="4"
                />
              )}
              <line
                x1="534"
                y1="226"
                x2="552"
                y2="226"
                stroke={fig3ReflexiveActive ? '#F01E1E' : '#E5B822'}
                strokeWidth="2.5"
                markerEnd={fig3ReflexiveActive ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />

              {/* OODA 3: Decizie (x=558, y=190, width=88, height=72, center=602) */}
              <g
                onClick={() => setFig3SelectedStage('decizie')}
                className="cursor-pointer"
              >
                <rect
                  x="558"
                  y="190"
                  width="88"
                  height="72"
                  fill={
                    fig3SelectedStage === 'decizie'
                      ? fig3ReflexiveActive
                        ? '#F01E1E'
                        : '#E5B822'
                      : !fig3ReflexiveActive
                        ? '#E5B822'
                        : '#F6F5EE'
                  }
                  fillOpacity={
                    fig3SelectedStage === 'decizie'
                      ? '0.28'
                      : !fig3ReflexiveActive
                        ? '0.18'
                        : '1'
                  }
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#222426'}
                  strokeWidth="2"
                />
                <text
                  x="602"
                  y="218"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Decision
                </text>
                <text
                  x="602"
                  y="236"
                  textAnchor="middle"
                  className="font-sans text-[10px] fill-[#6E7376]"
                >
                  {fig3ReflexiveActive ? 'emotional' : 'deliberative'}
                </text>
              </g>

              {/* Arrow Decizie -> Acțiune (x1=646 to x2=662) */}
              {!fig3ReflexiveActive && (
                <line
                  x1="646"
                  y1="226"
                  x2="662"
                  y2="226"
                  stroke="#222426"
                  strokeWidth="4"
                />
              )}
              <line
                x1="646"
                y1="226"
                x2="662"
                y2="226"
                stroke={fig3ReflexiveActive ? '#F01E1E' : '#E5B822'}
                strokeWidth="2.5"
                markerEnd={fig3ReflexiveActive ? 'url(#arrow-red)' : 'url(#arrow-gold)'}
              />

              {/* OODA 4: Acțiune (x=668, y=190, width=84, height=72, ends at x=752, center=710) */}
              <g
                onClick={() => setFig3SelectedStage('actiune')}
                className="cursor-pointer"
              >
                <rect
                  x="668"
                  y="190"
                  width="84"
                  height="72"
                  fill={
                    fig3SelectedStage === 'actiune'
                      ? fig3ReflexiveActive
                        ? '#F01E1E'
                        : '#E5B822'
                      : !fig3ReflexiveActive
                        ? '#E5B822'
                        : '#F6F5EE'
                  }
                  fillOpacity={
                    fig3SelectedStage === 'actiune'
                      ? '0.28'
                      : !fig3ReflexiveActive
                        ? '0.18'
                        : '1'
                  }
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#222426'}
                  strokeWidth="2"
                />
                <text
                  x="710"
                  y="218"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Action
                </text>
                <text
                  x="710"
                  y="236"
                  textAnchor="middle"
                  className="font-sans text-[10px] fill-[#6E7376]"
                >
                  behavior
                </text>
              </g>

              {/* Cybernetic Feedback Loop: beneath from Acțiune (x=710) returning to Orientare (x=474) and Observare (x=296) */}
              <polyline
                points="710,262 710,330 296,330 296,264"
                fill="none"
                stroke="#8C9BA5"
                strokeWidth="1.5"
                markerEnd="url(#arrow-slate)"
              />
              <line
                x1="474"
                y1="330"
                x2="474"
                y2="264"
                stroke="#8C9BA5"
                strokeWidth="1.5"
                markerEnd="url(#arrow-slate)"
              />
              <rect x="420" y="320" width="165" height="20" fill="#F6F5EE" />
              <text
                x="502.5"
                y="334"
                textAnchor="middle"
                className="font-mono text-[9.5px] font-semibold fill-[#6E7376]"
              >
                Cybernetic feedback loop
              </text>

              {/* Arrow connecting Acțiune (x=752, y=226) to Right Zone (Binary Wall at x=810, y=202) across 58px corridor */}
              <line
                x1="752"
                y1="226"
                x2="810"
                y2="202"
                stroke={fig3ReflexiveActive ? '#F01E1E' : '#8C9BA5'}
                strokeWidth="2.5"
                strokeDasharray={fig3ReflexiveActive ? undefined : '4 3'}
                opacity={fig3ReflexiveActive ? '1' : '0.35'}
                markerEnd={fig3ReflexiveActive ? 'url(#arrow-red)' : 'url(#arrow-slate)'}
              />

              {/* Inspectable label: Contagiune complexă (x=664, y=132, width=134, height=36, center=731, completely left of x=806) */}
              <g
                onClick={() => setFig3SelectedStage('contagiune')}
                className="cursor-pointer"
                opacity={fig3ReflexiveActive ? '1' : '0.35'}
              >
                <line
                  x1="762"
                  y1="168"
                  x2="778"
                  y2="214"
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#6E7376'}
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <rect
                  x="664"
                  y="132"
                  width="134"
                  height="36"
                  fill={fig3SelectedStage === 'contagiune' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig3SelectedStage === 'contagiune' ? '0.32' : '1'}
                  stroke={fig3ReflexiveActive ? '#F01E1E' : '#6E7376'}
                  strokeWidth="1.5"
                />
                <text
                  x="731"
                  y="147"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] font-bold fill-[#222426]"
                >
                  Complex contagion
                </text>
                <text
                  x="731"
                  y="161"
                  textAnchor="middle"
                  className="font-mono text-[8.5px] fill-[#6E7376]"
                >
                  (wide bridges · Centola)
                </text>
              </g>

              {/* Dotted border line separating Center and Right zones at x=806 */}
              <line
                x1="806"
                y1="30"
                x2="806"
                y2="380"
                stroke="#8C9BA5"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />

              {/* ============================================================
                  ZONA DREAPTA: Compresia în sistemul binar fracturat
                  (Noi / Victime vs. Ei / Dușmani), centrate la x=888 (x=816..960)
                 ============================================================ */}
              <g opacity={fig3ReflexiveActive ? '1' : '0.35'}>
                <text
                  x="888"
                  y="42"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold tracking-wider fill-[#F01E1E]"
                >
                  THE SECOND ETHICAL SYSTEM
                </text>

                {/* Binary Node Top: Noi / Victime */}
                <g
                  onClick={() => setFig3SelectedStage('binar')}
                  className="cursor-pointer"
                >
                  <rect
                    x="816"
                    y="110"
                    width="144"
                    height="60"
                    fill="#F6F5EE"
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="888"
                    y="135"
                    textAnchor="middle"
                    className="font-sans text-[12px] font-bold fill-[#F01E1E]"
                  >
                    Us / Victims
                  </text>
                  <text
                    x="888"
                    y="153"
                    textAnchor="middle"
                    className="font-sans text-[10.5px] fill-[#6E7376]"
                  >
                    moral purity
                  </text>
                </g>

                {/* Fractured Wall in Vermilion Red (#F01E1E) */}
                <path
                  d="M 810,198 L 838,190 L 868,204 L 898,192 L 928,206 L 964,198"
                  fill="none"
                  stroke="#F01E1E"
                  strokeWidth="4"
                />
                <rect
                  x="812"
                  y="188"
                  width="152"
                  height="20"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="1.5"
                />
                <text
                  x="888"
                  y="202"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] font-bold fill-[#F01E1E]"
                >
                  Identity fracture wall
                </text>

                {/* Binary Node Bottom: Ei / Dușmani */}
                <g
                  onClick={() => setFig3SelectedStage('binar')}
                  className="cursor-pointer"
                >
                  <rect
                    x="816"
                    y="226"
                    width="144"
                    height="60"
                    fill="#F6F5EE"
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="888"
                    y="251"
                    textAnchor="middle"
                    className="font-sans text-[12px] font-bold fill-[#F01E1E]"
                  >
                    They / Enemies
                  </text>
                  <text
                    x="888"
                    y="269"
                    textAnchor="middle"
                    className="font-sans text-[10.5px] fill-[#6E7376]"
                  >
                    scapegoats
                  </text>
                </g>
              </g>
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig3SelectedStage === 'primul-sistem' &&
                  'The first ethical system (Lefebvre, 1982, 2001). The axiological framework of constitutional democracy in which legal compromise and dialogue are regarded as cardinal virtues, and the political opponent remains a legitimate competitor within the rule of law.'}
                {fig3SelectedStage === 'poluare-mad' &&
                  'Synthetic pollution in two stages — in the short term, non-parametric contamination at the time of querying search engines and RAG systems (inference-time RAG poisoning), and in the medium term, parametric degradation upon retraining (Model Collapse / Model Autophagy Disorder – MAD, Shumailov et al., 2024; Alemohammad et al., 2024) — and dopaminergic capture by imbalance of striatal D1 (Go) pathways and D2 (No-Go) and migration to the dorsal striatum (Subsection 3.3). The informational ecosystem is saturated with synthetically generated content and optimized by conditioning schemes with variable intermittent rewards (Skinner, 1953) to exploit the reward prediction error (Schultz, 1998, 2016) and weaken the inhibitory brake of D2 receptors (Lembke, 2021), compromising the quality of the data right from entering the Observation phase.'}
                {fig3SelectedStage === 'observare' &&
                  'Observation phase. The raw information flow is algorithmically captured by optimizing retention on digital platforms, flooded with misinformation and synthetic content designed to elicit primal affective reactions.'}
                {fig3SelectedStage === 'orientare' &&
                  (fig3ReflexiveActive
                    ? 'Orientation Phase (Schwerpunkt of John Boyd, 1987/2018; Osinga, 2007) — regime of reflexive capture. Under active reflexive control and dopaminergic siege, the capacity for conceptual "Destruction and Creation: Analytical Deduction and Synthetic Induction" is paralyzed, the target being held at Rank 0/1 reflexivity and pushed on "Implicit Guidance and Control" loops that bypass prefrontal deliberation (Orientation → Direct Action).'
                    : 'Orientation Phase (Schwerpunkt of John Boyd, 1987/2018; Osinga, 2007) — regime of democratic compromise. Anchored in the First Ethical System (Lefebvre, 1982) and the ternary mediation of the logical interpretant (Peirce, 1931–1958), Orientation operates at Rank 2 and Rank 3 of strategic reflexivity, enabling the critical disassembly of rigid mental frames and the recognition of manipulation architecture prior to decision making.')}
                {fig3SelectedStage === 'reflexiv' &&
                  'Second-order reflexive control (Lefebvre), automated today through recommendation algorithms (deep reinforcement learning). It does not deliver simple fake news, but operates by distorting precision-weighting (aberrant precision-weighting, Friston, 2010: attributing rigid hyper-precision to conspiratorial a priori belief and mitigating factual prediction errors) and keeps the target at Rank 0/1 reflexivity, causing it to choose the option desired by the aggressor by itself, believing that it is acting sovereign.'}
                {fig3SelectedStage === 'decizie' &&
                  (fig3ReflexiveActive
                    ? 'Decision phase under reflexive capture. The inhibition of prefrontal deliberation produces the hasty and uncritical adoption of a simplistic explanation (seizing) and epistemic freezing (freezing, Kruglanski), or the complete short-circuiting of the Decision stage through implicit guidance and control loops (Boyd, 1987/2018).'
                    : 'The Decision Phase in a democratic compromise regime. Supported by the executive function of the dorsolateral prefrontal cortex (dlPFC), actively open-minded thinking (Stanovich, 2009), and the negative capability to tolerate complexity (Bion, 1970), Decision formulates testable hypotheses and keeps the political opponent within the legitimate framework of the rule of law.')}
                {fig3SelectedStage === 'actiune' &&
                  (fig3ReflexiveActive
                    ? 'Action phase under reflexive capture. The translation of the affective reflex and the energetic interpretant (Peirce) into polarizing behaviors, institutional boycott or anti-system social conflict, feeding the cybernetic feedback loop.'
                    : 'The Action Phase in a democratic compromise regime. Institutional cooperation, deliberative civic participation and empirical verification of decisions against shared reality, strengthening horizontal trust and democratic sovereignty.')}
                {fig3SelectedStage === 'contagiune' &&
                  'Complex contagion through wide bridges (wide bridges, Centola, 2018). The adoption of risky political behaviors and extreme polarization requires convergent social reinforcement from multiple sources; swarms of bots and coordinated micro-influencers artificially manufacture the illusion of a majority consensus of proximity.'}
                {fig3SelectedStage === 'binar' &&
                  'Compression in the fractured binary system (the second ethical system). The collapse of nuances and the space of mediation in a Manichean dichotomy between the pure people (victims) and traitors (enemies to be annihilated).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURE 4: Functional Conversion of Latent Resources from the Shadow (Page 24)
         ===================================================================== */}
      {figureId === 4 && (
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] px-5 py-3 border-b border-[#8C9BA5]">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#222426]">
              Psychodynamic route
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setFig4FiltersActive(true);
                  setFig4ActiveNode('functie-transcendenta');
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig4FiltersActive
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Conversion to organic modernity
              </button>
              <button
                type="button"
                onClick={() => {
                  setFig4FiltersActive(false);
                  setFig4ActiveNode('anomizare');
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  !fig4FiltersActive
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Slipping into enantiodromia and cynicism
              </button>
            </div>
          </div>

          <div className="w-full h-auto bg-[#F6F5EE] p-4 overflow-x-auto">
            <svg
              viewBox="0 0 960 490"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="960" height="490" fill="#F6F5EE" />
              <rect x="0" y="0" width="960" height="490" fill="url(#stipple-bg)" />

              {/* 3 Column Headers */}
              <text
                x="135"
                y="34"
                textAnchor="middle"
                className="font-sans text-[12px] font-bold tracking-wider fill-[#6E7376]"
              >
                LAYER C · COLLECTIVE SHADOW
              </text>
              <text
                x="405"
                y="34"
                textAnchor="middle"
                className="font-sans text-[12px] font-bold tracking-wider fill-[#6E7376]"
              >
                CONVERSION FILTERS · LAYERS A AND B
              </text>
              <text
                x="822"
                y="34"
                textAnchor="middle"
                className="font-sans text-[12px] font-bold tracking-wider fill-[#6E7376]"
              >
                SYNTHESIS OF THE EGO-SELF AXIS
              </text>

              {/* Converging Bézier curves from Left Column (x=240) to Middle Filters (x=294) */}
              <g opacity={fig4FiltersActive ? '1' : '0.35'}>
                <path
                  d="M 240 96 C 265 96, 275 96, 294 96"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="2"
                  markerEnd="url(#arrow-dark)"
                />
                <path
                  d="M 240 200 C 268 200, 272 110, 294 104"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="2"
                  markerEnd="url(#arrow-dark)"
                />
                <path
                  d="M 240 200 C 265 200, 275 200, 294 200"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="2"
                  markerEnd="url(#arrow-dark)"
                />
                <path
                  d="M 240 304 C 268 304, 272 215, 294 208"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="2"
                  markerEnd="url(#arrow-dark)"
                />
                <path
                  d="M 240 304 C 265 304, 275 304, 294 304"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="2"
                  markerEnd="url(#arrow-dark)"
                />
              </g>

              {/* Curves from Middle Filters (x=510, y=96/200/304) into left edge of Funcția transcendentă (x=555, y=178/200/222) */}
              <g opacity={fig4FiltersActive ? '1' : '0.35'}>
                <path
                  d="M 510 96 C 532 96, 534 178, 550 178"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <path
                  d="M 510 96 C 532 96, 534 178, 550 178"
                  fill="none"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-gold)"
                />
                <path
                  d="M 510 200 L 550 200"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <path
                  d="M 510 200 L 550 200"
                  fill="none"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-gold)"
                />
                <path
                  d="M 510 304 C 532 304, 534 222, 550 222"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <path
                  d="M 510 304 C 532 304, 534 222, 550 222"
                  fill="none"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* 2 Gold Curves from right edge of Funcția transcendentă (x=667, y=185/215) to Column 3 (x=712, y=145/273) */}
                <path
                  d="M 667 185 C 688 185, 690 145, 706 145"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="4.5"
                />
                <path
                  d="M 667 185 C 688 185, 690 145, 706 145"
                  fill="none"
                  stroke="#E5B822"
                  strokeWidth="3"
                  markerEnd="url(#arrow-gold)"
                />
                <path
                  d="M 667 215 C 688 215, 690 273, 706 273"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="4.5"
                />
                <path
                  d="M 667 215 C 688 215, 690 273, 706 273"
                  fill="none"
                  stroke="#E5B822"
                  strokeWidth="3"
                  markerEnd="url(#arrow-gold)"
                />
              </g>

              {/* Nod integrator în canal propriu: Funcția transcendentă (Jung) (x=555, y=155, width=112, height=90, center=611) */}
              <g
                onClick={() => setFig4ActiveNode('functie-transcendenta')}
                className="cursor-pointer"
                opacity={fig4FiltersActive ? '1' : '0.35'}
              >
                <rect
                  x="555"
                  y="155"
                  width="112"
                  height="90"
                  fill={fig4FiltersActive ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={
                    !fig4FiltersActive
                      ? '1'
                      : fig4ActiveNode === 'functie-transcendenta'
                        ? '0.95'
                        : '0.82'
                  }
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="611"
                  y="184"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >Transcendent</text>
                <text
                  x="611"
                  y="203"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  function</text>
                <text
                  x="611"
                  y="222"
                  textAnchor="middle"
                  className="font-mono text-[10px] font-semibold fill-[#222426]"
                >
                  (Jung)
                </text>
              </g>

              {/* LEFT COLUMN BOXES (3 nodes: x=30, width=210, center=135) */}
              <g onClick={() => setFig4ActiveNode('umbra-bruta')} className="cursor-pointer">
                <rect
                  x="30"
                  y="60"
                  width="210"
                  height="72"
                  fill={fig4ActiveNode === 'umbra-bruta' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4ActiveNode === 'umbra-bruta' ? '0.22' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="135"
                  y="89"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Latent Shadow Resources
                </text>
                <text
                  x="135"
                  y="110"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Unintegrated psychodynamic potential
                </text>
              </g>

              <g onClick={() => setFig4ActiveNode('memorie')} className="cursor-pointer">
                <rect
                  x="30"
                  y="164"
                  width="210"
                  height="72"
                  fill={fig4ActiveNode === 'memorie' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4ActiveNode === 'memorie' ? '0.22' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="135"
                  y="193"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Defensive historical memory
                </text>
                <text
                  x="135"
                  y="214"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Skepticism towards hegemony
                </text>
              </g>

              <g onClick={() => setFig4ActiveNode('trickster')} className="cursor-pointer">
                <rect
                  x="30"
                  y="268"
                  width="210"
                  height="72"
                  fill={fig4ActiveNode === 'trickster' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4ActiveNode === 'trickster' ? '0.22' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="135"
                  y="297"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Adaptive vitality
                </text>
                <text
                  x="135"
                  y="318"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  The Ambivalence of the Trickster Archetype
                </text>
              </g>

              {/* MIDDLE COLUMN BOXES (3 conversion filters: x=300, width=210, center=405) */}
              <g
                onClick={() => setFig4ActiveNode('filtru-lege')}
                className="cursor-pointer"
                opacity={fig4FiltersActive ? '1' : '0.35'}
              >
                <rect
                  x="300"
                  y="60"
                  width="210"
                  height="72"
                  fill={fig4FiltersActive && fig4ActiveNode === 'filtru-lege' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4FiltersActive && fig4ActiveNode === 'filtru-lege' ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="405"
                  y="89"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Just impersonal law
                </text>
                <text
                  x="405"
                  y="110"
                  textAnchor="middle"
                  className="font-sans text-[10px] fill-[#6E7376]"
                >
                  Operational closure islands
                </text>
              </g>

              <g
                onClick={() => setFig4ActiveNode('filtru-istorie')}
                className="cursor-pointer"
                opacity={fig4FiltersActive ? '1' : '0.35'}
              >
                <rect
                  x="300"
                  y="164"
                  width="210"
                  height="72"
                  fill={fig4FiltersActive && fig4ActiveNode === 'filtru-istorie' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4FiltersActive && fig4ActiveNode === 'filtru-istorie' ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="405"
                  y="193"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Critical discernment
                </text>
                <text
                  x="405"
                  y="214"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  The assumption of historical truth
                </text>
              </g>

              <g
                onClick={() => setFig4ActiveNode('filtru-meta')}
                className="cursor-pointer"
                opacity={fig4FiltersActive ? '1' : '0.35'}
              >
                <rect
                  x="300"
                  y="268"
                  width="210"
                  height="72"
                  fill={fig4FiltersActive && fig4ActiveNode === 'filtru-meta' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig4FiltersActive && fig4ActiveNode === 'filtru-meta' ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="405"
                  y="297"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Metacognitive vigilance
                </text>
                <text
                  x="405"
                  y="318"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Prefrontal executive regulation
                </text>
              </g>

              {/* RIGHT COLUMN BOXES (2 synthesis outputs: x=712, width=220, center=822) */}
              <g
                onClick={() => setFig4ActiveNode('modernitate')}
                className="cursor-pointer"
                opacity={fig4FiltersActive ? '1' : '0.35'}
              >
                <rect
                  x="712"
                  y="108"
                  width="220"
                  height="74"
                  fill={fig4FiltersActive ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={
                    !fig4FiltersActive
                      ? '1'
                      : fig4ActiveNode === 'modernitate'
                        ? '0.38'
                        : '0.2'
                  }
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="822"
                  y="138"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Organic modernity
                </text>
                <text
                  x="822"
                  y="159"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Norm internalization and trust
                </text>
              </g>

              {/* Bidirectional vertical arrow between the 2 synthesis nodes */}
              <line
                x1="822"
                y1="186"
                x2="822"
                y2="230"
                stroke="#222426"
                strokeWidth="2"
                opacity={fig4FiltersActive ? '1' : '0.35'}
                markerStart="url(#arrow-dark)"
                markerEnd="url(#arrow-dark)"
              />

              <g
                onClick={() => setFig4ActiveNode('cooperare')}
                className="cursor-pointer"
                opacity={fig4FiltersActive ? '1' : '0.35'}
              >
                <rect
                  x="712"
                  y="236"
                  width="220"
                  height="74"
                  fill={fig4FiltersActive ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={
                    !fig4FiltersActive
                      ? '1'
                      : fig4ActiveNode === 'cooperare'
                        ? '0.38'
                        : '0.2'
                  }
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="822"
                  y="266"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Institutional cooperation
                </text>
                <text
                  x="822"
                  y="287"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Bridging social capital and autonomy
                </text>
              </g>

              {/* BOTTOM RED BYPASS PATH: Fara filtru (Enantiodromie si cinism) -> Capturare in revolta distructivă */}
              <g opacity={!fig4FiltersActive ? '1' : '0.35'}>
                <polyline
                  points="135,340 135,425 478,425"
                  fill="none"
                  stroke="#F01E1E"
                  strokeWidth={!fig4FiltersActive ? '3.5' : '2.5'}
                  strokeDasharray="6 4"
                  markerEnd="url(#arrow-red)"
                />
                <text
                  x="306"
                  y="413"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] font-bold fill-[#F01E1E]"
                >
                  Inability to mourn, paranoid projection, and enantiodromia
                </text>

                <g onClick={() => setFig4ActiveNode('anomizare')} className="cursor-pointer">
                  <rect
                    x="488"
                    y="400"
                    width="245"
                    height="50"
                    fill={!fig4FiltersActive || fig4ActiveNode === 'anomizare' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={!fig4FiltersActive || fig4ActiveNode === 'anomizare' ? '0.16' : '1'}
                    stroke="#F01E1E"
                    strokeWidth={!fig4FiltersActive ? '3' : '2.5'}
                  />
                  <text
                    x="610.5"
                    y="430"
                    textAnchor="middle"
                    className="font-sans text-[12px] font-bold fill-[#F01E1E]"
                  >
                    Capture into destructive revolt
                  </text>
                </g>
              </g>
            </svg>

            {/* Legend for Psychodynamic Flows */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-[#F6F5EE] border border-[#8C9BA5] p-3">
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-0.5 bg-[#F01E1E] border-b border-dashed border-[#F01E1E] shrink-0" />
                <span className="text-[#222426]">
                  Regression in enantiodromia and destructive rebellion
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-6 h-1 bg-[#E5B822] shrink-0" />
                <span className="text-[#222426]">
                  Conversion into organic modernity on the Ego–Self axis
                </span>
              </div>
            </div>

            <div className="mt-3 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig4ActiveNode === 'umbra-bruta' &&
                  'The collective shadow (Jung, 1951/1968; Edinger, 1972; von Franz, 1972/1995). It contains not only destructive drives, but also vital resources of psychic energy, legitimate instincts of preservation, and potentialities of renewal excluded by the mimetic institutional Persona.'}
                {fig4ActiveNode === 'memorie' &&
                  'Defensive historical memory. The distrust of the Romanian citizen in pompous official speeches has its root in a healthy historical reflex of self-preservation, formed in the centuries of resistance in the face of hegemonic empires.'}
                {fig4ActiveNode === 'trickster' &&
                  'Ambivalence of the Trickster archetype (Jung, 1954/1968; Radin, 1956). In its regressive form it manifests as cynical trickery and circumvention of the law, but in its prospective dimension it contains cognitive agility, rapid adaptation and resistance to dogmatic indoctrination.'}
                {fig4ActiveNode === 'filtru-lege' &&
                  'The first filter (Layer A): The Impersonal Right Law Framework and “islands of operational closure” (Luhmann, 1995, 2004; Ostrom, 1990; Acemoglu & Robinson, 2019). This formulation resolves the temporal paradox between Subchapters 4.2 and 6.3: the conversion of Shadow energies does not wait for the full perfection of the state at the end of Phase III, but is initiated and gradually consolidated by islands of administrative predictability (debureaucratization of Phase I, transparent procurement, functional cooperatives), which generate the necessary civic trust to later support macrostructural reform in the "narrow corridor".'}
                {fig4ActiveNode === 'filtru-istorie' &&
                  'The second filter (Layer B). Critical discernment and the assumption of historical truth, which deconstruct paranoid projections by separating authentic spiritual tradition from ethnophyletic and totalitarian falsifications.'}
                {fig4ActiveNode === 'filtru-meta' &&
                  'The third filter (Layer B). Metacognitive vigilance, supported by the executive regulation of the prefrontal cortex, which enables the citizen to recognize his own affective vulnerabilities before they are instrumentalized by reflexive control.'}
                {fig4ActiveNode === 'functie-transcendenta' &&
                  'The transcendent function (Jung, 1916/1960; Edinger, 1972). The psychodynamic mechanism that mediates the tension between the formal normative consciousness (Ego/Persona) and the energies repressed in the Shadow, generating a new symbolic attitude on the Ego-Self axis, capable of supporting organic modernity without repressing the autochthonous background.'}
                {fig4ActiveNode === 'modernitate' &&
                  'Organic Modernity and Trust (Synthesis of the Ego–Self Axis). The transcendent function (Jung, 1916/1960) integrates the Shadow potential into civic consciousness, replacing facade conformity with authentic internalization of norms.'}
                {fig4ActiveNode === 'cooperare' &&
                  'Autonomous institutional cooperation. Restoring bridging social capital (Putnam, 2000) and transforming reactive nationalism into responsible constitutional patriotism.'}
                {fig4ActiveNode === 'anomizare' &&
                  'The unfiltered lower pathway: The inability to mourn (Mitscherlich & Mitscherlich, 1967/1975; Volkan, 1997, 2004), paranoid projection, and the slide into enantiodromia. When the three filters are missing or the Shadow energies are arrogantly repressed, they are captured by cognitive warfare vectors in destructive revolt against democratic rules.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURE 5: Carlo M. Cipolla's Behavioral Matrix (Page 27)
         ===================================================================== */}
      {figureId === 5 && (
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] px-5 py-3 border-b border-[#8C9BA5]">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#222426]">
              Trajectory in Cipolla's matrix
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setFig5BarrierIntact(false);
                  setFig5SelectedQuadrant('III');
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  !fig5BarrierIntact
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Collapse into collective self-sabotage · Quadrant III
              </button>
              <button
                type="button"
                onClick={() => {
                  setFig5BarrierIntact(true);
                  setFig5SelectedQuadrant('I');
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig5BarrierIntact
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Transition to intelligent cooperation · Quadrant I
              </button>
            </div>
          </div>

          <div className="w-full h-auto bg-[#F6F5EE] p-4 overflow-x-auto">
            <svg
              viewBox="0 0 920 580"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="920" height="580" fill="#F6F5EE" />
              <rect x="0" y="0" width="920" height="580" fill="url(#stipple-bg)" />

              {/* Outer Matrix Frame (x=70..850, y=50..530) */}
              <rect
                x="70"
                y="50"
                width="780"
                height="480"
                fill="none"
                stroke="#222426"
                strokeWidth="1.5"
              />

              {/* CADRANUL II (Top-Left): Cetățeni vulnerabili / Naivi (-X, +Y) */}
              <g
                onClick={() => setFig5SelectedQuadrant('II')}
                className="cursor-pointer"
              >
                <rect
                  x="70"
                  y="50"
                  width="390"
                  height="240"
                  fill={fig5SelectedQuadrant === 'II' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig5SelectedQuadrant === 'II' ? '0.18' : '0.6'}
                  stroke="#8C9BA5"
                  strokeWidth="1"
                />
                <text
                  x="265"
                  y="80"
                  textAnchor="middle"
                  className="font-sans text-[14.5px] font-bold fill-[#6E7376]"
                >
                  Quadrant II · Vulnerable citizens
                </text>
                <text
                  x="265"
                  y="102"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Own loss · Societal benefit
                </text>
                <text
                  x="265"
                  y="122"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Allostatic wear and learned helplessness
                </text>
              </g>

              {/* CADRANUL I (Top-Right): Cooperare inteligentă (+X, +Y) */}
              <g
                onClick={() => setFig5SelectedQuadrant('I')}
                className="cursor-pointer"
              >
                <rect
                  x="460"
                  y="50"
                  width="390"
                  height="240"
                  fill="#E5B822"
                  fillOpacity={fig5SelectedQuadrant === 'I' || fig5BarrierIntact ? '0.28' : '0.12'}
                  stroke="#222426"
                  strokeWidth="1.5"
                />
                <text
                  x="655"
                  y="80"
                  textAnchor="middle"
                  className="font-sans text-[14.5px] font-bold fill-[#222426]"
                >
                  Quadrant I · Intelligent cooperation
                </text>
                <text
                  x="655"
                  y="102"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#222426]"
                >
                  Own benefit · Collective benefit
                </text>
                <text
                  x="655"
                  y="122"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Organic modernity and the rule of law
                </text>
              </g>

              {/* CADRANUL III (Bottom-Left): Autosabotaj social / Iraționalitate autodistructivă (-X, -Y) */}
              <g
                onClick={() => setFig5SelectedQuadrant('III')}
                className="cursor-pointer"
              >
                <rect
                  x="70"
                  y="290"
                  width="390"
                  height="240"
                  fill="#F01E1E"
                  fillOpacity={fig5SelectedQuadrant === 'III' || !fig5BarrierIntact ? '0.15' : '0.06'}
                  stroke="#F01E1E"
                  strokeWidth="1.5"
                />
                <text
                  x="265"
                  y="430"
                  textAnchor="middle"
                  className="font-sans text-[14.5px] font-bold fill-[#F01E1E]"
                >
                  Quadrant III · Collective self-sabotage
                </text>
                <text
                  x="265"
                  y="452"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-semibold fill-[#F01E1E]"
                >
                  Self-destructive irrationality
                </text>
                <text
                  x="265"
                  y="474"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] fill-[#6E7376]"
                >
                  Personal loss · Societal damage
                </text>
              </g>

              {/* CADRANUL IV (Bottom-Right): Elite extractive / Banditism (+X, -Y) */}
              <g
                onClick={() => setFig5SelectedQuadrant('IV')}
                className="cursor-pointer"
              >
                <rect
                  x="460"
                  y="290"
                  width="390"
                  height="240"
                  fill={fig5SelectedQuadrant === 'IV' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig5SelectedQuadrant === 'IV' ? '0.18' : '0.6'}
                  stroke="#222426"
                  strokeWidth="1"
                />
                <text
                  x="655"
                  y="430"
                  textAnchor="middle"
                  className="font-sans text-[14.5px] font-bold fill-[#222426]"
                >
                  Quadrant IV · Extractive elites
                </text>
                <text
                  x="655"
                  y="452"
                  textAnchor="middle"
                  className="font-sans text-[12px] fill-[#6E7376]"
                >
                  Own gain · Societal damage
                </text>
                <text
                  x="655"
                  y="474"
                  textAnchor="middle"
                  className="font-sans text-[11.5px] font-semibold fill-[#222426]"
                >
                  1. Endogenous spoliation · 2. Russian external catalyst
                </text>
              </g>

              {/* CARTESIAN AXES (#222426) */}
              {/* Horizontal Axis -X to +X */}
              <line
                x1="50"
                y1="290"
                x2="870"
                y2="290"
                stroke="#222426"
                strokeWidth="2.5"
                markerStart="url(#arrow-dark)"
                markerEnd="url(#arrow-dark)"
              />
              {/* Vertical Axis -Y to +Y */}
              <line
                x1="460"
                y1="545"
                x2="460"
                y2="35"
                stroke="#222426"
                strokeWidth="2.5"
                markerStart="url(#arrow-dark)"
                markerEnd="url(#arrow-dark)"
              />

              {/* Axis Labels */}
              <rect x="385" y="10" width="150" height="22" fill="#F6F5EE" />
              <text
                x="460"
                y="26"
                textAnchor="middle"
                className="font-mono text-[11.5px] font-bold fill-[#222426]"
              >
                +Y · Societal benefit
              </text>

              <rect x="395" y="550" width="130" height="22" fill="#F6F5EE" />
              <text
                x="460"
                y="566"
                textAnchor="middle"
                className="font-mono text-[11.5px] font-bold fill-[#222426]"
              >
                -Y · Societal damage
              </text>

              <rect x="72" y="247" width="145" height="22" fill="#F6F5EE" />
              <text
                x="76"
                y="262"
                textAnchor="start"
                className="font-mono text-[11px] font-bold fill-[#222426]"
              >
                -X · Own loss
              </text>

              <rect x="703" y="247" width="145" height="22" fill="#F6F5EE" />
              <text
                x="844"
                y="262"
                textAnchor="end"
                className="font-mono text-[11px] font-bold fill-[#222426]"
              >
                +X · Own profit
              </text>

              {/* Diagonal Dashed Vector: Presiune de spoliere sistemică din (+X, -Y) spre (-X, +Y) */}
              <g opacity={fig5BarrierIntact ? '0.25' : '1'}>
                <line
                  x1="605"
                  y1="395"
                  x2="345"
                  y2="200"
                  stroke="#222426"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  markerEnd="url(#arrow-dark)"
                />
                <rect
                  x="495"
                  y="335"
                  width="175"
                  height="24"
                  fill="#F6F5EE"
                  stroke="#222426"
                  strokeWidth="1.5"
                />
                <text
                  x="582.5"
                  y="351"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] font-bold fill-[#222426]"
                >
                  Systemic spoliation pressure
                </text>
              </g>

              {/* DINAMICA 1 & 2: Cele două bariere ortogonale în regim vulnerabil vs. consolidat */}
              {!fig5BarrierIntact ? (
                <g>
                  {/* Săgeată curbată punctată din Cadranul II spre Cadranul IV: Iluzia pedepsirii spoliatorilor */}
                  <path
                    d="M 330,175 Q 485,190 565,320"
                    fill="none"
                    stroke="#6E7376"
                    strokeWidth="1.8"
                    strokeDasharray="3 3"
                    markerEnd="url(#arrow-slate)"
                  />
                  <rect
                    x="395"
                    y="205"
                    width="165"
                    height="22"
                    fill="#F6F5EE"
                    stroke="#6E7376"
                    strokeWidth="1"
                  />
                  <text
                    x="477.5"
                    y="220"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] font-semibold fill-[#6E7376]"
                  >
                    The illusion of punishing the looters
                  </text>

                  {/* Traiectorie orizontală blocată de T-bar în #F01E1E la y=168 */}
                  <line
                    x1="260"
                    y1="168"
                    x2="444"
                    y2="168"
                    stroke="#F01E1E"
                    strokeWidth="3.5"
                  />
                  {/* T-BAR VERTICAL (Baraj extractiv împotriva mobilității meritocratice) */}
                  <line
                    x1="444"
                    y1="144"
                    x2="444"
                    y2="192"
                    stroke="#F01E1E"
                    strokeWidth="7"
                  />
                  <rect
                    x="254"
                    y="136"
                    width="184"
                    height="22"
                    fill="#F6F5EE"
                    stroke="#F01E1E"
                    strokeWidth="1.5"
                  />
                  <text
                    x="346"
                    y="151"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] font-bold fill-[#F01E1E]"
                  >
                    Extractive dam (blocked mobility)
                  </text>

                  {/* PLAFON ORIZONTAL FISURAT pe segmentul x=202..452 cu breșă deschisă la x=220..244 (în jurul lui x=232) */}
                  <line
                    x1="202"
                    y1="284"
                    x2="220"
                    y2="284"
                    stroke="#F01E1E"
                    strokeWidth="2.5"
                    strokeDasharray="5 3"
                  />
                  <line
                    x1="244"
                    y1="284"
                    x2="452"
                    y2="284"
                    stroke="#F01E1E"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                  />
                  <line
                    x1="202"
                    y1="296"
                    x2="220"
                    y2="296"
                    stroke="#F01E1E"
                    strokeWidth="2.5"
                    strokeDasharray="5 3"
                  />
                  <line
                    x1="244"
                    y1="296"
                    x2="452"
                    y2="296"
                    stroke="#F01E1E"
                    strokeWidth="2.5"
                    strokeDasharray="6 4"
                  />
                  <rect
                    x="242"
                    y="256"
                    width="210"
                    height="22"
                    fill="#F6F5EE"
                    stroke="#F01E1E"
                    strokeWidth="1.2"
                  />
                  <text
                    x="347"
                    y="271"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] font-bold fill-[#F01E1E]"
                  >
                    Cracked protective constitutional floor
                  </text>

                  {/* DINAMICA 2: Vectorul descendent masiv în #F01E1E la x=232 */}
                  <line
                    x1="232"
                    y1="185"
                    x2="232"
                    y2="400"
                    stroke="#F01E1E"
                    strokeWidth="5"
                    markerEnd="url(#arrow-red)"
                  />
                  <rect
                    x="132"
                    y="312"
                    width="200"
                    height="36"
                    fill="#F6F5EE"
                    stroke="#F01E1E"
                    strokeWidth="1.5"
                  />
                  <text
                    x="232"
                    y="327"
                    textAnchor="middle"
                    className="font-sans text-[10px] font-bold fill-[#F01E1E]"
                  >
                    Crash into self-sabotage (-X, -Y)
                  </text>
                  <text
                    x="232"
                    y="341"
                    textAnchor="middle"
                    className="font-sans text-[9px] font-semibold fill-[#6E7376]"
                  >
                    Hyperbolic discounting and punitive payback
                  </text>
                </g>
              ) : (
                <g>
                  {/* Barieră consolidată pe axa X (x=75..455, y=290) și tranziție orizontală deblocată în #E5B822 */}
                  <line
                    x1="75"
                    y1="290"
                    x2="455"
                    y2="290"
                    stroke="#222426"
                    strokeWidth="7"
                  />
                  <line
                    x1="75"
                    y1="290"
                    x2="455"
                    y2="290"
                    stroke="#E5B822"
                    strokeWidth="5"
                  />
                  <rect
                    x="195"
                    y="260"
                    width="255"
                    height="24"
                    fill="#E5B822"
                    stroke="#222426"
                    strokeWidth="1.5"
                  />
                  <text
                    x="322.5"
                    y="276"
                    textAnchor="middle"
                    className="font-sans text-[10px] font-bold fill-[#222426]"
                  >
                    Consolidated floor of constitutional protection
                  </text>
                  <line
                    x1="265"
                    y1="162"
                    x2="555"
                    y2="162"
                    stroke="#222426"
                    strokeWidth="5.5"
                  />
                  <line
                    x1="265"
                    y1="162"
                    x2="555"
                    y2="162"
                    stroke="#E5B822"
                    strokeWidth="4"
                    markerEnd="url(#arrow-gold)"
                  />
                  <rect
                    x="315"
                    y="132"
                    width="190"
                    height="22"
                    fill="#F6F5EE"
                    stroke="#222426"
                    strokeWidth="1.5"
                  />
                  <text
                    x="410"
                    y="147"
                    textAnchor="middle"
                    className="font-sans text-[10.5px] font-bold fill-[#222426]"
                  >
                    Transition to intelligent cooperation
                  </text>
                </g>
              )}
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig5SelectedQuadrant === 'I' &&
                  'Quadrant I (+X, +Y, intelligent cooperation). Inclusive citizens, entrepreneurs, and institutions pursue their own legitimate interest through work, innovation, and impersonal law-abiding, simultaneously generating added value and trust for the entire community (open access social order, North, Wallis & Weingast, 2009). The restorative transition from Quadrant II to Quadrant I is opened by removing the extractive dam and strengthening the constitutional floor through the architecture of institutional choice (Thaler & Sunstein, 2008).'}
                {fig5SelectedQuadrant === 'II' &&
                  'Quadrant II (-X, +Y, vulnerable / naïve, helpless citizens). Honest individuals who work, pay taxes and support the functioning of society (+Y), but who, due to information asymmetry and the precariousness of public services, experience a net loss of well-being, health and dignity (-X).'}
                {fig5SelectedQuadrant === 'IV' &&
                  'Quadrant IV (+X, -Y, extractive elites / banditry, bandits). Clientel political-economic networks and domestic parasitic bureaucracies (1. Endogenous Spoliation) — whose oligarchic factions threatened by the European rule of law have a tactical interest in encouraging anti-institutional chaos to save their impunity (+X) — as well as the external geopolitical aggressor (2. Russian External Catalyst), who appropriate substantial gains (+X) by spoliating public budgets and degrading institutions (-Y).'}
                {fig5SelectedQuadrant === 'III' &&
                  'Quadrant III (-X, -Y, social self-sabotage / self-destructive irrationality). In Cipolla\'s matrix, two orthogonal barriers operate: (1) horizontally, between Quadrant II and Quadrant I, the clientelistic oligarchy erects a vertical extractive dam (T-bar) against meritocratic mobility; (2) vertically, between Quadrant II and Quadrant III, the state fails to maintain the constitutional floor of protection. Under the effect of hyperbolic discounting of the future (Laibson, 1997) and the diversion of altruistic punishment (Fehr & Gächter, 2002) into self-destructive symbolic revenge (spiteful punishment) and antisocial punishment (antisocial punishment), the vulnerable citizen is pushed through the cracked constitutional floor of protection into Quadrant III, where extreme punitive voting simultaneously destroys the public good (-Y) and one\'s own socioeconomic security (-X).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURE 6: Comparative Model of Cognitive Processing in Crisis (Track A vs. Track B)
         ===================================================================== */}
      {figureId === 6 && (
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] px-5 py-3 border-b border-[#8C9BA5]">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#222426]">
              Regime of coregulation in acute shock
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setFig6InterventionActive(false);
                  setFig6ActiveTrack('A');
                  setFig6SelectedStep('trackA');
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig6ActiveTrack === 'A'
                    ? 'bg-[#F01E1E] text-[#F6F5EE] border-[#F01E1E]'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Simulation: Acute shock without correction (Track A loop dominance)
              </button>
              <button
                type="button"
                onClick={() => {
                  setFig6InterventionActive(true);
                  setFig6ActiveTrack('B');
                  setFig6SelectedStep('punte-cerc');
                }}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  fig6ActiveTrack === 'B'
                    ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                    : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                }`}
              >
                Simulation: CERC Institutional Co-alignment and Phase I (Activation of Track B)
              </button>
            </div>
          </div>

          <div className="w-full h-auto bg-[#F6F5EE] p-4 overflow-x-auto">
            <svg
              viewBox="0 0 920 660"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="920" height="660" fill="#F6F5EE" />
              <rect x="0" y="0" width="920" height="660" fill="url(#stipple-bg)" />

              {/* NOD UNIC DE BIFURCAȚIE CENTRAL SUPERIOR (x=300, y=16, width=320, height=58) */}
              <g
                onClick={() => setFig6SelectedStep('bifurcatie')}
                className="cursor-pointer"
              >
                <rect
                  x="300"
                  y="16"
                  width="320"
                  height="58"
                  fill={fig6SelectedStep === 'bifurcatie' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig6SelectedStep === 'bifurcatie' ? '0.25' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="460"
                  y="40"
                  textAnchor="middle"
                  className="font-sans text-[13px] font-bold fill-[#222426]"
                >
                  Single node of cognitive bifurcation
                </text>
                <text
                  x="460"
                  y="59"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Acute material stress and polycrisis
                </text>
              </g>

              {/* ============================================================
                  TRACK A: PROCESARE DEFENSIVĂ (Stânga)
                 ============================================================ */}
              <g opacity={fig6ActiveTrack === 'A' ? '1' : '0.35'}>
                {/* Săgeată de bifurcație spre Track A */}
                <path
                  d="M 370 74 C 315 102, 255 124, 230 155"
                  fill="none"
                  stroke="#F01E1E"
                  strokeWidth={fig6ActiveTrack === 'A' ? '3.5' : '2'}
                  strokeDasharray={fig6ActiveTrack === 'B' ? '4 3' : undefined}
                  markerEnd="url(#arrow-red)"
                />
                <rect
                  x="155"
                  y="94"
                  width="150"
                  height="22"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="1.2"
                />
                <text
                  x="230"
                  y="109"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] font-bold fill-[#F01E1E]"
                >
                  Track A: Defensive processing
                </text>

                {/* Header bar Track A (y=158..184) */}
                <rect
                  x="85"
                  y="158"
                  width="290"
                  height="26"
                  fill="#F01E1E"
                  fillOpacity="0.1"
                  stroke="#F01E1E"
                  strokeWidth="1.5"
                />
                <text
                  x="230"
                  y="175"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#F01E1E]"
                >
                  Track A · Defensive and reactive processing
                </text>

                {/* A1: Anxietate cronică (y=190..240) */}
                <g
                  onClick={() => {
                    setFig6InterventionActive(false);
                    setFig6ActiveTrack('A');
                    setFig6SelectedStep('anxietate');
                  }}
                  className="cursor-pointer"
                >
                  <rect
                    x="85"
                    y="190"
                    width="290"
                    height="50"
                    fill={fig6SelectedStep === 'anxietate' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'anxietate' ? '0.12' : '1'}
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="230"
                    y="210"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#222426]"
                  >
                    Chronic anxiety
                  </text>
                  <text
                    x="230"
                    y="228"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] fill-[#6E7376]"
                  >
                    dlPFC Inhibition (S1) / Motivated Rationalization (S2)
                  </text>
                </g>

                {/* Săgeată A1 -> A2 */}
                <line
                  x1="230"
                  y1="240"
                  x2="230"
                  y2="260"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-red)"
                />

                {/* A2: Nevoia de închidere cognitivă (NFCC) (y=262..312) */}
                <g
                  onClick={() => {
                    setFig6InterventionActive(false);
                    setFig6ActiveTrack('A');
                    setFig6SelectedStep('nfcc');
                  }}
                  className="cursor-pointer"
                >
                  <rect
                    x="85"
                    y="262"
                    width="290"
                    height="50"
                    fill={fig6SelectedStep === 'nfcc' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'nfcc' ? '0.12' : '1'}
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="230"
                    y="282"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#222426]"
                  >
                    The need for cognitive closure
                  </text>
                  <text
                    x="230"
                    y="300"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] fill-[#6E7376]"
                  >
                    Intolerance of ambiguity and urgency
                  </text>
                </g>

                {/* Săgeată A2 -> A3 */}
                <line
                  x1="230"
                  y1="312"
                  x2="230"
                  y2="332"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-red)"
                />

                {/* A3: Persona mimetică (y=334..384) */}
                <g
                  onClick={() => {
                    setFig6InterventionActive(false);
                    setFig6ActiveTrack('A');
                    setFig6SelectedStep('persona');
                  }}
                  className="cursor-pointer"
                >
                  <rect
                    x="85"
                    y="334"
                    width="290"
                    height="50"
                    fill={fig6SelectedStep === 'persona' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'persona' ? '0.12' : '1'}
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="230"
                    y="354"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#222426]"
                  >
                    Mimetic persona
                  </text>
                  <text
                    x="230"
                    y="372"
                    textAnchor="middle"
                    className="font-sans text-[10px] fill-[#6E7376]"
                  >
                    Formal conformism and "forms without substance"
                  </text>
                </g>

                {/* Vector bidirecțional Persona mimetică <-> Umbra colectivă */}
                <line
                  x1="210"
                  y1="384"
                  x2="210"
                  y2="422"
                  stroke="#F01E1E"
                  strokeWidth="2"
                  markerEnd="url(#arrow-red)"
                />
                <line
                  x1="250"
                  y1="424"
                  x2="250"
                  y2="386"
                  stroke="#F01E1E"
                  strokeWidth="2"
                  markerEnd="url(#arrow-red)"
                />
                <rect
                  x="150"
                  y="395"
                  width="160"
                  height="18"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="1"
                />
                <text
                  x="230"
                  y="408"
                  textAnchor="middle"
                  className="font-sans text-[9px] font-bold fill-[#F01E1E]"
                >
                  Tension and compensation
                </text>

                {/* A4: Umbra colectivă (y=426..476) */}
                <g
                  onClick={() => {
                    setFig6InterventionActive(false);
                    setFig6ActiveTrack('A');
                    setFig6SelectedStep('umbra');
                  }}
                  className="cursor-pointer"
                >
                  <rect
                    x="85"
                    y="426"
                    width="290"
                    height="50"
                    fill={fig6SelectedStep === 'umbra' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'umbra' ? '0.15' : '1'}
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="230"
                    y="446"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#F01E1E]"
                  >
                    The collective shadow
                  </text>
                  <text
                    x="230"
                    y="464"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] fill-[#6E7376]"
                  >
                    Puer Aeternus, basic assumptions (Bion) and projection
                  </text>
                </g>

                {/* Săgeată A4 -> A5 */}
                <line
                  x1="230"
                  y1="476"
                  x2="230"
                  y2="498"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-red)"
                />

                {/* A5: Buclă de feedback algoritmic (y=500..550) */}
                <g
                  onClick={() => {
                    setFig6InterventionActive(false);
                    setFig6ActiveTrack('A');
                    setFig6SelectedStep('bucla_algoritmica');
                  }}
                  className="cursor-pointer"
                >
                  <rect
                    x="85"
                    y="500"
                    width="290"
                    height="50"
                    fill={fig6SelectedStep === 'bucla_algoritmica' ? '#F01E1E' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'bucla_algoritmica' ? '0.15' : '1'}
                    stroke="#F01E1E"
                    strokeWidth="2"
                  />
                  <text
                    x="230"
                    y="520"
                    textAnchor="middle"
                    className="font-sans text-[11.5px] font-bold fill-[#F01E1E]"
                  >
                    Algorithmic feedback loop
                  </text>
                  <text
                    x="230"
                    y="538"
                    textAnchor="middle"
                    className="font-sans text-[10px] fill-[#6E7376]"
                  >
                    Viral amplification and emotional polarization
                  </text>
                </g>

                {/* ÎNCHIDEREA FIZICĂ A BUCLEI ALGORITMICE (R) ÎNAPOI LA ANXIETATE CRONICĂ */}
                <polyline
                  points="85,525 36,525 36,215 83,215"
                  fill="none"
                  stroke="#F01E1E"
                  strokeWidth="2.5"
                  strokeDasharray="5 3"
                  markerEnd="url(#arrow-red)"
                />
                <circle
                  cx="36"
                  cy="370"
                  r="14"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="2"
                />
                <text
                  x="36"
                  y="375"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#F01E1E]"
                >
                  R
                </text>
                <rect
                  x="2"
                  y="392"
                  width="68"
                  height="26"
                  fill="#F6F5EE"
                  stroke="#F01E1E"
                  strokeWidth="1"
                />
                <text
                  x="36"
                  y="403"
                  textAnchor="middle"
                  className="font-sans text-[7.5px] font-bold fill-[#F01E1E]"
                >
                  Self-amplification
                </text>
                <text
                  x="36"
                  y="413"
                  textAnchor="middle"
                  className="font-sans text-[8px] font-bold fill-[#F01E1E]"
                >
                  (feedback +)
                </text>
              </g>

              {/* RECUPERAREA SELECTIVĂ A INGENIOZITĂȚII (TRICKSTER) */}
              <g opacity={fig6ActiveTrack === 'B' ? '1' : '0.4'}>
                <path
                  d="M 375 451 C 430 451, 475 338, 543 338"
                  fill="none"
                  stroke="#6E7376"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  markerEnd="url(#arrow-slate)"
                />
                <rect
                  x="400"
                  y="380"
                  width="130"
                  height="30"
                  fill="#F6F5EE"
                  stroke="#6E7376"
                  strokeWidth="1"
                />
                <text
                  x="465"
                  y="393"
                  textAnchor="middle"
                  className="font-sans text-[8.5px] font-bold fill-[#222426]"
                >
                  Reclaiming ingenuity
                </text>
                <text
                  x="465"
                  y="404"
                  textAnchor="middle"
                  className="font-sans text-[8.5px] fill-[#6E7376]"
                >
                  Trickster integration
                </text>
              </g>

              {/* ============================================================
                  TRACK B: PROCESARE ADAPTATIVĂ (Dreapta) + PUNTE CERC
                 ============================================================ */}
              <g opacity={fig6ActiveTrack === 'B' ? '1' : '0.35'}>
                {/* Săgeată scurtă din nodul de bifurcație (550, 74) în plafonul casetei Punte CERC (690, 90) */}
                <path
                  d="M 550 74 C 600 80, 655 82, 690 90"
                  fill="none"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <path
                  d="M 550 74 C 600 80, 655 82, 690 90"
                  fill="none"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                />

                {/* Caseta intermediară: Punte: Calm instituțional CERC și măsuri Faza I (x=550, y=92, width=280, height=32) */}
                <g
                  onClick={() => {
                    setFig6InterventionActive(true);
                    setFig6ActiveTrack('B');
                    setFig6SelectedStep('punte-cerc');
                  }}
                  className="cursor-pointer"
                >
                  <rect
                    x="550"
                    y="92"
                    width="280"
                    height="32"
                    fill={fig6ActiveTrack === 'B' || fig6SelectedStep === 'punte-cerc' ? '#E5B822' : '#F6F5EE'}
                    fillOpacity={fig6ActiveTrack === 'B' ? '0.92' : '1'}
                    stroke="#222426"
                    strokeWidth="2"
                  />
                  <text
                    x="690"
                    y="112"
                    textAnchor="middle"
                    className="font-sans text-[10px] font-bold fill-[#222426]"
                  >
                    Bridge: CERC institutional calm and Phase I measures
                  </text>
                </g>

                {/* Săgeată verticală din baza casetei Punte CERC (690, 124) în antetul Track B (690, 155) + T-bar inhibiție reactivă și simbolul de întârziere || */}
                <line
                  x1="690"
                  y1="124"
                  x2="690"
                  y2="155"
                  stroke="#222426"
                  strokeWidth="4.5"
                />
                <line
                  x1="690"
                  y1="124"
                  x2="690"
                  y2="155"
                  stroke="#E5B822"
                  strokeWidth="3"
                  markerEnd="url(#arrow-gold)"
                />
                {/* T-bar orizontal și simbolul de latență deliberativă || pe canalul vertical Track B */}
                <line
                  x1="676"
                  y1="136"
                  x2="704"
                  y2="136"
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <line
                  x1="676"
                  y1="142"
                  x2="704"
                  y2="142"
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <rect
                  x="710"
                  y="130"
                  width="120"
                  height="18"
                  fill="#F6F5EE"
                  stroke="#6E7376"
                  strokeWidth="1"
                />
                <text
                  x="770"
                  y="142"
                  textAnchor="middle"
                  className="font-mono text-[8.5px] font-bold fill-[#222426]"
                >
                  || Deliberative Latency
                </text>

                {/* Header bar Track B (y=158..184) */}
                <rect
                  x="545"
                  y="158"
                  width="290"
                  height="26"
                  fill={fig6ActiveTrack === 'B' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig6ActiveTrack === 'B' ? '0.28' : '1'}
                  stroke="#222426"
                  strokeWidth="1.5"
                />
                <text
                  x="690"
                  y="175"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  Track B · Adaptive and Deliberative Processing
                </text>

                {/* B1: Acceptarea incertitudinii (y=190..234) */}
                <g
                  onClick={() => {
                    setFig6InterventionActive(true);
                    setFig6ActiveTrack('B');
                    setFig6SelectedStep('b1');
                  }}
                  className="cursor-pointer"
                >
                  <rect
                    x="545"
                    y="190"
                    width="290"
                    height="44"
                    fill={fig6SelectedStep === 'b1' ? '#E5B822' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'b1' ? '0.25' : '1'}
                    stroke="#222426"
                    strokeWidth="2"
                  />
                  <text
                    x="690"
                    y="208"
                    textAnchor="middle"
                    className="font-sans text-[11px] font-bold fill-[#222426]"
                  >
                    1. Acceptance of uncertainty
                  </text>
                  <text
                    x="690"
                    y="224"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] fill-[#6E7376]"
                  >
                    Negative capability and suspension of urgency
                  </text>
                </g>

                {/* Săgeată B1 -> B2 */}
                <line
                  x1="690"
                  y1="234"
                  x2="690"
                  y2="250"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <line
                  x1="690"
                  y1="234"
                  x2="690"
                  y2="250"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* B2: 2. Sistemul 2 și gândire activ deschisă (y=252..296) */}
                <g
                  onClick={() => {
                    setFig6InterventionActive(true);
                    setFig6ActiveTrack('B');
                    setFig6SelectedStep('b2');
                  }}
                  className="cursor-pointer"
                >
                  <rect
                    x="545"
                    y="252"
                    width="290"
                    height="44"
                    fill={fig6SelectedStep === 'b2' ? '#E5B822' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'b2' ? '0.25' : '1'}
                    stroke="#222426"
                    strokeWidth="2"
                  />
                  <text
                    x="690"
                    y="270"
                    textAnchor="middle"
                    className="font-sans text-[11px] font-bold fill-[#222426]"
                  >
                    2. System 2 and actively open-minded thinking
                  </text>
                  <text
                    x="690"
                    y="286"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] fill-[#6E7376]"
                  >
                    Prefrontal Regulation and Rank 2+ (Lefebvre)
                  </text>
                </g>

                {/* Săgeată B2 -> B3 */}
                <line
                  x1="690"
                  y1="296"
                  x2="690"
                  y2="312"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <line
                  x1="690"
                  y1="296"
                  x2="690"
                  y2="312"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* B3: Toleranța disonanței (y=314..362) */}
                <g
                  onClick={() => {
                    setFig6InterventionActive(true);
                    setFig6ActiveTrack('B');
                    setFig6SelectedStep('b3');
                  }}
                  className="cursor-pointer"
                >
                  <rect
                    x="545"
                    y="314"
                    width="290"
                    height="48"
                    fill={fig6SelectedStep === 'b3' ? '#E5B822' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'b3' ? '0.25' : '1'}
                    stroke="#222426"
                    strokeWidth="2"
                  />
                  <text
                    x="690"
                    y="332"
                    textAnchor="middle"
                    className="font-sans text-[11px] font-bold fill-[#222426]"
                  >
                    3. Tolerance of dissonance
                  </text>
                  <text
                    x="690"
                    y="348"
                    textAnchor="middle"
                    className="font-sans text-[9px] font-medium fill-[#222426]"
                  >
                    Integrating Trickster Ingenuity
                  </text>
                </g>

                {/* Săgeată B3 -> B4 */}
                <line
                  x1="690"
                  y1="362"
                  x2="690"
                  y2="378"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <line
                  x1="690"
                  y1="362"
                  x2="690"
                  y2="378"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* B4: Discernământ critic (y=380..424) */}
                <g
                  onClick={() => {
                    setFig6InterventionActive(true);
                    setFig6ActiveTrack('B');
                    setFig6SelectedStep('b4');
                  }}
                  className="cursor-pointer"
                >
                  <rect
                    x="545"
                    y="380"
                    width="290"
                    height="44"
                    fill={fig6SelectedStep === 'b4' ? '#E5B822' : '#F6F5EE'}
                    fillOpacity={fig6SelectedStep === 'b4' ? '0.25' : '1'}
                    stroke="#222426"
                    strokeWidth="2"
                  />
                  <text
                    x="690"
                    y="398"
                    textAnchor="middle"
                    className="font-sans text-[11px] font-bold fill-[#222426]"
                  >
                    4. Critical discernment
                  </text>
                  <text
                    x="690"
                    y="414"
                    textAnchor="middle"
                    className="font-sans text-[9.5px] fill-[#6E7376]"
                  >
                    Ternary Mediation and Work group (Bion)
                  </text>
                </g>

                {/* Săgeată B4 -> B5 */}
                <line
                  x1="690"
                  y1="424"
                  x2="690"
                  y2="440"
                  stroke="#222426"
                  strokeWidth="4"
                />
                <line
                  x1="690"
                  y1="424"
                  x2="690"
                  y2="440"
                  stroke="#E5B822"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-gold)"
                />

                {/* B5: Acțiune suverană și autonomă (y=442..490) */}
                <g
                  onClick={() => {
                    setFig6InterventionActive(true);
                    setFig6ActiveTrack('B');
                    setFig6SelectedStep('b5');
                  }}
                  className="cursor-pointer"
                >
                  <rect
                    x="545"
                    y="442"
                    width="290"
                    height="48"
                    fill={fig6ActiveTrack === 'B' || fig6SelectedStep === 'b5' ? '#E5B822' : '#F6F5EE'}
                    stroke="#222426"
                    strokeWidth="2.5"
                  />
                  <text
                    x="690"
                    y="462"
                    textAnchor="middle"
                    className="font-sans text-[12px] font-bold fill-[#222426]"
                  >
                    5. Sovereign and autonomous action
                  </text>
                  <text
                    x="690"
                    y="479"
                    textAnchor="middle"
                    className="font-sans text-[10px] font-medium fill-[#222426]"
                  >
                    Institutional cooperation on the Ego–Self axis
                  </text>
                </g>

                {/* Linie punctată spre Axa Ego–Self la bază */}
                <line
                  x1="690"
                  y1="490"
                  x2="690"
                  y2="554"
                  stroke="#222426"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  markerEnd="url(#arrow-dark)"
                />
                <rect
                  x="625"
                  y="512"
                  width="130"
                  height="18"
                  fill="#F6F5EE"
                  stroke="#8C9BA5"
                  strokeWidth="1"
                />
                <text
                  x="690"
                  y="525"
                  textAnchor="middle"
                  className="font-sans text-[8.5px] font-bold fill-[#6E7376]"
                >
                  Psychodynamic coherence
                </text>

                {/* Baza: Axa Ego–Self (cy=582) */}
                <ellipse
                  cx="690"
                  cy="582"
                  rx="145"
                  ry="24"
                  fill="#F6F5EE"
                  stroke="#222426"
                  strokeWidth="2"
                />
                <text
                  x="690"
                  y="586"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  Ego–Self axis · Collective individuation
                </text>

                {/* Buclă de consolidare a rezilienței */}
                <polyline
                  points="835,466 870,466 870,210 837,210"
                  fill="none"
                  stroke="#6E7376"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                  markerEnd="url(#arrow-slate)"
                />
                <rect
                  x="830"
                  y="322"
                  width="80"
                  height="32"
                  fill="#F6F5EE"
                  stroke="#6E7376"
                  strokeWidth="1"
                />
                <text
                  x="870"
                  y="335"
                  textAnchor="middle"
                  className="font-sans text-[8px] font-bold fill-[#6E7376]"
                >Resilience</text>
                <text
                  x="870"
                  y="346"
                  textAnchor="middle"
                  className="font-sans text-[8px] fill-[#6E7376]"
                >
                  consolidation</text>
              </g>
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig6SelectedStep === 'bifurcatie' &&
                  'Single bifurcation node (acute material stress and polycrisis). It represents the point of incidence of cognitive and socioeconomic shock. In the absence of a metacognitive pause and neurobiological reserve, the pressure of the crisis automatically pushes processing into the Track A defensive reaction.'}
                {fig6SelectedStep === 'punte-cerc' &&
                  'The CERC Institutional Corregulatory Bridge and Phase I Measures Because a citizen in acute shock and revolt against the Mimetic Institutional Persona cannot activate their own negative capability nor listen to partisan political rhetoric, the opening of Path B in the 0–72 hour window rests on a two-tier polycentric de-escalation architecture (CDC CERC protocol, Reynolds & Seeger, 2005): (1) tier technical-evidentiary depoliticized (DNSC, ANCOM, AEP, ONPCSB and the EDMO/BROD regional hub, with STIX/DISARM verifiable evidence and technical measures to limit algorithmic amplification) and (2) the level of proximity community and epistemic validators (doctors, teachers, canonical clerics anchored in proairesis discernment, civic leaders and independent journalists), subsequently stabilized by Phase I allostatic decompression.'}
                {fig6SelectedStep === 'anxietate' &&
                  'Chronic anxiety, dlPFC inhibition, and motivated rationalization (Track A). In disadvantaged communities (marked by precariousness), alertness activates the amygdala and the relevance detection network (SN, Menon, 2011), uncoupling the dorsolateral prefrontal cortex (dlPFC) and switching processing to System 1; symmetrically, in educated urban bubbles, intact System 2 is hijacked in the motivated rationalization of tribal outrage (Stanovich, 2009; Kahan, 2017).'}
                {fig6SelectedStep === 'nfcc' &&
                  'Need for cognitive closure (NFCC, Need for Cognitive Closure). Under the pressure of anxiety, the individual shows an acute intolerance of ambiguity (seizing) and an extreme urgency to adopt categorical, quick and simplifying conclusions (freezing), refusing any nuance or complexity.'}
                {fig6SelectedStep === 'persona' &&
                  'Mimetic Persona (Track A). Formal facade conformism and copying of non-integrated external models ("forms without substance"). The individual adopts ready-made discourses and appearances to simulate belonging and reduce dissonance, without real critical assimilation.'}
                {fig6SelectedStep === 'umbra' &&
                  'The Collective Shadow, the Puer Aeternus Archetype, and the Regressive Basic Assumptions (Bion, 1961). Under the strain of the Mimetic Persona, the community regresses from the "workgroup" state into the basic assumptions of dependency (baD), messianic hope (baP), or fight-flight (baF), projecting hostility onto scapegoats.'}
                {fig6SelectedStep === 'bucla_algoritmica' &&
                  'Algorithmic feedback loop and physical closure (R). Shadow resentment is captured by attention optimization algorithms and cognitive warfare operators, amplifying polarization. The arrow of the loop physically returns to Chronic Anxiety as a positive reaction (self-reinforcing loop – R), self-amplifying the crisis.'}
                {fig6SelectedStep === 'b1' &&
                  '1. Acceptance of uncertainty (Track B). The entry point into adaptive processing is negative capability (Bion, 1962, 1970)—resistance to the urge to shut down cognition prematurely (resistance to NFCC) and calm acceptance of the unknown without panic. In the midst of acute shock (0–72h), this metacognitive break is opened by the two-tier polycentric architecture (the depoliticized technical agencies with STIX/DISARM evidence and the proximity community validators, according to CDC CERC principles, Reynolds & Seeger, 2005), which provides the population with an external framework of epistemic safety.'}
                {fig6SelectedStep === 'b2' &&
                  '2. System 2 and actively open-minded thinking (Track B). Supported by allostatic decompression and Phase I algorithmic gain-limiting technical measures, executive regulation of the prefrontal network (dlPFC and vmPFC) regains control over amygdala impulses. Coupled with actively open-minded thinking, epistemic humility and Rank 2+ strategic reflexivity (Lefebvre), it prevents motivated rationalization and allows for logical analysis and historical contextualization.'}
                {fig6SelectedStep === 'b3' &&
                  '3. Dissonance Tolerance and Trickster Ingenuity Integration (Track B). The individual tolerates the contradictions inherent in reality and creatively recovers the contents of the collective shadow—adaptive ingenuity, adaptability, and subversive humor (the archetypal figure of the Trickster) transformed from destructive resentment into a resource for survival and innovation.'}
                {fig6SelectedStep === 'b4' &&
                  '4. Critical Discernment and Work group (Track B). Ternary semiotic mediation (sign–object–interpreter) and moral discernment extract the community from the captivity of basic assumptions and reconstitute it as a rational reality-oriented "work group" (Bion, 1961).'}
                {fig6SelectedStep === 'b5' &&
                  '5. Sovereign Action and the Ego–Self Axis (Track B). The culmination of adaptive processing: responsible civic action, decisional autonomy, and deep coherence on the Ego–Self axis, producing genuine systemic resilience.'}
                {(fig6SelectedStep === 'trackA' ||
                  (!fig6SelectedStep && fig6ActiveTrack === 'A')) &&
                  'Track A (defensive processing): a closed trajectory in a self-reinforcing (R) loop, governed by anxiety, intolerance of ambiguity (NFCC), mimetic conformity, and regression into the underlying assumptions of the collective shadow, exploited by digital platforms.'}
                {(fig6SelectedStep === 'trackB' ||
                  (!fig6SelectedStep && fig6ActiveTrack === 'B')) &&
                  'Track B (adaptive processing): a deliberate sequence of cognitive and psychosocial transformations, opened through the CERC institutional coregulatory bridge and reinforced on the Ego–Self axis.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          FIGURE 7: The Three-Phase Sequential Protocol (Page 39)
         ===================================================================== */}
      {figureId === 7 && (
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#F6F5EE] px-5 py-3 border-b border-[#8C9BA5]">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#222426]">
              Resilience rebuilding phases
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {([1, 2, 3] as const).map((ph) => (
                <button
                  key={ph}
                  onClick={() => {
                    setFig7ActivePhase(ph);
                    setFig7SelectedNode(`faza${ph}`);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    fig7ActivePhase === ph
                      ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                      : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                  }`}
                >
                  {ph === 1
                    ? 'Phase I · Decompression and digital hygiene'
                    : ph === 2
                      ? 'Phase II · Prebunking and moral validation'
                      : 'Phase III · Rule of law and individuality'}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-auto bg-[#F6F5EE] p-4 overflow-x-auto">
            <svg
              viewBox="0 0 960 560"
              className={svgClass}
              role="img"
              aria-label={meta.title}
            >
              <SharedSvgDefs />
              <rect x="0" y="0" width="960" height="560" fill="#F6F5EE" />
              <rect x="0" y="0" width="960" height="560" fill="url(#stipple-bg)" />

              {/* TOP FRONTON: Arhitectura suveranitatii democratice si sinteza modernitatii organice (x=30, y=20, width=900, height=62) */}
              <g
                onClick={() => setFig7SelectedNode('fronton')}
                className="cursor-pointer"
              >
                <rect
                  x="30"
                  y="20"
                  width="900"
                  height="62"
                  fill="#E5B822"
                  fillOpacity={fig7SelectedNode === 'fronton' ? '0.35' : '0.22'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="480"
                  y="45"
                  textAnchor="middle"
                  className="font-sans text-[13.5px] font-bold fill-[#222426]"
                >
                  The Architecture of Democratic Sovereignty and the Synthesis of Organic Modernity
                </text>
                <text
                  x="480"
                  y="65"
                  textAnchor="middle"
                  className="font-sans text-[11px] fill-[#6E7376]"
                >
                  Operational Closure of the Rule of Law · Critical Discernment · Enhanced Ego–Self Axis
                </text>
              </g>

              {/* 3 Upward Gold Arrows into Top Fronton (y=134 -> y=86, 52px corridor) */}
              <line
                x1="155"
                y1="134"
                x2="155"
                y2="86"
                stroke="#222426"
                strokeWidth="4"
              />
              <line
                x1="155"
                y1="134"
                x2="155"
                y2="86"
                stroke="#E5B822"
                strokeWidth="2.5"
                markerEnd="url(#arrow-gold)"
              />
              <line
                x1="480"
                y1="134"
                x2="480"
                y2="86"
                stroke="#222426"
                strokeWidth="4"
              />
              <line
                x1="480"
                y1="134"
                x2="480"
                y2="86"
                stroke="#E5B822"
                strokeWidth="2.5"
                markerEnd="url(#arrow-gold)"
              />
              <line
                x1="805"
                y1="134"
                x2="805"
                y2="86"
                stroke="#222426"
                strokeWidth="4"
              />
              <line
                x1="805"
                y1="134"
                x2="805"
                y2="86"
                stroke="#E5B822"
                strokeWidth="2.5"
                markerEnd="url(#arrow-gold)"
              />

              {/* ============================================================
                  COLUMN 1: FAZA I (x=30, width=250, center=155)
                 ============================================================ */}
              <g
                onClick={() => {
                  setFig7ActivePhase(1);
                  setFig7SelectedNode('faza1');
                }}
                className="cursor-pointer"
              >
                <rect
                  x="30"
                  y="134"
                  width="250"
                  height="68"
                  fill={fig7ActivePhase === 1 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7ActivePhase === 1 ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="155"
                  y="156"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Phase I · Decompression and
                </text>
                <text
                  x="155"
                  y="172"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  digital hygiene
                </text>
                <text
                  x="155"
                  y="190"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] fill-[#6E7376]"
                >
                  0–72h acute triage · 0–12 months structural
                </text>
              </g>

              {/* Sub-box 1.1 */}
              <g
                onClick={() => {
                  setFig7ActivePhase(1);
                  setFig7SelectedNode('faza1-1');
                }}
                className="cursor-pointer"
                opacity={fig7ActivePhase === 1 ? '1' : '0.75'}
              >
                <rect
                  x="30"
                  y="222"
                  width="250"
                  height="58"
                  fill={fig7SelectedNode === 'faza1-1' || fig7ActivePhase === 1 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'faza1-1' ? '0.35' : fig7ActivePhase === 1 ? '0.14' : '1'}
                  stroke={fig7ActivePhase === 1 ? '#222426' : '#8C9BA5'}
                  strokeWidth={fig7SelectedNode === 'faza1-1' ? '2.5' : fig7ActivePhase === 1 ? '2' : '1.5'}
                />
                <text
                  x="155"
                  y="246"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  1.1 Acute triage 0–72h: CERC and DSA measures
                </text>
                <text
                  x="155"
                  y="265"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] fill-[#6E7376]"
                >
                  STIX/DISARM and slowing virality
                </text>
              </g>

              {/* Sub-box 1.2 */}
              <g
                onClick={() => {
                  setFig7ActivePhase(1);
                  setFig7SelectedNode('faza1-2');
                }}
                className="cursor-pointer"
                opacity={fig7ActivePhase === 1 ? '1' : '0.75'}
              >
                <rect
                  x="30"
                  y="294"
                  width="250"
                  height="58"
                  fill={fig7SelectedNode === 'faza1-2' || fig7ActivePhase === 1 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'faza1-2' ? '0.35' : fig7ActivePhase === 1 ? '0.14' : '1'}
                  stroke={fig7ActivePhase === 1 ? '#222426' : '#8C9BA5'}
                  strokeWidth={fig7SelectedNode === 'faza1-2' ? '2.5' : fig7ActivePhase === 1 ? '2' : '1.5'}
                />
                <text
                  x="155"
                  y="318"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  1.2 Blocking illicit funding (24–72h)
                </text>
                <text
                  x="155"
                  y="337"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] fill-[#6E7376]"
                >
                  Art. 9–10 DSA, CNA/AEP, ONPCSB and Reg. accounts/MiCA
                </text>
              </g>

              {/* Sub-box 1.3 */}
              <g
                onClick={() => {
                  setFig7ActivePhase(1);
                  setFig7SelectedNode('faza1-3');
                }}
                className="cursor-pointer"
                opacity={fig7ActivePhase === 1 ? '1' : '0.75'}
              >
                <rect
                  x="30"
                  y="366"
                  width="250"
                  height="58"
                  fill={fig7SelectedNode === 'faza1-3' || fig7ActivePhase === 1 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'faza1-3' ? '0.35' : fig7ActivePhase === 1 ? '0.14' : '1'}
                  stroke={fig7ActivePhase === 1 ? '#222426' : '#8C9BA5'}
                  strokeWidth={fig7SelectedNode === 'faza1-3' ? '2.5' : fig7ActivePhase === 1 ? '2' : '1.5'}
                />
                <text
                  x="155"
                  y="390"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  1.3 Allostatic decompression (0–12 months)
                </text>
                <text
                  x="155"
                  y="409"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] fill-[#6E7376]"
                >
                  Debureaucratizing e-Estonia and basic services
                </text>
              </g>

              {/* Horizontal Causal Arrow Faza I -> Faza II (x=280..355, 75px corridor) + Poarta 1 */}
              <line
                x1="280"
                y1="168"
                x2="349"
                y2="168"
                stroke="#222426"
                strokeWidth="3"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="317"
                y1="126"
                x2="317"
                y2="168"
                stroke="#222426"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <g
                onClick={() => setFig7SelectedNode('poarta1')}
                className="cursor-pointer"
              >
                <rect
                  x="242"
                  y="96"
                  width="150"
                  height="30"
                  fill={fig7SelectedNode === 'poarta1' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'poarta1' ? '0.35' : '0.98'}
                  stroke="#222426"
                  strokeWidth="1.5"
                />
                <text
                  x="317"
                  y="109"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] font-bold fill-[#222426]"
                >
                  Gate 1: Unblocking dlPFC
                </text>
                <text
                  x="317"
                  y="121"
                  textAnchor="middle"
                  className="font-sans text-[8.5px] fill-[#6E7376]"
                >
                  no boomerang effect
                </text>
              </g>

              {/* ============================================================
                  COLUMN 2: FAZA II (x=355, width=250, center=480)
                 ============================================================ */}
              <g
                onClick={() => {
                  setFig7ActivePhase(2);
                  setFig7SelectedNode('faza2');
                }}
                className="cursor-pointer"
              >
                <rect
                  x="355"
                  y="134"
                  width="250"
                  height="68"
                  fill={fig7ActivePhase === 2 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7ActivePhase === 2 ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="480"
                  y="156"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Phase II · Prebunking and
                </text>
                <text
                  x="480"
                  y="172"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  moral validation
                </text>
                <text
                  x="480"
                  y="190"
                  textAnchor="middle"
                  className="font-sans text-[10px] fill-[#6E7376]"
                >
                  Operational horizon · 1–3 years
                </text>
              </g>

              {/* Sub-box 2.1 */}
              <g
                onClick={() => {
                  setFig7ActivePhase(2);
                  setFig7SelectedNode('faza2-1');
                }}
                className="cursor-pointer"
                opacity={fig7ActivePhase === 2 ? '1' : '0.75'}
              >
                <rect
                  x="355"
                  y="222"
                  width="250"
                  height="58"
                  fill={fig7SelectedNode === 'faza2-1' || fig7ActivePhase === 2 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'faza2-1' ? '0.35' : fig7ActivePhase === 2 ? '0.14' : '1'}
                  stroke={fig7ActivePhase === 2 ? '#222426' : '#8C9BA5'}
                  strokeWidth={fig7SelectedNode === 'faza2-1' ? '2.5' : fig7ActivePhase === 2 ? '2' : '1.5'}
                />
                <text
                  x="480"
                  y="246"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  2.1 Community Validation and Wide Bridges
                </text>
                <text
                  x="480"
                  y="265"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] fill-[#6E7376]"
                >
                  Associative infrastructure and positive contagion
                </text>
              </g>

              {/* Sub-box 2.2 */}
              <g
                onClick={() => {
                  setFig7ActivePhase(2);
                  setFig7SelectedNode('faza2-2');
                }}
                className="cursor-pointer"
                opacity={fig7ActivePhase === 2 ? '1' : '0.75'}
              >
                <rect
                  x="355"
                  y="294"
                  width="250"
                  height="58"
                  fill={fig7SelectedNode === 'faza2-2' || fig7ActivePhase === 2 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'faza2-2' ? '0.35' : fig7ActivePhase === 2 ? '0.14' : '1'}
                  stroke={fig7ActivePhase === 2 ? '#222426' : '#8C9BA5'}
                  strokeWidth={fig7SelectedNode === 'faza2-2' ? '2.5' : fig7ActivePhase === 2 ? '2' : '1.5'}
                />
                <text
                  x="480"
                  y="318"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  2.2 Prebunking and Ebbinghaus consolidation
                </text>
                <text
                  x="480"
                  y="337"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] fill-[#6E7376]"
                >
                  Metacognitive training and actively open-minded thinking
                </text>
              </g>

              {/* Sub-box 2.3 */}
              <g
                onClick={() => {
                  setFig7ActivePhase(2);
                  setFig7SelectedNode('faza2-3');
                }}
                className="cursor-pointer"
                opacity={fig7ActivePhase === 2 ? '1' : '0.75'}
              >
                <rect
                  x="355"
                  y="366"
                  width="250"
                  height="58"
                  fill={fig7SelectedNode === 'faza2-3' || fig7ActivePhase === 2 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'faza2-3' ? '0.35' : fig7ActivePhase === 2 ? '0.14' : '1'}
                  stroke={fig7ActivePhase === 2 ? '#222426' : '#8C9BA5'}
                  strokeWidth={fig7SelectedNode === 'faza2-3' ? '2.5' : fig7ActivePhase === 2 ? '2' : '1.5'}
                />
                <text
                  x="480"
                  y="390"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  2.3 Christian-secular axiological partnership
                </text>
                <text
                  x="480"
                  y="409"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] fill-[#6E7376]"
                >
                  Imago Dei, moral discernment and autonomy
                </text>
              </g>

              {/* Horizontal Causal Arrow Faza II -> Faza III (x=605..680, 75px corridor) + Poarta 2 */}
              <line
                x1="605"
                y1="168"
                x2="674"
                y2="168"
                stroke="#222426"
                strokeWidth="3"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="642"
                y1="126"
                x2="642"
                y2="168"
                stroke="#222426"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <g
                onClick={() => setFig7SelectedNode('poarta2')}
                className="cursor-pointer"
              >
                <rect
                  x="567"
                  y="96"
                  width="150"
                  height="30"
                  fill={fig7SelectedNode === 'poarta2' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'poarta2' ? '0.35' : '0.98'}
                  stroke="#222426"
                  strokeWidth="1.5"
                />
                <text
                  x="642"
                  y="109"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] font-bold fill-[#222426]"
                >
                  Gate 2: Civic pressure
                </text>
                <text
                  x="642"
                  y="121"
                  textAnchor="middle"
                  className="font-sans text-[8.5px] fill-[#6E7376]"
                >
                  in the Narrow Corridor
                </text>
              </g>

              {/* ============================================================
                  COLUMN 3: FAZA III (x=680, width=250, center=805)
                 ============================================================ */}
              <g
                onClick={() => {
                  setFig7ActivePhase(3);
                  setFig7SelectedNode('faza3');
                }}
                className="cursor-pointer"
              >
                <rect
                  x="680"
                  y="134"
                  width="250"
                  height="68"
                  fill={fig7ActivePhase === 3 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7ActivePhase === 3 ? '0.35' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="805"
                  y="156"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Phase III · Rule of law and
                </text>
                <text
                  x="805"
                  y="172"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  individuation
                </text>
                <text
                  x="805"
                  y="190"
                  textAnchor="middle"
                  className="font-sans text-[10px] fill-[#6E7376]"
                >
                  Strategic horizon · 3–10 years
                </text>
              </g>

              {/* Sub-box 3.1 */}
              <g
                onClick={() => {
                  setFig7ActivePhase(3);
                  setFig7SelectedNode('faza3-1');
                }}
                className="cursor-pointer"
                opacity={fig7ActivePhase === 3 ? '1' : '0.75'}
              >
                <rect
                  x="680"
                  y="222"
                  width="250"
                  height="58"
                  fill={fig7SelectedNode === 'faza3-1' || fig7ActivePhase === 3 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'faza3-1' ? '0.35' : fig7ActivePhase === 3 ? '0.14' : '1'}
                  stroke={fig7ActivePhase === 3 ? '#222426' : '#8C9BA5'}
                  strokeWidth={fig7SelectedNode === 'faza3-1' ? '2.5' : fig7ActivePhase === 3 ? '2' : '1.5'}
                />
                <text
                  x="805"
                  y="246"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  3.1 Operational Closure and Fiscal Equity
                </text>
                <text
                  x="805"
                  y="265"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] fill-[#6E7376]"
                >
                  Justice, meritocracy and fiscal symmetry (CCR 694/2015)
                </text>
              </g>

              {/* Sub-box 3.2 */}
              <g
                onClick={() => {
                  setFig7ActivePhase(3);
                  setFig7SelectedNode('faza3-2');
                }}
                className="cursor-pointer"
                opacity={fig7ActivePhase === 3 ? '1' : '0.75'}
              >
                <rect
                  x="680"
                  y="294"
                  width="250"
                  height="58"
                  fill={fig7SelectedNode === 'faza3-2' || fig7ActivePhase === 3 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'faza3-2' ? '0.35' : fig7ActivePhase === 3 ? '0.14' : '1'}
                  stroke={fig7ActivePhase === 3 ? '#222426' : '#8C9BA5'}
                  strokeWidth={fig7SelectedNode === 'faza3-2' ? '2.5' : fig7ActivePhase === 3 ? '2' : '1.5'}
                />
                <text
                  x="805"
                  y="318"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  3.2 Polycentric governance (Ostrom)
                </text>
                <text
                  x="805"
                  y="337"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] fill-[#6E7376]"
                >
                  Decentralization and professionalization Law 566/2004
                </text>
              </g>

              {/* Sub-box 3.3 */}
              <g
                onClick={() => {
                  setFig7ActivePhase(3);
                  setFig7SelectedNode('faza3-3');
                }}
                className="cursor-pointer"
                opacity={fig7ActivePhase === 3 ? '1' : '0.75'}
              >
                <rect
                  x="680"
                  y="366"
                  width="250"
                  height="58"
                  fill={fig7SelectedNode === 'faza3-3' || fig7ActivePhase === 3 ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'faza3-3' ? '0.35' : fig7ActivePhase === 3 ? '0.14' : '1'}
                  stroke={fig7ActivePhase === 3 ? '#222426' : '#8C9BA5'}
                  strokeWidth={fig7SelectedNode === 'faza3-3' ? '2.5' : fig7ActivePhase === 3 ? '2' : '1.5'}
                />
                <text
                  x="805"
                  y="390"
                  textAnchor="middle"
                  className="font-sans text-[11px] font-bold fill-[#222426]"
                >
                  3.3 Collective individuation and double auditing
                </text>
                <text
                  x="805"
                  y="409"
                  textAnchor="middle"
                  className="font-sans text-[9.5px] fill-[#6E7376]"
                >
                  Ego-Self axis, Court of Accounts and art. 40 DSA
                </text>
              </g>

              {/* 3 Upward Dark Arrows from Bottom Foundation to the 3 Phases (y=468 -> y=430) */}
              <line
                x1="155"
                y1="468"
                x2="155"
                y2="430"
                stroke="#222426"
                strokeWidth="2"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="480"
                y1="468"
                x2="480"
                y2="430"
                stroke="#222426"
                strokeWidth="2"
                markerEnd="url(#arrow-dark)"
              />
              <line
                x1="805"
                y1="468"
                x2="805"
                y2="430"
                stroke="#222426"
                strokeWidth="2"
                markerEnd="url(#arrow-dark)"
              />

              {/* BOTTOM FOUNDATION: Determinanții Lalonde–Dever (x=30, y=470, width=900, height=56) */}
              <g
                onClick={() => setFig7SelectedNode('fundament')}
                className="cursor-pointer"
              >
                <rect
                  x="30"
                  y="470"
                  width="900"
                  height="56"
                  fill={fig7SelectedNode === 'fundament' ? '#E5B822' : '#F6F5EE'}
                  fillOpacity={fig7SelectedNode === 'fundament' ? '0.22' : '1'}
                  stroke="#222426"
                  strokeWidth="2.5"
                />
                <text
                  x="480"
                  y="492"
                  textAnchor="middle"
                  className="font-sans text-[12px] font-bold fill-[#222426]"
                >
                  Foundation: The 4 Determinants of the Lalonde–Dever Model (Layer A, B and C)
                </text>
                <text
                  x="480"
                  y="511"
                  textAnchor="middle"
                  className="font-sans text-[10.5px] fill-[#6E7376]"
                >
                  Neurobiological Reserve · Digital and Sociospatial Environment · Lifestyle · Institutional System
                </text>
              </g>
            </svg>

            <div className="mt-4 pt-4 border-t border-[#222426] bg-[#F6F5EE] p-3.5">
              <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                {fig7SelectedNode === 'faza1' &&
                  'Phase I · Double horizon: 0–72h (acute tactical triage) · 0–12 months (structural decompression). Stop the reactive loop in Track A through three pillars: (1.1) 0–72h acute triage through CDC CERC communication (Reynolds & Seeger, 2005), STIX/DISARM standardization, and DSA technical measures to limit algorithmic amplification; (1.2) blocking illicit financial flows (Follow the Money) within 24–72h (art. 9–10 DSA, CNA/AEP/CMF, ONPCSB, central account register and MiCA); and (1.3) structural allostatic decompression 0–12 months through e-Estonia debureaucratization and basic services.'}
                {fig7SelectedNode === 'faza1-1' &&
                  '1.1 Acute triage 0–72h: CERC and DSA measures. In the first 72 hours of a hybrid crisis, stopping amygdala contagion is achieved through the CDC CERC empathetic and verifiable communication protocol (Reynolds & Seeger, 2005), the evidentiary standardization of manipulation indicators in STIX/DISARM format (DNSC and EDMO/BROD), and the activation of emergency technical measures against artificial algorithmic amplification (Art. 34–35 DSA).'}
                {fig7SelectedNode === 'faza1-2' &&
                  '1.2 Blocking illicit financial flows (Follow the Money, 24–72h). Mandatory coupling of orders to act against illegal content (art. 9 of DSA / art. 7–8 of Law no. 50/2024) with orders to provide information regarding the identity of payers (art. 10 of DSA / art. 9 of Law no. 50/2024) issued by the relevant sectoral authorities (CNA for online audiovisual, AEP/BEC, DNSC, prosecutors) and procedurally coordinated by ANCOM as DSC; the real-time verification of the code of the financial trustee (CMF) and the application of Regulation (EU) 2024/900 (TTPA, art. 5 par. 2, art. 11–12 and 16, applicable from October 10, 2025, together with art. 16–17 of O.U.G. no. 1/2025 adopted specifically for the presidential election of May 2025) through AEP/BEC; and the operative suspension within 24-72h of suspicious transactions and conversions from crypto-assets to fiat currency (off-ramp) ordered exclusively by ONPCSB (art. 33-34 of Law no. 129/2019), followed by notification to the PICCJ and querying the electronic central register for payment accounts and bank accounts (art. 61¹ of Law no. 207/2015 – CPF and 33 para. 4-5 of Law no. 129/2019, under the prudential supervision of the BNR and ASF. no. 10/2025 (the national mechanism for TFR Regulation (EU) 2023/1113 – Travel Rule and the supervision of crypto-asset service providers (CASP) regarding the fight against money laundering and terrorist financing according to art. 32¹ of Law no. 129/2019), together with Regulation (EU) 2023/1114 (MiCA).'}
                {fig7SelectedNode === 'faza1-3' &&
                  '1.3 Allostatic decompression (0–12 months). Reducing the everyday allostatic burden and restoring the prefrontal reserve (dlPFC) of citizens through radical administrative simplification according to the e-Estonia model (Once-Only principle, interoperability without a counter) and by guaranteeing the predictability of essential public services in vulnerable communities.'}
                {fig7SelectedNode === 'poarta1' &&
                  'Causal gate 1: Unlocking the dlPFC (preventing the three failure mechanisms of premature fact-checking). It explains why the order Phase I → Phase II cannot be reversed: even if the strictly factual boomerang effect is variable on neutral themes, under conditions of acute allostatic exhaustion, institutional distrust and high identity stakes, the premature administration of fact-checking campaigns triggers three dysfunctional mechanisms (Nyhan & Reifler, 2010; Kahan, 2017; Roozenbeek et al., 2022): (1) the identity and worldview backfire boomerang effect, whereby the correction is perceived as a symbolic aggression of some extractive institutions; (2) the familiarity effect of the repeated myth (familiarity backfire) under stress and cognitive fatigue; and (3) generalized epistemic cynicism toward official discourse.'}
                {fig7SelectedNode === 'faza2' &&
                  'Phase II · Medium operational horizon, 1–3 years. Once the prefrontal cortex regains functional availability, Phase II rebuilds the Orientation phase of the OODA loop through three pillars: (2.1) empathic community validation and wide-bridge networks; (2.2) prebunking preventive training calibrated on the Ebbinghaus forgetting curve; and (2.3) Christian-secular axiological partnership.'}
                {fig7SelectedNode === 'faza2-1' &&
                  '2.1 Community validation and wide bridges (1–3 years). The reconstruction of horizontal trust in the proximity associative infrastructure (schools, parishes, libraries, community centers, cooperatives) and the formation of networks with "wide bridges" (wide bridges, Centola, 2018) capable of supporting the complex contagion of cooperative norms and extracting the community from regressive basic assumptions (Bion, 1961).'}
                {fig7SelectedNode === 'faza2-2' &&
                  '2.2 Prebunking and Ebbinghaus consolidation (1–3 years). Preventive psychological inoculation against manipulation techniques (prebunking, McGuire, 1964; Roozenbeek & van der Linden, 2019, 2022), supported by periodic reminder sessions calibrated on the forgetting curve of Ebbinghaus (1885/1913) and the training of actively open-minded thinking (Stanovich, 2009) against motivated rationalization.'}
                {fig7SelectedNode === 'faza2-3' &&
                  '2.3 Christian-secular axiological partnership (1–3 years). Communicative reconciliation (Habermas, 2006; Taylor, 2007) between the Christian ethic of the inalienable dignity of the person (Imago Dei, proairesis) and secular constitutional universalism, protecting the functional autonomy of both spheres against their parasitism as militaristic state ideology (Hovorun, 2018; Kalaitzidis et al., 2022) or mimetic falsification (Solovyov, 1900/1994).'}
                {fig7SelectedNode === 'poarta2' &&
                  'Causal Gateway 2: Civic Pressure in the “Narrow Corridor” (Acemoglu & Robinson, 2019). It explains why Phase III depends on the maturation of Phase II: no constitutional architecture or legislative reform can be self-enforcing in the absence of a vigilant civil society equipped with critical discernment, bridging social capital (Putnam, 2000) and mobilization capacity (the "Red Queen effect") to force the state to stay within the "narrow corridor" of democratic accountability.'}
                {fig7SelectedNode === 'faza3' &&
                  'Phase III · Strategic horizon, 3–10 years. It consolidates the architecture of democratic sovereignty through three pillars: (3.1) the operational closure of the rule of law and fiscal equality; (3.2) polycentric governance (Ostrom, 1990) and cooperative reform; and (3.3) the collective individuation on the Ego–Self axis, guaranteed by the double independent audit.'}
                {fig7SelectedNode === 'faza3-1' &&
                  '3.1 Operational closure and fiscal isonomy (3–10 years). Eliminating the vulnerabilities of institutional blackmail and perpetual interim appointments (art. 509–510 O.U.G. no. 57/2019), the meritocratic professionalization of the public body and the establishment of fiscal isonomy: based on the principle of fiscal symmetry established by CCR Decision no. 694/2015 (referring to the old art. 124 par. 1 related to art. 70 of O.G. no. 92/2003 — the current art. 182 CPF regarding the state\'s obligation to pay fiscal interest for sums improperly collected or not repaid on time), the ferenda law requires the amendment of art. 167 and art. 182 CPF (automatic automatic compensation of mutual tax claims under art. 167 CPF and ex officio crediting of interest and penalties in the same IBAN under art. 182 CPF) and completion of the procedural framework from art. 281 CPF (distinct from the current art. 281 CPF which aims to communicate the decision to resolve the appeal and from art. 499-500 of the Administrative Code regarding the civil servant\'s liability towards the public authority) for triggering the joint and several patrimonial liability and the effective recourse when the court definitively finds that the annulled tax act was issued in bad faith or gross negligence.'}
                {fig7SelectedNode === 'faza3-2' &&
                  '3.2 Polycentric governance (Ostrom, 1990) and economic solidarity (3–10 years). Decision-making decentralization, the development of autonomous local centers for solving community problems and the professionalization of the governance of agricultural cooperatives according to Law no. 566/2004: amendment by law ferenda of art. 31 and art. 33–35 (the seat of the matter for the executive director) in conjunction with the rules of incompatibility in art. 16 para. (4) and art. 29 regarding the board of directors, for the recruitment by competition of an independent executive director and the express prohibition of relatives and relatives up to the 3rd degree, along with the guarantees and fiscal facilities in art. 76 and art. 76¹, for the generation of bridging social capital (Putnam, 2000).'}
                {fig7SelectedNode === 'faza3-3' &&
                  '3.3 Collective individuation and double independent audit (3–10 years). The critical integration of the collective shadow and the consolidation of the Ego-Self axis (overcoming the syndrome of "forms without substance"), doubled by a permanent verification mechanism: the financial-operational audit of the Court of Accounts (art. 2 letters b and d and art. 28 par. 2 of Law no. 94/1992) and the scientific audit of university consortia ("approved researchers" art. 40 DSA), using The European framework of digital competences (DigComp), the methodologies of the National Institute for Audiovisual Education KAVI and decision-making and participatory educational simulations.'}
                {fig7SelectedNode === 'fronton' &&
                  'The synthesis of organic modernity and democratic sovereignty. Western constitutional and security forms cease to be "forms without substance" superficially imitated by an extractive elite and become the natural institutional expression of a regenerated native cultural and moral background.'}
                {fig7SelectedNode === 'fundament' &&
                  'The Lalonde–Dever Foundation (Lalonde, 1974; Dever, 1976). It demonstrates that the cognitive resilience of a nation depends simultaneously on the organization of the institutional system, the socioeconomic and digital environment, the associative lifestyle and the neurobiological reserve of the citizens.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. Footer Bar (Legendă academică și notă metodologică) */}
      <div className="border-t border-[#8C9BA5] px-5 py-3 text-sm text-[#6E7376] font-serif italic space-y-2">
        <p className="leading-relaxed text-[#222426]">
          <span className="font-bold not-italic">{meta.title}. </span>
          {meta.caption}
        </p>
        <p className="text-xs font-mono not-italic text-[#6E7376] leading-relaxed">
          Methodological note · {meta.chapterRef}. {meta.methodologicalNote}
        </p>
      </div>
    </div>
  );
};

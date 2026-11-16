import React, { useState, useRef, useEffect } from 'react';
import { GLOSSARY_CONCEPTS } from '../data/tablesAndReference';
import { BookOpen, X, ArrowRight } from 'lucide-react';

interface ContextualTooltipProps {
  conceptId: string;
  matchedText: string;
  onSelectConcept?: (conceptId: string) => void;
}

export const ContextualTooltip: React.FC<ContextualTooltipProps> = ({
  conceptId,
  matchedText,
  onSelectConcept
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const concept = GLOSSARY_CONCEPTS.find((c) => c.id === conceptId);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  if (!concept) {
    return <>{matchedText}</>;
  }

  return (
    <span
      ref={containerRef}
      className="relative inline"
      onMouseEnter={() => {
        if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
          setIsOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
          setIsOpen(false);
        }
      }}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className={`inline font-serif border-b border-dotted border-[#222426] transition-colors cursor-pointer rounded-none ${
          isOpen
            ? 'bg-[#E5B822] text-[#222426] font-semibold'
            : 'bg-transparent text-[#222426] hover:bg-[#E5B822]/20'
        }`}
        title={`Contextual definition (${concept.term})`}
      >
        {matchedText}
      </button>

      {isOpen && (
        <span
          role="dialog"
          aria-label={concept.term}
          className="fixed bottom-4 left-3 right-3 z-50 sm:absolute sm:bottom-full sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:mb-2 sm:w-[340px] bg-[#222426] text-[#F6F5EE] border-2 border-[#E5B822] shadow-[4px_4px_0px_#222426] p-4 text-left font-sans normal-case block"
        >
          <span className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-[#6E7376]">
            <span className="text-[11px] font-mono font-bold text-[#E5B822]">
              LAYER {concept.stratum} · {concept.domain}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="p-0.5 text-[#F6F5EE] hover:text-[#E5B822] cursor-pointer"
              aria-label="Close the explanation"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </span>

          <span className="font-serif text-sm font-bold text-[#F6F5EE] block leading-snug">
            {concept.term}
          </span>
          <span className="text-[11px] font-mono text-[#8C9BA5] block mt-0.5 mb-2">
            {concept.authors}
          </span>
          <span className="text-xs text-[#F6F5EE] leading-relaxed block mb-3">
            {concept.definition}
          </span>

          {onSelectConcept && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectConcept(concept.id);
                setIsOpen(false);
              }}
              className="w-full px-3 py-1.5 text-[11px] font-mono font-semibold bg-[#E5B822] text-[#222426] hover:bg-[#E5B822]/85 transition-colors cursor-pointer flex items-center justify-between gap-2"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3 h-3 shrink-0" />
                <span>Open the tab in the inspector</span>
              </span>
              <ArrowRight className="w-3 h-3 shrink-0" />
            </button>
          )}
        </span>
      )}
    </span>
  );
};

export interface GlossaryPatternRule {
  conceptId: string;
  patternId?: string;
  regex: RegExp;
}

export const INLINE_GLOSSARY_PATTERNS: GlossaryPatternRule[] = [
  // Stratul A: Instituțional & Sociologic
  {
    conceptId: 'stratul-a',
    patternId: 'stratul-a',
    regex: /(?<!\p{L})(Layer\s+A(?:\s*[:–-]\s*Institutional\s+Architecture)?|Stratum\s+A|Stratul\s+A)(?!\p{L})/u
  },
  {
    conceptId: 'macro-micro-macro',
    patternId: 'coleman-boat',
    regex: /(?<!\p{L})(Macro[–-]Micro[–-]Macro|Coleman(?:'s|\s+s)?\s+boat)(?!\p{L})/iu
  },
  {
    conceptId: 'macro-micro-macro',
    patternId: 'robinson-ecological',
    regex: /(?<!\p{L})(ecological\s+fallacy|anti-ecological\s+fallacy)(?!\p{L})/iu
  },
  {
    conceptId: 'macro-micro-macro',
    patternId: 'popper-falsifiability',
    regex: /(?<!\p{L})(falsifiabilit(?:y|ies)|falsifiable)(?!\p{L})/iu
  },
  {
    conceptId: 'determinantii-lalonde-dever',
    patternId: 'determinantii-lalonde-dever',
    regex: /(?<!\p{L})(Lalonde[–-]Dever(?:\s+(?:model|determinants|epidemiological\s+model))?|public\s+(?:and\s+mental\s+)?health\s+determinants)(?!\p{L})/iu
  },
  {
    conceptId: 'inchidere-operationala',
    patternId: 'inchidere-operationala',
    regex: /(?<!\p{L})(operational\s+closure|functional\s+autonomy)(?!\p{L})/iu
  },
  {
    conceptId: 'inchidere-operationala',
    patternId: 'insule-inchidere-operationala',
    regex: /(?<!\p{L})(islands?\s+of\s+operational\s+closure)(?!\p{L})/iu
  },
  {
    conceptId: 'forme-fara-fond',
    patternId: 'forme-fara-fond',
    regex: /(?<!\p{L})(forms?\s+without\s+(?:substance|foundation|background)|evolution\s+proceeds\s+from\s+form\s+to\s+substance)(?!\p{L})/iu
  },
  {
    conceptId: 'institutii-extractive',
    patternId: 'institutii-extractive',
    regex: /(?<!\p{L})(extractive\s+institutions?)(?!\p{L})/iu
  },
  {
    conceptId: 'institutii-extractive',
    patternId: 'ordine-acces-limitat',
    regex: /(?<!\p{L})(limited\s+access\s+(?:social\s+)?orders?)(?!\p{L})/iu
  },
  {
    conceptId: 'institutii-extractive',
    patternId: 'coridorul-ingust',
    regex: /(?<!\p{L})(narrow\s+corridor)(?!\p{L})/iu
  },
  {
    conceptId: 'familism-amoral',
    patternId: 'familism-amoral',
    regex: /(?<!\p{L})(amoral\s+familism)(?!\p{L})/iu
  },
  {
    conceptId: 'familism-amoral',
    patternId: 'capital-social-punte',
    regex: /(?<!\p{L})(bridging\s+social\s+capital)(?!\p{L})/iu
  },
  {
    conceptId: 'guvernanta-policentrica-ostrom',
    patternId: 'guvernanta-policentrica-ostrom',
    regex: /(?<!\p{L})(polycentric\s+governance)(?!\p{L})/iu
  },
  {
    conceptId: 'protocolul-secvential-trei-faze',
    patternId: 'protocolul-secvential-trei-faze',
    regex: /(?<!\p{L})(three[–\s-]phase\s+sequential\s+protocol|sequential\s+protocol|resilience\s+reconstruction\s+protocol)(?!\p{L})/iu
  },
  {
    conceptId: 'grup-control-regional',
    patternId: 'grup-control-regional',
    regex: /(?<!\p{L})(regional\s+control\s+group)(?!\p{L})/iu
  },
  {
    conceptId: 'spalare-informationala',
    patternId: 'spalare-informationala',
    regex: /(?<!\p{L})(Doppelgänger|Matryoshka|Matrioșka|Pravda\s+network|information\s+laundering|informational\s+laundering)(?!\p{L})/iu
  },
  {
    conceptId: 'sistema',
    patternId: 'sistema',
    regex: /(?<!\p{L})(sistema\s+network|sistema|siloviki|kompromat|deathonomics|economy\s+of\s+death)(?!\p{L})/iu
  },
  {
    conceptId: 'matricea-cipolla',
    patternId: 'matricea-cipolla',
    regex: /(?<!\p{L})(Cipolla(?:'s)?\s+(?:behavioral\s+)?matrix|Carlo\s+M\.\s+Cipolla)(?!\p{L})/iu
  },
  {
    conceptId: 'matricea-cipolla',
    patternId: 'scontare-hiperbolica',
    regex: /(?<!\p{L})(hyperbolic\s+discounting)(?!\p{L})/iu
  },
  {
    conceptId: 'matricea-cipolla',
    patternId: 'pedeapsa-altruista-spiteful',
    regex: /(?<!\p{L})(spiteful\s+punishment|altruistic\s+punishment|self-destructive\s+symbolic\s+revenge)(?!\p{L})/iu
  },
  {
    conceptId: 'matricea-cipolla',
    patternId: 'pedeapsa-antisociala',
    regex: /(?<!\p{L})(antisocial\s+punishment)(?!\p{L})/iu
  },
  {
    conceptId: 'vid-reprezentare-intermediere',
    patternId: 'vid-reprezentare',
    regex: /(?<!\p{L})((?:political\s+)?representation\s+vacuum|(?:void|vacuum)\s+of\s+(?:political\s+)?representation)(?!\p{L})/iu
  },
  {
    conceptId: 'vid-reprezentare-intermediere',
    patternId: 'intermediere-oportunista',
    regex: /(?<!\p{L})(opportunistic\s+(?:political\s+)?intermediation|opportunistic\s+brokerage)(?!\p{L})/iu
  },
  {
    conceptId: 'isonomie-fiscala-arhitectura-alegerii',
    patternId: 'isonomie-fiscala',
    regex: /(?<!\p{L})(fiscal\s+isonomy|fiscal\s+symmetry|mirror\s+penalization|ex\s+officio\s+(?:automatic\s+)?compensation)(?!\p{L})/iu
  },
  {
    conceptId: 'isonomie-fiscala-arhitectura-alegerii',
    patternId: 'arhitectura-alegerii',
    regex: /(?<!\p{L})((?:institutional\s+)?choice\s+architecture)(?!\p{L})/iu
  },

  // Stratul B: Neurocognitiv, Cibernetic & Semiotic
  {
    conceptId: 'stratul-b',
    patternId: 'stratul-b',
    regex: /(?<!\p{L})(Layer\s+B(?:\s*[:–-]\s*Neurocognitive\s+Processing)?|Stratum\s+B|Stratul\s+B)(?!\p{L})/u
  },
  {
    conceptId: 'al-saselea-domeniu',
    patternId: 'al-saselea-domeniu',
    regex: /(?<!\p{L})(sixth\s+(?:operational\s+)?domain|cognitive\s+domain|cognitive\s+space)(?!\p{L})/iu
  },
  {
    conceptId: 'uzura-alostatica',
    patternId: 'uzura-alostatica',
    regex: /(?<!\p{L})(allostatic\s+(?:load|wear(?:\s+and\s+tear)?)|allostasis)(?!\p{L})/iu
  },
  {
    conceptId: 'axa-hpa-dlpf',
    patternId: 'axa-hpa',
    regex: /(?<!\p{L})(hypothalamic-pituitary-adrenal\s+axis|HPA\s+axis)(?!\p{L})/iu
  },
  {
    conceptId: 'axa-hpa-dlpf',
    patternId: 'triada-retelelor-dlpf',
    regex: /(?<!\p{L})(salience\s+(?:detection\s+)?network|triple\s+network\s+model|dorsolateral\s+prefrontal\s+cortex|dlPFC)(?!\p{L})/iu
  },
  {
    conceptId: 'bucla-ooda',
    patternId: 'bucla-ooda',
    regex: /(?<!\p{L})(OODA\s+(?:decision\s+)?loop|Orientation\s+phase)(?!\p{L})/iu
  },
  {
    conceptId: 'control-reflexiv-rang-secund',
    patternId: 'control-reflexiv',
    regex: /(?<!\p{L})((?:second-order\s+)?reflexive\s+control|Rank\s+(?:0|1|2|3|0\/1|2\+)(?:\s+and\s+Rank\s+3)?\s+of\s+(?:strategic\s+)?reflexivity)(?!\p{L})/iu
  },
  {
    conceptId: 'control-reflexiv-rang-secund',
    patternId: 'precision-weighting-friston',
    regex: /(?<!\p{L})(aberrant\s+precision[–\s-]weighting|precision\s+weighting|predictive\s+shortcut|free\s+energy\s+principle)(?!\p{L})/iu
  },
  {
    conceptId: 'inchidere-cognitiva-seizing-freezing',
    patternId: 'inchidere-cognitiva-seizing-freezing',
    regex: /(?<!\p{L})(need\s+for\s+cognitive\s+closure|cognitive\s+closure|epistemic\s+freezing|seizing|freezing)(?!\p{L})/iu
  },
  {
    conceptId: 'capturare-dopaminergica',
    patternId: 'capturare-dopaminergica',
    regex: /(?<!\p{L})(dopaminergic\s+(?:capture|hijacking)|reward\s+prediction\s+error|D2\s+(?:postsynaptic\s+)?(?:dopamine\s+)?receptor\s+desensitization)(?!\p{L})/iu
  },
  {
    conceptId: 'sistemele-etice-lefebvre',
    patternId: 'sistemele-etice-lefebvre',
    regex: /(?<!\p{L})(first\s+ethical\s+system|second\s+ethical\s+system|Lefebvre(?:'s)?\s+(?:ethical\s+systems|moral\s+algebra)|moral\s+doubt\s+and\s+self-criticism)(?!\p{L})/iu
  },
  {
    conceptId: 'mediere-ternara-vs-binara',
    patternId: 'mediere-ternara-vs-binara',
    regex: /(?<!\p{L})(binary\s+(?:semiotics|semiosis|logic)\s+of\s+annihilation|ternary\s+(?:semiosis|(?:semiotic\s+)?mediation))(?!\p{L})/iu
  },
  {
    conceptId: 'dubla-falsificare-axiologica',
    patternId: 'dubla-falsificare-axiologica',
    regex: /(?<!\p{L})(double\s+axiological\s+falsification)(?!\p{L})/iu
  },
  {
    conceptId: 'antilumea-epstein',
    patternId: 'antilumea-epstein',
    regex: /(?<!\p{L})(Russkii\s+Antimir|Antiworld|Anti-world)(?!\p{L})/iu
  },
  {
    conceptId: 'starea-bobok',
    patternId: 'starea-bobok',
    regex: /(?<!\p{L})(Bobok\s+state)(?!\p{L})/iu
  },
  {
    conceptId: 'russkii-mir-etnofiletism',
    patternId: 'russkii-mir-etnofiletism',
    regex: /(?<!\p{L})(Russkii\s+Mir|ethnophyletist\s+heresy|ethnophyletism)(?!\p{L})/iu
  },
  {
    conceptId: 'triada-ilin-gumiliov-dughin',
    patternId: 'triada-ilin-gumiliov-dughin',
    regex: /(?<!\p{L})(Ivan\s+Ilyin|Ivan\s+Ilin|Lev\s+Gumilev|Lev\s+Gumiliov|Aleksandr\s+Dugin|Aleksandr\s+Dughin)(?!\p{L})/iu
  },
  {
    conceptId: 'cognitia-protectoare-a-identitatii',
    patternId: 'identity-protective-cognition',
    regex: /(?<!\p{L})(identity[–\s-]protective\s+cognition)(?!\p{L})/iu
  },
  {
    conceptId: 'cognitia-protectoare-a-identitatii',
    patternId: 'motivated-system-2',
    regex: /(?<!\p{L})(motivated\s+System\s+2\s+reasoning|dysrationalia)(?!\p{L})/iu
  },
  {
    conceptId: 'cognitia-protectoare-a-identitatii',
    patternId: 'aomt-smerenie-epistemica',
    regex: /(?<!\p{L})(actively\s+open[–\s-]minded\s+thinking|epistemic\s+humility)(?!\p{L})/iu
  },
  {
    conceptId: 'bifurcare-track-a-track-b',
    patternId: 'bifurcare-track-a-track-b',
    regex: /(?<!\p{L})(maladaptive\s+reactive\s+Track\s+A|adaptive\s+deliberative\s+Track\s+B|reactive\s+Track\s+A|deliberative\s+Track\s+B|Track\s+A|Track\s+B)(?!\p{L})/iu
  },
  {
    conceptId: 'prebunking-inoculare',
    patternId: 'prebunking-inoculare',
    regex: /(?<!\p{L})(prebunking|psychological\s+inoculation|inoculation\s+theory|DigComp|KAVI)(?!\p{L})/iu
  },
  {
    conceptId: 'curba-uitarii-ebbinghaus',
    patternId: 'curba-uitarii-ebbinghaus',
    regex: /(?<!\p{L})((?:Ebbinghaus(?:'s)?\s+)?forgetting\s+curve|spaced\s+mnemonic\s+consolidation)(?!\p{L})/iu
  },
  {
    conceptId: 'contagiune-complexa',
    patternId: 'contagiune-complexa',
    regex: /(?<!\p{L})(complex\s+(?:social\s+)?contagion|wide\s+bridges)(?!\p{L})/iu
  },
  {
    conceptId: 'model-collapse-mad',
    patternId: 'model-collapse-mad',
    regex: /(?<!\p{L})(Model\s+Collapse|Model\s+Autophagy\s+Disorder|collapse\s+of\s+generative\s+models)(?!\p{L})/iu
  },
  {
    conceptId: 'model-collapse-mad',
    patternId: 'rag-poisoning',
    regex: /(?<!\p{L})(inference-time\s+RAG\s+poisoning|RAG\s+poisoning(?:\s+at\s+inference\s+time)?|Retrieval-Augmented\s+Generation\s+\(RAG\))(?!\p{L})/iu
  },
  {
    conceptId: 'abaissement-du-niveau-mental',
    patternId: 'abaissement-du-niveau-mental',
    regex: /(?<!\p{L})(abaissement\s+du\s+niveau\s+mental|lowering\s+of\s+conscious\s+tension)(?!\p{L})/iu
  },
  {
    conceptId: 'filtrul-axiologic',
    patternId: 'filtrul-axiologic',
    regex: /(?<!\p{L})(Christian[–-]secular\s+moral\s+filter|axiological\s+(?:and\s+normative\s+)?filter|Imago\s+Dei)(?!\p{L})/iu
  },
  {
    conceptId: 'capacitate-negativa-bion',
    patternId: 'capacitate-negativa-bion',
    regex: /(?<!\p{L})(negative\s+capability)(?!\p{L})/iu
  },
  {
    conceptId: 'proairesis',
    patternId: 'proairesis',
    regex: /(?<!\p{L})(proairesis|moral\s+discernment)(?!\p{L})/iu
  },
  {
    conceptId: 'coreglare-cerc-validatori',
    patternId: 'cerc-punte-coreglare',
    regex: /(?<!\p{L})(CDC\s+CERC|Crisis\s+and\s+Emergency\s+Risk\s+Communication|(?:institutional\s+)?co-regulation\s+bridge)(?!\p{L})/iu
  },
  {
    conceptId: 'coreglare-cerc-validatori',
    patternId: 'validatori-proximitate-stix-disarm',
    regex: /(?<!\p{L})(proximity\s+(?:community|epistemic|moral)\s+validators|validators\s+of\s+proximity|STIX\/DISARM|EDMO\/BROD)(?!\p{L})/iu
  },

  // Stratul C: Psihodinamic, Arhetipal & Axiologic
  {
    conceptId: 'stratul-c',
    patternId: 'stratul-c',
    regex: /(?<!\p{L})(Layer\s+C(?:\s*[:–-]\s*Cultural\s+Unconscious)?|Stratum\s+C|Stratul\s+C)(?!\p{L})/u
  },
  {
    conceptId: 'axa-ego-sine',
    patternId: 'axa-ego-sine',
    regex: /(?<!\p{L})(Ego[–-]Self\s+axis)(?!\p{L})/iu
  },
  {
    conceptId: 'persona-si-umbra',
    patternId: 'persona-mimetica',
    regex: /(?<!\p{L})(mimetic\s+(?:institutional\s+)?Persona|institutional\s+Persona)(?!\p{L})/iu
  },
  {
    conceptId: 'persona-si-umbra',
    patternId: 'umbra-colectiva',
    regex: /(?<!\p{L})(collective\s+Shadow)(?!\p{L})/iu
  },
  {
    conceptId: 'arhetipul-trickster',
    patternId: 'arhetipul-trickster',
    regex: /(?<!\p{L})(Trickster\s+archetype|Trickster)(?!\p{L})/iu
  },
  {
    conceptId: 'enantiodromie',
    patternId: 'enantiodromie',
    regex: /(?<!\p{L})(enantiodromia)(?!\p{L})/iu
  },
  {
    conceptId: 'trauma-aleasa',
    patternId: 'trauma-aleasa',
    regex: /(?<!\p{L})(chosen\s+traumas?)(?!\p{L})/iu
  },
  {
    conceptId: 'trauma-aleasa',
    patternId: 'incapacitatea-de-a-tine-doliu',
    regex: /(?<!\p{L})(inability\s+to\s+mourn)(?!\p{L})/iu
  },
  {
    conceptId: 'proiectie-paranoida',
    patternId: 'proiectie-paranoida',
    regex: /(?<!\p{L})(paranoid\s+projection|scapegoating|scapegoat)(?!\p{L})/iu
  },
  {
    conceptId: 'identificarea-cu-agresorul',
    patternId: 'identificarea-cu-agresorul',
    regex: /(?<!\p{L})(identification\s+with\s+the\s+(?:geopolitical\s+)?aggressor|existential\s+abandonment\s+anxiety)(?!\p{L})/iu
  },
  {
    conceptId: 'aparare-maniacala-izolationism',
    patternId: 'aparare-maniacala-izolationism',
    regex: /(?<!\p{L})(manic\s+defense|isolationist\s+(?:sovereignism|sovereignty|neutrality))(?!\p{L})/iu
  },
  {
    conceptId: 'ipoteze-baza-grup-lucru-bion',
    patternId: 'ipoteze-baza-bion',
    regex: /(?<!\p{L})((?:Bion(?:'s)?\s+)?basic\s+assumptions?|basic\s+assumption\s+of\s+(?:dependency|messianic\s+pairing|fight-flight)|baD|baF|baP)(?!\p{L})/iu
  },
  {
    conceptId: 'ipoteze-baza-grup-lucru-bion',
    patternId: 'grup-de-lucru-bion',
    regex: /(?<!\p{L})(work\s+group)(?!\p{L})/iu
  },
  {
    conceptId: 'puer-aeternus',
    patternId: 'puer-aeternus',
    regex: /(?<!\p{L})(Puer\s+Aeternus|tutelary\s+paternalistic\s+state)(?!\p{L})/iu
  },
  {
    conceptId: 'functia-transcendenta',
    patternId: 'functia-transcendenta',
    regex: /(?<!\p{L})(transcendent\s+function)(?!\p{L})/iu
  },
  {
    conceptId: 'individuare-colectiva',
    patternId: 'individuare-colectiva',
    regex: /(?<!\p{L})(collective\s+individuation)(?!\p{L})/iu
  },
  {
    conceptId: 'modernitate-organica',
    patternId: 'modernitate-organica',
    regex: /(?<!\p{L})(organic\s+modernity)(?!\p{L})/iu
  }
];


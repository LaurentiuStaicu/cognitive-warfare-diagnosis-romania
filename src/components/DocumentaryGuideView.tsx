import React, { useState } from 'react';
import { Film, Volume2, Clapperboard, BookOpen, Layers, ArrowRight } from 'lucide-react';

interface DocumentaryGuideViewProps {
  onOpenMonographReader: () => void;
}

export const DocumentaryGuideView: React.FC<DocumentaryGuideViewProps> = ({
  onOpenMonographReader
}) => {
  const [activeActTab, setActiveActTab] = useState<number>(1);

  const ACTS_DATA = [
    {
      actNumber: 1,
      code: 'ACT I',
      title: 'The macro framework and the systemic root',
      timeframe: 'Minute 00:00 – 12:30',
      focus: 'Layer A (Institutional Sociology & Foundationless Forms)',
      visualDirection:
        'Wide frames of Bucharest institutional architecture in contrast with depopulated villages; cool lighting, deep shadows, cinemascope aesthetics 2.39:1.',
      audioDesign:
        'Synthetic low frequencies (sub-bass drone 40Hz) superimposed over the background noise of the printing press and the tick-tock of the institutional metronome.',
      keyScenes: [
        {
          sceneNumber: '1.1',
          heading: 'The historical anomaly of forms without substance (Maiorescu & Zeletin)',
          narration:
            'The state apparatus adopted the formal architecture of the Euro-Atlantic constitutional democracy, but deeply preserving the patrimonial and extractive dynamics of power relations.',
          scriptNote:
            'Sober voiceover, without dramatic inflections. Abrupt transition from the text of the 1866 law to aerial images of contemporary bureaucratic buildings.'
        },
        {
          sceneNumber: '1.2',
          heading: 'Everyday insecurity and chronic allostatic wear and tear',
          narration:
            'Before the first encounter with the digital propaganda discourse, the Romanian citizen is already biologically exhausted by the daily wear and tear of dysfunctional public services.',
          scriptNote:
            'Alert montage of everyday sequences: hospital waiting rooms, administrative counters, blocked urban traffic. Syncopated montage rhythm.'
        }
      ]
    },
    {
      actNumber: 2,
      code: 'ACT II',
      title: 'The anatomy of tension and discursive camouflage',
      timeframe: 'Minute 12:30 – 25:00',
      focus: 'Layer B (Putinist Antiworld & Double Axiological Falsification)',
      visualDirection:
        'Visual chromatic duality: the bright left (European Christian-secular synthesis) versus the dark right (the Antiworld\'s sovereignist camouflage).',
      audioDesign:
        'Digitally distorted echoic choruses, organ harmonies layered over cybernetic synth pulses.',
      keyScenes: [
        {
          sceneNumber: '2.1',
          heading: 'The Sistema Network and the Bobok State (Dostoiévski & Thom)',
          narration:
            'The Russian operation of cognitive warfare does not aim at rational persuasion, but at the semiotic parasitism of the discursive space and the cynical transgression of all norms.',
          scriptNote:
            'Overlay of textures from social networks, conspiratorial comments, parasitized orthodox symbols and sequences from revisionist discourses.'
        },
        {
          sceneNumber: '2.2',
          heading: 'The double axiological falsification of conservatism',
          narration:
            'Defensive nationalism is hijacked from within, turning community values  into tools of anti-institutional mobilization.',
          scriptNote:
            'Close ups of old icons in mirror with smartphone screens illuminated in the dark. Strong light-shadow contrast.'
        }
      ]
    },
    {
      actNumber: 3,
      code: 'ACT III',
      title: 'System loops and OODA capture',
      timeframe: 'Minute 25:00 – 37:30',
      focus: 'Layer B/C (OODA Loop, Reflexive Control & Shadow Filters)',
      visualDirection:
        'Animated cyber diagrams overlaid on real images; gold and red vector graphics representing information and interference flows.',
      audioDesign:
        'Binaural Beats pulses (Alpha/Beta state), high frequency morse signals, short alarm acoustic triggers.',
      keyScenes: [
        {
          sceneNumber: '3.1',
          heading: 'Hijacking the Orientation phase (Boyd & Lefebvre)',
          narration:
            'Subjects receive information constructed to confirm their deepest fears, manipulating their prefrontal discernment and forcing them to make self-destructive decisions.',
          scriptNote:
            'Visualization of the OODA loop in 3D space with decision nodes short-circuited by second-order attacks.'
        },
        {
          sceneNumber: '3.2',
          heading: 'Conversion to Quadrant III of Cipolla\'s Matrix',
          narration:
            'The captured citizen acts against his own security and community interests, generating a collective self-sabotage in a state of crisis.',
          scriptNote:
            'Cipolla\'s two-dimensional matrix plot superimposed over sequences of anonymizing protests and network panic.'
        }
      ]
    },
    {
      actNumber: 4,
      code: 'ACT IV',
      title: 'Sequential protocol and reconstruction',
      timeframe: 'Minute 37:30 – 50:00',
      focus: 'Societal Reconstruction (The Lalonde–Dever Protocol & Organic Modernity)',
      visualDirection:
        'Transition from cold-monochrome tones to warm natural light, open institutional landscapes, modern educational spaces and research laboratories.',
      audioDesign:
        'Integrated organic acoustic piano with string quartet supported by a steady ascending tempo (72 BPM).',
      keyScenes: [
        {
          sceneNumber: '4.1',
          heading: 'Phase I: Allostatic decompression and digital hygiene (0–12 months)',
          narration:
            'Restoring prefrontal executive capacity first requires reducing stress pressure and regulating the digital information environment.',
          scriptNote:
            'Sequences from cybersecurity centers, classrooms with media literacy programs, and youth communities.'
        },
        {
          sceneNumber: '4.2',
          heading: 'Phase II & III: Prebunking and organic modernity (1–10 years)',
          narration:
            'The reconstruction of long-term societal resilience is grounded in Ostrom\'s polycentricity, calibrated prebunking, and the defense of the anthropology of the free person.',
          scriptNote:
            'Final panoramic shot of Romanian civil society anchored in the Euro-Atlantic space, closing in full sunlight.'
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Editorial Banner */}
      <div className="bg-[#F6F5EE] border-2 border-[#222426] p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#8C9BA5]">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#6E7376]">
              <Film className="w-4 h-4 text-[#222426]" />
              <span>Documentary Directing & Production Guide · Cinematographic Treatment</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#222426] leading-tight">
              Documentary Director & Production Guide "Diagnosis of Cognitive Warfare"
            </h1>
            <p className="text-xs sm:text-sm text-[#222426] leading-relaxed max-w-[70ch]">
              This secondary technical deliverable is decoupled from the text of the academic monograph. He provides directorial specifications, sound cues, and cinematic frame sequencing for the audiovisual adaptation of the research.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={onOpenMonographReader}
              className="px-4 py-2.5 text-xs font-serif font-bold text-[#222426] bg-[#E5B822] border border-[#222426] hover:bg-[#E5B822]/85 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>I return to the Academic Monograph</span>
            </button>
          </div>
        </div>

        {/* Act Selector Buttons */}
        <div className="mt-6">
          <div className="text-xs font-mono font-semibold text-[#222426] mb-2.5">
            Select the Cinematic Act to view the script and directing cues:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ACTS_DATA.map((act) => (
              <button
                key={act.actNumber}
                onClick={() => setActiveActTab(act.actNumber)}
                className={`p-3.5 border text-left transition-all cursor-pointer ${
                  activeActTab === act.actNumber
                    ? 'border-2 border-[#222426] bg-[#E5B822]/25'
                    : 'border-[#8C9BA5] bg-[#F6F5EE] hover:border-[#222426]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#6E7376]">
                  <span className="font-bold text-[#222426]">{act.code}</span>
                  <span>{act.timeframe}</span>
                </div>
                <div className="font-serif text-xs sm:text-sm font-semibold text-[#222426] mt-1 leading-snug">
                  {act.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Act Treatment Workspace */}
      {(() => {
        const currentAct = ACTS_DATA.find((a) => a.actNumber === activeActTab) || ACTS_DATA[0];
        return (
          <div className="space-y-6">
            <div className="bg-[#F6F5EE] border-2 border-[#222426] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#222426]">
                <div>
                  <span className="text-xs font-mono font-bold text-[#222426] uppercase tracking-wider">
                    {currentAct.code} · Directing Specifications
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222426] mt-1">
                    {currentAct.title}
                  </h2>
                </div>
                <div className="text-xs font-mono text-[#6E7376]">
                  Chronological segment: {currentAct.timeframe}
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-[#F6F5EE] border border-[#222426] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#222426]">
                    <Clapperboard className="w-4 h-4 text-[#F01E1E]" />
                    <span>Visual & Image Direction</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                    {currentAct.visualDirection}
                  </p>
                </div>

                <div className="p-4 bg-[#F6F5EE] border border-[#222426] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#222426]">
                    <Volume2 className="w-4 h-4 text-[#222426]" />
                    <span>Sound Design & Acoustic Design</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#222426] leading-relaxed">
                    {currentAct.audioDesign}
                  </p>
                </div>
              </div>

              {/* Key Scenes Breakdown */}
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-[#222426] uppercase tracking-wider">
                  Sequential cut and voiceover cues:
                </div>

                {currentAct.keyScenes.map((scene) => (
                  <div
                    key={scene.sceneNumber}
                    className="p-4 sm:p-5 bg-[#F6F5EE] border border-[#222426] space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#8C9BA5] pb-2">
                      <span className="text-xs font-mono font-bold text-[#222426]">
                        Sequence {scene.sceneNumber}
                      </span>
                      <span className="text-xs font-serif font-semibold text-[#222426]">
                        {scene.heading}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[11px] font-mono text-[#6E7376]">Narration text:</div>
                      <p className="font-serif text-sm sm:text-base italic text-[#222426] leading-relaxed bg-[#F6F5EE] p-3 border border-[#8C9BA5]">
                        „{scene.narration}”
                      </p>
                    </div>

                    <div className="text-xs font-mono text-[#222426] pt-1">
                      <span className="font-bold">Director's Note: </span>
                      {scene.scriptNote}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Link back to Monograph */}
            <div className="p-4 bg-[#F6F5EE] border border-[#222426] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#222426]">
                Want to delve deeper into the theoretical and demonstrative foundation of this sequence?
              </div>
              <button
                onClick={onOpenMonographReader}
                className="px-4 py-2 text-xs font-serif font-bold text-[#222426] bg-[#E5B822] border border-[#222426] hover:bg-[#E5B822]/85 transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap"
              >
                <span>Open the Academic Monograph</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

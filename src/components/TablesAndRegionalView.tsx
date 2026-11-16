import React, { useState } from 'react';
import {
  TABLE_1_DATA,
  TABLE_2_DATA,
  OPERATIONAL_PROTOCOL_TABLE,
  REGIONAL_CONTROL_GROUP
} from '../data/tablesAndReference';
import { StratumId } from '../data/types';

export const TablesAndRegionalView: React.FC = () => {
  const [activeSubView, setActiveSubView] = useState<'table1' | 'table2' | 'regional'>('table1');
  const [selectedStratumFilter, setSelectedStratumFilter] = useState<'ALL' | StratumId>('ALL');
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<'ALL' | 'Phase I' | 'Phase II' | 'Phase III'>('ALL');
  const [selectedCountryId, setSelectedCountryId] = useState<string>('estonia');

  const filteredTable2 =
    selectedPhaseFilter === 'ALL'
      ? TABLE_2_DATA
      : TABLE_2_DATA.filter((row) => row.phaseCode === selectedPhaseFilter);

  const filteredOperationalProtocol =
    selectedPhaseFilter === 'ALL'
      ? OPERATIONAL_PROTOCOL_TABLE
      : OPERATIONAL_PROTOCOL_TABLE.filter((row) => row.phaseCode === selectedPhaseFilter);

  return (
    <div className="space-y-8">
      {/* Sub-navigation bar */}
      <div className="bg-[#F6F5EE] border border-[#222426] p-4 sm:p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#6E7376] mb-1">
              Matrix syntheses and comparative analysis · Chapters 2, 5 and 6
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#222426] headline-balance">
              Summary Tables 1 and 2, institutional matrix and regional control group
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveSubView('table1')}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors text-left sm:whitespace-nowrap cursor-pointer ${
                activeSubView === 'table1'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
              }`}
            >
              Table 1 · Synthesis of the 3-layer diagnosis
            </button>
            <button
              onClick={() => setActiveSubView('table2')}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors text-left sm:whitespace-nowrap cursor-pointer ${
                activeSubView === 'table2'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
              }`}
            >
              Table 2 · Lalonde–Dever protocol and institutional matrix
            </button>
            <button
              onClick={() => setActiveSubView('regional')}
              className={`px-3.5 py-2 text-xs font-medium border transition-colors text-left sm:whitespace-nowrap cursor-pointer ${
                activeSubView === 'regional'
                  ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                  : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5] hover:border-[#222426]'
              }`}
            >
              Regional control group · Estonia, Poland, Moldova
            </button>
          </div>
        </div>
      </div>

      {/* TABELUL 1 */}
      {activeSubView === 'table1' && (
        <div className="space-y-5">
          <div className="bg-[#F6F5EE] border border-[#222426] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#8C9BA5]">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#222426]">
                  Table 1. Synthesis of the bottom-up causal architecture of institutional, neurocognitive, and cultural diagnosis
                </h3>
                <p className="text-xs text-[#6E7376] mt-1">
                  Articulating the five major dimensions of societal vulnerability into Layers A, B and C.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {(['ALL', 'A', 'B', 'C'] as const).map((stratum) => (
                  <button
                    key={stratum}
                    onClick={() => setSelectedStratumFilter(stratum)}
                    className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedStratumFilter === stratum
                        ? 'bg-[#222426] text-[#F6F5EE] border-[#222426]'
                        : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                    }`}
                  >
                    {stratum === 'ALL' ? 'All layers' : `Layer ${stratum}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Stacked Cards Layout (<640px) */}
            <div className="sm:hidden space-y-4">
              {TABLE_1_DATA.map((row) => (
                <div key={row.id} className="bg-[#F6F5EE] border-2 border-[#222426] p-4 space-y-3 text-xs">
                  <div className="font-serif font-bold text-sm text-[#222426] pb-2 border-b border-[#222426] bg-[#F6F5EE] -mx-4 -mt-4 p-3">
                    {row.dimensionTitle}
                  </div>
                  {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'A') && (
                    <div className="space-y-1">
                      <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                        Layer A · Institutional, historical and sociological:
                      </div>
                      <p className="text-[#222426] leading-relaxed">{row.stratumA}</p>
                    </div>
                  )}
                  {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'B') && (
                    <div className="space-y-1 pt-2 border-t border-[#8C9BA5]">
                      <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                        Layer B · Neurocognitive, semiotic and axiological:
                      </div>
                      <p className="text-[#222426] leading-relaxed">{row.stratumB}</p>
                    </div>
                  )}
                  {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'C') && (
                    <div className="space-y-1 pt-2 border-t border-[#8C9BA5]">
                      <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                        Layer C · Cultural and Archetypal Unconscious:
                      </div>
                      <p className="text-[#222426] leading-relaxed">{row.stratumC}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Table View (>=640px) */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse border border-[#222426] text-left bg-[#F6F5EE]">
                <thead>
                  <tr className="bg-[#222426] text-[#F6F5EE] font-sans text-xs uppercase tracking-wider">
                    <th className="p-4 border-r border-[#8C9BA5] font-semibold w-1/4">
                      Analytical dimension and vulnerability domain
                    </th>
                    {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'A') && (
                      <th className="p-4 border-r border-[#8C9BA5] font-semibold w-1/4">
                        LAYER A · The institutional, historical and sociological mechanism
                      </th>
                    )}
                    {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'B') && (
                      <th className="p-4 border-r border-[#8C9BA5] font-semibold w-1/4">
                        LAYER B · The neurocognitive, semiotic and axiological mechanism
                      </th>
                    )}
                    {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'C') && (
                      <th className="p-4 font-semibold w-1/4">
                        LAYER C · Expression in the cultural unconscious and archetypal dynamics
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#8C9BA5]">
                  {TABLE_1_DATA.map((row) => (
                    <tr key={row.id} className="align-top hover:bg-[#222426]/[0.03] transition-colors">
                      <td className="p-4 border-r border-[#8C9BA5] font-serif font-semibold text-sm text-[#222426] bg-[#F6F5EE]">
                        {row.dimensionTitle}
                      </td>
                      {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'A') && (
                        <td className="p-4 border-r border-[#8C9BA5] text-xs sm:text-sm font-sans text-[#222426] leading-relaxed">
                          {row.stratumA}
                        </td>
                      )}
                      {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'B') && (
                        <td className="p-4 border-r border-[#8C9BA5] text-xs sm:text-sm font-sans text-[#222426] leading-relaxed">
                          {row.stratumB}
                        </td>
                      )}
                      {(selectedStratumFilter === 'ALL' || selectedStratumFilter === 'C') && (
                        <td className="p-4 text-xs sm:text-sm font-sans text-[#222426] leading-relaxed">
                          {row.stratumC}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TABELUL 2 + MATRICEA DE OPERAȚIONALIZARE INSTITUȚIONALĂ */}
      {activeSubView === 'table2' && (
        <div className="space-y-6">
          <div className="bg-[#F6F5EE] border border-[#222426] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#8C9BA5]">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#222426]">
                  Table 2. Sequential cognitive and institutional resilience reconstruction protocol structured on the determinants of the Lalonde–Dever model
                </h3>
                <p className="text-xs text-[#6E7376] mt-1">
                  Mandatory causal ordering of interventions on the three phases and the four systemic determinants.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {(['ALL', 'Phase I', 'Phase II', 'Phase III'] as const).map((phase) => (
                  <button
                    key={phase}
                    onClick={() => setSelectedPhaseFilter(phase)}
                    className={`px-3 py-1.5 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedPhaseFilter === phase
                        ? 'bg-[#E5B822] text-[#222426] border-[#222426] font-semibold'
                        : 'bg-[#F6F5EE] text-[#222426] border-[#8C9BA5]'
                    }`}
                  >
                    {phase === 'ALL' ? 'All phases' : phase}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Stacked Cards Layout (<640px) */}
            <div className="sm:hidden space-y-4">
              {filteredTable2.map((row) => (
                <div key={row.id} className="bg-[#F6F5EE] border-2 border-[#222426] p-4 space-y-3 text-xs">
                  <div className="pb-2 border-b border-[#222426] bg-[#222426]/[0.04] -mx-4 -mt-4 p-3 flex items-center gap-2">
                    <span className="bg-[#E5B822] text-[#222426] border border-[#222426] font-mono text-xs font-bold px-2 py-0.5">
                      {row.phaseCode}
                    </span>
                    <span className="font-mono font-bold text-xs text-[#222426]">
                      {row.horizon}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                      Human biology and neurocognitive reserve:
                    </div>
                    <p className="text-[#222426] leading-relaxed">{row.humanBiology}</p>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-[#8C9BA5]">
                    <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                      The digital and sociospatial environment:
                    </div>
                    <p className="text-[#222426] leading-relaxed">{row.digitalAndSociospatial}</p>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-[#8C9BA5]">
                    <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                      Information Lifestyle and Axiology:
                    </div>
                    <p className="text-[#222426] leading-relaxed">{row.informationalLifestyle}</p>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-[#8C9BA5]">
                    <div className="font-mono font-bold text-[11px] text-[#6E7376]">
                      Institutional and constitutional system:
                    </div>
                    <p className="text-[#222426] leading-relaxed">{row.institutionalSystem}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View (>=640px) */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse border border-[#222426] text-left bg-[#F6F5EE]">
                <thead>
                  <tr className="bg-[#222426] text-[#F6F5EE] font-sans text-xs uppercase tracking-wider">
                    <th className="p-4 border-r border-[#8C9BA5] font-semibold w-1/4">
                      Human biology and neurocognitive reserve
                    </th>
                    <th className="p-4 border-r border-[#8C9BA5] font-semibold w-1/4">
                      The digital and sociospatial environment
                    </th>
                    <th className="p-4 border-r border-[#8C9BA5] font-semibold w-1/4">
                      The informational, associative lifestyle and the moral filter
                    </th>
                    <th className="p-4 font-semibold w-1/4">
                      The institutional, legal and constitutional system
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#8C9BA5]">
                  {filteredTable2.map((row) => (
                    <tr key={row.id} className="align-top hover:bg-[#222426]/[0.03] transition-colors">
                      <td className="p-4 border-r border-[#8C9BA5] text-xs sm:text-sm font-sans text-[#222426] leading-relaxed">
                        <div className="mb-2 pb-1.5 border-b border-[#8C9BA5]">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="bg-[#E5B822] text-[#222426] border border-[#222426] font-mono text-xs font-bold px-2 py-0.5">
                              {row.phaseCode}
                            </span>
                            <span className="text-xs font-mono font-bold text-[#222426]">
                              Pillar I · Neurobiological reserve
                            </span>
                          </div>
                          <div className="text-[11px] font-mono text-[#6E7376] mt-1">
                            {row.horizon}
                          </div>
                        </div>
                        {row.humanBiology}
                      </td>
                      <td className="p-4 border-r border-[#8C9BA5] text-xs sm:text-sm font-sans text-[#222426] leading-relaxed">
                        <div className="mb-2 pb-1.5 border-b border-[#8C9BA5] flex flex-wrap items-center gap-1.5">
                          <span className="bg-[#E5B822] text-[#222426] border border-[#222426] font-mono text-xs font-bold px-2 py-0.5">
                            {row.phaseCode}
                          </span>
                          <span className="text-xs font-mono font-bold text-[#6E7376]">
                            Pillar II · Digital and sociospatial environment
                          </span>
                        </div>
                        {row.digitalAndSociospatial}
                      </td>
                      <td className="p-4 border-r border-[#8C9BA5] text-xs sm:text-sm font-sans text-[#222426] leading-relaxed">
                        <div className="mb-2 pb-1.5 border-b border-[#8C9BA5] flex flex-wrap items-center gap-1.5">
                          <span className="bg-[#E5B822] text-[#222426] border border-[#222426] font-mono text-xs font-bold px-2 py-0.5">
                            {row.phaseCode}
                          </span>
                          <span className="text-xs font-mono font-bold text-[#6E7376]">
                            Pillar III · Lifestyle and axiological filter
                          </span>
                        </div>
                        {row.informationalLifestyle}
                      </td>
                      <td className="p-4 text-xs sm:text-sm font-sans text-[#222426] leading-relaxed">
                        <div className="mb-2 pb-1.5 border-b border-[#8C9BA5] flex flex-wrap items-center gap-1.5">
                          <span className="bg-[#E5B822] text-[#222426] border border-[#222426] font-mono text-xs font-bold px-2 py-0.5">
                            {row.phaseCode}
                          </span>
                          <span className="text-xs font-mono font-bold text-[#6E7376]">
                            Pillar IV · Institutional and constitutional system
                          </span>
                        </div>
                        {row.institutionalSystem}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Matricea de operaționalizare instituțională (România și UE) */}
          <div className="bg-[#F6F5EE] border-2 border-[#222426] p-4 sm:p-5">
            <div className="mb-4 pb-3 border-b border-[#222426]">
              <div className="text-xs font-mono text-[#6E7376] mb-1">
                Administrative, legal and community operationalization · Chapter 6 · Romania and the European Union
              </div>
              <h3 className="font-serif text-lg font-bold text-[#222426]">
                The matrix of institutional responsibilities on the three sequential phases: DNSC, ANCOM, CSAT, CNA, the Ministry of Education and the Romanian Orthodox Church
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse border border-[#222426] text-left bg-[#F6F5EE]">
                <thead>
                  <tr className="bg-[#222426] text-[#F6F5EE] font-sans text-xs uppercase tracking-wider">
                    <th className="p-3.5 border-r border-[#8C9BA5] font-semibold w-1/4">
                      Phase and time horizon
                    </th>
                    <th className="p-3.5 border-r border-[#8C9BA5] font-semibold w-1/4">
                      The strategic and neurocognitive objective
                    </th>
                    <th className="p-3.5 border-r border-[#8C9BA5] font-semibold w-1/4">
                      Tactical, legislative and algorithmic actions · DSA Art. 34–35 and AI Act
                    </th>
                    <th className="p-3.5 font-semibold w-1/4">
                      Responsible institutions and societal partners · Romania and the EU
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#8C9BA5]">
                  {filteredOperationalProtocol.map((row) => (
                    <tr key={row.id} className="align-top hover:bg-[#222426]/[0.03] transition-colors">
                      <td className="p-4 border-r border-[#8C9BA5] bg-[#F6F5EE]">
                        <div className="mb-1.5">
                          <span className="bg-[#E5B822] text-[#222426] border border-[#222426] font-mono text-xs font-bold px-2 py-0.5 inline-block">
                            {row.phaseCode}
                          </span>
                        </div>
                        <div className="font-serif font-bold text-sm text-[#222426]">
                          {row.phaseTitle}
                        </div>
                        <div className="text-xs font-mono text-[#6E7376] mt-1">
                          {row.horizon}
                        </div>
                      </td>
                      <td className="p-4 border-r border-[#8C9BA5] text-xs sm:text-sm font-sans text-[#222426] font-medium leading-relaxed">
                        {row.targetObjective}
                      </td>
                      <td className="p-4 border-r border-[#8C9BA5] text-xs sm:text-sm font-sans text-[#222426] leading-relaxed">
                        {row.concreteIntervention}
                      </td>
                      <td className="p-4 text-xs sm:text-sm text-[#222426] font-mono leading-relaxed bg-[#F6F5EE]">
                        {row.responsibleActors}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* GRUPUL DE CONTROL REGIONAL */}
      {activeSubView === 'regional' && (
        <div className="space-y-6">
          <div className="bg-[#F6F5EE] border border-[#222426] p-5">
            <h3 className="font-serif text-lg font-bold text-[#222426]">
              Systematic comparison of Romania with the regional control group · Subchapter 2.3
            </h3>
            <p className="text-xs sm:text-sm text-[#6E7376] mt-1 leading-relaxed">
              The comparative analysis with three states exposed to the same vector of Russian cognitive warfare — Estonia, Poland and the Republic of Moldova — allows the isolation of internal causal variables and demonstrates that Romania's vulnerability does not stem from a cultural fatality, but from the semi-conformed institutional order.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
              {REGIONAL_CONTROL_GROUP.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedCountryId(item.id)}
                  className={`p-4 border-2 text-left transition-all cursor-pointer ${
                    selectedCountryId === item.id
                      ? item.statusType === 'tension'
                        ? 'border-[#F01E1E] bg-[#F01E1E]/10'
                        : 'border-[#222426] bg-[#E5B822]/25'
                      : 'border-[#8C9BA5] bg-[#F6F5EE] hover:border-[#222426]'
                  }`}
                >
                  <div className="text-xs font-mono text-[#6E7376] mb-1">
                    {item.statusType === 'tension' ? 'Vulnerability diagnosis' : 'Resilience model'}
                  </div>
                  <div className="font-serif text-sm font-bold text-[#222426]">
                    {item.country}
                  </div>
                </button>
              ))}
            </div>

            {/* Side-by-side comparison: Romania vs Selected Control Country */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {[
                REGIONAL_CONTROL_GROUP[0],
                REGIONAL_CONTROL_GROUP.find((c) => c.id === selectedCountryId && c.id !== 'romania') ||
                  REGIONAL_CONTROL_GROUP[1]
              ].map((country) => (
                <div
                  key={country.id}
                  className={`border-2 p-5 bg-[#F6F5EE] ${
                    country.statusType === 'tension' ? 'border-[#F01E1E]' : 'border-[#222426]'
                  }`}
                >
                  <div className="pb-3 mb-4 border-b border-[#8C9BA5]">
                    <div className="text-xs font-mono text-[#6E7376]">{country.roleInModel}</div>
                    <h4 className="font-serif text-lg font-bold text-[#222426] mt-0.5">
                      {country.country}
                    </h4>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3 bg-[#F6F5EE] border border-[#8C9BA5]">
                      <div className="font-mono text-xs font-semibold text-[#6E7376] mb-1">
                        Russian vector exposure profile
                      </div>
                      <p className="text-[#222426] leading-relaxed">{country.exposureProfile}</p>
                    </div>

                    <div className="p-3 bg-[#F6F5EE] border border-[#8C9BA5]">
                      <div className="font-mono text-xs font-semibold text-[#222426] mb-1">
                        Layer A · Institutional architecture and public services
                      </div>
                      <p className="text-[#222426] leading-relaxed">{country.stratumA}</p>
                    </div>

                    <div className="p-3 bg-[#F6F5EE] border border-[#8C9BA5]">
                      <div className="font-mono text-xs font-semibold text-[#222426] mb-1">
                        Layer B · Neurocognitive training and information defense
                      </div>
                      <p className="text-[#222426] leading-relaxed">{country.stratumB}</p>
                    </div>

                    <div className="p-3 bg-[#F6F5EE] border border-[#8C9BA5]">
                      <div className="font-mono text-xs font-semibold text-[#222426] mb-1">
                        Layer C · The cultural unconscious and the Ego–Self axis
                      </div>
                      <p className="text-[#222426] leading-relaxed">{country.stratumC}</p>
                    </div>

                    <div
                      className={`p-3.5 border ${
                        country.statusType === 'tension'
                          ? 'border-[#F01E1E] bg-[#F01E1E]/10'
                          : 'border-[#222426] bg-[#E5B822]/25'
                      }`}
                    >
                      <div className="font-mono text-xs font-bold text-[#222426] mb-1">
                        Causal inference demonstrated
                      </div>
                      <p className="text-[#222426] font-medium leading-relaxed">
                        {country.strategicLesson}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import {
  Table1Row,
  Table2Row,
  RegionalCase,
  GlossaryConcept,
  BibliographyItem,
  ChapterExecutiveSummary,
  InstitutionalProtocolRow
} from './types';
import { CHAPTERS_PART_1 } from './chaptersPart1';
import { CHAPTERS_PART_2 } from './chaptersPart2';

export const ALL_SUBCHAPTER_STEPS = [...CHAPTERS_PART_1, ...CHAPTERS_PART_2];

export const TABLE_1_DATA: Table1Row[] = [
  {
    "id": "t1-dim-1",
    "dimensionNumber": 1,
    "dimensionTitle": "1. State architecture and the relationship with the legal norm",
    "stratumA": "Asynchronous modernization through \"forms without substance\" (Maiorescu) and the coexistence of inclusive formal institutions with extractive informal networks (Acemoglu & Robinson). This social order with limited access (North, Wallis & Weingast) generates a chronic deficit of operational closure of justice and administration (Luhmann).",
    "stratumB": "The erosion of trust in formal rules and the perception of law as a selective instrument of spoliation. This perception weakens commitment to the first ethical system of procedural cooperation (Lefebvre) and increases cognitive tolerance for normative transgression.",
    "stratumC": "The structural split between the mimetic institutional Persona (facade official pro-Western conformism) and the collective Shadow. Into this Shadow are repressed the informal survival strategies, \"getting by\" and ambivalence of the Trickster archetype."
  },
  {
    "id": "t1-dim-2",
    "dimensionNumber": 2,
    "dimensionTitle": "2. Sociodemographic cohesion and daily stress regime",
    "stratumA": "Severe polarization between prosperous metropolitan centers and deindustrialized or rural peripheries, deepened by demographic decline and massive emigration of the active workforce. The result consists of enclaves of social exclusion and anomie, amoral familism (Banfield), the individualistic retreat into the private sphere of urban layers and the installation of a vacuum of political representation of the peripheries (Mair, 2013) speculated by populist intermediaries (Mudde, 2004) through the three transformational mechanisms Micro-Macro (Coleman, 1990; Robinson, 1950).",
    "stratumB": "High allostatic load (McEwen) and chronic HPA axis dysfunction (cortisol circadian flattening, glucocorticoid receptor desensitization, and proinflammatory state), which induce basolateral amygdala hypertrophy, relevance detection network hyperactivation, and dendritic retraction in the dorsolateral prefrontal cortex (dlPFC), over which acute shocks add fast catecholaminergic synaptic inhibition (Arnsten) and switching to System 1 (Kahneman). In parallel, in the absence of actively open thinking, an intact biological System 2 is diverted into dysrationalia and motivated rationalization (Stanovich; Kahan) in two symmetrically dysfunctional directions: elitist civic secession in private services or the construction of radical pseudoscientific, esoteric, and revisionist rationalizations.",
    "stratumC": "The decrease in conscious tension (abaissement du niveau mental – Janet/Jung) and the blocking or splitting of the collective Ego–Self axis (Edinger). This rupture sets up the deflation of the collective Self, learned helplessness, and defensive fatalism, which alternates with compensatory nationalist inflation."
  },
  {
    "id": "t1-dim-3",
    "dimensionNumber": 3,
    "dimensionTitle": "3. The axiological filter and reference to the spiritual tradition",
    "stratumA": "The political instrumentalization of the identity and religious discourse by opportunistic political actors and informal paraecclesial networks in convergence with the revisionist Russkii Mir doctrine, exploiting pastoral hesitations and the absence of an institutionalized process of assuming the totalitarian traumas of the 20th century.",
    "stratumB": "The axiological double falsification and semiotic parasitism of conservatism and orthodoxy through discursive camouflage. The Christian-secular European synthesis (based on the Imago Dei and the universalism of fundamental rights) is substituted with the normative inversion of the Antiworld (Epstein), ethnophyletism and the cynical nihilism of the Bobok state (Dostoevsky).",
    "stratumC": "The inability to mourn totalitarian complicity (Mitscherlich) and the fixation on a chosen trauma of perpetual victimhood (Volkan). Faith is thus reduced to a facade ritualistic religiosity and an external confessional conformity, vulnerable to paranoid and xenophobic projections."
  },
  {
    "id": "t1-dim-4",
    "dimensionNumber": 4,
    "dimensionTitle": "4. Information ecology and decision dynamics in the OODA loop",
    "stratumA": "The deregulation of the digital attention market and the proliferation of networks for recycling and disguising the information source through intermediaries (information laundering: bot farms, non-transparently coordinated micro-influencer networks, encrypted channels). At the same time, the digital ecosystem is deliberately polluted with synthetic data in two stages: in the short term, the non-parametric contamination at the time of querying search engines and RAG systems (inference-time RAG poisoning), and in the medium term, the parametric degradation when retraining through Model Collapse (Shumailov) and Model Autophagy Disorder (Alemohammad).",
    "stratumB": "Bypassing the Orientation phase of the OODA loop (Boyd) by second-order reflexive control and distortion of precision-weighting (aberrant precision-weighting, Friston: hyper-precision given to conspiratorial dogma and mitigation of factual prediction errors), keeping the target at Rank 0 and Rank 1 reflexivity, switching it into the second ethical system of confrontation (Lefebvre) and binary semiotics of annihilation (Lotman), a process accelerated by dopaminergic capture in the nucleus accumbens and complex contagion through wide bridges (Centola).",
    "stratumC": "Psychological captivity in closed identity bubbles, cognitive homogenization, and the deterioration of the predictive mental map of reality. In this framework of algorithmic encapsulation, vulnerable groups reactively adopt defensive cultural patterns (Singer & Kimbles) and the psychodynamic mechanism of identification with the geopolitical aggressor (against the existential anguish of abandonment) under the guise of defending sovereignty."
  },
  {
    "id": "t1-dim-5",
    "dimensionNumber": 5,
    "dimensionTitle": "5. Dynamics of polarization and response to acute crisis",
    "stratumA": "The slippage of the vulnerable citizen (-X, +Y), under the primary endogenous pressure of internal extractive actors (+X, -Y) — whose oligarchic factions threatened by the European rule of law have a tactical interest in encouraging anti-institutional chaos — and under the action of the exogenous catalyst of cognitive warfare (through hyperbolic discounting of the future, self-destructive symbolic revenge and antisocial punishment), in the behavior quadrant self-destructive and collective self-sabotage (-X, -Y) from Cipolla's matrix. The systemic result is institutional paralysis and strategic vulnerability of the target state.",
    "stratumB": "Bifurcation of processing at the critical point of an acute crisis (decisional bifurcation node) and blocking on the Maladaptive Reactive Track (Track A: amygdala hyperactivation, hasty adoption and epistemic seizing/freezing, defensive processing motivated by protecting group identity, anger and decisional blocking). This blockage comes at the expense of the adaptive deliberative Track (Track B: prefrontal regulation, negative capability, actively open-minded thinking to Rank 2 and Rank 3 reflexivity and epistemic validation), whose opening depends on the bridge of co-regulation through the CDC CERC protocol, the verifiable technical evidence and the proximity community validators that reconstitute the community as a rational \"workgroup\" (Bion, 1961).",
    "stratumC": "Sovereignist enantiodromia, manifested by the reversal of pro-Western mimicry in the radical rejection of constitutional modernity. Added to this is the collective Puer Aeternus syndrome (von Franz), the illusion of isolationist sovereignism and the regression towards passive dependence on a tutelary paternalistic state (Neumann)."
  }
];

export const TABLE_2_DATA: Table2Row[] = [
  {
    "id": "t2-faza-1",
    "phaseCode": "Phase I",
    "phaseSubtitle": "Allostatic decompression and informational hygiene",
    "horizon": "Dual horizon: 0–72 hours (acute tactical triage) · 0–12 months (structural decompression)",
    "humanBiology": "Reducing allostatic load (McEwen) and chronic hyperactivation of the HPA axis by decreasing material and bureaucratic insecurity. Protecting sleep and attention by limiting exposure to addictive streams that capture dopaminergic circuits in the nucleus accumbens restores the temporal latency required to unlock the dorsolateral prefrontal cortex.",
    "digitalAndSociospatial": "The application of the DSA Regulation (Law no. 50/2024) and the AI Act by associating the Orders to act against illegal content (art. 7–8 of Law no. 50/2024 / art. 9 of the DSA) issued by the sectoral authorities (CNA, AEP/BEC, DNSC) and procedurally transmitted through ANCOM (without substantive decisions on content) with the mandatory Orders to provide financial information and the identity of payers (art. 9 of Law no. 50/2024 / art. 10 of DSA) to VLOPs. This is doubled by STIX/DISARM evidentiary standardization through DNSC and EDMO/BROD, virality-slowing mechanisms, cryptographic tagging of synthetic data, and investment in exclusion enclave services.",
    "informationalLifestyle": "Public campaigns to raise awareness of digital hygiene and attention-grabbing mechanisms. The arrogant or alarmist official communication is replaced by a strategic allostatic decompression communication based on the principles of CDC CERC (Crisis and Emergency Risk Communication, Reynolds & Seeger, 2005), intended to defuse the hypervigilance of the Salience Network (SN) and stop the reactive loop of Track A.",
    "institutionalSystem": "On the structural level (0–12 months), administrative simplification according to the e-Estonia model. On the acute triage level (0–72h), the tracking and blocking of illicit financial flows (on the Follow the Money principle) is performed in three steps. In the first step, the relevant sectoral authorities (including CNA for online audiovisual, AEP/BEC or DNSC) issue orders to act against illegal content, procedurally transmitted through the single point ANCOM to VLOPs and associated with orders to identify payers (art. 9 and 10 DSA / art. 7–8 and art. 9 Law no. 50/2024). In the second step, AEP and BEC ensure the verification of the CMF and the blocking of unmarked or financed political advertising from third countries (Law no. 334/2006, O.U.G. no. 1/2025 — art. 16–17 for the presidential elections of May 2025 and Regulation TTPA (EU) 2024/900 applicable from October 10, 2025 — art. 5 para. 11-12 and art. 13, 15 and 17). In the third step, ONPCSB orders under exclusive competence the operative suspension within 24-72 hours of suspicious transactions and the blocking of conversions from crypto-assets to fiduciary currency (off-ramp) (art. 33-34 of Law no. 129/2019), with notification to the PICCJ, under the sectoral supervision of the BNR and ASF by querying the electronic central register for payment accounts and bank accounts (art. 61¹ of Law No. 207/2015 and Article 33 of Law No. 129/2019, updated by Law No. 86/2025. no. 10/2025 (the national mechanism for the TFR Regulation (EU) 2023/1113 – Travel Rule and the supervision of crypto-asset service providers (CASP) regarding the fight against money laundering and terrorist financing according to art. 32¹ of Law no. 129/2019) and MiCA Regulation (EU) 2023/1114."
  },
  {
    "id": "t2-faza-2",
    "phaseCode": "Phase II",
    "phaseSubtitle": "Community stabilization and preventive preparedness",
    "horizon": "Average operational horizon: 1–3 years",
    "humanBiology": "Entrainment of descending regulation of the basolateral amygdala by ventromedial and dorsolateral prefrontal cortex. Cultivating negative capability (Bion) and uncertainty tolerance ensures stable switching on Deliberative Track B, supported by periodic sessions of mnemonic consolidation calibrated on Hermann Ebbinghaus's forgetting curve.",
    "digitalAndSociospatial": "Rebuilding community and cultural infrastructure of proximity in rural areas, small towns and diaspora communities to replace isolation in closed informational bubbles with physical spaces of direct human interaction. These local networks foster positive complex social contagion (Centola, 2018) and rebuilding bridging social capital (Putnam, 2000).",
    "informationalLifestyle": "Institutionalizing preventive psychocognitive training in schools, universities, and adult programs focused on the detection of second-order reflexive control and binary semiosis. In parallel, the Christian-secular moral filter is reconciled through the dialogue between the orthodox patristic theology of the dignity of the person and the constitutional civic ethics, strengthening the first ethical system of cooperation.",
    "institutionalSystem": "Creation of permanent institutional mechanisms of inter-ministerial and societal coordination for the defense of cognitive space, following the model of comprehensive defense in Estonia and Poland. At the same time, CNA and public authorities directly apply Regulation (EU) 2024/1083 on media freedom (European Media Freedom Act – EMFA), ensuring the transparency of the real beneficiaries of media institutions (art. 6 EMFA), editorial independence guarantees (art. 4–5 EMFA), structured dialogue with VLOPs (art. 18 EMFA) and non-discriminatory allocation of state advertising (art. 25 EMFA), alongside the integration of community validation to neutralize defensive processing motivated by protecting group identity."
  },
  {
    "id": "t2-faza-3",
    "phaseCode": "Phase III",
    "phaseSubtitle": "Consolidation of the rule of law and collective individuation",
    "horizon": "Strategic horizon: 3–10 years",
    "humanBiology": "Long-term stabilization of the neurobiological reserve and psychophysiological balance of the population through a predictable and meritocratic social environment. This stability maintains the capacity of the conscious mind to critically integrate information and prevents lowering of conscious tension (abaissement du niveau mental) in the face of future geopolitical shocks.",
    "digitalAndSociospatial": "The structural reduction of sociospatial cleavages between metropolitan centers and internal peripheries and the integration of the diaspora into the country's economic and civic networks by converting Western experience into \"social and institutional remittances\" (Sandu, 2010). The reconstruction of bridging social capital (Putnam, 2000) in the rural environment and the overcoming of amoral familism (Banfield, 1958) is achieved through the de lege ferenda reform of the governance of agricultural cooperatives from Law no. 566/2004 (amending art. 31 and art. 33–35 in conjunction with art. 16 para. 4 and art. 29 and the facilities in art. 76–76¹: competitively recruited independent executive director, prohibition of relatives by blood or marriage (in-laws) up to the 3rd degree of administrators, integrity filters and protection of VAT refunds).",
    "informationalLifestyle": "Critical and honest take on national history in education and public culture, overcoming the inability to mourn and chosen trauma. The latent resources of the collective Shadow and Trickster archetype are functionally converted into cognitive agility and innovation, supporting the maturation of civic consciousness beyond the Puer Aeternus syndrome and collective individuation on the Ego–Self axis.",
    "institutionalSystem": "Genuine operational closure of justice and administration (elimination of temporary discretionary appointments from art. 509–510 O.U.G. no. 57/2019, termination of temporary mandates in the chain in state companies provided for in art. 29¹ and art. 64¹ of O.U.G. no. 109/2011 amended by Law no. 187/2023 and the autonomous operationalization of AMEPIP), local financial autonomy based on objective cost formulas (art. 32-33 of Law no. 273/2006 and the restriction of the Reserve Fund from art. 30 of Law no. 500/2002 exclusively to unpredictable emergencies), doubled by the de lege ferenda reform of art. 167 and art. 182 of the Fiscal Procedure Code (Law no. 207/2015) through \"mirror penalization of the state\", the automatic ex officio compensation of mutual fiscal claims (art. 167 CPF) and the ex officio transfer, to the same IBAN account, of interest and penalties for late VAT reimbursement (art. 169 CPF), of FNUASS medical leaves (art. 38 and art. 40 of O.U.G. no. 158/2005) and payment of commercial invoices (Law no. 72/2013, distinct from e-Invoice), in full agreement with the principle of fiscal symmetry (CCR Decision no. 694/2015) and overcoming the blockages in O.G. no. 22/2002 or the ruling from RIL no. 24/2025; delimited by the internal patrimonial liability of officials towards the institution (art. 499–500 Administrative Code), the proposal to supplement art. 281 CPF covers joint patrimonial liability and effective recourse when the court definitively finds that the annulled tax act was issued in bad faith or with gross negligence. The entire protocol is verified by the biennial audit of the Court of Accounts (art. 2 letters b and d and art. 28 para. 2 of Law no. 94/1992; Law no. 500/2002) and by the scientific audit of \"vetted researchers\" (art. 40 DSA / EDMO) on the European Digital Skills Framework (DigComp), on the methodologies of the National Institute for Audiovisual Education KAVI and through participatory decision-making simulations."
  }
];

export const REGIONAL_CONTROL_GROUP: RegionalCase[] = [
  {
    "id": "romania",
    "country": "Romania — Basic diagnosis",
    "roleInModel": "The target society analyzed in the monograph",
    "exposureProfile": "Intense exposure to sovereignist discursive camouflage and semiotic parasitism of orthodoxy and conservatism, bypassing direct historical aversion to Russia.",
    "stratumA": "Semi-conformed institutional order based on \"forms without substance\"; the coexistence of formal Euro-Atlantic institutions with clientelistic extractive networks and severe sociospatial polarization.",
    "stratumB": "Double neurocognitive vulnerability (allostatic load and dlPFC inhibition with switching to System 1 under allostatic exhaustion, respectively the hijacking of System 2 in irrationality and motivated rationalization — either for elitist civic secession or for radical pseudoscientific and revisionist justifications —), against the background of the vacuum of political representation (Mair, 2013), the absence of a national strategy of preventive preparation and the deregulation of space algorithmically, favoring the diversion of the Orientation phase from the OODA loop.",
    "stratumC": "Split between the mimetic institutional Persona and the collective Shadow, the inability to mourn totalitarian complicity and the triggering of the sovereignist enantiodromia.",
    "strategicLesson": "The vulnerability does not arise from a cultural fatality or lack of security guarantees, but from the complacency of a part of the elites in an extractive order that has left the axiological filter exposed to erosion.",
    "statusType": "tension"
  },
  {
    "id": "estonia",
    "country": "Estonia — Institutional and cognitive resilience",
    "roleInModel": "The Coherent Articulation Model of the Four Lalonde–Dever Determinants",
    "exposureProfile": "Frontline geographic state on the border with the Russian Federation, with a significant Russian-speaking minority and the target of major cyber and information attacks since 2007.",
    "stratumA": "Early and radical transition to inclusive institutions with genuine operational closure; transparent digitization through the e-Estonia system, which eliminated petty corruption and bureaucratic humiliation; supported policies of educational unification and credible public media alternatives to reduce the residual vulnerability of the Russian-speaking minority.",
    "stratumB": "Institutionalizing preventive psychocognitive training and media and digital literacy from kindergarten to adult, integrated into the doctrine of comprehensive defense and the will to defend.",
    "stratumC": "Stable collective Ego–Self axis, in which pro-Western modernization is experienced as an organic expression of national identity, not as a form without substance imposed from the outside.",
    "strategicLesson": "Eliminating bureaucratic humiliation and corruption through transparent digitization lowers allostatic load and organically anchors the citizen to the defense of constitutional order.",
    "statusType": "synthesis"
  },
  {
    "id": "polonia",
    "country": "Poland — Historical memory and strategic consensus",
    "roleInModel": "The Resilience Model of Conservatism and Religiosity Against Muscovite Semiotic Parasitism",
    "exposureProfile": "Intense internal political and axiological polarizations between the national conservative camp and the cosmopolitan liberal camp, accompanied by severe constitutional tensions regarding the autonomy of the judiciary and media partisanship in Layer A.",
    "stratumA": "Cross-party strategic consensus on national defense, military procurement, and strengthening the eastern flank of the North Atlantic Alliance, maintained even during periods of acute internal constitutional dispute in Layer A.",
    "stratumB": "The systematic failure of Russian operations to convert Catholic conservatism and Polish sovereignty into a pro-Russian or anti-NATO platform.",
    "stratumC": "The historical memory of Tsarist and Soviet occupation—from the partitions of Poland to Katyn and the Solidarity trade union—was rigorously institutionalized through education, public culture, and the church.",
    "strategicLesson": "The rigorous assumption and institutionalization of historical memory in education and the church creates a transversal cultural norm in which tradition and sovereignty are inextricably linked to the deterrence of Russia.",
    "statusType": "synthesis"
  },
  {
    "id": "moldova",
    "country": "Republic of Moldova — Mobilization under hybrid pressure",
    "roleInModel": "The Comparative Mirror of Resilience under Low Resource and Extreme Hybrid Assault",
    "exposureProfile": "Much reduced economic and military resources, lack of NATO umbrella, decade-long energy blackmail and massive illegal financing of oligarchic vote-buying networks, plus the Transnistrian threat.",
    "stratumA": "The creation of dedicated institutions, such as the Center for Strategic Communication and Combating Disinformation, and the application of firm legal sanctions against illicit financial flows and propaganda channels, despite tight electoral margins, economic vulnerabilities and the resistance of corrupt networks to justice reform (vetting and pre-vetting).",
    "stratumB": "Direct confrontation and deconstruction of the operations of buying political will and recycling and concealing the information source through intermediaries (information laundering) in critical electoral moments.",
    "stratumC": "The articulation of a modernization project in which European integration is consciously assumed as an existential guarantee of national survival.",
    "strategicLesson": "The strong political will to sanction illicit financial flows and institutionally defend the information space can compensate for major deficits in material resources.",
    "statusType": "synthesis"
  }
];

export const GLOSSARY_CONCEPTS: GlossaryConcept[] = [
  {
    "id": "al-saselea-domeniu",
    "term": "The sixth operational domain: cognitive space",
    "stratum": "B",
    "authors": "Claverie, Baptiste and du Cluzel, 2022 · du Cluzel, 2020 · NATO ACT",
    "domain": "Strategic doctrine and military cyber",
    "definition": "Operational domain defined by NATO's Supreme Allied Command Transformation, along with land, sea, air, space and cyber, where the direct target is a nation's reality processing architecture and decision-making capacity.",
    "monographContext": "It pursues the erosion of confidence in democratic institutions and decision-making paralysis of the target state without triggering the threshold of Article 5 of the North Atlantic Treaty.",
    "polarity": "neutral"
  },
  {
    "id": "macro-micro-macro",
    "term": "Macro–Micro–Macro causal architecture: Coleman's boat",
    "stratum": "A",
    "authors": "James S. Coleman, 1990 · Peter Hedström, 2005 · Karl Popper, 1934/2002 · William S. Robinson, 1950 · C. G. Jung, 1936/1964",
    "domain": "Analytical sociology",
    "definition": "Explanatory model from analytical sociology (known as \"Coleman's boat\") that articulates three chained causal mechanisms: the situational mechanisms of transition from the macro to the micro level, the individual mechanisms of action formation (the micro level), and the three transformational mechanisms of collective aggregation (the micro–macro transition: affective synchronization and emotional contagion in the network, complex social contagion through wide bridges, and opportunistic political intermediation in the vacuum of representation of the peripheries). Operationalized in this monograph with respect to the criterion of falsifiability (Popper, 1934/2002), the clause against the ecological fallacy (Robinson, 1950) and by delimitation from the methodological fallacy in Jung's Wotan essay (1936/1964), the model shows how the institutional configuration in Layer A conditions the neurocognitive processing in Layer B and aggregates algorithmically in polarization or resilience in Layer C.",
    "monographContext": "It scientifically and falsifiably explains how institutional deficits in Layer A shape neurocognitive processing in Layer B and aggregate through the three transformational mechanisms into polarization and collective self-sabotage against the ecological fallacy.",
    "polarity": "neutral"
  },
  {
    "id": "determinantii-lalonde-dever",
    "term": "Lalonde–Dever epidemiological model (health field model)",
    "stratum": "A",
    "authors": "Marc Lalonde, 1974 · G. E. Alan Dever, 1976",
    "domain": "Public policies and psychosociology",
    "definition": "Analytical model (known as the Lalonde–Dever epidemiological model or the health field model) based on the classical framework of public health determinants developed by Marc Lalonde (1974) and refined epidemiologically by G. E. Alan Dever (1976), according to which the state of a population is governed by four causally ordered structural fields: (1) the organization of the institutional system and public services, (2) the socioeconomic and digital environment, (3) the informational and associative lifestyle and (4) human biology / neurobiological reserve. Operationalized in the architecture of this monograph, the model establishes that the resilience and mental balance of a population depends on the continuous interaction of the four determinants.",
    "monographContext": "It underpins both the diagnosis of endogenous vulnerability in Chapter 1 (in descending causal order from the institutional and environmental system to the neurobiological reserve) and the matrix architecture of the reconstruction protocol in Chapter 6 and Table 2: on the vertical axis, the protocol proceeds strictly sequentially in three phases (Phase I of biological and digital unlocking -> Phase II of preventive preparation and community validation -> Phase III of operational closure and collective individuation), while on the axis horizontally all four Lalonde–Dever fields are activated synchronously in each phase, the causal center of gravity progressively shifting from allostatic decompression and algorithmic hygiene in Phase I to the macrostructural consolidation of the rule of law in Phase III.",
    "polarity": "synthesis"
  },
  {
    "id": "filtrul-axiologic",
    "term": "The Christian-secular axiological and normative filter",
    "stratum": "B",
    "authors": "Nikolai Berdiaev, 1949/1996 · Dumitru Stăniloae, 1978 · Jürgen Habermas, 2006 · Charles Taylor, 2007",
    "domain": "Constitutional Philosophy and Theology",
    "definition": "The normative framework of European constitutional democracy (the post-secular society analyzed by Habermas, 2006), where there are real philosophical tensions and debates between conservative Christian ethics and modern secularism. However, these differences are peacefully mediated through dialogue, freedom of conscience and respect for the inalienable dignity of the person (Imago Dei), within the first ethical system of procedural cooperation (Lefebvre, 1982).",
    "monographContext": "It stabilizes operational closure in Layer A, the first ethical system of cooperation in Layer B, and the Ego–Self axis in Layer C, resisting the diversion of these legitimate debates into a symbolic civil war of mutual annihilation.",
    "polarity": "synthesis"
  },
  {
    "id": "inchidere-operationala",
    "term": "Operational closure and functional autonomy",
    "stratum": "A",
    "authors": "Niklas Luhmann, 1995, 2004",
    "domain": "Social systems theory",
    "definition": "The fundamental property of the subsystems of a modern society (justice, public administration, education, health, science) to function autonomously, guided exclusively by their own internal normative criteria (legal/illegal, merit/incompetence, true/false), refusing the arbitrary interference of clan politics or informal trading of influence.",
    "monographContext": "Romania's chronic operational closure deficit has kept formal institutions permeable to extractive rent capture. Guaranteeing this autonomy (through meritocracy, the elimination of political interims and digitization) is the key to societal resilience in Phase III of the protocol.",
    "polarity": "synthesis"
  },
  {
    "id": "forme-fara-fond",
    "term": "Forms without substance and extractive versus inclusive institutions",
    "stratum": "A",
    "authors": "Titu Maiorescu, 1868 · Constantin Rădulescu-Motru, 1904 · Constantin Dobrogeanu-Gherea, 1910 · Eugen Lovinescu, 1924–1925 · Henri H. Stahl, 1980 · Daron Acemoglu and James A. Robinson, 2012 · North, Wallis and Weingast, 2009",
    "domain": "Historical Sociology and Institutional Economics",
    "definition": "Analytical paradigm inaugurated by Titu Maiorescu (1868) and developed in the sociology of Romanian modernization (Rădulescu-Motru, 1904; Dobrogeanu-Gherea, 1910; Lovinescu, 1924–1925; Stahl, 1980). While Lovinescu demonstrated that in cultures that entered the sphere of modernity late, synchronization operates through a reverse evolution, from form to substance, the violent interruption of this organic process by the totalitarian regimes of the 20th century and the capture of the post-communist transition chronicled the dissociation between the formally adopted Western constitutional architecture — inclusive institutions — and the persistence of informal practices of rent capture and blocking of meritocracy, specific to extractive institutions in a social order with limited access (North, Wallis & Weingast, 2009; Acemoglu & Robinson, 2012).",
    "monographContext": "It constitutes the historical root of the Romanian citizen's distrust in the official discourse and the split between the mimetic institutional Persona and the collective Shadow.",
    "polarity": "tension"
  },
  {
    "id": "persona-si-umbra",
    "term": "The Mimetic Institutional Persona and the Collective Shadow",
    "stratum": "C",
    "authors": "Carl Gustav Jung, 1928 · Joseph Henderson, 1984 · Thomas Singer and Samuel L. Kimbles, 2004 · Gail Kligman and Katherine Verdery, 2011",
    "domain": "Post-Jungian Analytical Psychology and Historical Anthropology",
    "definition": "The split from the cultural unconscious (Henderson, 1984) and cultural complexes (Singer & Kimbles, 2004) between the conformist facade of declarative alignment to external standards—the Mimetic Institutional Persona—and the Collective Shadow. In this Shadow, informal survival strategies, politics of duplicity (Kligman & Verdery, 2011) and unintegrated historical traumas are repressed.",
    "monographContext": "It explains why the imposture of the domestic elites symbolically compromises the very idea of  European modernization in the eyes of the vulnerable citizen.",
    "polarity": "tension"
  },
  {
    "id": "trauma-aleasa",
    "term": "Inability to mourn and chosen trauma",
    "stratum": "C",
    "authors": "Alexander and Margarete Mitscherlich, 1967 · Vamık D. Volkan, 1997, 2004",
    "domain": "Social and psychopolitical psychoanalysis",
    "definition": "The articulation of two collective psychodynamic mechanisms: the inability to mourn (Die Unfähigkeit zu trauern, Mitscherlich & Mitscherlich, 1967), defined as the refusal of honest moral confrontation with one's own internal complicities in totalitarian regimes, and chosen trauma (chosen trauma, Volkan, 1997, 2004). The latter denotes the mental representation of a historical injustice that fixes the group in a transgenerational identity of innocent and perpetual victim.",
    "monographContext": "It blocks civic maturation and favors the venting of historical guilt through paranoid projections of \"external persecutors.\"",
    "polarity": "tension"
  },
  {
    "id": "axa-ego-sine",
    "term": "The Ego–Collective Self Axis: Deflation and Inflation",
    "stratum": "C",
    "authors": "Edward F. Edinger, 1972 · Martin E. P. Seligman, 1975 · Lucian Boia, 1997 · Katherine Verdery, 1991",
    "domain": "Analytical psychology and the history of mentalities",
    "definition": "The structural link between the collective consciousness (Ego) and the archetypal core of meaning, moral order and historical continuity (Self, Edinger, 1972). When this axis is split by unintegrated traumas and extractive institutions, the collectivity oscillates between deflation—learned helplessness (Seligman, 1975), defensive fatalism and self-devaluation—and compensatory inflation manifested through mythologies of national exceptionalism, messianism, and protochronism (Verdery, 1991; Boia, 1997).",
    "monographContext": "The restoration of coherence on the Ego–Self axis through the transcendent function and collective individuation is the condition of organic modernity.",
    "polarity": "synthesis"
  },
  {
    "id": "familism-amoral",
    "term": "Amoral familism versus bridging social capital",
    "stratum": "A",
    "authors": "Edward C. Banfield, 1958 · Robert D. Putnam, 2000",
    "domain": "Political sociology",
    "definition": "Sociological concept formulated by Edward C. Banfield (1958) to denote defensive retreat in which norms of cooperation and good faith apply exclusively within the narrow circle of biological family and clan, the public sphere being treated as hostile. He opposes bridging social capital (Putnam, 2000), based on generalized trust between different social groups, and explains the fragmentation of society between clan survival in the peripheries and secession into private services of urban layers.",
    "monographContext": "It erodes the Romanian societal cohesion simultaneously with the tacit secession in private services of the prosperous urban layers.",
    "polarity": "tension"
  },
  {
    "id": "uzura-alostatica",
    "term": "Allostasis and chronic allostatic load / wear and tear",
    "stratum": "B",
    "authors": "Peter Sterling and Joseph Eyer, 1988 · Bruce S. McEwen and Eliot Stellar, 1993 · Bruce S. McEwen, 1998 · Robert M. Sapolsky, 2004, 2017",
    "domain": "Neurobiology of stress",
    "definition": "The neurobiological framework that distinguishes between allostasis — the maintenance of physiological stability through adaptive change (Sterling & Eyer, 1988) — and allostatic load (allostatic load, McEwen & Stellar, 1993; McEwen, 1998), defined as the cumulative physiological cost and tissue and neural damage produced by chronic overload of the stress response axis. In this analysis, the concept shows how socioeconomic insecurity, legislative unpredictability, and bureaucratic humiliation in Layer A deplete citizens' neurocognitive reserve before external propaganda intervenes.",
    "monographContext": "It exhausts the citizen's neurocognitive reserve before contact with digital propaganda; its reduction is the primary objective of Phase I.",
    "polarity": "tension"
  },
  {
    "id": "axa-hpa-dlpf",
    "term": "Hyperactivation of the HPA axis, the triad of brain networks, and prefrontal inhibition",
    "stratum": "B",
    "authors": "Amy F. T. Arnsten, 2009 · Vinod Menon, 2011 · Robert M. Sapolsky, 2004, 2017 · Daniel Kahneman, 2011 · Keith E. Stanovich, 2009",
    "domain": "Cognitive Neuroscience",
    "definition": "Neuroendocrine and brain network mechanism operating on two temporal levels: in the long term, chronic dysfunction of the hypothalamic-pituitary-adrenal axis (HPA axis — manifested by flattening of the circadian rhythm of cortisol, desensitization of glucocorticoid receptors and a systemic pro-inflammatory state) causes dendritic hypertrophy in the basolateral amygdala, hyperactivation of the relevance detection network (Salience Network – SN), disconnection of the central executive network (Central Executive Network – CEN, Menon, 2011) and dendritic retraction in the hippocampus and in layer III of the dorsolateral (dlPFC) and ventromedial (vmPFC) prefrontal cortex; in the short term, over and above this chronic vulnerability, acute informational shocks trigger phasic discharges of noradrenaline (alpha-1 receptors) and dopamine (D1 receptors) that induce rapid catecholaminergic synaptic inhibition of working memory (Arnsten, 2009; Sapolsky, 2004, 2017).",
    "monographContext": "It blocks the deliberative System 2, fosters irrationality (Stanovich, 2009) and switches the citizen's brain to the exclusive dominance of the reactive System 1.",
    "polarity": "tension"
  },
  {
    "id": "abaissement-du-niveau-mental",
    "term": "Decrease in conscious tension: abaissement du niveau mental",
    "stratum": "C",
    "authors": "Pierre Janet · Carl Gustav Jung, 1934",
    "domain": "Dynamic and analytical psychology",
    "definition": "Psychodynamic concept introduced by Pierre Janet and developed in analytical psychology by Carl Gustav Jung (1934) to denote the weakening of the conscious mind's ability to critically integrate information and regulate its impulses under the pressure of chronic fatigue and negative affect. This lowering of conscious tension lowers the threshold of inhibitory control and metacognitive filtering, allowing unintegrated complexes from the unconscious to invade consciousness.",
    "monographContext": "The psychodynamic counterpart in Layer C of prefrontal inhibition produced by allostatic load in Layer B.",
    "polarity": "tension"
  },
  {
    "id": "sistema",
    "term": "The sistema network, siloviki, kompromat and the model of the \"four Russias\"",
    "stratum": "A",
    "authors": "Alena Ledeneva, 2013 · Natalia Zubarevich, 2011 · Karen Dawisha, 2014 · Mark Galeotti, 2019",
    "domain": "The political economy of the Russian regime",
    "definition": "Informal and opaque mechanism of kleptocratic governance (Ledeneva, 2013) in which formal constitutional institutions are subordinated to networks of force and intelligence structures (siloviki). Loyalty is maintained through the discretionary distribution of rents, institutionalized blackmail with compromising materials (kompromat) and the exploitation of the precarity of the internal peripheries in the model of the \"four Russias\" (Zubarevich, 2011) through the military Keynesianism of death economics (deathonomics).",
    "monographContext": "Functional neighboring democracies existentially threaten the internal legitimacy of the sistema network, motivating Russian cognitive warfare.",
    "polarity": "tension"
  },
  {
    "id": "triada-ilin-gumiliov-dughin",
    "term": "The revisionist doctrinal corpus: Ilin, Gumiliov and Dughin",
    "stratum": "B",
    "authors": "Ivan Ilin, 1925/1956 · Lev Gumiliov, 1989 · Michel Eltchaninoff, 2018 · Timothy Snyder, 2018 · Françoise Thom, 2018, 2022 · Aleksandr Dughin, 1997 · Carl Schmitt, 1932/1996",
    "domain": "History of political ideas and geopolitics",
    "definition": "The doctrinal articulation of three revisionist pillars: the allegedly ontologically innocent totalitarianism of Ivan Ilin (the merging of the individual into a totality ruled by a leader unfettered by law — Gosudar) and the biocosmic determinism of Eurasian \"passionateness\" and \"supra-ethnicity\" formulated by Lev Gumiliov. To these is added the neo-Eurasian geopolitics of Aleksandr Dughin (1997), built on the confrontation between tellurocracy (\"empire of land\") and thalassocracy (\"empire of the sea\") and on the friend-enemy decisionism of Carl Schmitt (1932/1996).",
    "monographContext": "It provides the ideological justification for imperial aggression and the annihilation of the Euro-Atlantic constitutional order.",
    "polarity": "tension"
  },
  {
    "id": "antilumea-epstein",
    "term": "The Russian Antiworld and Normative Inversion",
    "stratum": "B",
    "authors": "Mihail Epstein, 2022, 2023",
    "domain": "Philosophy of culture and political semiotics",
    "definition": "Ideological system conceptualized by Mihail Epstein as Russkii Antimir, which does not propose a positive civilizational project, but works by systematically overturning the meaning of every political, legal and moral concept: aggression is called defense of peace, and occupation is called sovereignty.",
    "monographContext": "The real operative nucleus of the Putinist ideology, masked for export by traditionalist and sovereignist camouflage in Figure 2.",
    "polarity": "tension"
  },
  {
    "id": "starea-bobok",
    "term": "The Bobok state and transgressive cynical nihilism",
    "stratum": "B",
    "authors": "Fiodor Dostoievski, 1873 · Françoise Thom, 2018 · Peter Pomerantsev, 2014, 2019",
    "domain": "Political science and the psychology of propaganda",
    "definition": "The deliberate cultivation of transgressive cynicism — summed up by the motto \"let's not be ashamed of anything!\" — and of absolute epistemic relativism, designed to convince the audience that truth does not exist and that all democratic institutions are only hypocritical masks.",
    "monographContext": "It replaces classical ideological persuasion with moral paralysis and acceptance of the law of the fittest.",
    "polarity": "tension"
  },
  {
    "id": "dubla-falsificare-axiologica",
    "term": "Axiological double falsification and semiotic parasitism",
    "stratum": "B",
    "authors": "Vladimir Soloviov, 1900/1994 · Nikolai Berdiaev, 1949/1996 · Dumitru Stăniloae, 1978 · Pantelis Kalaitzidis, 2012 · Cyril Hovorun, 2018 · Aristotle Papanikolaou, 2012 · Kalaitzidis et al., 2022",
    "domain": "Axiological semiotics and political theology",
    "definition": "Operation of discursive camouflage and semiotic parasitism of autochthonous identity codes, which first falsifies the orthodox Christian tradition of the free person (Imago Dei and proairesis), substituting it with the militarist and ethnophiletist Russkii Mir ideology. At the same time, it falsifies the constitutional concept of national sovereignty, which it transforms into a doctrine of strategic disarmament, decoupling from NATO and the EU, and isolation in asymmetric bilateralism.",
    "monographContext": "It allows Russian propaganda to bypass Romanians' historical aversion to Moscow, as illustrated in Figure 2.",
    "polarity": "tension"
  },
  {
    "id": "bucla-ooda",
    "term": "The OODA decision loop, the Orientation phase and implicit guidance and control",
    "stratum": "B",
    "authors": "John Boyd, 1987/2018 · Frans P. B. Osinga, 2007",
    "domain": "Decisional Cybernetics and Strategic Theory",
    "definition": "Cybernetic adaptive cycle consisting of Observation, Orientation, Decision and Action (Boyd, 1987/2018; Osinga, 2007), in which the Orientation phase — consisting of cultural heritage, historical experience, destructive deduction / creative induction and moral values  — represents the center of gravity (Schwerpunkt) of the entire decision-making process. Beyond the four-step sequence, Boyd's architecture includes direct \"Implicit Guidance and Control\" links, whereby Guidance directly shapes Observation and can automatically trigger Action, bypassing the deliberative stage of Decision.",
    "monographContext": "When the Guidance phase loses its capacity for critical review (destruction–creation) and is captured from the outside, implicit guidance loops lock the subject into a self-referential circuit that selects only confirmatory observations and triggers impulsive actions on System 1, according to Figure 3.",
    "polarity": "neutral"
  },
  {
    "id": "control-reflexiv-rang-secund",
    "term": "Second-order reflexive control and the two ethical systems",
    "stratum": "B",
    "authors": "Vladimir Lefebvre, 1982, 2001 · Timothy L. Thomas, 2004",
    "domain": "Mathematical and cybernetic psychology",
    "definition": "Unlike first-order reflexive control (tactical misrepresentation of point data), second-order reflexive control provides the target with strategically selected information, false moral cues, and carefully calibrated emotional impulses. Through this intervention, the initiator changes the value architecture of the Target Orientation phase and switches it from the first ethical system of procedural cooperation to the second ethical system of uncompromising confrontation and annihilation of the opponent (Lefebvre, 1982, 2001).",
    "monographContext": "It causes the cognitively captured citizen to seemingly autonomously arrive at exactly the self-destructive decisions sought by the originator of the operation. From the perspective of the principle of free energy and active inference (Friston, 2010), it operates by distorting precision weighting (aberrant precision-weighting: assigning rigid hyper-precision to conspiratorial a priori belief and mitigating factual prediction errors), and in the contemporary digital ecosystem it is automated on a mass scale by commercial recommendation algorithms (deep reinforcement learning), keeping the user at Rank 0 (direct reaction) and Rank 1 (naive representation) of reflexivity until activation of Rank 2 and Rank 3 metacognitive reflection on Path B.",
    "polarity": "tension"
  },
  {
    "id": "mediere-ternara-vs-binara",
    "term": "Ternary semiosis (triad of interpretants) versus binary semiotics of annihilation",
    "stratum": "B",
    "authors": "Charles Sanders Peirce, 1931–1958 · Iuri Lotman, 1990, 1992/2009 · Iuri Lotman and Boris Uspenski, 1985",
    "domain": "Semiotics of culture and pragmatics",
    "definition": "In the architecture of Charles Sanders Peirce (1931–1958), authentic semiosis is a three-term relationship between sign, object, and interpretant, the latter evolving from the affective interpretant (primary emotion) and the energetic interpretant (immediate reaction) to the logical interpretant (critical deliberation and the rational rule of verification in the community). This structure corresponds to the boundary of the semiosphere as a bilingual translation filter (Lotman, 1990) and ternary cultures (Lotman, 1992/2009). In opposition to this, the binary semiotics of annihilation (Lotman & Uspenski, 1985) amputates the logical interpretant and the neutral zone of mediation, encapsulating the receiver in the short-circuited reaction of the affective and energetic interpretant, in which the opponent is treated as an ontological enemy to be exterminated.",
    "monographContext": "Cognitive operations export binary semiotics to democracies to block access to the logical interpretant and disrupt civil peace.",
    "polarity": "synthesis"
  },
  {
    "id": "inchidere-cognitiva-seizing-freezing",
    "term": "The need for cognitive closure (seizing and freezing) and defensive processing",
    "stratum": "B",
    "authors": "Arie W. Kruglanski and Donna M. Webster, 1996 · Arie W. Kruglanski, 2004 · Dan M. Kahan, 2013, 2017",
    "domain": "Cognitive and social psychology",
    "definition": "Psychocognitive mechanism triggered by acute stress and ambiguity, unfolding in two sequences: hasty and uncritical adoption of the first simplistic explanation that promises certainty (seizing), followed by epistemic freezing and impermeability to counterarguments (freezing). This hardening is reinforced by merging belief with identity and emotional status in the group of belonging (Identity-Protective Cognition, Kahan, 2013).",
    "monographContext": "It explains why aggressive confrontation strengthens amygdala defenses and why Phase II must begin with community validation.",
    "polarity": "tension"
  },
  {
    "id": "capturare-dopaminergica",
    "term": "Dopaminergic capture: D1 (Go) / D2 (No-Go) striatal pathway imbalance and migration to the dorsal striatum",
    "stratum": "B",
    "authors": "Wolfram Schultz, 1998, 2016 · Anna Lembke, 2021",
    "domain": "Neurobiology of addiction and attention",
    "definition": "Exploiting the neurochemical mechanism of reward prediction error in the nucleus accumbens by administering variable intermittent rewards, infinite scrolling, and inflammatory stimuli that elicit moral outrage. Dopamine phasic peaks hyperactivate the direct striatonigral pathway mediated by D1 receptors (the “Go pathway” of impulsive action initiation) and simultaneously induce desensitization and reduction in the density of postsynaptic D2 receptors on the indirect striatopallidal pathway (“No-Go pathway” of inhibitory braking, downregulation). As exposure becomes chronic, behavioral control migrates neuroanatomically from the ventral striatum (nucleus accumbens) to the dorsal striatum (caudate nucleus and putamen), transforming reward seeking into a compulsive stimulus-response automatism accompanied by anhedonia and informational withdrawal.",
    "monographContext": "It keeps the digital user in a state of compulsive attentional captivity, automatic reactivity, and prefrontal latency suppression.",
    "polarity": "tension"
  },
  {
    "id": "model-collapse-mad",
    "term": "Collapse and autophagy of generative models on synthetic data",
    "stratum": "A",
    "authors": "Ilia Shumailov et al., 2024 · Sina Alemohammad et al., 2024",
    "domain": "Artificial intelligence and theoretical computer science",
    "definition": "Synthetic data pollution of the digital epistemic infrastructure operating in two distinct but convergent stages: short-term, non-parametric (inference-time) flooding of web pages with cloned texts produces query-time contamination of search engines and retrieval-augmented generation systems (inference-time RAG poisoning); in the medium term, at the parametric level (during training), the recursive ingestion of these synthetic data (LLM grooming) without the infusion of authentic human data induces the mathematical degradation of the probability distributions and the narrowing of the variance of the generative models, known as Model Collapse (Shumailov et al., 2024) and Model Autophagy Disorder – MAD (Alemohammad et al., 2024). In the human-machine epistemic feedback loop, this technical degradation translates into the human plane by narrowing the informational horizon and deteriorating the citizen's predictive mental map (Friston, 2010).",
    "monographContext": "Exploited by Doppelgänger, Matryoshka and Pravda networks to pollute digital epistemic infrastructure, search engines and RAG systems.",
    "polarity": "tension"
  },
  {
    "id": "contagiune-complexa",
    "term": "Complex social contagion in the network",
    "stratum": "B",
    "authors": "Damon Centola, 2018, 2021 · Mark Granovetter, 1973",
    "domain": "Sociology of networks",
    "definition": "Diffusion mechanism in social networks theorized by Damon Centola (2018, 2021), whereby the adoption of radical beliefs, political identities or high-cost behavioral norms requires multiple and redundant confirmations through \"wide bridges\" in the immediate social vicinity. This process is fundamentally distinguished from the simple contagion of trivial information through \"weak ties\" (Granovetter, 1973).",
    "monographContext": "Coordinated swarms of bots and micro-influencers artificially manufacture the illusion of a majority social consensus; in Phase II, physical community spaces generate positive complex contagion.",
    "polarity": "neutral"
  },
  {
    "id": "enantiodromie",
    "term": "Law of collective enantiodromia",
    "stratum": "C",
    "authors": "Heraclitus · Carl Gustav Jung, 1921",
    "domain": "Analytical psychology",
    "definition": "Principle formulated by Heraclitus and theorized in analytical psychology by Carl Gustav Jung (1921), which describes a collective reaction pattern and a defensive compensation mechanism. When a society lacking predictable institutions (Layer A) and exhausted by chronic stress (Layer B) is held in an excessively one-sided official stance and torn by frustrations repressed in the Shadow, it reactively swings to its opposite extreme.",
    "monographContext": "It explains the collective swing from facade pro-Western mimicry (Institutional Persona) to radical rejection of constitutional modernity, without treating Layer C concepts as autonomous occult forces.",
    "polarity": "tension"
  },
  {
    "id": "arhetipul-trickster",
    "term": "The Trickster Archetype and Adaptive Vitality Conversion",
    "stratum": "C",
    "authors": "Carl Gustav Jung, 1916/1960, 1954/1968 · Paul Radin, 1956 · Marie-Louise von Franz, 1972/1995",
    "domain": "Analytical psychology and cultural anthropology",
    "definition": "The ambivalence of adaptive vitality takes refuge in the informal zone of the collective Shadow: in regressive form, this manifests as \"getting around\", cynical trickery and circumvention of the law. In its prospective dimension, however, it contains cognitive agility, resistance to indoctrination, and practical inventiveness when mediated by the transcendent function (Jung, 1916/1960) and processed through the three structural filters (right impersonal law in Layer A, historical critical discernment, and prefrontal metacognitive vigilance in Layer B).",
    "monographContext": "It constitutes, along with defensive historical memory, the latent resource from the Romanian collective Shadow that can be converted into organic modernity, according to Figure 4.",
    "polarity": "synthesis"
  },
  {
    "id": "matricea-cipolla",
    "term": "Carlo M. Cipolla's Behavioral Matrix",
    "stratum": "A",
    "authors": "Carlo M. Cipolla, 1976/2011 · Douglass C. North, John Joseph Wallis and Barry R. Weingast, 2009 · Richard H. Thaler and Cass R. Sunstein, 2008 · David Laibson, 1997 · Ernst Fehr and Simon Gächter, 2002",
    "domain": "Economic history and decision theory",
    "definition": "Two-dimensional Cartesian system (Cipolla, 1976/2011) that classifies human and institutional actions according to personal gain or loss on the X-axis and societal benefit or damage on the Y-axis in four quadrants: Quadrant I of intelligent cooperation (+X, +Y), Quadrant II of the vulnerable citizen (-X, +Y, helpless), Quadrant IV of the extractive actor (+X, -Y, bandits) and Quadrant III of collective self-sabotage (-X, -Y). This Quadrant III is systemically more dangerous than Quadrant IV because it defies means–end rationality.",
    "monographContext": "It formalizes the trajectory by which the vulnerable citizen of Quadrant II (-X, +Y), subject to the endogenous primary cause of internal spoliation in Quadrant IV (+X, -Y) — whose oligarchic factions threatened by the European rule of law have a tactical interest in encouraging anti-institutional chaos — is driven by the external catalyst of cognitive warfare — through the hyperbolic discounting of the future (Laibson, 1997) and diversion of altruistic punishment (Fehr & Gächter, 2002) into self-destructive symbolic revenge (spiteful punishment) and antisocial punishment (antisocial punishment) — vertically downwards, in Quadrant III of collective self-sabotage (-X, -Y), while the restorative transition to Quadrant I (+X, +Y) is achieved by strengthening the constitutional floor and removing the extractive dam through the institutional choice architecture (Richard H. Thaler and Cass R. Sunstein, 2008) in Figure 5.",
    "polarity": "neutral"
  },
  {
    "id": "puer-aeternus",
    "term": "The collective Puer Aeternus syndrome and the tutelary paternalistic state",
    "stratum": "C",
    "authors": "Marie-Louise von Franz, 1970/2000 · James Hillman, 1979 · Erich Neumann, 1949/1954",
    "domain": "Analytical psychology of culture",
    "definition": "Collective reaction pattern and defense mechanism (von Franz, 1970/2000; Hillman, 1979) whereby a society lacking predictable institutions (Layer A) and exhausted by chronic stress (Layer B) compensates for its insecurity by refusing patient and methodical institutional commitment. Instead of gradual construction, the collectivity seeks refuge in perpetual provisionality, magical thinking, passive waiting for a providential \"savior,\" and regression to dependence on a tutelary paternalistic state (Neumann, 1949/1954).",
    "monographContext": "It contributes to strategic decision-making deadlock and institutional paralysis of the target state in times of crisis.",
    "polarity": "tension"
  },
  {
    "id": "bifurcare-track-a-track-b",
    "term": "The neurocognitive bifurcation in crisis: Reactive Track A versus deliberative Track B",
    "stratum": "B",
    "authors": "Wilfred R. Bion, 1962, 1970 · Stephen W. Porges, 2011 · Julian F. Thayer and Richard D. Lane, 2009",
    "domain": "The neurobiology of decision and epistemic psychoanalysis",
    "definition": "Decisional model describing the opposition, at the critical point of an acute crisis (decisional bifurcation node), between the maladaptive reactive loop of Track A—dominated by amygdala hyperactivation (fight-or-flight sympathetic discharge) or unmyelinated dorsal vagal collapse (dissociative immobilization and learned helplessness), attentional field narrowing, and defensively motivated System 1/System 2—and adaptive deliberative Track B. This from the latter is supported by descending prefrontal inhibition (vmPFC/dlPFC activating GABAergic inhibitory interneurons in the central and basolateral amygdala), myelinated ventral vagal complex (vagal brake and social engagement system, Porges, 2011), high heart rate variability (HRV, index of neurovisceral integration, Thayer & Lane, 2009) and negative capability (tolerance of uncertainty) (Bion, 1970).",
    "monographContext": "At the moment of acute shock, the opening of Track B relies on the CERC coregulatory bridge and the proximity community validators, while for the general population the stable transition to Track B becomes possible through allostatic decompression and the technical measures to limit algorithmic amplification in Phase I (Figure 6).",
    "polarity": "synthesis"
  },
  {
    "id": "prebunking-inoculare",
    "term": "Prebunking and resistance to persuasion",
    "stratum": "B",
    "authors": "William J. McGuire, 1964 · Jon Roozenbeek and Sander van der Linden, 2019, 2022 · Hermann Ebbinghaus, 1885",
    "domain": "Experimental psychology and cognitive education",
    "definition": "Preventive strengthening mechanism of epistemic resilience based on the theory of resistance to persuasion (McGuire, 1964) and digitally operationalized as prebunking (Roozenbeek & van der Linden, 2019, 2022), through which the population is trained in advance to recognize formal patterns of manipulation. This training is accompanied by periodic sessions of mnemonic consolidation calibrated on the forgetting curve (Ebbinghaus, 1885) for the transfer of discernment into long-term procedural memory.",
    "monographContext": "The second pillar of Phase II of the resilience rebuilding protocol.",
    "polarity": "synthesis"
  },
  {
    "id": "guvernanta-policentrica-ostrom",
    "term": "Polycentric governance, autonomous political action, and perceived self-efficacy",
    "stratum": "A",
    "authors": "Vincent and Elinor Ostrom, 1990, 2010 · Albert Bandura, 1997",
    "domain": "Political Science and Institutional Economics",
    "definition": "Institutional system in which multiple autonomous decision-making centers — local, regional, national and European — cooperate and balance each other under a common constitutional framework (Ostrom, 1990, 2010), giving back to the citizen the capacity for autonomous political action (political agency) and the sense of perceived self-efficacy (Bandura, 1997).",
    "monographContext": "It overcomes in Phase III both bureaucratic hypercentralism and the fiefdoms of local barons.",
    "polarity": "synthesis"
  },
  {
    "id": "modernitate-organica",
    "term": "The Synthesis of Organic Modernity and Democratic Sovereignty",
    "stratum": "C",
    "authors": "Titu Maiorescu, 1868 · Eugen Lovinescu, 1924–1925 · Ștefan Zeletin, 1925 · Jürgen Habermas, 1992",
    "domain": "Social philosophy and strategic synthesis",
    "definition": "The state of historical and institutional maturity in which Western constitutional, legal and security forms cease to be mimetic surface borrowings. They thus become the natural expression of a regenerated autochthonous cultural, associative and moral background, uniting the rule of impersonal law (constitutional patriotism, Habermas, 1992) with the ethics of the dignity of the human person.",
    "monographContext": "The final resolution of the monograph and the foundation of Romania's democratic sovereignty in the 21st century, summarized in Figure 7.",
    "polarity": "synthesis"
  },
  {
    "id": "stratul-a",
    "term": "Layer A: Institutional, historical and sociological architecture",
    "stratum": "A",
    "authors": "Titu Maiorescu, 1868 · Niklas Luhmann, 1995, 2004 · Daron Acemoglu and James A. Robinson, 2012",
    "domain": "Institutional sociology and systems theory",
    "definition": "The first causal level of the model in the monograph, which analyzes the structure of the state, the degree of operational closure of justice and administration, the relationship between inclusive institutions and extractive networks, and sociospatial polarization.",
    "monographContext": "Deficits in Layer A deterministically generate the allostatic load in Layer B and the split between the mimetic Persona and the collective Shadow in Layer C, according to Figure 1.",
    "polarity": "neutral"
  },
  {
    "id": "stratul-b",
    "term": "Layer B: Neurocognitive, semiotic and axiological processing",
    "stratum": "B",
    "authors": "Bruce S. McEwen, 1998 · Robert M. Sapolsky, 2004, 2017 · John Boyd, 1987 · Vladimir Lefebvre, 1982 · Iuri Lotman, 1990",
    "domain": "Cognitive Neuroscience and Decisional Cybernetics",
    "definition": "The second causal tier of the model, which articulates the neurobiological mechanisms of stress—the HPA axis, the basolateral amygdala, and the prefrontal cortex—with the Orientation phase of the OODA loop, reflexive control, and ternary versus binary semiotic mediation.",
    "monographContext": "It constitutes the micro-mechanistic interface where internal institutional insecurity meets the algorithmic and semiotic vectors of external cognitive warfare.",
    "polarity": "neutral"
  },
  {
    "id": "stratul-c",
    "term": "Layer C: The Cultural Unconscious and Archetypal Dynamics",
    "stratum": "C",
    "authors": "Carl Gustav Jung, 1951/1968, 1954/1968 · Edward F. Edinger, 1972 · Singer and Kimbles, 2004 · Vamık D. Volkan, 1997",
    "domain": "Post-Jungian analytical psychology and psychosociology",
    "definition": "The third causal level of the monographic architecture, which examines cultural complexes, the relationship between the institutional Persona and the collective Shadow, the state of the Ego–Self axis, unintegrated historical traumas, and archetypes activated in crisis.",
    "monographContext": "It explains why cognitive capture takes on the force of an identity conversion immune to mere statistical argument or fact-checking.",
    "polarity": "neutral"
  },
  {
    "id": "institutii-extractive",
    "term": "Extractive institutions and limited access social order",
    "stratum": "A",
    "authors": "Daron Acemoglu and James A. Robinson, 2012 · North, Wallis and Weingast, 2009",
    "domain": "Political economy and neo-institutionalism",
    "definition": "Institutional arrangements in which the formal rules of the rule of law are subsumed by clientelistic politico-economic networks for rent extraction, the distribution of group privileges, and the blocking of open meritocratic competition.",
    "monographContext": "It generates the citizen's perception that the state is hostile or indifferent, eroding democratic legitimacy and paving the way for the slide into Quadrant III of Cipolla's matrix.",
    "polarity": "tension"
  },
  {
    "id": "russkii-mir-etnofiletism",
    "term": "The doctrine of Russkii Mir and the heresy of ethnophyletism",
    "stratum": "B",
    "authors": "Pantelis Kalaitzidis, 2012 · Kalaitzidis et al., 2022 · Aristotle Papanikolaou, 2012 · Cyril Hovorun, 2018",
    "domain": "Political theology and the study of ideologies",
    "definition": "The subordination of evangelical universality and the dignity of the person created in the divine image to ethnic nationalism and the imperial expansion of the Russian state, condemned by the Synod of Constantinople in 1872 as an ethnophyletic heresy and denounced by the Declaration of Volos in 2022.",
    "monographContext": "The main tool by which the Kremlin's propaganda apparatus semiotically parasitizes Orthodox religiosity and conservatism in Romania, analyzed in Subchapter 2.2.",
    "polarity": "tension"
  },
  {
    "id": "spalare-informationala",
    "term": "Recycling and disguising the information source through intermediaries: Doppelgänger, Matryoshka and Pravda networks",
    "stratum": "A",
    "authors": "Thomas Rid, 2020 · Peter Pomerantsev, 2014, 2019 · Ilia Shumailov et al., 2024",
    "domain": "Cybersecurity and OSINT analysis",
    "definition": "Transnational architecture in three levels of recycling and dissimulation of the information source (information laundering): the Kremlin's strategic laboratories and Pravda aggregators, followed by ideological intermediaries and local paraecclesial nuclei. The third level is the digital distribution infrastructure through cloned sites (Doppelgänger), swarms of bots (Matryoshka), manipulation of linguistic model training corpora (LLM grooming) and non-transparently coordinated micro-influencers.",
    "monographContext": "It bypasses Romanians' direct historical aversion to Russia and floods AI models and search engines with synthetic data.",
    "polarity": "tension"
  },
  {
    "id": "identificarea-cu-agresorul",
    "term": "Identification with the geopolitical aggressor (Ferenczi stage and Anna Freud stage)",
    "stratum": "C",
    "authors": "Sándor Ferenczi, 1933/1949 · Anna Freud, 1936/1993 · René Girard, 1982",
    "domain": "Clinical and psychopolitical psychoanalysis",
    "definition": "Unconscious defense mechanism that articulates two sequential stages: (1) in the stage described by Sándor Ferenczi (1933/1949), against the background of an existential anxiety of abandonment (the belief that one's own extractive state will leave its citizens defenseless in case of extreme danger), the victim dissociates his fear and introjects the perspective and alleged innocence of the implacable aggressor (\"Russia has been provoked\"); (2) in the stage described by Anna Freud (1936/1993), in order to escape the humiliation of the passive position, the subject reverses the role from passive to active, imitating the rhetoric of force of the aggressor and redirecting the hostility on the real victim of the aggression (Ukraine), transformed into a scapegoat (Girard, 1982).",
    "monographContext": "It explains the psychodynamic paradox whereby segments of a nation historically aggressed by Russia end up justifying Kremlin revisionism and attacking the victim of aggression under the guise of \"peace\" and \"sovereignty.\"",
    "polarity": "tension"
  },
  {
    "id": "grup-control-regional",
    "term": "Regional control group: Estonia, Poland and the Republic of Moldova",
    "stratum": "A",
    "authors": "Comparative analysis in Subchapter 2.3 of the monograph",
    "domain": "Comparative security and resilience policies",
    "definition": "Comparative methodology that examines three states from the eastern flank exposed to the same Russian cognitive vector, without idealizing them, but taking into account their own internal tensions (the residual vulnerability of the Russian-speaking minority in Estonia, the constitutional disputes regarding justice in Poland and the narrow electoral margins or the resistance of oligarchic networks to vetting in the Republic of Moldova). It demonstrates that resilience results from digital debureaucratization (e-Estonia) and preventive preparedness in Estonia, institutionalized historical memory and strategic consensus in Poland, and firm sanctioning of illicit financial flows in the Republic of Moldova.",
    "monographContext": "It refutes the thesis of cultural fatality and isolates the internal institutional variables responsible for Romania's vulnerability.",
    "polarity": "synthesis"
  },
  {
    "id": "sistemele-etice-lefebvre",
    "term": "The two ethical systems in Vladimir Lefebvre's moral algebra",
    "stratum": "B",
    "authors": "Vladimir Lefebvre, 1982, 2001",
    "domain": "Mathematical psychology and game theory",
    "definition": "Formal model developed in the Algebra of Consciousness (Lefebvre, 1982, 2001) that distinguishes between two opposing moral systems based on how they evaluate compromise and moral doubt (self-criticism). In the first ethical system, a subject who experiences moral doubt and recognizes his own limits evaluates procedural cooperation and institutional compromise among free persons as a higher state of moral integrity. In contrast, the second ethical system (based on an inverse Boolean algebra) perceives self-criticism, doubt and compromise as self-degradation and betrayal, generating a mask of absolute certainty and justifying the annihilation of the opponent.",
    "monographContext": "Second-order reflexive control seeks to switch the citizen from the first to the second ethical system in order to make democratic dialogue impossible.",
    "polarity": "neutral"
  },
  {
    "id": "proairesis",
    "term": "Proairesis: Moral Discernment and Deliberate Choice",
    "stratum": "B",
    "authors": "Aristotle · Epictetus · Gregory of Nyssa · Maximus the Confessor · Dumitru Stăniloae, 1978",
    "domain": "Classical Ethics, Decision Theory, and Patristic Theology",
    "definition": "The rational and moral capacity of the free person to suspend the impulsive automatic reaction and consciously choose between good and evil; the deliberative faculty through which consciousness exercises its ontological freedom in the face of manipulative stimuli and collectivist determinations.",
    "monographContext": "It forms the ethical and patristic foundation of Adaptive Deliberative Track B and of reconciling the Christian-secular moral filter in Subchapters 2.2 and 6.2.",
    "polarity": "synthesis"
  },
  {
    "id": "cognitia-protectoare-a-identitatii",
    "term": "Defensive processing motivated by protecting group identity",
    "stratum": "B",
    "authors": "Dan M. Kahan, 2013, 2017 · Ziva Kunda, 1990 · Keith E. Stanovich, 2009 · Marilynn B. Brewer, 1999 · Leon Festinger, 1957",
    "domain": "Political psychology and communication science",
    "definition": "Psychocognitive mechanism (Identity-Protective Cognition, Kahan, 2013, 2017), articulated with motivated reasoning (Kunda, 1990), irrationality and motivated rationalization of System 2 (Motivated System 2 Reasoning / myside bias, Stanovich, 2009). In the absence of actively open-minded thinking and epistemic humility, even subjects with high analytical ability divert their System 2 resources not to verify the empirical truth of a statement, but in two symmetrically dysfunctional directions to protect the emotional status of the in-group (in-group versus out-group, Brewer, 1999; Festinger, 1957): either to justify civic secession elitist and disdain for the fringes, either to construct pseudoscientific, esoteric and radical revisionist rationalizations.",
    "monographContext": "It turns the rejection of a demonstrable fake into an act of tribal loyalty and explains the failure of arrogant fact-checking campaigns.",
    "polarity": "tension"
  },
  {
    "id": "proiectie-paranoida",
    "term": "Shadow's paranoid projection and the scapegoat mechanism",
    "stratum": "C",
    "authors": "Vamık D. Volkan, 1997 · Thomas Singer and Samuel L. Kimbles, 2004 · Carl Gustav Jung, 1951/1968 · René Girard, 1982",
    "domain": "Analytical psychology and political anthropology",
    "definition": "Collective psychodynamic mechanism by which the community ascribes to itself absolute ontological innocence (the archetype of the pure victim), evacuating the unintegrated contents of the collective Shadow—totalitarian complicity, endogenous corruption, and underdevelopment—on an omnipotent \"external persecutor\" or scapegoat (Girard, 1982; Volkan, 1997).",
    "monographContext": "It provides an illusory discharge of psychic tension but blinds society to the real internal institutional causes of its suffering.",
    "polarity": "tension"
  },
  {
    "id": "functia-transcendenta",
    "term": "Transcendent function and symbolic mediation on the Ego–Self axis",
    "stratum": "C",
    "authors": "Carl Gustav Jung, 1916/1960 · Edward F. Edinger, 1972",
    "domain": "Analytical psychology",
    "definition": "The ability of a psychic system (Jung, 1916/1960) to maintain in consciousness the tension between two opposing tendencies — the thesis of pro-Western institutional modernization and the identity antithesis of sovereignty and autochthonous tradition — without suppressing either pole, generating a superior integrative synthesis on the Ego–Self axis (Edinger, 1972).",
    "monographContext": "The psychodynamic mechanism that enables the conversion of the Trickster's defensive historical memory and vitality into organic modernity, according to Figure 4.",
    "polarity": "synthesis"
  },
  {
    "id": "aparare-maniacala-izolationism",
    "term": "Manic defense and the illusion of isolationist sovereignism",
    "stratum": "C",
    "authors": "Melanie Klein, 1946/1975 · Marie-Louise von Franz, 1970/2000",
    "domain": "Psychoanalysis and political psychology",
    "definition": "Defensive mechanism of denial of dangerous reality (Klein, 1946/1975) and compensatory fantasy of self-sufficiency whereby a refugee collectivity in the Puer Aeternus defensive pattern (von Franz, 1970/2000) denies the military threat of a revisionist empire and believes that war can be avoided by disarming, abandoning allies and withdrawing into an autarchic \"sovereign neutrality\".",
    "monographContext": "It serves the Kremlin's strategic objective to decouple the target state from NATO and EU collective guarantees and isolate it in asymmetric bilateralism.",
    "polarity": "tension"
  },
  {
    "id": "capacitate-negativa-bion",
    "term": "Negative capability and descending neurovisceral regulation of Track B",
    "stratum": "B",
    "authors": "Wilfred R. Bion, 1962, 1970 · Stephen W. Porges, 2011 · Julian F. Thayer and Richard D. Lane, 2009",
    "domain": "Epistemic psychoanalysis and the neurobiology of decision",
    "definition": "The psychic and metacognitive ability formulated by John Keats and theorized in psychoanalysis by Wilfred R. Bion (1962, 1970) to tolerate uncertainty, ambiguity, and the lack of an immediate response in the midst of an acute crisis. At the neurophysiological level, this capacity is supported by the top-down regulation of the ventromedial and dorsolateral prefrontal cortex (which activates GABAergic inhibitory interneurons in the central and basolateral amygdala), by the myelinated ventral vagal complex (vagal brake and social engagement system from the polyvagal theory, Porges, 2011) and by a high heart rate variability (HRV, the index of neurovisceral integration, Thayer & Lane, 2009 ), preventing both the burst sympathetic response and unmyelinated dorsal vagal collapse.",
    "monographContext": "The decisive condition in the bifurcation node for the opening of Deliberative Path B in acute crisis by institutional leaders, technical agencies and proximity community validators, illustrated in Figure 6.",
    "polarity": "synthesis"
  },
  {
    "id": "protocolul-secvential-trei-faze",
    "term": "The mandatory three-phase sequential protocol",
    "stratum": "A",
    "authors": "Marc Lalonde, 1974 · G. E. Alan Dever, 1976 · Bruce S. McEwen, 1998 · Brendan Nyhan and Jason Reifler, 2010 · Dan M. Kahan, 2017 · Jon Roozenbeek et al., 2022",
    "domain": "Strategic Architecture of Societal Resilience",
    "definition": "The strict causal order of resilience reconstruction on Lalonde–Dever systemic determinants: Phase I of allostatic decompression and algorithmic hygiene (0–12 months, with tactical triage of 0–72h), Phase II of community validation, preventive training and moral filter (1–3 years) and Phase III of operational closure, polycentricity and collective individuation (3–10 years).",
    "monographContext": "It demonstrates why phase reversal—launching fact-checking or media education campaigns without prior allostatic decompression—fails through three experimentally documented perverse effects (Nyhan & Reifler, 2010; Kahan, 2017; Roozenbeek et al., 2022): the identity boomerang effect (worldview backfire), the familiarity backfire effect (on the background of prefrontal working memory exhausted) and epistemic cynicism towards the official discourse.",
    "polarity": "synthesis"
  },
  {
    "id": "curba-uitarii-ebbinghaus",
    "term": "Ebbinghaus's forgetting curve and spaced mnemonic consolidation",
    "stratum": "B",
    "authors": "Hermann Ebbinghaus, 1885 · Jon Roozenbeek and Sander van der Linden, 2022",
    "domain": "Psychology of memory and preventive psychocognitive training",
    "definition": "Psychocognitive law showing that cognitive resilience acquired through a single session of preemptive training erodes exponentially over time if not reactivated by periodic sessions of memory consolidation calibrated on the forgetting curve.",
    "monographContext": "It mandates the design of Phase II educational programs as recurrent training for the transfer of discernment to procedural memory.",
    "polarity": "synthesis"
  },
  {
    "id": "individuare-colectiva",
    "term": "Collective individuation and the reconciliation of substance with form",
    "stratum": "C",
    "authors": "Carl Gustav Jung, 1928 · Edward F. Edinger, 1972 · Alexander and Margarete Mitscherlich, 1967",
    "domain": "Analytical psychology and the philosophy of history",
    "definition": "The process of historical maturation by which a national community honestly integrates its Shadow and totalitarian traumas, overcomes the split between mimetic Persona and informal reality, and rebuilds its coherence on the Ego–Self axis.",
    "monographContext": "It crowns Phase III of the protocol, transforming democratic institutions from \"forms without substance\" into the expression of an organic modernity.",
    "polarity": "synthesis"
  },
  {
    "id": "ipoteze-baza-grup-lucru-bion",
    "term": "Basic assumptions (baD, baF, baP), valence and work group",
    "stratum": "C",
    "authors": "Wilfred R. Bion, 1961",
    "domain": "Group Psychodynamics and Clinical Sociology",
    "definition": "Fundamental distinction formulated by Wilfred R. Bion (1961) between the \"work group\" (oriented towards reality testing, rational cooperation and methodical task solving, which requires training and procedures) and the collective regression into \"basic assumptions\" (basic assumptions), which is instantly and involuntarily triggered by \"valency\" (valency - the prerational readiness of distressed individuals to merge affectively in contagion): passive dependence on a tutelary authority (baD), messianic mating in anticipation of a providential savior (baP), and fight-or-flight dominated by paranoid projections (baF). As the magical promise of the savior (baP) or the tutelary state (baD) inevitably disappoints in contact with structural reality, the collectivity veers cyclically into paranoid rage and fight-or-flight (baF) aggression.",
    "monographContext": "It explains in Subchapters 5.1 and 5.2 (and on the Synoptic Cover Plate) the cyclical dynamics of the collective regression on Track A and the conditions for the establishment of a rational work group on Track B.",
    "polarity": "neutral"
  },
  {
    "id": "vid-reprezentare-intermediere",
    "term": "The vacuum of political representation and opportunistic intermediation",
    "stratum": "A",
    "authors": "Peter Mair, 2013 · Cas Mudde, 2004 · James S. Coleman, 1990 · William S. Robinson, 1950",
    "domain": "Political science and the sociology of parties",
    "definition": "The intermediate political link that explains why allostatic load and hypercortisolemia (non-specific neurobiological states) do not mechanistically couple with external propaganda: political vulnerability occurs when traditional democratic parties abandon the representation of peripheries and vulnerable categories (Mair, 2013), leaving a vacuum of representation that opportunistic populist domestic actors (Mudde, 2004) and external operations of reflexive rank control second they exploit it to divert legitimate anger to false targets.",
    "monographContext": "It ensures in Subchapter 1.3 and Figure 1 the Micro–Macro transformational transition without causal leaps and in compliance with William S. Robinson's (1950) clause against the ecological fallacy.",
    "polarity": "tension"
  },
  {
    "id": "coreglare-cerc-validatori",
    "term": "CERC coregulatory bridge and community proximity validators",
    "stratum": "B",
    "authors": "Barbara Reynolds and Matthew W. Seeger, 2005 (CDC CERC) · Wilfred R. Bion, 1962, 1970 · Stephen W. Porges, 2011 · Julian F. Thayer and Richard D. Lane, 2009",
    "domain": "Crisis communication and the neurobiology of decision",
    "definition": "Polycentric de-escalation architecture in the first 0–72 hours of an acute informational shock, based on the principles of Crisis and Emergency Risk Communication (CDC CERC, Reynolds & Seeger, 2005: be first, be fair, be credible, express empathy, promote concrete action and show respect). Since the partisan political discourse is affected by the mistrust of the mimetic Persona, the affective co-regulation and opening of Track B is supported on two depoliticized levels: the autonomous technical agencies that publish verifiable STIX/DISARM evidence and the proximity community validators (doctors, teachers, canonical clergy, civic leaders).",
    "monographContext": "Resolves in Subchapters 5.2 and 6.1 (and Figure 6) the paradox of reactivation of the prefrontal cortex under acute shock.",
    "polarity": "synthesis"
  },
  {
    "id": "isonomie-fiscala-arhitectura-alegerii",
    "term": "Fiscal isonomy, mirror penalization and the architecture of institutional choice",
    "stratum": "A",
    "authors": "Richard H. Thaler and Cass R. Sunstein, 2008 · Niklas Luhmann, 2004 · Constitutional Court Decision no. 694/2015",
    "domain": "Constitutional tax law and institutional economics",
    "definition": "Mechanism of institutional choice architecture (institutional choice architecture, Thaler & Sunstein, 2008) and operational closure (Luhmann, 2004) through which the state eliminates the extractive asymmetry from the fiscal report (art. 167, art. 182 and art. 281 of Law no. 207/2015 – CPF, in accordance with the principle of fiscal symmetry from CCR Decision no. 694/2015), operating the ex officio automatic compensation of mutual claims (art. 167 CPF), ex officio transferring to the same IBAN account the mirror interest and penalties owed to the citizen or the company (art. 182 CPF) and establishing joint and several patrimonial liability and the effective recourse for definitively annulled tax acts in which the court finds bad faith or gross negligence (art. 281 CPF).",
    "monographContext": "It seals in Subchapter 6.3 and Figure 5 the horizontal constitutional floor between Quadrant II and Quadrant III in Cipolla's matrix, reducing the opportunity cost of honesty and drawing citizens into Quadrant I (+X, +Y).",
    "polarity": "synthesis"
  }
];

export const BIBLIOGRAPHY_DATA: BibliographyItem[] = [
  {
    "id": "bib-1",
    "authors": "Acemoglu, D., & Robinson, J. A.",
    "year": "2012",
    "title": "Why nations fail: The origins of power, prosperity, and poverty",
    "publication": "Crown Business",
    "fullCitation": "Acemoglu, D., & Robinson, J. A. (2012). Why nations fail: The origins of power, prosperity, and poverty. Crown Business.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-1b",
    "authors": "Acemoglu, D., & Robinson, J. A.",
    "year": "2019",
    "title": "The narrow corridor: States, societies, and the fate of liberty",
    "publication": "Penguin Press",
    "fullCitation": "Acemoglu, D., & Robinson, J. A. (2019). The narrow corridor: States, societies, and the fate of liberty. Penguin Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-2",
    "authors": "Alemohammad, S., Casco-Rodriguez, J., Luzi, L., Humayun, A. I., Babaei, H., LeJeune, D., Siahkoohi, A., & Baraniuk, R. G.",
    "year": "2024",
    "title": "Self-consuming generative models go MAD",
    "publication": "Proceedings of the Twelfth International Conference on Learning Representations (ICLR 2024)",
    "fullCitation": "Alemohammad, S., Casco-Rodriguez, J., Luzi, L., Humayun, A. I., Babaei, H., LeJeune, D., Siahkoohi, A., & Baraniuk, R. G. (2024). Self-consuming generative models go MAD. In Proceedings of the Twelfth International Conference on Learning Representations (ICLR 2024).",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-3",
    "authors": "Arnsten, A. F. T.",
    "year": "2009",
    "title": "Stress signalling pathways that impair prefrontal cortex structure and function",
    "publication": "Nature Reviews Neuroscience, 10(6), 410–422",
    "fullCitation": "Arnsten, A. F. T. (2009). Stress signalling pathways that impair prefrontal cortex structure and function. Nature Reviews Neuroscience, 10(6), 410–422.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-4",
    "authors": "Bandura, A.",
    "year": "1997",
    "title": "Self-efficacy: The exercise of control",
    "publication": "W. H. Freeman",
    "fullCitation": "Bandura, A. (1997). Self-efficacy: The exercise of control. W. H. Freeman.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-5",
    "authors": "Banfield, E. C.",
    "year": "1958",
    "title": "The moral basis of a backward society",
    "publication": "The Free Press",
    "fullCitation": "Banfield, E. C. (1958). The moral basis of a backward society. The Free Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-6",
    "authors": "Bădescu, G., Comșa, M., Gheorghiță, A., Stănuș, C., & Tufiș, C. D.",
    "year": "2010",
    "title": "Implicarea civică și politică a tinerilor [Civic and political engagement of youth]",
    "publication": "Editura Dobrogea",
    "fullCitation": "Bădescu, G., Comșa, M., Gheorghiță, A., Stănuș, C., & Tufiș, C. D. (2010). Implicarea civică și politică a tinerilor [Civic and political engagement of youth]. Editura Dobrogea.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-7",
    "authors": "Bădescu, I.",
    "year": "1984/2003",
    "title": "Sincronism european și cultură critică românească [European synchronism and Romanian critical culture]",
    "publication": "Editura Dacia",
    "fullCitation": "Bădescu, I. (1984/2003). Sincronism european și cultură critică românească [European synchronism and Romanian critical culture]. Editura Dacia. (Original work published in 1984 by Editura Științifică și Enciclopedică).",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-8",
    "authors": "Berdiaev, N.",
    "year": "1949/1996",
    "title": "The Realm of Spirit and the Realm of Caesar [Împărăția Duhului și împărăția Cezarului] (Trans. S. Lupan)",
    "publication": "Editura Amarcord",
    "fullCitation": "Berdiaev, N. (1996). Împărăția Duhului și împărăția Cezarului [The Realm of Spirit and the Realm of Caesar] (Trans. S. Lupan). Editura Amarcord. (Original work published posthumously in 1949).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-8b",
    "authors": "Bion, W. R.",
    "year": "1961",
    "title": "Experiences in groups and other papers",
    "publication": "Tavistock Publications",
    "fullCitation": "Bion, W. R. (1961). Experiences in groups and other papers. Tavistock Publications.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-9",
    "authors": "Bion, W. R.",
    "year": "1962",
    "title": "Learning from experience",
    "publication": "William Heinemann Medical Books",
    "fullCitation": "Bion, W. R. (1962). Learning from experience. William Heinemann Medical Books.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-10",
    "authors": "Bion, W. R.",
    "year": "1970",
    "title": "Attention and interpretation",
    "publication": "Tavistock Publications",
    "fullCitation": "Bion, W. R. (1970). Attention and interpretation. Tavistock Publications.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-11",
    "authors": "Boia, L.",
    "year": "1997",
    "title": "Istorie și mit în conștiința românească [History and myth in Romanian consciousness]",
    "publication": "Editura Humanitas",
    "fullCitation": "Boia, L. (1997). Istorie și mit în conștiința românească [History and myth in Romanian consciousness]. Editura Humanitas.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-11b",
    "authors": "Boyd, J. R.",
    "year": "1987/2018",
    "title": "A discourse on winning and losing (G. T. Hammond, Ed.)",
    "publication": "Air University Press",
    "fullCitation": "Boyd, J. R. (2018). A discourse on winning and losing (G. T. Hammond, Ed.). Air University Press. (Synthesis of strategic briefings delivered in 1987).",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-12",
    "authors": "Brady, W. J., Wills, J. A., Jost, J. T., Tucker, J. A., & Van Bavel, J. J.",
    "year": "2017",
    "title": "Emotion shapes the diffusion of moralized content in social networks",
    "publication": "Proceedings of the National Academy of Sciences, 114(28), 7313–7318",
    "fullCitation": "Brady, W. J., Wills, J. A., Jost, J. T., Tucker, J. A., & Van Bavel, J. J. (2017). Emotion shapes the diffusion of moralized content in social networks. Proceedings of the National Academy of Sciences, 114(28), 7313–7318.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-13",
    "authors": "Brewer, M. B.",
    "year": "1999",
    "title": "The psychology of prejudice: Ingroup love and outgroup hate?",
    "publication": "Journal of Social Issues, 55(3), 429–444",
    "fullCitation": "Brewer, M. B. (1999). The psychology of prejudice: Ingroup love and outgroup hate? Journal of Social Issues, 55(3), 429–444.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-14",
    "authors": "Centola, D.",
    "year": "2018",
    "title": "How behavior spreads: The science of complex contagions",
    "publication": "Princeton University Press",
    "fullCitation": "Centola, D. (2018). How behavior spreads: The science of complex contagions. Princeton University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-15",
    "authors": "Centola, D.",
    "year": "2021",
    "title": "Change: How to make big things happen",
    "publication": "Little, Brown Spark",
    "fullCitation": "Centola, D. (2021). Change: How to make big things happen. Little, Brown Spark.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-16",
    "authors": "Cipolla, C. M.",
    "year": "1976/2011",
    "title": "The basic laws of human stupidity",
    "publication": "il Mulino",
    "fullCitation": "Cipolla, C. M. (2011). The basic laws of human stupidity. il Mulino. (Original work circulated privately in 1976 and published in Allegro ma non troppo in 1988).",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-17",
    "authors": "Claverie, B., Baptiste, P., & du Cluzel, F. (Eds.)",
    "year": "2022",
    "title": "Cognitive warfare: The future of cognitive dominance",
    "publication": "NATO Collaboration Support Office / Allied Command Transformation",
    "fullCitation": "Claverie, B., Baptiste, P., & du Cluzel, F. (Eds.). (2022). Cognitive warfare: The future of cognitive dominance. NATO Collaboration Support Office / Allied Command Transformation.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-18",
    "authors": "Coleman, J. S.",
    "year": "1990",
    "title": "Foundations of social theory",
    "publication": "Belknap Press of Harvard University Press",
    "fullCitation": "Coleman, J. S. (1990). Foundations of social theory. Belknap Press of Harvard University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-19",
    "authors": "Dawisha, K.",
    "year": "2014",
    "title": "Putin's kleptocracy: Who owns Russia?",
    "publication": "Simon & Schuster",
    "fullCitation": "Dawisha, K. (2014). Putin's kleptocracy: Who owns Russia?. Simon & Schuster.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-20",
    "authors": "Dever, G. E. A.",
    "year": "1976",
    "title": "An epidemiological model for health policy analysis",
    "publication": "Social Indicators Research, 2(4), 453–466",
    "fullCitation": "Dever, G. E. A. (1976). An epidemiological model for health policy analysis. Social Indicators Research, 2(4), 453–466.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-21",
    "authors": "Dobrogeanu-Gherea, C.",
    "year": "1910",
    "title": "Neoiobăgia: Studiu economico-sociologic al problemei noastre agrare [Neo-serfdom: An economic and sociological study of our agrarian problem]",
    "publication": "Editura Librăriei Socec & Co.",
    "fullCitation": "Dobrogeanu-Gherea, C. (1910). Neoiobăgia: Studiu economico-sociologic al problemei noastre agrare [Neo-serfdom: An economic and sociological study of our agrarian problem]. Editura Librăriei Socec & Co.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-22",
    "authors": "Dostoievski, F. M.",
    "year": "1873",
    "title": "Bobok: Notes of a certain person [Bobok: Însemnările unei persoane]",
    "publication": "Grajdanin, (6), 1873",
    "fullCitation": "Dostoievski, F. M. (1873). Bobok: Notes of a certain person [Bobok: Însemnările unei persoane]. Grazhdanin, (6), 1873.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-23",
    "authors": "du Cluzel, F.",
    "year": "2020",
    "title": "Cognitive warfare",
    "publication": "NATO Allied Command Transformation Innovation Hub",
    "fullCitation": "du Cluzel, F. (2020). Cognitive warfare. NATO Allied Command Transformation Innovation Hub.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-24",
    "authors": "Dughin, A.",
    "year": "1997",
    "title": "Osnovy geopolitiki: Geopoliticheskoe budushchee Rossii [Foundations of Geopolitics: The Geopolitical Future of Russia]",
    "publication": "Arktogheia",
    "fullCitation": "Dughin, A. (1997). Osnovy geopolitiki: Geopoliticheskoe budushchee Rossii [Foundations of Geopolitics: The Geopolitical Future of Russia]. Arktogeia.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-25",
    "authors": "Durkheim, É.",
    "year": "1897/2005",
    "title": "Suicide [Despre sinucidere] (Trans. M. Calcan)",
    "publication": "Editura Institutul European",
    "fullCitation": "Durkheim, É. (2005). Despre sinucidere [Suicide] (Trans. M. Calcan). Editura Institutul European. (Original work published in 1897).",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-26",
    "authors": "Ebbinghaus, H.",
    "year": "1885/1913",
    "title": "Memory: A contribution to experimental psychology",
    "publication": "Teachers College, Columbia University",
    "fullCitation": "Ebbinghaus, H. (1913). Memory: A contribution to experimental psychology (Trans. H. A. Ruger & C. E. Bussenius). Teachers College, Columbia University. (Original work Über das Gedächtnis published in 1885).",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-27",
    "authors": "Edinger, E. F.",
    "year": "1972",
    "title": "Ego and archetype: Individuation and the religious function of the psyche",
    "publication": "G. P. Putnam's Sons",
    "fullCitation": "Edinger, E. F. (1972). Ego and archetype: Individuation and the religious function of the psyche. G. P. Putnam's Sons.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-28",
    "authors": "Eltchaninoff, M.",
    "year": "2018",
    "title": "Inside the mind of Vladimir Putin (Trans. J. Ferguson)",
    "publication": "Hurst & Company",
    "fullCitation": "Eltchaninoff, M. (2018). Inside the mind of Vladimir Putin (Trans. J. Ferguson). Hurst & Company.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-30",
    "authors": "Epstein, M.",
    "year": "2022",
    "title": "From totalitarianism to schizofascism and the Russian antiworld",
    "publication": "Studies in East European Thought, 74(4), 475–481",
    "fullCitation": "Epstein, M. (2022). From totalitarianism to schizofascism and the Russian antiworld. Studies in East European Thought, 74(4), 475–481.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-29",
    "authors": "Epstein, M.",
    "year": "2023",
    "title": "Russkii antimir: Politika na grani apokalipsisa [The Russian Antiworld: Politics on the Verge of Apocalypse]",
    "publication": "Franc-Tireur USA",
    "fullCitation": "Epstein, M. (2023). Russkii antimir: Politika na grani apokalipsisa [The Russian Antiworld: Politics on the Verge of Apocalypse]. Franc-Tireur USA.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-31",
    "authors": "Ferenczi, S.",
    "year": "1933/1949",
    "title": "Confusion of the tongues between the adults and the child",
    "publication": "International Journal of Psycho-Analysis, 30, 225–230",
    "fullCitation": "Ferenczi, S. (1949). Confusion of the tongues between the adults and the child. International Journal of Psycho-Analysis, 30, 225–230. (Paper presented in 1932 and published in 1933).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-31b",
    "authors": "Fehr, E., & Gächter, S.",
    "year": "2002",
    "title": "Altruistic punishment in humans",
    "publication": "Nature, 415(6868), 137–140",
    "fullCitation": "Fehr, E., & Gächter, S. (2002). Altruistic punishment in humans. Nature, 415(6868), 137–140.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-32",
    "authors": "Festinger, L.",
    "year": "1957",
    "title": "A theory of cognitive dissonance",
    "publication": "Stanford University Press",
    "fullCitation": "Festinger, L. (1957). A theory of cognitive dissonance. Stanford University Press.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-33",
    "authors": "Freud, A.",
    "year": "1936/1993",
    "title": "The ego and the mechanisms of defence",
    "publication": "Karnac Books",
    "fullCitation": "Freud, A. (1993). The ego and the mechanisms of defence. Karnac Books. (Original work published in 1936).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-34",
    "authors": "Friston, K.",
    "year": "2010",
    "title": "The free-energy principle: A unified brain theory?",
    "publication": "Nature Reviews Neuroscience, 11(2), 127–138",
    "fullCitation": "Friston, K. (2010). The free-energy principle: A unified brain theory? Nature Reviews Neuroscience, 11(2), 127–138.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-35",
    "authors": "Galeotti, M.",
    "year": "2019",
    "title": "The Vory: Russia's super mafia",
    "publication": "Yale University Press",
    "fullCitation": "Galeotti, M. (2019). The Vory: Russia's super mafia. Yale University Press.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-36",
    "authors": "Giles, K.",
    "year": "2019",
    "title": "Moscow rules: What drives Russia to confront the West",
    "publication": "Brookings Institution Press / Chatham House",
    "fullCitation": "Giles, K. (2019). Moscow rules: What drives Russia to confront the West. Brookings Institution Press / Chatham House.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-36b",
    "authors": "Girard, R.",
    "year": "1982",
    "title": "Le Bouc émissaire [The Scapegoat]",
    "publication": "Grasset",
    "fullCitation": "Girard, R. (1982). Le Bouc émissaire [The Scapegoat]. Grasset.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-37",
    "authors": "Granovetter, M. S.",
    "year": "1973",
    "title": "The strength of weak ties",
    "publication": "American Journal of Sociology, 78(6), 1360–1380",
    "fullCitation": "Granovetter, M. S. (1973). The strength of weak ties. American Journal of Sociology, 78(6), 1360–1380.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-37a",
    "authors": "Gumiliov, L. N.",
    "year": "1989",
    "title": "Etnogenez i biosfera Zemli [Ethnogenesis and the Biosphere of Earth]",
    "publication": "Ghidrometeoizdat",
    "fullCitation": "Gumiliov, L. N. (1989). Etnogenez i biosfera Zemli [Ethnogenesis and the Biosphere of Earth]. Gidrometeoizdat.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-37b",
    "authors": "Habermas, J.",
    "year": "1992/1996",
    "title": "Between facts and norms: Contributions to a discourse theory of law and democracy (Faktizität und Geltung)",
    "publication": "MIT Press",
    "fullCitation": "Habermas, J. (1996). Between facts and norms: Contributions to a discourse theory of law and democracy (Trans. W. Rehg). MIT Press. (Original work Faktizität und Geltung published in 1992).",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-38",
    "authors": "Habermas, J.",
    "year": "2006",
    "title": "Religion in the public sphere",
    "publication": "European Journal of Philosophy, 14(1), 1–25",
    "fullCitation": "Habermas, J. (2006). Religion in the public sphere. European Journal of Philosophy, 14(1), 1–25.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-39",
    "authors": "Hedström, P.",
    "year": "2005",
    "title": "Dissecting the social: On the principles of analytical sociology",
    "publication": "Cambridge University Press",
    "fullCitation": "Hedström, P. (2005). Dissecting the social: On the principles of analytical sociology. Cambridge University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-40",
    "authors": "Henderson, J. L.",
    "year": "1984",
    "title": "Cultural attitudes in psychological perspective",
    "publication": "Inner City Books",
    "fullCitation": "Henderson, J. L. (1984). Cultural attitudes in psychological perspective. Inner City Books.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-41",
    "authors": "Hillman, J. (Ed.)",
    "year": "1979",
    "title": "Puer papers",
    "publication": "Spring Publications",
    "fullCitation": "Hillman, J. (Ed.). (1979). Puer papers. Spring Publications.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-42",
    "authors": "Hovorun, C.",
    "year": "2018",
    "title": "Political Orthodoxies: The unorthodoxies of the Church coerced",
    "publication": "Fortress Press",
    "fullCitation": "Hovorun, C. (2018). Political Orthodoxies: The unorthodoxies of the Church coerced. Fortress Press.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-42b",
    "authors": "Ilin, I. A.",
    "year": "1925/1956",
    "title": "O soprotivlenii zlu siloiu [On Resistance to Evil by Force] · Nashi zadachi [Our Tasks]",
    "publication": "Izd. Russkogo Obshche-Voinskogo Soiuza",
    "fullCitation": "Ilin, I. A. (1925/1956). O soprotivlenii zlu siloiu [On Resistance to Evil by Force] (1925); Nashi zadachi [Our Tasks] (Vol. 1–2, 1956). Izd. Russkogo Obshche-Voinskogo Soiuza.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-43",
    "authors": "Ioanid, R.",
    "year": "2000",
    "title": "The Holocaust in Romania: The destruction of Jews and Gypsies under the Antonescu regime, 1940–1944",
    "publication": "Ivan R. Dee / United States Holocaust Memorial Museum",
    "fullCitation": "Ioanid, R. (2000). The Holocaust in Romania: The destruction of Jews and Gypsies under the Antonescu regime, 1940–1944. Ivan R. Dee / United States Holocaust Memorial Museum.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-44",
    "authors": "Ionescu, G.",
    "year": "1964",
    "title": "Communism in Rumania, 1944–1962",
    "publication": "Oxford University Press",
    "fullCitation": "Ionescu, G. (1964). Communism in Rumania, 1944–1962. Oxford University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-44b",
    "authors": "Janet, P.",
    "year": "1903",
    "title": "Les obsessions et la psychasthénie [Obsessions and Psychasthenia] (Vol. 1–2)",
    "publication": "Félix Alcan",
    "fullCitation": "Janet, P. (1903). Les obsessions et la psychasthénie [Obsessions and Psychasthenia] (Vol. 1–2). Félix Alcan.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-45a",
    "authors": "Jung, C. G.",
    "year": "1916/1960",
    "title": "The transcendent function (Collected Works, Vol. 8)",
    "publication": "Princeton University Press",
    "fullCitation": "Jung, C. G. (1916/1960). The transcendent function (Trans. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 8, pp. 67–91). Princeton University Press. (Essay written in 1916).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-48",
    "authors": "Jung, C. G.",
    "year": "1921/1971",
    "title": "Psychological types (Vol. 6)",
    "publication": "Princeton University Press",
    "fullCitation": "Jung, C. G. (1921/1971). Psychological types (Trans. H. G. Baynes, rev. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 6). Princeton University Press. (Original work published in 1921).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-46",
    "authors": "Jung, C. G.",
    "year": "1928/1966",
    "title": "The relations between the ego and the unconscious (Vol. 7)",
    "publication": "Princeton University Press",
    "fullCitation": "Jung, C. G. (1928/1966). The relations between the ego and the unconscious (Trans. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 7, pp. 123–241). Princeton University Press. (Original work published in 1928).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-45b",
    "authors": "Jung, C. G.",
    "year": "1934/1960",
    "title": "A review of the complex theory (Collected Works, Vol. 8)",
    "publication": "Princeton University Press",
    "fullCitation": "Jung, C. G. (1934/1960). A review of the complex theory (Trans. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 8, pp. 92–104). Princeton University Press. (Original work published in 1934).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-45c",
    "authors": "Jung, C. G.",
    "year": "1936/1964",
    "title": "Wotan (Collected Works, Vol. 10)",
    "publication": "Princeton University Press",
    "fullCitation": "Jung, C. G. (1936/1964). Wotan (Trans. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 10, pp. 179–193). Princeton University Press. (Original article published in 1936).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-47a",
    "authors": "Jung, C. G.",
    "year": "1951/1968",
    "title": "Aion: Researches into the phenomenology of the self (Vol. 9, Part 2)",
    "publication": "Princeton University Press",
    "fullCitation": "Jung, C. G. (1951/1968). Aion: Researches into the phenomenology of the self (Trans. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 9, Part 2). Princeton University Press. (Original work published in 1951).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-47b",
    "authors": "Jung, C. G.",
    "year": "1954/1968",
    "title": "On the psychology of the trickster-figure (Vol. 9, Part 1)",
    "publication": "Princeton University Press",
    "fullCitation": "Jung, C. G. (1954/1968). On the psychology of the trickster-figure (Trans. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 9, Part 1, pp. 255–272). Princeton University Press. (Original work published in 1954).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-49",
    "authors": "Kahan, D. M.",
    "year": "2013",
    "title": "Ideology, motivated reasoning, and cognitive reflection",
    "publication": "Judgment and Decision Making, 8(4), 407–424",
    "fullCitation": "Kahan, D. M. (2013). Ideology, motivated reasoning, and cognitive reflection. Judgment and Decision Making, 8(4), 407–424.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-50",
    "authors": "Kahan, D. M.",
    "year": "2017",
    "title": "Misconceptions, misinformation, and the logic of identity-protective cognition",
    "publication": "Cultural Cognition Project Working Paper Series, (164), Yale Law School",
    "fullCitation": "Kahan, D. M. (2017). Misconceptions, misinformation, and the logic of identity-protective cognition. Cultural Cognition Project Working Paper Series, (164), Yale Law School.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-51",
    "authors": "Kahneman, D.",
    "year": "2011",
    "title": "Thinking, fast and slow",
    "publication": "Farrar, Straus and Giroux",
    "fullCitation": "Kahneman, D. (2011). Thinking, fast and slow. Farrar, Straus and Giroux.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-52a",
    "authors": "Kalaitzidis, P.",
    "year": "2012",
    "title": "Orthodoxy and political theology",
    "publication": "World Council of Churches Publications",
    "fullCitation": "Kalaitzidis, P. (2012). Orthodoxy and political theology. World Council of Churches Publications.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-52b",
    "authors": "Kalaitzidis, P., Hovorun, C., Papanikolaou, A., & Gallaher, B.",
    "year": "2022",
    "title": "A declaration on the \"Russian World\" (Russkii Mir) teaching",
    "publication": "Volos Academy for Theological Studies / Fordham University Orthodox Christian Studies Center",
    "fullCitation": "Kalaitzidis, P., Hovorun, C., Papanikolaou, A., & Gallaher, B. (Eds.). (2022). A declaration on the \"Russian World\" (Russkii Mir) teaching. Volos Academy for Theological Studies / Fordham University Orthodox Christian Studies Center.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-53",
    "authors": "Klein, M.",
    "year": "1946/1975",
    "title": "Notes on some schizoid mechanisms",
    "publication": "The Hogarth Press",
    "fullCitation": "Klein, M. (1975). Notes on some schizoid mechanisms. In Envy and gratitude and other works 1946–1963 (pp. 1–24). The Hogarth Press. (Original work published in 1946).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-53b",
    "authors": "Kligman, G., & Verdery, K.",
    "year": "2011",
    "title": "Peasants under siege: The collectivization of Romanian agriculture, 1949–1962",
    "publication": "Princeton University Press",
    "fullCitation": "Kligman, G., & Verdery, K. (2011). Peasants under siege: The collectivization of Romanian agriculture, 1949–1962. Princeton University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-54a",
    "authors": "Kruglanski, A. W.",
    "year": "2004",
    "title": "The psychology of closed mindedness",
    "publication": "Psychology Press",
    "fullCitation": "Kruglanski, A. W. (2004). The psychology of closed mindedness. Psychology Press.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-54b",
    "authors": "Kruglanski, A. W., & Webster, D. M.",
    "year": "1996",
    "title": "Motivated closing of the mind: \"Seizing\" and \"freezing\"",
    "publication": "Psychological Review, 103(2), 263–283",
    "fullCitation": "Kruglanski, A. W., & Webster, D. M. (1996). Motivated closing of the mind: \"Seizing\" and \"freezing\". Psychological Review, 103(2), 263–283.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-55",
    "authors": "Kunda, Z.",
    "year": "1990",
    "title": "The case for motivated reasoning",
    "publication": "Psychological Bulletin, 108(3), 480–498",
    "fullCitation": "Kunda, Z. (1990). The case for motivated reasoning. Psychological Bulletin, 108(3), 480–498.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-55b",
    "authors": "Laibson, D.",
    "year": "1997",
    "title": "Golden eggs and hyperbolic discounting",
    "publication": "The Quarterly Journal of Economics, 112(2), 443–478",
    "fullCitation": "Laibson, D. (1997). Golden eggs and hyperbolic discounting. The Quarterly Journal of Economics, 112(2), 443–478.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-56",
    "authors": "Lalonde, M.",
    "year": "1974",
    "title": "A new perspective on the health of Canadians: A working document",
    "publication": "Minister of Supply and Services Canada",
    "fullCitation": "Lalonde, M. (1974). A new perspective on the health of Canadians: A working document. Minister of Supply and Services Canada.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-57b",
    "authors": "Le Goff, J.",
    "year": "1981",
    "title": "La naissance du Purgatoire [The Birth of Purgatory]",
    "publication": "Éditions Gallimard",
    "fullCitation": "Le Goff, J. (1981). La naissance du Purgatoire [The Birth of Purgatory]. Éditions Gallimard.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-57",
    "authors": "Ledeneva, A. V.",
    "year": "2013",
    "title": "Can Russia modernise? Sistema, power networks and informal governance",
    "publication": "Cambridge University Press",
    "fullCitation": "Ledeneva, A. V. (2013). Can Russia modernise? Sistema, power networks and informal governance. Cambridge University Press.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-58a",
    "authors": "Lefebvre, V. A.",
    "year": "1982",
    "title": "Algebra of conscience: A comparative analysis of Western and Soviet ethical systems",
    "publication": "D. Reidel Publishing Company",
    "fullCitation": "Lefebvre, V. A. (1982). Algebra of conscience: A comparative analysis of Western and Soviet ethical systems. D. Reidel Publishing Company.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-58b",
    "authors": "Lefebvre, V. A.",
    "year": "2001",
    "title": "Algebra of conscience (2nd expanded ed., with a new part on reflexive control)",
    "publication": "Kluwer Academic Publishers",
    "fullCitation": "Lefebvre, V. A. (2001). Algebra of conscience (2nd expanded ed., with a new part on reflexive control). Kluwer Academic Publishers.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-59",
    "authors": "Lembke, A.",
    "year": "2021",
    "title": "Dopamine nation: Finding balance in the age of indulgence",
    "publication": "Dutton",
    "fullCitation": "Lembke, A. (2021). Dopamine nation: Finding balance in the age of indulgence. Dutton.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-60",
    "authors": "Lipset, S. M., & Rokkan, S. (Eds.)",
    "year": "1967",
    "title": "Party systems and voter alignments: Cross-national perspectives",
    "publication": "The Free Press",
    "fullCitation": "Lipset, S. M., & Rokkan, S. (Eds.). (1967). Party systems and voter alignments: Cross-national perspectives. The Free Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-61a",
    "authors": "Lotman, I. M.",
    "year": "1990",
    "title": "Universe of the mind: A semiotic theory of culture",
    "publication": "I. B. Tauris",
    "fullCitation": "Lotman, I. M. (1990). Universe of the mind: A semiotic theory of culture (Trans. A. Shukman). I. B. Tauris.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-61b",
    "authors": "Lotman, I. M.",
    "year": "1992/2009",
    "title": "Culture and explosion",
    "publication": "Mouton de Gruyter",
    "fullCitation": "Lotman, I. M. (2009). Culture and explosion (Trans. W. Clark). Mouton de Gruyter. (Original work Kultura i vzryv published in 1992).",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-61c",
    "authors": "Lotman, I. M., & Uspenski, B. A.",
    "year": "1985",
    "title": "Binary models in the dynamics of Russian culture (to the end of the eighteenth century)",
    "publication": "Cornell University Press",
    "fullCitation": "Lotman, I. M., & Uspenski, B. A. (1985). Binary models in the dynamics of Russian culture (to the end of the eighteenth century). In A. D. Nakhimovsky & A. Stone Nakhimovsky (Eds.), The semiotics of Russian cultural history (pp. 30–66). Cornell University Press.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-62",
    "authors": "Lovinescu, E.",
    "year": "1924–1925/1997",
    "title": "Istoria civilizației române moderne [History of modern Romanian civilization] (Vol. 1–3)",
    "publication": "Editura Minerva",
    "fullCitation": "Lovinescu, E. (1997). Istoria civilizației române moderne [History of modern Romanian civilization] (Vol. 1–3). Editura Minerva. (Original work published in 1924–1925).",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-63a",
    "authors": "Luhmann, N.",
    "year": "1995",
    "title": "Social systems",
    "publication": "Stanford University Press",
    "fullCitation": "Luhmann, N. (1995). Social systems (Trans. J. Bednarz Jr. & D. Baecker). Stanford University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-63b",
    "authors": "Luhmann, N.",
    "year": "2004",
    "title": "Law as a social system",
    "publication": "Oxford University Press",
    "fullCitation": "Luhmann, N. (2004). Law as a social system (Trans. K. A. Ziegert). Oxford University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-64",
    "authors": "Maiorescu, T.",
    "year": "1868/1984",
    "title": "În contra direcției de astăzi în cultura română [Against today's direction in Romanian culture]",
    "publication": "Editura Minerva (Convorbiri literare, 1868)",
    "fullCitation": "Maiorescu, T. (1984). În contra direcției de astăzi în cultura română [Against today's direction in Romanian culture]. In Critice (Vol. 1, pp. 147–156). Editura Minerva. (Original study published in Convorbiri literare in 1868).",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-64a",
    "authors": "Mair, P.",
    "year": "2013",
    "title": "Ruling the void: The hollowing of Western democracy",
    "publication": "Verso",
    "fullCitation": "Mair, P. (2013). Ruling the void: The hollowing of Western democracy. Verso.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-64b",
    "authors": "McEwen, B. S.",
    "year": "1998",
    "title": "Protective and damaging effects of stress mediators",
    "publication": "New England Journal of Medicine, 338(3), 171–179",
    "fullCitation": "McEwen, B. S. (1998). Protective and damaging effects of stress mediators. New England Journal of Medicine, 338(3), 171–179.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-65",
    "authors": "McEwen, B. S., & Stellar, E.",
    "year": "1993",
    "title": "Stress and the individual: Mechanisms leading to disease",
    "publication": "Archives of Internal Medicine, 153(18), 2093–2101",
    "fullCitation": "McEwen, B. S., & Stellar, E. (1993). Stress and the individual: Mechanisms leading to disease. Archives of Internal Medicine, 153(18), 2093–2101.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-66",
    "authors": "McGuire, W. J.",
    "year": "1964",
    "title": "Inducing resistance to persuasion: Some contemporary approaches",
    "publication": "Advances in experimental social psychology (Vol. 1, pp. 191–229)",
    "fullCitation": "McGuire, W. J. (1964). Inducing resistance to persuasion: Some contemporary approaches. In L. Berkowitz (Ed.), Advances in experimental social psychology (Vol. 1, pp. 191–229). Academic Press.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-66b",
    "authors": "Menon, V.",
    "year": "2011",
    "title": "Large-scale brain networks and psychopathology: A unifying triple network model",
    "publication": "Trends in Cognitive Sciences, 15(10), 483–506",
    "fullCitation": "Menon, V. (2011). Large-scale brain networks and psychopathology: A unifying triple network model. Trends in Cognitive Sciences, 15(10), 483–506.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-67",
    "authors": "Merton, R. K.",
    "year": "1938",
    "title": "Social structure and anomie",
    "publication": "American Sociological Review, 3(5), 672–682",
    "fullCitation": "Merton, R. K. (1938). Social structure and anomie. American Sociological Review, 3(5), 672–682.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-67b",
    "authors": "Mudde, C.",
    "year": "2004",
    "title": "The populist Zeitgeist",
    "publication": "Government and Opposition, 39(4), 541–563",
    "fullCitation": "Mudde, C. (2004). The populist Zeitgeist. Government and Opposition, 39(4), 541–563.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-68",
    "authors": "Mitscherlich, A., & Mitscherlich, M.",
    "year": "1967/1975",
    "title": "The inability to mourn: Principles of collective behavior (Die Unfähigkeit zu trauern)",
    "publication": "Grove Press",
    "fullCitation": "Mitscherlich, A., & Mitscherlich, M. (1975). The inability to mourn: Principles of collective behavior (Trans. B. R. Placzek). Grove Press. (Original work Die Unfähigkeit zu trauern published in 1967).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-69",
    "authors": "Neumann, E.",
    "year": "1949/1954",
    "title": "The origins and history of consciousness",
    "publication": "Pantheon Books / Bollingen Series",
    "fullCitation": "Neumann, E. (1954). The origins and history of consciousness (Trans. R. F. C. Hull). Pantheon Books / Bollingen Series. (Original work published in 1949).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-70",
    "authors": "North, D. C., Wallis, J. J., & Weingast, B. R.",
    "year": "2009",
    "title": "Violence and social orders: A conceptual framework for interpreting recorded human history",
    "publication": "Cambridge University Press",
    "fullCitation": "North, D. C., Wallis, J. J., & Weingast, B. R. (2009). Violence and social orders: A conceptual framework for interpreting recorded human history. Cambridge University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-70b",
    "authors": "Nyhan, B., & Reifler, J.",
    "year": "2010",
    "title": "When corrections fail: The persistence of political misperceptions",
    "publication": "Political Behavior, 32(2), 303–330",
    "fullCitation": "Nyhan, B., & Reifler, J. (2010). When corrections fail: The persistence of political misperceptions. Political Behavior, 32(2), 303–330.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-71",
    "authors": "Osinga, F. P. B.",
    "year": "2007",
    "title": "Science, strategy and war: The strategic theory of John Boyd",
    "publication": "Routledge",
    "fullCitation": "Osinga, F. P. B. (2007). Science, strategy and war: The strategic theory of John Boyd. Routledge.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-72a",
    "authors": "Ostrom, E.",
    "year": "1990",
    "title": "Governing the commons: The evolution of institutions for collective action",
    "publication": "Cambridge University Press",
    "fullCitation": "Ostrom, E. (1990). Governing the commons: The evolution of institutions for collective action. Cambridge University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-72b",
    "authors": "Ostrom, E.",
    "year": "2010",
    "title": "Beyond markets and states: Polycentric governance of complex economic systems",
    "publication": "American Economic Review, 100(3), 641–672",
    "fullCitation": "Ostrom, E. (2010). Beyond markets and states: Polycentric governance of complex economic systems. American Economic Review, 100(3), 641–672.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-73",
    "authors": "Papanikolaou, A.",
    "year": "2012",
    "title": "The mystical as political: Democracy and non-radical Orthodoxy",
    "publication": "University of Notre Dame Press",
    "fullCitation": "Papanikolaou, A. (2012). The mystical as political: Democracy and non-radical Orthodoxy. University of Notre Dame Press.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-74",
    "authors": "Pariser, E.",
    "year": "2011",
    "title": "The filter bubble: What the Internet is hiding from you",
    "publication": "Penguin Press",
    "fullCitation": "Pariser, E. (2011). The filter bubble: What the Internet is hiding from you. Penguin Press.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-75",
    "authors": "Peirce, C. S.",
    "year": "1931–1958",
    "title": "Collected papers of Charles Sanders Peirce (Vol. 1–8)",
    "publication": "Harvard University Press",
    "fullCitation": "Peirce, C. S. (1931–1958). Collected papers of Charles Sanders Peirce (Vol. 1–8, C. Hartshorne, P. Weiss & A. W. Burks, Eds.). Harvard University Press.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-76a",
    "authors": "Pomerantsev, P.",
    "year": "2014",
    "title": "Nothing is true and everything is possible: The surreal heart of the new Russia",
    "publication": "PublicAffairs",
    "fullCitation": "Pomerantsev, P. (2014). Nothing is true and everything is possible: The surreal heart of the new Russia. PublicAffairs.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-76b",
    "authors": "Pomerantsev, P.",
    "year": "2019",
    "title": "This is not propaganda: Adventures in the war against reality",
    "publication": "PublicAffairs",
    "fullCitation": "Pomerantsev, P. (2019). This is not propaganda: Adventures in the war against reality. PublicAffairs.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-76c",
    "authors": "Popper, K. R.",
    "year": "1934/2002",
    "title": "The logic of scientific discovery",
    "publication": "Routledge",
    "fullCitation": "Popper, K. R. (1934/2002). The logic of scientific discovery. Routledge. (Original work Logik der Forschung published in 1934).",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-77",
    "authors": "Porges, S. W.",
    "year": "2011",
    "title": "The polyvagal theory: Neurophysiological foundations of emotions, attachment, communication, and self-regulation",
    "publication": "W. W. Norton & Company",
    "fullCitation": "Porges, S. W. (2011). The polyvagal theory: Neurophysiological foundations of emotions, attachment, communication, and self-regulation. W. W. Norton & Company.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-78",
    "authors": "Putnam, R. D.",
    "year": "2000",
    "title": "Bowling alone: The collapse and revival of American community",
    "publication": "Simon & Schuster",
    "fullCitation": "Putnam, R. D. (2000). Bowling alone: The collapse and revival of American community. Simon & Schuster.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-79",
    "authors": "Radin, P.",
    "year": "1956",
    "title": "The trickster: A study in American Indian mythology (With commentaries by K. Kerényi and C. G. Jung)",
    "publication": "Routledge & Kegan Paul",
    "fullCitation": "Radin, P. (1956). The trickster: A study in American Indian mythology (With commentaries by K. Kerényi and C. G. Jung). Routledge & Kegan Paul.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-80",
    "authors": "Rădulescu-Motru, C.",
    "year": "1904/1996",
    "title": "Cultura română și politicianismul [Romanian culture and politicianism]",
    "publication": "Editura Scrisul Românesc",
    "fullCitation": "Rădulescu-Motru, C. (1996). Cultura română și politicianismul [Romanian culture and politicianism]. Editura Scrisul Românesc. (Original work published in 1904).",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-80a",
    "authors": "Reynolds, B., & Seeger, M. W.",
    "year": "2005",
    "title": "Crisis and emergency risk communication as an integrative model",
    "publication": "Journal of Health Communication, 10(1), 43–55",
    "fullCitation": "Reynolds, B., & Seeger, M. W. (2005). Crisis and emergency risk communication as an integrative model. Journal of Health Communication, 10(1), 43–55.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-80b",
    "authors": "Rid, T.",
    "year": "2020",
    "title": "Active measures: The secret history of disinformation and political warfare",
    "publication": "Farrar, Straus and Giroux",
    "fullCitation": "Rid, T. (2020). Active measures: The secret history of disinformation and political warfare. Farrar, Straus and Giroux.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-80c",
    "authors": "Robinson, W. S.",
    "year": "1950",
    "title": "Ecological correlations and the behavior of individuals",
    "publication": "American Sociological Review, 15(3), 351–357",
    "fullCitation": "Robinson, W. S. (1950). Ecological correlations and the behavior of individuals. American Sociological Review, 15(3), 351–357.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-81a",
    "authors": "Roozenbeek, J., & van der Linden, S.",
    "year": "2019",
    "title": "Fake news game confers psychological resistance against online misinformation",
    "publication": "Palgrave Communications, 5(1), 65",
    "fullCitation": "Roozenbeek, J., & van der Linden, S. (2019). Fake news game confers psychological resistance against online misinformation. Palgrave Communications, 5(1), 65.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-81b",
    "authors": "Roozenbeek, J., van der Linden, S., Goldberg, B., Rathje, S., & Lewandowsky, S.",
    "year": "2022",
    "title": "Psychological inoculation improves resilience against misinformation on social media",
    "publication": "Science Advances, 8(34), eabo6254",
    "fullCitation": "Roozenbeek, J., van der Linden, S., Goldberg, B., Rathje, S., & Lewandowsky, S. (2022). Psychological inoculation improves resilience against misinformation on social media. Science Advances, 8(34), eabo6254.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-81c",
    "authors": "Ryle, G.",
    "year": "1949",
    "title": "The concept of mind",
    "publication": "Hutchinson",
    "fullCitation": "Ryle, G. (1949). The concept of mind. Hutchinson.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-82",
    "authors": "Sandu, D.",
    "year": "2010",
    "title": "Lumile sociale ale migrației românești în străinătate [The social worlds of Romanian migration abroad]",
    "publication": "Editura Polirom",
    "fullCitation": "Sandu, D. (2010). Lumile sociale ale migrației românești în străinătate [The social worlds of Romanian migration abroad]. Editura Polirom.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-83a",
    "authors": "Sapolsky, R. M.",
    "year": "2004",
    "title": "Why zebras don't get ulcers: The acclaimed guide to stress, stress-related diseases, and coping (3rd ed.)",
    "publication": "Henry Holt and Company",
    "fullCitation": "Sapolsky, R. M. (2004). Why zebras don't get ulcers: The acclaimed guide to stress, stress-related diseases, and coping (3rd ed.). Henry Holt and Company.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-83b",
    "authors": "Sapolsky, R. M.",
    "year": "2017",
    "title": "Behave: The biology of humans at our best and worst",
    "publication": "Penguin Press",
    "fullCitation": "Sapolsky, R. M. (2017). Behave: The biology of humans at our best and worst. Penguin Press.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-84",
    "authors": "Schmitt, C.",
    "year": "1932/1996",
    "title": "The concept of the political (Der Begriff des Politischen)",
    "publication": "University of Chicago Press",
    "fullCitation": "Schmitt, C. (1996). The concept of the political (Trans. G. Schwab). University of Chicago Press. (Original work Der Begriff des Politischen published in 1932).",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-85",
    "authors": "Schmitt, O. J.",
    "year": "2017",
    "title": "Corneliu Zelea Codreanu: Ascensiunea și căderea \"Căpitanului\" [Corneliu Zelea Codreanu: The rise and fall of \"The Captain\"]",
    "publication": "Editura Humanitas",
    "fullCitation": "Schmitt, O. J. (2017). Corneliu Zelea Codreanu: Ascensiunea și căderea \"Căpitanului\" [Corneliu Zelea Codreanu: The rise and fall of \"The Captain\"] (Trans. W. Tauwinkl). Editura Humanitas.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-86a",
    "authors": "Schultz, W.",
    "year": "1998",
    "title": "Predictive reward signal of dopamine neurons",
    "publication": "Journal of Neurophysiology, 80(1), 1–27",
    "fullCitation": "Schultz, W. (1998). Predictive reward signal of dopamine neurons. Journal of Neurophysiology, 80(1), 1–27.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-86b",
    "authors": "Schultz, W.",
    "year": "2016",
    "title": "Dopamine reward prediction error coding",
    "publication": "Dialogues in Clinical Neuroscience, 18(1), 23–32",
    "fullCitation": "Schultz, W. (2016). Dopamine reward prediction error coding. Dialogues in Clinical Neuroscience, 18(1), 23–32.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-86c",
    "authors": "Seeley, W. W., Menon, V., Schatzberg, A. F., Keller, J., Glover, G. H., Kenna, H., Reiss, A. L., & Greicius, M. D.",
    "year": "2007",
    "title": "Dissociable intrinsic connectivity networks for salience processing and executive control",
    "publication": "The Journal of Neuroscience, 27(9), 2349–2356",
    "fullCitation": "Seeley, W. W., Menon, V., Schatzberg, A. F., Keller, J., Glover, G. H., Kenna, H., Reiss, A. L., & Greicius, M. D. (2007). Dissociable intrinsic connectivity networks for salience processing and executive control. The Journal of Neuroscience, 27(9), 2349–2356.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-87",
    "authors": "Seligman, M. E. P.",
    "year": "1975",
    "title": "Helplessness: On depression, development, and death",
    "publication": "W. H. Freeman",
    "fullCitation": "Seligman, M. E. P. (1975). Helplessness: On depression, development, and death. W. H. Freeman.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-88",
    "authors": "Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., & Gal, Y.",
    "year": "2024",
    "title": "AI models collapse when trained on recursively generated data",
    "publication": "Nature, 631(8022), 755–759",
    "fullCitation": "Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., & Gal, Y. (2024). AI models collapse when trained on recursively generated data. Nature, 631(8022), 755–759.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-89",
    "authors": "Singer, T., & Kimbles, S. L. (Eds.)",
    "year": "2004",
    "title": "The cultural complex: Contemporary Jungian perspectives on psyche and society",
    "publication": "Brunner-Routledge",
    "fullCitation": "Singer, T., & Kimbles, S. L. (Eds.). (2004). The cultural complex: Contemporary Jungian perspectives on psyche and society. Brunner-Routledge.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-89b",
    "authors": "Skinner, B. F.",
    "year": "1953",
    "title": "Science and human behavior",
    "publication": "Macmillan",
    "fullCitation": "Skinner, B. F. (1953). Science and human behavior. Macmillan.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-90",
    "authors": "Snyder, T.",
    "year": "2018",
    "title": "The road to unfreedom: Russia, Europe, America",
    "publication": "Tim Duggan Books",
    "fullCitation": "Snyder, T. (2018). The road to unfreedom: Russia, Europe, America. Tim Duggan Books.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-91",
    "authors": "Soloviov, V.",
    "year": "1900/1994",
    "title": "A Short Story of the Anti-Christ (Three Conversations on War, Progress, and the End of Universal History) [Povestire despre Antihrist]",
    "publication": "Editura Institutul European",
    "fullCitation": "Soloviov, V. (1994). Povestire despre Antihrist [A Short Story of the Anti-Christ] (In Trei conversații despre război, progres și sfârșitul istoriei universale [Three Conversations on War, Progress, and the End of Universal History]). Editura Institutul European. (Original work published in 1900).",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-92",
    "authors": "Stahl, H. H.",
    "year": "1980",
    "title": "Traditional Romanian village communities: The transition from the communal to the capitalist mode of production in the Danube region",
    "publication": "Cambridge University Press",
    "fullCitation": "Stahl, H. H. (1980). Traditional Romanian village communities: The transition from the communal to the capitalist mode of production in the Danube region (Trans. D. Chirot & H. C. R. Chirot). Cambridge University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-93a",
    "authors": "Stanovich, K. E.",
    "year": "2009",
    "title": "What intelligence tests miss: The psychology of rational thought",
    "publication": "Yale University Press",
    "fullCitation": "Stanovich, K. E. (2009). What intelligence tests miss: The psychology of rational thought. Yale University Press.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-93",
    "authors": "Stăniloae, D.",
    "year": "1978",
    "title": "Teologia dogmatică ortodoxă [Orthodox dogmatic theology] (Vol. 1–3)",
    "publication": "Editura Institutului Biblic și de Misiune al Bisericii Ortodoxe Române",
    "fullCitation": "Stăniloae, D. (1978). Teologia dogmatică ortodoxă [Orthodox dogmatic theology] (Vol. 1–3). Editura Institutului Biblic și de Misiune al Bisericii Ortodoxe Române.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-93b",
    "authors": "Sterling, P., & Eyer, J.",
    "year": "1988",
    "title": "Allostasis: A new paradigm to explain arousal pathology",
    "publication": "Handbook of life stress, cognition and health (pp. 629–649), John Wiley & Sons",
    "fullCitation": "Sterling, P., & Eyer, J. (1988). Allostasis: A new paradigm to explain arousal pathology. In S. Fisher & J. Reason (Eds.), Handbook of life stress, cognition and health (pp. 629–649). John Wiley & Sons.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-94",
    "authors": "Sunstein, C. R.",
    "year": "2017",
    "title": "#Republic: Divided democracy in the age of social media",
    "publication": "Princeton University Press",
    "fullCitation": "Sunstein, C. R. (2017). #Republic: Divided democracy in the age of social media. Princeton University Press.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-95",
    "authors": "Taylor, C.",
    "year": "2007",
    "title": "A secular age",
    "publication": "Belknap Press of Harvard University Press",
    "fullCitation": "Taylor, C. (2007). A secular age. Belknap Press of Harvard University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-95b",
    "authors": "Thaler, R. H., & Sunstein, C. R.",
    "year": "2008",
    "title": "Nudge: Improving decisions about health, wealth, and happiness",
    "publication": "Yale University Press",
    "fullCitation": "Thaler, R. H., & Sunstein, C. R. (2008). Nudge: Improving decisions about health, wealth, and happiness. Yale University Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-96",
    "authors": "Thayer, J. F., & Lane, R. D.",
    "year": "2009",
    "title": "Claude Bernard and the heart–brain connection: Further elaboration of a model of neurovisceral integration",
    "publication": "Neuroscience & Biobehavioral Reviews, 33(2), 81–88",
    "fullCitation": "Thayer, J. F., & Lane, R. D. (2009). Claude Bernard and the heart–brain connection: Further elaboration of a model of neurovisceral integration. Neuroscience & Biobehavioral Reviews, 33(2), 81–88.",
    "domain": "Neuroscience & Psychobiology"
  },
  {
    "id": "bib-97a",
    "authors": "Thom, F.",
    "year": "2018",
    "title": "Comprendre le poutinisme [Understanding Putinism]",
    "publication": "Desclée De Brouwer",
    "fullCitation": "Thom, F. (2018). Comprendre le poutinisme [Understanding Putinism]. Desclée De Brouwer.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-97b",
    "authors": "Thom, F.",
    "year": "2022",
    "title": "La marche à rebours: Regard sur l'histoire soviétique et russe [Walking Backwards: A Look at Soviet and Russian History]",
    "publication": "Sorbonne Université Presses",
    "fullCitation": "Thom, F. (2022). La marche à rebours: Regard sur l'histoire soviétique et russe [Walking Backwards: A Look at Soviet and Russian History]. Sorbonne Université Presses.",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-98",
    "authors": "Thomas, T. L.",
    "year": "2004",
    "title": "Russia's reflexive control theory and the military",
    "publication": "The Journal of Slavic Military Studies, 17(2), 237–256",
    "fullCitation": "Thomas, T. L. (2004). Russia's reflexive control theory and the military. The Journal of Slavic Military Studies, 17(2), 237–256.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-99",
    "authors": "Tismaneanu, V.",
    "year": "2003",
    "title": "Stalinism for all seasons: A political history of Romanian communism",
    "publication": "University of California Press",
    "fullCitation": "Tismaneanu, V. (2003). Stalinism for all seasons: A political history of Romanian communism. University of California Press.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-100",
    "authors": "Verdery, K.",
    "year": "1991",
    "title": "National ideology under socialism: Identity and cultural politics in Ceaușescu's Romania",
    "publication": "University of California Press",
    "fullCitation": "Verdery, K. (1991). National ideology under socialism: Identity and cultural politics in Ceaușescu's Romania. University of California Press.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-101a",
    "authors": "Volkan, V. D.",
    "year": "1997",
    "title": "Bloodlines: From ethnic pride to ethnic terrorism",
    "publication": "Farrar, Straus and Giroux",
    "fullCitation": "Volkan, V. D. (1997). Bloodlines: From ethnic pride to ethnic terrorism. Farrar, Straus and Giroux.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-101b",
    "authors": "Volkan, V. D.",
    "year": "2004",
    "title": "Blind trust: Large groups and their leaders in times of crisis and terror",
    "publication": "Pitchstone Publishing",
    "fullCitation": "Volkan, V. D. (2004). Blind trust: Large groups and their leaders in times of crisis and terror. Pitchstone Publishing.",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-102b",
    "authors": "von Franz, M.-L.",
    "year": "1970/2000",
    "title": "The problem of the Puer Aeternus (3rd ed.)",
    "publication": "Inner City Books",
    "fullCitation": "von Franz, M.-L. (1970/2000). The problem of the Puer Aeternus (3rd ed.). Inner City Books. (Original work based on lectures from 1959–1960 and published in 1970).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-102a",
    "authors": "von Franz, M.-L.",
    "year": "1972/1995",
    "title": "Shadow and evil in fairy tales (Rev. ed.)",
    "publication": "Shambhala",
    "fullCitation": "von Franz, M.-L. (1972/1995). Shadow and evil in fairy tales (Rev. ed.). Shambhala. (Original work published in 1972).",
    "domain": "Analytical Psychology & Memory"
  },
  {
    "id": "bib-103",
    "authors": "Vosoughi, S., Roy, D., & Aral, S.",
    "year": "2018",
    "title": "The spread of true and false news online",
    "publication": "Science, 359(6380), 1146–1151",
    "fullCitation": "Vosoughi, S., Roy, D., & Aral, S. (2018). The spread of true and false news online. Science, 359(6380), 1146–1151.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-104",
    "authors": "Wallerstein, I.",
    "year": "1974",
    "title": "The modern world-system I: Capitalist agriculture and the origins of the European world-economy in the sixteenth century",
    "publication": "Academic Press",
    "fullCitation": "Wallerstein, I. (1974). The modern world-system I: Capitalist agriculture and the origins of the European world-economy in the sixteenth century. Academic Press.",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-105",
    "authors": "Wu, T.",
    "year": "2016",
    "title": "The attention merchants: The epic scramble to get inside our heads",
    "publication": "Alfred A. Knopf",
    "fullCitation": "Wu, T. (2016). The attention merchants: The epic scramble to get inside our heads. Alfred A. Knopf.",
    "domain": "Cybernetics & Semiotics"
  },
  {
    "id": "bib-106",
    "authors": "Zeletin, Ș.",
    "year": "1925/1991",
    "title": "Burghezia română: Originea și rolul ei istoric [The Romanian bourgeoisie: Its origin and historical role]",
    "publication": "Editura Humanitas",
    "fullCitation": "Zeletin, Ș. (1991). Burghezia română: Originea și rolul ei istoric [The Romanian bourgeoisie: Its origin and historical role]. Editura Humanitas. (Original work published in 1925).",
    "domain": "Institutional Sociology"
  },
  {
    "id": "bib-106b",
    "authors": "Zubarevich, N.",
    "year": "2011",
    "title": "Four Russias: Rethinking the post-Soviet map",
    "publication": "openDemocracy",
    "fullCitation": "Zubarevich, N. (2011). Four Russias: Rethinking the post-Soviet map. openDemocracy. https://www.opendemocracy.net/en/odr/four-russias-rethinking-post-soviet-map/",
    "domain": "Geopolitics & Russian Ideology"
  },
  {
    "id": "bib-107",
    "authors": "Zuboff, S.",
    "year": "2019",
    "title": "The age of surveillance capitalism: The fight for a human future at the new frontier of power",
    "publication": "PublicAffairs",
    "fullCitation": "Zuboff, S. (2019). The age of surveillance capitalism: The fight for a human future at the new frontier of power. PublicAffairs.",
    "domain": "Cybernetics & Semiotics"
  }
];

export const MASTER_STYLE_PROMPT = "Create a Cinematic mode video experience following strict academic rigor (0.3 temperature: analytical tone, sober, calm, clinical, no speculation or gratuitous metaphors). Do not state or display any statistical data, percentages or numerical scores; it explains all ideas exclusively as structural and causal dynamics. It structures the presentation progressively, doubling each theoretical concept with its practical/empirical explanation, from the definition of the systemic framework and bottlenecks to the final synthesis and solution.\n\nMandatory visual rule: Use exclusively a 2D editorial illustration style / clean vector engraving and system diagrams on a textured warm cream-white background (#F6F5EE). All lines, outlines and main text will be in charcoal black (#222426) and shades of slate gray (#6E7376, #8C9BA5). Use strictly mustard-yellow (#E5B822) as an accent for key concepts, synthesis, and solutions, and vermilion-red (#F01E1E) exclusively for tensions, crises, or deadlock loops. Prohibited to use other colors, 3D effects or whiteboard designs.";

export const CHAPTER_EXECUTIVE_SUMMARIES: ChapterExecutiveSummary[] = [
  {
    "chapterNumber": 0,
    "chapterTitle": "Introduction",
    "executiveSynthesis": [
      {
        "id": "exec-0-1",
        "title": "Diagnosed mechanism: Sixth operational domain",
        "takeaway": "Cognitive warfare goes beyond point-in-time information propaganda, aiming to alter the architecture of reality processing and paralyze decision-making capacity below the threshold of Article 5 of NATO.",
        "implication": "National defense can no longer be limited to securing physical and cyber infrastructure, but must protect the integrity of cognitive processes and constitutional trust."
      },
      {
        "id": "exec-0-2",
        "title": "Systemic vulnerability: Three-layer recursive causality",
        "takeaway": "Hostile operations act as an opportunistic exogenous catalyst that preys on preexisting endogenous vulnerabilities at three levels: extractive institutions in Layer A, neurocognitive reserve depleted by stress or hijacked by reasoned rationalization in Layer B, and defensive cultural patterns in Layer C.",
        "implication": "Isolated strategic communication or fact-checking campaigns inevitably fail if they ignore the institutional and neurobiological causes of vulnerability."
      },
      {
        "id": "exec-0-3",
        "title": "Strategic decision: The integrated systemic approach",
        "takeaway": "Societal resilience requires the synchronized treatment of institutional, informational, associative and neurobiological determinants in a strict causal order.",
        "implication": "Security and public policy institutions must act in a coordinated manner according to a unified model that links state reform to digital space hygiene and social cohesion."
      }
    ]
  },
  {
    "chapterNumber": 1,
    "chapterTitle": "Chapter 1: The structural vulnerabilities of Romanian society and the erosion of endogenous resilience",
    "executiveSynthesis": [
      {
        "id": "exec-1-1",
        "title": "Diagnosed mechanism: Forms without substance and allostatic load",
        "takeaway": "Deficit of operational closure, extractive institutions, and sociospatial polarization induce chronic allostatic load and biological inhibition of the dorsolateral prefrontal cortex (dlPFC, with System 1 switching) in vulnerable environments, while in deprived urban strata it diverts System 2 into irrationality and motivated rationalization (Stanovich, 2009; Kahan, 2017).",
        "implication": "Against the background of the vacuum of political representation (Mair, 2013), everyday insecurity in the peripheries and defensive conformity in urban bubbles compromise the analytical processing of information before contact with external propaganda."
      },
      {
        "id": "exec-1-2",
        "title": "Systemic vulnerability: Amoral familism and the hyperconnectivity of diaspora",
        "takeaway": "The destruction of bridging social capital by retreating into amoral familism, the secession of affluent urban strata, and the algorithmic immersion of the diaspora on short video platforms create closed information bubbles on a transnational scale.",
        "implication": "Amidst the failure of traditional democratic parties to represent these communities, demographic cleavages and the trauma of uprooting leave a political vacuum that opportunistic actors and second-order reflexive control operations directly exploit for anti-system mobilization."
      },
      {
        "id": "exec-1-3",
        "title": "Strategic decision: Debureaucratization as cognitive security",
        "takeaway": "Allostatic stress reduction through equitable public services, fiscal predictability and transparent digitization, following the e-Estonia model, is the neurobiological precondition of any resilience.",
        "implication": "Government and public administration must treat the quality of interaction between the citizen and the state as the primary pillar of defense in the sixth operational domain."
      }
    ]
  },
  {
    "chapterNumber": 2,
    "chapterTitle": "Chapter 2: The architecture of Putinist ideology and its sovereignist discursive camouflage",
    "executiveSynthesis": [
      {
        "id": "exec-2-1",
        "title": "Diagnosed mechanism: Antiworld, Bobok state and double falsification",
        "takeaway": "The Russian kleptocratic regime operates through the normative inversion of the Antiworld and the transgressive cynicism of the Bobok state, camouflaged for export under the guise of defending tradition and sovereignty.",
        "implication": "In order to circumvent the historical Russophobia of Romanians, the hostile actor semiotically parasitizes legitimate debates and autochthonous identity codes through networks of recycling and concealment of the informational source through intermediaries (information laundering)."
      },
      {
        "id": "exec-2-2",
        "title": "Systemic Vulnerability: Paraecclesial Networks and Complex Contagion",
        "takeaway": "The Russkii Mir ethnophiletist heresy and isolationist false sovereignty propagates through informal para-ecclesiastical cores, Telegram channels and micro-influencers, using complex social contagion.",
        "implication": "Facade ritualistic religiosity and dissatisfaction with the imposture of local elites are diverted by paranoid projection and identification with the aggressor against the EU and NATO."
      },
      {
        "id": "exec-2-3",
        "title": "Strategic decision: The regional control group model and the axiological partnership",
        "takeaway": "The comparison with Estonia, Poland and the Republic of Moldova demonstrates that resilience results from the sanctioning of illicit flows, institutionalized historical memory and the defense of patristic anthropology of the person.",
        "implication": "The authorities must deconstruct the financial networks of recycling and concealment of the information source through intermediaries and support the dialogue between constitutional culture and canonical Orthodox theology."
      }
    ]
  },
  {
    "chapterNumber": 3,
    "chapterTitle": "Chapter 3: The Mechanism of Cognitive Capture and Decision Colonization in the Sixth Operational Domain",
    "executiveSynthesis": [
      {
        "id": "exec-3-1",
        "title": "Diagnosed mechanism: Colonization of the OODA Orientation phase and binary semiosis",
        "takeaway": "Second-order reflexive control—automated today by recommendation algorithms and based on aberrant precision-weighting (Friston) that attributes hyperprecision to conspiratorial dogma and mitigates factual prediction errors—targets the Orientation phase of the OODA loop, keeping the citizen at Rank 0/1 reflexivity and switching him from the first ethical system of cooperation to the second ethical system of confrontation binary.",
        "implication": "Once the Orientation matrix is  altered, the citizen spontaneously rejects fact checks to protect his identity and status within the group he belongs to."
      },
      {
        "id": "exec-3-2",
        "title": "Systemic vulnerability: Dopaminergic capture and pollution with two-stage synthetic data",
        "takeaway": "Retention algorithms exploit the neurochemical mechanism of reward prediction error in the nucleus accumbens through intermittent variable rewards, while Doppelgänger, Matryoshka and Pravda networks non-parametrically pollute search engines and RAG systems (inference-time RAG poisoning) and parametrically degrade AI models upon retraining (Model Collapse / MAD).",
        "implication": "A man–machine epistemic feedback loop is created in which prefrontal latency suppression and digital infrastructure contamination block democratic deliberation."
      },
      {
        "id": "exec-3-3",
        "title": "Strategic decision: Algorithmic audit and technical steps to slow virality",
        "takeaway": "Restoring temporal latency for System 2 requires disabling the algorithmic amplification of moral outrage and cryptographically tagging the synthetic data.",
        "implication": "ANCOM (as DSC that certifies trusted notifiers and vetted researchers according to art. 40 DSA) and DNSC urgently notify the European Commission for the activation of systemic risk mitigation mechanisms (art. 34–35 DSA and AI Act) in relation to large platforms (VLOPs), imposing mechanisms to slow down virality in times of crisis."
      }
    ]
  },
  {
    "chapterNumber": 4,
    "chapterTitle": "Chapter 4: The entrenchment of polarization and the dynamics of social self-destruction",
    "executiveSynthesis": [
      {
        "id": "exec-4-1",
        "title": "Diagnosed Mechanism: Sovereign Enantiodromia and Shadow Projection",
        "takeaway": "The saturation of the mimetic institutional Persona in a society devoid of predictable institutions and exhausted by chronic stress generates an enantiodromous reactive pendulum, overturning the pro-Western facade conformism in the radical rejection of the constitutional order.",
        "implication": "Unintegrated contents of the collective Shadow are vented by paranoid projection onto an \"external persecutor\", masking the responsibility of internal extractive networks."
      },
      {
        "id": "exec-4-2",
        "title": "Systemic Vulnerability: Slipping into Quadrant III of Cipolla's Matrix",
        "takeaway": "Against the background of the endogenous primary cause — the spoliation exercised by internal extractive actors in Quadrant IV (+X, -Y) and the tactical interest of oligarchic factions in encouraging anti-institutional chaos to save their impunity — the external catalyst of cognitive warfare exploits the hyperbolic discounting of the future, the symbolic self-destructive revenge and the antisocial punishment of the vulnerable citizen in Quadrant II (-X, +Y), pushing him into Quadrant III of collective self-sabotage (-X, -Y).",
        "implication": "According to Cipolla's Third Fundamental Law, Quadrant III is more dangerous than Quadrant IV because it defies utilitarian rationality, turning the victim into the agent of his own ruin."
      },
      {
        "id": "exec-4-3",
        "title": "The strategic decision: Activating the three conversion filters in organic modernity",
        "takeaway": "The latent resources of the collective Shadow—the defensive historical memory and adaptive vitality of the Trickster archetype—must not be arrogantly repressed, but converted through transcendent function.",
        "implication": "The state must activate the three structural filters: the just impersonal law in Layer A—incrementally activated from the early stages through “islands of operational closure and administrative predictability” (Ostrom, 1990; Acemoglu & Robinson, 2019) and through the architecture of institutional choice (Thaler & Sunstein, 2008)—along with critical discernment and metacognitive vigilance in Layer B, to return society to Quadrant I (+X, +Y)."
      }
    ]
  },
  {
    "chapterNumber": 5,
    "chapterTitle": "Chapter 5: Decisional Behavior in Acute Crisis: Cipolla's Matrix and the Neurocognitive Bifurcation",
    "executiveSynthesis": [
      {
        "id": "exec-5-1",
        "title": "Diagnosed mechanism: Puer Aeternus syndrome and manic defense",
        "takeaway": "In moments of strategic crisis, a society exhausted by institutional unpredictability and chronic stress compensates for its insecurity with the Puer Aeternus defensive pattern, the magical expectation of a providential \"savior\" and the illusion of isolationist neutrality.",
        "implication": "Defensive nostalgia for passive dependence on a tutelary paternalistic state paralyzes the political will and strategic deterrence capacity of the target state."
      },
      {
        "id": "exec-5-2",
        "title": "Systemic vulnerability: The bifurcation between the reactive Track A and the deliberative Track B",
        "takeaway": "Under acute informational shock, the absence of prefrontal regulation diverts processing into reactive Track A—the amygdala loop, dopaminergic-induced cognitive tunneling, and fear contagion—blocking adaptive deliberative Track B.",
        "implication": "On Track A, the electorate and institutions go into decisional paralysis without firing a single shot, fulfilling the terminal goal of cognitive warfare."
      },
      {
        "id": "exec-5-3",
        "title": "Strategic Decision: Leaders' Responsibility in Acute Shock and Phase I Decompression",
        "takeaway": "At the moment of the acute shock (0–72h), the opening of the deliberative Path B through negative capability (Bion, 1970) and CDC CERC communication relies on a polycentric architecture on two levels: the depoliticized technical agencies (with STIX/DISARM proving ground) and the proximity community validators (doctors, teachers, canonical clerics, independent journalists).",
        "implication": "For the broad biologically depleted population, stable and autonomous transition to Track B becomes possible as the coregulatory bridge of the first 72 hours is strengthened by the allostatic decompression and technical algorithmic amplification-limiting measures of Phase I of the protocol."
      }
    ]
  },
  {
    "chapterNumber": 6,
    "chapterTitle": "Chapter 6: The Sequential Protocol for Reconstructing Societal Cognitive Resilience",
    "executiveSynthesis": [
      {
        "id": "exec-6-1",
        "title": "Diagnosed Mechanism: Mandatory Causal Sequentiality on the Lalonde–Dever Model",
        "takeaway": "The reconstruction protocol must be executed strictly sequentially: Phase I of acute cognitive and financial triage (0–72h) and structural allostatic decompression (0–12 months), Phase II of community validation, actively open-minded thinking and preventive preparation (1–3 years) and Phase III of operational closure, fiscal isonomy and polycentricity in the “narrow corridor” (3–10 years).",
        "implication": "Phase reversal—launching media education campaigns over a population in allostatic load and algorithmic capture—triggers three experimentally documented perverse effects (Nyhan & Reifler, 2010; Kahan, 2017; Roozenbeek et al., 2022): the worldview backfire, the familiarity backfire, and epistemic cynicism towards official discourse."
      },
      {
        "id": "exec-6-2",
        "title": "Systemic Vulnerability: Eroding Resilience on the Forgetting Curve and Hypercentralism",
        "takeaway": "Cognitive resilience acquired through a single session of preemptive training erodes on Ebbinghaus's forgetting curve, and bureaucratic hypercentralism or clientelistic fiefdoms perpetuate learned helplessness.",
        "implication": "Without periodic mnestic consolidation and without polycentric decentralization designed to restore the capacity for autonomous political action and perceived self-efficacy, society remains vulnerable to authoritarian relapses."
      },
      {
        "id": "exec-6-3",
        "title": "Strategic decision: Institutional operationalization and the synthesis of organic modernity",
        "takeaway": "The articulation of responsibilities between DNSC, ANCOM, CSAT, CNA, the Ministry of Education, the Romanian Orthodox Church, universities and the local administration unites the just impersonal law with the ethics of the dignity of the person.",
        "implication": "The synthesis of organic modernity definitively resolves the historical anomaly of \"forms without substance\", transforming Romania into a pillar of democratic sovereignty in NATO and the European Union."
      }
    ]
  }
];

export const OPERATIONAL_PROTOCOL_TABLE: InstitutionalProtocolRow[] = [
  {
    "id": "op-faza-1",
    "phaseCode": "Phase I",
    "phaseTitle": "Allostatic decompression, neutralization of financing circuits (Follow the Money) and technical slowing of virality",
    "horizon": "Dual horizon: 0–72 hours (acute tactical triage) · 0–12 months (structural decompression)",
    "targetObjective": "Stopping the maladaptive reactive loop of Track A, decreasing basal hypercortisolemia on the HPA axis, interrupting dopaminergic capture in the nucleus accumbens, and blocking the financial and cryptographic flows of informational operations.",
    "concreteIntervention": "Sequential execution on three steps of tracking and financial and technical blocking, under the constitutional proportionality guarantees of art. 30 and art. 53 of the Romanian Constitution and art. 14, 17 and 20 of the DSA Regulation (transparent technical reasoning, effective appeal in litigation and the intangibility of legitimate political opinions). In the first step, STIX/DISARM evidentiary standardization through DNSC and the EDMO/BROD regional hub is doubled by CDC CERC strategic communication (Reynolds & Seeger, 2005) and the systematic association of Orders to act against illegal content (art. 7–8 of Law no. 50/2024 / art. 9 of DSA) issued by the relevant sector authorities (including CNA for online audiovisual content, AEP/BEC, DNSC or prosecutors' offices) and procedurally transmitted through the ANCOM single point of contact (without substantive decisions on the content) with the mandatory Orders for the provision of financial information and the identity of the payers (art. 9 of Law no. 50/2024 / art. 10 of the DSA) to VLOPs. In the second step, AEP and BEC carry out the real-time verification of the financial trustee code (CMF) and the blocking of unmarked or funded political advertising from third countries (Law no. 334/2006, O.U.G. no. 1/2025 — art. 16–17 adopted specifically for the presidential elections of May 2025 and Regulation (EU) 2024/900 TTPA applicable of October 10, 2025 — art. 11–16, distinct from art. 15 and 17. In the third step, ONPCSB orders, under exclusive jurisdiction, the operational suspension in real time for 24-72 hours of suspicious transactions and the blocking of conversions from crypto-assets to fiduciary currency (off-ramp) (art. 33-34 of Law no. 129/2019), followed by notification to the PICCJ for insurance seizure, under the sectoral and prudential supervision of the BNR and ASF by querying the electronic central register for payment accounts and bank accounts (art. 61¹ of Law no. 207/2015 – CPF in conjunction with art. 33 par. 4–5 of Law no. 129/2019 and Law no. 86/2025), the application of O.U.G. no. 10/2025 (the national mechanism for the TFR Regulation (EU) 2023/1113 – Travel Rule and the supervision of crypto-asset service providers (CASP) regarding the fight against money laundering and terrorist financing according to art. 32¹ of Law no. 129/2019) and MiCA Regulation (EU) 2023/1114, completed over the 0-12 month horizon of digital debureaucratization according to the e-Estonia model.",
    "responsibleActors": "ANCOM as Coordinator of Digital Services (DSC, Law no. 50/2024), the National Broadcasting Council (CNA), DNSC, AEP and BEC, ONPCSB, BNR, ASF and PICCJ, the crisis cells of CSAT, MAI and MApN, in direct coordination with the European Commission and the European Digital Media Observatory (EDMO / BROD regional hub)."
  },
  {
    "id": "op-faza-2",
    "phaseCode": "Phase II",
    "phaseTitle": "Preventive psychocognitive training, community validation, and moral reconciliation",
    "horizon": "Average operational horizon: 1–3 years",
    "targetObjective": "The reconstruction of the Orientation phase from the OODA loop, the stable switch to the adaptive deliberative Track B and the neutralization of the double axiological falsification of the Russkii Mir doctrine.",
    "concreteIntervention": "Independent auditing of recommendation algorithms by vetted researchers (art. 40 of the DSA) and early notification of manipulation by certified trusted notifiers, direct application of Regulation (EU) 2024/1083 on media freedom (European Media Freedom Act – EMFA: transparency of the real beneficiaries of the media in art. 6, editorial independence in art. 4–5, structured dialogue with VLOPs in art. 18 and the objective and transparent allocation of state advertising to art. 25), along with national preventive psychocognitive training campaigns with periodic memory consolidation sessions calibrated on Ebbinghaus's forgetting curve. In parallel, the associative proximity infrastructure for positive complex contagion is restored and the civic-theological partnership based on the Imago Dei principle and moral discernment is strengthened.",
    "responsibleActors": "ANCOM (DSC), the National Broadcasting Council (CNA), DNSC, the European Commission, the EDMO/BROD regional hub, vetted researchers and certified reliable notifiers, public interest media, the Romanian Orthodox Church and the other recognized cults, along with the theological faculties."
  },
  {
    "id": "op-faza-3",
    "phaseCode": "Phase III",
    "phaseTitle": "Operational closure of the rule of law, fiscal isonomy, polycentric governance and double auditing",
    "horizon": "Strategic horizon: 3–10 years",
    "targetObjective": "Eliminating the historical root of \"forms without substance\", strengthening the institutional barrier in Cipolla's matrix through the architecture of choice (Thaler & Sunstein) for drawing into Quadrant I of intelligent cooperation and institutional support of mature constitutional patriotism.",
    "concreteIntervention": "The protocol is structured on four macrostructural pillars: the closure of justice, administrative meritocracy (by eliminating temporary discretionary appointments from art. 509–510 of O.U.G. no. 57/2019 and the termination of the chain provisional mandates of administrators and directors in state companies provided for in art. 29¹ and art. 64¹ of O.U.G. no. 109/2011, amended by Law no. 187/2023, under the supervision of AMEPIP), fiscal isonomy and polycentric governance (through objective formulas for balancing local budgets in art. 32–33 of Law no. 273/2006, the limitation of the Reserve Fund from art. 30 of Law no. 500/2002 exclusively to unpredictable emergencies and capitalizing on the social and institutional remittances of the diaspora, Sandu, 2010). Within these pillars, the protocol establishes two paradigmatic case studies of the architecture of institutional choice (institutional choice architecture, Thaler & Sunstein, 2008): the de lege ferenda reform of art. 167 and art. 182 of Law no. 207/2015 regarding the Fiscal Procedure Code (mirror penalization of the state, automatic ex officio compensation of mutual tax claims according to art. 167 CPF and ex officio transfer of interest and penalties to the same IBAN account according to art. 182 CPF, in full agreement with the principle of fiscal symmetry enshrined in CCR Decision no. 694/2015) and the proposal to supplement art. 281 CPF regarding the joint patrimonial liability and effective recourse when the court definitively finds that the annulled tax act was issued in bad faith or with gross negligence, distinct from the internal patrimonial liability of the officials towards the institution regulated by art. 499–500 of the Administrative Code; respectively the de lege ferenda reform of the governance of agricultural cooperatives from Law no. 566/2004 (amending art. 31 and art. 33–35 in conjunction with art. 16 para. 4 and art. 29 and the facilities in art. 76–76¹: competitively recruited independent executive director, prohibition of relatives by blood or marriage (in-laws) up to the third degree and protection of VAT refunds), which rebuilds the bridging social capital (Putnam, 2000). The entire protocol is subject to a dual independent periodic audit mechanism: the external public audit of the performance carried out biennially by the Court of Accounts (art. 2 letters b and d and art. 28 para. 2 of Law no. 94/1992; Law no. 500/2002) and the scientific and civic audit carried out by university consortia accredited as \"vetted researchers\" (art. 40 of DSA / EDMO) on The European framework of digital skills (DigComp), on the methodologies of the National Institute for Audiovisual Education KAVI and through participatory decision-making simulations.",
    "responsibleActors": "The Parliament of Romania, the Ministry of Finance and the State Treasury, the Court of Accounts of Romania, the judicial and administrative system, the Ministry of Education, accredited university consortia (researchers approved according to art. 40 DSA / EDMO), agricultural cooperatives and local public administration."
  }
];

/*
 * Medical Physiology
 * Built from the lecture slide digests in materials/.
 */
PA.addSections('physiology', [
  // ─────────────────────── Lectures 1–5 ───────────────────────
  {
    title: 'Homeostasis & Fluid Compartments',
    source: 'Lectures 1–5 · Fundamental Physiological Principles',
    cards: [
      {
        front: 'Define **exocrine** vs **endocrine** secretion.',
        back: '- **Exocrine** — secretions travel through **ducts** to an epithelial surface\n- **Endocrine** — **ductless**; released into the extracellular space to move through interstitial fluid and the bloodstream',
      },
      {
        front: 'Define **autocrine**, **paracrine**, and **telocrine** communication.',
        back: '- **Autocrine** — substance acts on the **same cell** that released it\n- **Paracrine** — acts on a **nearby** cell\n- **Telocrine** — travels in the **bloodstream** to a **distant** cell',
      },
      {
        front: 'What is **juxtacrine** communication?',
        back: 'Cell-to-cell communication through direct interaction of **surface molecules** on adjacent cells. (Gap junctions are another form of direct cell-to-cell communication.)',
      },
      {
        front: 'What percentage of body weight is **total body water**, and how is it divided?',
        back: 'TBW ≈ **60%** of body weight\n- **ICF** = **2/3** of TBW\n- **ECF** = **1/3** of TBW → interstitial fluid + plasma',
      },
      {
        front: 'For a **70 kg** person, what are the approximate volumes of TBW, ICF, ECF, plasma, and interstitial fluid?',
        back: '- TBW ≈ **42 L**\n- ICF ≈ **28 L**\n- ECF ≈ **14 L**\n  - Plasma ≈ **3 L**\n  - Interstitial ≈ **11 L**',
      },
      {
        front: 'What is the **60:40:20 rule**?',
        back: '- **60%** of body weight = total body water\n- **40%** = intracellular fluid\n- **20%** = extracellular fluid\n\n(Altered by **obesity** and **aging**, which lower the water fraction.)',
      },
      {
        front: 'A **100 kg** man gets a drug that distributes in the **ECF**. Dose is 1 mg per 100 mL ECF. Total dose?',
        back: 'TBW = 0.6 × 100 = **60 L**\nECF = 60 × 1/3 = **20 L** (20,000 mL)\nDose = 1 mg/100 mL × 20,000 mL = **200 mg**',
      },
      {
        front: 'Why must ECF factors (pH, temperature, ions) be **tightly regulated**?',
        back: '**Proteins** (enzymes, receptors, channels, antibodies) work by **binding** things and only function optimally within narrow ranges. Anything that alters binding alters function.',
      },
      {
        front: 'Walk through the **negative feedback** loop when blood glucose rises after a meal.',
        back: '↑ ECF glucose → **sensor**: pancreatic **β-cells** → release **insulin** → **effectors**: insulin-sensitive cells take up glucose → glucose normalizes → insulin release stops (negative feedback).',
      },
      {
        front: 'What is **bidirectional control**? Use glucose as the example.',
        back: 'Two opposing reflex arcs control one variable:\n- ↑ glucose → **insulin** (β-cells) → uptake into cells\n- ↓ glucose → **glucagon** (α-cells) → liver **glycogenolysis and gluconeogenesis** → glucose released',
      },
      {
        front: 'Define **positive feedback** and **feedforward** regulation.',
        back: '- **Positive feedback** — an initial disturbance triggers events that **amplify** it further\n- **Feedforward** — the system **anticipates** a disturbance and prepares **before** it occurs',
      },
      {
        front: 'What are the "**homeostatic hmmms**" (caveats)?',
        back: '1. Some set-points are **dynamic**, not static\n2. Many diseases, signs, and symptoms are due to **homeostatic dysregulation**\n3. Systems can be **maxed out** — loss of physiological reserve',
      },
      {
        front: 'Contrast the time course of **hyperglycemia** vs **hypoglycemia** damage.',
        back: '- **Hyperglycemia** — **slow** (years); progressive vessel and tissue damage\n- **Hypoglycemia** — **rapid** (minutes); shakiness, sweating, confusion → seizure, coma, death',
      },
      {
        front: 'Diabetes drug classes: how do **sulfonylureas/meglitinides**, **GLP-1 mimetics**, and **DPP-4 inhibitors** work?',
        back: '- **Secretagogues** (sulfonylureas, meglitinides) — stimulate β-cell **insulin release**\n- **Incretin (GLP-1) mimetics** (Byetta, Victoza) — mimic GLP-1\n- **DPP-4 inhibitors** (-gliptins) — block breakdown of endogenous GLP-1',
      },
      {
        front: 'Diabetes drug classes: **metformin/glitazones**, **α-glucosidase inhibitors**, **SGLT2 inhibitors**?',
        back: '- **Insulin sensitizers** (metformin, glitazones) — improve tissue response to insulin\n- **α-glucosidase inhibitors** (Precose) — slow intestinal carbohydrate absorption\n- **SGLT2 inhibitors** — block renal glucose reabsorption → glucose lost in urine',
      },
      {
        front: 'Type I vs type II diabetes: which part of the glucose feedback loop fails?',
        back: '- **Type I** — the **sensor/secretor** fails: insulin-producing **β-cells are lost** → lack of insulin\n- **Type II** — the **effector** fails: target cells are **insensitive/resistant** to insulin',
      },
      {
        front: 'Blood glucose thresholds: what happens below **~70** and below **~50 mg/dL**?',
        back: '- **~70 → 50:** shakiness, dizziness, nausea, sweating, irritability, weakness, headache\n- **< 50:** neural dysfunction → loss of consciousness, **seizure, coma, death**\n\n(Normal ≈ 100 mg/dL; hyperglycemia damage builds slowly over years.)',
      },
      {
        front: 'What is **physiological reserve**? Use cardiac output as the example.',
        back: 'The capacity to increase function above resting levels.\n- **Rest:** 70 bpm × 70 mL = **~4.9 L/min**\n- **Max exercise:** 200 bpm × 140 mL = **~28 L/min**\n\nDisease that "maxes out" reserve leaves no room to compensate.',
      },
    ],
  },
  {
    title: 'Membrane Structure & Transport',
    source: 'Lectures 1–5 · Fundamental Physiological Principles',
    cards: [
      {
        front: 'What is a **gradient**, and what are the three types?',
        back: 'A difference between two compartments in a given variable. Gradients **drive physiological processes**.\n- **Pressure**\n- **Concentration**\n- **Electrical**',
      },
      {
        front: 'Typical ECF vs ICF concentrations of **Na⁺** and **K⁺**?',
        back: '- **Na⁺**: ECF **150** mM, ICF **15** mM\n- **K⁺**: ECF **4** mM, ICF **140** mM\n\n(Think: the "ocean" outside, the "banana" inside.)',
      },
      {
        front: 'Why is the phospholipid bilayer called **amphipathic**?',
        back: 'Each phospholipid has a **polar, hydrophilic head** and **nonpolar, hydrophobic fatty acid tails**. The tails form a barrier against charged/polar molecules.',
      },
      {
        front: 'Which molecules **can cross** the lipid bilayer freely?',
        back: '**Nonpolar, lipophilic, uncharged** (and small) molecules: **O₂, CO₂, fatty acids, cholesterol, steroid hormones**.',
      },
      {
        front: 'Which molecules **cannot** cross the bilayer freely?',
        back: '**Charged, polar, hydrophilic** molecules: **ions, glucose, amino acids, neurotransmitters**.',
      },
      {
        front: 'What three properties determine whether a molecule crosses the membrane? How does **water** cross?',
        back: '**Polarity, lipid solubility, size.**\n\nWater crosses mainly via **aquaporins**.',
      },
      {
        front: 'Match the terms: charged / neutral, polar / nonpolar, hydrophilic / hydrophobic, lipophobic / lipophilic.',
        back: '- **Charged = polar = hydrophilic = lipophobic** → cannot cross freely\n- **Neutral = nonpolar = hydrophobic = lipophilic** → can cross freely',
      },
      {
        front: 'Outline the categories of **movement across the membrane**.',
        back: '**Transport (molecules):**\n- Passive — simple diffusion, facilitated diffusion\n- Active — primary and secondary active transport\n\n**Translocation:** ligand-gated, voltage-gated, and other channels\n\n**Information:** signal transduction',
      },
      {
        front: 'What is the driving force for **simple diffusion**, and what is **net flux**?',
        back: 'The **chemical concentration gradient** — molecules move from high to low until evenly distributed.\n\n**Net flux** = the difference between the two opposing movements.',
      },
      {
        front: 'State **Fick\'s Law of Diffusion**.',
        back: '**Rate = (SA × D × ΔC) / T**\n- SA = surface area\n- D = diffusivity = lipid solubility / √MW\n- ΔC = concentration (or partial pressure) gradient\n- T = thickness of the barrier',
      },
      {
        front: 'In Fick\'s law, which factors are **directly** vs **inversely** related to diffusion rate?',
        back: '- **Directly:** surface area, diffusivity (lipid solubility), concentration gradient\n- **Inversely:** barrier **thickness** and √**molecular weight**',
      },
      {
        front: 'What happens to O₂ diffusion into a cell when it becomes **metabolically active**?',
        back: 'The cell uses more O₂ → intracellular O₂ **drops** → gradient **increases** → diffusion rate **increases**.',
      },
      {
        front: 'Lung diffusion: how do **exercise** and **emphysema** affect gas exchange?',
        back: '- **Exercise** → ↑ **surface area** (more capillaries recruited) → ↑ diffusion\n- **Emphysema** → septal wall breakdown → ↓ **surface area** → impaired diffusion (notably CO₂)',
      },
      {
        front: 'Lung diffusion: how do **pulmonary edema**, **fibrosis**, and **supplemental O₂** affect it?',
        back: '- **Pulmonary edema** → ↑ **thickness** → impaired\n- **Alveolar/interstitial fibrosis** → scar tissue ↑ **thickness** → impaired (notably O₂)\n- **Supplemental O₂** → ↑ **partial pressure gradient** (P₁ − P₂) → improved',
      },
      {
        front: 'How do the transport **kinetics** of simple diffusion differ from mediated transport?',
        back: '- **Simple diffusion** — flux rises **linearly** with the gradient; no maximum\n- **Mediated transport** — flux **saturates** at **Tmax**, limited by the number of carriers',
      },
      {
        front: 'What are the three hallmark features of **carrier-mediated (facilitated) transport**?',
        back: '1. **Selectivity** (specificity)\n2. **Saturation** (Tmax)\n3. **Competition** — similar compounds compete for the carrier, lowering each one\'s Tmax',
      },
      {
        front: 'Define **osmosis**.',
        back: 'Diffusion of **water** down its own concentration gradient — from **high water / low solute** to **low water / high solute**.',
      },
      {
        front: 'What is **primary active transport**? Give examples.',
        back: 'Carrier moves solute **against** its gradient using **ATP directly**.\n- **Na⁺/K⁺-ATPase** (3 Na⁺ out, 2 K⁺ in)\n- **Ca²⁺-ATPase**\n- **H⁺-ATPase**',
      },
      {
        front: 'What is **secondary active transport**?',
        back: 'Uses the **Na⁺ gradient** (created by the Na⁺/K⁺ pump using ATP) to move another solute against its gradient.\n- **Co-transport (symport)** — same direction (e.g., Na⁺–glucose)\n- **Counter-transport (antiport/exchanger)** — opposite directions',
      },
      {
        front: 'Where are **SGLT1** and **SGLT2** found, and what are SGLT2 inhibitors used for?',
        back: '- **SGLT1** — small intestine enterocytes; renal proximal tubule\n- **SGLT2** — renal **proximal tubule**\n\n**SGLT2 inhibitors** (Invokana®, Jardiance®) treat **type II diabetes** by sending glucose to the urine.',
      },
      {
        front: 'Explain how **digoxin** increases myocardial contractility.',
        back: 'Inhibits **Na⁺/K⁺-ATPase** → ↑ intracellular Na⁺ → ↓ **Na⁺/Ca²⁺ exchanger** activity → ↑ intracellular **Ca²⁺** → ↑ **inotropy** → stronger contraction, ↑ stroke volume.\n\nUsed in certain heart failures (and atrial fibrillation).',
      },
      {
        front: 'Which transport mechanisms **use ATP**, and which can be **saturated**?',
        back: '- **ATP:** primary active (directly), secondary active (indirectly). Not diffusion, channels, or facilitated diffusion.\n- **Saturable (Tmax):** facilitated diffusion, primary and secondary active transport. Not simple diffusion or channels.',
      },
      {
        front: 'Which solutes move through **channels** vs **facilitated diffusion** carriers?',
        back: '- **Channels:** ions — Na⁺, K⁺, Cl⁻, Ca²⁺\n- **Facilitated diffusion:** polar molecules — glucose, amino acids',
      },
    ],
  },
  {
    title: 'Signal Transduction & Receptor Pharmacology',
    source: 'Lectures 1–5 · Fundamental Physiological Principles',
    cards: [
      {
        front: 'What are the two broad classes of **signal transduction pathways**?',
        back: '1. **Lipid-soluble messengers** — cross the membrane (steroid & thyroid hormones, vitamin D)\n2. **Water-soluble messengers** — cannot cross; act on **surface receptors** (peptide hormones, cytokines, neurotransmitters, growth factors)',
      },
      {
        front: 'How do **steroid and thyroid hormones** act on cells?',
        back: 'Cross the membrane and bind **cytosolic and/or nuclear receptors** → modulate **gene transcription** (synthesis of new proteins).',
      },
      {
        front: 'What is a **ligand**, and what is the **first messenger**?',
        back: 'A **ligand** is any receptor-binding molecule (neurotransmitter, hormone, cytokine, growth factor). In membrane signal transduction, the ligand **is the first messenger**.',
      },
      {
        front: 'Define **agonist** and **antagonist**.',
        back: '- **Agonist** — binds a receptor and produces the **same action** as the native ligand (degree depends on affinity)\n- **Antagonist (blocker)** — binds the receptor **without activating it**, preventing agonists from binding → **no action**',
      },
      {
        front: 'What are the core properties of **ligand–receptor** interactions?',
        back: '**Affinity**, **reversibility** (usually reversible), **specificity** (with important cross-reactivities), agonism/antagonism, and **tissue specificity**.',
      },
      {
        front: 'Why does **Cushing\'s** (excess cortisol) or high-dose **prednisone** cause hypertension?',
        back: '**Receptor cross-reactivity**: cortisol/prednisone binds the **glucocorticoid** receptor (anti-inflammatory) **and** the **mineralocorticoid** receptor → Na⁺ and H₂O retention → ↑ BP.',
      },
      {
        front: 'What are the four kinds of **surface membrane receptors**?',
        back: 'Receptors that:\n1. **Have enzymatic activity** (often tyrosine kinase)\n2. Are **linked to enzymes** (e.g., JAK/STAT)\n3. Are **linked to G proteins**\n4. Are **ligand-gated ion channels**',
      },
      {
        front: 'Which ligands use **receptor tyrosine kinases**?',
        back: '**Insulin**, epidermal growth factor (EGF), fibroblast growth factor (FGF), etc.',
      },
      {
        front: 'Describe the **JAK–STAT** pathway.',
        back: 'Ligand binds → activates **JAK** (Janus kinase) → phosphorylates receptor → phosphates transferred to **STATs** → STATs **dimerize, enter the nucleus**, regulate gene expression.\n\nUsed in immunity, cell division, apoptosis, tumorigenesis.',
      },
      {
        front: 'Describe the **Gs → cAMP** pathway.',
        back: 'Ligand → 7-transmembrane receptor → **Gs** → **adenylyl cyclase** → ATP → **cAMP** (second messenger) → activates **protein kinase A** → cellular response.',
      },
      {
        front: 'Name ligands that signal through the **cAMP** pathway.',
        back: 'NE/Epi (via **β receptors**), **ACTH, LH, FSH, TSH, glucagon, gastrin, PTH** — more than 200 ligands.',
      },
      {
        front: 'What is **signal amplification**?',
        back: 'Each step of a cascade activates many molecules — e.g., one first messenger can generate ~**one million** product molecules via cAMP.',
      },
      {
        front: 'What terminates the cAMP signal, and what do **methylxanthines** do?',
        back: '**Phosphodiesterase (PDE)** converts cAMP → AMP.\n\n**Methylxanthines** (caffeine, theophylline, theobromine) **inhibit PDE** → cAMP persists → prolonged/enhanced signaling.',
      },
      {
        front: 'What does **Gi** do?',
        back: '**Inhibits adenylyl cyclase** → ↓ cAMP.',
      },
      {
        front: 'Describe the **Gq → IP3** pathway.',
        back: 'Ligand → **Gq** → **phospholipase C** → cleaves **PIP2** into:\n- **IP3** → releases **Ca²⁺ from the ER** (often acting via calmodulin)\n- **DAG** → activates **protein kinase C**',
      },
      {
        front: 'Name ligands that use the **IP3** pathway.',
        back: 'NE/Epi (via **α1 receptors**), **TRH, GnRH, angiotensin II, CCK** — more than 100 ligands.',
      },
      {
        front: 'How does vagal stimulation **slow the heart** at the receptor level?',
        back: 'ACh → **muscarinic** receptor (G protein-coupled) → G protein opens **K⁺ channels** → K⁺ efflux → slower pacemaker depolarization → ↓ HR.',
      },
      {
        front: 'Compare **peptide** vs **steroid** hormones: chemistry, blood transport, receptor location.',
        back: '- **Peptide:** charged, hydrophilic; travel **free** in blood; **surface** receptors\n- **Steroid/thyroid:** uncharged, lipophilic; **bound to plasma proteins**; **cytosolic/nuclear** receptors',
      },
      {
        front: 'Compare **peptide** vs **steroid** hormones: mechanism, onset, duration.',
        back: '- **Peptide:** second messengers; **turn on/off existing machinery**; **rapid**, shorter-acting\n- **Steroid:** gene transcription; **synthesize new machinery**; **delayed**, longer-acting',
      },
      {
        front: 'What are the **precursors** of peptide hormones, steroid hormones, and thyroid hormone?',
        back: '- Peptide hormones — **peptide synthesis**\n- Steroid hormones — **cholesterol**\n- Thyroid hormone — **tyrosine**',
      },
    ],
  },
  {
    title: 'Membrane Potentials',
    source: 'Lectures 1–5 · Fundamental Physiological Principles',
    cards: [
      {
        front: 'List the types of **membrane potentials**.',
        back: 'Resting, equilibrium, graded, action, **EPSPs**, **IPSPs** (and receptor potentials). Think of them as **electrical gradients**.',
      },
      {
        front: 'Typical **resting membrane potentials** by cell type?',
        back: '- Large motor nerves, skeletal & cardiac muscle: **−90 mV**\n- Small/CNS nerves, smooth muscle: **−40 to −60 mV**\n- Red blood cells: **−10 to −20 mV**',
      },
      {
        front: 'What three factors determine the **resting membrane potential**?',
        back: '1. **Na⁺/K⁺-ATPase** (contributes only ~**−4 mV**)\n2. **"Trapped" intracellular anions** (proteins, phosphates)\n3. **Ion concentration gradients + selective permeability** (the main factor)',
      },
      {
        front: 'If a neutral cell became permeable **only to K⁺**, what would happen?',
        back: 'K⁺ **effluxes** down its gradient → interior becomes negative → negativity eventually **holds K⁺ in** → electrochemical equilibrium at **−94 mV** (K⁺ equilibrium potential).',
      },
      {
        front: 'If a neutral cell became permeable **only to Na⁺**, what would happen?',
        back: 'Na⁺ **influxes** → interior becomes positive → positivity **repels** further Na⁺ → equilibrium at **+61 mV** (Na⁺ equilibrium potential).',
      },
      {
        front: 'What is an **equilibrium (Nernst) potential**?',
        back: 'The membrane voltage at which the **electrical force exactly balances the chemical gradient** for an ion — no net movement.\n\nWhen permeability to an ion is maximal, the membrane potential moves **toward** that ion\'s equilibrium potential.',
      },
      {
        front: 'Write the **Nernst equation**.',
        back: '**E = (±61 / z) × log([X]outside / [X]inside)**\n- +61 for cations, −61 for anions\n- z = valence (1 for Na⁺/K⁺/Cl⁻, 2 for Ca²⁺)',
      },
      {
        front: 'Nernst potentials: **Na⁺, K⁺, Cl⁻, Ca²⁺**?',
        back: '- **Na⁺** ≈ **+61 mV** (150/15)\n- **K⁺** ≈ **−94 mV** (4/140)\n- **Cl⁻** ≈ **−90 mV** (120/4) [or −63 with 110/10]\n- **Ca²⁺** ≈ **+131 mV**',
      },
      {
        front: 'Why is the RMP much closer to E(K⁺) than E(Na⁺)?',
        back: 'At rest the membrane is **50–100× more permeable to K⁺ than Na⁺**.',
      },
      {
        front: 'Define **depolarization**, **repolarization**, **hyperpolarization**, and **overshoot**.',
        back: '- **Depolarization** — potential becomes less negative\n- **Repolarization** — return toward RMP\n- **Hyperpolarization** — more negative than RMP\n- **Overshoot** — the part of the AP above 0 mV',
      },
      {
        front: 'Where on a neuron are **ligand-gated**, **voltage-gated Na⁺/K⁺**, and **voltage-gated Ca²⁺** channels found?',
        back: '- **Dendrites & cell body** — ligand-gated → **graded** potentials (EPSPs/IPSPs)\n- **Axon hillock & axon** — voltage-gated Na⁺/K⁺ → **action** potentials\n- **Axon terminals** — voltage-gated **Ca²⁺** → NT release',
      },
      {
        front: 'Key properties of **graded potentials**?',
        back: '- Amplitude **varies with stimulus strength**\n- Can be **depolarizing or hyperpolarizing**\n- **No threshold**, not all-or-none, **no refractory period**\n- **Can summate** (temporal & spatial)\n- **Decay with distance** (charge leaks across the membrane)',
      },
      {
        front: 'Key properties of **action potentials**?',
        back: '- Require **voltage-gated** channels (excitable membranes)\n- Have a **threshold**; **all-or-none**\n- Rapid, complete depolarization with overshoot\n- **Refractory periods** → **cannot summate**\n- Propagate **without decrement**\n- **Blocked by local anesthetics**',
      },
      {
        front: 'What would happen if a ligand opened a **ligand-gated K⁺ channel** on a neuron?',
        back: 'K⁺ efflux → **hyperpolarization** (an IPSP) → neuron moves **away from threshold**.',
      },
      {
        front: 'Typical **action potential durations** in a neuron, skeletal muscle, and cardiac ventricular muscle?',
        back: '- Neuron: **1–2 ms**\n- Skeletal muscle: **5–10 ms**\n- Cardiac ventricle: **~200 ms**',
      },
      {
        front: 'Walk through the phases of a **neuronal action potential**.',
        back: '1. Rest (−70 mV); voltage-gated Na⁺ & K⁺ channels closed\n2. Stimulus → **threshold**\n3. **Fast Na⁺ channels open** → Na⁺ influx → depolarization (positive feedback)\n4. Na⁺ channels close after **overshoot**; **K⁺ channels open**\n5. K⁺ efflux → **repolarization**\n6. Transient **hyperpolarization**\n7. Na⁺/K⁺-ATPase helps restore RMP',
      },
      {
        front: 'Depolarization is due to ___ and repolarization is due to ___.',
        back: '**Depolarization → Na⁺ influx**\n**Repolarization → K⁺ efflux**',
      },
      {
        front: 'Describe **voltage-gated Na⁺ channel** gating (m and h gates).',
        back: '- **Rest:** m (activation) gate **closed**, h (inactivation) gate **open**\n- **Threshold:** m gate opens → Na⁺ influx (ARP begins)\n- **Near peak:** h gate **closes** → influx stops\n- **Repolarization:** m closes, then h reopens (ARP ends, RRP begins)',
      },
      {
        front: 'Describe **voltage-gated K⁺ channel** gating.',
        back: 'The **n gate** is closed at rest, **opens** as the membrane depolarizes toward overshoot (K⁺ efflux → repolarization), then closes after RMP is restored.',
      },
      {
        front: '**Absolute** vs **relative refractory period**?',
        back: '- **ARP** — no stimulus can trigger another AP (Na⁺ channels open or inactivated); begins when m gates open\n- **RRP** — a **stronger-than-normal** stimulus can trigger an AP; begins when **h gates reopen**\n\nThreshold varies across the refractory period.',
      },
      {
        front: 'Clinical case: 82-year-old with renal impairment, plasma **Na⁺ 115 mM**, progressive confusion → unconscious. What happened?',
        back: '**Hyponatremia** (from impaired renal Na⁺ reabsorption) → disrupted Na⁺ gradient → **neural dysfunction** and **brain edema** (water moves into brain cells).',
      },
    ],
  },
  {
    title: 'Nerve Impulses, Synapses & Neural Modulation',
    source: 'Lectures 1–5 · Fundamental Physiological Principles',
    cards: [
      {
        front: 'Where are **action potentials initiated** in a neuron, and how?',
        back: 'At the **axon hillock**. Graded potentials from dendrites/cell body spread there; if they depolarize it to **threshold**, voltage-gated Na⁺/K⁺ channels fire an AP.',
      },
      {
        front: 'How does the **degree of hillock depolarization** affect output?',
        back: 'Greater and longer depolarization → **higher AP frequency** down the axon (max frequency limited by the refractory period).',
      },
      {
        front: 'How does an AP **propagate** along an unmyelinated axon?',
        back: 'The AP spreads **depolarizing current** to the adjacent membrane, opening local voltage-gated channels and generating a new AP — a **wave of depolarization** moving down the axon.',
      },
      {
        front: 'Which cells form **myelin** in the PNS vs CNS?',
        back: '- **PNS:** Schwann cells\n- **CNS:** oligodendrocytes (oligodendroglia)',
      },
      {
        front: 'What are the effects of **myelination**?',
        back: '- Decreases current leakage ~**5000-fold**\n- APs occur only at **nodes of Ranvier** (**saltatory conduction**)\n- ↑ conduction velocity **5–50×**\n- ↓ energy required\n- Aids nerve regeneration',
      },
      {
        front: 'What is **multiple sclerosis**?',
        back: 'A **demyelinating** disease — **autoimmune attack on the myelin sheath** with scar-like tissue formation → slowed or blocked conduction.',
      },
      {
        front: 'What does **lidocaine** do to action potentials and propagation?',
        back: 'Blocks **voltage-gated Na⁺ channels** → **no Na⁺ influx** → no AP generation or propagation (graded potentials are not blocked).',
      },
      {
        front: 'List the steps of **neurotransmitter release**.',
        back: '1. Terminal depolarizes\n2. **Ca²⁺ influx** through voltage-gated channels\n3. Ca²⁺ activates **calmodulin**\n4. Calmodulin activates **protein kinase**\n5. Protein kinase activates **synapsin**\n6. **Exocytosis** of synaptic vesicles\n7. NT released',
      },
      {
        front: 'Name the **rapid-acting small-molecule** neurotransmitters.',
        back: 'ACh, NE, epinephrine, **dopamine, serotonin, histamine, GABA, glycine, glutamate, aspartate, nitric oxide**.',
      },
      {
        front: 'Name **slow-acting neuropeptide** neurotransmitters.',
        back: 'Hypothalamic releasing hormones, pituitary peptides, **enkephalin, substance P**, bradykinin, GI hormones.',
      },
      {
        front: 'How many NTs can one synaptic terminal release, and how potent are neuropeptides?',
        back: 'A terminal releases **only one** small-molecule fast NT, but may co-release **one or more neuropeptides**.\n\nNeuropeptides are ~**1000× more potent** with long-lasting effects (hours to years).',
      },
      {
        front: 'What three things can a neurotransmitter receptor do?',
        back: '- **Open/close membrane channels**\n- **Activate/inactivate G-protein** signaling\n- **Activate/inactivate receptor enzymatic activity**',
      },
      {
        front: 'How many inputs does a typical neuron receive, and where are they integrated?',
        back: '**100 to 200,000** inputs (EPSPs and IPSPs) on the dendrites and cell body, **integrated at the axon hillock**.',
      },
      {
        front: 'Define **EPSP** and **IPSP**.',
        back: '- **EPSP** — graded **depolarization** toward threshold → neuron **more** excitable\n- **IPSP** — graded **hyperpolarization** away from threshold → neuron **less** excitable',
      },
      {
        front: 'What ion movements produce **EPSPs** vs **IPSPs**?',
        back: '- **EPSP:** Na⁺ influx (e.g., ACh-gated channels), or **closing** K⁺/Cl⁻ channels\n- **IPSP:** **K⁺ efflux** or **Cl⁻ influx**',
      },
      {
        front: '**Temporal** vs **spatial** summation?',
        back: '- **Temporal** — repeated inputs from a **single** source over time (a volley)\n- **Spatial** — inputs from **multiple** sources arriving at the **same time**\n\nBoth EPSPs and IPSPs can be summed.',
      },
      {
        front: 'What is **presynaptic inhibition**?',
        back: 'A neuron releases a neuromodulator (usually **GABA**) onto another neuron\'s **presynaptic terminal**, opening **Cl⁻ channels** there → **prevents NT release** from that terminal.\n\n(Inhibiting an excitatory neuron → net inhibition; inhibiting an inhibitory neuron → net excitation.)',
      },
      {
        front: 'What is **neural facilitation**?',
        back: 'Certain **neuropeptides** change long-term ion permeability, **resetting the RMP closer to threshold** → the neuron fires more easily.\n\nExamples: **learning**, **pain** transmission pathways.',
      },
    ],
  },

  // ───────────────────────── Lecture 6 ─────────────────────────
  {
    title: 'Neuro Fundamentals: CNS Organization',
    source: 'Lecture 6 · Neurophysiology Fundamentals',
    cards: [
      {
        front: 'What are the two divisions of the **CNS** and the two divisions of the **PNS**?',
        back: '- CNS: **brain** and **spinal cord**\n- PNS: **afferent (sensory)** division (periphery → CNS) and **efferent (motor)** division (CNS → periphery)',
      },
      {
        front: 'What are the three branches of the **efferent (motor)** division of the PNS?',
        back: '- **Somatic** motor nervous system\n- **Autonomic** nervous system (sympathetic + parasympathetic)\n- **Enteric** nervous system',
      },
      {
        front: 'Which spinal nerve root carries **sensory** information and which carries **motor**?',
        back: '- **Dorsal (posterior)** root → sensory (afferent, ascending)\n- **Ventral (anterior)** root → motor (efferent, descending)\n\nThey join to form a **mixed** spinal nerve.',
      },
      {
        front: 'In physiology, what two things count as **"motor" functions**?',
        back: '**Muscle contractions** and **glandular secretions** (endocrine and exocrine).',
      },
      {
        front: 'How do the **sensory** and **motor** nervous systems work together to maintain homeostasis?',
        back: 'Altered internal environment → **sensory receptors** activated → input to CNS (interpretation/filtering) → CNS motor areas activated → **motor impulses to effector organs** → environment restored (negative feedback).',
      },
      {
        front: 'What functions does the **spinal cord level** of the CNS handle?',
        back: '- Conducts sensory and motor impulses\n- Contains reflex circuits/control centers: **walking, withdrawal, anti-gravity, vascular, and GI reflexes**\n- Higher centers often control the periphery **indirectly** through these spinal centers',
      },
      {
        front: 'Which brain region contains the control centers for **BP, HR, and respiration**?',
        back: 'The **medulla and pons** (lower brain / subcortical level).',
      },
      {
        front: 'Main functions of the **hypothalamus**?',
        back: 'Feeding & satiety, **thermoregulation**, sexual response, reward/punishment, pleasure, anger/aggression, and **stress reactions**.',
      },
      {
        front: 'What is the role of the **thalamus**?',
        back: 'The **integration and relay center for sensory input** on its way to the cortex.',
      },
      {
        front: 'Match the structure to its function: **amygdala**, **hippocampus**, **reticular formation**.',
        back: '- **Amygdala** — stress reactions, fear, trust\n- **Hippocampus** — learning (memory)\n- **Reticular formation** — arousal & wakefulness; CV, respiratory, swallowing, vomiting centers',
      },
      {
        front: 'What are the motor roles of the **basal nuclei** and **cerebellum** (lower brain level)?',
        back: '- **Basal nuclei** — relay and modulation of voluntary movement\n- **Cerebellum** — control of brainstem-tract motor movement (coordination/timing)',
      },
      {
        front: 'Hypothalamus: which nucleus synthesizes **ADH (vasopressin)** and which synthesizes **oxytocin**?',
        back: '- **Supraoptic** nucleus → ADH/vasopressin\n- **Paraventricular** nucleus → oxytocin',
      },
      {
        front: 'Hypothalamus: which nucleus controls **circadian rhythms**?',
        back: 'The **suprachiasmatic** nucleus.',
      },
      {
        front: 'Hypothalamus: where are the **hunger/thirst** centers vs the **satiety** center?',
        back: '- **Lateral** hypothalamus → hunger & thirst (also reward/pleasure)\n- **Ventromedial & dorsomedial** nuclei → satiety',
      },
      {
        front: 'Hypothalamus: what do the **preoptic** and **posterior** nuclei control?',
        back: '- **Preoptic** → controls **parasympathetic** nuclei\n- **Posterior** → response to **cold**, controls the **SNS**',
      },
      {
        front: 'Hypothalamus: what do the **anterior** nuclei and **mammillary** nuclei do?',
        back: '- **Anterior** nuclei → **temperature regulation**\n- **Mammillary** nuclei → **memory** coding',
      },
      {
        front: 'Define **somatotopy**.',
        back: 'The discrete, orderly arrangement of cortical regions that correspond to specific **body areas** and functions (e.g., the homunculus).',
      },
      {
        front: 'List key features of the **cortical (higher brain) level**.',
        back: '- Always works **with** lower levels; adds fine, precise control\n- Conscious thought\n- Discrete areas (motor, sensory, visual, language, auditory…)\n- **Cerebral lateralization**\n- Huge memory storehouse\n- Long-term potentiation & facilitation',
      },
      {
        front: 'What is **cerebral lateralization**?',
        back: 'Each hemisphere controls and interprets the **opposite** side of the body — e.g., right-brain structures control left-side movement and sensation.',
      },
      {
        front: 'What happens during **long-term potentiation/facilitation**?',
        back: 'Improved synaptic circuitry between areas — **growth of dendrites, more synapses**. (Learning tip: stimulate multiple senses/areas.)',
      },
      {
        front: '**Wernicke\'s aphasia**: what is the deficit and how does speech sound?',
        back: 'Damage to the **comprehension** area → cannot understand spoken or written language (vision/hearing OK).\n\nSpeech is **fluent but meaningless — "word salad."**',
      },
      {
        front: '**Broca\'s aphasia**: what is the deficit?',
        back: '**Expressive** aphasia — difficulty with **articulation**. Patients know what they want to say but have great difficulty saying it (non-fluent).',
      },
      {
        front: 'During which sleep phase does **hippocampal reactivation** for memory consolidation mostly occur?',
        back: '**Slow-wave sleep** — especially consolidation of **declarative** memory into the neocortex.',
      },
      {
        front: 'Brodmann areas: **primary motor**, **primary somatosensory**, **premotor**, **frontal eye field**?',
        back: '- **Area 4** — primary motor cortex (precentral gyrus)\n- **Areas 3, 1, 2** — primary somatosensory cortex (postcentral gyrus)\n- **Area 6** — premotor\n- **Area 8** — frontal eye field',
      },
      {
        front: 'Brodmann areas: **Broca**, **Wernicke**, **primary auditory**, **primary visual**?',
        back: '- **44, 45** — Broca\'s area (motor speech, frontal lobe)\n- **22** — Wernicke\'s area (sensory speech, temporal lobe)\n- **41, 42** — primary auditory\n- **17** — primary visual (occipital)',
      },
    ],
  },
  {
    title: 'Neuro Fundamentals: Sensory Receptors & Pathways',
    source: 'Lecture 6 · Neurophysiology Fundamentals',
    cards: [
      {
        front: 'How are the **somatic senses** classified? What are the **special senses**?',
        back: '**Somatic:**\n- Mechanoreceptive — tactile (touch, pressure, vibration, itch, tickle) and position/proprioception (static position, rate of movement)\n- Thermoreceptive\n- Pain\n\n**Special:** vision, smell, hearing, taste, equilibrium',
      },
      {
        front: 'What are the **five basic types** of sensory receptors?',
        back: '1. **Mechanoreceptors**\n2. **Thermoreceptors** (cold, warm)\n3. **Nociceptors** (pain — free nerve endings)\n4. **Photoreceptors** (rods, cones)\n5. **Chemoreceptors**',
      },
      {
        front: 'Give examples of **mechanoreceptors** beyond skin touch receptors.',
        back: '- Muscle spindles & Golgi tendon organs (proprioception)\n- Auditory hair cells\n- Vestibular equilibrium receptors\n- **Baroreceptors** (blood pressure, pulmonary)',
      },
      {
        front: 'Give examples of **chemoreceptors**.',
        back: '- Taste and smell\n- **Osmoreceptors**\n- Substrate receptors (glucose, fatty acids, amino acids)\n- Arterial **O₂** (aortic & carotid bodies)\n- Arterial **CO₂** (medulla, aortic & carotid bodies)',
      },
      {
        front: 'What is the **labeled line principle**?',
        back: 'Each receptor is linked to a **dedicated neural pathway** for its specific modality, ending in a specific brain region. Activation anywhere along that line is perceived as that sensation at that site.\n\nLabeled lines give us **sensory discrimination**.',
      },
      {
        front: 'Walk through **sensory receptor activation** from stimulus to nerve firing.',
        back: 'Stimulus alters membrane permeability → **depolarizing receptor potential** (a graded potential) → if it reaches **threshold**, an **action potential** fires.\n\nBigger stimulus → bigger receptor potential → **higher AP frequency**.',
      },
      {
        front: 'How is a **Pacinian corpuscle** activated?',
        back: 'Encapsulated ending on a myelinated neuron. Capsule **deformation** → depolarizing receptor potential → if threshold is reached at the **first node of Ranvier**, an AP fires. More compression → higher firing frequency.',
      },
      {
        front: 'What is **receptor adaptation**, and what is the range for mechanoreceptors?',
        back: 'Partial or complete decline in response to a sustained stimulus.\n\nMechanoreceptors probably adapt completely — from **hundredths of a second (Pacinian corpuscles)** to **~2 days (carotid/aortic baroreceptors)**.',
      },
      {
        front: 'Which receptors **do NOT adapt**?',
        back: '**Nociceptors (pain receptors).**',
      },
      {
        front: 'Fiber classification: **Aα (type I)** — size, speed, and what does it carry?',
        back: '**12–20 µm**, **70–120 m/s** (fastest)\n- Afferent: **muscle spindle, Golgi tendon organ**\n- Efferent: **α-motoneuron** to skeletal muscle',
      },
      {
        front: 'Fiber classification: **Aβ (type II)**?',
        back: '**6–12 µm**, **35–70 m/s**\n- Afferent: **mechanoreceptors** (touch)',
      },
      {
        front: 'Fiber classification: **Aγ**?',
        back: '**2–8 µm**, **12–50 m/s**\n- Efferent: **γ-motoneuron to muscle spindle**',
      },
      {
        front: 'Fiber classification: **Aδ (type III)**?',
        back: '**1–6 µm**, **3–35 m/s**\n- **Fast (acute, sharp) pain**\n- **Cold** thermoreceptors\n- Mechanoreceptors',
      },
      {
        front: 'Fiber classification: **B fibers**?',
        back: '**1–3 µm**, **3–15 m/s**\n- **Preganglionic ANS** (efferent)',
      },
      {
        front: 'Fiber classification: **C (type IV)**?',
        back: '**~1 µm**, **0.5–2 m/s** (slowest, unmyelinated)\n- **Slow pain**\n- **Warmth** thermoreceptors\n- Mechanoreceptors\n- **Postganglionic ANS** (efferent)',
      },
      {
        front: 'Where does somatic sensory information **enter the CNS**, and what are the two main ascending pathways?',
        back: 'Through the **dorsal roots** of spinal nerves.\n- **Dorsal column–medial lemniscal (DCML)**\n- **Anterolateral (spinothalamic)**',
      },
      {
        front: '**DCML pathway**: where does it cross over, and what is the route?',
        back: '1st-order neuron ascends the **ipsilateral dorsal column** → synapses in dorsal column nuclei and **crosses in the medulla** → 2nd-order neuron ascends the **medial lemniscus** → synapses in contralateral **thalamus** → 3rd-order neuron to **somatosensory cortex**.',
      },
      {
        front: '**DCML pathway**: what sensations does it carry, and what are its properties?',
        back: '**Fine touch, vibration, position, movement against skin, fine pressure.**\n\nLarge myelinated fibers → **high velocity**, precise spatial localization, high intensity discrimination.',
      },
      {
        front: '**Anterolateral (spinothalamic) pathway**: where does it cross over?',
        back: 'Fibers synapse in the **dorsal horn** and **cross over in the spinal cord** (at roughly the level of entry), then ascend in the anterior/lateral spinothalamic tracts to the thalamus and reticular formation.',
      },
      {
        front: '**Anterolateral pathway**: what sensations does it carry?',
        back: '**Pain, warmth, cold, crude touch, tickle & itch, sexual sensations.**',
      },
      {
        front: 'How does the **anterolateral pathway** compare with the DCML?',
        back: '- **Slower** (~30–50% of DCML velocity; smaller fibers)\n- **Poorer** spatial localization\n- **Poorer** intensity discrimination\n- Few 3rd-order neurons reach the somatosensory cortex\n- Carries a **broader** range of modalities',
      },
      {
        front: 'Where is the **somatosensory cortex**, and what happens if it is destroyed?',
        back: '**Posterior to the central sulcus** (postcentral gyrus).\n\nDestruction → loss of ability to **localize** sensation and precisely judge **pressure, weight, shape, and texture**. Crude touch remains — the **thalamus** contributes to perception.',
      },
      {
        front: 'Tactile receptors: **free nerve endings** vs **Meissner\'s corpuscles**.',
        back: '- **Free nerve endings** — skin and many tissues; touch & pressure (e.g., cornea)\n- **Meissner\'s** — encapsulated, on Aβ fibers, in **glabrous skin** (fingertips, lips); **rapidly adapting**; fine spatial discrimination',
      },
      {
        front: 'Tactile receptors: **Merkel\'s discs** and **hair end organs**.',
        back: '- **Merkel\'s discs** (expanded tip) — Aβ fibers; with Meissner\'s, give **high localization**\n- **Hair end organs** — detect motion/body contact; **fast adapting**',
      },
      {
        front: 'Tactile receptors: **Ruffini endings** vs **Pacinian corpuscles**.',
        back: '- **Ruffini** — deep tissues; sustained **pressure**; **slow adapting**\n- **Pacinian** — beneath skin & fascia; **vibration / rapid changes only**; **extremely rapidly adapting**',
      },
      {
        front: 'Which fibers and pathway carry most **tactile** input? What about free nerve ending input?',
        back: '- Most tactile input → fast **Aβ** fibers → **DCML**\n- Free nerve endings → **Aδ** (more) and **C** fibers (some, especially **tickle**) → **anterolateral** pathway',
      },
      {
        front: '**Position sense**: which receptors and which pathway?',
        back: 'Joint, skin, and **muscle spindle** receptors → **DCML** pathway (with additional processing of joint movement speed in the spinal cord and thalamus).',
      },
      {
        front: 'Which fiber types carry **cold** vs **warmth** sensation?',
        back: '- **Cold** receptors → **Aδ** fibers\n- **Warmth** receptors → **C** fibers\n- Extreme temps → polymodal **nociceptors** (C fibers)',
      },
      {
        front: 'Key properties of **thermoreceptors**?',
        back: '- Respond most to the **rate of change** in temperature\n- **Adapt partially**\n- Activated by changes in metabolic activity\n- **Spatial summation** improves detection of temperature change',
      },
      {
        front: 'Trace the **thermosensory pathway**.',
        back: 'Thermoreceptor → Aδ or C fiber → dorsal root → dorsal horn interneuron → **crosses over** → **anterolateral pathway** → **thalamus & reticular formation** → some to sensory cortex.',
      },
      {
        front: 'Why does **cool air on the face** help someone who feels faint or nauseated?',
        back: 'Thermal input reaches the **reticular formation** → activates the **RAS** (arousal), triggers a deep breath, and **decreases vomiting/retching**.',
      },
    ],
  },

  // ───────────────────────── Lecture 7 ─────────────────────────
  {
    title: 'Somatic Pain',
    source: 'Lecture 7 · Neurophysiology: Somatic Pain',
    cards: [
      {
        front: 'When is pain **beneficial**, and when is it **detrimental**?',
        back: '**Beneficial / protective:**\n- Initial injury (alarm signal)\n- Healing (transient, reversible **peripheral sensitization** protects the area)\n\n**Detrimental:** when it becomes **chronic** or **dysregulated**.',
      },
      {
        front: 'What are the four ways **pain is classified**?',
        back: '- **Duration** — acute, subacute, chronic\n- **Etiology** — malignant or nonmalignant\n- **Initiation** — nociceptive or neuropathic\n- **Quality** — Aδ (fast) or C (slow)',
      },
      {
        front: 'How is **nociceptive** vs **non-nociceptive** pain subdivided?',
        back: '- **Nociceptive** → **somatic** and **visceral** (each can be Aδ fast or C slow)\n- **Non-nociceptive** → **neuropathic**',
      },
      {
        front: 'What is the **biphasic pain response**?',
        back: 'An initial sharp **fast pain (Aδ)** followed by a building, aching **slow pain (C)** — e.g., stubbing a toe.',
      },
      {
        front: 'Characteristics of **fast pain**?',
        back: '- Via **Aδ** fibers\n- Onset within **0.1 s**\n- **Sharp, stabbing, electric**\n- **Well localized**\n- Usually **not** felt in deep tissues or viscera',
      },
      {
        front: 'Characteristics of **slow pain**?',
        back: '- Via **C** fibers\n- Begins **≥1 s** after stimulus and **builds**\n- **Burning, aching, throbbing**, nauseous\n- **Poorly localized**, diffuse\n- Deep tissues & viscera; tissue destruction, suffering',
      },
      {
        front: 'Why do Aδ and C fiber pain **feel different**?',
        back: 'Because they **terminate in different areas of the CNS**.',
      },
      {
        front: 'Which tract carries **fast pain**, and where does it go?',
        back: '**Neospinothalamic** tract (anterolateral pathway). Aδ fibers synapse in the dorsal horn, cross over, and ascend to the **reticular formation and thalamus** — with projections to the somatosensory cortex, so it is **well localized**.',
      },
      {
        front: 'Which tract carries **slow pain**, and where does it go?',
        back: '**Paleospinothalamic** tract (anterolateral). C fibers → dorsal horn interneurons → cross → **reticular formation and periaqueductal gray**; only **10–20%** reach the thalamus.\n\n**No projections to somatosensory cortex** → very poor localization.',
      },
      {
        front: 'Which neurotransmitters are commonly used in **pain pathways**?',
        back: '**Substance P** and **glutamate**.',
      },
      {
        front: '**Unimodal** vs **polymodal** nociceptors?',
        back: '- **Unimodal** — noxious **mechanical** stimuli only; **Aδ** fibers (~10 m/s)\n- **Polymodal** — noxious **mechanical, chemical, and thermal** stimuli; **C** fibers (~1 m/s)',
      },
      {
        front: 'Are nociceptors high- or low-threshold receptors? Do they adapt?',
        back: '**High-threshold** receptors, and they **do not adapt**.',
      },
      {
        front: 'Dental pain: **dentinal** vs **pulpal** pain.',
        back: '- **Dentinal** — **Aδ**, fast, sharp, **well localized** (projects to somatosensory cortex)\n- **Pulpal** — **C**, slow, aching/throbbing, **poorly localized** (ends in thalamus); strongly activates the **reticular formation → poor sleep**',
      },
      {
        front: 'How does **lidocaine** produce local anesthesia?',
        back: 'Blocks **voltage-gated Na⁺ channels** → stabilizes the neuronal membrane → prevents **initiation and propagation** of action potentials.',
      },
      {
        front: 'What is **central sensitization**?',
        back: 'A form of **neuropathic** pain — the result of **pathological neuroplasticity**, where CNS pain neurons become hyperexcitable.',
      },
      {
        front: 'Name several clinical syndromes involving **central sensitization**.',
        back: 'Fibromyalgia, RA, OA, headache, **complex regional pain syndrome**, IBS, GERD, chronic pancreatitis, trigeminal neuralgia, TMD, post-surgical pain.',
      },
      {
        front: '**Hyperalgesia** vs **allodynia**?',
        back: '- **Hyperalgesia** — normally painful stimuli feel **more** painful\n- **Allodynia** — normally **non-painful** stimuli (light touch, warmth) cause pain\n\nBoth result from central sensitization (low-threshold Aβ/thermal input starts driving CNS pain neurons).',
      },
      {
        front: 'What is **referred pain**?',
        back: 'Pain perceived at a site **remote** from the source (heterotopic pain). **Visceral/deep** pain is often felt as **cutaneous/superficial** — usually not the reverse.',
      },
      {
        front: 'What mechanism explains **referred pain** (e.g., arm pain in myocardial ischemia)?',
        back: '**Afferent convergence** — visceral and cutaneous afferents converge on the **same spinal neurons**, so the brain misattributes the source to the skin.',
      },
      {
        front: 'What is **stress-induced analgesia**, and which chemicals mediate it?',
        back: 'Powerful endogenous pain control using **enkephalins and endorphins**.',
      },
      {
        front: 'Describe the **endogenous pain suppression** pathway.',
        back: '**Hypothalamus** (β-endorphin) → **periaqueductal gray** (μ-opioid receptors) → descending pathways through pons/medulla → dorsal horn, where they cause **presynaptic inhibition**, reducing ascending pain transmission.',
      },
      {
        front: 'Which **mediators** at the nociceptor–CNS synapse drive pain signaling?',
        back: 'Glutamate, **bradykinin**, **substance P**, **CGRP**, BDNF (acting on AMPA, NMDA, NK1, CGRP, TrkB, B2 receptors).',
      },
      {
        front: 'List the **drug classes** that act on pain transmission.',
        back: '- NSAIDs\n- Local anesthetics\n- TRPV1 receptor antagonists\n- Opioids\n- **NMDA antagonists** (ketamine)\n- **GABA analogues** (gabapentin, pregabalin)',
      },
      {
        front: 'Referred pain map: where is pain from the **heart**, **liver/gallbladder**, and **lung/diaphragm** felt?',
        back: '- **Heart** → left chest and **medial left arm** (also jaw/neck)\n- **Liver & gallbladder** → **right shoulder** / right scapula (and RUQ)\n- **Lung & diaphragm** → **neck and shoulder**',
      },
      {
        front: 'Referred pain map: **appendix**, **small intestine**, **kidney/ureter**, **stomach/pancreas**?',
        back: '- **Appendix** & **small intestine** → **periumbilical** area (appendix later localizes RLQ)\n- **Kidney** → **flank / low back**; **ureter** → flank radiating to **groin**\n- **Stomach** → epigastrium; **pancreas** → epigastrium radiating to the **back**\n- **Colon** → lower abdomen; **bladder** → suprapubic',
      },
    ],
  },

  // ───────────────────────── Lecture 8 ─────────────────────────
  {
    title: 'Motor Processes',
    source: 'Lecture 8 · Neurophysiology: Motor Processes',
    cards: [
      {
        front: 'Where is most motor **circuitry** located, and what does the cortex do?',
        back: 'In **lower brain and spinal areas**. The cortex sends **activating signals** to those areas, which then send commands to muscles and glands.',
      },
      {
        front: 'What is the exception — which movements go **directly** from cortex to anterior motor neurons?',
        back: '**Fine, precise hand movements.**',
      },
      {
        front: 'More than 50% of the **motor cortex** is dedicated to what?',
        back: '**Vocalization** and **control of the hands**.',
      },
      {
        front: 'Which specialized motor area handles **word formation** vs **word choice**?',
        back: '- **Broca\'s area** → word formation\n- **Wernicke\'s area** → word choice',
      },
      {
        front: 'What are the two groups of **descending spinal pathways**?',
        back: '1. **Corticospinal (pyramidal)** tract\n2. **Brainstem (extrapyramidal)** tracts — rubrospinal, reticulospinal, vestibulospinal',
      },
      {
        front: 'Describe the course of the **corticospinal (pyramidal)** tract.',
        back: 'Motor cortex → brainstem, forming the **medullary pyramids** → **most fibers cross in the medulla** → **lateral corticospinal tract**. Some descend uncrossed in the **anterior corticospinal tract** and mostly cross in the cord. They synapse on interneurons or directly on anterior motor neurons.',
      },
      {
        front: 'What movements does the **corticospinal** tract control?',
        back: '**Fine, conscious, voluntary** movement — especially the **fingers and hands**. (Right brain controls left side.)',
      },
      {
        front: 'What do the **extrapyramidal** tracts control, and are they crossed?',
        back: '**Unconscious** motor control — **posture, balance, walking**.\n\nMost **remain uncrossed**.',
      },
      {
        front: 'Name the three **extrapyramidal** tracts and their origins.',
        back: '- **Rubrospinal** — red nucleus\n- **Reticulospinal** — reticular formation\n- **Vestibulospinal** — vestibular nucleus',
      },
      {
        front: 'What makes up the **brainstem**, and what reflex centers does it house?',
        back: '**Medulla, pons, mesencephalon.**\n\nUnconscious centers for respiration, CV control, GI function, equilibrium, eye movement, and stereotyped movements (salivation, retching, posture).',
      },
      {
        front: 'Can the **cerebellum** or **basal nuclei** initiate movement?',
        back: '**No.** Neither can initiate motor function, but both are needed for **normal** motor control, always working with other motor areas.',
      },
      {
        front: 'What does the **cerebellum** do?',
        back: '**Timing** of motor activities (especially rapid ones — typing, talking, running). It **compares actual vs intended movement** and corrects. Called the "silent" area: stimulation produces no sensation and few motor impulses.',
      },
      {
        front: 'What are the signs of **cerebellar** injury?',
        back: '**Incoordination** (loss of timing), slowed movement, **overshoot**, and **intention tremor**.',
      },
      {
        front: 'Describe the **basal nuclei** circuit and function.',
        back: 'Input from **cerebral cortex** → basal nuclei → output back to cortex **via the thalamus**.\n\nControl voluntary movement — **timing and scaling** of movements.',
      },
      {
        front: 'Basal nuclei lesions: **putamen** and **globus pallidus**.',
        back: '- **Putamen** → flicking movements of hands/face\n- **Globus pallidus** → **writhing** of hand, arm, face',
      },
      {
        front: 'Basal nuclei lesions: **substantia nigra** and **subthalamic nucleus**.',
        back: '- **Substantia nigra** → **Parkinson\'s** (tremor, rigidity)\n- **Subthalamic nucleus** → **limb flailing**',
      },
      {
        front: '**Intention tremor** vs **relaxation (resting) tremor** — which lesion causes which?',
        back: '- **Intention tremor** → **cerebellum** (during movement)\n- **Relaxation tremor** + rigidity → **basal nuclei** (e.g., Parkinson\'s)',
      },
      {
        front: 'Name the two **muscle sensory receptors** and what they sense.',
        back: '- **Muscle spindle** → muscle **stretch** (length)\n- **Golgi tendon organ** → **tension**',
      },
      {
        front: 'Describe the **muscle spindle**.',
        back: 'Located on **intrafusal** fibers. Sensory neurons wrap the **central** region and sense **magnitude (static)** and **rate (dynamic)** of stretch. **γ-motor neurons** innervate the **ends**.',
      },
      {
        front: 'What is the role of the **γ-motor neuron**?',
        back: 'Contracts the ends of the intrafusal fibers to keep them the **same length as the extrafusal fibers**, so the spindle stays sensitive to stretch.',
      },
      {
        front: 'Walk through the **muscle stretch reflex**.',
        back: 'Rapid stretch → spindle afferents fire → impulse via **dorsal root** → synapse directly on **α-motoneuron** → extrafusal fibers **contract**.\n\nA **monosynaptic** reflex that protects against over-stretching and lets you react quickly to loads.',
      },
      {
        front: 'How does the spindle system **stabilize joints during fine movement**?',
        back: 'The body tenses both sides of a joint; **γ efferents** shorten intrafusal ends, stretching the center and **hypersensitizing** the spindle. Movements away from the set position are resisted (e.g., fine finger work).',
      },
      {
        front: 'Walk through the **Golgi tendon reflex**.',
        back: 'High tendon **tension** → GTO afferent → spinal cord → activates an **inhibitory interneuron** (IPSPs) → **inhibits** the α-motoneuron → contraction stops abruptly.\n\n**Polysynaptic**; protects against **muscle tearing and tendon avulsion**.',
      },
      {
        front: 'What is the **flexor (withdrawal) reflex** and **reciprocal inhibition**?',
        back: 'Painful stimulus → **flexors activated** to withdraw the limb, while **extensors (antagonists) are simultaneously inhibited** (reciprocal inhibition).',
      },
      {
        front: 'What is the **crossed extensor reflex**?',
        back: 'Continuation of the withdrawal reflex: interneurons cross to the **contralateral** side → **extensors activated**, flexors inhibited → helps push away from the stimulus and support body weight.',
      },
      {
        front: 'What additional functions does the **spinal cord** coordinate?',
        back: '- **Posture** reflexes\n- **Walking** reflexes — rhythmic stepping, reciprocal stepping of the opposite limb, **stumble reflex**\n- **GI and blood pressure** reflexes',
      },
    ],
  },

  // ───────────────────────── Lecture 9 ─────────────────────────
  {
    title: 'Muscle Contraction',
    source: 'Lecture 9 · Muscle Contraction & ANS Intro',
    cards: [
      {
        front: 'Describe the structural hierarchy of **skeletal muscle**.',
        back: 'Muscle fiber → **myofibrils** → serial **sarcomeres** → **thick** and **thin** filaments.',
      },
      {
        front: 'What is the **functional unit** of skeletal (and cardiac) muscle, and how is it defined?',
        back: 'The **sarcomere** — **Z line to Z line**.',
      },
      {
        front: 'What are the **thick** and **thin** filaments made of?',
        back: '- **Thick** — **myosin** (with cross-bridge heads)\n- **Thin** — **actin** (active sites), **troponin** (binds Ca²⁺), **tropomyosin**',
      },
      {
        front: 'What does **tropomyosin** do at rest, and what changes when Ca²⁺ arrives?',
        back: 'At rest it **covers the active sites** on actin. When **Ca²⁺ binds troponin**, tropomyosin shifts and **exposes** the sites so myosin can bind.',
      },
      {
        front: 'Describe the **cross-bridge cycle**.',
        back: 'Myosin heads bind exposed actin sites → **power stroke** pulls thin filaments toward the center of the sarcomere → head detaches → repeats as long as **Ca²⁺ remains and ATP is available**.',
      },
      {
        front: 'During a **concentric** contraction, which bands change?',
        back: '**I band** and **H zone** shorten, **sarcomere** (Z–Z) shortens.\n\nThe **A band stays the same** (thick filament length doesn\'t change).',
      },
      {
        front: 'What is an **eccentric** contraction?',
        back: 'The muscle generates force while **lengthening** — I band and H zone widen; **A band still unchanged**.',
      },
      {
        front: 'What receptor is at the **motor end-plate**, and what type is it?',
        back: '**Nicotinic acetylcholine receptors** — **ligand-gated** cation channels. ACh binding allows **Na⁺ influx** → depolarizing **end-plate potential** (graded).',
      },
      {
        front: 'What channels on the **sarcolemma and T-tubules** generate the muscle action potential?',
        back: '**Voltage-gated Na⁺ and K⁺ channels.**',
      },
      {
        front: 'Step 1 of skeletal muscle excitation: what happens at the **nerve terminal**?',
        back: 'AP arrives → **voltage-gated Ca²⁺ channels** open → Ca²⁺ influx activates **synapsin** → **exocytosis** of vesicles → **ACh released**.',
      },
      {
        front: 'How does the AP in the T-tubule cause **Ca²⁺ release** in skeletal muscle?',
        back: 'The AP down the **T-tubules** signals the SR via the **ryanodine receptor** to release Ca²⁺ into the sarcoplasm.',
      },
      {
        front: 'At what sarcoplasmic **Ca²⁺ concentration** does contraction begin?',
        back: 'Above **10⁻⁶ M** — Ca²⁺ binds troponin, tropomyosin shifts, contraction starts.',
      },
      {
        front: 'How does skeletal muscle **relax**?',
        back: 'Nerve firing stops → **ACh degraded by acetylcholinesterase** → Ca²⁺ **actively pumped back into the SR** → tropomyosin re-covers sites → relaxation.',
      },
      {
        front: 'Does skeletal muscle need **neural stimulation** to contract?',
        back: '**Yes — always.** It has no spontaneous action potentials.',
      },
      {
        front: 'What is **myasthenia gravis**, and how is it treated?',
        back: '**Autoimmune destruction of nicotinic ACh receptors** at the end-plate → weakness.\n\nTreated with **acetylcholinesterase inhibitors** (more ACh stays in the cleft).',
      },
      {
        front: 'How is **cardiac** muscle contraction initiated, and how do cells communicate?',
        back: 'By **pacemaker cells** (not nerves). Myocytes are electrically linked by **intercalated discs with gap junctions**, so depolarization spreads cell to cell.',
      },
      {
        front: 'Explain **Ca²⁺-induced Ca²⁺ release** in cardiac muscle.',
        back: 'Depolarization opens **L-type Ca²⁺ channels** in T-tubules → small **"trigger" Ca²⁺** enters → opens **ryanodine receptors** on the SR → large Ca²⁺ release → binds troponin → contraction.',
      },
      {
        front: 'How is Ca²⁺ removed in **cardiac** muscle, and how does the AP end?',
        back: '- **Ca²⁺-ATPase pumps** return Ca²⁺ to the SR and out of the cell\n- **Na⁺/Ca²⁺ exchanger** also removes Ca²⁺\n- **K⁺ efflux** repolarizes the membrane',
      },
      {
        front: 'How is **smooth muscle** structured differently?',
        back: 'Has thick and thin filaments but **no sarcomeres** (not striated). Thin filaments anchor to **dense bodies** instead of Z lines.',
      },
      {
        front: 'What is the Ca²⁺-binding protein in **smooth muscle**?',
        back: '**Calmodulin** (not troponin).',
      },
      {
        front: 'Walk through **α1-adrenergic** smooth muscle contraction.',
        back: 'NE → α1 → **Gq** → **PLC** → **IP3** → ↑Ca²⁺ → **Ca²⁺–calmodulin** → activates **myosin light chain kinase (MLCK)** → phosphorylates myosin → **contraction**.',
      },
      {
        front: 'How does **β2-adrenergic** activation relax smooth muscle?',
        back: 'NE/Epi → β2 → **Gs** → adenylyl cyclase → **cAMP** → **PKA phosphorylates MLCK** → P-MLCK has little affinity for Ca²⁺–calmodulin → myosin stays unphosphorylated → **relaxation**.',
      },
      {
        front: 'Compare **sarcomeres, T-tubules, and gap junctions** across skeletal, cardiac, single-unit, and multi-unit smooth muscle.',
        back: '- **Sarcomeres/striated:** skeletal ✔, cardiac ✔, smooth ✘\n- **T-tubules:** skeletal ✔, cardiac ✔, smooth ✘\n- **Gap junctions:** skeletal ✘, cardiac ✔, single-unit ✔, multi-unit sparse/none',
      },
      {
        front: 'Compare the **Ca²⁺ source** across muscle types.',
        back: '- **Skeletal:** SR\n- **Cardiac:** SR and ECF\n- **Smooth (both):** ECF and SR',
      },
      {
        front: 'Which muscle types **require nerve stimulation** to contract?',
        back: '- Skeletal: **yes**\n- Cardiac: no\n- Single-unit smooth: no\n- Multi-unit smooth: **usually yes**',
      },
      {
        front: 'Which muscle types have **spontaneous APs**, and which **contract when stretched**?',
        back: '- **Spontaneous APs:** cardiac (certain cells) and **single-unit smooth**\n- **Contract in response to stretch:** **single-unit smooth only**',
      },
      {
        front: 'Define the sarcomere bands: **A band**, **I band**, **H zone**, **M line**, **Z line**.',
        back: '- **A band** — full length of the **thick** filaments (includes overlap)\n- **I band** — **thin** filaments only (spans the Z line)\n- **H zone** — **thick** filaments only (center)\n- **M line** — middle of the sarcomere\n- **Z line** — anchors thin filaments; sarcomere = Z to Z',
      },
      {
        front: 'Why can skeletal muscle be **tetanized** but cardiac muscle cannot?',
        back: '- **Skeletal:** the AP (~5 ms) is **over before tension develops** → repeated APs can **summate** into tetanus\n- **Cardiac:** the AP (~200 ms) lasts **almost as long as the contraction** → long refractory period prevents summation, so the heart relaxes and refills',
      },
    ],
  },
  {
    title: 'Autonomic Nervous System Intro',
    source: 'Lecture 9 · Muscle Contraction & ANS Intro',
    cards: [
      {
        front: '**Somatic nervous system**: neurotransmitter, receptor, and target?',
        back: '**One** neuron (α- or γ-motor neuron) → **ACh** → **nicotinic** receptor (ligand-gated channel; end-plate potential) → **skeletal muscle**.',
      },
      {
        front: '**Parasympathetic** pathway: transmitters and receptors at each synapse?',
        back: 'Preganglionic → **ACh → nicotinic** (ganglion) → postganglionic → **ACh → muscarinic** → heart, smooth muscle, glands.',
      },
      {
        front: '**Sympathetic** pathway: transmitters and receptors at each synapse?',
        back: 'Preganglionic → **ACh → nicotinic** (ganglion) → postganglionic → **NE → adrenergic** receptors → heart, smooth muscle, glands.',
      },
      {
        front: 'How does the **adrenal medulla** fit into the sympathetic system?',
        back: 'Preganglionic sympathetic neuron → **ACh → nicotinic** receptors on the adrenal medulla → releases **epinephrine** (and NE) into the **bloodstream**.',
      },
      {
        front: 'Define **cholinergic** vs **(nor)adrenergic** neuron.',
        back: '- **Cholinergic** — releases **ACh** (all preganglionic, parasympathetic postganglionic, somatic motor)\n- **(Nor)adrenergic** — releases **norepinephrine** (most sympathetic postganglionic)',
      },
      {
        front: 'Which division is **necessary for life**, and which is not?',
        back: '- **Parasympathetic** — basal maintenance; **necessary for life**\n- **Sympathetic** — activated states; **not essential** to life',
      },
      {
        front: 'What does **atropine** block?',
        back: '**Muscarinic** ACh receptors (parasympathetic effector sites).',
      },
      {
        front: 'What are the **catecholamines**?',
        back: '**Norepinephrine and epinephrine** — both bind adrenergic receptors (with different affinities).',
      },
      {
        front: 'What determines whether NE/Epi **excites or inhibits** a target organ?',
        back: 'The **adrenergic receptor subtype** expressed on that organ.',
      },
      {
        front: 'MEMORIZE: the action of each **adrenergic receptor** (α1, β1, β2, β3).',
        back: '- **α1** — **constriction**\n- **β1** — ↑ **contractility and heart rate**\n- **β2** — **dilation / relaxation**\n- **β3** — **lipolysis**',
      },
      {
        front: 'Which second messenger does **α1** use vs the **β receptors**?',
        back: '- **α1** → Gq → **IP3**\n- **β1, β2, β3** → Gs → **cAMP**\n\nMnemonic: "**BAse cAMP**" — β-adrenergic receptors use cAMP.',
      },
      {
        front: 'What does **propranolol** do?',
        back: '**Nonselective β-blocker** (antagonist at β1 and β2).',
      },
      {
        front: 'What is **metoprolol**?',
        back: 'A **selective β1** adrenergic receptor **antagonist**.',
      },
      {
        front: 'What is **albuterol**?',
        back: 'A **selective β2** adrenergic receptor **agonist** → bronchodilation.',
      },
      {
        front: 'What is the **catecholamine synthesis** pathway, and where does it occur?',
        back: '**Tyrosine → L-DOPA → dopamine → norepinephrine → epinephrine**\n\nIn the **adrenal medulla** and **postganglionic sympathetic neurons**.',
      },
      {
        front: 'During **exercise**, what does sympathetic activation do at the heart, airways, gut, GI arterioles, and fat?',
        back: '- **Heart (β1)** — ↑ contractility & HR\n- **Airways (β2)** — bronchodilation\n- **Gut smooth muscle (β2)** — relaxation\n- **GI arterioles (α1)** — constriction (diverts blood)\n- **Adipocytes (β3)** — lipolysis',
      },
      {
        front: 'Where are the ganglia in the **sympathetic** vs **parasympathetic** systems?',
        back: '- **Sympathetic:** ganglia **near the spinal cord** → **short preganglionic, long postganglionic** fibers\n- **Parasympathetic:** ganglia **near/in the target organ** → **long preganglionic, short postganglionic** fibers',
      },
      {
        front: '**Nicotinic** vs **muscarinic** receptors: what kind of receptor is each, and where is each found?',
        back: '- **Nicotinic** — **ligand-gated ion channel**; at **all autonomic ganglia**, the **adrenal medulla**, and the skeletal muscle **end-plate**\n- **Muscarinic** — **G protein-coupled**; on parasympathetic **target organs** (heart, smooth muscle, glands)',
      },
    ],
  },

  // ───────────────────────── Lecture 10 ─────────────────────────
  {
    title: 'CV: Cardiac Cycle & the Heart as a Pump',
    source: 'Lecture 10 · Cardiovascular Physiology',
    cards: [
      {
        front: 'What is the core **sequence** linking electrical activity to blood flow?',
        back: 'Ventricular **depolarization** → muscle **contraction** → **pressure** generation → blood **ejection** → contributes to **blood pressure** → BP drives **blood flow** → ventricular **relaxation**.',
      },
      {
        front: 'What does each **ECG** element represent?',
        back: '- **P wave** — atrial depolarization\n- **PR interval** — AV node depolarization (conduction delay)\n- **QRS complex** — septal & ventricular depolarization\n- **T wave** — ventricular repolarization',
      },
      {
        front: 'Cardiac cycle: what happens at the **start of ventricular systole**?',
        back: 'After the QRS, ventricles contract → ventricular pressure rises above atrial → **AV (mitral) valve closes** (S1) → **isovolumic contraction** (both valves closed).',
      },
      {
        front: 'Cardiac cycle: when does the **aortic valve open**, and what follows?',
        back: 'When **ventricular pressure exceeds aortic pressure** → aortic valve opens → **ejection** phase (rapid then reduced) → ventricular volume falls.',
      },
      {
        front: 'Cardiac cycle: what happens as the ventricle **relaxes**?',
        back: 'T wave (repolarization) → ventricular pressure drops below aortic → **aortic valve closes** (S2) → **isovolumic relaxation** → when ventricular pressure falls below atrial, **AV valve opens** → **filling** (rapid, reduced, then atrial kick).',
      },
      {
        front: 'Valve positions in each phase: **filling**, **isovolumic contraction**, **ejection**, **isovolumic relaxation**.',
        back: '- **Diastolic filling:** mitral **open**, aortic closed\n- **Isovolumic contraction:** **both closed** (mitral just closed)\n- **Ejection:** aortic **open**, mitral closed\n- **Isovolumic relaxation:** **both closed** (aortic just closed)',
      },
      {
        front: 'Which valve closures produce **S1** and **S2**?',
        back: '- **S1** — **AV valves close** (start of systole)\n- **S2** — **semilunar (aortic/pulmonic) valves close** (start of diastole)',
      },
      {
        front: 'Intrinsic depolarization rates of the **conduction system** (per slides)?',
        back: '- **SA node** ~90–100/min\n- **AV node** ~40–60/min\n- **Bundle branches** ~20–30/min\n- **Purkinje fibers** ~15–20/min\n- **Ventricular myocytes** ~10/min\n\nThe fastest (SA node) sets the rate.',
      },
      {
        front: 'Which circulation does each side of the heart supply?',
        back: '- **Left heart → systemic** circulation (including **coronary** circulation)\n- **Right heart → pulmonary** circulation',
      },
      {
        front: 'What is **blood volume** as a percentage of body weight, and what is the **hematocrit**?',
        back: '- Blood volume ≈ **7–8%** of body weight\n- **Hematocrit** = ratio of **RBC volume to whole blood** volume',
      },
      {
        front: 'Primary functions of **neutrophils, eosinophils, basophils**?',
        back: '- **Neutrophils** — phagocytose bacteria (first responders)\n- **Eosinophils** — parasites, allergic reactions\n- **Basophils** — release histamine/heparin (allergy, inflammation)',
      },
      {
        front: 'Primary functions of **monocytes, macrophages, lymphocytes**?',
        back: '- **Monocytes** — circulate, then become **macrophages** in tissue\n- **Macrophages** — phagocytosis, antigen presentation\n- **Lymphocytes** — adaptive immunity (**B cells** → antibodies; **T cells** → cell-mediated)',
      },
      {
        front: 'What is the **dicrotic notch** on the aortic pressure curve?',
        back: 'A brief dip/rebound in aortic pressure caused by **closure of the aortic valve** — marks the end of ejection and start of **isovolumic relaxation** (coincides with **S2**).',
      },
      {
        front: 'On the LV volume curve, approximately what are **EDV** and **ESV**, and when does each occur?',
        back: '- **EDV ≈ 130 mL** — at the end of filling (after atrial kick), just as the **mitral valve closes**\n- **ESV ≈ 65 mL** — at the end of ejection, just as the **aortic valve closes**\n\nSV = EDV − ESV ≈ 65–70 mL',
      },
      {
        front: 'How does **autonomic** input change the cardiac cycle?',
        back: '- **Sympathetic (β1):** ↑ HR (shorter cycle, mostly shorter **diastole/filling**), ↑ contractility → faster ejection & relaxation, ↑ SV\n- **Parasympathetic (vagal, muscarinic):** ↓ HR (longer diastole), slowed AV conduction (longer PR)',
      },
    ],
  },
  {
    title: 'CV: Hemodynamics & Cardiac Output',
    source: 'Lecture 10 · Cardiovascular Physiology',
    cards: [
      {
        front: 'State the basic **flow–pressure–resistance** relationship.',
        back: '**Flow (Q) = ΔP / R**\n\nFlow is **directly** related to the pressure gradient and **inversely** related to resistance.',
      },
      {
        front: 'Write the **Poiseuille** resistance equation.',
        back: '**R = 8Lη / πr⁴**\n- L = vessel length\n- η = viscosity\n- r = radius\n\nSo **R ∝ 1/r⁴**.',
      },
      {
        front: 'If a vessel\'s **radius is halved**, what happens to resistance and flow?',
        back: 'Resistance increases **16×**; flow drops to **1/16 (6.25%)**. Small radius changes → large changes in flow.',
      },
      {
        front: 'What is the main way blood flow to an organ is controlled?',
        back: 'By changing **resistance**, mainly via **vasoconstriction/vasodilation of arterioles** (changing radius).',
      },
      {
        front: 'Define **cardiac output**, **heart rate**, and **stroke volume**.',
        back: '**CO = HR × SV**\n- HR = ventricular beats per minute\n- SV = volume ejected per beat',
      },
      {
        front: 'How does the **sympathetic** system increase heart rate?',
        back: 'NE (nerves) and epinephrine (adrenal medulla) bind **β1 receptors** on the SA node → **faster phase 4 pacemaker depolarization** → ↑ HR (positive chronotropy).',
      },
      {
        front: 'How does the **parasympathetic** system decrease heart rate?',
        back: 'Vagal **ACh** binds SA node **muscarinic** receptors → G protein opens **K⁺ channels** → slight K⁺ efflux → **slower pacemaker depolarization** → ↓ HR.',
      },
      {
        front: 'Besides adding sympathetic input, how else can HR increase?',
        back: 'By **decreasing parasympathetic** activity (and vice versa: ↓ sympathetic activity lowers HR).',
      },
      {
        front: 'What three factors regulate **stroke volume**?',
        back: '1. **Frank–Starling** mechanism (preload / EDV)\n2. **Contractility** (inotropy)\n3. **Afterload**',
      },
      {
        front: 'Define **preload**.',
        back: 'The **end-diastolic volume (EDV)** — volume filling the ventricle just before contraction.',
      },
      {
        front: 'What are the three cellular mechanisms of the **Frank–Starling** effect?',
        back: '1. Better **thick/thin filament overlap**\n2. Increased **troponin sensitivity to Ca²⁺**\n3. Increased **Ca²⁺ release** from the SR',
      },
      {
        front: 'What happens when the ventricle is **over-filled** (e.g., some heart failure)?',
        back: 'Cross-bridge overlap **decreases** → **SV falls** — called **decompensation**.',
      },
      {
        front: 'What factors increase **venous return and EDV**?',
        back: '- ↑ **Venoconstriction** (↓ venous compliance)\n- ↑ **Skeletal muscle pump**\n- ↑ **Respiratory pump**\n- ↑ **Blood/plasma volume**\n\n→ ↑ ventricular filling → ↑ EDV → ↑ SV',
      },
      {
        front: 'Define **contractility** and how it differs from Frank–Starling.',
        back: 'Contractility = ↑ **strength of contraction at any given EDV** (both force and relaxation speed increase).\n\nFrank–Starling = ↑ force **because EDV increased**.',
      },
      {
        front: 'Define **ejection fraction** and its normal range.',
        back: '**EF = SV / EDV**\n\nNormal resting EF ≈ **50–70%**. Increased contractility raises EF.',
      },
      {
        front: 'EDV 135 mL, ESV 65 mL. What are SV and EF? Then with ↑ contractility: EDV 140, ESV 20?',
        back: '- Normal: SV = **70 mL**, EF = 70/135 ≈ **52%**\n- ↑ Contractility: SV = **120 mL**, EF = 120/140 ≈ **86%**',
      },
      {
        front: 'How does **β1 stimulation** increase ventricular contractility?',
        back: 'β1 → Gs → cAMP → **PKA** phosphorylates:\n- **L-type Ca²⁺ channels** (more Ca²⁺ entry)\n- **Ryanodine receptors** (more SR release)\n- **Troponin** and **myosin**\n- **SR Ca²⁺-ATPase** (faster relaxation)',
      },
      {
        front: 'On a ventricular function curve, how do you tell **Frank–Starling** from **contractility**?',
        back: '- Moving **along the same curve** (↑ EDV) → **Frank–Starling**\n- Shifting **to a higher curve at the same EDV** → **contractility**',
      },
      {
        front: 'Define **afterload** and its effect on stroke volume.',
        back: 'The **aortic (and pulmonic) pressure** the ventricle must overcome to eject. More energy spent overcoming afterload → less for ejection → **↓ SV**.',
      },
      {
        front: 'Why is **hypertension** hard on the heart?',
        back: 'It is an abnormally high **afterload** → greatly ↑ **myocardial work and O₂ demand**.',
      },
      {
        front: 'What are the four determinants of **myocardial work** (CRAP)?',
        back: '- **C**ontractility\n- **R**ate (HR)\n- **A**fterload (MABP)\n- **P**reload (ventricular filling)',
      },
      {
        front: 'How does increased myocardial work lead to **angina**?',
        back: 'More work → more **coronary blood flow** needed → if **coronary artery disease** limits flow → **ischemia** → angina.',
      },
    ],
  },
  {
    title: 'CV: Vasculature & Capillary Exchange',
    source: 'Lecture 10 · Cardiovascular Physiology',
    cards: [
      {
        front: 'Complete: "Arteries store ___ while veins store ___."',
        back: '"Arteries store **pressure** while veins store **volume**."',
      },
      {
        front: 'Define **compliance** and give the formula.',
        back: 'How much a vessel **yields to pressure**.\n\n**Compliance = ΔV / ΔP** (high compliance = large volume change for a small pressure change).',
      },
      {
        front: 'How do **arteries** act as a pressure reservoir?',
        back: 'During **systole**, ejected blood stretches the elastic aortic wall. During **diastole**, the wall **recoils**, keeping blood pressurized and moving forward (the closed aortic valve prevents backflow).',
      },
      {
        front: 'Define **systolic**, **diastolic**, and **pulse pressure**.',
        back: '- **SP** — maximum arterial pressure (ventricular systole)\n- **DP** — minimum arterial pressure (end of diastole)\n- **PP = SP − DP** (e.g., 120/80 → PP = 40 mmHg)',
      },
      {
        front: 'What is **arteriosclerosis**, and how does it affect pulse pressure?',
        back: 'Progressive **loss of arterial compliance** (stiffer arteries with age/disease) → **↑ pulse pressure**. PP is a diagnostic indicator of arteriosclerosis.',
      },
      {
        front: 'How do you calculate **MAP**, and why is it weighted that way?',
        back: '**MAP = DP + ⅓(PP)**\n\nDiastole lasts about **twice as long** as systole, so DP has more influence.\n\n120/80 → 80 + ⅓(40) = **93 mmHg**',
      },
      {
        front: 'Derive **MABP = CO × TPR**.',
        back: 'Flow = (aortic P − right atrial P) / R. RAP ≈ 0, so Flow = MABP / R → **MABP = CO × TPR = (HR × SV) × TPR**.',
      },
      {
        front: 'What role do **arterioles** play in the circulation?',
        back: '- Distribute blood flow among organs\n- Primary determinant of **MAP** (via TPR)\n- Their radius sets resistance to each organ: **vasoconstriction ↓ flow, vasodilation ↑ flow**',
      },
      {
        front: 'What is the common final pathway for nearly all **arteriole resistance** controls?',
        back: 'Changing **smooth muscle cytosolic Ca²⁺** (or its effects): ↑ Ca²⁺ → contraction/**vasoconstriction**; ↓ → vasodilation. Many drugs act here.',
      },
      {
        front: 'Which predominates: **local** or **extrinsic** arteriole control?',
        back: '**Local controls** almost always predominate over neural and hormonal controls.',
      },
      {
        front: 'How do **metabolic products** regulate arteriole flow?',
        back: 'Metabolically active tissue produces metabolites that are usually **vasodilating** → ↑ flow to match demand.',
      },
      {
        front: 'What is the **myogenic response**?',
        back: 'High BP stretches arteriole smooth muscle → reflex **contraction (vasoconstriction)** → ↑ resistance keeps flow constant despite higher pressure (and somewhat in reverse).',
      },
      {
        front: 'How does the **sympathetic** system constrict most arterioles?',
        back: 'NE/Epi bind **α1 receptors** → **IP3** pathway → ↑ smooth muscle Ca²⁺ → **vasoconstriction** → ↓ flow.',
      },
      {
        front: 'What is the exception for **skeletal muscle** arterioles?',
        back: 'Some have **β2 receptors**. **Epinephrine** (high β2 affinity) → **cAMP** → **vasodilation** → ↑ flow to muscle.',
      },
      {
        front: 'Hormonal arteriole control: **angiotensin II**, **vasopressin**, **ANP**?',
        back: '- **Angiotensin II** — powerful **vasoconstrictor** (IP3/Ca²⁺)\n- **Vasopressin** (posterior pituitary) — **vasoconstrictor** (IP3/Ca²⁺; V1A)\n- **ANP** — **vasodilator**\n\nAlso: neurons releasing **nitric oxide** dilate.',
      },
      {
        front: 'Define **active hyperemia**.',
        back: 'More metabolically active tissue → more **vasodilating local factors** → ↑ blood flow. Flow is matched to metabolic activity.',
      },
      {
        front: 'Define **reactive hyperemia**.',
        back: 'After blood flow is **occluded**, vasodilating factors accumulate; when flow is restored there is a strong **compensatory surge** in flow.',
      },
      {
        front: 'What is **flow autoregulation**, and which organs show it?',
        back: 'Keeping flow nearly **constant** over a wide range of **perfusion pressures** — ↑ pressure → ↑ resistance; ↓ pressure → ↓ resistance.\n\nE.g., **brain, kidney**.',
      },
      {
        front: 'Describe **capillary** structure and how cleft tightness varies.',
        back: 'A single layer of **endothelial cells** joined loosely by water-filled **intercellular clefts**.\n- **Brain** — very tight clefts (limited transport)\n- **Liver** — very loose clefts (more transport)',
      },
      {
        front: 'What are **precapillary sphincters** and **metarterioles**?',
        back: '- **Precapillary sphincters** — regulate blood entering capillaries based on local metabolites\n- **Metarterioles** — connect arterioles to venules in some tissues, regulating capillary flow',
      },
      {
        front: 'Why are capillaries ideal for **diffusion**?',
        back: 'Huge total **cross-sectional/surface area** → **very low velocity** (velocity ∝ 1/cross-sectional area), plus a thin barrier — all favorable per Fick\'s law.',
      },
      {
        front: 'What is the main means of capillary exchange, and where is **mediated transport** important?',
        back: '**Diffusion** is the only important means in all capillaries **except the brain**, where **mediated transport** is important.',
      },
      {
        front: 'Define capillary **filtration** vs **reabsorption**.',
        back: '- **Filtration** — fluid moves **out of plasma into the interstitium**\n- **Reabsorption** — fluid moves **from the interstitium into plasma**',
      },
      {
        front: 'Which **Starling forces** favor filtration vs reabsorption?',
        back: '**Filtration:**\n- Capillary hydrostatic pressure (**CHP**)\n- Tissue (interstitial) osmotic force (**TOF**)\n\n**Reabsorption:**\n- Capillary osmotic (oncotic) force (**COF**)\n- Tissue hydrostatic pressure (**THP**)',
      },
      {
        front: 'Write the equation for **net capillary fluid movement**.',
        back: '**Net = (CHP + TOF) − (THP + COF)**\n\nPositive → filtration; negative → reabsorption.',
      },
      {
        front: 'What happens to capillary fluid if **BP drops** significantly?',
        back: '**CHP falls** → net **reabsorption** from interstitium into plasma → helps support blood volume and pressure.',
      },
      {
        front: 'Why does **inflamed/infected** tissue swell?',
        back: 'Plasma **proteins leak** into the tissue → ↑ **tissue osmotic force (TOF)** → water drawn out of capillaries → **edema**.',
      },
      {
        front: 'How does **left heart failure** cause pulmonary edema?',
        back: 'Left ventricle can\'t pump all the blood it receives → blood **backs up** in the pulmonary vasculature → ↑ **pulmonary CHP** → fluid filters into alveoli → **pulmonary edema** → impaired diffusion, **dyspnea**.',
      },
      {
        front: 'If right CO exceeds left CO by just **0.1 mL/beat** at 80 bpm, what happens?',
        back: '0.1 × 80 = **8 mL/min** backs up in the pulmonary circulation → congestion and **pulmonary edema**. Over time, left and right CO **must be equal**.',
      },
      {
        front: '**Left** vs **right** heart failure: findings and causes.',
        back: '**Left HF** (right CO > left): **pulmonary edema, dyspnea**. Causes: hypertension, CAD/MI, cardiomyopathy, valve stenosis/regurgitation.\n\n**Right HF** (left CO > right): **peripheral, dependent edema**. Cause: e.g., pulmonary hypertension.',
      },
      {
        front: 'Key properties of **veins**?',
        back: '- **Volume reservoir**\n- Low mean pressure (~**10 mmHg**), very low resistance\n- **Very high compliance** (small ΔP → large ΔV)',
      },
      {
        front: 'What regulates **venous return**?',
        back: '- **Sympathetic** activity (venoconstriction)\n- **Skeletal muscle pump**\n- **Respiratory pump**\n\nVenous return governs ventricular filling, SV, and CO.',
      },
      {
        front: 'Where is most of the **blood volume** at rest?',
        back: '- **Systemic veins/venules ≈ 61%**\n- Pulmonary circulation ≈ 12%\n- Arteries ≈ 11%\n- Heart ≈ 9%\n- Arterioles & capillaries ≈ 7%\n\n→ Veins are the **volume reservoir**.',
      },
    ],
  },
  {
    title: 'CV: Blood Pressure Regulation & Hypertension',
    source: 'Lecture 10 · Cardiovascular Physiology',
    cards: [
      {
        front: 'How do **arterial baroreceptors** respond to a **drop in MABP**?',
        back: '↓ MABP → ↓ baroreceptor **firing** to brainstem → ↑ **sympathetic** and ↓ **parasympathetic** activity → BP rises.\n\n(The reverse happens when MABP rises.) Baroreceptors can **reset** their set-points.',
      },
      {
        front: 'Map the controls of **MABP = (HR × SV) × TPR** — what raises **HR**?',
        back: '↑ **Sympathetic** (β1) and ↓ **parasympathetic** (muscarinic) activity.',
      },
      {
        front: 'What raises **stroke volume** in the MABP equation?',
        back: '- **Contractility** — SNS β1, epinephrine\n- **Preload** — ↓ venous compliance (SNS α1, angiotensin II), ↑ plasma volume (water retention via **aldosterone/ADH**, Na⁺ retention)',
      },
      {
        front: 'What raises **TPR** in the MABP equation?',
        back: 'Arterial vasoconstriction via:\n- **SNS → α1** receptors\n- **Angiotensin II → AII** receptors\n- **Vasopressin/ADH → V1A** receptors',
      },
      {
        front: 'What activates the **renin–angiotensin–aldosterone system**?',
        back: '**Decreased BP at the renal afferent arteriole baroreceptors** (also ↓ Na⁺ and ↑ SNS activity) → renin release.',
      },
      {
        front: 'Walk through the **RAAS** cascade.',
        back: '**Angiotensinogen** —(renin)→ **angiotensin I** —(ACE)→ **angiotensin II** → \n- **Vasoconstriction** → ↑ TPR and ↑ preload\n- **Aldosterone** → ↑ Na⁺ and water retention → ↑ plasma volume → ↑ preload/SV',
      },
      {
        front: 'How do **atrial baroreceptors** regulate **vasopressin**?',
        back: '- ↑ Venous return → ↑ atrial stretch → **↓ vasopressin** → less vasoconstriction → BP and venous return fall\n- ↓ Venous return → **↑ vasopressin** → BP and venous return rise',
      },
      {
        front: 'After **hemorrhage**, what is the time course of each compensatory mechanism?',
        back: '- **Autonomic** reflexes (↑ SNS, ↓ PNS) — **seconds–minutes** onward\n- **Angiotensin II** vasoconstriction — **hours–days**\n- **Aldosterone** Na⁺/H₂O retention — **days–weeks**',
      },
      {
        front: 'What are the **non-pharmacological** treatments for hypertension?',
        back: '- **Weight control**\n- **DASH diet** — ↑ fruits, vegetables, low-fat dairy, nuts; ↓ red meat, sweets, saturated fat, **Na⁺**; high in **K⁺, Ca²⁺, Mg²⁺**\n- **Exercise** — 30 min most days',
      },
      {
        front: 'List the eight classes of **antihypertensive** medications.',
        back: '1. Diuretics\n2. β-blockers\n3. ACE inhibitors\n4. ARBs\n5. Aldosterone receptor blockers\n6. Calcium channel blockers\n7. α-blockers\n8. Direct vasodilators',
      },
      {
        front: 'Drug suffixes: **diuretics**, **β-blockers**, **ACE inhibitors**, **ARBs**?',
        back: '- Diuretics: **-azide, -amide, -ide**\n- β-blockers: **-olol**\n- ACE inhibitors: **-pril**\n- ARBs: **-artan**',
      },
      {
        front: 'Drug suffixes: **aldosterone blockers**, **CCBs**, **α-blockers**?',
        back: '- Aldosterone receptor blockers: **-one**\n- Calcium channel blockers: **-ipine**\n- α-blockers: **-zosin**',
      },
      {
        front: 'How do **diuretics** and **aldosterone blockers** lower BP?',
        back: 'They reduce **Na⁺ and water retention** → ↓ plasma volume → ↓ **preload/SV** → ↓ MABP.',
      },
      {
        front: 'How do **β1-blockers** lower BP?',
        back: 'Block β1 → ↓ **HR** and ↓ **contractility** → ↓ CO (also ↓ renin release) → ↓ MABP.',
      },
      {
        front: 'How do **ACE inhibitors** and **ARBs** lower BP?',
        back: '- **ACEi** block conversion of angiotensin I → **II**\n- **ARBs** block the **AII receptor**\n\nBoth → less vasoconstriction (↓ TPR) and less aldosterone (↓ volume).',
      },
      {
        front: 'How do **calcium channel blockers** and **α-blockers** lower BP?',
        back: '- **CCBs** — ↓ Ca²⁺ entry into vascular smooth muscle (and heart) → vasodilation\n- **α1-blockers** — block SNS vasoconstriction\n\nBoth → ↓ **TPR**.',
      },
      {
        front: 'What is used for **acute angina** or **hypertensive crisis**, and how does it work?',
        back: '**Nitric oxide donors** (e.g., **nitroglycerin**) → **direct vasodilation**.',
      },
      {
        front: 'Where are the **arterial baroreceptors**, and which nerves carry their signals?',
        back: '- **Carotid sinus** → **glossopharyngeal nerve (CN IX)**\n- **Aortic arch** → **vagus nerve (CN X)**\n\nBoth go to the **cardiovascular centers in the medulla**, which adjust sympathetic and vagal output.',
      },
    ],
  },
]);

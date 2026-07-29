const stages = [
  {
    slug: "discover",
    eyebrow: "Stage 1 · Opportunity discovery",
    title: "Is the problem specific, material, and sponsored?",
    summary: "The discovery record separates the stated workload and control requirements from assumptions that still need customer evidence.",
    evidence: [
      ["Known", "Private RAG over governed internal content with a stated peak and latency objective."],
      ["Unknown", "Token distribution, concurrency shape, quality threshold, retrieval design, baseline cost, and support model."],
      ["Risk", "Premature architecture or pricing precision would conceal the evidence gap rather than reduce it."]
    ],
    output: "Workload hypothesis, stakeholder map, evidence gaps, and conditional next action.",
    gate: "Named sponsor, representative workload owner, and agreement to a validation-planning workshop.",
    link: "https://github.com/daetan999/ai-infra-opportunity-workbench",
    image: "assets/opportunity-account-workspace.png",
    alt: "Fictional Opportunity Workbench account workspace",
    caption: "Synthetic opportunity workspace; sourced signals remain separate from interpretation."
  },
  {
    slug: "size",
    eyebrow: "Stage 2 · First-pass sizing",
    title: "What range and bottleneck require validation?",
    summary: "The planner treats 70B, 45 RPS, 900 ms, 18 TB, and 35% growth as a starting envelope—not enough information for a final configuration.",
    evidence: [
      ["Range", "Compare precision, accelerator memory, parallelism, batching, retrieval load, storage, network, and growth headroom."],
      ["Sensitive", "Token mix, concurrency, cache behavior, model quality, retrieval fan-out, and measured utilization."],
      ["Boundary", "No supplier quote, benchmark, topology approval, or bill of materials is implied."]
    ],
    output: "Indicative low/base/high capacity range, bottleneck hypothesis, and benchmark inputs.",
    gate: "Representative traffic trace and approved quality-versus-precision trade-off.",
    link: "https://github.com/daetan999/ai-infra-capacity-planner",
    image: "assets/capacity-planner-workspace.png",
    alt: "Fictional Capacity Planner workspace",
    caption: "Synthetic first-pass sizing workspace with visible assumptions and validation requirements."
  },
  {
    slug: "configure",
    eyebrow: "Stage 3 · Solution hypothesis",
    title: "Which pattern best fits the requirements—and what could disprove it?",
    summary: "The architecture view links every recommendation to a requirement, alternative, risk, and validation gate.",
    evidence: [
      ["Pattern", "Separate governed ingestion and indexing from identity-aware online retrieval and observable inference."],
      ["Alternatives", "Cloud, hybrid, and owned operating models remain candidates until benchmark and control evidence is available."],
      ["Controls", "Identity, audit, residency, retention, recovery, rollback, and source authorization require formal approval."]
    ],
    output: "Explainable architecture hypothesis, viable alternatives, risks, open questions, and PoC plan.",
    gate: "Architecture and security review using the same versioned workload evidence.",
    link: "https://github.com/daetan999/ai-infra-solution-configurator",
    image: "assets/solution-configurator-architecture.png",
    alt: "Fictional AI infrastructure solution configurator architecture",
    caption: "Synthetic solution hypothesis; the diagram is controlled, reviewable, and not an approved design."
  },
  {
    slug: "justify",
    eyebrow: "Stage 4 · Value engineering",
    title: "Is the proposed change financially defensible?",
    summary: "The business case must normalize the current and proposed states to one workload, term, growth profile, and service objective.",
    evidence: [
      ["Cost", "Compute, storage, network, migration, security review, operations, support, transition risk, and contract terms."],
      ["Confidence", "Observed, contracted, estimated, illustrative, and unknown inputs remain distinguishable."],
      ["Sensitivity", "Utilization, demand, pricing, implementation effort, and energy or facility costs can reshape the decision."]
    ],
    output: "TCO, unit economics, sensitivity, lineage, payback, ROI, and an executive review memo.",
    gate: "Current prices, measured throughput, approved baseline, and finance-owned value assumptions.",
    link: "https://github.com/daetan999/ai-infra-tco-workbench",
    image: "assets/tco-comparison.png",
    alt: "Fictional TCO Workbench comparison",
    caption: "Synthetic TCO comparison; formulas and evidence confidence remain reviewable beside the result."
  },
  {
    slug: "decide",
    eyebrow: "Stage 5 · Executive handoff",
    title: "Advance conditionally to a falsifiable PoC.",
    summary: "The opportunity is specific enough to test, but not mature enough for a final architecture or financial commitment.",
    evidence: [
      ["Advance", "The business problem, governed workload, initial demand envelope, and decision stakeholders are identifiable."],
      ["Condition", "Quality, throughput, latency, security, recovery, infrastructure fit, and unit cost need agreed pass/fail gates."],
      ["Stop rule", "A failed threshold reshapes or stops the design instead of being explained away after the test."]
    ],
    output: "One evidence-bounded AE-to-SE brief with recommendation, conditions, owners, and next action.",
    gate: "Discovery and validation workshop assigning evidence owners and PoC success criteria.",
    link: "evidence/northstar-ae-se-handoff.html",
    image: "assets/tco-comparison.png",
    alt: "Fictional executive decision and TCO review workspace",
    caption: "A controlled handoff preserves evidence, assumptions, gates, and the requested decision."
  }
];

const tabs = Array.from(document.querySelectorAll("[data-stage]"));
const panel = document.querySelector("#stage-panel");
const previousButton = document.querySelector("#previous-stage");
const nextButton = document.querySelector("#next-stage");
const progressFill = document.querySelector("#progress-fill");
const stageCount = document.querySelector("#stage-count");
let activeStage = 0;

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderEvidence(items) {
  const container = document.querySelector("#stage-evidence");
  container.replaceChildren();
  items.forEach(([status, detail]) => {
    const row = document.createElement("div");
    row.className = "evidence-item";
    const label = document.createElement("span");
    label.className = "evidence-status";
    label.textContent = status;
    const copy = document.createElement("p");
    copy.textContent = detail;
    row.append(label, copy);
    container.append(row);
  });
}

function renderStage(index, updateHash = true) {
  activeStage = Math.max(0, Math.min(index, stages.length - 1));
  const stage = stages[activeStage];
  setText("#stage-eyebrow", stage.eyebrow);
  setText("#stage-title", stage.title);
  setText("#stage-summary", stage.summary);
  setText("#stage-output", stage.output);
  setText("#stage-gate", stage.gate);
  setText("#stage-caption", stage.caption);
  setText("#stage-count", `Stage ${activeStage + 1} of ${stages.length}`);
  renderEvidence(stage.evidence);

  const link = document.querySelector("#stage-link");
  link.href = stage.link;
  const image = document.querySelector("#stage-image");
  image.src = stage.image;
  image.alt = stage.alt;

  tabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === activeStage;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  previousButton.disabled = activeStage === 0;
  nextButton.textContent = activeStage === stages.length - 1 ? "Return to discovery" : "Next stage";
  progressFill.style.width = `${((activeStage + 1) / stages.length) * 100}%`;
  panel.setAttribute("aria-labelledby", `stage-tab-${activeStage}`);
  if (updateHash) history.replaceState(null, "", `#${stage.slug}`);
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => renderStage(index));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + stages.length) % stages.length;
    tabs[nextIndex].focus();
    renderStage(nextIndex);
  });
});

previousButton.addEventListener("click", () => renderStage(activeStage - 1));
nextButton.addEventListener("click", () => renderStage(activeStage === stages.length - 1 ? 0 : activeStage + 1));

const copyButton = document.querySelector("#copy-handoff");
const copyStatus = document.querySelector("#copy-status");
const handoffSummary = "Northstar Mutual (fictional): advance conditionally to a controlled private-RAG PoC. Validate representative quality, 45 RPS peak demand, 900 ms end-to-end latency, security and recovery controls, infrastructure fit, and cost per 1,000 requests. Do not select a final architecture or commercial option until workload, benchmark, security, operating-model, and pricing evidence is approved.";

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(handoffSummary);
    copyStatus.textContent = "Handoff summary copied.";
  } catch {
    copyStatus.textContent = "Copy was unavailable. Open the full handoff to select the text manually.";
  }
});

const initialSlug = window.location.hash.slice(1);
const initialIndex = stages.findIndex((stage) => stage.slug === initialSlug);
renderStage(initialIndex >= 0 ? initialIndex : 0, initialIndex >= 0);

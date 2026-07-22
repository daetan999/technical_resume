# Dae Tan | AI Infrastructure Sales Portfolio

[![Target](https://img.shields.io/badge/Target-BDR%20%C2%B7%20Account%20Executive%20%C2%B7%20Solutions%20Sales-111827)](#sales-workflow)
[![Coverage](https://img.shields.io/badge/Coverage-Discovery%20%C2%B7%20Sizing%20%C2%B7%20Value%20Engineering%20%C2%B7%20AI%20Infrastructure-2563EB)](#featured-evidence)
[![License](https://img.shields.io/badge/License-MIT-6B7280)](LICENSE)

Technical-commercial evidence supporting AI infrastructure business development, account executive, and solutions-sales roles.

The repositories model the work around a complex infrastructure sale: account research, customer discovery, workload qualification, AE-to-SE handoff, solution framing, and business-case development. Professional experience and revenue outcomes remain on the one-page resume; this portfolio supplies the technical context and decision artifacts behind credible customer conversations.

[LinkedIn](https://www.linkedin.com/in/dae-tan-1a2b3c) · [Worked Private-RAG Case](docs/tco-worked-example.md) · [Value Engineering Method](docs/value-engineering.md) · [Resume Project Mapping](docs/resume-project-mapping.md)

## Sales Workflow

| Stage | Seller question | Primary artifact | Output passed forward |
|---|---|---|---|
| Account discovery | Is there a specific, evidenced opportunity worth pursuing? | [Opportunity & Discovery Workbench](https://github.com/daetan999/ai-infra-opportunity-workbench) | Workload hypothesis, stakeholder map, risks, qualification, and next action |
| Technical qualification | What infrastructure range and bottleneck should be validated with an SE? | [Capacity & Commercial Sizing Planner](https://github.com/daetan999/ai-infra-capacity-planner) | Indicative range, missing inputs, sensitivity, and validation plan |
| Value engineering | Is the proposed change financially defensible? | [TCO & ROI Workbench](https://github.com/daetan999/ai-infra-tco-workbench) | TCO, unit economics, sensitivity, payback, ROI, and executive report |
| Technical context | Which workload, serving, governance, and reliability constraints matter? | [Enterprise MLOps Platform](https://github.com/daetan999/mlops-hosp) | Architecture context and discovery questions for technical specialists |
| Decision handoff | What should the customer and account team do next? | [Worked Private-RAG Case](docs/tco-worked-example.md) | Advance, reshape, nurture, or disqualify with explicit evidence gaps |

## Featured Evidence

### 1. Opportunity & Discovery Workbench

**Account research, technical discovery, and qualification**

<a href="https://github.com/daetan999/ai-infra-opportunity-workbench">
  <img src="https://raw.githubusercontent.com/daetan999/ai-infra-opportunity-workbench/main/docs/assets/opportunity-dashboard.png" alt="AI infrastructure opportunity dashboard" width="1200">
</a>

A qualification workspace that converts account signals, workload hypotheses, stakeholder access, and discovery evidence into a transparent next-action recommendation.

**Sales evidence**

- Separates sourced account signals from seller interpretation and confidence.
- Maps economic buyers, technical authorities, champions, procurement stakeholders, and single-threading gaps.
- Scores pain, urgency, workload fit, buying group, decision process, competition, and evidence quality.
- Converts qualified opportunities into bounded PoC handoffs with acceptance criteria, owners, dates, rollback conditions, and a decision gate.
- Recommends whether to advance, reshape, nurture, or disqualify rather than forcing every opportunity forward.

**Implementation evidence:** FastAPI, SQLAlchemy, SQLite, server-rendered UI, JSON/Markdown exports, 76 tests, 96%+ branch coverage, CI, and a clean container workflow.

**Public boundary:** Fictional accounts and decision-support logic; not a production CRM, revenue forecast, or claim of closed-won results.

**Repository:** [`ai-infra-opportunity-workbench`](https://github.com/daetan999/ai-infra-opportunity-workbench)

---

### 2. Capacity & Commercial Sizing Planner

**AE-to-SE workload qualification and first-pass sizing**

<a href="https://github.com/daetan999/ai-infra-capacity-planner">
  <img src="https://raw.githubusercontent.com/daetan999/ai-infra-capacity-planner/main/docs/assets/capacity-planner-workspace.png" alt="AI infrastructure capacity planning workspace" width="1200">
</a>

A local-first planner that converts workload assumptions into editable infrastructure and commercial ranges without presenting false bill-of-materials precision.

**Sales evidence**

- Supports LLM training, LLM inference, RAG, vision inference, and batch AI/HPC workloads.
- Produces low/base/high ranges for accelerators, CPU, memory, storage, network, racks, power, utilization, and monthly compute cost.
- Exposes likely bottlenecks across compute, memory, storage, network, latency, and completion window.
- Shows sensitivity to batching, quantization, demand growth, target utilization, and latency expectations.
- Converts missing inputs into follow-up discovery questions, confidence deductions, and a proposed validation plan.
- Produces a reproducible starting point for deeper sizing with Solutions Engineers rather than replacing formal benchmarking.

**Implementation evidence:** FastAPI, Pydantic, SQLite, YAML profiles, comparison and export workflows, 65 tests, 92%+ branch coverage, CI, and container validation.

**Public boundary:** Indicative planning ranges; not a benchmark, supplier quote, topology validation, or final bill of materials.

**Repository:** [`ai-infra-capacity-planner`](https://github.com/daetan999/ai-infra-capacity-planner)

---

### 3. TCO & ROI Workbench

**Value engineering and executive business-case development**

<a href="https://github.com/daetan999/ai-infra-tco-workbench">
  <img src="https://raw.githubusercontent.com/daetan999/ai-infra-tco-workbench/main/docs/assets/tco-comparison.png" alt="AI infrastructure TCO comparison workspace" width="1000">
</a>

A deterministic workspace for comparing AI infrastructure operating models with visible assumptions, calculation lineage, sensitivity, and executive reporting.

**Sales evidence**

- Compares current and proposed operating models across three- and five-year TCO.
- Calculates normalized unit economics, savings, net value, ROI, payback, and break-even status.
- Tests downside sensitivity across utilization, compute price, demand growth, and energy price.
- Records evidence references, confidence labels, coverage scoring, and formula-level lineage.
- Preserves immutable scenario versions so previously reviewed analyses are not silently recalculated.
- Exports JSON, CSV, and an executive PDF business case for technical, finance, procurement, and leadership review.

**Implementation evidence:** FastAPI, a Decimal-based financial engine, SQLite, ReportLab, Python and browser test suites, branch-coverage enforcement, dependency audits, CI, and container checks.

**Public boundary:** Fictional or user-entered assumptions; not live pricing, financial advice, supplier terms, or guaranteed ROI.

**Repository:** [`ai-infra-tco-workbench`](https://github.com/daetan999/ai-infra-tco-workbench)

---

### 4. Enterprise MLOps Platform

**Technical foundation for credible infrastructure discovery**

<a href="https://github.com/daetan999/mlops-hosp">
  <img src="https://raw.githubusercontent.com/daetan999/mlops-hosp/main/docs/assets/platform-architecture.svg" alt="Enterprise MLOps platform architecture" width="1200">
</a>

A sanitized reference blueprint for understanding how data, feature management, model lifecycle, GPU serving, monitoring, and reliability interact across enterprise ML workloads.

**Technical context for sales conversations**

- Kafka and Airflow ingestion into shared Feast feature definitions, with Redis online access and Snowflake point-in-time training data.
- PyTorch training, MLflow registry gates, ONNX packaging, Kubernetes deployment, and NVIDIA Triton serving.
- Dynamic batching, multi-model concurrency, staged rollout, horizontal scaling, and drift-response controls.
- Representative workloads across forecasting, pricing, anomaly detection, predictive maintenance, clustering, feasibility, and NLP routing.
- A falsifiable GPU-serving PoC plan covering utilization, throughput, p99 latency, fleet size, reliability, and cost per inference.

**Public boundary:** Representative contracts, configuration shapes, model skeletons, diagrams, and controls are published. Proprietary data, integrations, images, clusters, and production endpoints are excluded.

**Repository:** [`mlops-hosp`](https://github.com/daetan999/mlops-hosp)

## Supporting Enterprise Artifacts

These repositories add useful context but are not part of the default three-project paper-resume selection.

| Project | Supporting role |
|---|---|
| [GCP Data & Intelligence Platform](https://github.com/daetan999/gcp-data-platform-blueprint) | Governed BigQuery data, Cloud Run operations, model boundaries, failure policies, recipient controls, and reversible environment promotion. |
| [Enterprise AI Solution Configurator](https://github.com/daetan999/ai-infra-solution-configurator) | Guided requirements capture, versioned architecture rules, alternatives, risks, validation gates, and controlled diagram generation for solution workshops. |

The [Agentic FP&A Analytics blueprint](https://github.com/daetan999/adk-fpa-agent-blueprint) is intentionally not featured. Its governance concepts remain useful, but the public repository does not implement the complete guarded execution, authentication, deployment, and evaluation path.

## End-to-End Case Material

The portfolio is designed to be reviewed as one customer decision rather than a collection of disconnected applications.

- [Worked Private-RAG Case](docs/tco-worked-example.md) follows a fictional regulated workload from discovery through sizing, architecture, validation, and financial review.
- [Portfolio Case Contract](docs/portfolio-case-contract.md) keeps workload assumptions and stage ownership consistent across the workbenches.
- [Value Engineering Method](docs/value-engineering.md) connects infrastructure signals to cost, risk, capacity, and business-value hypotheses.
- [TCO Sample Report](https://github.com/daetan999/ai-infra-tco-workbench/blob/main/docs/examples/fictional-northstar-private-rag-business-case.pdf) shows the executive reporting output.

## Evidence Standard

- All bundled accounts, organizations, workloads, prices, stakeholders, and outcomes are synthetic, fictional, sanitized, aggregated, or clearly labelled illustrative.
- Runnable workbenches use deterministic scoring, sizing, rules, or financial engines; generated narrative cannot silently change the result.
- Blueprint repositories distinguish published architecture and contracts from omitted proprietary integrations and environments.
- No repository claims a live customer deployment, current vendor pricing, guaranteed performance, final architecture approval, or guaranteed ROI.
- Tests, screenshots, diagrams, exports, limitations, and run instructions are documented in the individual repositories.

## Review Paths

**Thirty-second review:** scan the Sales Workflow table and the Opportunity, Capacity, and TCO visuals.

**Five-minute recruiter review:** inspect the Opportunity qualification model, Capacity assumptions and validation questions, TCO comparison, and MLOps architecture.

**Technical-commercial interview review:** trace the fictional Private-RAG case from discovery to AE-to-SE handoff and executive business case, then inspect the deterministic scoring, sizing, and financial engines.

## License

Portfolio documentation is released under the [MIT License](LICENSE). Each linked repository carries its own license and public-artifact boundary.

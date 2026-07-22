# Dae Tan | AI Infrastructure Solutions Portfolio

[![Focus](https://img.shields.io/badge/Focus-AI%20Infrastructure%20Solutions-111827)](#featured-evidence)
[![Coverage](https://img.shields.io/badge/Coverage-GPU%20Serving%20%C2%B7%20Cloud%20%C2%B7%20Sizing%20%C2%B7%20TCO-2563EB)](#featured-evidence)
[![License](https://img.shields.io/badge/License-MIT-6B7280)](LICENSE)

Technical evidence supporting an AI infrastructure solutions-sales profile. The portfolio focuses on workload architecture, GPU serving, cloud operating controls, first-pass capacity planning, technical discovery, and value engineering.

The one-page resume carries career chronology and commercial results. This repository concentrates on the technical artifacts, assumptions, tests, diagrams, and decision outputs behind credible customer conversations.

[LinkedIn](https://www.linkedin.com/in/dae-tan-1a2b3c) · [Value Engineering Method](docs/value-engineering.md) · [Worked Private-RAG Case](docs/tco-worked-example.md) · [Resume Project Mapping](docs/resume-project-mapping.md)

## Featured Evidence

These four projects form the strongest default review path. They are deliberately not presented as equivalent: one establishes infrastructure context, while three are runnable decision-support applications.

| Project | Status | Primary evidence | Customer or account-team question |
|---|---|---|---|
| [Enterprise MLOps Platform](https://github.com/daetan999/mlops-hosp) | Sanitized reference blueprint | Data-to-serving architecture, Triton/EKS contracts, GPU-serving validation plan | What workload, serving, governance, and reliability constraints matter? |
| [Capacity & Commercial Sizing Planner](https://github.com/daetan999/ai-infra-capacity-planner) | Runnable local application | Explainable capacity ranges, sensitivity, bottlenecks, validation plan | What indicative infrastructure range should be benchmarked? |
| [TCO & ROI Workbench](https://github.com/daetan999/ai-infra-tco-workbench) | Runnable local application | Deterministic financial engine, lineage, sensitivity, executive exports | Is the proposed change financially defensible? |
| [Opportunity & Discovery Workbench](https://github.com/daetan999/ai-infra-opportunity-workbench) | Runnable local application | Evidence-based qualification, stakeholder map, bounded PoC handoff | Is this a specific, evidenced opportunity worth advancing? |

## 1. Enterprise MLOps Platform

**Infrastructure and workload foundation**

<a href="https://github.com/daetan999/mlops-hosp">
  <img src="https://raw.githubusercontent.com/daetan999/mlops-hosp/main/docs/assets/platform-architecture.svg" alt="Enterprise MLOps platform architecture" width="1200">
</a>

A sanitized reference blueprint for operating multiple ML workloads across data ingestion, feature management, training, registry gates, GPU serving, monitoring, and drift response.

**Technical scope**

- Kafka and Airflow ingestion into shared Feast feature definitions, with Redis online access and Snowflake point-in-time training data.
- PyTorch training, MLflow registry gates, ONNX packaging, Kubernetes deployment, and NVIDIA Triton serving.
- Dynamic batching, multi-model concurrency, staged rollout, horizontal scaling, and drift-response controls.
- Representative workloads across forecasting, pricing, anomaly detection, predictive maintenance, clustering, feasibility, and NLP routing.
- A falsifiable GPU-serving PoC covering utilization, throughput, p99 latency, fleet size, reliability, and cost per inference.

**Public boundary:** Representative contracts, configuration shapes, model skeletons, diagrams, and controls are published. Proprietary data, integrations, images, clusters, and production endpoints are excluded.

**Repository:** [`mlops-hosp`](https://github.com/daetan999/mlops-hosp)

---

## 2. Capacity & Commercial Sizing Planner

**First-pass workload and infrastructure sizing**

<a href="https://github.com/daetan999/ai-infra-capacity-planner">
  <img src="https://raw.githubusercontent.com/daetan999/ai-infra-capacity-planner/main/docs/assets/capacity-planner-workspace.png" alt="AI infrastructure capacity planning workspace" width="1200">
</a>

A local-first planner that converts workload assumptions into editable infrastructure ranges without presenting false bill-of-materials precision.

**Decision evidence**

- LLM training, LLM inference, RAG, vision inference, and batch AI/HPC workload modes.
- Configurable illustrative accelerator profiles rather than hard-coded vendor claims.
- Low/base/high ranges for accelerators, CPU, memory, storage, network, racks, power, utilization, and monthly compute cost.
- Bottleneck hypotheses across compute, memory, storage, network, latency, and completion window.
- Sensitivity to batching, quantization, demand growth, target utilization, and latency expectations.
- Confidence deductions, missing inputs, follow-up discovery questions, and a proposed validation plan.

**Implementation evidence:** FastAPI, Pydantic, SQLite, YAML profiles, comparison and export workflows, 65 tests, 92%+ branch coverage, CI, and container validation.

**Public boundary:** Indicative planning ranges; not a benchmark, supplier quote, topology validation, or final bill of materials.

**Repository:** [`ai-infra-capacity-planner`](https://github.com/daetan999/ai-infra-capacity-planner)

---

## 3. TCO & ROI Workbench

**Value engineering and investment decision support**

<a href="https://github.com/daetan999/ai-infra-tco-workbench">
  <img src="https://raw.githubusercontent.com/daetan999/ai-infra-tco-workbench/main/docs/assets/tco-comparison.png" alt="AI infrastructure TCO comparison workspace" width="1100">
</a>

A deterministic workspace for comparing AI infrastructure operating models with visible assumptions, calculation lineage, sensitivity, and executive reporting.

**Decision evidence**

- Three- and five-year TCO, normalized unit economics, savings, net value, ROI, payback, and break-even analysis.
- Explicit assumptions for demand, growth, accelerator count, utilization, compute price, storage, network, power, PUE, staffing, transition cost, and contract horizon.
- Four-way sensitivity across utilization, compute price, demand growth, and energy price.
- Evidence references, confidence labels, coverage scoring, and formula-level lineage.
- Immutable scenario versions so previously reviewed analyses are not silently recalculated.
- JSON, CSV, and executive PDF exports, including a fictional worked business case.

**Implementation evidence:** FastAPI, a Decimal-based financial engine, SQLite, ReportLab, Python and browser test suites, branch-coverage enforcement, dependency audits, CI, and container checks.

**Public boundary:** Fictional or user-entered assumptions; not live pricing, financial advice, supplier terms, or guaranteed ROI.

**Repository:** [`ai-infra-tco-workbench`](https://github.com/daetan999/ai-infra-tco-workbench)

---

## 4. Opportunity & Discovery Workbench

**Technical-commercial discovery and qualification**

<a href="https://github.com/daetan999/ai-infra-opportunity-workbench">
  <img src="https://raw.githubusercontent.com/daetan999/ai-infra-opportunity-workbench/main/docs/assets/opportunity-dashboard.png" alt="AI infrastructure opportunity dashboard" width="1200">
</a>

A qualification workspace that converts account signals, workload hypotheses, stakeholder access, and discovery evidence into a transparent next-action recommendation.

**Decision evidence**

- Deterministic scoring across pain, urgency, workload fit, buying group, decision process, competition, and evidence quality.
- Separate storage of sourced observations, seller interpretation, confidence, and missing evidence.
- Buying-group mapping, champion-strength checks, and single-threading warnings.
- Bounded PoC handoff with acceptance criteria, evidence owners, dates, rollback conditions, and a decision gate.
- Recommendations to advance, reshape, nurture, or disqualify.

**Implementation evidence:** FastAPI, SQLAlchemy, SQLite, server-rendered UI, JSON/Markdown exports, 76 tests, 96%+ branch coverage, CI, and a clean container workflow.

**Public boundary:** Fictional accounts and decision-support logic; not a production CRM, forecast, or claim of closed-won results.

**Repository:** [`ai-infra-opportunity-workbench`](https://github.com/daetan999/ai-infra-opportunity-workbench)

## Supporting Enterprise Artifacts

These repositories add useful context but are not part of the default four-project recruiter path.

| Project | Why it remains useful | Why it is supporting rather than featured |
|---|---|---|
| [GCP Data & Intelligence Platform](https://github.com/daetan999/gcp-data-platform-blueprint) | Shows governed BigQuery data, Cloud Run operations, model boundaries, failure policies, recipient controls, and reversible environment promotion. | A sanitized architectural blueprint rather than a deployable public cloud environment. |
| [Enterprise AI Solution Configurator](https://github.com/daetan999/ai-infra-solution-configurator) | Shows requirements capture, versioned architecture rules, alternatives, risks, validation gates, and controlled diagram generation. | Overlaps the sizing and solution-framing workflow already represented by the Capacity and TCO projects. |

The [Agentic FP&A Analytics blueprint](https://github.com/daetan999/adk-fpa-agent-blueprint) is intentionally not featured. Its governance concepts are useful, but the guarded SQL execution path, authentication, complete frontend, deployment, and evaluation harness are not implemented in the public repository.

## End-to-End Case Material

The portfolio is strongest when reviewed as one customer decision rather than seven disconnected applications.

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

**Thirty-second review:** scan the Featured Evidence table and the four project visuals.

**Five-minute recruiter review:** inspect the MLOps architecture, Capacity assumptions, TCO comparison, and Opportunity qualification model.

**Technical review:** open each deterministic engine or rules module, read its architecture or methodology document, and run the documented lint, test, coverage, and container commands.

## License

Portfolio documentation is released under the [MIT License](LICENSE). Each linked repository carries its own license and public-artifact boundary.

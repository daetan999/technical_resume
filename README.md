# Dae Tan | AI Infrastructure Solutions Portfolio

[![Focus](https://img.shields.io/badge/Focus-AI%20Infrastructure%20Solutions-111827)](#portfolio-map)
[![Technical](https://img.shields.io/badge/Technical-GPU%20Serving%20%C2%B7%20MLOps%20%C2%B7%20Cloud-2563EB)](#technical-foundations)
[![Commercial](https://img.shields.io/badge/Commercial-Discovery%20%C2%B7%20Sizing%20%C2%B7%20TCO-0F766E)](#customer-to-decision-workflow)
[![License](https://img.shields.io/badge/License-MIT-6B7280)](LICENSE)

A technical portfolio built to complement my one-page resume. The seven repositories cover enterprise MLOps, GPU serving, governed cloud platforms, AI workload discovery, capacity planning, solution architecture, and TCO/ROI modelling.

Each project is presented as an inspectable artifact rather than a skills list: architecture, workflow, decision logic, screenshots, tests, exports, assumptions, and public-use boundaries.

[LinkedIn](https://www.linkedin.com/in/dae-tan-1a2b3c) · [Value Engineering Method](docs/value-engineering.md) · [Resume Project Mapping](docs/resume-project-mapping.md)

## Portfolio Map

| Stage | Customer or account-team question | Primary artifact |
|---|---|---|
| Technical context | What workload, data, serving, governance, and operating constraints matter? | [Enterprise MLOps Platform](https://github.com/daetan999/mlops-hosp), [GCP Data & Intelligence Platform](https://github.com/daetan999/gcp-data-platform-blueprint), [Agentic FP&A Analytics](https://github.com/daetan999/adk-fpa-agent-blueprint) |
| Discovery | Is there a specific, evidenced, multithreaded opportunity worth progressing? | [Opportunity & Discovery Workbench](https://github.com/daetan999/ai-infra-opportunity-workbench) |
| First-pass sizing | What indicative infrastructure range and bottleneck should be validated? | [Capacity & Commercial Sizing Planner](https://github.com/daetan999/ai-infra-capacity-planner) |
| Solution workshop | Which architecture pattern fits the requirements, constraints, and trade-offs? | [Enterprise AI Solution Configurator](https://github.com/daetan999/ai-infra-solution-configurator) |
| Value engineering | Is the proposed change financially defensible under sensitivity? | [TCO & ROI Workbench](https://github.com/daetan999/ai-infra-tco-workbench) |

## Customer-to-Decision Workflow

The four runnable workbenches follow one enterprise AI infrastructure opportunity from qualification to an investment decision. The outputs are designed to hand evidence forward, not force a positive recommendation.

### 1. Opportunity & Discovery Workbench

> **Account-team question:** Is this a real, winnable infrastructure opportunity, or are we advancing on activity and optimism?

[![Opportunity portfolio dashboard](https://raw.githubusercontent.com/daetan999/ai-infra-opportunity-workbench/main/docs/assets/opportunity-dashboard.png)](https://github.com/daetan999/ai-infra-opportunity-workbench)

A local-first qualification workspace that converts account signals, workload hypotheses, stakeholder access, and discovery evidence into a transparent next-action recommendation.

**Inside the repository**

- Deterministic scoring across pain, urgency, workload fit, buying group, decision process, competition, and evidence quality.
- Separate storage of sourced observations, seller interpretation, confidence, and missing evidence.
- Buying-group mapping, champion-strength checks, and single-threading warnings.
- Bounded PoC handoff with acceptance criteria, evidence owners, dates, rollback conditions, and a decision gate.
- Structured recommendations to advance, reshape, nurture, or disqualify.

**Implementation evidence:** FastAPI, SQLAlchemy, SQLite, server-rendered UI, JSON/Markdown exports, 76 tests, 96%+ branch coverage, CI, and a clean container workflow.

**Public boundary:** Fictional accounts and decision-support logic; not a production CRM, forecast, or claim of closed-won results.

**Repository:** [`ai-infra-opportunity-workbench`](https://github.com/daetan999/ai-infra-opportunity-workbench)

---

### 2. Capacity & Commercial Sizing Planner

> **Account-team question:** What rough infrastructure range should be validated before a Solutions Engineer or benchmark team invests deeper effort?

[![Capacity scenario comparison](https://raw.githubusercontent.com/daetan999/ai-infra-capacity-planner/main/docs/assets/capacity-planner-comparison.png)](https://github.com/daetan999/ai-infra-capacity-planner)

An explainable first-pass planner for translating AI workload inputs into editable infrastructure and commercial ranges without presenting false bill-of-materials precision.

**Inside the repository**

- Workload modes for LLM training, LLM inference, RAG, vision inference, and batch AI/HPC.
- Configurable illustrative accelerator profiles rather than hard-coded vendor claims.
- Low/base/high ranges for accelerators, CPU, memory, storage, network, racks, power, utilization, and monthly compute cost.
- Bottleneck hypotheses across compute, memory, storage, network, latency, and completion window.
- Sensitivity to batching, quantization, demand growth, target utilization, and latency expectations.
- Confidence deductions, missing inputs, follow-up discovery questions, and a proposed validation plan.

**Implementation evidence:** FastAPI, Pydantic, SQLite, YAML profiles, comparison and export workflows, 65 tests, 92%+ branch coverage, CI, and container validation.

**Public boundary:** Indicative planning ranges; not a benchmark, supplier quote, topology validation, or final bill of materials.

**Repository:** [`ai-infra-capacity-planner`](https://github.com/daetan999/ai-infra-capacity-planner)

---

### 3. Enterprise AI Solution Configurator

> **Customer-workshop question:** Which solution pattern fits the workload, governance, placement, resilience, and operating requirements—and what still needs validation?

[![Completed solution architecture and rationale](https://raw.githubusercontent.com/daetan999/ai-infra-solution-configurator/main/docs/assets/configurator-architecture.png)](https://github.com/daetan999/ai-infra-solution-configurator)

A guided requirements and recommendation workspace that converts discovery inputs into an explainable first-pass architecture hypothesis.

**Inside the repository**

- Five-stage requirements workflow covering workload, data governance, placement, existing platforms, security, resilience, operations, budget, timeline, and growth.
- Versioned deterministic rules spanning compute, accelerators, orchestration, serving, networking, storage, data, identity, observability, resilience, and migration.
- Traceable rationale for each recommendation, including the triggering requirement, alternative, risk, and required validation.
- Contradiction checks, confidence deductions, open questions, and recommended specialist workshops.
- Immutable assessment runs and controlled SVG architecture generation.
- JSON, Markdown, and SVG solution exports.

**Implementation evidence:** FastAPI, Pydantic, SQLite, Jinja2, deterministic rules and diagram engines, 80 tests, 91%+ branch coverage, browser journeys, CI, and a clean container build.

**Public boundary:** Generic vendor-neutral solution hypotheses; not a final architecture approval, security design, benchmark, or bill of materials.

**Repository:** [`ai-infra-solution-configurator`](https://github.com/daetan999/ai-infra-solution-configurator)

---

### 4. TCO & ROI Workbench

> **Investment question:** Does the proposed infrastructure change remain defensible when cost, utilization, growth, and evidence quality move against the base case?

[![Saved TCO decision comparison](https://raw.githubusercontent.com/daetan999/ai-infra-tco-workbench/main/docs/assets/tco-comparison.png)](https://github.com/daetan999/ai-infra-tco-workbench)

A deterministic value-engineering workspace for comparing AI infrastructure operating models with visible assumptions, calculation lineage, sensitivity, and executive reporting.

**Inside the repository**

- Three- and five-year TCO, normalized unit economics, savings, net value, ROI, payback, and break-even analysis.
- Explicit inputs for demand, growth, accelerator count, utilization, compute price, storage, network, power, PUE, staffing, transition cost, and contract horizon.
- Four-way sensitivity across utilization, compute price, demand growth, and energy price.
- Evidence references, confidence labels, coverage scoring, and formula-level lineage.
- Immutable scenario versions so previously reviewed analyses are not silently recalculated.
- JSON, CSV, and executive PDF exports, including a fictional worked business case.

**Implementation evidence:** FastAPI, Decimal-based financial engine, SQLite, ReportLab, Python and browser test suites, branch-coverage enforcement, dependency audits, CI, and container checks.

**Public boundary:** Fictional or user-entered assumptions; not live pricing, financial advice, supplier terms, or guaranteed ROI.

**Repository:** [`ai-infra-tco-workbench`](https://github.com/daetan999/ai-infra-tco-workbench)

## Technical Foundations

These repositories provide the workload, cloud, data, and application context needed before discovery, sizing, architecture, or financial modelling can be credible.

### 5. Enterprise MLOps Platform

[![Enterprise MLOps platform architecture](https://raw.githubusercontent.com/daetan999/mlops-hosp/main/docs/assets/platform-architecture.svg)](https://github.com/daetan999/mlops-hosp)

A sanitized reference blueprint for operating multiple ML workloads across data ingestion, feature management, training, registry gates, GPU serving, monitoring, and drift response.

**Architecture and operating scope**

- Kafka and Airflow ingestion into a shared Feast feature layer with Redis online access and Snowflake point-in-time training data.
- PyTorch training, MLflow registry gates, ONNX packaging, Kubernetes deployment, and NVIDIA Triton serving.
- Dynamic batching, multi-model concurrency, staged rollout, and horizontal scaling considerations.
- Drift policies separating warning, automated retraining, and halt-and-page responses.
- Representative model families across forecasting, pricing, anomaly detection, predictive maintenance, clustering, feasibility, and NLP routing.
- Falsifiable GPU-serving PoC covering utilization, throughput, p99 latency, fleet size, reliability, and cost per inference.

**Public boundary:** Representative contracts, configuration shapes, model skeletons, diagrams, and controls; proprietary data, integrations, images, clusters, and production endpoints are excluded.

**Repository:** [`mlops-hosp`](https://github.com/daetan999/mlops-hosp)

---

### 6. GCP Data & Intelligence Platform

[![GCP data platform architecture](https://raw.githubusercontent.com/daetan999/gcp-data-platform-blueprint/main/docs/assets/gcp-infrastructure.svg)](https://github.com/daetan999/gcp-data-platform-blueprint)

A sanitized Google Cloud blueprint covering governed data movement, serverless AI products, model boundaries, recipient and preference controls, and reversible environment promotion.

**Architecture and operating scope**

- Private-subnet ingestion and processing with Dataflow, Dataproc, Composer, Cloud Storage, and BigQuery silver/gold layers.
- Cloud Run and Cloud Scheduler for independently operated, scale-to-zero workloads.
- Seven AI newsletter workflows and weekly/monthly performance reporting services.
- Gemini restricted to curation and narrative while deterministic code validates dates and calculates KPIs.
- BigQuery-managed recipient and preference configuration with encrypted unsubscribe tokens and explicit failure contracts.
- Sandbox-to-UAT-to-production migration controls using paused schedules, disabled-send validation, rollback, and configuration-as-data.

**Public boundary:** Architectural blueprint and representative code/SQL shapes; no production source, recipients, credentials, employer identifiers, or deployable cloud account.

**Repository:** [`gcp-data-platform-blueprint`](https://github.com/daetan999/gcp-data-platform-blueprint)

---

### 7. Agentic FP&A Analytics

[![Governed agent topology](https://raw.githubusercontent.com/daetan999/adk-fpa-agent-blueprint/main/docs/assets/agent-topology.svg)](https://github.com/daetan999/adk-fpa-agent-blueprint)

A governed application blueprint for natural-language finance and operational analysis over approved BigQuery data.

**Control and application scope**

- Next.js-to-Google-ADK request boundary with Gemini planning and one guarded SQL execution path.
- Approved-table, KPI, fiscal-calendar, property-resolution, query-cost, and result-volume contracts.
- Two-step identifier resolution to prevent duplicate-row inflation and source-system mismatches.
- Explicit treatment of non-additive measures such as occupancy, ADR, and RevPAR.
- Data-quality flags for impossible outputs instead of silent correction.
- Clear separation between model planning/narrative and deterministic SQL calculation.

**Public boundary:** Control blueprint rather than a runnable end-to-end product; warehouse enforcement, authentication, complete frontend behavior, deployment, and evaluation are not implemented in the public tree.

**Repository:** [`adk-fpa-agent-blueprint`](https://github.com/daetan999/adk-fpa-agent-blueprint)

## Evidence Standards

- All bundled accounts, organizations, workloads, prices, stakeholders, and outcomes are synthetic, fictional, sanitized, aggregated, or clearly labelled illustrative.
- Runnable workbenches use deterministic scoring, sizing, rules, or financial engines; generated narrative cannot silently change the result.
- Blueprint repositories distinguish published contracts and architecture from omitted proprietary integrations and environments.
- No repository claims a live customer deployment, current vendor pricing, guaranteed performance, final architecture approval, or guaranteed ROI.
- Tests, screenshots, diagrams, exports, limitations, and run instructions are documented in the individual repositories.

## Review Paths

**Five-minute recruiter review**

1. Scan the [portfolio map](#portfolio-map).
2. Open the Opportunity dashboard and qualification model.
3. Review the Capacity comparison and its visible assumptions.
4. Inspect the Configurator architecture output.
5. Open the TCO comparison and fictional executive report.

**Technical review**

1. Inspect the MLOps and GCP architecture diagrams.
2. Open the deterministic engine or rules module in each runnable workbench.
3. Read the linked architecture, guardrail, or methodology document.
4. Run the documented lint, test, coverage, and container commands.

## Supporting Materials

- [Value Engineering Method](docs/value-engineering.md) — connects infrastructure signals to cost, risk, capacity, and business-value hypotheses.
- [TCO Worked Example](docs/tco-worked-example.md) — follows one fictional private-RAG scenario from discovery inputs to a falsifiable validation plan.
- [Portfolio Case Contract](docs/portfolio-case-contract.md) — keeps workload assumptions and stage ownership consistent across the commercial workbenches.
- [Resume Project Mapping](docs/resume-project-mapping.md) — provides accurate project descriptions and role-specific project selections.

## License

Portfolio documentation is released under the [MIT License](LICENSE). Each linked repository carries its own license and public-artifact boundary.

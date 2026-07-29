# Dae Tan | Technical Portfolio

[![Enterprise delivery](https://img.shields.io/badge/enterprise%20delivery-3%20systems-17324D?style=flat-square&labelColor=111820)](#enterprise-delivery)
[![Independent solutions](https://img.shields.io/badge/independent%20solutions-4%20workbenches-2F5973?style=flat-square&labelColor=111820)](#independent-ai-infrastructure-workflow)
[![Public artifacts](https://img.shields.io/badge/public%20artifacts-sanitized%20%26%20synthetic-6C3947?style=flat-square&labelColor=111820)](#portfolio-standards)
[![License](https://img.shields.io/badge/license-MIT-667454?style=flat-square&labelColor=111820)](LICENSE)

A technical-commercial portfolio spanning enterprise cloud delivery, governed analytics, MLOps and GPU serving, and independently built tools for AI-infrastructure customer decisions.

The enterprise work covers systems I built or contributed to at Frasers Hospitality. The independent workbenches connect opportunity discovery, workload sizing, solution configuration, and financial justification into one reviewable workflow.

[LinkedIn](https://www.linkedin.com/in/dae-tan-1a2b3c) · [Enterprise delivery](#enterprise-delivery) · [Independent solutions](#independent-ai-infrastructure-workflow) · [Worked Private-RAG case](docs/tco-worked-example.md) · [Value-engineering method](docs/value-engineering.md)

## Enterprise delivery

Selected work completed within Frasers Hospitality's Digital Intelligence environment. The public case studies and linked repositories are sanitized reconstructions; production code, company data, credentials, internal identifiers, prompts, endpoints, and screenshots are excluded.

### 1. Production Intelligence Automation on GCP

**Frasers Hospitality · Digital Intelligence · direct delivery and operation**

<a href="docs/enterprise-delivery/gcp-intelligence-automation.md">
  <img src="docs/assets/enterprise-gcp-delivery.svg" alt="Sanitized GCP intelligence architecture showing scheduled ingestion, controlled model use, BigQuery configuration, Cloud Run execution, and accepted delivery" width="1200">
</a>

Built and operated seven intelligence workflows and two recurring reporting paths using Cloud Run, Cloud Scheduler, Cloud Storage, BigQuery, Vertex AI, Secret Manager, and SendGrid.

**Operating controls:** deterministic KPI calculation, readiness gates, resilient feed handling, governed recipients and preferences, accepted-delivery checks, sent-history protection, and reversible sandbox-to-production procedures.

**Outcome:** 60% faster reporting turnaround and 100+ annual hours saved across a wider reporting environment covering 45+ datasets and 80+ properties.

[Read the GCP delivery case study](docs/enterprise-delivery/gcp-intelligence-automation.md) · [Open the sanitized GCP blueprint](https://github.com/daetan999/gcp-data-platform-blueprint)

---

### 2. Enterprise MLOps & GPU Serving

**Frasers Hospitality · collaborative platform contribution**

<a href="docs/enterprise-delivery/enterprise-mlops-gpu-serving.md">
  <img src="docs/assets/enterprise-mlops-delivery.svg" alt="Sanitized MLOps contribution map covering data pipelines, feature serving, model lifecycle, Triton on EKS, monitoring, and platform outcomes" width="1200">
</a>

Contributed to Kafka and Airflow pipelines, Feast/Redis/Snowflake feature paths, NVIDIA Triton serving on AWS EKS, GPU optimization, performance validation, and infrastructure-value analysis.

**Platform measures:** feature latency, GPU utilization, throughput, p99 latency, model density, and hosting cost were used to connect engineering decisions to operating and financial outcomes.

**Team outcome:** feature latency fell from 24 hours to approximately four minutes; GPU utilization rose from approximately 5% to above 80%; hosting cost fell 58% (about US$240K annually); and the platform supported 10× inference demand below 150 ms p99.

[Read the MLOps delivery case study](docs/enterprise-delivery/enterprise-mlops-gpu-serving.md) · [Open the sanitized MLOps blueprint](https://github.com/daetan999/mlops-hosp)

---

### 3. Governed FP&A Analytics Agent

**Frasers Hospitality · direct application build**

<a href="https://github.com/daetan999/adk-fpa-agent-blueprint">
  <img src="https://raw.githubusercontent.com/daetan999/adk-fpa-agent-blueprint/main/docs/assets/fpa-analysis-workspace.svg" alt="Sanitized dark-navy FP&A analysis workspace showing an approved finance request, portfolio KPIs, variance analysis, and governed query controls" width="1200">
</a>

Built a Google ADK and BigQuery workflow that turns natural-language finance and property-performance questions into governed, source-labelled analysis.

**Query controls:** approved data objects, source-specific property resolution, read-only SQL, byte and result caps, KPI-semantic rules, and data-quality checks; the model plans and explains while BigQuery performs the calculations.

**Outcome:** common ad hoc extraction fell from hours to under two minutes while raw KPI components and source context remained available for review.

[Open the governed FP&A agent blueprint and reconstructed interface](https://github.com/daetan999/adk-fpa-agent-blueprint)

## Independent AI infrastructure workflow

Four runnable workbenches cover a connected customer decision cycle. Each uses a distinct interface and deterministic decision logic suited to its stage.

| Stage | Decision | Workbench | Primary output |
|---|---|---|---|
| Discover | Is there a specific opportunity worth pursuing? | [Opportunity & Discovery](https://github.com/daetan999/ai-infra-opportunity-workbench) | Workload hypothesis, stakeholder map, evidence gaps, and next action |
| Size | What range and bottleneck require validation? | [Capacity & Commercial Sizing](https://github.com/daetan999/ai-infra-capacity-planner) | Low/base/high range, sensitivities, bottlenecks, and validation plan |
| Configure | Which architecture hypothesis fits the requirements? | [Solution Configurator](https://github.com/daetan999/ai-infra-solution-configurator) | Recommendation, alternatives, risks, diagram, and validation gates |
| Justify | Is the proposed change financially defensible? | [TCO & ROI](https://github.com/daetan999/ai-infra-tco-workbench) | TCO, unit economics, sensitivity, payback, ROI, and executive report |

### 1. Opportunity & Discovery Workbench

**Account research, qualification, and bounded PoC handoff**

<a href="https://github.com/daetan999/ai-infra-opportunity-workbench">
  <img src="docs/assets/opportunity-account-workspace.png" alt="Olive and ivory Opportunity Workbench showing a fictional account's workload hypothesis, sources, and qualification scorecard" width="1200">
</a>

A field-research workspace that separates sourced account signals from interpretation, then converts workload hypotheses, stakeholder access, discovery evidence, and unresolved risk into an advance, reshape, nurture, or disqualify recommendation.

Deterministic qualification, persistence, workflow APIs, and JSON/Markdown exports are implemented against fictional accounts. It is not a production CRM or revenue forecast.

[Open the Opportunity & Discovery Workbench](https://github.com/daetan999/ai-infra-opportunity-workbench)

---

### 2. Capacity & Commercial Sizing Planner

**First-pass workload sizing for an AE-to-SE conversation**

<a href="https://github.com/daetan999/ai-infra-capacity-planner">
  <img src="docs/assets/capacity-planner-workspace.png" alt="Graphite Capacity Planner showing workload inputs, calculated infrastructure ranges, bottlenecks, and confidence" width="1200">
</a>

An industrial planning desk that converts early workload assumptions into editable compute, memory, storage, network, power, and commercial ranges across training, fine-tuning, batch inference, real-time inference, and RAG.

The deterministic engine, YAML accelerator profiles, scenario comparison, sensitivity analysis, and exports produce indicative planning ranges—not benchmarks, supplier quotes, topology validation, or a final bill of materials.

[Open the Capacity & Commercial Sizing Planner](https://github.com/daetan999/ai-infra-capacity-planner)

---

### 3. Enterprise AI Solution Configurator

**Requirements-led architecture recommendation and validation planning**

<a href="https://github.com/daetan999/ai-infra-solution-configurator">
  <img src="docs/assets/solution-configurator-architecture.png" alt="Blueprint-style Solution Configurator showing a fictional enterprise AI architecture, rationale, risks, and validation gates" width="1200">
</a>

A blueprint workspace that turns structured requirements into an explainable solution hypothesis, viable alternatives, risk notes, validation gates, and a controlled architecture diagram.

Versioned recommendation rules, deterministic diagram generation, immutable assessments, exports, and browser-tested decision flows are implemented. The output remains an initial hypothesis—not a final architecture, security approval, benchmark, quote, or bill of materials.

[Open the Enterprise AI Solution Configurator](https://github.com/daetan999/ai-infra-solution-configurator)

---

### 4. TCO & ROI Workbench

**Value engineering and executive business-case review**

<a href="https://github.com/daetan999/ai-infra-tco-workbench">
  <img src="docs/assets/tco-comparison.png" alt="Parchment TCO Workbench comparing fictional infrastructure operating models with cost, payback, ROI, and confidence measures" width="1200">
</a>

A financial review desk for comparing infrastructure operating models across three- and five-year TCO, unit economics, payback, modeled ROI, and sensitivity while preserving the assumptions behind every result.

The Decimal-based engine, immutable scenario versions, evidence gating, sensitivity analysis, and JSON/CSV/PDF exports use fictional or user-entered values—not live pricing, supplier terms, financial advice, or guaranteed ROI.

[Open the TCO & ROI Workbench](https://github.com/daetan999/ai-infra-tco-workbench)

## Additional build

### HR Timesheet & Approval Tool

<a href="https://github.com/daetan999/hr_timesheet_tool">
  <img src="https://raw.githubusercontent.com/daetan999/hr_timesheet_tool/main/docs/assets/screenshots/review.png" alt="Synthetic HR timesheet exception-review workspace showing the six-stage workflow, flagged records, review controls, and payroll export gate" width="1200">
</a>

A working FastAPI application for moving paper and spreadsheet-based time capture into a structured document-intake, validation, exception-review, approval, and payroll-export workflow.

The public prototype uses synthetic employee data and mock extraction while preserving idempotent records, audit fields, reviewed-data protection, and a documented path to production persistence and identity controls.

**Technology:** Python · FastAPI · Jinja2 · PyMuPDF · Pillow · openpyxl

[Open the HR Timesheet & Approval Tool](https://github.com/daetan999/hr_timesheet_tool)

## Portfolio standards

- Models interpret language and produce narrative; deterministic code owns scoring, sizing, financial calculations, KPI logic, state, and delivery decisions.
- Inputs, assumptions, source labels, limitations, and validation requirements remain visible beside outputs.
- Professional metrics are labelled as direct workflow outcomes or wider team-level outcomes; fictional scenario values are never presented as customer results.
- Public repositories separate sanitized or synthetic artifacts from production code, data, credentials, endpoints, prompts, and internal interfaces.

## License

Portfolio documentation is released under the [MIT License](LICENSE). Each linked repository carries its own license and public-artifact boundary.

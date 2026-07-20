# Technical Project Portfolio

[![AI Infrastructure](https://img.shields.io/badge/AI%20Infrastructure-Triton%20%C2%B7%20EKS%20%C2%B7%20GPU-76B900)](#1-enterprise-mlops-platform)
[![Google Cloud](https://img.shields.io/badge/Google%20Cloud-Cloud%20Run%20%C2%B7%20BigQuery-669DF6)](#2-gcp-data--intelligence-platform)
[![Agentic AI](https://img.shields.io/badge/Agentic%20AI-ADK%20%C2%B7%20Gemini-8E75B2)](#3-agentic-fpa-analytics)
[![Account Intelligence](https://img.shields.io/badge/Account%20Intelligence-Discovery%20%C2%B7%20PoC-8EDC3B)](#5-ai-infrastructure-account-intelligence)
[![Value Engineering](https://img.shields.io/badge/Value%20Engineering-TCO%20%C2%B7%20ROI-8a4a12)](#supporting-solution-design-artifacts)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](#license)

Selected projects across AI/ML infrastructure, cloud data platforms, agentic analytics, account intelligence, and workflow automation. This repository provides a single index; the linked repositories contain detailed architecture, representative code, diagrams, design decisions, controls, and operating documentation.

## Public Portfolio Scope

The repositories are sanitized project blueprints and public prototypes rather than production source-code dumps.

- Client and employer names, internal codenames, credentials, endpoints, project IDs, service accounts, production datasets, recipients, and proprietary integrations are removed, renamed, or mocked.
- Sample data and identifiers are synthetic.
- Representative interfaces, configuration patterns, architecture decisions, failure controls, and operating procedures are retained.
- Quantified outcomes are rounded or aggregated. Modeled figures are identified as such in the detailed project repositories.
- Current implementations, target-state designs, and illustrative components are labelled separately.

---

## Projects at a Glance

| # | Project | Scope | Core Stack | Selected Outcome / Coverage |
|---|---|---|---|---|
| 1 | **[Enterprise MLOps Platform](https://github.com/daetan999/mlops-hosp)** | Shared training, feature, serving, and monitoring backbone for forecasting, pricing, anomaly detection, maintenance, and NLP workloads | Triton · EKS · PyTorch · MLflow · Feast · Kafka · Snowflake · Redis | 100+ model deployments consolidated onto shared GPU serving; utilization ~5% → 80%+; p99 <150 ms; modeled hosting cost −58% |
| 2 | **[GCP Data & Intelligence Platform](https://github.com/daetan999/gcp-data-platform-blueprint)** | Private-cloud data platform with serverless AI newsletters and performance reporting | GCP · BigQuery · Cloud Run · Cloud Scheduler · Gemini · SendGrid | Seven newsletter workflows, weekly/monthly reporting, nine serverless services, and unattended scheduled delivery |
| 3 | **[Agentic FP&A Analytics](https://github.com/daetan999/adk-fpa-agent-blueprint)** | Natural-language finance and operations analytics over governed BigQuery data | Google ADK · Gemini · BigQuery · Next.js · Python | Grounded dual-currency answers and charts through a single guarded SQL execution path |
| 4 | **[HR Timesheet Tool](https://github.com/daetan999/hr_timesheet_tool)** | Capture-to-payroll workflow for document intake, validation, exception review, and export | Python · FastAPI · Jinja2 · PyMuPDF · openpyxl | Working public prototype covering upload → validation → human review → payroll-ready Excel export |
| 5 | **[AI Infrastructure Account Intelligence](https://github.com/daetan999/Semis-Analysis-Web)** | Account planning for accelerated compute, cloud AI, networking, MLOps, and data-center solution motions | FastAPI · Python · Gemini · Jinja2 · Docker | Runnable offline workflow producing workload hypotheses, buyer maps, discovery questions, objections, and measurable PoC criteria |

---

## 1. Enterprise MLOps Platform

A sanitized architecture blueprint for operating multiple machine-learning workloads on a shared data, feature, training, serving, and monitoring platform.

[![Enterprise MLOps platform architecture](docs/assets/meridian-platform-architecture.svg)](https://github.com/daetan999/mlops-hosp)

### Project scope

- Eight model families covering demand forecasting, constrained reinforcement-learning pricing, ESG anomaly detection, predictive maintenance, asset clustering, feasibility analysis, and NLP ticket routing.
- Kafka and Airflow pipelines feeding a Feast feature store with Redis for online access and Snowflake for point-in-time offline training data.
- PyTorch training, MLflow registry gates, ONNX packaging, EKS deployment, and NVIDIA Triton inference serving.
- Evidently-based monitoring with separate warning, automated retraining, and halt-and-page responses for different drift classes.

### Key design decisions

- **Shared GPU serving:** dynamic batching and multi-model concurrency replace a linear single-tenant CPU deployment pattern.
- **Feature-store contract:** shared feature definitions reduce training-serving skew and support reuse across model families.
- **Registry-gated promotion:** models move through evaluation and staged promotion before serving.
- **Closed-loop operations:** monitored drift can trigger retraining while severe concept drift pauses automated pricing for human review.
- **Falsifiable PoC criteria:** throughput, p99 latency, GPU utilization, and cost per inference are measurable acceptance criteria.

**Repository:** [`mlops-hosp`](https://github.com/daetan999/mlops-hosp)

---

## 2. GCP Data & Intelligence Platform

A sanitized blueprint of an enterprise Google Cloud data platform and the serverless products running on top of it.

[![GCP data platform architecture](docs/assets/gcp-platform-infrastructure.svg)](https://github.com/daetan999/gcp-data-platform-blueprint)

### Platform scope

- Private-VPC ingestion and processing using Dataflow, Dataproc, Composer, Cloud Run, Cloud Storage, and BigQuery silver/gold layers.
- Hybrid connectivity patterns for on-premises financial systems and governed access to curated data products.
- Seven topic-specific AI newsletter workflows using resilient RSS ingestion, Gemini-based curation, BigQuery-managed recipients, and SendGrid delivery.
- Weekly and monthly performance reporting with deterministic BigQuery calculations and model-generated narrative restricted to computed figures.

[![AI newsletter workflow](docs/assets/gcp-platform-newsletter-pipeline.svg)](https://github.com/daetan999/gcp-data-platform-blueprint)

### Key design decisions

- **Scale-to-zero services:** Cloud Run and Cloud Scheduler support pay-per-run execution with no idle application compute.
- **Deterministic LLM controls:** prompt fidelity rules, model self-checks, and a code-level date validator reduce factual mutation.
- **Explicit failure contracts:** non-critical preference-link failures degrade safely, while missing recipients, delivery failures, stale data, and child-process errors fail the run.
- **Configuration as data:** newsletter types and recipient rules are managed through guarded BigQuery operations.
- **Controlled migration:** sandbox, UAT, and production promotion use paused schedulers, disabled-send dry runs, validation checks, and rollback steps.

**Repository:** [`gcp-data-platform-blueprint`](https://github.com/daetan999/gcp-data-platform-blueprint)

---

## 3. Agentic FP&A Analytics

A Google ADK agent for natural-language finance and operational analysis over governed BigQuery data. The project separates the working development implementation from the proposed production deployment design.

[![FP&A agent topology](docs/assets/adk-agent-topology.svg)](https://github.com/daetan999/adk-fpa-agent-blueprint)

### Project scope

- Natural-language questions across P&L measures, budget variance, occupancy, ADR, RevPAR, and property performance.
- Google ADK runtime with Gemini on Vertex AI and a Next.js chat interface.
- Dual-currency answers and declarative chart specifications grounded in query results.
- Multi-source property resolution where finance, asset-management, and property-management systems use different identifiers.

### Guarded SQL execution

All warehouse access passes through one tool that applies:

- Single-statement, `SELECT`-only parsing
- Frozen approved-table allowlist
- Per-query byte-billing cap
- Automatic row limits for detail queries
- Restricted property-master lookup shapes
- Warnings for non-additive measures such as ADR, RevPAR, and occupancy
- Data-quality handling for impossible outputs rather than silent correction

[![FP&A agent request lifecycle](docs/assets/adk-agent-request-lifecycle.svg)](https://github.com/daetan999/adk-fpa-agent-blueprint)

### Delivery status

- **Current development implementation:** ADK API server and Next.js frontend with read-only BigQuery access.
- **Target production design:** managed agent hosting, Cloud Run frontend, enterprise authentication, and a dedicated least-privilege service identity.

**Repository:** [`adk-fpa-agent-blueprint`](https://github.com/daetan999/adk-fpa-agent-blueprint)

---

## 4. HR Timesheet Tool

A working public prototype for replacing paper and spreadsheet-based time capture with a structured review and export workflow. The extraction layer runs in mock mode; no production integrations or employee data are included.

[![Timesheet workflow](docs/assets/timesheet-system-flow.svg)](https://github.com/daetan999/hr_timesheet_tool)

### Workflow

1. Create a submission period and upload PDF, image, HEIC, or spreadsheet files.
2. Normalize documents and convert extracted fields into structured timesheet rows.
3. Apply deterministic checks for dates, duplicate entries, codes, hours, and confidence thresholds.
4. Route exceptions to an HR review queue with explicit reasons.
5. Preserve reviewed records through idempotent updates and audit fields.
6. Export approved entries into a payroll-ready Excel workbook.

### Architecture

- FastAPI backend with server-rendered Jinja2 interfaces
- PyMuPDF and Pillow-based document preprocessing
- Pluggable extraction service boundary
- Relational schema for employees, sessions, entries, approval workflows, and reference codes
- File-backed prototype designed for later promotion to a transactional SQL database
- openpyxl export for downstream payroll processing

| Relational data model | Exception review interface |
|---|---|
| [![Timesheet relational schema](docs/assets/timesheet-data-schema.svg)](https://github.com/daetan999/hr_timesheet_tool) | [![Timesheet review queue](docs/assets/timesheet-review.png)](https://github.com/daetan999/hr_timesheet_tool) |

**Repository:** [`hr_timesheet_tool`](https://github.com/daetan999/hr_timesheet_tool)

---

## 5. AI Infrastructure Account Intelligence

A runnable account-planning application for AI-infrastructure solution selling. The project was rebuilt from a finance-heavy semiconductor trading application into a workflow aligned with enterprise infrastructure discovery and technical sales execution.

### Application scope

- Eleven companies across accelerated compute, semiconductors, AI networking, servers, specialized cloud, and data-center power and cooling.
- Five solution motions: GPU compute, cloud AI platforms, AI networking, data-center infrastructure, and MLOps.
- Structured output covering account signals, workload hypotheses, buyer roles, discovery questions, objections, and next actions.
- Falsifiable PoC plans with technical baselines, business metrics, acceptance criteria, evidence, and decision ownership.
- Optional Gemini enrichment restricted to the deterministic brief; the core workflow operates without an API key.

### Key design decisions

- **Offline deterministic core:** account briefs remain available without network access or model credentials.
- **AI as enrichment, not source of truth:** Gemini cannot introduce external company claims, contracts, deployments, or financial outcomes.
- **Decision-oriented output:** each analysis ends in measurable discovery and PoC actions rather than generic company commentary.
- **Sanitized catalog:** company roles and sales scenarios are generalized and contain no customer or employer information.
- **Small runtime surface:** FastAPI, Jinja2, Python, optional Gemini, Docker, and four offline tests.

### Delivery status

- Working FastAPI application and responsive browser interface
- Health and analysis APIs
- Docker deployment definition
- Architecture and reliability documentation
- Four offline tests covering core generation and endpoint behavior
- Legacy DCF, options, market-cache, backup, and diagnostic code removed

**Repository:** [`Semis-Analysis-Web`](https://github.com/daetan999/Semis-Analysis-Web)

---

## Supporting Solution-Design Artifacts

The portfolio also includes reusable artifacts for evaluating and communicating infrastructure projects:

- **[Value-engineering playbook](docs/value-engineering.md):** discovery, value hypotheses, TCO construction, technical-to-financial mapping, and expansion planning.
- **[Worked TCO example](docs/tco-worked-example.md):** a fictional prospect scenario taken from discovery inputs through infrastructure comparison and business-case construction.
- **[GPU-serving PoC playbook](https://github.com/daetan999/mlops-hosp/blob/main/docs/poc-playbook.md):** workload definition, baseline capture, test design, acceptance criteria, and result reporting.

These documents use fictional or sanitized assumptions and show the evaluation process rather than disclose customer economics.

---

## Repository Conventions

- Architecture diagrams are maintained as SVG and Mermaid diagram-as-code where practical.
- Public code focuses on interfaces, controls, configuration, and deployment patterns.
- Synthetic examples replace production data and identifiers.
- Redacted proprietary components are marked as stubs rather than represented as complete implementations.
- Each project distinguishes implemented, illustrative, modeled, and proposed components.

---

## License

Portfolio content and diagrams are released under the MIT License unless a linked repository states otherwise.

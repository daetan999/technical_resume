# Technical Resume — Solutions Engineering & MLOps Portfolio

**@daetan999** · Principal-level solutions engineering across MLOps, agentic AI, cloud data platforms, and workflow automation.

[![MLOps](https://img.shields.io/badge/MLOps-production%20platforms-1b2733)](#)
[![Agentic AI](https://img.shields.io/badge/Agentic%20AI-Google%20ADK-4285F4)](#)
[![GCP](https://img.shields.io/badge/Google%20Cloud-serverless%20%2B%20BigQuery-669DF6)](#)
[![Diagrams](https://img.shields.io/badge/diagrams-as%20code-2e5d43)](#)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](#)

---

## Projects

| # | Project | Domain | Core Stack | Measured Impact |
|---|---|---|---|---|
| 1 | **[MERIDIAN — Enterprise MLOps Platform](https://github.com/daetan999/hospitality-mlops-platform)** | ML-driven hospitality asset intelligence | PyTorch · Feast · Kafka · Airflow · MLflow · Triton · EKS | **>$8.3M annualized** across 5 value paths |
| 2 | **[Enterprise GCP Data & Intelligence Platform](https://github.com/daetan999/gcp-data-platform-blueprint)** | Private-VPC lakehouse + AI newsletter & reporting products | GCP · BigQuery · Cloud Run · Gemini · SendGrid | **7 AI-curated newsletters + 2 report cadences, fully unattended** — curation hours per issue → zero |
| 3 | **[Agentic FP&A Analytics](https://github.com/daetan999/adk-fpa-agent-blueprint)** | LLM agent for marketing-mix P&L + operational analytics | Google ADK · Gemini · BigQuery · Next.js | Self-serve finance Q&A with **zero ungoverned SQL** |
| 4 | **[HR Timesheet Tool](https://github.com/daetan999/hr_timesheet_tool)** | Workforce time-capture automation | Python · FastAPI · Jinja2 · PyMuPDF · openpyxl | Payroll cycle **days → minutes** · auditable review trail |
| 5 | Semiconductor Analysis Platform *(private · publication pending)* | Equity & options analytics for the semiconductor sector | Python · Flask · DCF · options greeks · Gemini | ~22k-line quant platform: DCF, IV-rank, regime-aware AI conviction |

Every public project is a **sanitized blueprint of a production system**: client identifiers, credentials, internal endpoints, and proprietary integrations are removed or mocked — the architecture, the engineering judgment, and the measured business impact are what remain. All diagrams are hand-built SVG (rendered natively by GitHub) with Mermaid diagram-as-code sources alongside in each repository.

---

## 1 · MERIDIAN — Enterprise MLOps Platform

Eight model families — quantile demand forecasting (Temporal Fusion Transformer), a bounded-action **DQN reinforcement-learning pricing agent**, LSTM-autoencoder ESG anomaly detection, Weibull survival predictive maintenance, fine-tuned BERT ticket routing — on one shared data and serving backbone, with fully automated drift-triggered retraining (no human in the hot path).

[![MERIDIAN platform architecture](docs/assets/meridian-platform-architecture.svg)](https://github.com/daetan999/hospitality-mlops-platform)

**Principal-level engineering signals:**

- **A feature store as the contract** — Feast with Redis online (< 15 ms p99) and Snowflake offline guarantees zero training/serving skew; 70%+ feature reuse cut new-feature delivery from months to days.
- **Serving economics** — Triton dynamic batching consolidated 100+ single-tenant CPU pods onto a small shared GPU cluster: utilization ~5% → 80%+, hosting spend −58%.
- **Self-correcting production** — Evidently drift tiers (warn / auto-retrain / halt-and-page) reduced manual model maintenance by 85%.
- **Metrics that land on the P&L** — every model KPI maps to a financial statement line:

[![Technical-to-financial transmission](docs/assets/meridian-value-transmission.svg)](https://github.com/daetan999/hospitality-mlops-platform)

**→ Full blueprint: [`hospitality-mlops-platform`](https://github.com/daetan999/hospitality-mlops-platform)**

---

## 2 · Enterprise GCP Data & Intelligence Platform

A production GCP platform for a multinational hospitality group: a **no-public-IP private-VPC lakehouse** (Dataflow / Composer / Dataproc → BigQuery silver/gold, hybrid IPsec to on-prem financial systems) carrying two serverless products — seven AI-curated executive newsletters and weekly/monthly property performance reports.

[![GCP platform infrastructure — sources, private VPC, lakehouse, consumers](docs/assets/gcp-platform-infrastructure.svg)](https://github.com/daetan999/gcp-data-platform-blueprint)

**Principal-level engineering signals:**

- **A three-layer anti-hallucination stack** — prompt fidelity contract, in-prompt self-check, and a deterministic year-gate validator that feeds the retry loop; born from a real LLM date-mutation incident, now structurally prevented.
- **Fail-open vs hard-fail contracts** — every failure mode is deliberately classified: a preference-API outage degrades footers but never blocks sends, while an empty recipient list is a surfaced incident, never a silent no-op.
- **Config as data** — newsletter topics live in a BigQuery catalog table; registering a topic is one guarded `MERGE`, zero code changes.
- **Migration discipline** — nine services promoted sandbox → UAT → production with paused-by-default schedulers, send-disabled dry runs, and a single-operator test lane.

[![Beacon AI newsletter engine — end-to-end send workflow](docs/assets/gcp-platform-newsletter-pipeline.svg)](https://github.com/daetan999/gcp-data-platform-blueprint)

**→ Full blueprint: [`gcp-data-platform-blueprint`](https://github.com/daetan999/gcp-data-platform-blueprint)** — infrastructure, workflow and unsubscribe-flow diagrams, reliability contracts, migration playbook, runnable SQL shapes.

---

## 3 · Agentic FP&A Analytics — Guarded-SQL ADK Agent

An LLM agent on **Google's Agent Development Kit** that answers natural-language finance and operations questions — P&L lines, ADR, RevPAR, occupancy — with grounded, dual-currency, chart-ready answers. The engineering thesis: **an analytics agent is only as trustworthy as the guardrails around its SQL.**

[![FP&A agent system topology — chat UI, ADK runtime, guarded SQL tool, BigQuery](docs/assets/adk-agent-topology.svg)](https://github.com/daetan999/adk-fpa-agent-blueprint)

**Principal-level engineering signals:**

- **One guarded tool as the choke point** — frozen table allowlist, single-SELECT parsing, byte-billing cost cap, injected row limits, KPI anti-summing semantics; the model never touches the warehouse directly.
- **Two-step property resolution** — three source systems use three different property-code schemes; the agent resolves codes through mandatory master lookups before any fact query.
- **Honest uncertainty** — impossible computed results (occupancy > 100%) are presented as flagged data-quality findings with raw components, never as answers.
- **An 11-entry lessons-learned engineering log** — every production failure class (JOIN explosion, scan-limit blowups, silent source fallback, duplicate-row inflation) converted into a structural safeguard.

[![FP&A agent request lifecycle — one question, guarded SQL, grounded answer](docs/assets/adk-agent-request-lifecycle.svg)](https://github.com/daetan999/adk-fpa-agent-blueprint)

**→ Full blueprint: [`adk-fpa-agent-blueprint`](https://github.com/daetan999/adk-fpa-agent-blueprint)** — topology, request-lifecycle sequence, deployment view, lessons-learned log.

---

## 4 · HR Timesheet Tool — Workforce Time-Capture Blueprint

An automated capture-to-payroll workflow replacing paper time cards and spreadsheet reconciliation: structured ingestion of scanned time cards, deterministic validation with exception surfacing, an exception-driven HR review queue, and payroll-ready Excel export — server-rendered FastAPI/Jinja2 with a pluggable (mocked) extraction layer.

[![Timesheet end-to-end submission pipeline](docs/assets/timesheet-system-flow.svg)](https://github.com/daetan999/hr_timesheet_tool)

| Relational schema, designed for 1:1 SQL promotion | Product — exception-driven review queue |
| --- | --- |
| [![Timesheet relational schema](docs/assets/timesheet-data-schema.svg)](https://github.com/daetan999/hr_timesheet_tool) | [![Review queue screenshot](docs/assets/timesheet-review.png)](https://github.com/daetan999/hr_timesheet_tool) |

**→ Full blueprint: [`hr_timesheet_tool`](https://github.com/daetan999/hr_timesheet_tool)**

---

## 5 · Semiconductor Analysis Platform *(private)*

A ~22,000-line personal quant research platform for the semiconductor sector: DCF valuation engine, options greeks and IV-rank analytics, alpha regression, strategy optimization, and a Gemini-based analyst layer with regime-aware confidence scoring — Flask-served with a full report UI. Built on public market data; repository publication pending final cleanup.

---

## Engineering Competency Matrix

| Discipline | Evidenced By | Technologies |
|---|---|---|
| **MLOps & Model Serving** | MERIDIAN registry-gated CD, drift-triggered retraining, GPU serving economics | MLflow · ONNX · Triton · Evidently · EKS/Kubernetes |
| **ML Engineering** | Quantile TFT forecasting, DQN RL with bounded action spaces, LSTM autoencoders, survival analysis, fine-tuned BERT | PyTorch · pytorch-forecasting · scikit-learn |
| **Agentic AI** | Guarded-SQL ADK finance agent: allowlisted BigQuery tool, two-step property-code resolution, grounded chart output | Google ADK · Gemini · BigQuery · Next.js |
| **Cloud Data Platforms (GCP)** | Private-VPC lakehouse, serverless runner pattern, config-as-data recipient model, UAT→PRD migration playbook | BigQuery · Cloud Run · Dataflow · Composer · Cloud Scheduler · Secret Manager |
| **LLM Reliability Engineering** | Deterministic anti-hallucination year gate; KPI sanity gates that flag impossible values instead of reporting them; fail-open vs hard-fail contracts | Gemini · prompt fidelity contracts · deterministic validators |
| **Data Platforms & Streaming** | Dual-layer Feast feature store, Kafka streaming, Spark SQL window features, warehouse modeling | Feast · Kafka · Airflow · Spark · Snowflake · Redis |
| **Backend & Product Engineering** | Timesheet capture-to-payroll workflow, exception-driven review UX, document processing | Python · FastAPI · Jinja2 · PyMuPDF · openpyxl |
| **Quantitative Analytics** | DCF engine, options greeks / IV-rank analytics, alpha regression, strategy optimization | Python · Flask · pandas · yfinance |
| **Architecture Communication** | Every repo: diagrams-as-code, hand-built SVG system diagrams, ERDs, sequence diagrams, value-transmission maps | SVG · Mermaid · UML |

---

## How These Blueprints Are Built

1. **Confidentiality inventory** — every project name, client identifier, dataset/table name, endpoint, and credential in the source system is catalogued before anything is published.
2. **Sanitize, don't lobotomize** — identifiers are renamed or mocked; architecture, data models, SLOs, and failure-mode engineering are preserved faithfully.
3. **Diagrams as code** — system diagrams are generated SVG (strict-XML-valid, GitHub-native rendering) with Mermaid sources embedded for maintainability.
4. **Impact stays quantified** — business results are kept as aggregated, portfolio-level figures with the mechanism that produced them, because architecture without outcomes is decoration.

---

## License

Portfolio content and diagrams released under the MIT License.

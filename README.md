# Dae Tan | Technical Portfolio

[![Coverage](https://img.shields.io/badge/Coverage-Discovery%20%C2%B7%20Sizing%20%C2%B7%20Value%20Engineering%20%C2%B7%20AI%20Infrastructure-2563EB)](#featured-evidence)
[![License](https://img.shields.io/badge/License-MIT-6B7280)](LICENSE)

Technical-commercial portfolio for AI infrastructure business-development, account, and technical-sales roles. These projects show how I research and qualify opportunities, translate workload assumptions into first-pass validation ranges, and build evidence-backed infrastructure investment cases.

Start with the Opportunity, Capacity, and TCO workbenches below. The Enterprise MLOps Platform provides the technical context needed to ask better discovery questions and collaborate with Solutions Engineers.

[LinkedIn](https://www.linkedin.com/in/dae-tan-1a2b3c) · [Featured Evidence](#featured-evidence) · [Product Design Signatures](#product-design-signatures) · [Worked Private-RAG Case](docs/tco-worked-example.md) · [Value Engineering Method](docs/value-engineering.md) · [Resume Project Mapping](docs/resume-project-mapping.md)

## Customer Decision Workflow

| Stage | Customer or account-team question | Primary artifact | Output passed forward |
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

**Product experience:** A warm, field-journal workspace using olive, clay, and ivory to keep evidence, uncertainty, and human judgment at the center of the work.

**Customer-decision evidence**

- Separates sourced account signals from seller interpretation and confidence.
- Scores pain, urgency, workload fit, buying-group access, decision process, competition, and evidence quality.
- Maps decision stakeholders and exposes single-threading or authority gaps.
- Produces advance, reshape, nurture, or disqualify recommendations and bounded PoC handoffs.

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

**Product experience:** An industrial planning desk in graphite, safety orange, and brass that makes the calculation surface feel measured rather than promotional.

**Customer-decision evidence**

- Produces low/base/high infrastructure and cost ranges across five AI workload modes.
- Exposes compute, memory, storage, network, latency, and completion-window bottlenecks.
- Shows sensitivity to batching, quantization, growth, utilization, and latency assumptions.
- Converts missing inputs into confidence deductions, discovery questions, and an SE validation plan.

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

**Product experience:** A financial-broadsheet treatment in parchment, forest, and oxblood that gives assumptions and decision records the weight of a reviewable ledger.

**Customer-decision evidence**

- Compares operating models across three- and five-year TCO, unit economics, payback, and modeled ROI.
- Tests sensitivity across utilization, compute price, demand growth, and energy price.
- Gates executive recommendations by evidence confidence and preserves formula-level lineage.
- Exports immutable JSON, CSV, and executive PDF records for technical and commercial review.

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

**Technical context for customer conversations**

- Connects Kafka, Airflow, Feast, Redis, Snowflake, PyTorch, MLflow, Kubernetes, and NVIDIA Triton.
- Documents batching, multi-model concurrency, staged rollout, scaling, and drift-response controls.
- Covers representative forecasting, pricing, anomaly, maintenance, feasibility, and NLP workloads.
- Defines a falsifiable GPU-serving PoC across utilization, throughput, latency, reliability, and unit cost.

**Public boundary:** Representative contracts, configuration shapes, model skeletons, diagrams, and controls are published. Proprietary data, integrations, images, clusters, and production endpoints are excluded.

**Repository:** [`mlops-hosp`](https://github.com/daetan999/mlops-hosp)

## Product Design Signatures

The runnable products deliberately avoid a shared AI-dashboard skin. Each uses a visual language chosen for the kind of decision it supports.

| Product | Design signature | Purpose |
|---|---|---|
| Opportunity & Discovery Workbench | Warm editorial field journal — olive, clay, ivory; expressive serif headings | Keeps evidence, stakeholder context, and uncertainty human and legible. |
| Capacity & Commercial Sizing Planner | Industrial calculation desk — graphite, safety orange, brass; condensed display type and mono data | Emphasizes ranges, constraints, and operational measurement. |
| TCO & ROI Workbench | Financial broadsheet — parchment, forest, oxblood; editorial serif and mono figures | Makes assumptions, lineage, and value claims read like an auditable decision record. |
| Enterprise AI Solution Configurator | Architectural blueprint — navy, paper-blue, ochre; structured serif and humanist sans | Separates guided requirements, rules, and architecture hypotheses without decorative AI chrome. |

## Supporting Enterprise Artifacts

These repositories add useful context but are not part of the default three-project paper-resume selection.

| Project | Supporting role |
|---|---|
| [GCP Data & Intelligence Platform](https://github.com/daetan999/gcp-data-platform-blueprint) | Governed BigQuery data, Cloud Run operations, model boundaries, failure policies, recipient controls, and reversible environment promotion. |
| [Enterprise AI Solution Configurator](https://github.com/daetan999/ai-infra-solution-configurator) | Guided requirements capture, versioned architecture rules, alternatives, risks, validation gates, and controlled diagram generation in a navy, paper-blue, and ochre blueprint workspace. |

The [Agentic FP&A Analytics blueprint](https://github.com/daetan999/adk-fpa-agent-blueprint) is intentionally not featured. Its governance concepts remain useful, but the public repository does not implement the complete guarded execution, authentication, deployment, and evaluation path.

## End-to-End Case Material

The portfolio is designed to be reviewed as one customer decision rather than a collection of disconnected applications.

- [Worked Private-RAG Case](docs/tco-worked-example.md) follows a fictional regulated workload from discovery through sizing, architecture, validation, and financial review.
- [Portfolio Case Contract](docs/portfolio-case-contract.md) keeps workload assumptions and stage ownership consistent across the workbenches.
- [Value Engineering Method](docs/value-engineering.md) connects infrastructure signals to cost, risk, capacity, and business-value hypotheses.
- [TCO Sample Report](https://github.com/daetan999/ai-infra-tco-workbench/blob/main/docs/examples/fictional-northstar-private-rag-business-case.pdf) shows the executive reporting output.

## Decisions I Can Defend in an Interview

- **Qualification can stop a deal.** Missing authority, weak evidence, or unresolved risk can reshape, nurture, or disqualify an opportunity. The trade-off is slower stage progression in exchange for higher forecast and PoC discipline. New customer evidence can change the recommendation.
- **Sizing returns ranges.** Early discovery rarely supports a final bill of materials. The planner preserves uncertainty and creates validation questions instead. Representative benchmarks and an SE-reviewed topology can replace the illustrative range.
- **Financial results remain deterministic.** Formula lineage and immutable versions make each business case reviewable. This limits narrative flexibility but prevents generated copy from changing the economics. Approved inputs or a revised scenario version can change the result.
- **The MLOps repository is a blueprint.** It publishes architecture, controls, and testable acceptance criteria while excluding proprietary data and integrations. The public artifact sacrifices deployability to preserve confidentiality; authorized implementation evidence would change that boundary.

## Evidence Standard

- All bundled accounts, organizations, workloads, prices, stakeholders, and outcomes are synthetic, fictional, sanitized, aggregated, or clearly labelled illustrative.
- Runnable workbenches use deterministic scoring, sizing, rules, or financial engines; generated narrative cannot silently change the result.
- Blueprint repositories distinguish published architecture and contracts from omitted proprietary integrations and environments.
- No repository claims a live customer deployment, current vendor pricing, guaranteed performance, final architecture approval, or guaranteed ROI.
- Tests, screenshots, diagrams, exports, limitations, and run instructions are documented in the individual repositories.

## Review Paths

**Thirty-second review:** scan the Customer Decision Workflow table and the Opportunity, Capacity, and TCO visuals.

**Five-minute recruiter review:** inspect the Opportunity qualification model, Capacity assumptions and validation questions, TCO comparison, and MLOps architecture.

**Technical-commercial interview review:** trace the fictional Private-RAG case from discovery to AE-to-SE handoff and executive business case, then inspect the deterministic scoring, sizing, and financial engines.

## License

Portfolio documentation is released under the [MIT License](LICENSE). Each linked repository carries its own license and public-artifact boundary.

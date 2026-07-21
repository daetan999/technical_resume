# Enterprise AI Infrastructure Portfolio Handover

Status captured on 2026-07-21. All repositories remain under `daetan999`. Feature branches and pull requests are unmerged for owner review.

## Final Repository Map

| Product | Repository | Portfolio role | Branch | Handover commit |
|---|---|---|---|---|
| Enterprise MLOps Platform | [mlops-hosp](https://github.com/daetan999/mlops-hosp) | Infrastructure and workload understanding | `portfolio-alignment` | `090fb26` |
| GCP Data & Intelligence Platform | [gcp-data-platform-blueprint](https://github.com/daetan999/gcp-data-platform-blueprint) | Governed cloud delivery | `portfolio-alignment` | `c0bb648` |
| Agentic FP&A Analytics | [adk-fpa-agent-blueprint](https://github.com/daetan999/adk-fpa-agent-blueprint) | Governed AI application design | `portfolio-alignment` | `9060da5` |
| AI Infrastructure Opportunity & Discovery Workbench | [ai-infra-opportunity-workbench](https://github.com/daetan999/ai-infra-opportunity-workbench) | Discover and qualify | `product-build` | `ab27a0e` |
| Enterprise AI Capacity & Commercial Sizing Planner | [ai-infra-capacity-planner](https://github.com/daetan999/ai-infra-capacity-planner) | Size the workload and opportunity | `product-build` | `f9f6bbb` |
| Enterprise AI Solution Configurator | [ai-infra-solution-configurator](https://github.com/daetan999/ai-infra-solution-configurator) | Configure the solution | `product-build` | `d4ae819` |
| Enterprise AI Infrastructure TCO & ROI Workbench | [ai-infra-tco-workbench](https://github.com/daetan999/ai-infra-tco-workbench) | Quantify the business case | `product-build` | `a923ce9` |
| Portfolio landing page | [technical_resume](https://github.com/daetan999/technical_resume) | Connect and present all seven projects | `portfolio-redesign` | Recorded in the pull request |

## How the Portfolio Connects

The three technical repositories establish how AI workloads, governed cloud data, and controlled enterprise applications operate. Their constraints feed the four-stage commercial workflow:

`Opportunity discovery → capacity and commercial sizing → solution configuration → TCO and ROI`

A reviewer can recommend advance, reshape, nurture, or disqualify. The workflow does not force a positive commercial outcome.

## Run and Verify Each Repository

### Enterprise MLOps Platform

The public repository is a sanitized reference blueprint, not an end-to-end application.

```bash
python -m compileall feature_store models monitoring pipelines
```

Parse the SVGs with the standard-library verification snippet in its README. Live Feast, Airflow, MLflow, Kubernetes, Triton, and cloud integration are outside the public artifact.

### GCP Data & Intelligence Platform

The public repository is a sanitized architectural blueprint, not a deployable Google Cloud environment.

```bash
python -m compileall services
```

Parse the SVGs with the README verification snippet. End-to-end use requires private cloud resources and integrations that are not published.

### Agentic FP&A Analytics

The public repository is a governed control blueprint and cannot run as a complete application.

```bash
python -m compileall app
```

The README verifies the synthetic CSV and SVG assets. The public tree omits BigQuery execution, SQL enforcement, the complete frontend, authentication, and deployment.

### Opportunity & Discovery Workbench

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload

make lint
make test
make coverage
docker build -t opportunity-workbench .
```

Open `http://127.0.0.1:8000`.

### Capacity & Commercial Sizing Planner

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e '.[dev]'
cp .env.example .env
uvicorn app.main:app --reload

make lint
make test
make coverage
docker build -t capacity-planner .
```

Open `http://127.0.0.1:8000`.

### Solution Configurator

```bash
python -m venv .venv
source .venv/bin/activate
make install
make dev

make lint
make test
make coverage
npm ci
npx playwright install chromium
make e2e
docker build -t solution-configurator .
```

Open `http://127.0.0.1:8000`.

### TCO & ROI Workbench

```bash
python3.12 -m venv .venv
source .venv/bin/activate
python -m pip install -e '.[dev]'
SEED_DEMO_DATA=true uvicorn app.main:app --reload

pytest
ruff check app tests scripts
npm ci
npm run check
npx playwright install chromium
npm run test:e2e
npm audit
pip-audit
docker compose up --build
```

Open `http://127.0.0.1:8000`.

## Fictional Demo Scenarios

| Workbench | Bundled demonstrations |
|---|---|
| Opportunity | Northstar Mutual: private enterprise RAG; Bluehaven Compute: specialized GPU cloud expansion; Harborline Manufacturing: AI networking and data-center modernization |
| Capacity | Fictional Atlas Pretraining Window; Fictional Meridian Realtime Assistant; Fictional Northstar Knowledge Retrieval |
| Configurator | Fictional Northstar Private RAG; Fictional Meridian Real-Time Inference; Fictional Aster Hybrid AI Platform |
| TCO | CPU-to-GPU inference modernization; Cloud GPU vs owned infrastructure; Shared serving utilization |

The technical-foundation repositories use sanitized contracts and synthetic fixtures, not customer demonstration environments.

## Visual and Export Evidence

| Repository | Screenshots | Diagrams and exports |
|---|---|---|
| Opportunity | `docs/assets/opportunity-dashboard.png`; `docs/assets/opportunity-account-workspace.png` | `opportunity-workbench-hero.svg`; `opportunity-workflow.svg`; `qualification-model.svg` |
| Capacity | `docs/assets/capacity-planner-workspace.png`; `docs/assets/capacity-planner-comparison.png` | `capacity-planner-hero.svg`; `sizing-workflow.svg`; `sizing-model.svg` |
| Configurator | `docs/assets/configurator-workspace.png`; `docs/assets/configurator-architecture.png` | Three product diagrams plus `private-enterprise-rag-architecture.svg` and `hybrid-sensitive-ai-architecture.svg` |
| TCO | `docs/assets/tco-dashboard.png`; `docs/assets/tco-comparison.png` | Three product diagrams and `docs/examples/fictional-cpu-to-gpu-business-case.pdf` |
| MLOps | No application screenshot; blueprint only | Four architecture and value-transmission SVGs |
| GCP Data | No application screenshot; blueprint only | Four infrastructure and workflow SVGs |
| FP&A | No application screenshot; blueprint only | Three reference-architecture SVGs |
| Portfolio | Not applicable | `docs/assets/portfolio-system-map.svg` |

## Pull Requests

- [Opportunity Workbench PR #2](https://github.com/daetan999/ai-infra-opportunity-workbench/pull/2)
- [Capacity Planner PR #1](https://github.com/daetan999/ai-infra-capacity-planner/pull/1)
- [Solution Configurator PR #1](https://github.com/daetan999/ai-infra-solution-configurator/pull/1)
- [TCO & ROI Workbench PR #1](https://github.com/daetan999/ai-infra-tco-workbench/pull/1)
- [Enterprise MLOps Platform PR #1](https://github.com/daetan999/mlops-hosp/pull/1)
- [GCP Data & Intelligence Platform PR #1](https://github.com/daetan999/gcp-data-platform-blueprint/pull/1)
- [Agentic FP&A Analytics PR #1](https://github.com/daetan999/adk-fpa-agent-blueprint/pull/1)

## Remaining Limitations

- The three foundation repositories are sanitized blueprints. They do not provide complete deployable environments.
- The four commercial applications are local, single-user demonstrations without authentication, authorization, tenant isolation, TLS, central audit retention, production telemetry, or approved data-classification workflows.
- Capacity outputs are indicative ranges and require workload benchmarks plus formal Solutions Engineer validation.
- Configurator outputs are initial solution hypotheses, not bills of materials or completed architecture reviews.
- TCO outputs use fictional or user-entered assumptions and are not financial advice, live quotes, or guaranteed outcomes.
- Docker was unavailable in the local desktop environment for the final TCO pass; its GitHub Actions container build passed and is the authoritative container verification.

## Manual GitHub Actions

1. Review the eight pull requests; do not merge from the portfolio summary alone.
2. Merge the seven project pull requests before the `technical_resume` pull request so landing-page links resolve to the reviewed implementations and corrected boundaries.
3. Re-run or confirm each required check before merge.
4. Keep the default branch and repository visibility unchanged unless there is a separate governance decision.
5. Add branch protection and required status checks after the reviewed workflows are on `main` if desired.

## Resume Link

The primary GitHub link for the resume header is:

**https://github.com/daetan999/technical_resume**

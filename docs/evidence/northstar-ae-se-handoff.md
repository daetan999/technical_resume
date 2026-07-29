---
title: Northstar Mutual - AE-to-SE Decision Handoff
layout: default
---

# Northstar Mutual - AE-to-SE Decision Handoff

> **Fictional portfolio scenario.** Northstar Mutual is not a customer. All values are illustrative and demonstrate the handoff method rather than a benchmark, quote, approved architecture, or financial recommendation.

## Requested decision

Determine whether a regulated enterprise should advance a private retrieval-augmented generation workload into a bounded technical validation covering model quality, latency, throughput, security controls, infrastructure fit, and unit economics.

**Current recommendation:** **advance conditionally** to a controlled PoC. Do not select a final architecture or commercial option until representative workload, benchmark, security, operating-model, and pricing evidence are available.

## Workload evidence

| Input | Illustrative value | Evidence status | Why it matters |
|---|---:|---|---|
| Model class | 70B parameters | Illustrative | Drives memory fit, precision, and parallelism options |
| Peak demand | 45 requests per second | Illustrative | Anchors sustained and burst throughput tests |
| End-to-end latency target | 900 ms | Illustrative | Constrains retrieval, reranking, generation, and network design |
| Governed source data | 18 TB | Illustrative | Affects ingestion, indexing, freshness, storage, and residency |
| Annual demand growth | 35% | Illustrative | Tests headroom and the future cost curve |
| Deployment posture | Private or hybrid | Assumption | Adds identity, audit, connectivity, recovery, and operating constraints |

## What is known

- The workload serves governed internal content.
- Demand is interactive and has a stated peak and latency objective.
- Identity, auditability, data residency, and recovery require formal review.
- Finance needs a normalized comparison of the current and proposed operating states.

## Evidence still required

- Input and output token distributions, concurrency, burst shape, and cache behavior.
- Quality target, representative evaluation set, and acceptable quantization trade-offs.
- Retrieval fan-out, index design, embedding and reranking load, and freshness target.
- Existing utilization, infrastructure cost allocation, support load, and incident baseline.
- Security architecture, recovery objectives, data-retention policy, and approved support model.
- Current supplier pricing, contract terms, migration effort, and finance-owned value assumptions.

## First-pass solution hypothesis

1. Separate governed ingestion and indexing from online retrieval and generation.
2. Use identity-aware access, private connectivity, source authorization, and reviewable audit events.
3. Benchmark a scalable inference tier using representative prompt, token, concurrency, and traffic distributions.
4. Instrument retrieval, generation, queueing, accelerator memory, utilization, latency, quality, and failure behavior.
5. Compare cloud, hybrid, and owned operating models only after workload normalization and measured throughput.

This is a workshop hypothesis. It is not a final architecture, security approval, benchmark result, quote, or bill of materials.

## PoC success plan

| Gate | Measurement | Pass condition |
|---|---|---|
| Quality | Approved question set with expected evidence and citation behavior | Threshold agreed with the business and risk owners before testing |
| Throughput | Sustained and burst tests at the representative traffic profile | 45 RPS clears with agreed headroom |
| Latency | End-to-end distribution under the same traffic profile | Agreed percentile remains within the 900 ms target |
| Model fit | Memory, precision, parallelism, batching, and eviction behavior | Stable fit without unsafe interference or hidden quality loss |
| Security | Identity, source authorization, isolation, audit, and retention tests | Architecture and security reviewers accept the evidence |
| Reliability | Component failure, retry, recovery, and rollback exercises | Recovery remains within agreed objectives |
| Economics | Cost per 1,000 requests using measured utilization and current prices | Proposed case survives the agreed sensitivity range |

Exact quality thresholds, observation windows, owners, and instrumentation must be agreed before the PoC. A test that cannot fail cannot support a defensible decision.

## Commercial handoff

The financial model must normalize both operating states to the same workload, term, growth profile, and service objectives. It should include compute, storage, network, facilities or cloud services, implementation, migration, security review, operations, support, and transition risk.

The review should distinguish realized cash savings, avoided cost, deferred capital, and productivity capacity. No modeled value should be presented as guaranteed revenue or approved savings.

## Stakeholder and next-action map

| Stakeholder | Required decision or evidence |
|---|---|
| Executive sponsor | Confirm business priority, decision date, and value owner |
| Business and knowledge users | Approve representative tasks and quality criteria |
| AI/ML and platform teams | Provide workload trace, model constraints, and benchmark ownership |
| Security, risk, and data governance | Approve data, identity, audit, retention, and recovery controls |
| Finance and procurement | Validate baseline, price sources, term, value treatment, and sensitivity |
| AE and Solutions Engineer | Maintain one evidence record and own the conditional next-step recommendation |

**Next action:** run a discovery and validation-planning workshop to assign owners, replace illustrative inputs with approved evidence, and agree the PoC pass/fail gates.

[Open the live walkthrough](https://daetan999.github.io/technical_resume/) · [Read the technical evidence index](../technical-evidence-index.html) · [Return to the portfolio](https://github.com/daetan999/technical_resume)

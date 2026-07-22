# TCO Worked Example: Private Enterprise RAG

This fictional example shows how one workload can move from discovery to capacity validation and a financial review. It demonstrates the method and handoffs; it does not present achieved customer results.

For the implemented deterministic calculator, sensitivity model, lineage view, and executive export, see the [Enterprise AI Infrastructure TCO & ROI Workbench](https://github.com/daetan999/ai-infra-tco-workbench) and its [fictional sample report](https://github.com/daetan999/ai-infra-tco-workbench/blob/main/docs/examples/fictional-northstar-private-rag-business-case.pdf).

## Scenario

**Northstar Mutual** is a fictional regulated enterprise evaluating a private retrieval-augmented generation service for internal knowledge access.

The shared scenario inputs are illustrative:

| Input | Illustrative value | Why it matters |
|---|---:|---|
| Model class | 70B parameters | influences memory fit, parallelism, and serving pattern |
| Peak demand | 45 requests per second | anchors throughput and concurrency tests |
| End-to-end latency target | 900 ms | sets a service-level constraint for retrieval and generation |
| Governed source data | 18 TB | affects indexing, storage, retrieval, and data-placement design |
| Annual demand growth | 35% | tests capacity headroom and the cost curve |
| Deployment posture | private or hybrid | adds security, identity, residency, and operating constraints |

These inputs are not a bill of materials. They are enough to frame discovery and expose what must be measured next.

## 1. Discovery Record

The opportunity record should separate known facts from assumptions.

**Known for the fictional scenario:**

- the use case handles governed internal content;
- demand is interactive and has a stated peak;
- latency, identity, auditability, and data residency matter;
- finance needs a current-versus-proposed cost comparison.

**Still unknown:**

- input and output token distributions;
- concurrent-user pattern and cache hit rate;
- acceptable model quality and quantization trade-offs;
- retrieval fan-out, index design, and freshness target;
- baseline infrastructure utilization and unit cost;
- security architecture, recovery objectives, and support model.

The correct discovery outcome is conditional progress: the problem is defined, but sizing confidence remains limited until these inputs are measured.

## 2. First-Pass Capacity Range

The planner should compare several configurations rather than select a final answer. The range should vary:

- accelerator memory and count;
- model precision and parallelism;
- batching and concurrency;
- retrieval, embedding, and reranking load;
- storage and network assumptions;
- utilization and growth headroom.

The output passed to a Solutions Engineer is an indicative range, the most sensitive inputs, and a bottleneck hypothesis. It is not a vendor benchmark or quote.

## 3. Solution Hypothesis

A workshop-ready hypothesis might include:

- governed ingestion and indexing separated from online retrieval;
- private connectivity and identity-aware access;
- a scalable inference tier with observable queueing, batching, and memory use;
- retrieval and generation telemetry tied to latency and quality;
- audit, rollback, resilience, and data-retention controls;
- alternatives for cloud, hybrid, or owned infrastructure.

Every recommendation should link to a requirement and name an alternative, risk, and validation gate.

## 4. Falsifiable Validation Plan

The PoC should use an approved representative document set and traffic profile. It should test:

- the 45-request-per-second peak under agreed concurrency;
- the 900 ms end-to-end latency target across a defined percentile distribution;
- answer quality and citation behavior against an agreed evaluation set;
- accelerator utilization, memory fit, queueing, and failure behavior;
- retrieval freshness, identity enforcement, audit evidence, and recovery;
- cost per 1,000 requests under measured utilization.

Pass and fail thresholds, observation window, owners, and instrumentation must be agreed before the run. Missing a threshold should reshape or stop the proposed design.

## 5. Financial Model

The current and proposed cases should use the same demand, term, and workload definition.

| Cost or value area | Evidence required |
|---|---|
| Compute and platform | configuration, quantity, utilization, price source, contract term |
| Storage and data movement | capacity, growth, replication, operations, egress |
| Implementation | engineering, migration, security review, testing, training |
| Operations | support coverage, incident load, maintenance, observability |
| Business value | named mechanism, owner, realization condition, confidence |

The model should calculate TCO, unit economics, payback, ROI, break-even, and sensitivity from versioned assumptions. An illustrative input must remain labelled illustrative in every export.

## 6. Decision Handoff

A concise handoff should state:

- the customer decision and business driver;
- the workload and control requirements;
- the current evidence and its confidence;
- the capacity range and sensitive inputs;
- the proposed pattern, alternatives, and risks;
- the PoC measurements and approval gates;
- the financial range and strongest sensitivities;
- the requested next action.

The recommendation can be **advance**, **reshape**, **nurture**, or **disqualify**. In this example, advancement remains conditional on representative workload data, benchmark results, security review, and validated commercial inputs.

[Read the value-engineering method](value-engineering.md) · [Back to the portfolio](../README.md)

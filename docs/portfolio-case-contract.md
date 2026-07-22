# Portfolio Case Contract: Northstar Private RAG

This contract keeps one fictional workload consistent across the commercial workbenches. It defines shared inputs and stage ownership; it is not an API integration, benchmark, quote, or customer record.

## Canonical Workload

```json
{
  "case_id": "northstar-private-rag-v1",
  "fictional": true,
  "workload": {
    "type": "private_rag_inference",
    "model_parameters_billions": 70,
    "peak_requests_per_second": 45,
    "latency_target_ms": 900,
    "governed_data_tb": 18,
    "annual_growth_pct": 35
  },
  "planning_assumptions": {
    "storage_tb": 36,
    "deployment_posture": "private_or_hybrid"
  }
}
```

All values are illustrative. Latency, throughput, model quality, storage overhead, and infrastructure fit remain validation gates.

## Stage Ownership

| Stage | Consumes | Adds | Must not claim |
|---|---|---|---|
| Opportunity discovery | workload hypothesis and account evidence | problem, stakeholders, sponsorship, evidence gaps, next action | qualified revenue or technical fit without evidence |
| Capacity planning | canonical workload inputs | indicative ranges, sensitive assumptions, bottleneck hypothesis, PoC measurements | vendor benchmark, quote, or final bill of materials |
| Solution configuration | canonical workload plus control requirements | architecture hypothesis, rationale, alternatives, risks, review gates | final architecture or security approval |
| TCO and ROI | approved sizing output plus commercial assumptions | TCO, unit economics, sensitivity, confidence, and lineage | live pricing, guaranteed saving, or approved finance case |

## Handoff Rules

1. Preserve `case_id`, workload identity, model class, growth rate, and approved demand basis across stages.
2. Record derived values, such as storage overhead or normalized monthly demand, as stage-owned assumptions with a source.
3. Keep unknowns visible. Do not replace missing benchmark or price evidence with precision.
4. Version any change that affects capacity, architecture, or financial output.
5. Pass result distributions and confidence forward, not only a preferred point estimate.

The TCO workbench intentionally does not duplicate every raw technical field. Its Northstar case retains the shared model class and growth assumption, then consumes normalized demand and storage inputs. The upstream 45 RPS, 900 ms, and 18 TB requirements remain named technical validation gates.

[Back to the portfolio](../README.md)

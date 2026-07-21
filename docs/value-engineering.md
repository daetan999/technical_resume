# Value Engineering — From GPU Metrics to the P&L

> An AI-infrastructure deal does not close on features. It closes on a **TCO model a
> CFO believes** and a **PoC success criterion an engineering lead trusts**. This
> document is the repeatable motion I use to turn a technical win into a signed
> business case — the same motion behind the sanitized platform blueprints in this
> portfolio, and the ~$700K of B2B revenue on my résumé.

This is the artifact most engineering portfolios are missing and most sales
portfolios can't back up. I can do both halves: architect the system **and** build
the economic case that funds it.

The implemented workflow is split across the [Opportunity & Discovery Workbench](https://github.com/daetan999/ai-infra-opportunity-workbench), [Capacity Planner](https://github.com/daetan999/ai-infra-capacity-planner), [Solution Configurator](https://github.com/daetan999/ai-infra-solution-configurator), and [TCO & ROI Workbench](https://github.com/daetan999/ai-infra-tco-workbench). Each uses fictional demonstrations and exposes the assumptions that still require customer validation.

---

## The core move: the FinOps win and the SLA win are the same move

![GPU FinOps serving economics — consolidating a single-tenant CPU fleet onto a shared, dynamically batched GPU cluster cuts hosting cost 58% while holding a sub-150ms p99 SLA](assets/gpu-finops-tco.svg)

The most persuasive infra business case is the one where the cost argument and the
performance argument point the same direction. Consolidating 100+ single-tenant CPU
pods (idle ~95% of the time) onto a shared, dynamically batched GPU cluster does
exactly that:

- **Utilization** climbs from ~5% to 80%+ because dynamic batching packs bursty,
  low-QPS requests into dense GPU work.
- **Unit cost per inference falls** because one cluster now serves what a linear CPU
  fleet used to — **−58% hosting spend, ≈ −$240K/year**.
- **Throughput headroom rises** at the same time — **10× volume spikes absorbed**,
  **p99 held < 150 ms**.

That is the whole pitch in one diagram: *you are not trading cost for latency — you
are buying both with the same architectural decision.*

---

## The five economic transmission paths

Enterprise ML programs fail when technical metrics never reach a financial statement.
Every model KPI in the platform blueprint is wired to a specific P&L line — this is
the table I put in front of a CFO:

| # | Technical signal | Economic mechanism | P&L outcome |
|---|---|---|---|
| 1 | Forecast error (MAPE) **12.5% → 4.5%** | Prices the last ~20% of inventory correctly — captures surge margin, avoids empty-room loss | **+4.2% RevPAR → +$4.8M** annualized profit |
| 2 | LSTM meter-anomaly detection | Flags overnight leaks in 30 min; shifts HVAC load off peak tariffs | **−14% utility waste → −$1.8M** OpEx |
| 3 | Weibull MTTF early-warning | Swaps a **$500 bearing** off-peak instead of a **$120K** seized compressor | **−42% catastrophic downtime → −$1.5M** deferred CapEx |
| 4 | Triton shared-GPU + batching | Replaces a linear CPU fleet with one dense cluster | **−58% cloud hosting → −$240K/yr** |
| 5 | Fine-tuned BERT ticket routing | Cuts MTTR **35 → 8 min**; protects guest lifetime value | **+3% repeat bookings** |

Each row is a sentence a non-technical buyer can repeat to *their* boss. That is the
test a value hypothesis has to pass.

---

## The value-based selling motion

How I run a technical deal, start to finish:

1. **Discover the economic buyer's metric.** Not "what's your stack" — *"what number
   on your P&L are you measured on this year, and what's blocking it?"* RevPAR, cloud
   spend, downtime, cycle time. Everything downstream anchors here.
2. **Form a value hypothesis.** One quantified sentence: *"If we cut inference cost
   58%, that's ≈$240K/yr back, and the freed GPU headroom lets you 10× traffic
   without re-architecting."* Wrong-but-specific beats vague-but-safe — it gives the
   customer something to correct, which is how you learn their real numbers.
3. **Scope a PoC around a falsifiable success criterion.** Not "try it out" — *"p99
   under 150 ms at 10× current QPS on a single T4 pool, measured over 72 hours."* If
   it can't fail, it can't sell.
4. **Build the TCO model with the customer's inputs.** Their instance types, their
   utilization, their growth curve. The model is co-authored, so the number is theirs
   to defend internally, not mine to argue.
5. **Translate to the P&L and hand over the one-liner.** The champion needs a
   sentence for the CFO, not a benchmark chart. See the transmission table above.
6. **Design for the expansion.** The first workload is a wedge; the architecture
   (shared cluster, feature store, drift-triggered retraining) is what makes the
   second and third workloads land-and-expand instead of net-new sells.

---

## Discovery → quantification: the question bank

The questions that turn a demo into a business case, grouped by value lever:

**GPU / compute economics**
- What's your current GPU (or CPU) utilization at steady state vs. peak?
- How many models/tenants run on dedicated vs. shared infrastructure today?
- What does an idle-capacity hour cost you, and how bursty is your traffic?

**Performance / SLA**
- What's your p99 latency target, and what breaks downstream when you miss it?
- What's the revenue or churn cost of a timeout on the critical path?

**Reliability / operations**
- How many engineer-hours/month go to manual model maintenance and firefighting?
- What's your time-to-market for a new model or a new tenant today?

**Data / freshness**
- How stale is the data feeding your live decisions, and what does staleness cost?

Each answer maps to a row in the TCO model. No answer, no quantified case — so I ask
before I pitch.

---

## The TCO model skeleton

The reusable levers I quantify for an inference-serving business case:

| Lever | Before (baseline) | After (proposed) | Where the money moves |
|---|---|---|---|
| Compute footprint | 1 instance / tenant, idle ~95% | Shared batched cluster | Fewer instances, higher density |
| Utilization | ~5% | 80%+ | Same spend buys far more inference |
| Unit cost / inference | high (idle-dominated) | low (amortized) | Direct hosting-line reduction |
| Scaling cost curve | linear with tenants | sub-linear (headroom) | Deferred capacity CapEx |
| Ops load | manual, reactive | drift-triggered automation | −85% maintenance hours |
| SLA risk | timeouts → lost revenue | p99 < 150 ms held | Protected top-line |

The output is a single annualized number with the mechanism attached — because
*"−$240K/year because utilization went 5%→80% via batching"* survives scrutiny, and
*"we'll save money"* does not.

---

## A note on the figures

Every number here is an **aggregated, portfolio-level, illustrative** outcome from
sanitized architectural blueprints. Client identifiers, internal codenames, datasets,
endpoints, and credentials are removed or mocked throughout. The **mechanism** —
how a latency or utilization metric becomes a P&L line — is what's real and portable,
and it's the part that matters in a sales-engineering conversation.

---

[Back to the Enterprise AI Infrastructure Portfolio](../README.md)

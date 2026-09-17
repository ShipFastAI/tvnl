# TVNL digital presence prototype

Static prototype for the TVNL website modernization proposal. It translates the current TVNL navigation into a smaller set of view changes, while keeping submenu labels and anchors discoverable inside each view.

## Open locally

Open `index.html` directly in a browser. No development server or package install is required.

The current implementation references local TVNL logo, Jharkhand state emblem and plant photographs in `assets/`, with system-font fallbacks. Captured public content and downloads are stored in `content/`; the browser loads `content/tvnl-scraped.js` directly.

The generation source is [`scripts/scrape-tvnl-demo.mjs`](../../scripts/scrape-tvnl-demo.mjs). Scraping is still in progress and the inventory is pending reconciliation. The presence of local files does not establish a complete mirror or prove that every source page, document and link is covered.

## Experience map

- `Home` — eight scroll-led chapters: Arrival → Power today (420 MW) → Energy in motion (2 × 210 MW) → Planned thermal expansion (1,740 MW total) → Planned solar project (50 MW) → Stewardship → Public archive → Continue the journey.
- `The Company` — overview, organization, headquarter and plant charts, board, messages, strength, businesses, policies, awards. Sections carry editorial copy written for this proposal (not mirrored TVNL phrasing) with placed photography.
- `Power Generation` — plants, installed capacity and historical performance highlights, with representative imagery.
- `Sustainability` — CSR, environment, environmental policy and safety, with representative imagery.
- `Tenders` — notices, extensions, news, corrigenda and cancellations, with a working local filter.
- `Notices` — circulars/office orders, latest updates, public notices and employment notices.
- `Media` — news/events, photo gallery, videos and media coverage.
- `Info Desk` — grievance redressal, ash reports, careers, formats, documents, RTI/public disclosures, links and employee section.
- `Contact us` — headquarter, plant and directory.
- `Login` — labelled demo screens for Employee Login, SRM Bidding Portal and Tender Payment.

The language control switches the interface between English and Hindi. Search indexes consolidated view content and captured public records. Top navigation changes view; submenu links address anchors within that view. Record links and record search results use `#info/record-<id>` routes, which open the matching record disclosure and scroll to it. Captured source text is not automatically an approved Hindi translation.

## Current evidence boundary

The earlier prototype review recorded a Comet run covering navigation, filtering, language switching and the three portal interactions. That evidence is historical and does not verify the current local-content or eight-chapter changes.

Current-run verification is pending: scrape inventory reconciliation, local document and record-route coverage, zero TVNL runtime URL targets, logo legibility, all eight chapter states, keyboard navigation, mobile layout and the reduced-motion stacked alternative. No complete-mirror, offline-completeness or current accessibility pass is claimed.

## Source basis

- TVNL facts, current navigation labels and disclosure categories: [`docs/tvnl.md`](../tvnl.md), with source provenance retained in the strategy document and scrape manifest.
- Local TVNL logo: [`assets/tvnl-logo.png`](assets/tvnl-logo.png).
- Local Jharkhand state emblem: [`assets/jharkhand-emblem.png`](assets/jharkhand-emblem.png).
- Local plant images: [`assets/plant-sl1.jpg`](assets/plant-sl1.jpg) and [`assets/plant-sl2.jpg`](assets/plant-sl2.jpg); about-page photo [`assets/abt.jpg`](assets/abt.jpg) and Managing Director portrait [`assets/MD_Tvnl.jpg`](assets/MD_Tvnl.jpg) mirrored from tvnl.in.
- Representative stock photography (`assets/stock-*.jpg`, via Unsplash): control room, station exterior, cooling towers, transmission pylons, coal, solar field, site safety. These are captioned as representative images and do not depict TTPS.
- Presentation references: [`ZettaJoule`](../zettajoule), [`Enpower Trading`](https://enpowertrading.co.za/), [`Caeli Energie`](https://www.caeli-energie.com/en/), [`Aramco`](https://www.aramco.com/en).

The reference sites inform presentation and interaction only. TVNL claims remain tied to the source documents and published records.

## Proposal package

- [`formal-quotation.md`](formal-quotation.md)
- [`capability-statement.md`](capability-statement.md)
- [`outreach-email.md`](outreach-email.md)
- [`sow-draft.md`](sow-draft.md)
- [`issues/`](issues/) — workstream ticket bodies and GitHub issue status

GitHub tracking is live in [Ship Fast Project #1](https://github.com/orgs/ShipFastAI/projects/1):

- [#225 Plan and discovery](https://github.com/ShipFastAI/ship-fast/issues/225)
- [#226 Prototype review](https://github.com/ShipFastAI/ship-fast/issues/226)
- [#227 Product capabilities](https://github.com/ShipFastAI/ship-fast/issues/227)
- [#228 Procurement and compliance](https://github.com/ShipFastAI/ship-fast/issues/228)
- [#229 Formal outreach](https://github.com/ShipFastAI/ship-fast/issues/229)
- [#230 Delivery and launch](https://github.com/ShipFastAI/ship-fast/issues/230)
- [#231 Expansion and reference playbook](https://github.com/ShipFastAI/ship-fast/issues/231)

## Review route

1. Open the prototype and scroll through the Home narrative.
2. Use each top-level label and verify its submenu anchors.
3. Toggle Hindi, then search for `tender`, `ash` or `contact`.
4. Open Login and exercise all three labelled demo screens.
5. Review the proposal package before any formal issue to TVNL.

This repository artifact is a proposal prototype. Production hosting, content ownership, Hindi approval, migration inventory, procurement route and security clearance require TVNL discovery and written approval before deployment.

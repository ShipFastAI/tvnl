# TVNL modernization — prototype review

## Objective

Review the static, bilingual TVNL website prototype as the visual and information-architecture proposal.

## Included experience

- Medium-intensity homepage scrollytelling inspired by Enpower Trading, Caeli Energie and Aramco.
- Current TVNL top-level labels mirrored in one file, with consolidated views and anchored submenus.
- English/Hindi interface toggle, site search, responsive layout and reduced-motion CSS behavior.
- Official TVNL logo, official Jharkhand state emblem and TVNL-hosted plant photographs.
- Tender filtering and disclosure-oriented sections for CSR, environment, reports, notices, media, contact and RTI/public disclosures.
- Employee Login, SRM Bidding Portal and Tender Payment labelled `Demo screen · Internal portal layout`.

## Acceptance criteria

- `docs/tvnl-demo/index.html` opens directly without a build step.
- Every top-level navigation label changes the current view.
- Every submenu label resolves to an anchor inside its view.
- Three energy story chapters update the sticky figure while scrolling.
- Hindi toggle changes navigation, headings, content and controls.
- Tender search returns matching records and removes non-matching records.
- Each portal screen is visibly labelled as a demo screen.
- Keyboard focus, responsive layout and reduced-motion behavior are reviewed before handoff.

## Evidence

Manual Comet run exercised navigation, filtering, language toggle, all three portal interactions and receipt output during implementation. Final commit SHA and live review URL should be added after the work lands.

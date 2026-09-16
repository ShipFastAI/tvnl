# TVNL modernization — product capabilities

## Objective

Pull reusable public-information and CMS capabilities from the TVNL proposal into the Ship Fast product roadmap without hardcoding TVNL-specific content into the generation engine.

## Candidate capabilities

- Staff-authenticated document library with categories, metadata and downloads.
- Tender notice content type with NIT number, category, due date, PDF, external bid link and auto-archive.
- Search and filter across notices and reports.
- Scheduled content and homepage widgets.
- DPDP-reviewed contact/inquiry forms with minimal fields and controlled retention.
- Role-based access and approval workflow for MD, IT and PR publishing roles.
- Multi-site/project-page management with custom domains.
- Static export path suitable for an India-hosted public site.

## Boundaries

Do not build tender bid submission, EMD/tender-fee collection, SAP SRM API integration, SCADA/DCS feeds, employee/HR replacement, custom grievance tracking or social-media management as part of this workstream.

## Acceptance criteria

- Each candidate capability has a product specification, owner, data-flow decision and reuse assessment.
- Generic contracts support arbitrary government, PSU and document-heavy customers.
- No TVNL-specific slug, copy deck or keyword branch enters core generation logic.
- B/C capabilities are demonstrated before any customer option is exercised.

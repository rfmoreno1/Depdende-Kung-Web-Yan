# MMS 142 Assignment #2 — completion checklist

Use the official five-page assignment brief and progress report template for submission. This file is a technical review aid, not a substitute for the group's PDF report.

## Technical and design requirements

| Item | Status | Evidence or remaining task |
| --- | --- | --- |
| 1a–1d: Four unique desktop visual mockups | Six branded desktop and six mobile designs created | Separate editable Figma frames in [Final Branded Mockups](https://www.figma.com/design/et4i2hMIC7neGCXwESyqss?node-id=575-55). Original mockups remain intact. Add approved artwork and pair each with its wireframe for documentation. |
| 1e: Wireframe-to-mockup alignment | Needs team documentation | Note changes to button contrast, privacy contents navigation, contact form, product sizes/quantity and placeholders. Explain why each change is necessary. |
| 2a–2d: Six Bootstrap webpages | Implemented | Home, contact, privacy and three individual product pages. HTML5, viewport, titles, semantic sections, shared navigation, links and footer. |
| Real product artwork | Blocked on artwork | Product slots are empty cream placeholders. Homepage hero and privacy illustration slots are deliberately empty; neither contains a shirt or substitute logo. Replace with approved artwork when available. |
| Brand kit | Applied to website | Canva and Figma confirm Darumadrop One, Nunito, navy, mustard, terracotta, sage and cream. Official logo and icon assets exported from Figma. |
| Figma Code Layer | Revised source imported | [Updated Code Layer](https://www.figma.com/design/et4i2hMIC7neGCXwESyqss?node-id=579-191) on the Final Branded Mockups page. The original Code Layer and frames remain unchanged. Open the layer to initialize its preview; preview rendering is not yet verified. |
| GitHub Pages | Six pages verified live | https://rfmoreno1.github.io/Depdende-Kung-Web-Yan/ |
| 2e: JavaScript Method #2 | Implemented | Contact goes to hello@examplewebsite142.com; each product order goes to orders@examplewebsite142.com. All generate a mailto draft; no automatic sending. |
| 2f: Accessible and Inclusive Design | Implemented; final review needed | Labels, logical headings, alt text, skip link, visible focus, clear feedback, keyboard controls, contrast and responsive layout. Verify after adding final artwork. |
| 3: AI use documentation | Team must complete honestly | AI assistance was used to inspect the mockups, implement and revise HTML/CSS/JS, export brand assets, and test. Members should accurately describe their own design work, independent editing, testing, learning and verification. |
| Contribution log | Team must complete | Each member must design at least one full page, create a Bootstrap webpage and contribute using their own GitHub account. Do not invent commits or authorship. |
| Submission | Pending confirmation | PDF named MMS142_A2_GroupName-.pdf; public Figma link, backup PDF export link, GitHub repository URL and live GitHub Pages URL. Deadline Nov 20, 2026; late cutoff Nov 22. Never modify GitHub after submitting on MyPortal. |

## Accessibility checklist (Module 4.1)

- Contrast: the tested pairs below follow WCAG 2.2 AA (4.5:1 for normal text, 3:1 for large text and meaningful control boundaries). No claim of full WCAG conformance is made.
- Text alternatives: descriptive alt text on every meaningful HTML image, including pending visual slots; decorative icons hidden from assistive technology. When an image is added, replace its placeholder alt text with an accurate description of the actual image.
- Keyboard and visible focus: tab through links, form inputs, size options, quantity buttons and FAQ summaries; Escape closes the mobile nav.
- Forms: each input has a label; required fields are validated; the status area explains how to send the prepared draft.
- Consistency and reading order: same navbar/footer on every page; semantic header, nav, main and footer; one h1 per page; ordered headings.
- Color alone: selected size has a strong border in addition to color; errors contain text.
- Readability and tap targets: responsive grid and wrapping, rem sizes, buttons at least 44px tall; test zoom and final images.
- Captions/transcripts: not applicable unless the team adds audio or video.

### Brand color contrast audit

| Foreground and background | Ratio | Normal-text AA decision |
| --- | ---: | --- |
| Navy #344454 / cream #f3eada | 8.37:1 | Pass: navigation, footer and secondary button |
| Navy / paper #fffdf8 | 9.83:1 | Pass: body text and headings |
| Accessible ink #243442 / mustard #d3a54d | 5.63:1 | Pass: primary button and selected size |
| Cream / mustard | 1.90:1 | Fail: do not use for text |
| Navy / mustard | 4.41:1 | Fail for normal text: use accessible ink |
| Navy / white | 10.00:1 | Pass: input boundaries and text |
| Muted #52677a / white | 5.87:1 | Pass: placeholder text |
| Sage #819477 / navy | 3.06:1 | Pass for non-text dividers; not normal text |
| Cream / terracotta #c4754c | 2.93:1 | Fail: keep terracotta decorative |

Reference: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html

## Brand assets

Official Figma Brand kit nodes: cat mark 8:38, stacked color 8:46, compact color 8:45, stacked black 8:44, compact black 8:43, sage icon sheet 10:5, terracotta icon sheet 10:6. Canva design: DAHX-0dRhxk. The asset exports are team-provided artwork; no substitute logo or product design has been fabricated.

## Final manual checks

### Verification completed on November 18, 2026

- All six published pages opened successfully; all three product pages updated the subtotal from ₱499 to ₱998 when quantity increased to two, and size selection worked.
- Contact's required-field validation, a FAQ disclosure, and the privacy contents anchor worked in the published site.
- Source checks verified 93 local links, 14 image references, a unique H1 per page, and matching label IDs. JavaScript syntax and four draft-generation logic tests passed (no email was sent).
- Desktop homepage appearance reviewed. Tablet/mobile visual and keyboard checks, CDN verification across devices, and actual email-app handoff still need team testing.
- Revised source checked for all six pages: 95 link references (local targets and anchors checked), 14 images with nonempty alt text, single H1 and matching form label IDs. All six pages opened on GitHub Pages, and the new homepage and privacy placeholder descriptions were confirmed in the browser accessibility tree. The latest stylesheet refresh was committed, but deployment was still serving older cached styles during review.

### Remaining checks after final artwork is added

1. Open the GitHub Pages URL in a private browser, then visit all six pages.
2. Resize to desktop, tablet and mobile widths and test with the keyboard.
3. Select a size and quantity on each product page; check the subtotal and email recipient/body. Do not send test mail to the example addresses.
4. Fill in the contact form with fictional test data and check the draft.
5. Verify the official image rights, final product pictures and alt text, store details, FAQ, and privacy copy.
6. Each teammate reviews and edits their assigned page, pushes their actual work, and records their contribution.
7. Export the required documentation and confirm public access to Figma and Pages before submitting.

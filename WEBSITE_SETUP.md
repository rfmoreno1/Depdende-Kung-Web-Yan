# Whisker & Wonder — MMS 142 Assignment #2

A six-page static storefront using HTML5, the Bootstrap 6.0.0-alpha.1 CDN from Module 6.1, CSS and vanilla JavaScript. The site matches the team's Figma layout and uses the actual brand kit. The original mockups are unchanged.

## How to open and edit

Open `index.html` in Chrome or use VS Code Live Server. Internet access is required for the Bootstrap CDN and Google Fonts. The custom stylesheet also provides a basic grid fallback if the CDN cannot load.

| File | What it controls |
| --- | --- |
| index.html | Home, featured products, About |
| dont-be-late.html | Don't Be Late Tee |
| everyday-comfort.html | Everyday Comfort Tee |
| do-good-work.html | Do Good Work Tee |
| contact.html | Contact form and FAQ |
| privacy.html | Privacy policy with numbered sections and contents links |
| css/styles.css | Shared layout, responsive design, official colors, fonts and buttons; final revised palette block is at the bottom |
| js/site.js | Mobile navigation, form validation, sizes/quantity, subtotal and email drafts |
| images/ | Team's original exported logo variants, icon sheets and temporary product placeholder |
| assignment-checklist.md | Rubric checklist, accessibility and remaining work |

### Bootstrap concepts

Every page links the same CDN CSS and JavaScript. The shared navbar, `container`, `row`, `md:col-6`, `g-7`, `card`, `btn-solid theme-primary`, `form-control` and flex utilities organize the page. Custom CSS is linked afterwards so the approved colors and typography override the defaults. The responsive columns stack on small screens (Module 6.1).

### Revised color choices

The header, mobile menu and footer use sage #819477 with even darker navy #1D262F. Cream #F3EADA and brand navy #344454 are the body colors. Featured cards use mustard #D3A54D. Buttons use accessible terracotta #CC7B52 with #1D262F text (4.75:1); the original #C4754C is preserved as a brand accent. The two non-palette shades are recorded as accessibility alternatives in Figma. Do not make the header black or change it based on the operating system theme.

### Replace the image placeholders

The approved product artwork is not present in the mockups yet. When artwork is ready, save the three files to `images/` (for example, `dont-be-late.png`, `everyday-comfort.png` and `do-good-work.png`). Update each matching `src`, `alt` and image caption in the relevant product page and Home cards. The home hero and privacy illustration use an intentionally empty `images/visual-placeholder.svg`; replace each with its own approved visual, not a substitute logo. The navigation logo stays in place. Replace the temporary alt description with accurate, meaningful text; use empty alt only for a truly decorative image.

### Test the forms

Select a size and quantity, then Order Now. JavaScript calculates the subtotal and prepares a draft to orders@examplewebsite142.com. Contact prepares a draft to hello@examplewebsite142.com. Review the email contents, but do not send test messages to the assignment's example addresses.

### GitHub workflow for each teammate

1. Open GitHub and choose the file you are responsible for.
2. Make your own edits locally or use GitHub's editor. Check the preview in a browser.
3. Commit with a descriptive message (e.g., "Add final product photo and alt text").
4. Use the actual contribution log; don't create fake author records.
5. Set up GitHub Pages under Settings → Pages → Deploy from a branch → main → / (root), if not already configured.
6. Open the published URL in a private browser and test it. Do not commit or change the repo after MyPortal submission.

### Before submission

Complete the four branded desktop mockups beside their wireframes and document accessibility, actual contribution history, and AI usage honestly using the supplied PDF template. Approve product photos, copy, stock, shipping, payment, returns and privacy information. See `assignment-checklist.md`.

Original Figma mockups: https://www.figma.com/design/et4i2hMIC7neGCXwESyqss/Whisker---Wonder-MAIN?node-id=512-367
Final branded editable mockups: https://www.figma.com/design/et4i2hMIC7neGCXwESyqss?node-id=575-55
Updated Figma Code Layer: https://www.figma.com/design/et4i2hMIC7neGCXwESyqss?node-id=579-191 (open to initialize preview)
Published website: https://rfmoreno1.github.io/Depdende-Kung-Web-Yan/
Brand kit: https://www.canva.com/design/DAHX-0dRhxk/P9cF5ItfWr8msgKUR_6x7g/edit

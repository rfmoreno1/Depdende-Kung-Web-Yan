# Whisker & Wonder — MMS 142 Assignment #2

This is a **beginner-friendly, static six-page Bootstrap website** built from the layout and copy of the group's Figma visual mockups. It includes a contact form and three product email-draft order forms (JavaScript Method #2). Original Figma designs have **not** been changed.

## Pages

- `index.html` — Home with hero, three featured T-shirts, and About section
- `contact.html` — Contact details, working mailto-based contact form, FAQs
- `privacy.html` — Eight numbered privacy policy sections following the mockup
- `dont-be-late.html`, `everyday-comfort.html`, `do-good-work.html` — unique product pages, size and quantity input, order email draft

## Important **before submitting or launching**

1. Replace **images/product-placeholder.svg** with Athena's actual approved art for each T-shirt, ideally three individual image files. Replace `src` and meaningful `alt` text in Home and each product page. Gray/X panels reflect the current Figma placeholders, NOT sellable product photos.
2. Replace **images/logo-placeholder.svg** with the actual logo from the Figma Brand Kit. It is a temporary recreation because the original was not available locally; do not use it as a final brand asset.
3. Confirm the brand colors with the group. The current design uses the Brand Kit's navy, mustard, terracotta, sage, and cream; the mockups themselves are gray/white mid-fidelity placeholders.
4. Confirm real store contact information, social links, FAQ shipping/payment/returns and registration claims. We deliberately did not claim these were verified.
5. Check and approve privacy copy as an accurate description of how the store handles personal information. The draft follows the Figma mockup; it is not legal advice.
6. Test on wide desktop (~1440px), tablet (768px), and phone (390px). Use the Tab key and DevTools Console; check all links and correct email draft contents.
7. In this assignment the email app opens to a draft. **It does not automatically send**. If the browser has no default email client, nothing may open; that's a device configuration issue.
8. Set repository GitHub Pages to **Deploy from branch → main → / (root)** after group review. GitHub Pages needs `index.html` at the root.
9. Ensure every member contributes a GitHub commit with their real own work. Do not commit ANYTHING after submitting to MyPortal.

## How to run locally

Open `index.html` directly in Chrome (internet needed for Bootstrap and web fonts). For best results use VS Code's Live Server. Click Shop / Contact / Privacy and test.

## Folder structure

```
index.html
contact.html
privacy.html
dont-be-late.html
everyday-comfort.html
do-good-work.html
css/styles.css
js/site.js
images/product-placeholder.svg
images/logo-placeholder.svg
```

## Figma source

https://www.figma.com/design/et4i2hMIC7neGCXwESyqss/Whisker---Wonder-MAIN?node-id=512-367

## Rubric specifics

Every HTML page has HTML5 doctype, language, charset, viewport, unique title, header/nav/main/footer, one h1, descriptive link text, and matching navigation/footer. Bootstrap 6 alpha CDN is included on every page as Module 6.1 indicates, with custom CSS linked AFTER it. JavaScript mailto method targets `hello@examplewebsite142.com` or `orders@examplewebsite142.com`, as the brief requires. Forms show instructions/feedback; keyboard navigation and visible focus are included. This is **a near-complete technical implementation**, pending final artwork, verified business content, live testing, and documentation.

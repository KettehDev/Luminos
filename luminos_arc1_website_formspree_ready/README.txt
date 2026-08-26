# LUMINOS ARC-1 Website

A responsive HTML/CSS/JS recreation of the supplied LUMINOS ARC-1 reference.

## Run
Open `index.html` in VS Code with Live Server, or double-click it in your browser.

## Files
- `index.html` — page structure
- `style.css` — responsive styling
- `script.js` — smooth scrolling, mobile menu, pre-order form interaction
- `assets/` — product/gallery crops derived from the supplied reference image

The pre-order form is front-end only; connect it to your backend/email service when you're ready.


FORMSPREE SETUP
---------------
1. Create a form at https://formspree.io/
2. Copy your Formspree form ID.
3. Open index.html.
4. Find:
   https://formspree.io/f/YOUR_FORMSPREE_ID
5. Replace YOUR_FORMSPREE_ID with your actual Formspree ID.
6. Upload the updated files to GitHub Pages.

The email field is named "email" and the subject is:
New ARC-1 Pre-Order Signup

Your personal email address is NOT stored in the website code.
Formspree handles delivery to the email address connected to your Formspree account.

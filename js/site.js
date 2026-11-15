(() => {
  'use strict';
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('site-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('open', !expanded);
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
    }));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { links.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
    });
  }
  const page = document.body.dataset.page;
  if (page === 'shop' && document.querySelector('.product-page')) {
    document.querySelectorAll('[data-nav="shop"]').forEach(a => a.setAttribute('aria-current','page'));
  }
  if (page === 'privacy') {
    document.querySelectorAll('[data-nav]').forEach(a => a.removeAttribute('aria-current'));
  }
  function openDraft(to, subject, body, feedback) {
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (feedback) {
      feedback.textContent = 'Your email app should open with a prepared draft. Please review it and press Send there. If nothing opens, check that a default email app is configured.';
    }
    window.location.href = mailto;
  }
  function validateOrShow(form, status) {
    if (form.checkValidity()) return true;
    form.reportValidity();
    if (status) status.textContent = 'Please complete the required fields correctly before continuing.';
    return false;
  }
  const contact = document.getElementById('contact-form');
  if (contact) contact.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.getElementById('contact-feedback');
    if (!validateOrShow(contact,status)) return;
    const name = contact.elements.namedItem('name').value.trim();
    const email = contact.elements.namedItem('email').value.trim();
    const subject = contact.elements.namedItem('subject').value.trim();
    const message = contact.elements.namedItem('message').value.trim();
    if (!name || !subject || message.length < 10) { status.textContent='Please complete all required fields.'; return; }
    const body = `Name: ${name}
Reply-to email: ${email}

Message:
${message}`;
    openDraft('hello@examplewebsite142.com', `Whisker & Wonder inquiry: ${subject}`, body, status);
  });
  document.querySelectorAll('.order-form').forEach(form => {
    const quantity = form.querySelector('.quantity-field');
    const status = form.querySelector('.order-feedback');
    form.querySelector('.quantity-minus')?.addEventListener('click',()=> {quantity.value=String(Math.max(1,Number(quantity.value||1)-1));});
    form.querySelector('.quantity-plus')?.addEventListener('click',()=> {quantity.value=String(Math.min(20,Number(quantity.value||1)+1));});
    form.addEventListener('submit', event=> {
      event.preventDefault();
      if (!validateOrShow(form,status)) return;
      const chosenSize = form.querySelector('input[name="size"]:checked');
      const qty = Number(quantity.value);
      if (!chosenSize || !Number.isInteger(qty) || qty < 1 || qty > 20) {
        status.textContent = 'Please choose a shirt size and a quantity from 1 to 20.';
        return;
      }
      const product = form.dataset.product;
      const unit = Number(form.dataset.price);
      const total = unit * qty;
      const body = `Hello Whisker & Wonder,

I would like to inquire about ordering:
Product: ${product}
Size: ${chosenSize.value}
Quantity: ${qty}
Listed unit price: PHP ${unit}
Listed subtotal (excluding shipping): PHP ${total}

Please confirm stock availability, shipping cost, payment options, and next steps.

Customer name:
Delivery location:
Contact information:

Thank you!`;
      openDraft('orders@examplewebsite142.com', `Whisker & Wonder order inquiry — ${product}`, body, status);
    });
  });
})();

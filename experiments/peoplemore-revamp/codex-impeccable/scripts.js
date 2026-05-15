(function () {
  const menuButton = document.querySelector('[data-menu-button]');
  const navLinks = document.querySelector('[data-nav-links]');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open');
    });
  }

  const pageKey = document.body.dataset.page;
  if (pageKey) {
    document.querySelectorAll('[data-page-link]').forEach((link) => {
      if (link.dataset.pageLink === pageKey) {
        link.setAttribute('data-active', 'true');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  const yearNode = document.querySelector('[data-year]');
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    const status = contactForm.querySelector('[data-form-status]');

    const setError = (fieldName, message) => {
      const node = contactForm.querySelector(`[data-error-for="${fieldName}"]`);
      if (node) {
        node.textContent = message;
      }
    };

    const clearErrors = () => {
      contactForm.querySelectorAll('[data-error-for]').forEach((node) => {
        node.textContent = '';
      });
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      clearErrors();

      const form = new FormData(contactForm);
      const name = String(form.get('name') || '').trim();
      const email = String(form.get('email') || '').trim();
      const company = String(form.get('company') || '').trim();
      const model = String(form.get('model') || '').trim();
      const message = String(form.get('message') || '').trim();
      const consent = form.get('consent');

      let hasError = false;

      if (!name) {
        setError('name', 'Please enter your full name.');
        hasError = true;
      }

      if (!email) {
        setError('email', 'Please enter your work email.');
        hasError = true;
      } else if (!isValidEmail(email)) {
        setError('email', 'Email format should include an @ symbol and domain.');
        hasError = true;
      }

      if (!company) {
        setError('company', 'Please enter your company name.');
        hasError = true;
      }

      if (!model) {
        setError('model', 'Please select the engagement model you want to discuss.');
        hasError = true;
      }

      if (message.length < 20) {
        setError('message', 'Please add at least 20 characters about your project scope.');
        hasError = true;
      }

      if (!consent) {
        setError('consent', 'Please confirm consent to process this inquiry.');
        hasError = true;
      }

      if (hasError) {
        if (status) {
          status.textContent = 'Please review the highlighted fields and try again.';
        }
        return;
      }

      if (status) {
        status.textContent = 'Thanks. Your inquiry is ready to send. We reply within one business day.';
      }

      contactForm.reset();
    });
  }
})();

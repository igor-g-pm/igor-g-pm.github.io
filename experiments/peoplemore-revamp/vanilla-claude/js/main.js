/* ============================================================
   People More — main.js
   Shared JS: nav, carousel, accordion, smooth scroll, form validation, scroll animations
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. STICKY NAV — add "scrolled" class after 50px
  ---------------------------------------------------------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ----------------------------------------------------------
     2. MOBILE NAV TOGGLE
  ---------------------------------------------------------- */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.querySelector('.nav__mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && mobileNav.classList.contains('open')) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ----------------------------------------------------------
     3. TESTIMONIALS CAROUSEL
  ---------------------------------------------------------- */
  function initCarousel(carouselEl) {
    const track     = carouselEl.querySelector('.carousel__track');
    const slides    = carouselEl.querySelectorAll('.carousel__slide');
    const prevBtn   = carouselEl.querySelector('[data-carousel-prev]');
    const nextBtn   = carouselEl.querySelector('[data-carousel-next]');
    const dotsWrap  = carouselEl.querySelector('.carousel__dots');

    if (!track || slides.length === 0) return;

    let current  = 0;
    let timer    = null;
    const total  = slides.length;

    // Build dots
    if (dotsWrap) {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel__dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
      });
    }

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      // Update dots
      if (dotsWrap) {
        dotsWrap.querySelectorAll('.carousel__dot').forEach((d, i) => {
          d.classList.toggle('active', i === current);
        });
      }
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      stopAuto();
      timer = setInterval(next, 5000);
    }
    function stopAuto() {
      clearInterval(timer);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAuto(); });

    // Pause on hover
    carouselEl.addEventListener('mouseenter', stopAuto);
    carouselEl.addEventListener('mouseleave', startAuto);

    // Touch/swipe support
    let touchStartX = 0;
    carouselEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    carouselEl.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) next(); else prev();
        startAuto();
      }
    }, { passive: true });

    startAuto();
  }

  document.querySelectorAll('.carousel').forEach(initCarousel);

  /* ----------------------------------------------------------
     4. FAQ ACCORDION
  ---------------------------------------------------------- */
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item     = trigger.closest('.accordion-item');
      const isOpen   = item.classList.contains('open');

      // Close all in the same parent if desired (optional — single-open)
      // Uncomment to have only one open at a time:
      // item.closest('.accordion-group')?.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));

      item.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', !isOpen);
    });
  });

  /* ----------------------------------------------------------
     5. SMOOTH SCROLL for anchor links
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64) + 16;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ----------------------------------------------------------
     6. CONTACT FORM VALIDATION
  ---------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const successEl  = document.getElementById('formSuccess');
    const charCount  = document.getElementById('charCount');
    const messageEl  = contactForm.querySelector('[name="message"]');

    // Live character counter
    if (messageEl && charCount) {
      messageEl.addEventListener('input', () => {
        charCount.textContent = `${messageEl.value.length} / 2000 characters`;
      });
    }

    function validateField(group, condition, msg) {
      const errEl = group.querySelector('.error-msg');
      if (!condition) {
        group.classList.add('has-error');
        if (errEl) errEl.textContent = msg;
        return false;
      }
      group.classList.remove('has-error');
      return true;
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let valid = true;

      // Name
      const nameGroup = document.getElementById('nameGroup');
      const nameVal   = contactForm.querySelector('[name="fullname"]').value.trim();
      valid = validateField(nameGroup, nameVal.length >= 2, 'Please enter your full name (at least 2 characters).') && valid;

      // Company
      const compGroup = document.getElementById('companyGroup');
      const compVal   = contactForm.querySelector('[name="company"]').value.trim();
      valid = validateField(compGroup, compVal.length >= 2, 'Please enter your company name.') && valid;

      // Email
      const emailGroup = document.getElementById('emailGroup');
      const emailVal   = contactForm.querySelector('[name="email"]').value.trim();
      valid = validateField(emailGroup, isValidEmail(emailVal), 'Please enter a valid business email address.') && valid;

      // Message
      const msgGroup = document.getElementById('messageGroup');
      const msgVal   = contactForm.querySelector('[name="message"]').value.trim();
      valid = validateField(msgGroup, msgVal.length >= 50, 'Please tell us a bit more about your project (at least 50 characters).') && valid;

      // GDPR
      const gdprGroup = document.getElementById('gdprGroup');
      const gdprVal   = contactForm.querySelector('[name="gdpr"]').checked;
      valid = validateField(gdprGroup, gdprVal, 'You must agree to the processing of your personal data to submit the form.') && valid;

      if (valid) {
        // Simulate success (no real backend)
        contactForm.style.display = 'none';
        if (successEl) {
          successEl.classList.add('visible');
          successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        // Scroll to first error
        const firstError = contactForm.querySelector('.has-error');
        if (firstError) {
          const offset = 80;
          const top = firstError.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });

    // Clear errors on input
    contactForm.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', () => {
        const group = field.closest('.form-group') || field.closest('.form-checkbox');
        if (group) group.classList.remove('has-error');
      });
    });
  }

  /* ----------------------------------------------------------
     7. SCROLL ANIMATIONS — IntersectionObserver
  ---------------------------------------------------------- */
  const animatedEls = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window && animatedEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    animatedEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all immediately
    animatedEls.forEach(el => el.classList.add('visible'));
  }

  /* ----------------------------------------------------------
     Active nav link highlight based on current page
  ---------------------------------------------------------- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .nav__mobile .nav__link').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ----------------------------------------------------------
     Services sidebar active link on scroll
  ---------------------------------------------------------- */
  const sidebarLinks = document.querySelectorAll('.services-sidebar__link');
  if (sidebarLinks.length > 0) {
    const sections = Array.from(sidebarLinks).map(l => {
      const id = l.getAttribute('href').replace('#', '');
      return document.getElementById(id);
    }).filter(Boolean);

    const onServiceScroll = () => {
      let current = '';
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top <= 120) current = sec.id;
      });
      sidebarLinks.forEach(l => {
        const id = l.getAttribute('href').replace('#', '');
        l.classList.toggle('active', id === current);
      });
    };
    window.addEventListener('scroll', onServiceScroll, { passive: true });
  }

})();

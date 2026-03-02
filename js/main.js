/* ═══════════════════════════════════════════════════════════════════════
   RENACRICUT — main.js
   Mobile nav toggle + contact form validation
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Mobile Nav Toggle ──────────────────────────────────────────────── */
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('navBurger');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('nav--open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close nav when a link is clicked
    document.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav--open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        nav.classList.remove('nav--open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ─── Contact Form Validation ────────────────────────────────────────── */
  const form       = document.getElementById('orderForm');
  const nameInput  = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const nameError  = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  }

  function showError(el, msg) {
    el.textContent = msg;
    el.previousElementSibling.style.borderBottomColor = '#c0392b';
  }

  function clearError(el) {
    el.textContent = '';
    el.previousElementSibling.style.borderBottomColor = '';
  }

  if (form) {
    // Live validation on blur
    nameInput.addEventListener('blur', function () {
      nameInput.value.trim() === ''
        ? showError(nameError, 'Please enter your name.')
        : clearError(nameError);
    });

    emailInput.addEventListener('blur', function () {
      if (emailInput.value.trim() === '') {
        showError(emailError, 'Please enter your email address.');
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailError, 'Please enter a valid email address.');
      } else {
        clearError(emailError);
      }
    });

    form.addEventListener('submit', function (e) {
      let valid = true;

      if (nameInput.value.trim() === '') {
        showError(nameError, 'Please enter your name.');
        valid = false;
      } else {
        clearError(nameError);
      }

      if (emailInput.value.trim() === '') {
        showError(emailError, 'Please enter your email address.');
        valid = false;
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailError, 'Please enter a valid email address.');
        valid = false;
      } else {
        clearError(emailError);
      }

      if (!valid) {
        e.preventDefault();
        // Scroll to first error
        form.querySelector('.form-error:not(:empty)').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  /* ─── Smooth scroll polyfill (Safari < 15.4) ────────────────────────── */
  if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

})();

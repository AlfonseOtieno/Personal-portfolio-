/* ============================================================
   ALFONSE OTIENO — PORTFOLIO
   js/main.js — Global JavaScript (nav, theme, mobile menu)
   ============================================================ */

// ── THEME TOGGLE ─────────────────────────────────────────────
(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

document.addEventListener('DOMContentLoaded', function () {

  // Apply saved theme icon
  const saved = localStorage.getItem('theme');
  const icon = document.getElementById('theme-icon');
  if (icon && saved === 'dark') icon.textContent = '☀️';

  // Theme toggle button
  const toggleBtn = document.querySelector('.theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        if (icon) icon.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        if (icon) icon.textContent = '☀️';
      }
    });
  }

  // ── MOBILE MENU ─────────────────────────────────────────────
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── ACTIVE NAV LINK ──────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href === currentPage) {
      a.classList.add('active');
    }
  });

});

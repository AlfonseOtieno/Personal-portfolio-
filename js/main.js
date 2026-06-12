/* ============================================================
   ALFONSE OTIENO — PORTFOLIO
   js/main.js — Global JavaScript
   Handles: nav, mobile menu, active links, home page rendering
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── MOBILE MENU ─────────────────────────────────────────────
  var hamburger   = document.getElementById('hamburger');
  var mobileMenu  = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ── ACTIVE NAV LINK ─────────────────────────────────────────
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
    if (a.getAttribute('href') === currentPage) {
      a.classList.add('active');
    }
  });

  // ── HOME: RENDER LATEST ARTICLE ────────────────────────────
  var articleSlot = document.getElementById('latest-article-slot');
  if (articleSlot && typeof ARTICLES !== 'undefined' && ARTICLES.length > 0) {
    var a = ARTICLES[0];
    articleSlot.innerHTML =
      '<div class="article-preview-card" onclick="window.location.href=\'articles.html#' + a.slug + '\'">' +
        '<h3>' + a.title + '</h3>' +
        '<p class="excerpt">' + a.excerpt + '</p>' +
        '<div class="article-meta-row">' +
          '<span>' + a.date + '</span>' +
          '<span>' + a.readTime + '</span>' +
          '<span>' + a.topic + '</span>' +
        '</div>' +
        '<span class="article-read-more">Read article <i class="fa-solid fa-arrow-right"></i></span>' +
      '</div>';
  }

  // ── HOME: RENDER FEATURED PROJECT ──────────────────────────
  var projectSlot = document.getElementById('featured-project-slot');
  if (projectSlot && typeof PROJECTS !== 'undefined' && PROJECTS.length > 0) {
    var p = PROJECTS[0];
    var stackHtml = p.stack.slice(0, 5).map(function (s) {
      return '<span class="stack-tag">' + s + '</span>';
    }).join('');
    var badgeClass = p.status === 'Archived'
      ? 'project-status-badge status-archived'
      : (p.status === 'In Progress' ? 'project-status-badge status-progress' : 'project-status-badge');

    projectSlot.innerHTML =
      '<div class="featured-project-card">' +
        '<div class="fp-top">' +
          '<div class="fp-preview">' +
            '<img src="../assets/portfolio/' + p.image + '" alt="' + p.title + ' preview" ' +
              'onerror="this.parentNode.innerHTML=\'<div class=fp-img-placeholder>No preview available</div>\'" />' +
          '</div>' +
          '<div class="fp-info">' +
            '<p class="fp-label">Latest Project</p>' +
            '<h3>' + p.title + '</h3>' +
            '<span class="' + badgeClass + '">' + p.status + '</span>' +
            '<p>' + p.summary + '</p>' +
            '<div class="fp-stack">' + stackHtml + '</div>' +
            '<div class="fp-actions">' +
              (p.liveUrl ? '<a href="' + p.liveUrl + '" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Live Site</a>' : '') +
              '<a href="projects.html#' + p.slug + '" class="btn btn-secondary btn-sm">View Case Study</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

});

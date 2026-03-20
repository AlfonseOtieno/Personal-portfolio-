/* ============================================================
   js/articles.js — Articles page logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  const articleList  = document.getElementById('article-list');
  const articleViews = document.querySelectorAll('.article-single');

  // Open a specific article
  window.openArticle = function (slug) {
    articleList.classList.add('hidden');
    articleViews.forEach(function (el) { el.classList.remove('active'); });
    const target = document.getElementById('article-' + slug);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back to list
  window.closeArticle = function () {
    articleViews.forEach(function (el) { el.classList.remove('active'); });
    articleList.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Make whole article card clickable
  document.querySelectorAll('.article-card[data-slug]').forEach(function (card) {
    card.addEventListener('click', function () {
      openArticle(card.getAttribute('data-slug'));
    });
  });

});

/* ============================================================
   js/progress.js — Progress page counter animation
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  function animateCounters() {
    document.querySelectorAll('.stat-number[data-target]').forEach(function (el) {
      const target   = parseInt(el.getAttribute('data-target'), 10);
      const duration = 1400;
      const step     = target / (duration / 16);
      let current    = 0;

      const timer = setInterval(function () {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current);
      }, 16);
    });
  }

  // Use IntersectionObserver so counters animate when scrolled into view
  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(statsGrid);
  }

});

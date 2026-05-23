/* ============================================================
   ALFONSE OTIENO — PORTFOLIO
   js/progress.js — BOOKS data, counter animation, timeline toggle,
                    books grid rendering

   HOW TO UPDATE SUBSCRIBERS:
   Change SUBSTACK_SUBSCRIBERS below to the real number.

   HOW TO ADD A NEW BOOK:
   1. Add an object to the TOP of the BOOKS array
   2. Fill in: title, author, isbn, completed, description,
      takeaways (array of strings), applied (string)
   3. The books-read counter and the books grid update automatically.
   ============================================================ */

/* ── SUBSCRIBERS (update manually) ─────────────────────────── */
var SUBSTACK_SUBSCRIBERS = 10;

/* ── BOOKS ──────────────────────────────────────────────────── */
var BOOKS = [
  {
    title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    isbn: '9780345472328',
    completed: 'April 2026',
    description: 'Dweck\'s research on fixed versus growth mindsets showed me why some people quit when things get hard and others double down. The entire premise of this portfolio is built on a growth mindset.',
    takeaways: [
      'Talent is not fixed. Skills are built.',
      'Effort is what creates ability &mdash; not the other way around.',
      'Failure is information, not identity.'
    ],
    applied: 'I now treat every setback as diagnostic data. The failed cybercafe interview didn\'t make me a failure &mdash; it told me exactly what to go learn next.'
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    isbn: '9781455586691',
    completed: 'March 2026',
    description: 'The argument that the ability to focus without distraction is rare and valuable &mdash; and that almost no one is actively cultivating it. Newport convinced me that depth is the competitive advantage of this generation.',
    takeaways: [
      'Shallow work is visible but low-value. Deep work is invisible but high-value.',
      'Your ability to focus is a skill that degrades with neglect and strengthens with practice.',
      'Time blocking is not rigidity &mdash; it is intentionality.'
    ],
    applied: 'I work in 90-minute deep work blocks with no phone and no social media. Everything on this site was built during those blocks.'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    isbn: '9780735211292',
    completed: 'February 2026',
    description: 'The most practical book I have read. Clear breaks down how tiny changes compound into remarkable results. Reading this at the start of 2026 gave me the framework I needed to build the habits that produced everything on this site.',
    takeaways: [
      '1% better every day is 37 times better in a year.',
      'Systems beat goals. Design your environment, not just your willpower.',
      'Identity-based habits last longer than outcome-based habits.'
    ],
    applied: 'I restructured my daily routine entirely around the habit stacking and environment design principles in this book. Boxing practice, reading hour, writing session &mdash; all stacked and anchored to specific cues.'
  },
  {
    title: 'The Brain That Changes Itself',
    author: 'Norman Doidge',
    isbn: '0143113100',
    completed: 'January 2026',
    description: 'The book that destroyed every excuse I had. Doidge documents how the brain physically restructures itself in response to experience and effort. Neuroplasticity is not metaphorical &mdash; it is biological. You can rewire your mind.',
    takeaways: [
      'The brain is not fixed after childhood &mdash; it changes throughout life.',
      'Repeated effort physically changes neural pathways.',
      'The ceiling you believe you have is not the real ceiling.'
    ],
    applied: 'This was the first book I read in 2026 and it set the tone for everything. The knowledge that I could literally change my mind by changing my actions removed the excuse that I was "just not good at this".'
  }
];

/* ── COUNTER ANIMATION ───────────────────────────────────────── */
function animateCount(el, target, duration) {
  var start = 0;
  var increment = target / (duration / 16);
  var current = 0;
  var timer = setInterval(function () {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current);
  }, 16);
}

function runCounters() {
  /* Derive counts automatically from data arrays */
  var articleCount    = typeof ARTICLES !== 'undefined' ? ARTICLES.length : 0;
  var projectCount    = typeof PROJECTS !== 'undefined' ? PROJECTS.length : 0;
  var bookCount       = BOOKS.length;
  var subCount        = SUBSTACK_SUBSCRIBERS;

  var elA  = document.getElementById('stat-articles');
  var elP  = document.getElementById('stat-projects');
  var elB  = document.getElementById('stat-books');
  var elS  = document.getElementById('stat-subscribers');

  if (elA) animateCount(elA, articleCount, 1200);
  if (elP) animateCount(elP, projectCount, 1200);
  if (elB) animateCount(elB, bookCount, 1200);
  if (elS) animateCount(elS, subCount, 1200);
}

/* ── INTERSECTION OBSERVER: trigger counters when in view ───── */
function initCounters() {
  var statsGrid = document.querySelector('.stats-grid');
  if (!statsGrid) return;

  var observed = false;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !observed) {
        observed = true;
        runCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsGrid);
}

/* ── TIMELINE TOGGLE ─────────────────────────────────────────── */
function initTimelineToggle() {
  var toggleBtn   = document.getElementById('timeline-toggle');
  var toggleIcon  = document.getElementById('timeline-toggle-icon');
  var toggleLabel = document.getElementById('timeline-toggle-label');
  if (!toggleBtn) return;

  var hidden  = document.querySelectorAll('.timeline-hidden');
  var showing = false;

  toggleBtn.addEventListener('click', function () {
    showing = !showing;
    hidden.forEach(function (item) {
      item.style.display = showing ? 'block' : 'none';
    });
    if (toggleIcon) {
      toggleIcon.className = showing
        ? 'fa-solid fa-chevron-up'
        : 'fa-solid fa-chevron-down';
    }
    if (toggleLabel) {
      toggleLabel.textContent = showing ? 'Show less' : 'Show more';
    }
  });
}

/* ── RENDER BOOKS GRID ───────────────────────────────────────── */
function renderBooks() {
  var grid = document.getElementById('books-grid');
  if (!grid) return;

  grid.innerHTML = BOOKS.map(function (book) {
    var coverUrl = 'https://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg';
    var takeawaysHtml = book.takeaways.map(function (t) {
      return '<li>' + t + '</li>';
    }).join('');

    return '<div class="book-card">' +
      '<div class="book-cover">' +
        '<img src="' + coverUrl + '" alt="Cover of ' + book.title + '" ' +
          'onerror="this.parentNode.classList.add(\'cover-fallback\')">' +
      '</div>' +
      '<div class="book-info">' +
        '<h3 class="book-title">' + book.title + '</h3>' +
        '<p class="book-author">by ' + book.author + '</p>' +
        '<p class="book-completed"><i class="fa-regular fa-calendar-check" style="margin-right:0.3rem;"></i>' + book.completed + '</p>' +
        '<p class="book-desc">' + book.description + '</p>' +
        '<p class="book-takeaways-heading"><strong>Key Takeaways</strong></p>' +
        '<ul class="book-takeaways">' + takeawaysHtml + '</ul>' +
        '<p class="book-applied"><em><strong>Applied:</strong> ' + book.applied + '</em></p>' +
      '</div>' +
    '</div>';
  }).join('');
}

/* ── INIT: PROGRESS PAGE ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('.stats-grid')) return;

  initCounters();
  initTimelineToggle();
  renderBooks();
});

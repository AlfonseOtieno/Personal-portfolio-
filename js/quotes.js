/* ============================================================
   ALFONSE OTIENO — PORTFOLIO
   js/quotes.js — All quotes data + filter/render logic

   HOW TO ADD A NEW QUOTE:
   1. Add a new object to the QUOTES array
   2. Assign one category from: 'discipline', 'building',
      'life', 'books', 'boxing'
   3. The quotes page updates automatically.
   ============================================================ */

var QUOTES = [
  {
    text: 'Look at a stone cutter hammering away at his rock, perhaps a hundred times without as much as a crack showing in it. Yet at the hundred-and-first blow it will split in two, and I know it was not the last blow that did it, but all that had gone before.',
    author: 'Jacob Riis',
    category: 'discipline'
  },
  {
    text: 'The harder you work, the luckier you get.',
    author: 'Gary Player',
    category: 'discipline'
  },
  {
    text: 'We are what we repeatedly do. Excellence, then, is not an act but a habit.',
    author: 'Aristotle',
    category: 'discipline'
  },
  {
    text: 'You do not rise to the level of your goals. You fall to the level of your systems.',
    author: 'James Clear, Atomic Habits',
    category: 'building'
  },
  {
    text: 'The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy.',
    author: 'Cal Newport, Deep Work',
    category: 'building'
  },
  {
    text: 'The brain can change its own structure and function through thought and activity.',
    author: 'Norman Doidge, The Brain That Changes Itself',
    category: 'books'
  },
  {
    text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
    author: 'Amelia Earhart',
    category: 'life'
  },
  {
    text: 'Go confidently in the direction of your dreams. Live the life you have imagined.',
    author: 'Henry David Thoreau',
    category: 'life'
  },
  {
    text: 'An investment in knowledge pays the best interest.',
    author: 'Benjamin Franklin',
    category: 'life'
  },
  {
    text: 'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.',
    author: 'Abraham Lincoln',
    category: 'discipline'
  },
  {
    text: 'Champions aren\'t made in gyms. Champions are made from something they have deep inside them — a desire, a dream, a vision.',
    author: 'Muhammad Ali',
    category: 'boxing'
  },
  {
    text: 'It\'s not the mountains we conquer, but ourselves.',
    author: 'Sir Edmund Hillary',
    category: 'boxing'
  }
];

/* ── RENDER QUOTES ───────────────────────────────────────────── */
function renderQuotes(category) {
  var grid = document.getElementById('quotes-grid');
  if (!grid) return;

  var filtered = category === 'all'
    ? QUOTES
    : QUOTES.filter(function (q) { return q.category === category.toLowerCase(); });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-secondary);padding:2rem 0;">No quotes in this category yet.</p>';
    return;
  }

  grid.innerHTML = filtered.map(function (q) {
    return '<blockquote class="quote-card">' +
      '<p class="quote-text">&ldquo;' + q.text + '&rdquo;</p>' +
      '<cite class="quote-author">&mdash; ' + q.author + '</cite>' +
    '</blockquote>';
  }).join('');
}

/* ── INIT: QUOTES PAGE ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  if (!document.getElementById('quotes-grid')) return;

  renderQuotes('all');

  document.querySelectorAll('.quotes-filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.quotes-filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderQuotes(btn.dataset.cat);
    });
  });
});

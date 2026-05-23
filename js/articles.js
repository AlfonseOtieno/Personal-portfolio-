/* ============================================================
   ALFONSE OTIENO — PORTFOLIO
   js/articles.js — All articles data + list/single view logic

   HOW TO ADD A NEW ARTICLE:
   1. Add a new object to the TOP of the ARTICLES array
   2. Fill in: slug, title, topic, date, readTime, substackUrl,
      publication ('deliberately-becoming' or 'code-system'),
      excerpt, and body (HTML string)
   3. The articles page, home page latest article, and the
      articles-written counter on Progress all update automatically.
   ============================================================ */

var ARTICLES = [
  {
    slug: 'why-im-documenting-my-growth-at-19',
    title: 'Why I\'m Documenting My Growth at 19',
    topic: 'Personal Growth',
    date: 'Feb 19, 2026',
    readTime: '5 min read',
    substackUrl: 'https://open.substack.com/pub/alfonseotieno/p/why-im-documenting-my-growth-at-19?utm_source=share&utm_medium=android&r=7mywyj',
    publication: 'deliberately-becoming',
    excerpt: 'I created a one-year master plan to achieve radical improvement—the kind that allows me to look back and say I never wasted my time. I structured the plan around three pillars: body, mind, and skill.',
    body: `
      <h2>High School: Foundations and Achievements</h2>
      <p>In high school, I was an average student academically, but active in co-curricular activities. I participated in the Scout Club, debate club, and journalism club, and I served as a prefect on the student council. I reached the national level in scouting competitions, won most of my debating competitions, and became chairman of the journalism club.</p>
      <p>High school was neither exceptional nor terrible. I tried to excel in everything I could. But despite these achievements, I felt there was more life had to offer than simply passing time or surviving.</p>
      <h2>Why a One-Year Master Plan?</h2>
      <p>I created a one-year master plan to achieve radical improvement—the kind that allows me to look back and say I never wasted my time. I structured the plan around three pillars: body, mind, and skill.</p>
      <p>My goal was not small self-improvement; it was building the best version of myself in one year.</p>
      <h2>Starting the Journey</h2>
      <p>After finishing my KCSE exams in November, I began executing the plan. My first step was to get a job. I worked in sales for a month but realized it drained my energy and left little room for the activities I valued most. I left and shifted focus to boxing training, starting January 2nd.</p>
      <p>I also began structured learning:</p>
      <ul>
        <li>Reading <em>The Brain That Changes Itself</em>.</li>
        <li>Learning coding.</li>
      </ul>
      <h2>My Daily System</h2>
      <p>My current daily system is structured but flexible:</p>
      <ul>
        <li>Morning: run or workout, followed by shadow boxing</li>
        <li>Cold shower</li>
        <li>Deep work: two hours learning JavaScript</li>
        <li>Breakfast</li>
        <li>Neuroplastic exercises: 25 minutes using my non-dominant hand, 25 minutes mental arithmetic, 25 minutes chess</li>
        <li>One hour of podcast</li>
        <li>One hour reading</li>
        <li>One hour watching documentaries</li>
        <li>Two hour coding project</li>
        <li>Evening: boxing training</li>
      </ul>
      <p>This system aligns daily effort with the person I want to become.</p>
      <h2>Lessons from Reality</h2>
      <p>When I first created the master plan, I imagined perfect days. Reality, however, is never perfect. In December, I struggled with an all-or-nothing mindset: if one task broke the plan, the whole system felt broken.</p>
      <p>In January, I redesigned my system to allow flexibility. Consistency matters more than perfection. Some days I rest; the next day, I wake up and try again.</p>
      <p>Key lessons:</p>
      <ul>
        <li>Leave room for reality. Life is unpredictable. Your system should guide you but survive disruption.</li>
        <li>Consistency beats intensity. Start small. Master the art of showing up. Intensity is temporary; consistency compounds.</li>
      </ul>
      <h2>Understanding Discipline</h2>
      <p>Discipline, as I define it, is forgoing the pleasure of the present for the benefit of the future self. Motivation is fleeting—it helps you start—but discipline keeps you going when motivation fades. Discipline is not perfection. It is falling and standing up, recognizing mistakes, and improving. It is working through boredom, fatigue, and frustration.</p>
      <h2>Why I\'m Writing</h2>
      <p>This is the beginning of a journey toward becoming the best version of myself—not for recognition, but for mastery, clarity, and long-term impact.</p>
    `
  }
];

/* ── HELPERS ─────────────────────────────────────────────────── */
function getPubLabel(pub) {
  return pub === 'deliberately-becoming' ? 'Deliberately Becoming' : 'Code &amp; System';
}
function getPubClass(pub) {
  return pub === 'deliberately-becoming' ? 'pub-db' : 'pub-cs';
}

/* ── RENDER ARTICLES LIST ─────────────────────────────────────── */
function renderArticlesList(filter) {
  var grid = document.getElementById('articles-grid');
  if (!grid) return;

  var filtered = filter === 'all'
    ? ARTICLES
    : ARTICLES.filter(function (a) { return a.publication === filter; });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-secondary);padding:2rem 0;">No articles in this category yet.</p>';
    return;
  }

  grid.innerHTML = filtered.map(function (a) {
    return '<div class="article-card" data-slug="' + a.slug + '">' +
      '<span class="article-pub-badge ' + getPubClass(a.publication) + '">' + getPubLabel(a.publication) + '</span>' +
      '<h3>' + a.title + '</h3>' +
      '<p>' + a.excerpt + '</p>' +
      '<div class="article-card-meta">' +
        '<span>' + a.date + '</span>' +
        '<span>' + a.readTime + '</span>' +
        '<span>' + a.topic + '</span>' +
        '<span class="article-read-link">Read <i class="fa-solid fa-arrow-right" style="font-size:0.75rem;"></i></span>' +
      '</div>' +
    '</div>';
  }).join('');

  /* Attach click handlers */
  grid.querySelectorAll('.article-card').forEach(function (card) {
    card.addEventListener('click', function () {
      openArticle(card.dataset.slug);
    });
  });
}

/* ── OPEN SINGLE ARTICLE ─────────────────────────────────────── */
function openArticle(slug) {
  var article = ARTICLES.find(function (a) { return a.slug === slug; });
  if (!article) return;

  var listView   = document.getElementById('articles-list-view');
  var singleView = document.getElementById('articles-single-view');
  if (!listView || !singleView) return;

  listView.classList.add('hidden');
  singleView.classList.remove('hidden');

  singleView.innerHTML =
    '<div class="container">' +
      '<div class="article-full">' +
        '<button class="back-btn" id="article-back-btn">' +
          '<i class="fa-solid fa-arrow-left"></i> Back to Articles' +
        '</button>' +
        '<span class="article-pub-badge ' + getPubClass(article.publication) + '" style="margin-bottom:0.75rem;">' +
          getPubLabel(article.publication) +
        '</span>' +
        '<h1>' + article.title + '</h1>' +
        '<div class="article-meta-row">' +
          '<span>' + article.date + '</span>' +
          '<span>' + article.readTime + '</span>' +
          '<span>' + article.topic + '</span>' +
        '</div>' +
        '<div class="article-full-body">' + article.body + '</div>' +
        '<div class="article-substack-note">' +
          '<i class="fa-solid fa-arrow-up-right-from-square" style="margin-right:0.4rem;"></i>' +
          'Originally published on <a href="' + article.substackUrl + '" target="_blank" rel="noopener">Substack</a>.' +
        '</div>' +
        '<button class="back-btn" style="margin-top:2rem;margin-bottom:0;" id="article-back-btn-bottom">' +
          '<i class="fa-solid fa-arrow-left"></i> Back to Articles' +
        '</button>' +
      '</div>' +
    '</div>';

  window.scrollTo(0, 0);

  /* Back buttons */
  ['article-back-btn', 'article-back-btn-bottom'].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', function () {
        closeArticle();
      });
    }
  });

  /* Hash routing */
  if (history.pushState) {
    history.pushState(null, '', '#' + slug);
  }
}

function closeArticle() {
  var listView   = document.getElementById('articles-list-view');
  var singleView = document.getElementById('articles-single-view');
  if (!listView || !singleView) return;
  singleView.classList.add('hidden');
  listView.classList.remove('hidden');
  singleView.innerHTML = '';
  window.scrollTo(0, 0);
  if (history.pushState) {
    history.pushState(null, '', window.location.pathname);
  }
}

/* ── INIT: ARTICLES PAGE ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  if (!document.getElementById('articles-grid')) return;

  /* Initial render */
  renderArticlesList('all');

  /* Publication filter buttons */
  document.querySelectorAll('.pub-filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.pub-filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderArticlesList(btn.dataset.pub);
    });
  });

  /* Hash routing on load */
  var hash = window.location.hash.replace('#', '');
  if (hash) {
    var found = ARTICLES.find(function (a) { return a.slug === hash; });
    if (found) openArticle(hash);
  }

  /* Browser back button */
  window.addEventListener('popstate', function () {
    var h = window.location.hash.replace('#', '');
    if (!h) {
      closeArticle();
    } else {
      openArticle(h);
    }
  });
});

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
    slug: 'what-i-learned-from-the-brain-that-changes-itself',
    title: 'What I Learned from The Brain That Changes Itself by Norman Doidge',
    topic: 'Books',
    date: 'Feb 24, 2026',
    readTime: '5 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/what-i-learned-from-the-brain-that',
    publication: 'deliberately-becoming',
    excerpt: 'Have you ever asked yourself why it is so hard to do things that are beneficial to you like reading while it requires no effort to scroll or play video games? So have I.',
    body: `
      <img src="../assets/articles/brain-that-changes-itself.jpg" alt="The Brain That Changes Itself by Norman Doidge" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <p>Have you ever asked yourself why it is so hard to do things that are beneficial to you like reading while it requires no effort to scroll or play video games? So have I.</p>
      <h2>Why I Decided to Read the Book</h2>
      <p>While I was in high school, I struggled with studying. It was hard for me to sit down and focus. I used to call it procrastination.</p>
      <p>Whenever I avoided studying, I would watch television, scroll through social media, or just sit on my phone doing nothing meaningful. Opening my gallery, switching between apps, wasting time.</p>
      <p>This continued until I did my final exams in high school. I didn't fail, but I didn't perform at the level I knew I was capable of. I got average marks. And that bothered me, because I knew I could have done better.</p>
      <p>After high school, I created my one-year master plan. But one question kept coming back to me. Why is it so hard for me to sit down and read for 30 minutes, yet so easy to scroll through social media for hours?</p>
      <p>You might say one is harder than the other. But reading doesn't require physical effort. Neither does scrolling. So why does one feel heavy and the other effortless?</p>
      <p>I've always admired people like David Goggins and the way he transformed himself. And I kept asking myself. Is there a way to train or even "trick" my brain into loving difficult things?</p>
      <p>I didn't just want discipline. I wanted my brain to like discipline.</p>
      <p>When I heard about The Brain That Changes Itself, I picked it up with one main intention, to find out whether it could help me understand how to rewire my brain to enjoy doing hard things instead of avoiding them.</p>
      <h2>What the Book Is About</h2>
      <p>The book mainly explores the concept of neuroplasticity, the idea that the brain is not fixed and is capable of change.</p>
      <p>It presents a collection of revolutionary case studies: stroke victims regaining lost functions, individuals improving cognitive abilities, and people recovering skills that were once believed to be permanently damaged.</p>
      <p>Through these stories, the book challenges the belief that our abilities are static.</p>
      <p>It's deeply intriguing. As you read it, you begin to feel like there is no limitation to how much the brain can change, that there is more potential for change than we assume.</p>
      <h2>What I've Learned</h2>
      <p>I didn't find a direct hack that suddenly made me love reading as much as I love social media or video games.</p>
      <p>But I found something better.</p>
      <p>The discovery that the human brain is not as limited as I thought. It can improve. It can adapt. It can strengthen.</p>
      <p>We can improve our reasoning. We can sharpen our thinking. We can even develop abilities we once believed we simply didn't have.</p>
      <p>You don't have to be born talented to become skilled.</p>
      <p>You don't have to be born a fast learner to improve your comprehension.</p>
      <p>You don't have to be born extraordinary. You just need to start practicing.</p>
      <p>With practice you become better.</p>
      <p>I discovered there is hope for each and every one of us, even those of us who feel naturally weak.</p>
      <h2>Key Takeaways</h2>
      <p>The major idea that stood out to me is that we have a "use-it-or-lose-it" brain.</p>
      <p>If you practice something consistently, you strengthen the neural connections involved in that skill. Over time, you improve, sometimes even to the point of mastery. On the other hand, if you stop using a function, it can weaken and eventually atrophy. The book refers to this as "learned nonuse."</p>
      <p>Reading about people who previously couldn't walk but learnt to regain their balance, and individuals with learning disorders who were once labeled as retated but managed to strengthen their weakest abilities, completely changed how I think about human potential.</p>
      <p>The book also explores how we acquire tastes and how emotions, including love, can physically shape the brain.</p>
      <p>After going through these stories, it genuinely feels like the brain is far more adaptable than we assume.</p>
      <p>There are so many powerful examples in the book that it's hard to fully capture them in a short summary.</p>
      <h2>How I'm Applying It</h2>
      <p>After reading the book, I decided to put the concept of neuroplasticity to the test.</p>
      <p>I adjusted my system. I now practice writing with my non-dominant (left) hand. I play chess to improve my reasoning. I also practice mental arithmetic daily.</p>
      <p>I chose to do these consistently because plastic change in the brain requires repetition. It's not something that happens once. It happens through repeated effort over time.</p>
      <p>I'm not perfect at any of these yet. But after just one month, I've already noticed small improvements.</p>
      <p>That alone has been enough proof for me to keep going.</p>
      <h2>Final Thoughts</h2>
      <p>I started reading this book hoping to find a way to trick my brain into liking useful things and doing them effortlessly.</p>
      <p>Instead, I found something better: the realization that the human brain is not fixed. It can change.</p>
      <p>I'm genuinely grateful I read this book. It has been very helpful in shifting how I think about effort, discipline, and improvement.</p>
      <p>Right now, I feel like my limits are not as permanent as I once believed.</p>
      <p>If you have the time, I would encourage you to sit down and read it for yourself, not just for the theory, but for the discoveries that challenge how you see your own potential.</p>
    `
  },
  {
    slug: 'discipline-isnt-beast-mode-its-boring',
    title: 'Discipline Isn\'t Beast Mode. It\'s Boring.',
    topic: 'Discipline',
    date: 'Feb 21, 2026',
    readTime: '4 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/discipline-isnt-beast-mode-its-boring',
    publication: 'deliberately-becoming',
    excerpt: 'We\'ve romanticized discipline. And when you romanticize something, you misunderstand it.',
    body: `
      <img src="../assets/articles/discipline-boring.jpeg" alt="Discipline Isn't Beast Mode. It's Boring." style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <p>Discipline is everywhere right now.</p>
      <p>Scroll for five minutes and you'll see it:</p>
      <ul>
        <li>Men lifting in the rain.</li>
        <li>Perfect gym lighting.</li>
        <li>Shadowboxing at 5AM.</li>
        <li>Cold showers.</li>
        <li>"Beast mode activated."</li>
      </ul>
      <p>It looks powerful. It looks elite. It looks like only the top 1% can reach it.</p>
      <p>But here's the problem:</p>
      <p>We've romanticized discipline.</p>
      <p>And when you romanticize something, you misunderstand it.</p>
      <h2>My First Mistake</h2>
      <p>When I decided to become disciplined, I did what most people do.</p>
      <p>I watched YouTube videos.</p>
      <p>I optimized my Instagram and Facebook feeds.</p>
      <p>I consumed "how to be disciplined" content daily.</p>
      <p>Then I made a plan.</p>
      <ul>
        <li>100 push-ups every day.</li>
        <li>Read daily.</li>
        <li>Train daily.</li>
        <li>Perfect days only.</li>
      </ul>
      <p>The first week? Easy.</p>
      <p>Second week? Fatigue.</p>
      <p>Third week? Collapse.</p>
      <p>And when I stopped the push-ups, I stopped everything else.</p>
      <p>Why?</p>
      <p>Because I had an all-or-nothing mindset.</p>
      <p>If the day wasn't perfect, I considered it a failure.</p>
      <p>That wasn't discipline. That was ego.</p>
      <h2>The Lie Social Media Sells</h2>
      <p>Social media shows the highlight reel of discipline.</p>
      <p>Nobody posts:</p>
      <ul>
        <li>The boring 15-minute reading session.</li>
        <li>The half-energy workout.</li>
        <li>The day you showed up but performed at 60%.</li>
        <li>The quiet repetition no one claps for.</li>
      </ul>
      <p>Discipline isn't cinematic.</p>
      <p>It's repetitive. It's often unimpressive. It's private.</p>
      <p>And it's available to everyone.</p>
      <p>Not just the 1%.</p>
      <h2>What Discipline Actually Is</h2>
      <p>Discipline is not perfection. It's consistency.</p>
      <p>It's doing what benefits your future self at the expense of your present comfort.</p>
      <p>When you want to watch TV but choose to study.</p>
      <p>When you're bored but still train.</p>
      <p>When you're tired but still show up — even at 50%.</p>
      <p>That's discipline.</p>
      <p>Not the dramatic workout in the rain.</p>
      <p>The boring decision made daily.</p>
      <h2>The Shift That Changed Everything</h2>
      <p>After failing in January, I asked myself one question:</p>
      <p>Why did I quit?</p>
      <p>The answer was simple: I started too big and relied on motivation.</p>
      <p>So I changed my approach.</p>
      <p>Instead of 100 push-ups, I reduced the standard.</p>
      <p>Instead of one hour of reading, I started with 15 minutes.</p>
      <p>Not because it was impressive.</p>
      <p>But because it was sustainable.</p>
      <p>Here's the key most people miss:</p>
      <p>Discipline starts small.</p>
      <p>Identity grows gradually.</p>
      <p>When you show up daily — even in small ways — you start telling yourself:</p>
      <ul>
        <li>"I am the type of person who trains."</li>
        <li>"I am the type of person who reads."</li>
        <li>"I am the type of person who doesn't quit."</li>
      </ul>
      <p>And once identity changes, willpower becomes less necessary.</p>
      <p>You stop forcing discipline.</p>
      <p>You become disciplined.</p>
      <h2>Another Hard Truth</h2>
      <p>You will miss days.</p>
      <p>You will slip.</p>
      <p>You will have imperfect weeks.</p>
      <p>The difference between disciplined and undisciplined people isn't perfection.</p>
      <p>It's recovery speed.</p>
      <p>A slip is not a fall.</p>
      <p>If you miss one workout and quit for three months, that's not lack of motivation — that's lack of emotional control.</p>
      <p>Discipline means you return quickly.</p>
      <h2>Stop Looking for Hacks</h2>
      <p>There is no video that will make you disciplined overnight.</p>
      <p>There is no secret trick.</p>
      <p>There is no perfect system.</p>
      <p>Discipline has no finish line.</p>
      <p>It's a lifestyle of small, boring, consistent decisions stacked over years.</p>
      <p>One intense day means nothing.</p>
      <p>One consistent year changes everything.</p>
      <p>Stop admiring discipline.</p>
      <p>Practice it.</p>
      <ul>
        <li>Start small.</li>
        <li>Show up.</li>
        <li>Drop the all-or-nothing mindset.</li>
        <li>Recover fast when you slip.</li>
      </ul>
      <p>That's it.</p>
      <p>Not glamorous.</p>
      <p>Not viral.</p>
      <p>Just effective.</p>
    `
  },
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

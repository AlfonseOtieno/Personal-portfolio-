/* ============================================================
   ALFONSE OTIENO — PORTFOLIO
   projects.js — All project data + rendering logic

   HOW TO ADD A NEW PROJECT:
   1. Add a new object to the TOP of the PROJECTS array below
   2. Give it a unique slug, fill in all fields
   3. The projects page and home page featured project update automatically
   ============================================================ */

const PROJECTS = [
  {
  slug: 'neuroplex',
  title: 'NeuroPlex',
  status: 'Live',
  image: 'neuroplex-preview.png', 
  stack: ['HTML', 'CSS', 'JavaScript'],
  summary: 'A cognitive training platform designed to improve focus, working memory, and learning speed using structured neuroplasticity exercises.',

  liveUrl: 'https://alfonseotieno.github.io/NeuroPlex/',
  githubUrl: 'https://github.com/AlfonseOtieno/NeuroPlex',

  caseStudy: {
    problem: 'Most people underestimate their brain’s ability to improve. Cognitive training is either too theoretical or reduced to simple games that don’t translate into real-world performance. There is no structured system that focuses on actual neuroplastic change rather than entertainment.',

    solution: 'Built NeuroPlex — a structured cognitive training system based on neuroplasticity principles. The platform uses 13 carefully selected exercises targeting working memory, focus, and processing speed. Instead of over-optimizing for interactivity, the system prioritizes real cognitive adaptation, including offline exercises (pen and paper) to prevent users from simply getting better at the interface rather than improving actual mental performance.',

    challenges: 'Balancing interactivity with real-world effectiveness was the main challenge. Many brain-training platforms rely heavily on gamification, which can lead to users optimizing for the game instead of actual cognitive improvement. I had to intentionally limit interactivity in some areas and design exercises that transfer beyond the screen. Structuring difficulty progression and incorporating feedback without overcomplicating the system was also a key challenge.',

    learned: 'This project taught me how to design systems around principles rather than trends. I learned that effective cognitive training requires focus, feedback, and the right level of difficulty — not just engagement. It also strengthened my ability to translate abstract concepts like neuroplasticity into practical, usable tools.'
  }
},
  {
  slug: 'codereview-ai',
  title: 'CodeReview AI',
  status: 'Live',
  image: 'codereview-preview.png', // add screenshot later
  stack: ['HTML', 'CSS', 'JavaScript', 'Vercel Serverless', 'Anthropic API'],
  summary: 'An AI-powered code review tool that analyzes HTML, CSS, and JavaScript and returns structured feedback with scores, issues, and fixes in seconds.',
  liveUrl: 'https://codereview-ai-ten.vercel.app/',
  githubUrl: 'https://github.com/AlfonseOtieno/codereview-ai',
  caseStudy: {
    problem: 'Beginner developers often don’t know what’s wrong with their code or how to improve it. Feedback is slow, inconsistent, or unavailable unless they ask someone more experienced.',
    solution: 'Built a web app that lets users paste code and receive instant AI-powered reviews. The system uses a structured prompt and returns JSON with a score, categorized issues, and exact code fixes. A serverless function protects the API key and handles requests securely.',
    challenges: 'Handling inconsistent AI responses was a major challenge. The model sometimes returned invalid JSON, so I had to implement cleaning and validation logic. I also had to design prompts carefully to enforce strict output structure.',
    learned: 'This project taught me how to integrate external APIs, handle unreliable outputs, and design systems that enforce structure. It also deepened my understanding of backend logic using serverless functions, not just frontend development.'
  }
  
},
  {
    slug: 'portfolio',
    title: 'Personal Portfolio Website',
    status: 'Live',
    image: 'portfolio-preview.png',   // drop your screenshot here — 1200×750px recommended
    stack: ['HTML', 'CSS', 'JavaScript'],
    summary: 'A self-built portfolio documenting my journey as a developer and self-directed learner — built with pure HTML, CSS, and JavaScript. No frameworks, no libraries.',
    liveUrl: 'https://alfonseotieno.github.io/',
    githubUrl: 'https://github.com/AlfonseOtieno/Personal-portfolio-',
    caseStudy: {
      problem: 'As someone actively building skills in coding and writing, I had no central place to show my work, share my thinking, or give potential clients a reason to trust me. My projects and articles existed in isolation with nothing connecting them.',
      solution: 'Built a complete portfolio from scratch using only HTML, CSS, and JavaScript — no frameworks. The site includes a home page, articles system with full article content, a progress tracker, project case studies, quotes, and a contact form. Everything is hand-coded and fully responsive.',
      challenges: 'Starting with limited JavaScript knowledge and building a multi-page site with dynamic features — like the articles system that renders full content from a data file — pushed me far beyond what I had learned formally. A lot of it was trial, error, and reading documentation.',
      learned: 'Building something real accelerates learning faster than any tutorial. Every problem I hit on this project forced me to understand the underlying concept — not just copy a solution. The site itself is proof of the skill it took to build it.'
    }
  }
];

/* ── STACK TAG HTML ──────────────────────────────────────────── */
function stackTags(stack) {
  return stack.map(t => `<span class="stack-tag">${t}</span>`).join('');
}

/* ── RENDER PROJECTS GRID (projects.html) ────────────────────── */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <div class="project-card" id="project-card-${i}">

      <!-- Preview image -->
      <div class="project-thumb-img">
        <img
          src="../assets/portfolio/${p.image}"
          alt="${p.title} preview"
          class="project-preview-img"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        >
        <div class="project-preview-placeholder">
          📸 Add <code>${p.image}</code> to your project folder
        </div>
      </div>

      <div class="project-body">
        <div class="project-stack">${stackTags(p.stack)}</div>
        <div class="project-status-row">
          <span class="project-status-badge">${p.status}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>

        <!-- Actions -->
        <div class="project-actions">
          ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">View Website →</a>` : ''}
          ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">GitHub</a>` : ''}
          <button class="btn btn-secondary btn-sm project-cs-toggle" data-index="${i}" aria-expanded="false">
            Case Study <span class="cs-arrow">↓</span>
          </button>
        </div>

        <!-- Case study panel -->
        <div class="project-case-study" id="cs-${i}" hidden>
          <div class="cs-block">
            <h4>🎯 The Problem</h4>
            <p>${p.caseStudy.problem}</p>
          </div>
          <div class="cs-block">
            <h4>⚙️ The Solution</h4>
            <p>${p.caseStudy.solution}</p>
          </div>
          <div class="cs-block">
            <h4>🚧 Challenges</h4>
            <p>${p.caseStudy.challenges}</p>
          </div>
          <div class="cs-block">
            <h4>💡 What I Learned</h4>
            <p>${p.caseStudy.learned}</p>
          </div>
          ${p.liveUrl ? `
          <div class="cs-cta">
            <a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Visit the Live Site →</a>
          </div>` : ''}
        </div>

      </div>
    </div>
  `).join('');

  // Case study toggles
  grid.querySelectorAll('.project-cs-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
      const i      = this.dataset.index;
      const panel  = document.getElementById(`cs-${i}`);
      const isOpen = this.getAttribute('aria-expanded') === 'true';
      const arrow  = this.querySelector('.cs-arrow');

      if (isOpen) {
        panel.hidden = true;
        this.setAttribute('aria-expanded', 'false');
        this.innerHTML = `Case Study <span class="cs-arrow">↓</span>`;
      } else {
        panel.hidden = false;
        this.setAttribute('aria-expanded', 'true');
        this.innerHTML = `Close Case Study <span class="cs-arrow" style="transform:rotate(180deg);display:inline-block;">↓</span>`;
      }
    });
  });
}

/* ── AUTO-RENDER FEATURED PROJECT ON HOME PAGE (index.html) ─────
   Add <div id="featured-project-slot"></div> in index.html.
   Always shows PROJECTS[0] — the first item in the array.
   To update the home page: add new project to TOP of PROJECTS array.
─────────────────────────────────────────────────────────────────*/
function renderFeaturedProject() {
  const slot = document.getElementById('featured-project-slot');
  if (!slot) return;

  const p = PROJECTS[0];
  slot.innerHTML = `
    <div class="featured-project-card fp-expandable">
      <div class="fp-top">
        <div class="fp-preview">
          <img
            src="../assets/portfolio/${p.image}"
            alt="${p.title} preview"
            class="fp-img"
            onerror="this.parentElement.classList.add('fp-img-missing')"
          >
          <div class="fp-img-placeholder">📸 Add ${p.image} to your folder</div>
        </div>
        <div class="fp-info">
          <div class="project-label">${p.status} Project</div>
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
          <div class="fp-stack">${stackTags(p.stack)}</div>
          <div class="fp-actions-row">
            <button class="btn btn-secondary btn-sm fp-toggle-btn" aria-expanded="false">
              Read Case Study <span class="fp-arrow">↓</span>
            </button>
            ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Visit Site →</a>` : ''}
          </div>
        </div>
      </div>
      <div class="fp-case-study" hidden>
        <div class="fp-case-body">
          <div class="fp-case-block">
            <h4>🎯 The Problem</h4>
            <p>${p.caseStudy.problem}</p>
          </div>
          <div class="fp-case-block">
            <h4>⚙️ The Solution</h4>
            <p>${p.caseStudy.solution}</p>
          </div>
          <div class="fp-case-block">
            <h4>🚧 Challenges</h4>
            <p>${p.caseStudy.challenges}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Case study toggle for home page
  const toggleBtn = slot.querySelector('.fp-toggle-btn');
  const casePanel = slot.querySelector('.fp-case-study');
  if (toggleBtn && casePanel) {
    toggleBtn.addEventListener('click', function () {
      const isOpen = this.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        casePanel.hidden = true;
        this.setAttribute('aria-expanded', 'false');
        this.innerHTML = 'Read Case Study <span class="fp-arrow">↓</span>';
      } else {
        casePanel.hidden = false;
        this.setAttribute('aria-expanded', 'true');
        this.innerHTML = 'Close Case Study <span class="fp-arrow" style="transform:rotate(180deg);display:inline-block;">↓</span>';
      }
    });
  }
}

/* ── INIT ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  renderProjects();       // projects.html
  renderFeaturedProject(); // index.html
});

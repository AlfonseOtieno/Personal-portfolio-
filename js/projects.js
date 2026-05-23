/* ============================================================
   ALFONSE OTIENO — PORTFOLIO
   js/projects.js — All projects data + list/single view logic

   HOW TO ADD A NEW PROJECT:
   1. Add a new object to the TOP of the PROJECTS array
   2. Fill in all fields (see schema below)
   3. The projects grid, home featured project, and the
      projects-built counter on Progress all update automatically.
   ============================================================ */

var PROJECTS = [
  {
    slug: 'athena',
    title: 'Athena',
    type: 'personal',
    status: 'Live',
    summary: 'An AI-powered research assistant that helps users research any topic deeply, synthesise information, and generate structured notes using the Gemini API.',
    liveUrl: 'https://athena-flame-five.vercel.app',
    githubUrl: 'https://github.com/AlfonseOtieno/Athena',
    image: 'athena.png',
    stack: ['HTML', 'CSS', 'JavaScript', 'Gemini API', 'Vercel'],
    problem: 'Researching a topic properly takes time. You have to search, read multiple sources, pull out the key ideas, and then synthesise them. Most people skip the synthesis step. Athena does it for you.',
    solution: 'A web application that takes a research topic, queries the Gemini API for a structured deep-dive, and returns organised notes broken into key concepts, summary, and implications. Serverless backend on Vercel for API key security.',
    challenges: 'The main challenge was prompt engineering &mdash; getting the Gemini model to return consistently structured output that could be parsed and rendered as formatted notes. I went through a dozen prompt iterations.',
    learned: 'Learned how to engineer prompts for structured output, how to secure API keys using Vercel serverless functions, and how to design UI around AI-generated content that can vary in length unpredictably.',
    date: 'April 2026'
  },
  {
    slug: 'inkdraft',
    title: 'InkDraft',
    type: 'personal',
    status: 'Live',
    summary: 'A writing assistant for people who struggle with blank pages. Takes a topic or idea and generates a structured first draft, then lets the writer build from there.',
    liveUrl: 'https://inkdraft-a-writers-best-friend-abcbtej1y.vercel.app/',
    githubUrl: 'https://github.com/AlfonseOtieno/Inkdraft--A-writers-best-friend',
    image: 'inkdraft.png',
    stack: ['HTML', 'CSS', 'JavaScript', 'Gemini API', 'Vercel'],
    problem: 'The hardest part of writing is starting. An empty document is one of the most paralyzing experiences for most people. Yet once they have a rough draft, editing and improving comes naturally.',
    solution: 'InkDraft takes a writing topic or prompt and generates a full first-draft essay or article using the Gemini API. The output is styled, editable, and exportable. The goal is not to replace the writer but to remove the blank-page barrier.',
    challenges: 'Balancing AI-generated content that actually sounds like a draft (imperfect, directional) rather than a polished final article. Users need something to push against, not something to submit as-is.',
    learned: 'How to design prompts that produce intentionally rough output. Also learned about the psychology of writing tools &mdash; the tool has to feel like a collaborator, not a ghostwriter.',
    date: 'March 2026'
  },
  {
    slug: 'neuroplex',
    title: 'NeuroPlex',
    type: 'personal',
    status: 'Live',
    summary: 'An AI-powered learning tool that takes any concept you want to understand and explains it using the Feynman Technique &mdash; simply, with analogies, at multiple depth levels.',
    liveUrl: 'https://alfonseotieno.github.io/NeuroPlex/',
    githubUrl: 'https://github.com/AlfonseOtieno/NeuroPlex',
    image: 'neuroplex.png',
    stack: ['HTML', 'CSS', 'JavaScript', 'Gemini API', 'GitHub Pages'],
    problem: 'Most learning resources assume a knowledge base you may not have. When you look up a concept and don\'t understand the explanation, you have to look up everything inside the explanation. NeuroPlex fixes the entry point problem.',
    solution: 'Input any concept, select a complexity level (child, student, adult, expert), and NeuroPlex returns an explanation tuned to that level using the Feynman approach &mdash; clear language, no jargon, real-world analogies.',
    challenges: 'Ensuring the model actually adjusted depth levels meaningfully rather than just adding or removing technical words. Also handling edge cases like concepts with no real-world analogy.',
    learned: 'Learned how to use system prompts to enforce output style and depth, and how to design a multi-level interface that doesn\'t feel complex to use.',
    date: 'March 2026'
  },
  {
    slug: 'codereview-ai',
    title: 'CodeReview AI',
    type: 'personal',
    status: 'Live',
    summary: 'Paste any code snippet and get an instant AI code review: bugs, security issues, performance improvements, and style suggestions.',
    liveUrl: 'https://codereview-ai-ten.vercel.app/',
    githubUrl: 'https://github.com/AlfonseOtieno/codereview-ai',
    image: 'codereview.png',
    stack: ['HTML', 'CSS', 'JavaScript', 'Gemini API', 'Vercel'],
    problem: 'Code review is one of the most valuable feedback loops in software development, but most junior developers never get it. Without a senior on your team, you ship code with preventable bugs and never learn why.',
    solution: 'A tool that takes a code snippet, detects the language, and returns a structured review covering: correctness, potential bugs, security issues (where applicable), performance, and style. Output is formatted for clarity.',
    challenges: 'Getting the model to give genuinely useful, specific feedback rather than generic advice. The prompt engineering required context about the purpose of code review &mdash; not just "is this correct" but "what would a senior developer say".',
    learned: 'How to write prompts that simulate expert roles. Also learned the difference between code that works and code that is defensible in review.',
    date: 'March 2026'
  },
  {
    slug: 'portfolio',
    title: 'This Portfolio',
    type: 'personal',
    status: 'Live',
    summary: 'The portfolio you are looking at right now. Built from scratch with zero frameworks, zero templates, and zero dependencies except Google Fonts and Font Awesome.',
    liveUrl: 'https://alfonseotieno.github.io/',
    githubUrl: 'https://github.com/AlfonseOtieno/Personal-portfolio-',
    image: 'portfolio.png',
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    problem: 'Most portfolio templates look identical and say nothing. I needed a portfolio that documented who I actually am and what I was doing &mdash; not a template with my name swapped in.',
    solution: 'Designed and built from scratch. Every page written by hand. The entire design system &mdash; typography, colour palette, spacing &mdash; created from nothing. The portfolio is itself one of the five projects shipped in the first 60 days.',
    challenges: 'The main challenge was doing design without a design background. I had no Figma mockup. I worked directly in the browser, adjusting layout and spacing until it felt right. Responsive design across all screen sizes without a CSS framework was harder than expected.',
    learned: 'That constraints produce clarity. Building without a framework forced me to understand CSS deeply &mdash; every layout I wanted, I had to build myself. I\'ll never not know how flexbox works again.',
    date: 'March 2026'
  }
];

/* ── RENDER PROJECTS GRID ────────────────────────────────────── */
function renderProjectsGrid(filter) {
  var grid = document.getElementById('projects-grid');
  if (!grid) return;

  var filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(function (p) { return p.type === filter; });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-secondary);padding:2rem 0;">No projects in this category yet.</p>';
    return;
  }

  grid.innerHTML = filtered.map(function (p) {
    var badgeClass = p.status === 'Archived'
      ? 'project-status-badge status-archived'
      : (p.status === 'In Progress' ? 'project-status-badge status-progress' : 'project-status-badge');

    var stackHtml = p.stack.slice(0, 4).map(function (s) {
      return '<span class="stack-tag">' + s + '</span>';
    }).join('');

    return '<div class="project-card" data-slug="' + p.slug + '">' +
      '<div class="project-card-img">' +
        '<img src="../assets/portfolio/' + p.image + '" alt="' + p.title + ' preview" ' +
          'onerror="this.parentNode.classList.add(\'img-fallback\')" />' +
      '</div>' +
      '<div class="project-card-body">' +
        '<div class="project-card-top-row">' +
          '<h3>' + p.title + '</h3>' +
          '<span class="' + badgeClass + '">' + p.status + '</span>' +
        '</div>' +
        '<p>' + p.summary + '</p>' +
        '<div class="project-stack">' + stackHtml + '</div>' +
        '<div class="project-card-actions">' +
          (p.liveUrl ? '<a href="' + p.liveUrl + '" target="_blank" rel="noopener" ' +
            'class="btn btn-primary btn-sm" onclick="event.stopPropagation()">Live Site</a>' : '') +
          '<button class="btn btn-secondary btn-sm case-study-btn" data-slug="' + p.slug + '">Case Study</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  /* Case study buttons */
  grid.querySelectorAll('.case-study-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      openProject(btn.dataset.slug);
    });
  });

  /* Card click anywhere = case study */
  grid.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return; /* Let live-site link work */
      openProject(card.dataset.slug);
    });
  });
}

/* ── OPEN SINGLE PROJECT ─────────────────────────────────────── */
function openProject(slug) {
  var project = PROJECTS.find(function (p) { return p.slug === slug; });
  if (!project) return;

  var listView   = document.getElementById('projects-list-view');
  var singleView = document.getElementById('projects-single-view');
  if (!listView || !singleView) return;

  listView.classList.add('hidden');
  singleView.classList.remove('hidden');

  var badgeClass = project.status === 'Archived'
    ? 'project-status-badge status-archived'
    : (project.status === 'In Progress' ? 'project-status-badge status-progress' : 'project-status-badge');

  var stackHtml = project.stack.map(function (s) {
    return '<span class="stack-tag">' + s + '</span>';
  }).join('');

  var linksHtml = '';
  if (project.liveUrl) {
    linksHtml += '<a href="' + project.liveUrl + '" target="_blank" rel="noopener" class="btn btn-primary">Live Site</a>';
  }
  if (project.githubUrl) {
    linksHtml += '<a href="' + project.githubUrl + '" target="_blank" rel="noopener" class="btn btn-secondary">' +
      '<i class="fa-brands fa-github" style="margin-right:0.4rem;"></i>View on GitHub</a>';
  }

  document.getElementById('project-single-content').innerHTML =
    '<button class="back-btn" id="project-back-btn">' +
      '<i class="fa-solid fa-arrow-left"></i> Back to Projects' +
    '</button>' +
    '<div class="project-single-header">' +
      '<div>' +
        '<h1>' + project.title + '</h1>' +
        '<span class="' + badgeClass + '">' + project.status + '</span>' +
        '<p class="project-single-date">' + project.date + '</p>' +
      '</div>' +
      '<div class="project-single-links">' + linksHtml + '</div>' +
    '</div>' +
    '<div class="project-single-img">' +
      '<img src="../assets/portfolio/' + project.image + '" alt="' + project.title + '" ' +
        'onerror="this.parentNode.classList.add(\'img-fallback\')" />' +
    '</div>' +
    '<div class="project-stack project-single-stack">' + stackHtml + '</div>' +
    '<div class="case-study">' +
      '<div class="case-study-section">' +
        '<h2><i class="fa-solid fa-magnifying-glass" style="margin-right:0.5rem;color:var(--accent);"></i>The Problem</h2>' +
        '<p>' + project.problem + '</p>' +
      '</div>' +
      '<div class="case-study-section">' +
        '<h2><i class="fa-solid fa-lightbulb" style="margin-right:0.5rem;color:var(--gold);"></i>The Solution</h2>' +
        '<p>' + project.solution + '</p>' +
      '</div>' +
      '<div class="case-study-section">' +
        '<h2><i class="fa-solid fa-triangle-exclamation" style="margin-right:0.5rem;color:var(--accent);"></i>Challenges</h2>' +
        '<p>' + project.challenges + '</p>' +
      '</div>' +
      '<div class="case-study-section">' +
        '<h2><i class="fa-solid fa-graduation-cap" style="margin-right:0.5rem;color:var(--gold);"></i>What I Learned</h2>' +
        '<p>' + project.learned + '</p>' +
      '</div>' +
    '</div>' +
    '<button class="back-btn" style="margin-top:2rem;margin-bottom:0;" id="project-back-btn-bottom">' +
      '<i class="fa-solid fa-arrow-left"></i> Back to Projects' +
    '</button>';

  window.scrollTo(0, 0);

  ['project-back-btn', 'project-back-btn-bottom'].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', closeProject);
    }
  });

  if (history.pushState) {
    history.pushState(null, '', '#' + slug);
  }
}

function closeProject() {
  var listView   = document.getElementById('projects-list-view');
  var singleView = document.getElementById('projects-single-view');
  if (!listView || !singleView) return;
  singleView.classList.add('hidden');
  listView.classList.remove('hidden');
  window.scrollTo(0, 0);
  if (history.pushState) {
    history.pushState(null, '', window.location.pathname);
  }
}

/* ── INIT: PROJECTS PAGE ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  if (!document.getElementById('projects-grid')) return;

  renderProjectsGrid('all');

  /* Filter buttons */
  document.querySelectorAll('.project-filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.project-filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderProjectsGrid(btn.dataset.filter);
    });
  });

  /* Hash routing on load */
  var hash = window.location.hash.replace('#', '');
  if (hash) {
    var found = PROJECTS.find(function (p) { return p.slug === hash; });
    if (found) openProject(hash);
  }

  window.addEventListener('popstate', function () {
    var h = window.location.hash.replace('#', '');
    if (!h) {
      closeProject();
    } else {
      openProject(h);
    }
  });
});

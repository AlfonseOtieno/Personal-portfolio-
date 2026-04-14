/* ============================================================
   ALFONSE OTIENO — PORTFOLIO
   articles.js — All articles data + list/single view logic
   ============================================================ */

const ARTICLES = [
  {
  slug: 'building-inkdraft',
  title: 'Building Inkdraft: An AI Writing Tool That Respects the Writer',
  topic: 'Technology',
  date: 'Apr 14, 2026',
  readTime: '6 min read',
  substackUrl: 'https://open.substack.com/pub/codeandsystems/p/building-inkdraft-an-ai-writing-tool',
  excerpt: 'One of the most frustrating trends in AI-assisted writing is that AI always seems to replace your voice rather than improve it. So I built something different.',
  body: `
    <p>One of the most frustrating trends in AI-assisted writing is that AI always seems to replace your voice rather than improve it. AI tools can generate entire articles in seconds, but they lack one thing: the human touch. They lack the biases, opinions, and conviction — the very things that make writing human.</p>

    <p>So I built Inkdraft — a writing assistant designed around a simple principle: the writer's voice remains sacred.</p>

    <p>This article breaks down the technical architecture, design decisions, and trade-offs behind building the project.</p>

    <h2>The Problem</h2>
    <p>I like writing on pen and paper before scanning and publishing my articles. After writing, I like to feed my articles to ChatGPT to correct grammatical errors and remove repetitions, but this approach had one main challenge: improving clarity without losing the writer's voice.</p>

    <p>I decided to test different writing platforms to find a solution. Some platforms focus heavily on AI generation, while others focus on editing but lack intelligent assistance. I wanted to build something that combines OCR (handwriting to text), AI-assisted refinement, and full control for the writer.</p>

    <h2>System Overview</h2>
    <p>The architecture is intentionally simple. On the frontend: HTML, CSS, and JavaScript with no frameworks, a single-page interface, and PWA support. On the backend: serverless functions on Vercel with two endpoints — <code>/api/ocr</code> and <code>/api/generate</code>. The AI layer runs on Google Gemini API.</p>

    <h2>Key Design Philosophy</h2>
    <p>The author has full control over the writing process. Instead of letting AI rewrite everything, I constrained it with strict system prompts: it must preserve the original meaning, must not introduce new ideas, and must highlight uncertainty instead of guessing.</p>

    <h2>OCR Pipeline</h2>
    <p>The OCR system is the core feature. In the first step, the handwritten image is sent to the AI model, which is instructed to extract text faithfully, mark unclear words using a different colour, and underline wrongly spelled words. In the second step, if the writer commands the AI to generate without entering a prompt, it only checks for grammatical errors — improving grammar, preserving tone, and avoiding style rewrites. This is what prevents the common issue where AI tools over-edit content.</p>

    <h2>API Design</h2>
    <p>The <code>/api/ocr</code> endpoint handles image input, text extraction, and grammar refinement — keeping transcription and improvement as separate concerns. The <code>/api/generate</code> endpoint handles AI-assisted suggestions and controlled transformations, with hard constraints: no full rewrites, no hallucinated content, and the original structure must be maintained.</p>

    <h2>Why Serverless?</h2>
    <p>I chose Vercel serverless functions because they require zero infrastructure setup and are ideal for early deployment. The trade-off is that rate limiting is harder to implement, but this is an MVP and will be improved for scale over time.</p>

    <h2>PWA Implementation</h2>
    <p>Everything lives in a single <code>index.html</code> — intentional for speed and minimalism, keeping the writer focused on what matters. The app is installable as a Progressive Web App, giving partial offline access and an app-like experience.</p>

    <h2>Challenges</h2>
    <p>The first challenge was AI reliability. Models tend to hallucinate and over-correct text. I solved this through strict prompt engineering and multi-step processing. The second was OCR accuracy — handwriting is inconsistent, so instead of forcing the model to commit to a guess, unclear text is displayed in a different colour so the writer can correct it. The third was token limits: the Gemini API has usage constraints that are sustainable as an MVP but will eventually require usage limits on the app side.</p>

    <h2>What Makes Inkdraft Different</h2>
    <p>Unlike typical AI writing tools, Inkdraft does not try to write for you. It preserves your voice and exposes uncertainty instead of hiding it. The goal is to get the most benefit out of AI-assisted writing while still maintaining the human aspects of the craft.</p>

    <h2>Conclusion</h2>
    <p>Inkdraft is not just a writing tool — it's an experiment in human-AI collaboration. Instead of replacing creativity, it aims to protect and enhance it.</p>

    <p>The biggest lesson from building it: <em>"The real challenge isn't building AI features — it's controlling them."</em></p>

    <p>Most developers focus on what AI can do. The real leverage comes from deciding what AI should not be allowed to do.</p>
  `
},
  {
    slug: 'you-dont-have-to-suffer-to-grow',
    title: "You Don't Have to Suffer to Grow",
    topic: 'Personal Growth',
    date: 'Apr 11, 2026',
    readTime: '7 min read',
    substackUrl: 'https://deliberatelybecoming.substack.com/p/you-dont-have-to-suffer-to-grow',
    excerpt: 'Does the process of self-development have to be a constant journey of discomfort and unhappiness, or can it actually be a happy one?',
    body: `
      <p>Does the process of self-development have to be a constant journey of discomfort and unhappiness, or can it actually be a happy one?</p>

      <p>Recently, I watched a Huberman Lab podcast in which he was interviewing David Goggins. It was a very interesting conversation since we got a chance to dive deep into the mentality behind David Goggins. I, for one, have always admired his transformation and, at the beginning of this year, would watch his videos in search of motivation. But in this particular podcast, he talks about the actual life of David Goggins, not just what we see in the highlight reel.</p>

      <h2>The "No Carrot" Philosophy</h2>
      <p>David Goggins talked about a lot of things that resonated with me — considering I'm also on a journey of self-development — but one idea struck me most. Most of the time, as he was talking about doing the hard things and accepting criticism, I would say to myself, "He's describing exactly how I feel."</p>

      <p>He talks about how the normal person would view his activities as suffering and how he doesn't have a reward to get things done — how his days are "all stick and no carrot."</p>

      <p>This is where I saw a contradiction. Although some of the things I do may seem to others like suffering, I have found a way to be happy and extract meaning from what I do. My aim is not to contradict Goggins' method — I know it works. Mine is to show you that the process of self-development doesn't have to be constant suffering. It can also be a happy one.</p>

      <p>I have found a way to turn the hardship of doing the hard things into a framework to extract happiness — a process I call The Ideal Life Philosophy.</p>

      <h2>The Ideal Life Philosophy</h2>
      <p>This is the framework I use. Although adopting it doesn't mean that it will keep you smiling every moment of the day, it will help you to not view self-development as suffering.</p>

      <p>It is a simple thought process and requires you to only ask yourself three questions:</p>
      <p>1. What would my ideal life currently look like?<br>2. What would my ideal life in the next 10 years look like?<br>3. How can I turn my current life into my ideal life?</p>

      <h2>1. What would my ideal life currently look like?</h2>
      <p>This first question requires you to let your imagination run wild. Visualize yourself in an environment where you have no limitations — be it social, physical, or financial. What would need to happen for you to consider it a perfect life? What items would you own, how would your body look, and what would your day look like?</p>

      <p>I can't actually remember my specific answer when I did this two months ago — and you too won't remember it after answering the third question and practicing it for a while. The point isn't to remember the answer. But I know it looked something like being muscular, wearing designer clothes, attending a lot of parties, and traveling the world. Living like royalty.</p>

      <p>During this process, you realize that you are not royalty today and you probably won't magically become royalty tomorrow. You accept that you cannot realistically live the ideal life you have in your mind right now. And that is the point: realizing that there is a better version of your life you could be living, but you can't live it NOW due to your current limitations.</p>

      <h2>2. What would my ideal life in the next 10 years look like?</h2>
      <p>This question also requires a wild imagination. Picture the limitless version of yourself in the next ten years. It will not look the same as your current limitless version, since you will be older and have different aspirations.</p>

      <p>For me, my version would be a 29-year-old businessman with a big tech company. Working a few hours a day but spending more time with my wife and children. I would still train boxing but not competing professionally — maybe as a hobby or as a coach. I don't think I will be going to parties or wearing designer clothes much.</p>

      <p>This is less painful than the first question since you are looking at a distant future which is not guaranteed, but which you feel you can control to some degree.</p>

      <h2>3. How can I turn my current life into my ideal life?</h2>
      <p>This question requires you to come back into reality and accept your current life with all its limitations. Accept that you cannot live your version of an ideal life now, but you can live your ideal life in the next ten years. You need to work backward from your ideal life in ten years to arrive at your current life.</p>

      <p>Ask yourself: how should my current life look so that I can live my ideal life in the next ten years? Define clearly the activities and the routine you should have. That becomes your ideal life.</p>

      <p>For me, it involves learning programming languages and building tools, boxing training, reading books, and learning about entrepreneurship. I mapped this into a one-year master plan and narrowed it down to a daily system. And this allows me to live my ideal life now because I know I'm building towards something. It has basically allowed me to become limitless within my current limitations.</p>

      <h2>Happiness and Meaning</h2>
      <p>This framework doesn't mean that I'm usually smiling during morning runs, writing code, or getting hit during sparring. But I no longer view these as suffering or a burden I have to carry. I see them as actions aligned with a particular goal. This also requires frequent reviews to ensure your actions are still aligned with your goals — and once you do this, it also helps you not get disappointed when you don't see results early on.</p>

      <p>For me, looking at myself in the mirror every evening knowing that I did everything in the best possible way — it's priceless.</p>
    `
  },
  {
  slug: 'patience-best-strategy',
  title: 'Sometimes Patience is the Best Strategy',
  topic: 'Discipline',
  date: 'Apr 04, 2026',
  readTime: '12 min read',
  substackUrl: '#',
  excerpt: 'When nothing seems to help, I go and look at a stonecutter hammering away at his rock perhaps a hundred times without as much as a crack showing in it. Yet at the hundred and first blow it will split in two, and I know it was not that blow that did it, but all that had gone before." - Jacob Riis',
  body: `
  <p>"When nothing seems to help, I go and look at a stonecutter hammering away at his rock perhaps a hundred times without as much as a crack showing in it. Yet at the hundred and first blow it will split in two, and I know it was not that blow that did it, but all that had gone before." - Jacob Riis</p>

  <p>I’m writing this article two days after attending a boxing tournament where most members of our gym participated. I started training in January, and this is now three months into my training.</p>

  <p>Five weeks after starting, I asked my coach when I would get the chance to compete. He told me that if I trained well enough, I could participate in a tournament happening at the end of March. But then, one month before the tournament, he told me I was not yet ready.</p>

  <p>I challenged him. I told him I still had one month to train.</p>

  <p>So for the entire month of March, I pushed myself. I woke up early, did my morning runs, shadow boxed, trained hard, and gave everything I had in sparring.</p>

  <p>But after one month of intense training, I still wasn’t chosen to compete. He told me again that I was not yet ready.</p>

  <p>Coming back from the tournament is when I realized something: I had wasted a whole month.</p>

  <p>Not because I didn’t compete—but because I didn’t learn anything that month.</p>

  <p>I didn’t improve anything. I was just punching harder in sparring, throwing more punches, trying to land more combinations. And every time someone landed a clean punch on me, my response was the same—try harder. More punches, more aggression.</p>

  <p>And all that did was get me hit more.</p>

  <p>When I started boxing I used to treat every training session like a study session. I would focus on one thing to improve per week—footwork, head movement, speed—and actually improve. But this past month, I wasn’t learning. I was trying to prove something.</p>

  <p>I was trying to prove that I was capable of fighting.</p>

  <p>And in doing that, I stopped getting improving.</p>

  <p>That’s when I realized something.</p>

  <p>Maybe I wasn’t doing anything wrong.</p>

  <p>Maybe there was nothing to fix.</p>

  <p>Maybe the best thing I could have done was simply allow myself more time.</p>

  <h2>Patience as the best optimization</h2>
  <p>We are told that we should work harder. We all know that we should be disciplined. We all know that we should be consistent. And we all know that we should work out to improve our bodies or keep them healthy.</p>

  <p>But I’ve realized that it’s not just a matter of discipline.</p>

  <p>You can feel the motivation to start, build the discipline to continue, and still reach a point where you’re putting in the work but not seeing progress.</p>

  <p>I’ve been thinking about this through my boxing experience, and I think I’ve come to my own conclusion.</p>

  <p>I am an optimizer. I like to experiment, look for feedback, and improve. I’m always looking for areas where I can do better. I do this in coding, reading, and even in my projects and systems.</p>

  <p>I’ve always believed that you can achieve more by doing less—by doing the right things.</p>

  <p>But what happens when you’re doing nothing wrong?</p>

  <p>Sometimes you have the right form, the right schedule, and you’re consistent.</p>

  <p>So how do you optimize a system that is already running well and has no errors?</p>

  <p>For me, the optimization I added to that system was patience.</p>

  <p>I realized that there are things you can optimize to make results come faster, and there are activities where you simply have to pay the time tax and wait.</p>

  <p>You can’t bake a cake in two minutes by turning up the oven. You’ll burn the outside and leave the inside raw.</p>

  <p>That was my realization.</p>

  <p>In boxing, you cannot become a master in one month just by optimizing.</p>

  <p>This is also true for my writing. It’s been two months since I started writing articles, and I’m comfortable with the fact that you cannot become a great writer in that time.</p>

  <p>The same applies to my workouts.</p>

  <p>There were days when, after training, I would spend ten minutes in front of the mirror looking for any sign of muscle growth.</p>

  <p>And only recently did I start seeing my muscles become more defined.</p>

  <p>Truthfully, that was one of the happiest moments in my fitness journey—because I finally saw progress.</p>

  <p>I’ve now accepted that in some activities, you can find ways to optimize.</p>

  <p>But in others, the best optimization you can make is patience—doing the work consistently and allowing results to come with time.</p>

  <h2>The powoer of compounding effort<h2>
  <p>We all have expectations and aspirations, and sometimes you may work very hard to achieve your goals, but you don’t see your effort produce the expected results.</p>

  <p>This is sometimes called the valley of disappointment. It is the stage between your starting point and your breakthrough, where no effort seems to be bearing results.</p>

  <p>And the reason is not always a lack of discipline or commitment. Sometimes it doesn’t even require optimization or improvement, and it doesn’t mean that you’re failing.</p>

  <p>It simply requires you to stay consistent and continue what you’re doing—and eventually, you will reach your breakthrough.</p>

  <p>I think this valley of disappointment is the toughest stage for anyone pursuing growth, because it is an invisible phase. You are not seeing any progress, and you don’t know if it’s working.</p>

  <p>I like using the analogy of melting ice from negative ten degrees.</p>

  <p>When you increase the temperature from negative ten to negative five, there is still no visible change. From negative five to negative three to negative one, still no change.But when it moves from zero to one, that’s when you start to see visible change.</p>

  <p>And just like that, it doesn’t mean that the earlier increases—from negative ten to negative two—were not producing results. It was all accumulated effort.</p>

  <p>So passing through the valley of disappointment means persevering—continuing to move forward and waiting to see the light at the end of the tunnel, even when you can’t yet see the slightest hint of it, and just letting your efforts compund.</p>

  <h2>Finishing is a superpower</h2>
  <p>Nowadays, we expect quick feedback, and most people are selling the end product. No one tells you about the invisible phase between the starting point and success.</p>

  <p>So when we reach that stage—where you’re not seeing anything and you’re not sure whether you’re succeeding or failing—we usually interpret it as failure and start looking for a better option.</p>

  <p>Right now, we are in an environment where people are selling superhuman abilities or promising to make you better than everyone else. You see videos saying: do these five exercises to get superhuman reflexes, do this to read anyone in seconds.</p>

  <p>But I think in today’s environment, in our society and even in the coming generation, the greatest superpower a person can have is the ability to finish what you started.</p>

  <p>Most of us don’t fail because we didn’t work hard or didn’t focus. Most of us fail because we didn’t pursue what we started long enough to succeed.</p>

  <p>You can see this everywhere—people learning new languages, starting new sports. Even I accept that we want to see success early, we want feedback.</p>

  <p>But being able to persist—doing something consistently while others keep switching—I think that is one of the most valuable advantages in today’s environment.</p>

  <p>We are told to pivot fast. But pivoting often just takes you back to the start of a new valley of disappointment.</p>

  <p>When you pivot, you reset the compounding clock to zero. All the progress you had made—you leave it behind and start again.</p>

  <p>If you do this repeatedly, you end up with many half-built bridges.</p>

  <p>If you want to cross from one side of a river to the other, the person who commits to building one bridge will eventually reach the other side. But if you keep switching, you end up with five half-built bridges—and you’re still standing on the same side of the water.</p>

  <p>Still, I know it’s easier said than done.</p>

  <p>Some activities are easier to be patient with than others. Things like boxing or working out have clear, biological feedback—you know they will eventually yield results.</p>

  <p>But starting a business, learning a new language, or taking a course—there is no guaranteed outcome.</p>

  <p>So I won’t just say “be patient” blindly.</p>

  <p>Because sometimes, you do need to pivot.</p>

  <h2>Deterministic systems</h2>
  <p>Deterministic systems are systems where outcomes are proven—by biology, science, or simply the rules of life.</p>

  <p>You know that if you work out, you will eventually build muscle. Just like if you step off a ledge, gravity will act on you.</p>

  <p>So in activities like working out or boxing, I know that they are certain to produce results.</p>

  <p>In these kinds of activities, I see myself as a stonecutter, hammering at the rock. Each strike is contributing to the moment it finally breaks.</p>

  <p>In deterministic systems, every effort moves you closer to the endpoint, and you are certain that the outcome will come because it is proven.</p>

  <p>So in these systems, you cannot justify quitting after one month just because you didn’t see progress.</p>

  <p>Pivoting cannot be considered a smart decision when you quit something like working out after one month simply because you didn’t see results.</p>

  <h2>Probabilistic systems</h2>
  <p>A probabilistic system is one where the outcome is not guaranteed. Things like starting a business, building a startup, writing, or even freelancing—success is not certain.</p>

  <p>In these systems, there are many factors beyond consistency and time. Things like luck, the market, what people value, and what they are interested in.</p>

  <p>So sometimes, in business—or in something like freelancing—you may need to pivot. Maybe you’re in the wrong niche, or you’re using the wrong tool.</p>

  <p>Sometimes, you also need to optimize.</p>

  <p>Because you may think you are a stonecutter hammering at a rock, but in reality, you might be trying to break a diamond with a wooden mallet.</p>

  <p>So yes, patience is key.</p>

  <p>But after hitting a hundred or even two hundred times, you may need to step back and look for microfractures.</p>

  <p>And if you don’t see any signs of the stone breaking, maybe it’s time to find a better tool—or a different stone.</p>

  <h2>When to stay vs When to pivot</h2>
  <p>I cannot give you a clear framework for when to stay or when to pivot, because I believe it all depends on your judgment.</p>

  <p>Some people will thrive in the same area you decide to leave, and maybe you will thrive elsewhere.</p>

  <p>So I won’t just tell you to be patient and wait for improvement. Sometimes you may not be in the right niche, and you need to find what works for you. Other times, you may not be doing everything right, and there are areas you need to optimize.</p>

  <p>But one thing that can help you decide whether to stay consistent or shift—because there’s no point holding on to a sinking ship—is understanding sunk cost vs opportunity cost.</p>

  <p>Ask yourself: if I were to start this activity today, knowing everything I know now, would I still choose it? Or would I choose something else?</p>

  <p>Ask yourself: do I see progress? Do I see even a 1% improvement, or am I just stagnating?</p>

  <p>And then consider the opportunity cost—what am I missing out on by continuing to pursue this one thing?</p>

  <p>Because I can’t just say “be patient” blindly.</p>

  <p>For example, I started doing sales in December, right after finishing high school. But after just one month, I quit.</p>

  <p>One reason was that I was struggling to make a sale. But I also knew that others around me were making sales, so it was likely just a matter of time and patience.</p>

  <p>Still, I considered the opportunity cost.</p>

  <p>I realized that if I quit sales, I would have more time to focus on learning coding and training in boxing.</p>

  <p>So I made the decision not to be patient in that area. I chose to leave and pursue something else.</p>

  <p>Ultimately, it comes down to your judgment.</p>

  <p>You know what you want to achieve. You know your endpoint.</p>

  <p>No one can give you a perfect framework for these decisions, because the path is yours.</p>

  <h2>Why patience is still the best option</h2>
  <p>Still, I will conclude by saying this:</p>

  <p>patience, consistency, and finishing what you started.</p>

  <p>I think that is the one thing that gives you a competitive edge—not some superpower or superhuman ability.</p>

  <p>Just stick to the thing you started and believe that you will eventually see light at the end of the tunnel.</p>

  <p>This doesn’t mean you will see it immediately. The tunnel itself is part of the process.</p>

  <p>And once you accept that this phase—where nothing seems to be happening—is part of the process, you begin to understand that time is required.</p>

  <p>Even though there are situations where you need to pivot, the cost of starting over is often higher than the cost of pushing through.</p>

  <p>Because when you push through, you compound your efforts. When you start over, you reset that compounding.</p>

  <p>I believe that a person who commits to something consistently—even for just two years—will achieve more than someone who keeps searching for better options in that same period.</p>

  <p>So patience is the best strategy.</p>

  <p>Even though sometimes you may need to pivot, take your time and choose what is worth pursuing to you—what you are willing to endure, what you are willing to struggle for, even when progress is not visible.</p>

  <p>Because in the end, it comes down to what matters to you.</p>

  <p>And once you choose it, pursue it to the end.</p>
  `
}
,
  
  {
  slug: 'neuroplasticity-training-system',
  title: 'Designing a Neuroplasticity Training System: From Theory to Implementation',
  topic: 'Technology',
  date: 'Mar 31, 2026',
  readTime: '12 min read',
  substackUrl: '#',
  excerpt: 'After testing neuroplasticity through deliberate practice, I realised something: improvement is real — but the systems for training it are broken. So I built my own.',
  body: `
  <h2>Designing a Neuroplasticity Training System: From Theory to Implementation</h2>

  <p>After reading The Brain That Changes Itself, I came to a powerful realisation:</p>

  <p>Our brains are not fixed and we can improve our cognitive abilities through deliberate practice.</p>

  <p>I decided to test this theory directly.</p>

  <p>I incoperated deliberate neuroplasticity exercises into my daily routine: mental arithmetic, chess and using my non-dominant hand.</p>

  <p>After just three months of doing these exercises, I observed improvements:</p>

  <p>I was faster in mental calculations,</p>
  <p>My ELO in chess was increasing,</p>
  <p>I cound write comfortably with my left hand(although still not as good as my right hand)</p>

  <p>This proved to me that we can improve cognitive functions through deliberate practice.</p>

  <p>I decided to improve other functions as well and this is where i saw the problem.</p>

  <h2>The Problem</h2>

  <p>While the concept of neuroplasticity is well established, there is no clear, structured system for training.</p>

  <p>Most exercises are online are more like games and more optimised for interaction than real for real improvements.</p>

  <p>I wanted a way to train deliberately , not randomly.</p>

  <p>A system where each exercise is mapped with a specific function, you know what they improve in real life and they are optimised for maximum benefit and improvements on the users side.</p>

  <p>After searching for existing platforms and finding no solution that met this need, I decided to build my own.</p>

  <h2>Where existing solutions fail</h2>

  <p>After experimenting with several neuroplasticity platforms and cognitive training games, I began to notice a problem in what they are optimised for.</p>

  <p>From a neuroplasticity perspective, effective cognitive change requires three core conditions:</p>

  <p>focused attention</p>
  <p>controlled duration (not too short to be ineffective, not too long to cause fatigue)</p>
  <p>clear feedback on performance</p>

  <p>Without these, training just becomes entertainment.</p>

  <p>Most existing platforms fail to meet these conditions in meaningful ways.</p>

  <h3>1. They are optimised for engagement rather than neuroplastic change</h3>

  <p>Many platforms are designed around progression loops — levels, streaks, scores, and difficulty scaling. While this improves engagement, it often shifts the focus away from deliberate cognitive training.</p>

  <p>This leads to users becoming better at the game itself, but not experiencing improvements in real-world tasks.</p>

  <p>Some exercises require interaction-heavy interfaces (constant clicking, tapping, or progression prompts), which disrupt sustained focus. However, true neuroplastic training often requires uninterrupted attention and internal feedback rather than constant external stimulation.</p>

  <h3>2. The feedback systems are often misaligned with real world cognition</h3>

  <p>While some tasks provide immediate in-app feedback, they rarely connect performance to real-life cognitive functions.</p>

  <p>This creates a gap between:</p>

  <p>“I improved my score”</p>

  <p>versus</p>

  <p>“I improved my ability to think, recall, or process information in real situations”</p>

  <p>Without this bridge, improvement remains isolated within the platform and does not reliably translate to everyday activities.</p>

  <h3>3. Cognitive improvements are not described clearly</h3>

  <p>Most platforms label training in terms such as:</p>

  <p>working memory</p>
  <p>spatial reasoning</p>
  <p>processing speed</p>

  <p>While accurate, these terms are not clear for most users.</p>

  <p>For someone without a neuroscience background, it is often unclear how these translate into lived experience.</p>

  <p>For example:</p>

  <p>“working memory” is more meaningfully understood as holding thoughts and information in mind , just like doing calculations in your head.</p>

  <p>“processing speed” can be understood as formulating responses faster in conversations so that you dont feel like you are "loading" before every respone.</p>

  <p>Without this, users may not fully understand what they are improving or why it matters.</p>

  <p>These limitations led me to build my own system — one designed not for engagement, but for deliberate neuroplastic change, grounded in focused practice, meaningful feedback, and real-world cognitive translation.</p>

  <h2>The Build</h2>

  <p>I built the system using HTML, CSS, and JavaScript, intentionally keeping the stack minimal to prioritize performance, clarity, and accessibility over complexity.</p>

  <p>My goal was not to create another cognitive “game,” but a structured environment optimized for neuroplastic change through deliberate practice.</p>

  <h3>1. Exercise design and selection</h3>

  <p>I curated and implemented 13 core cognitive exercises, each targeting a specific function.</p>

  <p>These exercises were not treated as a game, but as a training platforms.</p>

  <h3>2. Progressive difficulty system</h3>

  <p>Every exercise is structured across three levels:</p>

  <p>Beginner</p>
  <p>Intermediate</p>
  <p>Advanced</p>

  <p>However, difficulty is not static.</p>

  <p>Each task adapts dynamically based on user performance.</p>

  <p>This design is based on the idea that neuroplastic change occurs in the “Goldilocks zone” — a level of difficulty that is neither too easy that it becomes boring nor too hard that it becomes frustrating, but just slightly above current ability.</p>

  <p>As performance improves:</p>

  <p>the system gradually increases difficulty to maintain challenge</p>

  <p>If performance drops:</p>

  <p>the system reduces difficulty to prevent frustration.</p>

  <p>This ensures the user is consistently operating at the edge of their capability, where learning is most effective.</p>

  <h3>3. Feedback and real-world transfer</h3>

  <p>A key design decision was ensuring that feedback is not purely in-game.</p>

  <p>Instead of optimizing for scores or engagement loops, each exercise defines cognitive function improved and some examples of what they improve in the real world</p>

  <p>This allows users to interpret progress beyond the interface — for example, improved recall in conversation or better sustained attention while working.</p>

  <h3>4. Design philosophy: effectiveness over engagement optimization</h3>

  <p>I deliberately avoided common engagement-driven mechanics such as:</p>

  <p>excessive animations</p>
  <p>reward loops</p>
  <p>unnecessary interaction prompts</p>

  <p>The goal was to reduce cognitive noise and allow full focus on the exercise itself.</p>

  <p>The interface is intentionally minimal, ensuring that attention is directed toward performance, not navigation or distractions.</p>

  <h3>5. Final intent</h3>

  <p>While the system resembles a cognitive training game, it is designed as a structured neuroplasticity training environment, grounded in the idea that adaptation happens at the boundary between challenge and ability.</p>

  <p>The objective was not to increase engagement metrics, but to create measurable, transferable improvements in real-world cognitive function.</p>

  <h2>Trade-offs in the system</h2>

  <p>One of the key challenges in designing this system was the limitation of translating certain neuroplasticity exercises into a fully digital, trackable environment.</p>

  <p>Some exercises are mostly physical or the feedback is internally experienced, meaning they cannot be accurately measured through traditional software interactions.</p>

  <p>This created an important design trade-off: accuracy of measurement vs. fidelity of real-world training.</p>

  <h3>1. Physical exercises with no direct digital feedback</h3>

  <p>Certain exercises must be performed in the real world without meaningful digital tracking.</p>

  <p>In these cases, the goal was not to simulate feedback , but to ensure clarity of execution.</p>

  <p>Instead of forcing a tracking system, I focused on designing precise, structured instructions that clearly define:</p>

  <p>what the user should do</p>
  <p>how the exercise should be performed</p>
  <p>what cues or outcomes they should observe</p>

  <p>In tese exercises feedback comes from users observation and self awareness.</p>

  <h3>2. Partially observable cognitive exercises</h3>

  <p>For exercises such as focus training, stroop test, or reading speed exercise, direct tracking is either unreliable or impractical without additional hardware (e.g., webcam).</p>

  <p>Attempting to simulate precision in these cases would introduce false accuracy and shift the system toward engagement optimization rather than meaningful training.</p>

  <h3>3. Self-reported feedback as a design choice</h3>

  <p>To address this limitation, I introduced a simple post-exercise reflection step:</p>

  <p>“How was the difficulty of this exercise?”</p>

  <p>This allows users to self-assess whether the task was too easy, appropriately challenging, or too difficult.</p>

  <p>While subjective, this feedback mechanism aligns with the principle that neuroplastic adaptation is strongly influenced by perceived effort and challenge.</p>

  <h3>4. Design constraint: avoiding forced gamification</h3>

  <p>A key decision throughout this process was avoiding unnecessary gamification of any activity.</p>

  <p>Over-engineering feedback systems would risk shifting the product toward engagement optimization, artificial scoring systems and distraction from the core task.</p>

  <p>Instead, I prioritized deliberate practice with minimal interference, even if it meant accepting partial observability in certain exercises.</p>

  <h3>Final trade-off</h3>

  <p>The system accepts a fundamental constraint:</p>

  <p>Not all cognitive training can be perfectly measured.</p>

  <p>In exchange for reduced tracking precision, the system preserves:</p>

  <p>real-world applicability</p>
  <p>cognitive authenticity</p>
  <p>focus-driven execution without distraction</p>

  <p>This trade-off was intentional, not a limitation of design.</p>

  <h2>Closing Reflection</h2>

  <p>After building this system, the focus shifted from theory to personal application.</p>

  <p>This project is not only a product I created — it is something I actively use.</p>

  <p>The underlying belief is simple: any cognitive function can be improved through deliberate, structured practice over time.</p>

  <p>The goal of the system is not to make users “better at a game,” but to improve specific cognitive functions that translate into real-world performance.</p>

  <p>Improvements in areas such as working memory, attention control, and processing speed do not remain abstract — they manifest in practical situations like learning, problem-solving, mathematics, and everyday decision-making.</p>

  <p>This is the core value of the system: transferable cognitive improvement through consistent practice.</p>

  <p>However, no system produces change instantly.</p>

  <p>Meaningful neuroplastic adaptation requires consistent repetition.</p>

  <p>Just be patient and you will see changes.</p>

  <p>The system is intentionally designed to be lightweight in time commitment. Around 20 minutes per session on a single exercise is sufficient to enter the optimal learning range — the “Goldilocks zone” where challenge and ability are balanced.</p>

  <p>Within that window, the system adapts to performance and maintains an appropriate level of difficulty.</p>

  <p>The exercises, their targeted cognitive functions, and their real-world applications are clearly defined within the platform so that users understand not only what they are doing, but why it matters.</p>

  <p>This project is an ongoing experiment in deliberate cognitive improvement.</p>

  <p>The rest is consistency.</p>
  `
},
  {
  slug: 'masculinity-boy-to-man',
  title: 'Masculinity- how does a boy become a man.',
  topic: 'Personal Growth',
  date: 'Mar 28, 2026',
  readTime: '10 min read',
  substackUrl: '#',
  excerpt: 'Masculinity is not something you download from the internet. It is shaped by environment, experience, and the path you choose to follow.',
  body: `
  <p>Masculinity- how does a boy become a man.</p>

  <p>As young boys, we looked up to our fathers.A boy who idolises his father sees him aassone sort of superhero - a figure of authority. He doesn’t necessarily know what he does or why he leaves home. He can’t fully describe it. He just sees him, and admires him. And you just know that one day you want to be like him.</p>

  <p>Then we get to adolescence.</p>

  <p>We start picking behaviours outside our household. A character that you look up to and are impressed with, you decide to adopt and practise it. You continue to adopt characters from then onward and form a self-image.</p>

  <p>And this results in who you become.</p>

  <p>The home you grow up in, your community, your role models, and your beliefs shape you into the man you become. And in turn, it becomes what you view as masculinity.</p>

  <p>Definition of masculinity</p>

  <p>Masculinity is defined as the social construct and set of behaviours and traits associated with boys and men, often characterised by strength, assertiveness, and leadership.</p>

  <p>To put it simply, masculinity is simply acting like a man.</p>

  <p>It comes naturally.</p>

  <p>And this leads me to my main question:</p>

  <p>Why are boys and men searching for masculinity tips online?</p>

  <p>Growing up, we had guidance and a sense of community. Once we got older, we got access to phones, entered social media, and became connected to the whole world. We were exposed to different characters, different beliefs, and different ideas of masculinity.</p>

  <p>You have people like Andrew Tate who teach traditional masculinity and how to become an “alpha male.”</p>

  <p>You have Chris Williamson who leans more towards a reflective, empathetic form of masculinity.</p>

  <p>You have others who show masculinity through discipline and routines.</p>

  <p>These are just a few examples.</p>

  <p>Now here is the ironic part.</p>

  <p>With all these reference points and models of masculinity—especially digital masculinity—most men feel lost.</p>

  <p>According to research, about 15% of men and boys report not having close friends. Men are now 4 times more likely to suffer from isolation and even suicide, yeli 10% likely to seek care.</p>

  <p>One of the major reasons for this problem is the global interconnectedness brought by social media.</p>

  <p>Initially, young men would look up to and compare themselves with their fathers, uncles, neighbours, and others in their immediate environment.</p>

  <p>Right now, we open social media and see men with six-pack abs, boys who became millionaires at 16, confident men who have no problem approaching women—all examples of the “alpha male.”</p>

  <p>And you feel like you have no excuse to be fat, shy, poor, or living with your parents at the age of twenty.</p>

  <p>In your twenties, you already feel like you’ve failed in life.</p>

  <p>And you keep telling yourself:</p>

  <p>“I’m not good enough.”</p>

  <p>Everything in your daily life confirms this—when you look in the mirror, your social life, your finances, your entire situation.</p>

  <p>And this pushes you to search for masculinity tips online.</p>

  <p>Of course, some fall into depression and start looking at how less significant their lives are.</p>

  <p>Others find their own solutions to this.</p>

  <p>As human beings, we all have different coping mechanisms for different situations. Now, as men or boys who want to turn into men, and we have already seen how other men are prospering, how other men have six-packs, and beautiful partners and milions. It begins to make you question your masculinity or your level of competence . And this may sometimes lead us to become depressed because this is an attack on our self-worth.</p>

  <p>There’s a group which falls into depression and chooses to spend the rest of their days, or the period of time in their 20s, looking at how less significant they are compared to other people. But there’s another group who agree to accept reality. They accept that you cannot be as rich as Elon Musk. They accept the fact that Lamine Yamal started playing professionally at the age of 16, but that doesn’t mean that if they are in their teens or 20s, they have failed in life.</p>

  <p>So this crisis is brought by social media and interconnectedness. And it is very convenient that social media and technology have also offered a solution to this problem. One of the ways to cope with this situation is becoming competent in your own way. And these are people who simulate competence, and there are others who decide to work in the real world.</p>

  <p>Right now, we are in an environment where we have very many ways to escape reality. Just because you couldn’t make it in the real world, we have technology which allows you to be very prosperous in another world, in the gaming world. And that is why men who are meant to conquer and provide and who are meant to dominate, we are getting lost in video games. Because these offer us an easier path to conquer something, to dominate something.</p>

  <p>And I cannot lie, I myself have fallen victim to this, because there was a period where I used to play mobile football games, and you always collect money and buy expensive players. And there’s a point where I had gotten one million coins. That day, my mother found me bragging that I have one million in my account, and she was very excited. She thought it was actual money. And then I told her, no, it is just one million in my game account, and now I can buy Cristiano Ronaldo. And that, for me, was a big achievement. But the disappointment on her face showed me that this is not an achievement in the real world.</p>

  <p>Right now, it is easier to level up your username than your surname. And I think that is a trap, because we are meant to achieve, but if you have somewhere where achieving is very easy, then it loses the drive to achieve in real life. That is why we go for validation on social media, where it is easy. That is why even people right now have AI girlfriends, because approaching a real girl is not easy; you are not guaranteed success. It is very uncomfortable.</p>

  <p>So, for me, I think one of the ways a boy becomes a man is by first accepting himself as he is in his current situation and striving to improve, not artificially, but he has to embrace discomfort and just strive in the real world.</p>

  <p>And there's this other group of men who accept that they are not alphas, but they decide to just improve in their own ways. Right now, I’m writing this article at the age of 19 because, at some point in time, I looked at myself and my life and saw that there are a lot of things that I can improve in myself, in my environment, and in my life.</p>

  <p>Firstly, I started by creating a radical system where I would overhaul my entire reality very dramatically. And for those who are into self-development or who are going to look for it on social media, I saw this video saying, “go and improve in the shadows and come back stronger.” And I started learning things. I started working out. I even started training boxing because there was a level which I was in, and there was a level which I used to see in other people, and I wanted to be like them. And that is what still drives me.</p>

  <p>But the more I continued to improve, I started to compare myself with other people and their progress, and I won’t lie, it used to hurt me when I would go on TikTok and see people saying they are 16 years old and they are millionaires. It made me question a lot of things. And I, for one, have gone online and searched for masculinity tips, but also, while doing research and seeing these behavioural people advising, I started to realize that masculinity depends on what it means to you.</p>

  <p>If your view of masculinity is becoming stoic, then that is masculinity for you, and no one will blame you for that.</p>

  <p>So the first thing that I did, and it really liberated me, is I accepted the fact that I am training boxing because, at the moment, I am not confident in violent confrontation. I am working out because currently I am weak, and I want to become stronger.</p>

  <p>So right now, my development is not about escaping from who I am or trying to become a better version of myself. Right now, my development is about accepting the way I am and moving together with my weaknesses and improving, because I know that everyone can change and everything can be improved.</p>

  <p>As I conclude, I would just want to say that masculinity is not something that you learn from the internet. It’s something that comes from the environment. We see our fathers, and we learn how to be responsible men and how to be tough men. And our mothers teach us respect and how to treat other people well. And those like me who do martial arts, we see from our coaches that you’re supposed to be a good man, but there are some times you need to fight for what you believe in.</p>

  <p>Your understanding of masculinity is shaped by what is around you. Masculinity is not a universal template. It’s not something that you copy from someone else, because what it means to one person differs from what it means to another.</p>

  <p>Your masculinity depends on your environment and the kind of man you decide to become. Your environment can show you what to follow. It can also show you what you want to avoid. Both are useful.</p>

  <p>The responsibility is on you to observe, decide, and commit to a path.</p>
  `
},
  {
  slug: 'ai-code-reviewer-thinking',
  title: 'I Built an AI Code Reviewer — Not to Replace Thinking, But to Force It',
  topic: 'Technology',
  date: 'Mar 24, 2026',
  readTime: '6 min read',
  substackUrl: 'https://open.substack.com/pub/alfonseotieno/p/i-built-an-ai-code-reviewer-not-to',
  excerpt: 'AI can generate code fast — but it cannot think for you. I built an AI code reviewer not to replace thinking, but to force it. Here is what I learned.',
  body: `
  <p>One of the most frustrating parts of learning to code is when the code doesn't run and you don't know why.</p>

  <p>As a self-taught coder, I've experienced this problem firsthand. Although learning and building projects with HTML and CSS wasn't that complicated, JavaScript projects were a whole different set of problems. After spending hours writing code, the logic makes perfect sense in your head and the structure looks fine — and yet nothing works.</p>

  <p>You go line by line trying to find the issue, only to realise the problem was something very small — a spelling mistake, case sensitivity, or a missing curly bracket.</p>

  <p>I've been there many times, and I wanted to solve that problem.</p>

  <h2>The Decision to Integrate AI into My Daily System</h2>

  <p>Recently, I made the high-level decision to integrate AI into my daily system — especially in coding.</p>

  <p>This wasn't an easy decision for me, as I am not a big fan of the rise of artificial intelligence. These tools have their own disadvantages which most of us ignore. The risk for developers like me is that if you rely on it too much, you stop thinking for yourself.</p>

  <p>But AI is a very powerful tool, and not using it is just as dangerous because you are now moving slower compared to others who decided to use it effectively and deliberately.</p>

  <p>After reading <em>Deep Work</em>, where it is argued that in a world of technological advancement, those who learn how to work with intelligent machines will thrive, I decided to give AI tools a chance.</p>

  <h2>The Shift</h2>

  <p>Using AI proved very effective. Just two days after deciding to use AI, I had already created a personal portfolio website and a habit tracker app that I’m still using today. The AI generated both in less than 30 seconds.</p>

  <p>But there was a problem: I wasn't even reading the code. I was just copying and pasting AI-generated output. This is the danger zone for developers.</p>

  <p>Since the AI is so efficient, it got to a point where whenever I wanted to make changes, I would ask AI to generate a new solution, then delete the old code entirely and replace it.</p>

  <p>I saw this as a problem because I was no longer engaging my brain.</p>

  <h2>Building a Solution to My Own Problem</h2>

  <p>I came up with a simple solution: an AI-powered code reviewer.</p>

  <p>The idea was straightforward:</p>

  <ul>
    <li>Instead of AI writing the code and me improving it, I would write the code first.</li>
    <li>I would feed the code to AI for review.</li>
    <li>The AI would point out errors, what’s working well, and what can be improved.</li>
    <li>Then I would go back and make the improvements myself.</li>
  </ul>

  <p>This ensures that I stay engaged with the code.</p>

  <p>That is why I intentionally did not add a copy button for improved code. To make changes, I have to write them myself and understand what I’m doing.</p>

  <p>The code reviewer is now live and can be used by both beginners and experienced developers.</p>

  <h2>Honesty: I Didn’t Build It Alone</h2>

  <p>I want to be clear about something: I did not write this entire project from scratch.</p>

  <p>I came up with the idea, gave AI a prompt, and it generated most of the initial code. Claiming otherwise would be dishonest, and there’s no value in pretending. What matters is how the tool is used.</p>

  <p>AI can generate in minutes what would take me days. That’s a reality. But my role was to understand the code, debug it, and fix logical issues.</p>

  <p>And that’s where the real learning happened.</p>

  <h2>The Challenge: Making It Actually Work</h2>

  <p>The biggest challenge wasn’t building the interface — it was integrating the API.</p>

  <p>After deploying the project, the reviewer didn’t work. The AI wasn’t responding. Initially, I tried using Claude API, but I quickly realised it required payment.</p>

  <p>I had to step back and find a better solution.</p>

  <p>Eventually, I switched to Gemini API, which offers a free tier with reasonable limits. This made the project usable without immediate cost and allowed me to continue building.</p>

  <h2>From Using Tools to Building Them</h2>

  <p>This project represents a shift in how I approach learning.</p>

  <p>Instead of just using tools created by others, I’m starting to build my own — beginning with solutions to my own problems.</p>

  <p>I’m not trying to impress anyone with complexity. I’m trying to create systems that make me better.</p>

  <p>Because at the end of the day, the goal is not just to write code.</p>

  <p><strong>The goal is to become someone who can think, solve problems, and build.</strong></p>

  <h2>Final Thought</h2>

  <p>AI is not the problem.</p>

  <p><strong>Blind dependence is.</strong></p>

  <p>Used correctly, AI can accelerate your learning. Used passively, it can weaken it.</p>

  <p>The difference is not in the tool — it’s in how you use it.</p>

  <p>This website is one of the tools helping me use AI and code more efficiently.</p>
`
},
  {
    slug: 'atomic-habits',
    title: 'Atomic Habits Are Automatic Habits',
    topic: 'Book Review',
    date: 'Mar 21, 2026',
    readTime: '5 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/atomic-habbits-are-automatic-habbits',
    excerpt: 'Real change is identity change. I started reading Atomic Habits to turn my daily activities into automatic habits — here is what shifted in my thinking.',
    body: `
      <h2>Why I Started Reading Atomic Habits</h2>
      <p>I created a one-year master plan while in high school aimed at self-improvement, building skills, and most importantly, building discipline. The plan comprised a number of activities I did daily, and I created a daily system. My aim is that by the end of the year, these activities turn into habits and become more automatic with time. I started reading the book Atomic Habits to turn my daily activities into automatic habits.</p>
      <p>I can confidently say that reading the book provided the answers I was looking for and a lot of other meaningful information. I have already written two articles based on concepts from Atomic Habits — one about outcome-driven vs. identity-driven habits, and another about how I applied the "paper clip strategy" in sales to turn rejection into progress. I will only discuss the concepts that stood out most to me, that caused a shift in my mentality, and how I am applying them.</p>
      <h2>Key Insight That Changed My Perspective</h2>
      <p>I will just try to summarise my interpretation in one sentence: <em>True transformation comes from systems, not goals — specifically by leveraging the compound interest of 1% daily improvements and consequently developing the identity of the person you wish to become.</em></p>
      <p>We all have goals (both winners and losers). The difference is that winners set systems that position them to be more likely to win. Not flashy systems, nor intense, but repetitive systems which allow them to continually improve.</p>
      <h2>How I'm Applying the Knowledge</h2>
      <p>Firstly, I realised that real change is identity change. I started by reducing the intensity of my activities and focusing more on just showing up — even in the smallest ways — and allowing the habit to develop. I now have a daily system which revolves around repetitive actions, from reading to writing to exercises and boxing.</p>
      <p>I have come to terms with the fact that on some days I may do all these activities perfectly, and on some days I may feel less motivated to act. The days where I'm least motivated are the most important. I don't force perfection and instead do the least version of the habit — even if it is only for two minutes. As long as I don't miss the habit, I make it a personal commitment not to miss twice in a row. As James Clear says, "Missing once is a mistake; missing twice is the start of a new habit."</p>
      <h2>Takeaways</h2>
      <p>Starting and building new habits doesn't require intensity at first. Just start small, get your reps in, and continue forming the identity. A habit must first be established before it is optimised. Working out, running, or reading a book for five minutes isn't flashy, but it is the bridge to being able to consistently do the habit for an hour without burning out.</p>
      <h2>Conclusion</h2>
      <p>For anyone trying to build new habits or strengthen existing ones: you already have a goal. Now set systems that will drive you towards your goal. Don't chase big results. Chase small, consistent actions, and the results will follow naturally.</p>
    `
  },
  {
    slug: 'life-not-fair',
    title: 'Life Is Not Fair — And That Is Okay',
    topic: 'Personal Growth',
    date: 'Mar 17, 2026',
    readTime: '7 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/life-is-not-fair-and-that-is-okay',
    excerpt: 'Life distributes advantages unevenly. Some are born into royalty, others into poverty. The real question is not whether life is fair, but what we do with the hand we\'re dealt.',
    body: `
      <p>Life is not fair. We can pretend it is. We can tell ourselves comforting stories about equality and balance. But reality proves otherwise. Yes, we live on the same earth. We breathe the same oxygen. Our blood is the same colour. We all feel pain. And in the end, we all die. <em>But we do not start from the same position.</em></p>
      <p>Some are born into royalty. Others are born into poverty. Some grow up surrounded by opportunity. Others grow up surrounded by limitations. And that is just the way it is. It is a feature of life, not a glitch. And that is also the beauty of life.</p>
      <h2>Different Starting Lines</h2>
      <p>Right now, there is a young man studying day and night because he believes education is his only escape from poverty. At the same time, somewhere else, another young man is simply waiting to inherit his father's company. Both may be intelligent. Both may be hardworking. But their starting lines are completely different. They don't have the same opportunities. They may have the same capabilities, but one has an advantage over the other.</p>
      <h2>Unequal Advantages Go Beyond Money</h2>
      <p>Inequality is not only about wealth. Life distributes advantages unevenly in many ways: some people are naturally intelligent, others struggle academically. Some discover their talents early, others spend years searching. Some are physically strong, others are not. And then there is luck. Two people may study equally hard and graduate with the same qualifications. Yet one gets a job while the other struggles for years. In Kenya, this is not unusual. It is reality.</p>
      <p>Effort matters. Discipline matters. Skill matters. But sometimes, outcomes are influenced by timing, connections, and circumstances that are completely outside your control. You can do everything right and still lose. You can do very little and still win. That is not fair. But it happens.</p>
      <h2>The Only Question That Matters</h2>
      <p>According to Tony Robbins, in every situation we make two decisions: what does this mean, and what am I going to focus on? Because we all interpret events differently and give them different meanings. And that determines what we focus on. <em>We experience the life we focus on.</em></p>
      <p>If life is unfair, we can choose to focus on our disadvantages — blame our parents, blame society, blame God, complain about people who have advantages. All of those complaints are valid. But none of them change reality. Blame may feel justified, but it keeps you stuck at the starting line, arguing about fairness instead of moving forward.</p>
      <p>The alternative is far more powerful. We accept the truth: some people have a head start. Some people will always have advantages we don't. Once we accept this, we stop wasting energy fighting reality — and start working within it.</p>
      <h2>Radical Responsibility</h2>
      <p>Once you accept that life is unfair, you are left with one unavoidable conclusion: no one is coming to save you. No one will suddenly level the playing field. So if you started with less, your responsibility becomes clear: work harder, learn faster, build stronger discipline, develop skills that make you valuable. Not because it is fair — but because it is necessary. It is your responsibility to level the playing field.</p>
      <h2>Control What You Can Control</h2>
      <p>You cannot control where you started. You cannot control your genetics. You cannot control your upbringing. You cannot control luck. But you can control your habits, your effort, your mindset, and your ability to improve. And here is the beauty of it all: sometimes the people who start behind end up going the furthest. Because struggle forces growth. It builds discipline, sharpens focus, and creates resilience.</p>
      <h2>Why I Still Work Hard</h2>
      <p>I work hard because I want to improve myself — to become a better version of who I was yesterday. Not perfect. Just better. The more I keep learning, the more my mindset shifts. I stop putting unnecessary pressure on myself. I stop expecting immediate results. I understand that progress is slow, and that is okay. Because progress compounds. Truthfully speaking, I don't know if this path will take me out of poverty. But I know this with absolute certainty: inaction will keep me exactly where I am. Doing nothing is the only guaranteed failure.</p>
      <h2>The Meaning Is in the Climb</h2>
      <p>Life is not about comfort. It is about the uphill climb. You climb, and it is hard. You struggle, and it tests you. But when you reach the top, you want to sit for a moment, enjoy the view — and then look for another hill. A bigger one. Because the meaning was never at the top. It was always in the climb.</p>
      <p>Life is not fair. But that is exactly what makes it worth engaging with. Because now, there is something to prove. Something to build. Something to chase. And even if I don't know where this path will lead, I know this: I would rather struggle while moving forward than stay comfortable while standing still.</p>
    `
  },
  {
    slug: 'rejection-sales',
    title: 'Turning Rejection Into Progress: My Sales Experiment in Real Time',
    topic: 'Discipline',
    date: 'Mar 14, 2026',
    readTime: '9 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/turning-rejection-into-progress-my',
    excerpt: 'Salespeople are told not to take rejection personally. But when emotions take over, that advice is easier said than done. Here is how I used the paperclip strategy to regain control.',
    body: `
      <h2>Returning to Sales</h2>
      <p>I got a chance to do sales after a long time. It was an event at a university for two days, and my friend had a VR headset, so I was there to help him sell the VR to students. I have prior experience in sales — I've done sales at two companies before, one selling Wi-Fi and the other selling SIM cards. I had always seen myself as an experienced salesman.</p>
      <p>The only reason I left sales was my one-year master plan. Right now, I'm 19 and have some time — since I don't have many financial obligations, this is the period where I have the most freedom for self-development. So when I got this opportunity for just two days, I saw it as a good chance to earn some money and then return to my system.</p>
      <h2>What I Like About Sales</h2>
      <p>One thing I like about sales — and this is also what makes it very challenging — is that when you're pitching a product, most of the people you meet weren't even thinking about it before encountering you. Your job is to convince them, in that moment, why they should spend their money on something they hadn't considered. Sales rewards effort directly. You can be a good salesperson or a bad one, and your results directly reflect your effort. That direct link between effort and result is what I love about it.</p>
      <h2>Facing Old Anxiety</h2>
      <p>Before starting sales at the university, I felt a bit of anxiety. I cannot pretend that I don't feel nervous when approaching new things. This is the same anxiety I used to feel in high school before competitions and debates. But I always found a way to move forward despite it. Once I reached the campus, I took five deep breaths and sat for ten minutes, observing the students and preparing myself mentally. The anxiety never fully disappears. What works is acknowledging it and mentally preparing.</p>
      <h2>The First Day: Rejection Hits Hard</h2>
      <p>The first day hit hard. I approached the first ten groups with high expectations. I was confident in both my sales skills and the product. But the reality was the opposite. While some students paid attention, once I mentioned the price, some laughed, some rejected politely, and others simply said they weren't interested. All ten groups rejected the offer.</p>
      <p>As someone who has done sales before, I know the advice: don't take rejection personally. I knew this intellectually, but I'm only human. Emotions got the better of me. After the tenth rejection, it didn't feel like they were rejecting the product — it felt like they were rejecting me. After those ten groups, I stopped pitching entirely. By the end of the day, I hadn't converted a single prospect. I felt like I had failed both myself and my partner.</p>
      <h2>Reflection and Adjusting: The Paperclip Strategy</h2>
      <p>After the first day, I went home and reflected. I realised that my emotions had gotten the better of me. The next day, I told myself the goal was simple: just approach the students and don't let rejection affect me emotionally.</p>
      <p>I decided to adopt the paperclip strategy from Atomic Habits, but with a modification. I downloaded a counter app and set a clear target: pitch to 50 groups. That was my only goal. Whether they rejected or accepted, I would simply move the counter up by one. I started the counter at negative 50. The objective was to end the day at zero.</p>
      <p>I accepted that telling myself not to feel emotional wouldn't work. Instead, I framed the goal differently: pitch consistently, maintain the same energy from the first group to the last, and treat every attempt as a small victory. I couldn't control the prospects' responses, but I could control my energy. Every pitch became a win. Rejection no longer felt like failure.</p>
      <h2>The Second Day: Momentum and Progress</h2>
      <p>Luckily, the first person I pitched to on day two accepted. That created momentum and boosted my confidence. It showed me that yes, I could make a sale. After that first win, the goal was simple: pitch to a group, tap the counter, and move up by one.</p>
      <p>I didn't reach zero by the end of the day — I got to negative 20. But I still ended up getting more clients than my partner had on the previous day. The counter kept moving. I maintained the same energy with each pitch, celebrated each small win, and moved to the next group. <em>How could I trick my brain if I already knew I was tricking it?</em> But it worked. I reframed success. Every pitch — accepted or rejected — was a victory.</p>
      <h2>Lesson Learned</h2>
      <p>My plan for this two-day sales job was to earn money to buy the book Deep Work. I didn't manage to get enough, but the experience taught me something valuable. Rejection doesn't kill you, though it can feel painful. Often, we take it too personally, thinking that being rejected means our worth is being rejected. But that's not true — the person is rejecting the product, not you.</p>
      <p>This experience also reinforced that you cannot claim to be good at something unless you practise it regularly. I've always been confident in my sales skills, but when I shifted to selling VR headsets, I struggled at first. The context had changed. Sales is still sales, but every situation demands adjustment, iteration, and learning. Even though I didn't earn enough to buy the book, I walked away with something far more valuable: practice.</p>
    `
  },
  {
    slug: 'ai-impact',
    title: 'Impact of Artificial Intelligence on Society Today',
    topic: 'Technology',
    date: 'Mar 7, 2026',
    readTime: '15 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/impact-of-artificial-intelligence',
    excerpt: 'Most discussions about AI focus on future impact. I want to talk about the effects it is already having right now — on creativity, social interaction, intellectual capacity, and decision-making.',
    body: `
      <p>AI has grown rapidly over the past few years. If you are a young person right now — part of Gen Z or Gen Alpha — you are probably experiencing some level of anxiety that AI might take over many jobs in the next few years. For someone like me, it can feel quite worrying because I have dedicated my time to learning coding, and I hear people saying that in a year coding might be dead.</p>
      <p>Throughout history there have been technological inventions, and people have always responded the same way. During the rise of industrial machines, people feared being left jobless. Yes, some jobs were replaced, but new jobs were also created. I believe that even if some jobs become displaced, new opportunities will appear. But most discussions about AI focus on its future impact. I want to talk about the impact it is <em>already</em> having right now.</p>
      <h2>Creativity</h2>
      <p>One area where I already see the effect of AI is creativity. People are becoming less and less creative, and they are using their brains less to think. Human beings are creative creatures — we were meant to build, create, innovate, and find ways to develop things that were not there before.</p>
      <p>Even on a smaller scale, people use AI to generate text messages — thank-you messages or condolence messages. These are tasks that do not even require more than ten minutes, yet people still ask AI to generate them. On a larger scale, people use AI to create their resumes, application letters, and even when a section says "tell us something about yourself," people generate it using AI. You know yourself best, yet you don't want to apply your creativity to describe yourself.</p>
      <p>From what I have learned about the brain, when you repeatedly use a certain function, you strengthen the neural connections associated with it. The opposite happens when you stop using it. So the less you engage in creativity, the weaker that creative ability becomes.</p>
      <h2>Social Interactions</h2>
      <p>Large language models like ChatGPT rarely contradict our opinions. They do not disagree with you, challenge you, or directly confront your ideas. Instead, they tend to validate you. This feels very easy — almost like a cheat code for socialising.</p>
      <p>We even see people creating apps specifically for chatting with AI — platforms similar to WhatsApp, but instead of chatting with a real person, you are chatting with artificial intelligence. The big difference is that human beings do not follow a script. Sometimes people reply late. Sometimes they disagree. Sometimes they challenge your ideas. Real human interaction does not follow a script. Engaging in uncomfortable situations is exactly what builds social intelligence. The more we avoid them, the less socially intelligent we become.</p>
      <h2>Intellectual Capacity</h2>
      <p>A student feeds their course notes into AI and asks it to explain the material as if being explained to a child. This is a young adult asking AI to spoon-feed information that is already written out in their notes. The result is that yes, we may have more people graduating, but we have fewer people actually capable of performing the tasks they studied for. The intellectual effort was left to AI. AI will not get employed — you will. When someone studies for four years, we expect that they understand what they studied.</p>
      <h2>AI and Decision Making</h2>
      <p>When I wanted to start martial arts, I kept asking which martial art is the best. So I went to AI. If you have ever asked AI a decisive question, you may already know that it rarely gives a direct answer. It tells you about Boxing, then Taekwondo, then Kickboxing. It presents the pros and cons — but there is never a point where it gives you one specific answer, because AI does not have biases.</p>
      <p>The difference between making decisions using AI and asking a human being is that AI gives you options, while human beings give you a clear recommendation based on their experience. If I want boxing advice, I don't ask AI — I ask the champion at our boxing gym, because he will give me specific, clear guidance. AI is very good at giving you options. Human beings, however, are often better at helping you make decisions.</p>
      <h2>The Lust Trap</h2>
      <p>We see apps that advertise AI girlfriends. Someone no longer needs to approach a real woman. They download an app, create their AI girlfriend, and customise her exactly the way they want. She sends sweet messages, compliments him, and may send erotic messages. All of this happens without the person leaving their room. The more someone becomes accustomed to this artificial interaction, the less likely he is to approach a real person in the real world. You cannot download a wife from the internet. At some point you will have to approach real people, accept the possibility of rejection, and interact with them. Rejection will not kill you.</p>
      <h2>Escaping Reality</h2>
      <p>AI has also provided the ultimate way to escape reality. Imagine a person asking AI for a six-pack plan. AI responds with a six-month plan, then a weekly plan, then a daily plan. The person feels motivated and productive — imagining the six-pack even before they have started. The problem is that AI never finishes planning for you. At no point does it say: we have planned enough — go out and start acting. The more planning you read, the more productive you feel. You begin to romanticise planning over doing.</p>
      <h2>Conclusion</h2>
      <p>This is not about saying AI is bad. Genuinely, AI has made many things easier. The difference lies in how you use it. If you use AI to streamline processes, make work easier, or get tasks done faster, then AI becomes a useful tool. But if you use AI to satisfy your lust, avoid uncomfortable situations, or seek constant validation, then AI is harmful to you. There are areas where human intelligence cannot be replaced by AI, no matter how advanced it becomes.</p>
    `
  },
  {
    slug: 'confidence-backwards',
    title: 'I Was Learning Confidence Backwards',
    topic: 'Personal Growth',
    date: 'Mar 3, 2026',
    readTime: '10 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/i-was-learning-confidence-backwards',
    excerpt: 'I watched a behavioral expert interview and realised I had been studying the symptoms of confidence — posture, eye contact, body language — instead of building the causes.',
    body: `
      <h2>What a Behavioural Interview Changed About How I See Authority</h2>
      <p>Recently, I watched an interview with behavioural expert Chase Hughes in conversation with Steven Bartlett in the Diary of a CEO. The discussion covered authority, control, discipline, communication, influence, and human behaviour. But what stayed with me wasn't a technique. It was a realisation: I had been learning confidence backwards.</p>
      <h2>The Triangle to Success</h2>
      <p>The interview began with what was called the Triangle to Success, built on three pillars: self-mastery, observation, and communication. According to this framework, these three traits largely determine human outcomes. What struck me immediately was self-mastery. Because right now, that is exactly where I am — trying to understand myself, refine myself, and deliberately evolve into a better version of who I am. For the first time, self-development stopped feeling random. It felt structured.</p>
      <h2>Everyone Wants Control</h2>
      <p>Social media constantly sells control: be confident, be dominant, be respected, be powerful. But the interview suggested something uncomfortable — what we actually lack is authority and comfort. And those cannot be downloaded from the internet. Most of us chase social skills and techniques. That is why we go to YouTube searching for communication tricks and charisma hacks. But authority and comfort are built, not downloaded.</p>
      <h2>The Comparison Problem</h2>
      <p>During COVID-19, social media expanded my world overnight. Comparison stopped being local and became global. At fourteen, I constantly compared myself to others — better photos, better clothes, better lives. It left me focusing more on the things I didn't have. Eventually, I left social media.</p>
      <p>Later, when I returned to build my discipline brand on Instagram, I curated my feed to show only discipline content — people doing workouts in the rain, teenagers who became millionaires at 16. But I realised I was also comparing myself with these people and started chasing intensity. Even discipline content creates comparison.</p>
      <p>The interview introduced a different metric: compare comfort. Someone may have fame, money, or attention — but would I be comfortable living their lifestyle? Right now, I have time to learn, train, and build myself. That is comfortable for me. And comfort is an advantage.</p>
      <h2>Composure Before Posture</h2>
      <p>This idea changed me the most. For quite some time, I searched for videos teaching how to walk, how to sit, how to shake hands, how to look confident. I was studying the appearance of authority. But authority does not begin with posture — it begins with composure. Fear speeds you up. Stress makes you rush. Insecurity makes you overperform. Calm people move slower — not lazily, but deliberately. Their internal state creates the posture naturally. That realisation made me stop chasing behavioural tricks. I started pursuing composure instead.</p>
      <h2>What Authority Is Actually Made Of</h2>
      <p>Authority was described as a combination of five elements: confidence, leadership, discipline, gratitude, and enjoyment. You cannot be confident without something behind you. You're confident in exams because you studied. You're confident in negotiation because you have leverage. This is partly why I train boxing and study programming — to have something that I'm genuinely confident in. The surprising element was enjoyment — or mindfulness. I'm not always smiling during runs or while getting hit in sparring. But there is gratitude in participating in the process itself. That is mindfulness.</p>
      <h2>Life Creates Body Language</h2>
      <p>One sentence stayed with me: your life creates your body language, not the other way around. Instead of fixing gestures, we should first control the foundations: environment (is your space ordered?), time (are you always rushing?), appearance (do you respect your presentation?), social life (can you connect with others?), financial direction (are you progressing toward independence?). Authority emerges from lived structure.</p>
      <h2>Confidence Is a Difficulty Setting</h2>
      <p>When playing a football video game on easy mode, conceding a goal doesn't scare you — you still expect to win. On the hardest difficulty, conceding one goal makes you panic. The same applies to how we live our lives. Confident people operate with a general expectation of positive outcomes. Discipline builds that expectation.</p>
      <h2>The Real Shift</h2>
      <p>Before this interview, I searched for authority externally: better posture, better behaviour, better appearance. Now I understand: <em>don't chase the symptoms of confidence. Build the causes.</em> Authority isn't performed. Confidence isn't faked. Respect isn't demanded. They emerge from how you live. And for someone trying to become a calm, respected leader, this realisation didn't just teach me something. It changed how I think.</p>
    `
  },
  {
    slug: 'brain-changes',
    title: 'What I Learned from The Brain That Changes Itself',
    topic: 'Book Review',
    date: 'Feb 24, 2026',
    readTime: '8 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/what-i-learned-from-the-brain-that',
    excerpt: 'I picked up this book wanting to find a way to trick my brain into loving difficult things. Instead, I found something better: proof that the human brain is not fixed.',
    body: `
      <p><em>Have you ever asked yourself why it is so hard to do things that are beneficial to you — like reading — while it requires no effort to scroll or play video games? So have I.</em></p>
      <h2>Why I Decided to Read the Book</h2>
      <p>While I was in high school, I struggled with studying. It was hard for me to sit down and focus. Whenever I avoided studying, I would watch television, scroll through social media, or just sit on my phone doing nothing meaningful. This continued until I did my final exams. I didn't fail, but I didn't perform at the level I knew I was capable of. I got average marks. And that bothered me, because I knew I could have done better.</p>
      <p>After high school, I created my one-year master plan. But one question kept coming back to me: why is it so hard for me to sit down and read for 30 minutes, yet so easy to scroll through social media for hours? Reading doesn't require physical effort. Neither does scrolling. So why does one feel heavy and the other effortless?</p>
      <p>I didn't just want discipline. I wanted my brain to like discipline. When I heard about <em>The Brain That Changes Itself</em>, I picked it up with one main intention — to find out whether it could help me understand how to rewire my brain to enjoy doing hard things instead of avoiding them.</p>
      <h2>What the Book Is About</h2>
      <p>The book mainly explores the concept of neuroplasticity — the idea that the brain is not fixed and is capable of change. It presents a collection of revolutionary case studies: stroke victims regaining lost functions, individuals improving cognitive abilities, and people recovering skills that were once believed to be permanently damaged. Through these stories, the book challenges the belief that our abilities are static. As you read it, you begin to feel like there is more potential for change than we assume.</p>
      <h2>What I've Learned</h2>
      <p>I didn't find a direct hack that suddenly made me love reading as much as I love social media. But I found something better: the discovery that the human brain is not as limited as I thought. It can improve. It can adapt. It can strengthen. We can improve our reasoning. We can sharpen our thinking. We can even develop abilities we once believed we simply didn't have. You don't have to be born talented to become skilled. You just need to start practising. With practice, you become better.</p>
      <h2>Key Takeaways</h2>
      <p>The major idea that stood out is that we have a "use-it-or-lose-it" brain. If you practise something consistently, you strengthen the neural connections involved in that skill. Over time, you improve — sometimes even to the point of mastery. On the other hand, if you stop using a function, it can weaken and eventually atrophy. The book refers to this as "learned nonuse."</p>
      <p>Reading about people who previously couldn't walk but learnt to regain their balance, and individuals with learning disorders who managed to strengthen their weakest abilities, completely changed how I think about human potential.</p>
      <h2>How I'm Applying It</h2>
      <p>After reading the book, I decided to put neuroplasticity to the test. I now practise writing with my non-dominant (left) hand. I play chess to improve my reasoning. I also practise mental arithmetic daily. I chose to do these consistently because plastic change in the brain requires repetition — it's not something that happens once but through repeated effort over time. After just one month, I've already noticed small improvements. That alone has been enough proof to keep going.</p>
      <h2>Final Thoughts</h2>
      <p>I started reading this book hoping to find a way to trick my brain into liking useful things. Instead, I found something better: the realisation that the human brain is not fixed. It can change. I'm genuinely grateful I read this book. Right now, I feel like my limits are not as permanent as I once believed. If you have the time, I would encourage you to read it for yourself — not just for the theory, but for the discoveries that challenge how you see your own potential.</p>
    `
  },
  {
    slug: 'discipline-boring',
    title: "Discipline Isn't Beast Mode. It's Boring.",
    topic: 'Discipline',
    date: 'Feb 21, 2026',
    readTime: '7 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/discipline-isnt-beast-mode-its-boring',
    excerpt: "We've romanticised discipline. Nobody posts the boring 15-minute reading session, the half-energy workout, the quiet repetition no one claps for. That's actually where discipline lives.",
    body: `
      <p>Discipline is everywhere right now. Scroll for five minutes and you'll see it: men lifting in the rain, perfect gym lighting, shadowboxing at 5AM, cold showers, "beast mode activated." It looks powerful. It looks elite. It looks like only the top 1% can reach it. But here's the problem: we've romanticised discipline. And when you romanticise something, you misunderstand it.</p>
      <h2>My First Mistake</h2>
      <p>When I decided to become disciplined, I did what most people do. I watched YouTube videos. I consumed "how to be disciplined" content daily. Then I made a plan: 100 push-ups every day, read daily, train daily, perfect days only. The first week? Easy. Second week? Fatigue. Third week? Collapse. And when I stopped the push-ups, I stopped everything else. Why? Because I had an all-or-nothing mindset. If the day wasn't perfect, I considered it a failure. That wasn't discipline. That was ego.</p>
      <h2>The Lie Social Media Sells</h2>
      <p>Social media shows the highlight reel of discipline. Nobody posts the boring 15-minute reading session. The half-energy workout. The day you showed up but performed at 60%. The quiet repetition no one claps for. Discipline isn't cinematic. It's repetitive. It's often unimpressive. It's private. And it's available to everyone — not just the 1%.</p>
      <h2>What Discipline Actually Is</h2>
      <p>Discipline is not perfection. It's consistency. It's doing what benefits your future self at the expense of your present comfort. When you want to watch TV but choose to study. When you're bored but still train. When you're tired but still show up — even at 50%. That's discipline. Not the dramatic workout in the rain. The boring decision made daily.</p>
      <h2>The Shift That Changed Everything</h2>
      <p>After failing in January, I asked myself one question: why did I quit? The answer was simple — I started too big and relied on motivation. So I changed my approach. Instead of 100 push-ups, I reduced the standard. Instead of one hour of reading, I started with 15 minutes. Not because it was impressive. But because it was sustainable.</p>
      <p>Here's the key most people miss: discipline starts small. Identity grows gradually. When you show up daily — even in small ways — you start telling yourself: "I am the type of person who trains." "I am the type of person who reads." "I am the type of person who doesn't quit." And once identity changes, willpower becomes less necessary. You stop forcing discipline. You become disciplined.</p>
      <h2>Another Hard Truth</h2>
      <p>You will miss days. You will slip. You will have imperfect weeks. The difference between disciplined and undisciplined people isn't perfection — it's recovery speed. A slip is not a fall. If you miss one workout and quit for three months, that's not lack of motivation — that's lack of emotional control. Discipline means you return quickly.</p>
      <h2>Stop Looking for Hacks</h2>
      <p>There is no video that will make you disciplined overnight. There is no secret trick. There is no perfect system. Discipline has no finish line. It's a lifestyle of small, boring, consistent decisions stacked over years. One intense day means nothing. One consistent year changes everything. Stop admiring discipline. Practise it. Start small. Show up. Drop the all-or-nothing mindset. Recover fast when you slip. That's it. Not glamorous. Not viral. Just effective.</p>
    `
  },
  {
    slug: 'documenting-growth',
    title: "Why I'm Documenting My Growth at 19",
    topic: 'Personal Growth',
    date: 'Feb 19, 2026',
    readTime: '6 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/why-im-documenting-my-growth-at-19',
    excerpt: 'I created a one-year master plan structured around body, mind, and skill — not for recognition, but for mastery, clarity, and long-term impact. This is the beginning of that journey.',
    body: `
      <h2>High School: Foundations and Achievements</h2>
      <p>In high school, I was an average student academically, but active in co-curricular activities. I participated in the Scout Club, debate club, and journalism club, and I served as a prefect on the student council. I reached the national level in scouting competitions, won most of my debating competitions, and became chairman of the journalism club. High school was neither exceptional nor terrible. I tried to excel in everything I could. But despite these achievements, I felt there was more life had to offer than simply passing time or surviving.</p>
      <h2>Why a One-Year Master Plan?</h2>
      <p>I created a one-year master plan to achieve radical improvement — the kind that allows me to look back and say I never wasted my time. I structured the plan around three pillars: body, mind, and skill. My goal was not small self-improvement; it was building the best version of myself in one year.</p>
      <h2>Starting the Journey</h2>
      <p>After finishing my KCSE exams in November, I began executing the plan. My first step was to get a job. I worked in sales for a month but realised it drained my energy and left little room for the activities I valued most. I left and shifted focus to boxing training, starting January 2nd. I also began structured learning: reading <em>The Brain That Changes Itself</em> and learning coding.</p>
      <h2>My Daily System</h2>
      <p>My current daily system is structured but flexible: morning run or workout followed by shadow boxing, cold shower, two hours learning JavaScript, breakfast, neuroplastic exercises (non-dominant hand writing, mental arithmetic, chess — 25 minutes each), one hour of podcast, one hour reading, one hour watching documentaries, two hour coding project, evening boxing training. This system aligns daily effort with the person I want to become.</p>
      <h2>Lessons from Reality</h2>
      <p>When I first created the master plan, I imagined perfect days. Reality, however, is never perfect. In December, I struggled with an all-or-nothing mindset: if one task broke the plan, the whole system felt broken. In January, I redesigned my system to allow flexibility. Consistency matters more than perfection. Some days I rest; the next day, I wake up and try again.</p>
      <p>Key lessons: leave room for reality — life is unpredictable, your system should guide you but survive disruption. Consistency beats intensity — start small, master the art of showing up, intensity is temporary but consistency compounds.</p>
      <h2>Understanding Discipline</h2>
      <p>Discipline, as I define it, is forgoing the pleasure of the present for the benefit of the future self. Motivation is fleeting — it helps you start — but discipline keeps you going when motivation fades. Discipline is not perfection. It is falling and standing up, recognising mistakes, and improving. It is working through boredom, fatigue, and frustration.</p>
      <h2>Why I'm Writing</h2>
      <p>This is the beginning of a journey toward becoming the best version of myself — not for recognition, but for mastery, clarity, and long-term impact.</p>
    `
  }
];

/* ── TOPIC TAG COLOURS ───────────────────────────────────────── */
const TOPIC_STYLES = {
  'Personal Growth': { bg: 'rgba(220,38,38,0.08)',  color: '#DC2626', border: 'rgba(220,38,38,0.25)' },
  'Discipline':      { bg: 'rgba(234,88,12,0.08)',  color: '#EA580C', border: 'rgba(234,88,12,0.25)' },
  'Technology':      { bg: 'rgba(37,99,235,0.08)',  color: '#2563EB', border: 'rgba(37,99,235,0.25)' },
  'Book Review':     { bg: 'rgba(5,150,105,0.08)',  color: '#059669', border: 'rgba(5,150,105,0.25)' },
};

function topicTag(topic) {
  const s = TOPIC_STYLES[topic] || TOPIC_STYLES['Personal Growth'];
  return `<span class="tag" style="background:${s.bg};color:${s.color};border:1px solid ${s.border};">${topic}</span>`;
}

/* ── SCROLL TO TOP (accounts for fixed nav) ──────────────────── */
function scrollToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/* ── RENDER ARTICLE LIST (articles.html) ─────────────────────── */
function renderList() {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;
  grid.innerHTML = ARTICLES.map((a) => `
    <article class="article-card" data-slug="${a.slug}" role="button" tabindex="0" aria-label="Read: ${a.title}">
      <div class="article-meta">
        ${topicTag(a.topic)}
        <span>${a.readTime}</span>
        <span>${a.date}</span>
      </div>
      <h3>${a.title}</h3>
      <p>${a.excerpt}</p>
      <span class="read-more">Read Article →</span>
    </article>
  `).join('');

  grid.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', () => navigateTo(card.dataset.slug));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') navigateTo(card.dataset.slug);
    });
  });
}

/* ── HASH-BASED ROUTING ──────────────────────────────────────── */

// Navigate to an article — updates the URL hash (e.g. articles.html#patience-best-strategy).
// The URL is now shareable and bookmarkable. Browser back button works automatically.
function navigateTo(slug) {
  history.pushState({ slug }, '', `#${slug}`);
  renderFromHash();
}

// Go back to the list — clears the hash and shows the article grid.
function navigateBack() {
  history.pushState(null, '', location.pathname);
  renderFromHash();
}

// Single source of truth: reads the URL hash and decides what to render.
function renderFromHash() {
  const slug      = location.hash.slice(1); // strip the leading #
  const listView  = document.getElementById('article-list');
  const singleView = document.getElementById('article-single');

  if (!listView || !singleView) return; // not on articles.html

  if (slug) {
    const a = ARTICLES.find(art => art.slug === slug);
    if (!a) {
      // Unknown slug — fall back to the list
      history.replaceState(null, '', location.pathname);
      listView.classList.remove('hidden');
      singleView.classList.add('hidden');
      return;
    }
    renderSingleArticle(a, singleView, listView);
  } else {
    // No hash — show the article grid
    document.title = 'Articles — Alfonse Otieno';
    listView.classList.remove('hidden');
    singleView.classList.add('hidden');
    scrollToTop();
  }
}

/* ── RENDER SINGLE ARTICLE ───────────────────────────────────── */
function renderSingleArticle(a, singleView, listView) {
  document.title = `${a.title} — Alfonse Otieno`;

  // Show "Read on Substack" only when a real URL is provided (not '#')
  const substackBtn = (a.substackUrl && a.substackUrl !== '#')
    ? `<a href="${a.substackUrl}" target="_blank" rel="noopener" class="btn btn-substack">
         Read on Substack ↗
       </a>`
    : '';

  singleView.innerHTML = `
    <div class="container">
      <button class="article-back" id="back-btn-top">← Back to Articles</button>
      <div class="article-full">
        <div class="article-meta">
          ${topicTag(a.topic)}
          <span>${a.readTime}</span>
          <span>${a.date}</span>
        </div>
        <h1>${a.title}</h1>
        <div class="article-full-body">${a.body}</div>
        <div class="article-cta">
          <div class="article-cta-icon">✍️</div>
          <h3>Enjoyed this article?</h3>
          <p>I publish new essays every week on growth, discipline, coding, and systems thinking. Every article is free.</p>
          <div class="article-cta-actions">
            <a href="https://alfonseotieno.substack.com" target="_blank" rel="noopener" class="btn btn-primary">
              Subscribe — It's Free
            </a>
            ${substackBtn}
          </div>
          <p class="cta-sub">Join readers getting honest, unfiltered writing about building yourself from the ground up.</p>
        </div>
        <button class="article-back article-back-bottom" id="back-btn-bottom">← Back to Articles</button>
      </div>
    </div>
  `;

  listView.classList.add('hidden');
  singleView.classList.remove('hidden');
  scrollToTop();

  document.getElementById('back-btn-top').addEventListener('click', navigateBack);
  document.getElementById('back-btn-bottom').addEventListener('click', navigateBack);
}

// Handle browser back / forward buttons — hash changes without a page reload
window.addEventListener('popstate', renderFromHash);

/* ── AUTO-RENDER LATEST ARTICLE ON HOME PAGE (index.html) ───────
   Add <div id="latest-article-slot"></div> in index.html and this
   fills it from ARTICLES[0]. Add a new article at the top of the
   ARTICLES array and the home page updates automatically.
─────────────────────────────────────────────────────────────────*/
function renderLatestArticle() {
  const slot = document.getElementById('latest-article-slot');
  if (!slot) return;

  const a = ARTICLES[0]; // always the newest — keep ARTICLES sorted latest-first
  slot.innerHTML = `
    <div class="article-preview-card">
      <div class="article-meta">
        ${topicTag(a.topic)}
        <span>${a.readTime}</span>
        <span>${a.date}</span>
      </div>
      <h3>${a.title}</h3>
      <p>${a.excerpt}</p>
      <a href="html/articles.html#${a.slug}" class="btn btn-primary btn-sm">Read Article</a>
    </div>
  `;
}

/* ── INIT ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  renderList();          // articles.html — renders the full grid
  renderFromHash();      // articles.html — opens article directly if URL has a hash
  renderLatestArticle(); // index.html    — renders the latest article preview
});

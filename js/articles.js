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
    slug: 'i-built-an-ai-code-reviewer-not-to-replace-thinking-but-to-improve-it',
    title: 'I Built an AI Code Reviewer — Not to Replace Thinking, But to Improve It',
    topic: 'Building',
    date: 'Mar 24, 2026',
    readTime: '5 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/i-built-an-ai-code-reviewer-not-to',
    publication: 'code-system',
    excerpt: 'One of the most frustrating parts of learning to code is when the code doesn\'t run and you don\'t know why.',
    body: `
      <p>One of the most frustrating parts of learning to code is when the code doesn't run and you don't know why.</p>
      <p>As a self-taught coder, I've experienced this problem firsthand. Although learning and building projects with HTML and CSS wasn't that much complicated, JavaScript projects were a whole different set of problems. After spending hours writing code, the logic makes perfect sense in your head and the structure looks fine, and yet nothing works. You go line by line trying to find the issue, only to realize the problem was something very small—a spelling mistake, case sensitivity, or a missing curly bracket.</p>
      <p>I've been there many times, and I wanted to solve that problem.</p>
      <h2>The Decision to Integrate AI into My Daily System</h2>
      <p>Recently, I made the high-level decision to integrate AI into my daily system, most especially coding.</p>
      <p>This wasn't an easy decision for me as I am not a big fan of the rise of artificial intelligence.</p>
      <p>These tools have their own disadvantages which most of us ignore. The risk for developers like me is that if you rely on it too much, you stop thinking for yourself.</p>
      <p>But AI is a very powerful tool, and not using it is just as dangerous because you are now moving slower compared to others who decided to use it effectively and deliberately.</p>
      <p>After reading Deep Work by Cal Newport, where he argues that in a world of technological advancements, one of the groups of people who will thrive are those who learn how to work with intelligent machines, I decided to give AI tools a chance.</p>
      <h2>The Shift</h2>
      <p>Using AI proved very effective. Just two days after deciding to use AI, I had already created a personal portfolio website and a habit tracker app that I'm even using until now. The AI generated all of them within less than 30 seconds.</p>
      <p>But there was a problem: I wasn't even going through and reading the code; I was just copying and pasting AI-generated code. And this is the danger zone for developers. Since the AI is so efficient, it got to a point that when I was making changes to the code, I would ask AI to generate the solution, then I would go ahead and delete the entire old code and replace it with the new code.</p>
      <p>I saw this as a problem since I was no longer engaging my brain.</p>
      <h2>Building a Solution to my own problem</h2>
      <p>I came up with a simple solution to my problem: an AI-powered code reviewer. The idea was straightforward:</p>
      <p>Instead of AI writing the code and me making improvements, I would write the code and make my own improvements.</p>
      <p>I would feed the code to the AI, where it would point out errors, what's working well, and what can be improved.</p>
      <p>Then, I go and make the improvements myself.</p>
      <p>This would ensure that I keep interacting with my code. That is why I intentionally didn't add the option to copy the improved code. To make the improvements, I would have to write the code and get to understand what it is I'm writing.</p>
      <p>The code reviewer is now live and can be used by both beginners and those who have experience in tech.</p>
      <h2>Honesty: I Didn't Build It Alone</h2>
      <p>I want to be clear about something.</p>
      <p>I did not write this entire project from scratch.</p>
      <p>I came up with the idea then gave AI a prompt, and it generated most of the initial code. Claiming otherwise would be dishonest, and there's no value in pretending. What matters is how the tool is used.</p>
      <p>AI can generate in minutes what would take me days. That's a reality. But my role was to understand the code, debug it, and fix the logical issues.</p>
      <p>And that's where the real learning happened.</p>
      <h2>The Challenge: Making It Actually Work</h2>
      <p>The biggest challenge wasn't building the interface—it was integrating the API.</p>
      <p>After deploying the project, the reviewer didn't work. The AI wasn't responding. Initially, I tried using the Claude API, but I quickly realized it required payment.</p>
      <p>I had to step back and figure out a better solution.</p>
      <p>Eventually, I switched to the Gemini API, which offers a free tier with very reasonable limits. That made the project usable without immediate cost and allowed me to keep building without friction.</p>
      <h2>From Using Tools to Building Them</h2>
      <p>This project represents a shift in how I approach learning.</p>
      <p>Instead of just using tools created by others, I'm starting to build my own—starting with solutions to my own problems.</p>
      <p>I'm not trying to impress anyone with complexity. I'm trying to create systems that make me better.</p>
      <p>Because at the end of the day, the goal is not just to write code.</p>
      <p>The goal is to become someone who can think, solve problems, and build.</p>
      <h2>Final Thought</h2>
      <p>AI is not the problem.</p>
      <p>Blind dependence is.</p>
      <p>Used correctly, AI can accelerate your learning. Used passively, it can weaken it.</p>
      <p>The difference is not in the tool—it's in how you use it. And this website may just be one of the tools that helps me use AI and code more efficiently.</p>
      <p>You can also try it out <a href="https://codereview-ai-ten.vercel.app/" target="_blank" rel="noopener">here</a> and give me your feedback on what you think about it.</p>
      <img src="../assets/articles/codereview-ai.webp" alt="CodeReview AI — AI Code Review for HTML, CSS and JavaScript" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
    `
  },
  {
    slug: 'atomic-habbits-are-automatic-habbits',
    title: 'Atomic habbits are automatic habbits',
    topic: 'Books',
    date: 'Mar 21, 2026',
    readTime: '4 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/atomic-habbits-are-automatic-habbits',
    publication: 'deliberately-becoming',
    excerpt: 'I created a one-year master plan while in high school which was aimed at self-improvement, building skills, and most importantly, building discipline.',
    body: `
      <h2>Why I started reading Atomic Habits</h2>
      <p>I created a one-year master plan while in high school which was aimed at self-improvement, building skills, and most importantly, building discipline. The plan comprised a number of activities I did daily, and I created a daily system. My aim is that by the end of the year, these activities turn into habits and become more automatic with time. I started reading the book Atomic Habits to turn my daily activities into automatic habits.</p>
      <img src="../assets/articles/atomic-habits.webp" alt="Atomic Habits by James Clear" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <p>I can confidently say that reading the book provided the answers I was looking for and a lot of other meaningful information. The book covers a lot of concepts and ideas. I have already written two articles based on concepts from Atomic Habits. One is about outcome-driven habits vs. identity-driven habits; the other one is how I applied the "paper clip strategy" in sales to turn rejection into progress and improve my overall sales performance. I won't discuss every concept in detail; I will only discuss the concepts that stood out most to me, that caused a shift in my mentality, and how I am applying them.</p>
      <h2>Key Insight That Changed My Perspective</h2>
      <p>The book has a lot of interesting arguments and mental models that I can't explain in detail in one article. I already talked about the idea of identity-driven habits in a previous article. I will just try to summarize my interpretation in one sentence:</p>
      <p>True transformation comes from systems, not goals—specifically by leveraging the compound interest of 1% daily improvements and consequently developing the identity of the person you wish to become.</p>
      <p>We all have goals (both winners and losers). The difference is that winners set systems that position them to be more likely to win. Not flashy systems, nor intense, but repetitive systems which allow them to continually improve.</p>
      <h2>How I'm Applying the Knowledge</h2>
      <p>Firstly, I realized that real change is identity change. I started by reducing the intensity of my activities and focusing more on just showing up—even in the smallest ways—and allowing the habit to develop. I now have a daily system which revolves around repetitive actions, from reading to writing to exercises and boxing.</p>
      <p>I have come to terms with the fact that on some days I may do all these activities perfectly, and on some days I may feel less motivated to act. The days where I'm least motivated are the most important. I don't force perfection and instead do the least version of the habit—even if it is only for two minutes. As long as I don't miss the habit, I make it a personal commitment not to miss twice in a row. As James Clear says, "Missing once is a mistake; missing twice is the start of a new habit."</p>
      <h2>Takeaways</h2>
      <p>Starting and building new habits doesn't require intensity at first. Just start small, get your reps in, and continue forming the identity. A habit must first be established before it is optimized. Working out, running, or reading a book for five minutes isn't flashy, but it is the bridge to you being able to consistently do the habit for an hour without burning out.</p>
      <h2>Conclusion</h2>
      <p>For anyone trying to build new habits or strengthen existing ones: you already have a goal. Now set systems that will drive you towards your goal. Don't chase big results. Chase small, consistent actions, and the results will follow naturally.</p>
    `
  },
  {
    slug: 'life-is-not-fair-and-that-is-okay',
    title: 'Life Is Not Fair — And That Is Okay',
    topic: 'Philosophy',
    date: 'Mar 17, 2026',
    readTime: '6 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/life-is-not-fair-and-that-is-okay',
    publication: 'deliberately-becoming',
    excerpt: 'Life is not fair. We can pretend it is. We can tell ourselves comforting stories about equality and balance. But reality proves otherwise.',
    body: `
      <p>Life is not fair.</p>
      <p>We can pretend it is. We can tell ourselves comforting stories about equality and balance. But reality proves otherwise.</p>
      <p>Yes, we live on the same earth.</p>
      <p>We breathe the same oxygen.</p>
      <p>Our blood is the same color.</p>
      <p>We all feel pain.</p>
      <p>And in the end, we all die.</p>
      <p>But we do not start from the same position.</p>
      <p>Some are born into royalty. Others are born into poverty.</p>
      <p>Some grow up surrounded by opportunity. Others grow up surrounded by limitations.</p>
      <p>And that's just the way it is. It is a feature of life not a glitch.</p>
      <p>And thats also the beauty of life.</p>
      <h2>Different Starting Lines</h2>
      <p>Right now there is a young man is studying day and night because he believes education is his only escape from poverty.</p>
      <p>At the same time, somewhere else, another young man is simply waiting to inherit his father's company.</p>
      <p>Both may be intelligent.</p>
      <p>Both may be hardworking.</p>
      <p>But their starting lines are completely different.</p>
      <p>They don't have the same opportunities. They may have same capabilities but one has an advantage over the other.</p>
      <h2>Unequal Advantages Go Beyond Money</h2>
      <p>Inequality is not only about wealth.</p>
      <p>Life distributes advantages unevenly in many ways:</p>
      <ul>
        <li>Some people are naturally intelligent. Others struggle academically.</li>
        <li>Some discover their talents early. Others spend years searching for what they are good at.</li>
        <li>Some are physically strong. Others are not.</li>
        <li>And then there is luck.</li>
      </ul>
      <p>Two people may study equally hard and graduate with the same qualifications. Yet one gets a job while the other struggles for years.</p>
      <p>In Kenya, this is not unusual.</p>
      <p>It is reality.</p>
      <p>This is the part people don't like to talk about.</p>
      <p>Effort matters. Discipline matters. Skill matters.</p>
      <p>But sometimes, outcomes are influenced by timing, connections, and circumstances that are completely outside your control.</p>
      <p>You can do everything right and still lose.</p>
      <p>You can do very little and still win.</p>
      <p>That is not fair. But it happens.</p>
      <p>So the question is no longer whether life is fair.</p>
      <h2>The Only Question That Matters</h2>
      <p>The real question becomes:</p>
      <p>What does this mean?</p>
      <p>According to Tony Robbins, in every situation we make two decisions:</p>
      <ul>
        <li>What does this mean?</li>
        <li>What am I going to focus on?</li>
      </ul>
      <p>Because we all interpret events differently and give them different meanings. And that determines what we focus on. And we experience the life we focus on.</p>
      <p>If life is unfair, then we have a choice in how we interpret that truth.</p>
      <p>We can choose to focus on our disadvantages.</p>
      <p>We can blame our parents.</p>
      <p>We can blame society.</p>
      <p>We can blame God.</p>
      <p>We can complain about people who have advantages.</p>
      <p>And to be clear—all of those complaints are valid.</p>
      <p>But none of them change reality. Complaining and focusing on our disadvantages only gives you a disadvantaged life.</p>
      <p>Blame may feel justified, but it is useless. It keeps you stuck at the starting line, arguing about fairness instead of moving forward.</p>
      <p>The alternative option is far more powerful.</p>
      <p>We accept the truth:</p>
      <p>Some people have a head start.</p>
      <p>Some people will always have advantages we don't.</p>
      <p>And we all need to acknowledge and accept that is a feature of life. It is not a glitch or a mistake. It is just how life is and has to be.</p>
      <p>Once we accept this we stop wasting energy fighting reality—and start working within it.</p>
      <h2>Radical Responsibility</h2>
      <p>Once you accept that life is unfair, you are left with one unavoidable conclusion:</p>
      <p>No one is coming to save you.</p>
      <p>No one will suddenly level the playing field.</p>
      <p>No one will ask the privileged to step back so that everyone can start equally.</p>
      <p>That will never happen.</p>
      <p>So if you started with less, your responsibility becomes clear:</p>
      <ul>
        <li>Work harder</li>
        <li>Learn faster</li>
        <li>Build stronger discipline</li>
        <li>Develop skills that make you valuable</li>
      </ul>
      <p>Not because it is fair—but because it is necessary. It is your responsibility to level the playing field. And you do that by working twice as hard.</p>
      <h2>Control What You Can Control</h2>
      <p>You cannot control where you started.</p>
      <p>You cannot control your genetics.</p>
      <p>You cannot control your upbringing.</p>
      <p>You cannot control luck.</p>
      <p>But you can control:</p>
      <ul>
        <li>Your habits</li>
        <li>Your effort</li>
        <li>Your mindset</li>
        <li>Your ability to improve</li>
      </ul>
      <p>It doesn't do you any good to sit and focus on how disadvantaged you are, you couldn't control any of these. But you can control how you respond to your situations.</p>
      <p>And here's the beauty of it all.</p>
      <p>Sometimes, the people who start behind end up going the furthest.</p>
      <p>Why?</p>
      <p>Because struggle forces growth.</p>
      <ul>
        <li>It builds discipline</li>
        <li>It sharpens focus</li>
        <li>It creates resilience</li>
      </ul>
      <p>People who have everything given to them often lack the pressure that creates strength.</p>
      <p>Your environment and your conditions are not your curse, they are in fact a blessing in disguise.</p>
      <h2>Why I Still Work Hard</h2>
      <p>If life is not fair, then a reasonable question follows:</p>
      <p>Why work hard at all?</p>
      <p>Why put in effort when you know the game is uneven?</p>
      <p>Why push yourself when you can do everything right and still lose?</p>
      <p>For me, the answer is personal.</p>
      <p>I work hard because I want improve myself—to become a better version of who I was yesterday. Not perfect. Just better.</p>
      <p>I read.</p>
      <p>I train.</p>
      <p>I learn skills.</p>
      <p>I build discipline.</p>
      <p>The more I keep learning, the more knowledge I gain, the more my mindset shifts. I stop putting unnecessary pressure on myself. I stop expecting immediate results. I understand that progress is slow, and that's okay.</p>
      <p>Because progress compounds.</p>
      <p>Every page read.</p>
      <p>Every training session completed.</p>
      <p>Every skill practiced.</p>
      <p>It all adds up.</p>
      <p>I am building my mind.</p>
      <p>I am building my character.</p>
      <p>I am building discipline.</p>
      <p>Truthfully speaking, I don't know if this path will take me out of poverty.</p>
      <p>But I know something else with absolute certainty:</p>
      <p>Inaction will keep me exactly where I am.</p>
      <p>Doing nothing is the only guaranteed failure.</p>
      <h2>The Meaning Is in the Climb</h2>
      <p>I have come to see life differently.</p>
      <p>Life is not about comfort.</p>
      <p>It is not about sitting back while everything is handed to you.</p>
      <p>That kind of life creates weakness.</p>
      <p>You don't want to become someone who is comfortable doing nothing, someone who depends on others for everything.</p>
      <p>Life is about the uphill climb.</p>
      <p>You climb, and it is hard. You struggle, and it tests you.</p>
      <p>But when you reach the top, you want to sit for a moment and enjoy the view for a while. But then you want to look for another hill.</p>
      <p>A bigger one.</p>
      <p>Because the meaning was never at the top—it was always in the climb.</p>
      <p>This is why I don't resent the fact that life is not fair.</p>
      <p>In a strange way, it gives my life meaning.</p>
      <p>The fact that I know I have to work harder…</p>
      <p>The fact that I know nothing is guaranteed…</p>
      <p>The fact that I must earn everything…</p>
      <p>That is what makes the journey valuable.</p>
      <p>If everything were equal and easy, there would be no challenge.</p>
      <p>And without challenge, there is no growth.</p>
      <h2>Conclusion</h2>
      <p>Life is not fair.</p>
      <p>But that is exactly what makes it worth engaging with.</p>
      <p>Because now, there is something to prove.</p>
      <p>Something to build.</p>
      <p>Something to chase.</p>
      <p>And even if I don't know where this path will lead, I know this:</p>
      <p>I would rather struggle while moving forward than stay comfortable while standing still.</p>
      <img src="../assets/articles/life-is-not-fair.webp" alt="Life is not fair, it never was — Matthew McConaughey" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
    `
  },
  {
    slug: 'turning-rejection-into-progress-my-sales-experiment',
    title: 'Turning Rejection Into Progress: My Sales Experiment in Real Time',
    topic: 'Personal Growth',
    date: 'Mar 14, 2026',
    readTime: '8 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/turning-rejection-into-progress-my',
    publication: 'deliberately-becoming',
    excerpt: 'Salespeople are told not to take rejection personally. But when emotions take over, that advice is easier said than done. Here\'s how I used the paperclip strategy to regain control and improve my sales.',
    body: `
      <p>Salespeople are told not to take rejection personally. But when emotions take over, that advice is easier said than done. Here's how I used the paperclip strategy to regain control and improve my sales.</p>
      <h2>Returning to sales</h2>
      <p>I got a chance to do sales after a long time. It was an event at a university for two days, and my friend had a VR headset, so I was there to help him sell the VR to students. I have prior experience in sales. I've done sales at two companies before—one selling Wi-Fi and the other selling SIM cards. I had always seen myself as an experienced salesman because of this background.</p>
      <p>The only reason I left sales, even though I loved it, was my one-year master plan. Right now, I'm 19 and have some time—since I don't have many financial obligations or responsibilities, this is the period where I have the most freedom for self-development and mastery. I decided to create my one-year master plan and focus on improvement. That's why I left sales and built an ideal system: exercising, reading books, listening to podcasts, learning, and improving myself.</p>
      <p>So when I got this opportunity to do the sales job for just two days, I saw it as a good chance to earn some money, even to buy books, and then return to my system.</p>
      <h2>What I like about sales</h2>
      <p>One thing I like about sales—and this is also what makes it very challenging—is that when you're pitching a product, most of the people you meet weren't even thinking about it before encountering you. Take the VR headsets, for example. Most students weren't planning to buy or even think about them before leaving home. Your job as a salesperson is to convince them, in that moment, why they should spend their money on something they hadn't considered.</p>
      <p>I've done sales and also worked in shops, and I personally prefer sales. Why? Because sales rewards effort. You can be a good salesperson or a bad one, and your results directly reflect your effort. There's no consistent, guaranteed outcome. Some days you'll make more sales; some days fewer—but it depends on your performance.</p>
      <p>Compare that to working at a shop. Let's say I worked at a bookshop. The person approaching you has already decided to buy a book; your results depend on the market and how many people are already interested. In sales, however, your success depends on how effectively you can convince someone that your product will benefit them. That direct link between effort and result is what I love about sales.</p>
      <h2>Facing old anxiety</h2>
      <p>Before starting sales at the university, I felt a bit of anxiety. I cannot pretend that I don't feel nervous when approaching new things. This is the same anxiety I used to feel back in high school—before scouting competitions, debates, or delivering speeches. But I always found a way to move forward despite it, I would always just start and the anxiety gradually disappears. I don't want to say I never feel anxious—I do—but even in high school, I would act first and become more comfortable as I went along: and most of the time, I won the competitions.</p>
      <p>This time, before going into sales, I experienced the same anxiety I had felt years ago. Once I reached the university campus, I took five deep breaths and sat for ten minutes, observing the students and preparing myself mentally, telling myself that it was going to be okay. Even though I have done sales before and know that, as a man, you have to face uncomfortable situations, the anxiety never fully disappears. There is never a new environment where I don't feel it.</p>
      <p>What works is acknowledging it and mentally preparing. Once I told myself it would be okay, I began pitching, and gradually, I became more comfortable.</p>
      <h2>The first day: Rejection hits hard</h2>
      <p>The first day of pitching hit hard. The students were seated in groups, and my role was straightforward: my partner and I worked together—my job was to pitch to the students, and once they agreed to use the VR headset, I would call my friend to set it up. I wasn't handling the headset or the games; I was purely marketing—getting people interested, while my partner handled the rest.</p>
      <p>I approached the first ten groups with high expectations. I thought many students would be eager to try the VR headset. I was confident in both my sales skills and the product. But the reality was the opposite of what I expected. While some students paid attention, once I mentioned the price, some laughed, some rejected politely, and others simply said they weren't interested. All ten groups rejected the offer.</p>
      <p>As someone who has done sales before, I know the advice: don't take rejection personally. Not everyone will want your product, and that's normal. I knew this intellectually, but I'm only human. Emotions got the better of me. After the tenth rejection, it didn't feel like they were rejecting the product—it felt like they were rejecting me. Rejection is always painful. Even seasoned salespeople feel it, but over time, they learn not to internalize it. This time, I hadn't yet mastered that.</p>
      <p>After those ten groups, I stopped pitching entirely. My partner took over, handling both pitching and setup. Even when he encouraged me to continue, I went through the motions half-heartedly. If someone said no, I didn't try to persuade them—I just moved on, emotionally detached and demoralized.</p>
      <p>By the end of the day, I hadn't converted a single prospect into a client. My friend didn't complain, but I felt like I had failed—both myself as a salesman and my partner who was counting on me.</p>
      <h2>Reflection and adjusting: The paper clip strategy</h2>
      <img src="../assets/articles/paperclip-strategy.webp" alt="Paper Clip Strategy — Visual Progress" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <p>After the first day, I went home and reflected. I realized that my emotions had gotten the better of me—that was the main reason I hadn't made any sales. The next day, I told myself the goal was simple: just approach the students and don't let rejection affect me emotionally.</p>
      <p>I decided to adopt the paperclip strategy from Atomic Habits, but with a modification. I didn't bring actual paperclips; instead, I downloaded a counter app and set a clear target: pitch to 50 groups. That was my only goal for the day. Whether they rejected or accepted the product, I would simply move the counter up by one.</p>
      <p>I started the counter at negative 50. The objective was to end the day at zero. I accepted that, as an emotional person, telling myself not to feel emotional wouldn't work. Instead, I framed the goal differently: pitch consistently, maintain the same energy from the first group to the last, and treat every attempt as a small victory.</p>
      <p>I couldn't control the prospects' responses—who accepted or rejected the product was their choice—but I could control my energy and my effort. By focusing only on what I could control and accepting what I couldn't, every pitch became a win. Rejection no longer felt like failure; every interaction moved me closer to zero on the counter and gave me momentum.</p>
      <p>This small shift in approach—measuring progress instead of outcomes—drastically improved both my mood and my performance throughout the day.</p>
      <h2>The second day: Momentum and progress</h2>
      <p>After a tough first day, I entered the second day with one simple goal: pitch to 50 people with the same energy from the first person to the last. I told myself it didn't matter who accepted or rejected the offer—that was beyond my control. What I could control was my energy.</p>
      <p>Luckily, the first person I pitched to accepted. That created momentum and boosted my confidence. It showed me that yes, I could make a sale, that I could convince someone to buy the product.</p>
      <p>That first win made me believe I could do the same with others.</p>
      <p>After the first person, the goal was simple: pitch to a group, tap on the counter, and move up by one. By the end of the day, the target was zero. I didn't reach zero, but I got to negative 20. For me, victory that day wasn't about who accepted or rejected; it was about moving the counter. That was something I could control.</p>
      <p>Even though I didn't reach zero, I still ended up getting more clients than my partner had on the previous day. Not everyone accepted—some rejected, some were rude, some politely declined—but I didn't treat that as failure. The counter kept moving. I maintained the same energy with each pitch, celebrated each small win, and moved to the next group.</p>
      <p>Before starting, I wasn't sure if this strategy would work. How could I trick my brain if I already knew I was tricking it? But it worked. The first day, I was focused on the students and their reactions, and that led to discouragement. This time, I reframed success. In life, failure depends on how you define it. If you see acceptance as a win and rejection as a loss, then pitching to 100 people who all say no would feel like losing 100 times in a day. My modified paperclip strategy, using a counter app, turned it into a win-win: every pitch—accepted or rejected—was a victory.</p>
      <p>I pitched from the first person to the 30th with consistent energy. Time flew, and I couldn't reach zero because I still had boxing training in the evening. But I walked away feeling satisfied. I had applied a concept from Atomic Habits in a practical setting, improving my system by focusing on progress I could control and making my efforts automatic.</p>
      <h2>Lesson learned</h2>
      <p>My plan for this two-day sales job was to earn money to buy the book Deep Work. I didn't manage to get enough, but the experience taught me something valuable. I realized that in life, you don't have to win every day—and that's okay. When you approach someone with a product and they don't buy it, it's not the end of the world. Rejection doesn't kill you, though it can feel painful. Often, we take it too personally, thinking that being rejected means our worth is being rejected. But that's not true—the person is rejecting the product, not you.</p>
      <p>As a salesperson, one of the most important lessons is that rejection is normal. You cannot have a 100% conversion rate every day. This experience also reinforced that you cannot claim to be good at something unless you practice it regularly. I've always been confident in my sales skills from selling Wi-Fi and SIM cards, but when I shifted to selling VR headsets, I struggled at first. The context had changed, and different products require different approaches.</p>
      <p>This taught me the value of adaptability. Sales is still sales, but every situation demands adjustment, iteration, and learning. Even though I didn't earn enough to buy the book, I walked away with a far more important gain: practice. Practice that pushed me out of my comfort zone, tested my skills, and allowed me to apply strategies I had read about in a real-life setting.</p>
      <p>I'm grateful for this two-day sales experience. It reminded me that you can never truly finish practicing a skill. There's always room to improve, adapt, and grow. For me, that alone was a meaningful win.</p>
    `
  },
  {
    slug: 'identity-driven-habits-vs-outcome-driven-habits',
    title: 'Identity-Driven Habits vs Outcome-Driven Habits',
    topic: 'Habits',
    date: 'Mar 10, 2026',
    readTime: '7 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/identity-driven-habits-vs-outcome',
    publication: 'deliberately-becoming',
    excerpt: 'Why do we set New Year\'s resolutions but fail to uphold them until the end of the year? Why do we struggle to stick to most of our resolutions?',
    body: `
      <p>Why do we set New Year's resolutions but fail to uphold them until the end of the year? Why do we struggle to stick to most of our resolutions?</p>
      <h2>Why New Year's Resolutions Often Fail</h2>
      <p>All of us want change, at least to some degree. We want better results, better habits, and better outcomes. One time when this desire becomes very visible is at the end of the year, when people begin planning their New Year's resolutions. We often hear the famous phrase: "New year, new me."</p>
      <p>However, we all know that New Year's resolutions rarely last. Yes, someone may start in January and follow through for one week, two weeks, or even one month, but eventually most people stop.</p>
      <p>This made me ask myself a question: if we truly want to improve, and we know that improvement is necessary, why do we often return to our old habits after making progress?</p>
      <p>While searching for answers, I started reading the book Atomic Habits by James Clear. I will not go into everything the book discusses, but I want to highlight one insight that explains why the idea of "new year, new me" often fails.</p>
      <p>According to the book, habit change happens at three different levels: outcomes, processes, and identity.</p>
      <img src="../assets/articles/identity-driven-habits.webp" alt="New Year's Resolutions" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <h2>The Three Levels of Habit Change</h2>
      <p>Outcomes are what you want to achieve. For example, you might say that you want to gain weight, lose weight, become fit, or become rich. Outcomes focus on the final result you want to reach.</p>
      <p>Processes are the actions you take to reach those outcomes. For example, if you want to lose weight, you should exercise more. If you want to become rich, you should save more.</p>
      <p>Identity, on the other hand, refers to your beliefs, your self-image, and the way you see yourself.</p>
      <p>Most people approach habit building by starting with outcomes. They focus on what they want to achieve, then move to the processes, and assume their identity will eventually catch up.</p>
      <p>This is why, during New Year's resolutions, people say "new year, new me" and begin by listing the goals they want to achieve.</p>
      <p>I am not saying this approach is entirely wrong. Outcomes help us determine what habits we should build. However, we must remember that we already have a self-image. There is already a certain way we see ourselves.</p>
      <p>The relationship between identity and habits is a two-way process. Your identity influences your habits, and your habits reinforce your identity.</p>
      <h2>When Habits Clash With Identity</h2>
      <p>For example, when I wanted to build discipline, I told myself that I wanted to become a more disciplined person. At that time, I saw myself as someone who lacked discipline. I wanted to change that and build a better version of myself.</p>
      <p>This is what many of us try to do. We attempt to install a completely new version of ourselves.</p>
      <p>At the beginning, motivation makes this easy. When motivation is high, we can push ourselves to do difficult things. But motivation does not stay constant. It fluctuates over time, and you cannot rely on it in the long run.</p>
      <p>Once motivation fades, people often return to their previous identity.</p>
      <p>If the habits you are trying to build contradict the way you see yourself, those actions are unlikely to last. In a way, it is like planning a coup against your current self. You are trying to overthrow your existing identity overnight.</p>
      <p>You are trying to act like someone you do not yet believe you are.</p>
      <h2>Starting With Identity</h2>
      <p>So how can we fix this?</p>
      <p>Remember the three levels: outcomes, processes, and identity.</p>
      <p>Instead of starting with outcomes, we should begin by building the identity first.</p>
      <p>For example, instead of saying, "I want to try running," you start by telling yourself, "I am a runner."</p>
      <p>Instead of saying, "I want to read more books," you start by telling yourself, "I am a reader."</p>
      <p>When you correct your self-image first, the habits become natural expressions of who you are. Running becomes easier because that is what runners do. Reading becomes normal because that is what readers do.</p>
      <p>When your identity and habits are aligned, it becomes much easier to maintain those habits in the long run.</p>
      <p>Identity and habits reinforce each other.</p>
      <p>The identity you have right now exists because you have repeated certain habits many times. There is simply too much evidence supporting your current identity.</p>
      <p>If you want to change that identity, you must begin by introducing small habits and repeating them consistently.</p>
      <h2>The Power of Small Repetitions</h2>
      <p>Every time you perform the habit, you are keeping a promise to yourself. Gradually, you begin to see yourself as someone who performs those behaviors.</p>
      <p>This is why habits do not need to start perfectly or in an extreme way.</p>
      <p>For example, during the "new year, new me" phase, I once told myself that I would do 100 push-ups, 100 sit-ups, and a one-hour morning run every day.</p>
      <p>On January 1st, I did exactly that. I ran for an hour, came back, and completed all the exercises.</p>
      <p>But by January 14th, I was doing none of those activities.</p>
      <p>This is the all-or-nothing mindset that I have discussed in my previous articles.</p>
      <p>Instead, it is better to start small.</p>
      <p>Just show up.</p>
      <p>If you plan to exercise, start with five minutes. The most important thing is simply being present and performing the habit.</p>
      <p>A habit must first be established before it is optimized.</p>
      <p>Even doing the habit for five minutes still counts as progress because you are also building an identity.</p>
      <p>As James Clear explains, every action you take is like casting a vote for the type of person you want to become.</p>
      <p>If you read for ten minutes, you are casting a vote that says, "I am a reader."</p>
      <p>This transformation happens through repetition, not intensity.</p>
      <h2>The Problem With Outcome-Driven Habits</h2>
      <p>Outcome-driven habits have several disadvantages.</p>
      <p>First, they create an if–then mindset for happiness. You begin telling yourself, "If I achieve this goal, then I will be happy."</p>
      <p>For example, if you set a specific weight goal, you may check the scale every day. If the number does not change, you feel discouraged, even if you are following your habits.</p>
      <p>Outcomes often take time to appear. Sometimes they do not appear within a month. When people do not see immediate results, they lose motivation.</p>
      <p>This is why it is dangerous to tie your happiness only to outcomes.</p>
      <p>Identity-driven habits are different. Your satisfaction comes from performing the action itself, because the action reflects who you are.</p>
      <p>Another issue with outcome-driven habits is that once the outcome is achieved, the habit often disappears.</p>
      <p>For example, if you build a study habit only to pass an exam, you may stop studying once the exam is over.</p>
      <p>Instead of becoming someone who studies only for exams, it is better to become someone who identifies as a reader or a learner.</p>
      <h2>My Personal Approach to Habits</h2>
      <p>Personally, I no longer use the mindset of "new year, new me."</p>
      <p>Instead, I focus on improvement.</p>
      <p>I accept who I currently am, including my flaws, and focus on becoming a better version of myself.</p>
      <p>For example, I created a one-year master plan to build discipline. Reading Atomic Habits helped me realize that I had previously been building habits in the wrong way. I focused too much on outcomes and processes while ignoring identity.</p>
      <p>Now, my focus is simply on putting in the repetitions.</p>
      <p>I do not need to be perfect. In the past, I associated discipline with perfection. Now I understand that discipline does not require perfection.</p>
      <p>What matters is consistency.</p>
      <p>I may not have perfect days, but I no longer have zero days.</p>
      <p>Even if I only do ten push-ups, I still count that as maintaining my discipline. There is no day when I do nothing.</p>
      <p>This approach is much more sustainable than the previous version I imagined, where I expected myself to operate in "beast mode" every day. That mindset made failure feel inevitable.</p>
      <p>Now, I focus on small actions that reinforce the identity I want to build.</p>
      <p>And that is why I believe identity-driven habits are far more powerful than outcome-driven habits.</p>
    `
  },
  {
    slug: 'impact-of-artificial-intelligence-on-society-today',
    title: 'Impact of Artificial Intelligence on society today.',
    topic: 'Technology',
    date: 'Mar 07, 2026',
    readTime: '15 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/impact-of-artificial-intelligence',
    publication: 'deliberately-becoming',
    excerpt: 'If you are a young person right now, part of Gen Z or Gen Alpha, you are probably experiencing some level of anxiety that AI might take over many of the jobs in the next few years.',
    body: `
      <p>So, let's talk about artificial intelligence. Artificial intelligence has grown rapidly over the past few years, and there are now many AI systems doing a lot of different things. Of course, many of you have already interacted with artificial intelligence while playing chess, checkers, and other tasks. But now I want to talk about general AI, specifically large language models like ChatGPT.</p>
      <p>If you are a young person right now, part of Gen Z or Gen Alpha, you are probably experiencing some level of anxiety that AI might take over many of the jobs in the next few years. This is a risk that most of us feel. We may not express it openly, but many of us have that fear.</p>
      <p>For someone like me, it can feel quite worrying because I have dedicated my time to learning coding, and I hear people like Elon Musk saying that in a year coding might be dead and AI will be doing most of the coding. So there is a real fear of displacement.</p>
      <p>And AI has already started doing some jobs. It has not taken over completely, but it is already performing tasks such as driving. Right now, we even have self-driving cars. So it is a real issue, but I don't want to focus on that too much here.</p>
      <p>We can briefly mention that throughout history there have been technological inventions, and people have always responded in the same way. Even during the rise of industrial machines, people feared that the machines would leave them jobless. Yes, some jobs were replaced, but new jobs were also created. Some people had to maintain the machines, and others had to move into different kinds of work.</p>
      <p>So yes, I think some jobs may be replaced. I cannot say for sure, but I believe that even if some jobs become displaced, new opportunities will appear.</p>
      <p>However, the deeper problem may not be job loss itself, but the risk of losing our identity. For example, if someone wants to study computer science and then hears that the entire field will be dominated by artificial intelligence, it can create a sense of identity loss. You may start feeling like your degree is useless, like you spent four years chasing something that will not benefit you.</p>
      <p>And this applies to many of us. Yes, we may continue studying, but we still do not feel fully secure because we think AI may eventually replace us.</p>
      <p>I do not know whether AI will replace people or not, but I am hopeful that even if it replaces some jobs, new opportunities will emerge.</p>
      <p>But that is not what I want to focus on in this article. Most discussions about AI focus on its future impact. Instead, I want to talk about the impact it is already having right now — not the effects it might have five or ten years from now, but the effects we are already beginning to see.</p>
      <img src="../assets/articles/ai-impact-society.webp" alt="Artificial Intelligence and Human Intelligence" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <h2>CREATIVITY</h2>
      <p>So, one of the areas where I already see the effect of AI is creativity. Right now, remember we are mostly talking about large language models. Let me speak specifically about ChatGPT because it is the one most of us use. Of course, there are other large language models, and they have similar effects, but for simplicity I will refer mostly to ChatGPT.</p>
      <p>One of the effects is that it has started affecting our creativity. People are becoming less and less creative, and they are using their brains less to think. Nowadays, you see people asking AI to think for them.</p>
      <p>Human beings are creative creatures. We were meant to build, create, innovate, and find ways to develop things that were not there before. We also try to improve things that already exist and find better ways to utilize our resources. All of these activities require creativity.</p>
      <p>Even things like writing, tailoring, designing clothes, creating websites, or building technological tools are forms of creativity. But right now we see that many people are engaging less and less in their own creativity.</p>
      <p>Even on a smaller scale, people use AI to generate text messages for them. These could be thank-you messages or condolence messages. These are tasks that do not even require more than ten minutes, yet people still ask AI to generate them instead of writing them themselves.</p>
      <p>On a larger scale, we see people using AI to create their resumes or CVs, and using AI to generate application letters. Even when there is a section that says "tell us something about yourself," people generate it using AI. This is quite surprising, because you know yourself best, yet you do not want to apply your creativity to describe yourself in writing. Instead, you ask AI to produce a description of you based on the small information you give it.</p>
      <p>From what I have learned about the brain, when you repeatedly use a certain function of the brain, you strengthen the neural connections associated with it. The opposite happens when you stop using it. So the less you engage in creativity, the weaker that creative ability becomes.</p>
      <p>That is why we now see people using AI to generate captions for images, generate text messages, and even generate replies to simple messages. The more we depend on AI to perform these creative tasks for us, the less creative we gradually become.</p>
      <h2>SOCIAL INTERACTIONS</h2>
      <p>Another area where I see AI already affecting us is in socializing and interactions. Human beings are social creatures, and we naturally want to interact with each other. In every human interaction and conversation, there will always be differences because we have different opinions, different preferences, and different mindsets. That is the basic nature of human interaction.</p>
      <p>We don't always agree on every topic. Some topics we simply agree to disagree on. For example, the Messi versus Ronaldo debate. Some people think Lionel Messi is the best, while others believe Cristiano Ronaldo is the best, and we continue with our lives. We don't try to force others to agree with our opinion.</p>
      <p>In other situations, we try to reach agreement. For example, in a group discussion or a meeting at work where people are looking for the best strategy, everyone shares their opinion. Then the group chooses the best idea and discards the others. That is how social interaction works.</p>
      <p>But now we have large language models like ChatGPT, which rarely contradict our opinions. They do not disagree with you, challenge you, or directly confront your ideas. Instead, they tend to validate you. This feels very easy. In a way, it almost feels like a cheat code for socializing.</p>
      <p>I think this is why many people spend so much time using these AI systems. Some people spend even three hours talking to them. We even see people creating apps specifically for chatting with AI. The app may look like a messaging platform, similar to WhatsApp, but instead of chatting with a real person, you are chatting with artificial intelligence.</p>
      <p>The big difference between these AI apps and real human interaction is that human beings do not follow a script. Sometimes people reply late. Sometimes they disagree with you. Sometimes they challenge your ideas.</p>
      <p>If we look at young people today, many of us don't like calling people because a phone call puts you out of control of the situation, so we prefer texting. But even with texting, we don't like when people send very long messages back, and we don't like it when people disagree with our opinions.</p>
      <p>Part of this may come from how accustomed we have become to AI constantly validating us. If I say something foolish to AI, it usually does not say directly that the idea is foolish. Instead, it might say something like, "I understand why you think that," before suggesting another perspective. In many ways, it sugarcoats disagreement.</p>
      <p>As a result, people become less willing to enter uncomfortable conversations or situations. This is especially visible among boys. Today, many boys hesitate to approach a girl, show interest, or ask her out, because it is an uncomfortable situation. You have to gather the courage to approach someone, express yourself, and face the possibility of rejection.</p>
      <p>In the past, that was simply how people interacted. But now someone can download an AI girlfriend app. He doesn't have to approach anyone or risk rejection. He simply creates the type of girlfriend he wants and starts talking to her.</p>
      <p>This AI girlfriend validates him, tells him sweet things, and may even send erotic messages or images. The more someone becomes accustomed to this artificial interaction, the less likely he is to approach a real girl in the real world and express interest while accepting the possibility of rejection.</p>
      <p>But real human interaction does not follow a script. You cannot predict how people will respond. And engaging in uncomfortable situations is exactly what builds social intelligence.</p>
      <p>We may not enjoy those uncomfortable situations, but the more we avoid them, the less socially intelligent we become. Instead, we become addicted to constant validation. We start to believe that conversations are supposed to always validate us, which is not how real human interaction works.</p>
      <p>The result is that we become less willing to socialize, less willing to engage in uncomfortable conversations, and less willing to face challenging social situations.</p>
      <h2>INTERLECTUAL CAPACITY</h2>
      <p>Another area where we see AI leading to a decline in human beings is a decline in our intellectual capacity. Human beings are intellectual creatures because we have the ability to learn and apply what we have learned to different situations. We can also predict outcomes. This ability was essential for our survival, and it is one of the reasons we evolved and built civilization.</p>
      <p>That is also why we send our children to school, then to university. When they graduate, we expect that they are ready for the job market. But right now, we are beginning to see a decline in intellectual engagement.</p>
      <p>Let me give an example from coding projects. You go to university, you are taught certain concepts, and then you are given a project. You already have notes explaining how the project should be built. The project requirements are clear, and the notes explain how to implement them.</p>
      <p>But now you find someone feeding those notes into AI and asking it to explain the material as if it were being explained to a child. This is a young man asking AI to explain something in the simplest possible terms, as if he were a child, even though he is becoming an adult.</p>
      <p>Instead of taking the time to read and understand the notes himself, he wants everything simplified and shortened. These are not even notes that cover hundreds of pages, but he still wants them reduced and simplified. In a way, we want the information to be spoon-fed to us.</p>
      <p>The result is that, yes, we may have more people graduating, but we have fewer people who are actually capable of performing the tasks they studied for. The intellectual effort was left to AI.</p>
      <p>We also see this during online exams. One window has the exam open, and the other window has ChatGPT open. The student reads the question, copies it into ChatGPT, gets the answer, and pastes it back into the exam.</p>
      <p>And if we are honest with ourselves, yes, we may get a great grade, but that grade is not really ours. After graduation, when we receive the degree, the skill is still not ours either, because we never truly learned it.</p>
      <p>AI will not get employed. You will. When someone studies for four years, we expect that they understand what they studied. No one expects you to know everything perfectly, but you should at least have a strong understanding of the field.</p>
      <p>But now we see people who only have a very small amount of knowledge about the subject they studied for four years, because they did not engage their brains enough. They left much of the intellectual work to AI.</p>
      <h2>AI AND DECISION MAKING</h2>
      <p>Then let's talk about people who make decisions using AI. Human beings are intellectual creatures. Sometimes we reason deeply, and sometimes we have more ideas than we can actually execute. This can create a lot of mental noise, and at that point we simply need to make a decision. Sometimes we just want to weigh our options and choose the best one.</p>
      <p>Let me use myself as an example. When I wanted to start martial arts, I didn't know which martial art to begin with. I knew there were many different martial arts, and I wanted to know which one would be best for me. I kept asking myself questions like: which martial art is the best, and which one is the most effective? Because there were so many options in my mind, it created a lot of mental noise.</p>
      <p>So I went to AI and asked a simple question: which is the best martial art? If you have ever asked AI a decisive question, you may already know that it rarely gives a direct answer. When you ask which martial art is the best, it tells you that there is Boxing, which is effective for certain things but has limitations. Then it mentions Taekwondo, explaining what it is good for and what it lacks. It also brings up Kickboxing and other martial arts.</p>
      <p>So AI gives you a list. It presents the pros and cons and additional information, which is useful. Don't get me wrong, it is good to know the pros and cons. Then if you ask a more specialized question and explain what you want from a martial art, it gives you another list and says, based on what you described, these are the options you could consider.</p>
      <p>But there is never a point where it gives you one specific answer, because AI does not have biases.</p>
      <p>AI is very good for research. If you want to learn about the different martial arts and understand their advantages and disadvantages, it works well. But if you already have a lot of mental noise and you want help making a clear decision, AI may not be the best tool.</p>
      <p>Human beings have biases and preferences. For example, if you ask me which martial art is the best, I will tell you directly: boxing, because I am a boxer. My bias is toward boxing. I may still mention other martial arts, but I will place more weight on boxing. If you ask someone who practices taekwondo, they will likely recommend taekwondo.</p>
      <p>The difference between making decisions using AI and asking a human being is that AI gives you options, while human beings tend to give you a clear recommendation based on their experience and biases. Instead of presenting a wide range of possibilities that increase your mental noise, a person often gives you one direction.</p>
      <p>This brings us back to social interaction. Most of the time, we ask advice from people who have traits we admire. For example, you probably wouldn't ask martial arts advice from someone who appears physically weak. You would ask someone who demonstrates strength, discipline, or skill.</p>
      <p>Their mentality and ideology are reflected in their actions, and that mentality shapes the advice they give you.</p>
      <p>So sometimes you need to accept the uncomfortable part of asking people directly. If you want job advice, you go to your boss because they have experience and knowledge that helped them reach that position.</p>
      <p>For example, if I want advice in boxing, I don't ask AI because it gives me many options and creates more noise. Instead, I ask the champion at our boxing gym, because he will give me specific advice and clear guidance.</p>
      <p>So AI is very good at giving you options. Human beings, however, are often better at helping you make decisions.</p>
      <h2>THE LUST TRAP</h2>
      <p>Next, I want to talk about lust. Lust has always been an issue. I won't say it only exists in this generation, because lust has been a problem since the beginning of time. But right now it has simply become easier.</p>
      <p>For example, in the past, if someone wanted to commit adultery with another man's wife, he would have to approach the woman, talk to her, convince her, and get her consent before anything could happen. If someone wanted to engage in any kind of lustful behavior with another person, they had to interact with that person and gain their consent.</p>
      <p>Then we moved to a situation where some people felt too afraid to approach women in real life. A man might fear rejection. So dating apps appeared. On these apps, you meet women who are also single and searching. But even there, the possibility of rejection still exists, because you may not be the type of man she is looking for.</p>
      <p>Then there is pornography. Someone can satisfy sexual fantasies there, but they still know that this content is not personal. It is not tailored specifically for them. It is not "their" person.</p>
      <p>But now AI has made it even easier. We see apps that advertise AI girlfriends. The advertisements often show seductive, half-naked women, even though these women are not real. They are AI-generated.</p>
      <p>In a way, the message behind these apps is simple: we know you struggle with lust, so we will exploit that using AI. The app offers you an artificial girlfriend.</p>
      <p>That means someone no longer needs to approach a real woman to engage in romantic or sexual conversation. Instead, they download an app, create their AI girlfriend, and customize her exactly the way they want.</p>
      <p>Then they interact with this AI character. She sends sweet messages, compliments him, and may send erotic messages or images. All of this happens without the person leaving their room. No effort is required—only an internet connection.</p>
      <p>Now imagine a man who has had an AI girlfriend for a year. In his mind, he is in a relationship. He feels happy because the AI girlfriend never argues with him. She never disagrees with him. She never tells him that he needs to improve something about himself. She never points out behavior she dislikes. She simply validates him and agrees with him.</p>
      <p>So the question becomes: how likely is that person to go into the real world, approach a real woman, ask her out, and try to build a relationship with someone who has opinions, disagreements, and expectations?</p>
      <p>It becomes much less likely.</p>
      <p>That is why some people stay at home, talk to their AI girlfriend, watch pornography, and satisfy themselves, while real women exist in the real world around them. They have simply become too comfortable with something that requires no effort.</p>
      <p>You just download an app, create a girlfriend, and she is there.</p>
      <p>And this becomes a trap of lust. Because right now someone may be a boy satisfying his desires using these apps. But eventually that boy becomes a man, and society will have expectations of him. At some point he may want a wife, and a real relationship requires effort.</p>
      <p>You cannot download a wife from the internet.</p>
      <p>At some point you will have to approach real people, accept the possibility of rejection, and interact with them. Rejection will not kill you. It is simply part of human interaction.</p>
      <p>That is why this trap of AI girlfriends is a serious issue. Many of the users are boys now, but eventually they will become men, and society will expect them to build real relationships and take responsibility in the real world.</p>
      <h2>ESCAPING REALITY</h2>
      <p>Another thing with AI is that it has provided us with the ultimate way to escape reality. Right now, we see a lot of people who are better than us—people who are more powerful, wealthier, fitter, or more disciplined.</p>
      <p>I once saw a satirical video on Instagram that perfectly captures this. It showed a fat guy asking AI that he wants a six-pack. And AI responds, very accurately: "Okay, you want a six-pack? I can generate a plan—a six-month plan—on how you can get a six-pack."</p>
      <p>So, the guy reads the six-month plan and thinks, Yeah, if I follow this, I may get a six-pack. Then at the end, AI asks: "Would you like me to create a weekly plan for you?" He says yes, and AI generates the weekly plan. He reads it and feels motivated, as if he has already started the process of getting a six-pack.</p>
      <p>Then AI asks: "Do you want me to generate a daily plan so you know exactly what to do each day?" This seems reasonable. He reads the daily plan, feels productive, and imagines the six-pack even before he has started.</p>
      <p>The problem is that AI never finishes planning for you. It can keep generating plans indefinitely. At no point does it say: We've planned enough for today. Go out and start acting.</p>
      <p>The more planning you read, the more productive you feel. You begin to romanticize planning over doing, and that imagined feeling of having a six-pack becomes better than the actual work to get it. You stay in the cycle of planning and never act.</p>
      <p>And this is not just about a six-pack—it can happen with anything. AI is excellent for planning, but you must set a finishing point and take action yourself. Otherwise, you remain stuck in an endless loop of planning, and nothing ever gets done.</p>
      <p>So as I conclude. This is not even a debate about who is better—human intelligence or artificial intelligence. This is not about saying, "AI is bad, stop using it," because genuinely, AI has made many things easier. It has made coding faster. It has made productivity smoother.</p>
      <p>So, this is not about whether AI is good or bad. Every technological advancement has its advantages and drawbacks. The difference lies in how you use it.</p>
      <p>If you use AI to streamline processes, make work easier, or get tasks done faster, then AI becomes a useful tool. But if you use AI to satisfy your lust, avoid uncomfortable situations, or seek validation for your thinking, then AI is harmful to you.</p>
      <p>I won't sit here debating whether human intelligence or AI is better. I will just say this: AI is effective in certain areas of life, in some tasks, and for some purposes. But there are areas where human intelligence cannot be replaced by AI, no matter how advanced it becomes.</p>
    `
  },
  {
    slug: 'i-was-learning-confidence-backwards',
    title: 'I Was Learning Confidence Backwards',
    topic: 'Personal Growth',
    date: 'Mar 03, 2026',
    readTime: '6 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/i-was-learning-confidence-backwards',
    publication: 'deliberately-becoming',
    excerpt: 'I had been learning confidence backwards. I was studying the appearance of authority. But authority does not begin with posture. It begins with composure.',
    body: `
      <p>Recently, I watched an interview with behavioral expert Chase Hughes in conversation with Steven Bartlett in the Diary of a CEO.</p>
      <p>The discussion covered many topics—authority, control, discipline, communication, influence, and human behavior.</p>
      <p>But what stayed with me wasn't a technique.</p>
      <p>It was a realization:</p>
      <p>I had been learning confidence backwards.</p>
      <h2>The Triangle to Success</h2>
      <p>The interview began with what was called the Triangle to Success, built on three pillars:</p>
      <p>Self-mastery</p>
      <p>Observation</p>
      <p>Communication</p>
      <p>According to this framework, these three traits largely determine human outcomes. You can often predict success or faliure by observing how strong someone is in these areas.</p>
      <p>What struck me immediately was self-mastery.</p>
      <p>Because right now, that is exactly where I am—trying to understand myself, refine myself, and deliberately evolve into a better version of who I am.</p>
      <p>For the first time, self-development stopped feeling random.</p>
      <p>It felt structured.</p>
      <h2>Everyone Wants Control</h2>
      <p>Social media constantly sells control.</p>
      <p>Be confident.</p>
      <p>Be dominant.</p>
      <p>Be respected.</p>
      <p>Be powerful.</p>
      <p>Some people appear to be born with it and practice it even without trying. Others feel excluded from it.</p>
      <p>But one thing I have learnt from The Brain That Changes Itself is that human behavior is trainable.</p>
      <p>Control can be cultivated through practice.</p>
      <p>Control consists of four elements:</p>
      <p>Authority</p>
      <p>Comfort</p>
      <p>Social skills</p>
      <p>Skills</p>
      <p>Most of us chase the last two.</p>
      <p>That's why we go to YouTube to search for communication tricks, charisma hacks, or behavioral techniques.</p>
      <p>But the interview suggested something uncomfortable:</p>
      <p>What we actually lack is authority and comfort.</p>
      <p>And those cannot be downloaded from the internet.</p>
      <h2>The Comparison Problem</h2>
      <p>I recognized myself here immediately.</p>
      <p>During COVID-19, social media expanded my world overnight. Comparison stopped being local and became global.</p>
      <p>At fourteen, I constantly compared myself to others—better photos, better clothes, better lives. It left me focusing more on the things that I didn't have and very little appreciation for what I had.</p>
      <p>Eventually, I left social media.</p>
      <p>Later, when I wanted to build my discipline brand on Instagram, I returned and this time curated my feed to show only "discipline" content. My feed was filled with people doing workouts in the rain, people in the gym in "beast mode" and teenagers who became millionaires at 16.</p>
      <p>But I realized something. I was also comparing myself with these people and started chasing intensity and more dramatic changes.</p>
      <p>Even discipline content creates comparison.</p>
      <p>Comparison itself isn't the problem. We are social creatures and are prone to compare ourselves to others.</p>
      <p>Maybe all we need is to change what we compare.</p>
      <p>The interview introduced a different metric:</p>
      <p>Compare comfort.</p>
      <p>Someone may have fame, money, or attention—but would I be comfortable living their lifestyle? Would I accept the pressure required to maintain it?</p>
      <p>Right now, I have time to learn, train, and build myself.</p>
      <p>That is comfortable for me.</p>
      <p>And comfort is an advantage.</p>
      <h2>Composure Before Posture</h2>
      <p>This idea changed me the most.</p>
      <p>For quite some time, I used to search for videos teaching:</p>
      <p>how to walk</p>
      <p>how to sit</p>
      <p>how to shake hands</p>
      <p>how to look confident</p>
      <p>I was studying the appearance of authority.</p>
      <p>But authority does not begin with posture.</p>
      <p>It begins with composure.</p>
      <p>Fear speeds you up.</p>
      <p>Stress makes you rush.</p>
      <p>Insecurity makes you overperform.</p>
      <p>Calm people move slower, not lazily, but deliberately. They think before speaking. Their presence feels controlled.</p>
      <p>The confident posture isn't performed.</p>
      <p>It is produced.</p>
      <p>The person sitting upright isn't trying to look confident. He doesn't constantly remind himself to keep his shoulders high or maintain eye contact.</p>
      <p>Their internal state creates the posture naturally.</p>
      <p>That realization made me stop chasing behavioral tricks.</p>
      <p>I started pursuing composure instead. I started by just trying to slow down and do things more deliberately.</p>
      <h2>What Authority Is Actually Made Of</h2>
      <p>Authority was described as a combination of five elements:</p>
      <p>Confidence</p>
      <p>Leadership</p>
      <p>Discipline</p>
      <p>Gratitude</p>
      <p>Enjoyment</p>
      <p>Confidence especially resonated with me.</p>
      <p>You cannot be confident without something behind you.</p>
      <p>You're confident in exams because you studied.</p>
      <p>You're confident in negotiation because you have leverage.</p>
      <p>This is partly why I train boxing and study programming. To have something that I'm confident in.</p>
      <p>Confidence grows from capability.</p>
      <p>The surprising element was enjoyment (You may also call it mindfulness).</p>
      <p>Enjoyment doesn't necessarily mean loving every moment. I'm not always smiling during runs, when working out almost close to failure or while getting hit in sparring.</p>
      <p>But there is gratitude in participating in the process itself. That is mindfulness.</p>
      <h2>Life Creates Body Language</h2>
      <p>One sentence stayed with me:</p>
      <p>Your life creates your body language. Not the other way around.</p>
      <p>Instead of fixing gestures, we should first control the foundations:</p>
      <p>Environment — Is your space ordered?</p>
      <p>Time — Are you always rushing?</p>
      <p>Appearance — Do you respect your presentation?</p>
      <p>Social life — Can you connect with others?</p>
      <p>Financial direction — Are you progressing toward independence?</p>
      <p>Authority emerges from lived structure.</p>
      <h2>Confidence Is a Difficulty Setting</h2>
      <p>Confidence was explained through a simple analogy.</p>
      <p>When playing a football video game on easy mode, conceding a goal doesn't scare you. You still expect to win. You are sure that at the end you will still win even though you conceded a goal.</p>
      <p>On the hardest difficulty, conceding one goal makes you panic. You feel like the game is already lost. You start putting more effort in trying not to concede another goal instead of trying to win the game.</p>
      <p>The same also applies to how we live our lives.</p>
      <p>Confident people operate with a general expectation of positive outcomes.</p>
      <p>Discipline builds that expectation.</p>
      <h2>The Person Off-Camera</h2>
      <p>Most of life is performance.</p>
      <p>We perform professionalism.</p>
      <p>We perform confidence.</p>
      <p>We perform competence.</p>
      <p>But real character appears off-camera. When nobody is watching.</p>
      <p>If you don't believe in yourself privately, performance will always feel fake publicly.</p>
      <p>Confidence cannot be permanently acted.</p>
      <p>It must be lived.</p>
      <h2>The Real Shift</h2>
      <p>Before this interview, I searched for authority externally:</p>
      <p>better posture, better behavior, better appearance.</p>
      <p>Now I understand:</p>
      <p>Don't chase the symptoms of confidence.</p>
      <p>Build the causes.</p>
      <p>Authority isn't performed.</p>
      <p>Confidence isn't faked.</p>
      <p>Respect isn't demanded.</p>
      <p>They emerge from how you live.</p>
      <p>And for someone trying to become a calm, respected leader, this realization didn't just teach me something.</p>
      <p>It changed how I think.</p>
      <img src="../assets/articles/confidence-backwards.webp" alt="Confidence isn't walking into a room thinking you're better than everyone" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
    `
  },
  {
    slug: 'boxing-so-far',
    title: 'Boxing So Far',
    topic: 'Boxing',
    date: 'Feb 28, 2026',
    readTime: '5 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/boxing-so-far',
    publication: 'deliberately-becoming',
    excerpt: 'I started boxing in January this year. Not exactly as part of a New Year\'s resolution, since I had wanted to start as early as November. January just happened to be more favorable.',
    body: `
      <h2>Starting the Journey</h2>
      <p>I started boxing in January this year. Not exactly as part of a New Year's resolution, since I had wanted to start as early as November. January just happened to be more favorable. I had just quit my sales job to focus on building my virtual assistant skills and start freelancing. With only four hours of study per day planned, I had more time to dedicate to boxing.</p>
      <p>Starting boxing was a huge achievement. Even though I had written it in my one-year master plan, doing a combat sport felt like a far-fetched dream. Something for a select group of people which I didn't think I belonged to. I began by asking AI if I could train online through YouTube. It said it was possible, so in December, I subscribed to boxing channels and downloaded videos. I trained in the house for one week then quit once it felt boring and I felt no progress, there was also no feedback. After quitting sales, I had savings set aside specifically for boxing. I researched gyms, visited them, consulted around, and finally found the most affordable one for me. After paying the membership fee—the only cost required—I could hardly believe I was finally starting. My first session was on January 3rd.</p>
      <h2>The Brutal Beginning</h2>
      <p>The first few weeks were brutal. On my first day, while others sparred, I was sent to a corner to practice my form. I felt embarrassingly insignificant compared to the other fighters. Having no prior experience in any martial art, I had to start from square zero, with poor form and a shattered ego.</p>
      <p>It wasn't that the others were too good— of course they had trained for a long time—it was just that my form was so bad that even being average seemed impossible. I felt like quitting, but I reminded myself that no one starts perfect, and even skilled boxers had once been in my position. So, I continued.</p>
      <h2>Breakthrough on the Bag</h2>
      <p>After three weeks, the coach promoted me to practice on the bag, just hitting it. That felt like a breakthrough. Practicing form and hitting the bag are completely different sensations. When hitting the bag, you feel confidence. You feel the impact of your punches. That's also when ego starts to develop, because the bag doesn't hit back. The more you hit it, the more capable you feel. I began to feel confident, even ready for confrontation, thinking I was a good fighter.</p>
      <h2>The Reality of Sparring</h2>
      <img src="../assets/articles/boxing-so-far.webp" alt="Boxing sparring session" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <p>Then came my first sparring session, and my ego was shattered again. Hitting the bag doesn't punish mistakes. Sparring does. Every slip is met with a counterpunch. I was dominated. I took a lot of punches, landed very few and the rounds just felt like survival. Thats when I realized just how far I had to go.</p>
      <p>After that session, I returned to the bag to correct my form. One week later, I told the coach I was ready to spar again. Eventually, he randomly selected me to spar. I still got hit a lot, got corrected by my sparring partners, I still wasn't perfect. I continued sparring weekly, knowing that I was going to get hit each session. Sometimes, the hits were intense enough that I considered skipping training, especially since I used to move back too much or even close my eyes during combinations. Once again I felt like quitting. But I kept going.</p>
      <h2>How I win sparring sessions nowadays</h2>
      <p>Nowadays, I still spar and still get hit, although not as much as before. I don't win sparring by dominating my opponent, but I win in a different way. I decided that each session would focus on improving one specific thing. My sparring partners are experienced boxers who have competed for years, so the goal is not to prove myself but to learn.</p>
      <p>I started with keeping my eyes open during punches. The day I managed that, I "won" the session. Next, I focused on movement—slipping to the side instead of stepping back. When I managed that, I won again. Every session now leaves me with either a small victory or feedback to improve.</p>
      <p>I'm grateful for the opportunity to fight boxers who are better than me and improve one thing every day.</p>
      <h2>Boxing So Far</h2>
      <p>That's boxing so far. It's been a journey of brutal beginnings, small breakthroughs, shattered ego, and gradual victories. Each session teaches me something new, and every day, I feel a little closer to the fighter I want to become.</p>
    `
  },
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

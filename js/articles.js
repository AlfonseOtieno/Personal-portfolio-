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
    slug: 'reading-cant-hurt-me-by-david-goggins',
    title: 'Reading Can\'t Hurt Me by David Goggins',
    topic: 'Books',
    date: 'May 12, 2026',
    readTime: '8 min read',
    substackUrl: 'https://deliberatelybecoming.substack.com/p/reading-cant-hurt-me-by-david-goggins',
    publication: 'deliberately-becoming',
    excerpt: 'I have interacted with David Goggins content countless times and in different ways. From highlight reels to podcasts. I decided to now read a book by David Goggins.',
    body: `
      <img src="../assets/articles/cant-hurt-me.webp" alt="Can't Hurt Me by David Goggins" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <p>I have interacted with David Goggins content countless times and in different ways.</p>
      <p>In January it was the highlight reel on social media — the videos of him running in the dark, cursing and talking with that voice that makes you feel like you have been wasting your life. I used to watch these videos when I was still in search of motivation to do the hard things. But watching these videos alone would make me feel more disciplined, like I had already done the work. I have written about the trap of motivation porn — the loop where you consume content about discipline and mistake the consumption for the discipline itself. Goggins' highlight reels were some of the first content I used that way.</p>
      <p>Then I wrote an article about my Ideal Life Philosophy, partly in response to a Huberman Lab podcast where Goggins described his daily life as all stick and no carrot. My argument in that article was that my own version of self development does not have to be painful to be significant — that I genuinely enjoy boxing, coding, reading, and building, and that enjoyment doesn't make the work less serious.</p>
      <p>From watching highlight reels of Goggins to realising his point of view and mentality in podcasts. I decided to now read a book by David Goggins.</p>
      <h2>Why I Read The Book</h2>
      <p>I had two specific reasons for reading the book.</p>
      <p>The first was to understand more about Goggins himself. The highlight reels showed the disciplined man running and cursing. The podcasts showed how the man thinks when he is not running. But I wanted to understand the actual man — how he became what he became, what the process looked like from the inside, and what has kept him operating at that level for decades, why he didn't burn out like most people.</p>
      <p>The second was to understand how to unleash and utilise my full potential. I had encountered the idea that human beings operate at roughly 40% of their actual capacity — that there is a significant reserve we never access because we stop when we feel discomfort rather than when we are actually done. I wanted to understand that idea more deeply, because I am not trying to pursue discipline for four months or even four years. I want to carry these habits for a lifetime. I wanted to know how a person builds that kind of endurance without destroying themselves in the process.</p>
      <p>Those were the two questions I had when I opened the book, and I can comfortably say that I found the answer by the time I finished reading the book.</p>
      <h2>What the book is about</h2>
      <p>I opened Can't Hurt Me expecting a framework. Tips. A system. The Goggins method for unlocking your potential, laid out in steps I could apply immediately. It started with his life story. I kept reading and waiting for the section where he starts giving frameworks.</p>
      <p>It never did.</p>
      <p>The book is almost entirely David Goggins describing his life — his childhood, his environment, the abuse, the poverty, the learning disability, the racism, the years he spent playing dumb and cheating on tests because he had convinced himself he wasn't capable of more. It is a memoir that happens to be about one of the most disciplined human beings alive. And I have come to appreciate that choice deeply, because it confirms what Goggins has been saying all along, "There is no hack."</p>
      <h2>What I Found</h2>
      <p>Once you read about his childhood, you stop feeling sorry for yourself. You read what he came from, his struggles and then you look at your own situation and you see all your excuses slowly fade away.</p>
      <p>For me specifically, reading it in my context: I am not racially discriminated against. I don't have a learning disability. I am not in an abusive environment. By the time I finished the book, those facts felt less like a neutral background and more like advantages I had been underusing. If Goggins became who he is from where he started, then from where I started, the ceiling should be higher.</p>
      <h2>The Two Things That Stuck With Me Most</h2>
      <h2>The 40% Rule</h2>
      <p>Goggins argues that when the mind sends the signal to stop — when you feel like you have nothing left, when your body is telling you it's over — you have actually used approximately 40% of your true capacity. The remaining 60% is locked behind a governor that the mind installs to protect you from discomfort. The work, he argues, is learning to override that governor.</p>
      <p>I now use this during every training session and every run.</p>
      <p>When I feel tired, I treat it as the 40% marker. I say it to myself: you have used 40%, there is still more in the tank. Like Goggins says, "I don't stop when I'm tired. I stop when I'm done."</p>
      <p>I still feel tired during roadwork or intense training sessions. But now the feeling is a signal to tell me where I am, not what to do next. The process is working past the governor.</p>
      <h2>The Accountability Mirror</h2>
      <p>Goggins describes standing in front of a mirror and being honest with himself about who he was and what he was avoiding. Just you, the person in the mirror, and the truth.</p>
      <p>I apply this literally.</p>
      <p>Every morning, before the day begins, I stand in front of the mirror and have a dialogue with myself. I agree on what needs to be done by the end of the day. I walk out with a spoken agreement with the person looking back at me.</p>
      <p>Then at night, before I sleep, I return to the mirror. And we discuss what happened. Did I do what I said I would do in the morning? What went well? What can be improved?</p>
      <p>And I can say that having a dialogue with the guy looking you in the eye gives more clarity for me, and also the fear of having to tell the person that you failed to live up to what you agreed in the evening proves to be more motivation to work than any checklist or journal would have.</p>
      <h2>Where I Draw the Line</h2>
      <p>I respect David Goggins enormously. But I don't see any use of trying to become another David Goggins.</p>
      <p>There is only one David Goggins. The world does not need a second one, and I do not need to produce one. What I need is to become the fullest version of myself — and that version is a boxer, a developer, a writer, a reader. Not a Navy SEAL. Not an ultramarathon runner who trains on broken knees.</p>
      <p>I read sections of the book where Goggins describes running through injuries that would have ended most people's careers. His body has paid a significant price for the way he has pushed it. I read those sections and I feel genuine admiration for the will it required. And then I put that admiration in its place and remember that I need my body to be functional. A boxer who ignores recovery does not perform — he just accumulates damage. For me, discipline includes listening to my body, protecting my joints, sleeping enough, eating properly. Not because I consider myself soft, but my sport requires it.</p>
      <p>The endurance I want to build — the mental toughness, the capacity to push past the 40% marker — I will pursue through my own version. My boxing training. The marathon I am preparing for. The long coding sessions and the articles I write. I will prove things to myself in my own arena.</p>
      <p>After all; The judge that matters is the person I stand in front of each morning and each evening. That is the person that sets the standard.</p>
      <h2>What the Book Left Me With</h2>
      <p>There is one line that really stayed with me;</p>
      <p>It takes 20 years to build 20 years of experience.</p>
      <p>I have been at this since January. Four months of boxing, coding, running, reading, building. That line feels like a reminder for me not to pressure myself and expect perfection after only four months. David Goggins did not become David Goggins in four months. The version of him that the world knows was built over decades, through repeated cycles of failure, relapse, rebuilding, and pushing forward again.</p>
      <p>The book does not hide those cycles. He was not a finished product who decided to change and immediately became elite. There were stages where he went backwards. Periods where the old patterns returned. The transformation was not a single event. It was a long, uneven, deeply personal process.</p>
      <p>I read Can't Hurt Me thinking I would walk away with frameworks. I walked away with something more useful: a picture of what a man can do with enough motivation, and the willingness to continue even when you feel like quitting.</p>
    `
  },
  {
    slug: 'self-development-is-expensive-so-i-got-a-job',
    title: 'Self-development is expensive, so I got a job',
    topic: 'Personal Growth',
    date: 'May 09, 2026',
    readTime: '8 min read',
    substackUrl: 'https://deliberatelybecoming.substack.com/p/self-development-is-expensive-so',
    publication: 'deliberately-becoming',
    excerpt: 'I started boxing in January. I have been reading books, writing articles, building websites, learning about AI and how to code — all of it since January. And somewhere around April, I hit a wall that had nothing to do with discipline or motivation.',
    body: `
      <p>I started boxing in January. I have been reading books, writing articles, building websites, learning about AI and how to code — all of it since January. This is all aligned with what I call my one year master plan which is focused on self development and self mastery.</p>
      <p>And I genuinely enjoy every single one of those things. None of it feels like a burden to me. None of it feels like something I am forcing myself to do.</p>
      <p>But somewhere around April, I hit a wall that had nothing to do with discipline or motivation.</p>
      <p>I wanted to run the Nairobi City Marathon in June. Not for anyone else. Just for myself — for the experience, and to prove something to the version of me that existed five months ago who would not have believed he could run 10 kilometres. But to register, I needed money. And I realized I couldn't go to my parents and ask them to fund my marathon entry. They already cover my food, my shelter, and most of my basic needs. That is already a significant thing. Going to them and saying "I also need money to run a race" felt like a big ask — and beyond the marathon, I also needed money to buy books, to finally have my own domains, for all the small costs that quietly support the entire system I have built.</p>
      <p>And that is when I clearly understood something: self-development is expensive.</p>
      <p>And I'm not even talking about expensive courses or coaching programs. Just in the quiet, practical way where the things you want to do cost money that you don't have. And you can be the most disciplined, most consistent, most intentional version of yourself — and still not be able to register for the marathon you have been training for.</p>
      <p>So I got a job.</p>
      <h2>The Social Media Manager Who Had Deleted Social Media</h2>
      <p>In February, I deleted every social media platform from my phone. Instagram, Twitter, TikTok — all of it gone. I only kept GitHub and Substack because those are tools I actually use for coding and writing. I wanted to focus more on deep work and saw social media as a distraction and a comparison trap.</p>
      <p>So paradoxically, my first job is social media management.</p>
      <p>I find the irony genuinely funny. The person who deleted Instagram to protect his deep work now has to reinstall it for work. The person who structured his day specifically to avoid these platforms now has to spend hours inside them.</p>
      <p>But I apply the same concept of deep work to how I use social media.</p>
      <p>I set time blocks for when I will use social media, and during those time blocks I only focus on advertising and getting clients. And during these time blocks I'm focused on what I'm doing and try to avoid anything that may distract me.</p>
      <p>So right now I can say my job involves deep work while using social media.</p>
      <h2>My Brother's Selfishness and Mine</h2>
      <p>The company I am working for is my brother's. It is a web development startup — a small one but growing. My brother is a selfish person and I respect him for that. And before I got the position, my brother told me something.</p>
      <p>He said he would not give me the job unless I was actually going to benefit the company. No favors. No charity. I had to prove my value. If his partners didn't see the value, I wasn't getting in.</p>
      <p>I genuinely like that. Because when I got the position, I knew it wasn't handed to me out of obligation. His partners looked at what I could offer and decided it was worth something. He didn't give me a job after I finished high school, and when I finally asked him for a job, I had to pass an interview before getting the job.</p>
      <p>They didn't place me as a developer. I have been learning web development for four months. They have people with university degrees and years of real experience. They didn't think I was ready or skilled enough for the job, and I too knew they were more skilled than me, and I was comfortable with that fact. So they gave me social media management. They are willing to give me the web development job, but I still need to earn it.</p>
      <p>That is a smarter arrangement than a title I hadn't earned.</p>
      <p>Now here is where my own selfishness enters.</p>
      <p>I took this job for the money. I will say that plainly. I want to register for the marathon. I want to buy books. I want to stop working around financial constraints every time I want to do something for my own development. The money is the point of the job — not the social media itself. Not for passion.</p>
      <p>But that selfishness is exactly what will make me do the job well. If I want to extend the contract, the company needs to see results. If I want to be paid more, I need to produce better results than they are paying me for. My self-interest and the company's interest are pointing in the same direction. Not because I am a dedicated employee who loves the mission — but because performing well is what gets me what I actually came for.</p>
      <p>But I am also doing this job with a genuinely open mind. I started this year with web development as my main path. But I am only 19. I don't expect myself to have my entire life figured out. There is no guaranteed one path to anything. Maybe I will be very good at my job. Maybe I will produce exceptional results for the company. I am not dismissing the experience before I have had it. I am showing up, doing the best I can, and remaining curious.</p>
      <h2>Why I Actually Love This Job</h2>
      <p>I wake up and I decide whether I am going to the office or working from home. Either way, my morning still belongs to me. The run. The training. The reading. The things I have been doing since January continue exactly as they were. The job has obligations — things I need to deliver by the end of day. As long as I deliver them, how I structure the hours in between is my own business. I'm still able to learn web development and build my own projects.</p>
      <p>When I go to the office, I am in a room with developers who are better than me. We talk about the job. I ask questions that are worth asking. I also learn from them.</p>
      <p>At the end of the week, I get paid.</p>
      <p>I love this job because I still do everything I was doing before. The boxing, the reading, the building, the writing — none of it stopped. I just added work obligations into the schedule, and the work funds the rest.</p>
      <p>I love this job because I am not choosing between self-development and money. Right now I am doing both in the same week, sometimes on the same day.</p>
      <p>I love this job because I get to learn from people who are better than me, and they also happen to be people I enjoy spending time with. I go to the office when I'm having a challenge or don't understand something, they are always willing to help. I call them my workmates. I also call them my friends. And I get paid at the end of the week for spending time with them.</p>
      <h2>What I Understand Now That I Didn't Before</h2>
      <p>I used to hold self-development and money as separate pursuits that belonged to different seasons of life. The people telling me to get a job and secure money first — I understood their logic, but I disagreed with the sequencing. I believed I should develop myself first and handle money later.</p>
      <p>What I understand now is that they were not opposite things. They were just poorly integrated in how I was thinking about them.</p>
      <p>Self-development without money has a ceiling. You eventually reach something you want to do, something that would genuinely push you forward, and you cannot do it because you can't afford it. The marathon taught me that. The domain fees taught me that. The books I wanted but couldn't buy taught me that.</p>
      <p>Money is not the goal. I have never believed it was and I still don't. But money is the tool that keeps the system running. And a system without resources eventually stalls, no matter how disciplined the person operating it is.</p>
      <p>I am not rich. I am not trying to be rich right now. I am trying to have enough that money stops being the reason I can't do the next thing I want to do. I am not chasing money, but I will also not pretend it doesn't matter.</p>
      <p>Right now, I am learning, I am getting paid, and I am still doing everything I care about. The system finally has the money it requires to keep moving.</p>
    `
  },
  {
    slug: 'i-am-sisyphus-and-i-am-happy',
    title: 'I Am Sisyphus. And I Am Happy.',
    topic: 'Philosophy',
    date: 'May 05, 2026',
    readTime: '10 min read',
    substackUrl: 'https://deliberatelybecoming.substack.com/p/i-am-sisyphus-and-i-am-happy',
    publication: 'deliberately-becoming',
    excerpt: 'I am 19 years old, living in Nairobi, and I am the happiest I have ever been in my life. My conditions haven\'t changed much. But something shifted in me.',
    body: `
      <p>I am 19 years old, living in Nairobi, and I am the happiest I have ever been in my life.</p>
      <p>My conditions haven't changed much. I still live with my parents. I still don't have a stable income. The financial constraints are still there. But something shifted in me. And I want to try and explain what that is.</p>
      <p>I'll be honest with you: it's not easy to explain. If you asked me right now to give you a clear, convincing argument for why I spend money on books instead of saving it, why I would pay to enter a marathon, why I go to boxing training and get hit — I wouldn't give a specific answer or a strong argument.</p>
      <p>I can't give you facts and figures. But what I can tell you is that I am proud of myself in a way I have never been before. And the only thing I changed is my actions.</p>
      <p>This article is my attempt to explain that, through four ideas I've been reading about. Not because I'm an expert in any of them — I'm not. But because they come closest to describing something I couldn't name on my own.</p>
      <h2>Self-Actualization — Why We Are Not All After the Same Thing</h2>
      <p>In Kenya, the conversation for most people in their twenties goes roughly the same way. You finish school. You look for a job. You start earning. You build stability. That is the script, and for most people, it is not wrong — it is necessary.</p>
      <p>But I have noticed something. When I talk to peers who are out of their parents' house and fully responsible for themselves, we seem to be chasing completely different things. They are focused on income, on security, on building a foundation. I am focused on boxing, on reading, on writing articles, on running a marathon, on coding and building AI powered tools. And to them, that looks like wasting time.</p>
      <p>After going through Maslow's hierarchy of needs, I finally understood why we see things so differently.</p>
      <img src="../assets/articles/maslow-hierarchy.webp" alt="Maslow's Hierarchy of Needs" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <p>The hierarchy places human needs in order — physiological needs at the base (food, shelter, sleep), then safety and security, then love and belonging, then self-esteem, and at the very top, self-actualization. The idea is that you have to meet the lower needs before you naturally start pursuing the higher ones.</p>
      <p>For a 23-year-old in Nairobi who is paying rent, buying their own food, and supporting themselves — the priority is survival. The hierarchy demands it. Physiological needs, then security. Everything else comes after. That is not a mindset problem. That is just where they are on the pyramid, and their energy goes where the need is greatest.</p>
      <p>My situation is different. Right now, my physiological needs are covered by my parents. Safety is covered. I have people around me I care about. So without fully realising it, I've moved up the hierarchy. I'm not chasing food or shelter — those are handled. And that has put me in a position to pursue self-esteem and, eventually, self-actualization.</p>
      <p>This is why the same advice doesn't apply equally to all of us. It's not that one person is right and the other is wrong. We are simply at different stages of the same hierarchy. The person telling me to get a job is solving a real problem — just not the problem I currently have.</p>
      <p>I'm not anti-money. I know that eventually I will enter that stage — where the support my parents provide disappears and I have to build the foundation myself. But I'm not there yet. And I think forcing that urgency now would mean abandoning the one window in my life where I have the freedom to pursue the top of the pyramid.</p>
      <p>I don't know if this window will come again. So I'm using it right now.</p>
      <h2>The Myth of Sisyphus — The Absurd Man</h2>
      <p>I tried to read The Myth of Sisyphus by Albert Camus. I'll be truthful — it's a heavy book. There was a lot to internalize and I didn't read it at the depth it deserves. But I understood enough to recognize myself in it.</p>
      <p>Camus starts with one question: if life has no inherent meaning, why continue?</p>
      <p>He looks at two common answers and rejects both.</p>
      <p>The first is religion — the idea that this world is not the real one, that meaning exists in another world waiting for us after death. Camus calls this philosophical suicide. You're not answering the question. You're escaping it.</p>
      <p>The second answer is nihilism — deciding that nothing has meaning, so nothing is worth doing. But this also helps no one. It's just a different kind of surrender. This is what Camus calls real death.</p>
      <p>His answer is the absurd man. Someone who looks at the meaninglessness of the world directly, refuses to look away, and chooses to live fully anyway. Not in spite of the absurdity — within it.</p>
      <p>Then there's Sisyphus. In the myth, he was a man who loved life so much that he escaped death twice. I believe Sisyphus saw life so meaningful that he couldn't go to the underworld.</p>
      <p>When he finally died the gods gave him what they saw as the worst punishment, a meaningless task — push a boulder up a hill for eternity, watch it roll back down, and repeat. Forever.</p>
      <p>They thought this would break him. Camus says we should imagine Sisyphus happy.</p>
      <img src="../assets/articles/sisyphus-camus.webp" alt="Sisyphus rolling the boulder — The struggle itself toward the heights is enough to fill a man's heart. One must imagine Sisyphus happy. — Albert Camus" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <p>Most people interpret Sisyphus as the person working a nine to five job they hate, doing the same thing every day, going nowhere. That's one way of reading it.</p>
      <p>But my reading is different. I think everyone is Sisyphus. We are all born, we live, we struggle, and then we die. The boulder always rolls back.</p>
      <p>That's just what life is. The question is not whether the boulder rolls back — it always does. The question is whether you are the version of Sisyphus who pushes it in misery, feeling condemned, and always holding on to the hope that someone else will come and save you, or the version Camus imagined — the one who has accepted the rock as his own and pushes it happily.</p>
      <p>Growing up in a lower-middle-class family in Nairobi, there is a script most of us follow. You survive.</p>
      <p>At some point I looked at that script and asked myself: is this it? Be born, live your life surviving and chasing money, then die without ever achieving anything? A meaningless life?</p>
      <p>And I decided that was not enough for me.</p>
      <p>So now I always have something in front of me that I derive meaning from. A boxing tournament coming up. A marathon to train for. An article I need to write by next week. Not because these things will make me rich. But they always give me something to work towards.</p>
      <p>I remember a time when I had nothing planned, nothing to do. No training. No article due. Nothing to look forward to. I felt terrible — and I couldn't even explain why. Life was just happening to me. I was just existing. And I think that was the closest I've ever been to the miserable Sisyphus — not because my conditions were bad, but because I had stopped choosing my boulder.</p>
      <p>Right now, every day when I go to boxing training, when I write an article, when I build a tool to solve something — I am that guy rolling the stone up the hill. But I'm doing it happily. Because I chose this. And choosing your own struggle is completely different from having struggle chosen for you.</p>
      <h2>Stoicism — Accepting the Cards You Were Dealt</h2>
      <p>I cannot deny my limitations.</p>
      <p>Financial constraints — real ones. Things I want to do that I simply cannot afford right now. Resources I don't have access to. A starting point I did not choose.</p>
      <p>Heidegger called this thrownness — the idea that we are thrown into the world without choosing our conditions. You don't choose your family, your neighbourhood, your starting position. You just arrive, and these are your cards. Some people are dealt better hands than others. That is not fair. But it is the reality.</p>
      <p>The stoic response — what I understand of Marcus Aurelius and what stoicism generally teaches — is not to pretend the cards are better than they are. It is to accept them fully and then ask: what can I do with these cards I've been dealt?</p>
      <p>Because I have good cards and bad cards. The bad ones are real — I won't pretend otherwise. But I also have cards that people in other situations don't have. I have time. I have drive. I have a roof over my head while I build. Those are cards too.</p>
      <p>The stoic principle that changed how I think is simple: you cannot control the world, but you can control how you respond to it. I cannot control where I was born or the environment I grew up in. But I can control what I do with what I have. And that is the only variable that is actually mine.</p>
      <p>So I find ways around the limitations. No money for web hosting — I found free platforms. No laptop yet — I use my phone. Five projects online, zero cost. Can't always afford to buy books — I find them online. Want to run a marathon but the entry fee is not small — I get a job and save slowly, week by week.</p>
      <p>I will always have limitations that give me a reason not to do something. Those reasons are real. I don't dismiss them. But I choose not to accept them as a final answer.</p>
      <h2>The Hero's Journey — The Archetype I Am Completing</h2>
      <p>Here is something I've had to make peace with: I am not original.</p>
      <p>Spending about a month studying Greek mythology made that very clear. Every story I thought was mine has been told before. Every drive I feel has been felt before. The young man who realizes he is capable of more, who decides to become it, who faces obstacles and is shaped by them — that is not a new character.</p>
      <p>That is Heracles. That is Achilles. It is the hero's journey that Joseph Campbell mapped across every culture in human history. The structure is always the same: the hero realizes he is capable of more. He crosses a threshold and commits to the journey. He faces trials that are difficult — and those trials are precisely what make him the hero. And at the end, there is transformation.</p>
      <p>I am just completing an archetype.</p>
      <p>And that doesn't discourage me. It anchors me. Because it means this path is proven. The shape of it has worked before.</p>
      <p>If Sisyphus is the condition of all of us — born, struggle, die — then the hero's journey is the answer to it. It's how you make the boulder worth pushing.</p>
      <p>In more recent times, David Goggins is one of the people who shaped how I think about physical limits. He is the reason I started running. He came from difficult conditions and decided those conditions were not his ceiling. He isn't a perfect comparison to my life — but the archetype is the same.</p>
      <p>What I'm doing from January to December, the one-year master plan I built, is just me filling in the hero's journey with the details of my own life. Boxing. Running. Writing. Building. Reading. Nothing new. Nothing special.</p>
      <p>But I've decided to be the hero of my own version of it.</p>
      <h2>What I Cannot Fully Explain</h2>
      <p>If you asked me right now to justify all of this economically — I couldn't. Paying to enter a marathon doesn't increase my income. Getting hit in sparring doesn't build my CV. Writing articles doesn't pay rent.</p>
      <p>But I am proud of myself in a way I have never been. I am happy in a way I have never been. And the only thing that changed is what I do every day.</p>
      <p>I can't fully explain that. Maybe I don't need to.</p>
      <p>What I know is that five months ago, running 10 kilometres felt impossible to me. Not difficult — impossible. And now I'm training for it. That is proof of work. Real, physical, undeniable proof that the ceiling I set for myself was not the real ceiling.</p>
      <p>And if I was wrong about that, what else was I wrong about?</p>
      <p>That question is what keeps the boulder moving.</p>
    `
  },
  {
    slug: 'the-failed-cybercafe-interview',
    title: 'THE FAILED CYBERCAFE INTERVIEW',
    topic: 'Personal Growth',
    date: 'Apr 29, 2026',
    readTime: '5 min read',
    substackUrl: 'https://deliberatelybecoming.substack.com/p/the-failed-cybercafe-interview',
    publication: 'deliberately-becoming',
    excerpt: 'I was rejected for a job I thought I was overqualified for.',
    body: `
      <p>I was rejected for a job I thought I was overqualified for.</p>
      <p>I was at home working on building a website that helps people actually learn and apply knowledge. Then I got a call from my elder brother; he had secured me an interview for a cybercafe job. "They just want someone who is computer literate," he said. "At least you will be able to earn some money as you work on your projects."</p>
      <p>As I was walking out of the door ready to go for the interview, I felt quite uneasy. I wasn't afraid of them rejecting me; my actual fear was, what if they accepted me?</p>
      <p>The qualification was, after all, being computer literate. For me, having studied computer science in high school, studied virtual assistant skills for a month, learned four programming languages, and having five live websites shipped, I felt like I had passed the bar by far. I was a superstar, and I was only doing the employer a favor by going to work for them.</p>
      <p>I had never been interested in seeking employment. After all, I didn't have any financial obligations, and I had more time to learn and do other activities I enjoy. For me, the path would be simple: learn to code, build a tool, the tool goes viral, you become rich.</p>
      <p>I can't say that I have failed in this regard, but after shipping five tools, I now know that being rich doesn't happen instantly.</p>
      <p>So for me, the plan was simple: go do the cyber job which is below your standard, earn some money in the process while still building, then quit after your tools start generating money.</p>
      <p>I walked into the interview knowing the job was already mine and I was the best candidate they had.</p>
      <h2>The interview</h2>
      <p>The interview started well. "So you are computer literate," the employer said. I nodded confidently. "So tell me what you know that makes you sure you are computer literate." I listed my qualifications—just some, because I had so many that I couldn't exhaust all of them.</p>
      <p>Then she started asking specific questions, and my confidence level was decreasing with each one.</p>
      <p>"Do you know graphics design? Do you know how to register birth certificates or driving licenses? Have you ever registered someone's insurance?" To all these questions, I answered no.</p>
      <p>These were simple tasks that I didn't think were worth learning, and some I didn't even know people were supposed to know. My focus was on learning the more complex things.</p>
      <p>The interviewer looked me straight in the eye and told me that all the skills I had were not useful for the job. They were not interested in the fact that I could build an AI agent; all they wanted to know was if I could use Canva.</p>
      <p>No matter how much I tried to convince them that I could easily learn these things, they weren't interested in teaching and paying you at the same time.</p>
      <p>And that is how I failed the interview.</p>
      <p>Four months of learning just to be rejected because of skills I could learn in one week.</p>
      <p>But that failure proved even more insightful.</p>
      <h2>What if one day the cage is open but the birds can't fly?</h2>
      <p>I saw this quote on social media and I always liked it. I associated it with the system, or what we call the matrix, and how we're so comfortable with the system that we can't be free. But I see it is applicable in my situation. What if I invest time in learning a skill just to find out that no one is interested in it?</p>
      <p>One thing I walked out of the interview with is the knowledge that just because it took you time to learn a complex topic doesn't mean that everyone will want your service. So I also need to consider the market. There are a lot of things to learn, and I can't learn and perfect every skill. But from now on, I will consider for a moment: Do I benefit from learning this skill, and would someone want to employ me for this skill?</p>
      <p>If it doesn't fit in any of the categories, then it is not a priority. So for me, that means that even as I study coding or understanding machine learning, I still have to set aside some time for understanding the simple, basic tasks that people are willing to pay for.</p>
      <h2>Overconfidence</h2>
      <p>This was a mistake on my part. I was so overconfident that I didn't even take time to do some research and understand what the job actually requires. I would have been more prepared. It certainly didn't help me to know what is really required while doing the interview and answering no to every question with shock. So that was a mistake on my end.</p>
      <h2>Application</h2>
      <p>Firstly, after the interview, I went back to ask what I was supposed to know to be considered qualified. I have decided to spend two weeks learning the basics before I continue with my specialized learning in AI systems.</p>
      <p>Second, I now know that real-world feedback is important. So for every tool I build from now on, I must ship it and find some people to test it. No need for building a perfect tool no one will use.</p>
      <p>This article was based on failure. I know that failure is a part of learning, but that doesn't make it any less painful. But I've learned and will try to apply the lessons. I'm looking forward to writing more success articles in the future.</p>
      <img src="../assets/articles/failure-process.webp" alt="Failure: Fall, Acknowledge, Investigate, Learn, Understand, Realign, Evolve" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
    `
  },
  {
    slug: 'what-i-have-learnt-from-reading-deep-work-by-cal-newport',
    title: 'What I Have Learnt From Reading Deep Work by Cal Newport',
    topic: 'Books',
    date: 'Apr 26, 2026',
    readTime: '7 min read',
    substackUrl: 'https://deliberatelybecoming.substack.com/p/what-i-have-learnt-from-reading-deep',
    publication: 'deliberately-becoming',
    excerpt: 'I have always considered myself a hard worker, but I never felt like I was learning or producing at my optimal rate.',
    body: `
      <img src="../assets/articles/deep-work.webp" alt="Deep Work by Cal Newport" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <h2>Why I Started Reading the Book</h2>
      <p>I have always considered myself a hard worker, but I never felt like I was learning or producing at my optimal rate. I started learning how to build websites immediately after high school. Four hours per day dedicated to learning — two hours in the morning for learning something new, two hours in the evening for doing a project to apply what I had learnt. But I never fully had truly concentrated in the task at hand for the entire two hour period. I would usually get bored after one hour. I had deleted social media so that I would not get distracted, but now I could find myself scrolling through my gallery or just staring at the screen without doing anything meaningful.</p>
      <p>I wanted to learn how to get the most out of my two hour deep work windows. I did some research and found that Deep Work by Cal Newport was the best book for that purpose. After finishing reading the book, I can comfortably say that it has provided me with the answer to my question and a lot of useful insight.</p>
      <h2>What the Book is About</h2>
      <p>The book revolves around the idea of deep work. Activities done in a state of distraction free concentration that push your cognitive abilities to their limits and are hard to replicate. It also describes shallow work, which is the opposite.</p>
      <p>Cal Newport starts by describing what deep work is, he then proceeds to explain why deep work is useful for you to learn and produce at a high level. Once you are fully convinced is when he gives you frameworks to adopt deep work to your daily habits. He gives a number of options and alternatives and the reader chooses which ones they want to adopt. Newport also states some of the challenges facing deep work and some of the ways to cope with them. In this article I'll only cover some of the ideas that stuck with me most and the ones I find most beneficial to me.</p>
      <h2>What Deep Work and Shallow Work Actually Is</h2>
      <p>One of the major things for me was getting to understand what deep work actually is. It is not keeping yourself occupied and trying to look busy all the time.</p>
      <p>Hard work is good but you must ensure that you are doing productive work — you must have produced something at the end.</p>
      <p>For me it was asking myself, how hard is it to automate what I have done and how long would it take to train someone to do it.</p>
      <p>Understanding shallow work was also beneficial. If it doesn't challenge your current abilities, if it doesn't improve your professional skills, if at the end you don't produce anything, then it doesn't matter how hard you worked or how long. It was still shallow work.</p>
      <p>This didn't just help me in coding. I realised my shallow work in boxing training where I was repeating the same easy task over and over and never progressing to other challenging drills, watching podcasts that made me feel like I was learning but without real world application. I decided to stop trying to just look busy and look for activities that were beneficial for me.</p>
      <p>For me that meant reducing the amount of time promoting projects built, to focus more on learning and building better projects, reducing the number of podcasts watched, to write about what I've learnt from them, and not trying to look busy in the boxing gym so that I can learn something each day.</p>
      <p>And right now I'm improving at a faster pace.</p>
      <h2>Embrace Boredom</h2>
      <p>Your concentration when working and how long you can sustain it is not determined at the moment, it is determined by the activities done before. I didn't know that. I believed that one can just summon concentration wherever they wanted. Newport explains that what you do before the work and during breaks is also a key factor in your quality of work.</p>
      <p>One thing I started doing was not using my phone for at least 10 minutes before sitting down to work. It sounds small but the difference is noticeable. When you open social media right before working, your brain is already in a state of constant novelty-seeking — every scroll brings something new, something stimulating. Then you sit down to work and the task feels dull by comparison. You haven't even started and you're already losing.</p>
      <p>The same applies to breaks. When you feel tired or notice the first hint of distraction, the instinct is to reach for your phone. I'd argue that is the worst thing you can do. A better approach is to sit with the discomfort for five minutes before giving in. Most of the time the urge passes but even if it doesn't pass then it is still okay. What you're actually doing is training your brain to not surrender at the first sign of boredom. Every time you decide to resist the temptation is rewiring the brain.</p>
      <p>If you do take a break and watch videos, each clip arriving with a new face, a new sound, a new idea, you've reset your dopamine baseline to expect constant stimulation. When you return to work, the single task in front of you cannot compete. That is why after a stimulating break the work feels like hell. You didn't rest your brain. You overfed it.</p>
      <h2>A Deep Life is a Meaningful Life</h2>
      <p>This is where Newport moves beyond productivity and makes a philosophical argument, and it is the part of the book that stuck with me the most.</p>
      <p>When you are fully concentrated on a single task, you are by definition closed off to distraction. And in the world we are living in right now, distraction is not neutral. The social media ecosystem is built on volume and most of that volume is negative. The more you are open to distraction, the more you are exposed to information that does nothing for you, and a lot of it quietly damages your mood and your outlook without you realising it.</p>
      <p>So concentration is not just a productivity tool. It is a filter. It protects you from the noise. And beyond protection, it provides something deeper — meaning.</p>
      <p>When you are working towards something, immersed in it, your mind is not idle. And an idle mind is the devil's workshop. This is not just a proverb, it is a real and observable thing. The moment you have nothing to focus on, the mind reaches for something, and it rarely reaches for something good.</p>
      <p>Newport says in the book, I will live the deep life because it is the most meaningful life there is. When I read that, it didn't feel like the conclusion of a productivity book. It felt like a life principle. And that is what I am taking from it — not just a framework for getting more done, but a reason to be more intentional about where I direct my attention, because where your attention goes, your life follows.</p>
    `
  },
  {
    slug: 'building-inkdraft-an-ai-writing-tool-that-respects-the-writer',
    title: 'Building Inkdraft: An AI Writing Tool That Respects the Writer',
    topic: 'Building',
    date: 'Apr 14, 2026',
    readTime: '5 min read',
    substackUrl: 'https://codeandsystems.substack.com/p/building-inkdraft-an-ai-writing-tool',
    publication: 'code-system',
    excerpt: 'One of the most frustrating trends in AI-assisted writing is that AI always seems to replace your voice rather than improve it.',
    body: `
      <p>One of the most frustrating trends in AI-assisted writing is that AI always seems to replace your voice rather than improve it.</p>
      <p>AI tools can generate entire articles in seconds, but they lack one thing: the human touch. They lack the biases, opinions, and conviction—the very things that make writing human.</p>
      <p>So, I built Inkdraft—a writing assistant designed around a simple principle:</p>
      <p>The writer's voice remains sacred.</p>
      <p>This article breaks down the technical architecture, design decisions, and trade-offs behind building the project.</p>
      <h2>The Problem</h2>
      <p>I like writing on pen and paper before scanning and publishing my articles. After writing, I like to feed my articles to ChatGPT to correct grammatical errors and remove repetitions, but this approach had one main challenge: improving clarity without losing the writer's voice.</p>
      <p>I decided to test different writing platforms to find a solution.</p>
      <p>Some platforms focus heavily on AI generation (similar to modern AI writing tools), while others focus on editing but lack intelligent assistance.</p>
      <p>I wanted to build something that combines: OCR (Handwriting → Text), AI-assisted refinement, and full control for the writer.</p>
      <h2>System Overview</h2>
      <p>The architecture is intentionally simple.</p>
      <p>Frontend: HTML, CSS, JavaScript (no frameworks), single-page interface, Progressive Web App (PWA).</p>
      <p>Backend: Serverless functions (Vercel), two endpoints: /api/ocr and /api/generate.</p>
      <p>AI Layer: Google Gemini API.</p>
      <h2>Key Design Philosophy</h2>
      <p>1. AI as an Assistant, Not an Author</p>
      <p>The author now has full control over the writing process. Instead of letting the AI rewrite everything, I constrained it: it must preserve the original meaning, it must not introduce new ideas, and it must highlight uncertainty instead of guessing.</p>
      <p>This is enforced through strict system prompts.</p>
      <h2>OCR Pipeline</h2>
      <p>The OCR system is the core feature.</p>
      <p>Step 1: Image → Text Extraction. The system sends the handwritten image to the AI model. Instead of naive OCR, the model is instructed to: extract text faithfully, mark unclear words using a different color, and underline wrongly spelled words.</p>
      <p>Step 2: Grammar Analysis (Not Rewriting). If the writer commands the AI to generate without entering a prompt, it only checks for grammatical errors. It improves grammar, preserves tone, and avoids rewriting the style.</p>
      <p>This avoids the common issue where AI tools "over-edit" content.</p>
      <h2>API Design</h2>
      <p>/api/ocr handles image input, text extraction, and grammar refinement. Key idea: separate transcription from improvement.</p>
      <p>/api/generate handles AI-assisted suggestions and controlled transformations. Example constraints: no full rewrites, no hallucinated content, and maintain the original structure.</p>
      <h2>Why Serverless?</h2>
      <p>I chose Vercel serverless functions because they require zero infrastructure setup and are ideal for early deployment. However, this comes with trade-offs.</p>
      <p>Downsides: harder to implement rate limiting. However, this is just an MVP and will be improved for scale over time.</p>
      <h2>Frontend Architecture</h2>
      <p>Everything currently lives in a single page: index.html.</p>
      <p>This was intentional for speed and to maintain minimalism, ensuring a friendly interface where the writer only focuses on the material they are writing.</p>
      <p>PWA Implementation: the app is installable as a Progressive Web App. This allows for partial offline access and an app-like experience.</p>
      <h2>Challenges</h2>
      <p>1. AI Reliability — AI models tend to hallucinate and try to over-correct text. I solved this by engineering strict prompts and multi-step processing.</p>
      <p>2. OCR Accuracy — Handwriting is inconsistent and may sometimes be very hard to read. Instead of forcing efficiency, I decided to embrace the uncertainty. Text that cannot be clearly read is displayed in a different color so the user can correct it if it was interpreted wrongly.</p>
      <p>3. Token Limits — The Gemini API key has certain usage limits. Right now, it is sustainable as an MVP, but I will eventually need to add usage limits.</p>
      <h2>What Makes Inkdraft Different?</h2>
      <p>Unlike typical AI tools: it does not try to write for you, it preserves your voice, and it exposes uncertainty instead of hiding it.</p>
      <p>This is meant to get the most benefit out of AI-assisted writing while still maintaining the human aspects of the art of writing.</p>
      <h2>Conclusion</h2>
      <p>Inkdraft is not just a writing tool—it's an experiment in human-AI collaboration. Instead of replacing creativity, it aims to protect and enhance it.</p>
      <p>The biggest lesson from building this: "The real challenge isn't building AI features—it's controlling them."</p>
      <p>Try the project <a href="https://inkdraft-a-writers-best-friend.vercel.app/" target="_blank" rel="noopener">here</a>.</p>
      <p>Most developers focus on what AI can do. The real leverage comes from deciding what AI should not be allowed to do.</p>
      <img src="../assets/articles/inkdraft.webp" alt="Inkdraft — Your words, exactly as written." style="width:100%;border-radius:8px;margin:1.5rem 0;" />
    `
  },
  {
    slug: 'you-dont-have-to-suffer-to-grow',
    title: 'You Don\'t Have to Suffer to Grow',
    topic: 'Personal Growth',
    date: 'Apr 11, 2026',
    readTime: '5 min read',
    substackUrl: 'https://deliberatelybecoming.substack.com/p/you-dont-have-to-suffer-to-grow',
    publication: 'deliberately-becoming',
    excerpt: 'Does the process of self-development have to be a constant journey of discomfort and unhappiness, or can it actually be a happy one?',
    body: `
      <p>Does the process of self-development have to be a constant journey of discomfort and unhappiness, or can it actually be a happy one?</p>
      <p>Recently, I watched a Huberman Lab podcast in which he was interviewing David Goggins.</p>
      <p>It was a very interesting conversation since we got a chance to dive deep into the mentality behind David Goggins. I, for one, have always admired his transformation and, at the beginning of this year, would watch his videos in search of motivation. But in this particular podcast, he talks about the actual life of David Goggins, not just what we see in the highlight reel.</p>
      <h2>The "No Carrot" Philosophy</h2>
      <p>David Goggins talked about a lot of things that resonated with me (considering I'm also on a journey of self-development) but one. Most of the time, as he was talking about doing the hard things and accepting criticism, I would say to myself, "He's describing exactly how I feel."</p>
      <p>But one idea struck me most.</p>
      <p>He talks about how the normal person would view his activities as suffering (which I relate to) and how he doesn't have a reward to get things done—how his days are "all stick and no carrot."</p>
      <p>This is where I saw a contradiction. Although some of the things I do may seem to others like suffering, I have found a way to be happy and extract meaning from what I do.</p>
      <p>I know that David Goggins is very successful using his current method. My aim is not to contradict it. Mine is to show you that the process of self-development doesn't have to be constant suffering. It can also be a happy one.</p>
      <p>I have found a way to turn the hardship of doing the hard things into a framework to extract happiness—a process I call The Ideal Life Philosophy.</p>
      <h2>The Ideal Life Philosophy</h2>
      <p>This is the framework I use. Although adopting it doesn't mean that it will keep you smiling every moment of the day, it will help you to not view self-development as suffering.</p>
      <p>It is a simple thought process and requires you to only ask yourself three questions:</p>
      <p>What would my ideal life currently look like?</p>
      <p>What would my ideal life in the next 10 years look like?</p>
      <p>How can I turn my current life into my ideal life?</p>
      <h2>1. What would my ideal life currently look like?</h2>
      <p>This first question requires you to let your imagination run wild.</p>
      <p>Visualize yourself in an environment where you have no limitations, be it social, physical, or financial.</p>
      <p>What would need to happen for you to consider it a perfect life? What items would you own, how would your body look, and what would your day look like?</p>
      <p>I can't actually remember my specific answer when I did this two months ago (you too won't remember it after answering the third question and practicing it for a while). The point isn't to remember the answer. But I know it looked something like being muscular, wearing designer clothes, attending a lot of parties, and traveling the world. Living like royalty.</p>
      <p>During this process, you realize that you are not royalty today; you probably won't magically become royalty tomorrow. You accept that you cannot realistically live the ideal life you have in your mind for today.</p>
      <p>And that is the point: realizing that there is a better version of your life you could be living, but you can't live it NOW due to your current limitations.</p>
      <h2>2. What would my ideal life in the next 10 years look like?</h2>
      <p>This question also requires a wild imagination. Picture the limitless version of yourself in the next ten years. It will not look the same as your current limitless version, since you will be older and have different aspirations.</p>
      <p>For me, my version would be a 29-year-old businessman. Having a big tech company. Working a few hours a day but spending more time with my wife and children. I would still train boxing but not competing professionally—maybe as a hobby or as a coach. I don't think I will be going to parties or wearing designer clothes much.</p>
      <p>This is less painful than the first question since you are looking at a distant future which is not guaranteed, and which you feel you can control to some degree.</p>
      <h2>3. How can I turn my current life into my ideal life?</h2>
      <p>This question requires you to come back into reality and accept your current life with all its limitations. Accept that you cannot live your version of an ideal life now, but you can live your ideal life in the next ten years. You need to work backward from your ideal life in ten years to come to your current life.</p>
      <p>Now ask yourself: how should my current life look so that I can be able to live my ideal life in the next ten years?</p>
      <p>Define clearly the activities and the routine you should have. That becomes your ideal life.</p>
      <p>For me, it involves learning programming languages and building tools, boxing training, reading books, and learning about entrepreneurship. I mapped this into a one-year master plan and narrowed it down to a daily system. And this allows me to live my ideal life now because I know I'm building towards something.</p>
      <p>It has basically allowed me to become limitless within my current limitations.</p>
      <h2>Happiness and Meaning</h2>
      <p>This framework doesn't mean that I'm usually smiling during morning runs, writing code, or getting hit during sparring. But I no longer view these as suffering or a burden I have to carry. I see them as actions aligned with a particular goal. This also requires frequent reviews to ensure your actions are still aligned with your goals. Once you do this, it also helps you not get disappointed when you don't see results early on.</p>
      <p>For me, looking at myself in the mirror every evening knowing that I did everything in the best possible way—it's priceless.</p>
    `
  },
  {
    slug: 'building-my-first-ai-agent-a-habit-tracking-system',
    title: 'Building My First AI Agent: A Habit Tracking System',
    topic: 'Building',
    date: 'Apr 07, 2026',
    readTime: '10 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/building-my-first-ai-agent-a-habit',
    publication: 'code-system',
    excerpt: 'I decided that instead of using different AI models for different tasks, why don\'t I create an AI agent which automates most of the tasks that I do?',
    body: `
      <p>I've been using AI for quite a while now, and I've been using different models for different tasks. So, I decided that instead of using different AI models for different tasks, why don't I create an AI agent which automates most of the tasks that I do? I wanted to build an AI agent that could automate almost every aspect of life.</p>
      <p>Not just reminders. Not just tracking. Something closer to an operating layer for daily behavior—something that could observe what I do, log it, analyze it, and eventually help optimize my life over time.</p>
      <p>But I didn't build that.</p>
      <p>At least not yet.</p>
      <p>What I built instead is smaller, more focused, and in some ways more important than the original idea.</p>
      <p>I built a habit tracking system.</p>
      <p>But not a normal one.</p>
      <p>This is a chat-based habit tracker that feels like WhatsApp, where I can log my actions naturally, see my entire behavioral history, and generate patterns over time through analytics.</p>
      <p>And more importantly, it became my first real step toward building an AI agent.</p>
      <h2>The Idea: An AI Agent for Life</h2>
      <p>The original vision was ambitious.</p>
      <p>I've always been fascinated by the idea of AI agents—systems that don't just respond to inputs but actively participate in shaping decisions, routines, and outcomes.</p>
      <p>I wasn't thinking about tools.</p>
      <p>I was thinking about systems.</p>
      <p>A system that could: track my habits automatically, understand patterns in my behavior, store long-term personal data, help optimize routines without friction, and eventually act like a personal operating system.</p>
      <p>The idea was simple in theory:</p>
      <p>If you can understand everything a person does daily, you can begin to optimize their life.</p>
      <p>But the moment I started breaking that idea down, I realized something important.</p>
      <p>It wasn't one project.</p>
      <p>It was multiple complex systems bundled into one.</p>
      <p>And I was still at the beginning.</p>
      <p>So I made a decision.</p>
      <p>I chose to start small.</p>
      <h2>Why I Started With Habits</h2>
      <p>If you want to build anything related to life optimization, habits are the most fundamental unit.</p>
      <p>Not goals. Not motivation. Not systems.</p>
      <p>Habits.</p>
      <p>Because everything else is built on repetition.</p>
      <p>You don't get fit from deciding to go to the gym once.</p>
      <p>You don't become a developer by watching one tutorial.</p>
      <p>You don't become disciplined by reading about discipline.</p>
      <p>You become what you repeatedly do.</p>
      <p>So I narrowed the scope.</p>
      <p>Instead of trying to build an AI agent that understands everything, I built something that understands one thing deeply: daily behavior.</p>
      <p>And I started with one question:</p>
      <p>How can I make habit tracking so frictionless that I never avoid it?</p>
      <h2>The Core Problem: Tracking Is Too Friction Heavy</h2>
      <p>Most habit tracking apps fail for a simple reason.</p>
      <p>They require effort.</p>
      <p>Open the app. Find the habit. Tap a button. Log an entry. Repeat every day.</p>
      <p>This might not sound like much, but psychologically it creates friction.</p>
      <p>And friction kills consistency.</p>
      <p>I didn't want a system that I had to "remember to use."</p>
      <p>I wanted something that fits into how I already behave.</p>
      <p>And the most natural interface I already use every day is chat.</p>
      <p>So I asked a simple question:</p>
      <p>What if logging habits felt like sending a message?</p>
      <h2>The Solution: A Chat-Based Habit System</h2>
      <p>That question changed the entire direction of the project.</p>
      <p>Instead of building a traditional app interface, I built a chat system that mimics WhatsApp.</p>
      <p>The core idea is simple:</p>
      <p>I don't "log habits."</p>
      <p>I just talk.</p>
      <p>For example: "I ran 5km today", "Did 50 pushups", "Studied React for 2 hours."</p>
      <p>The system interprets the message and stores it in the database as a structured habit entry.</p>
      <p>No forms. No buttons. No friction.</p>
      <p>Just input → storage → analysis.</p>
      <p>This alone made the system feel fundamentally different from anything I had used before.</p>
      <p>Because it stopped feeling like an app.</p>
      <p>It started feeling like a conversation with myself.</p>
      <h2>How It Works Under the Hood</h2>
      <p>Even though the interface is simple, the system behind it is structured.</p>
      <p>The architecture is built around three core layers.</p>
      <p>1. Input Layer (Chat Interface) — This is the front-end experience. A WhatsApp-style chat UI where every message is treated as a habit entry, natural language input is accepted, and minimal interaction design is used. The goal here is not complexity. It is speed. The faster I can log something, the more likely I am to do it consistently.</p>
      <p>2. Data Layer (Habit Storage) — Once a message is sent, it is processed and stored in a database. Each entry includes: habit name or inferred category, timestamp, raw input message, and structured metadata. This allows the system to not just store data, but organize it. Over time, this becomes a personal behavioral dataset. A timeline of everything I do.</p>
      <p>3. Analytics Layer (Pattern Detection) — This is where things start to feel intelligent. The system can show all logged habits over time, identify frequency patterns, track consistency, and generate basic behavioral insights. For example: which habits are most consistent, which days are most productive, and where gaps in behavior occur. It's not "AI" in the advanced sense. But it is the beginning of structured intelligence built on personal data.</p>
      <h2>The Dashboard: Seeing My Behavior Over Time</h2>
      <p>The second part of the system is the dashboard.</p>
      <p>If the chat interface is about input, the dashboard is about reflection.</p>
      <p>It allows me to: view all past logs, see habits grouped over time, track consistency visually, and understand behavioral trends.</p>
      <p>This is important because input alone is not enough.</p>
      <p>Without feedback, behavior doesn't improve.</p>
      <p>The dashboard turns raw data into something visible.</p>
      <p>And visibility creates awareness.</p>
      <p>Awareness creates change.</p>
      <h2>The Unexpected Insight: Simplicity Was the Real Breakthrough</h2>
      <p>At some point during development, something unexpected happened.</p>
      <p>The system started working really well.</p>
      <p>It was fast. It was clean. It was usable every day.</p>
      <p>And most importantly—it didn't feel like something I needed to "fix."</p>
      <p>That's when I faced a strange problem.</p>
      <p>I didn't want to keep modifying it.</p>
      <p>Not because I lacked ideas.</p>
      <p>But because it felt complete.</p>
      <p>There was a moment where I realized:</p>
      <p>If I keep expanding this into a full life automation system, I will lose what makes it powerful.</p>
      <p>It would become complex. Confusing. Unfocused.</p>
      <p>And ironically, less useful.</p>
      <p>So I stopped expanding it.</p>
      <p>Not because it was finished in an absolute sense, but because it was finished in a functional sense.</p>
      <h2>The Temptation to Build Everything</h2>
      <p>The original idea was still in my mind.</p>
      <p>I still wanted to build: task automation, calendar integration, goal tracking, AI decision-making, and life-wide optimization.</p>
      <p>But the more I thought about it, the more I realized something important:</p>
      <p>Bigger does not always mean better.</p>
      <p>There is a trap in system design where you try to solve everything at once.</p>
      <p>But when you do that, you often lose clarity on what the system is actually supposed to do.</p>
      <p>And in this case, the purpose was simple: make habit tracking effortless and meaningful.</p>
      <p>Everything else was secondary.</p>
      <h2>Why I Stopped Expanding It</h2>
      <p>There were two main reasons.</p>
      <p>1. Product Clarity — If I added too many features, users would no longer understand what the system is. Is it a habit tracker? Is it a life assistant? Is it a productivity tool? Confusion kills adoption. A system must have identity.</p>
      <p>2. Personal Discipline — The second reason was more personal. I realized I was falling into a common trap: the desire to keep building instead of observing what I had built. But real systems need time to breathe. They need usage data, not just features. So I made a decision: stop building. Start using.</p>
      <h2>The Bigger Idea: This Is Not the Final Product</h2>
      <p>This project is not the final form of anything.</p>
      <p>It is not a complete AI agent.</p>
      <p>It is not a life automation system.</p>
      <p>It is something much simpler.</p>
      <p>It is a prototype. A first attempt. A proof of concept that behavior can be captured through natural interaction.</p>
      <p>And more importantly, it is a foundation.</p>
      <p>Because once you can reliably capture behavior, store behavior, and analyze behavior — you are no longer building an app.</p>
      <p>You are building a behavioral system.</p>
      <p>And that is where AI agents actually begin.</p>
      <h2>What I Learned About Building Systems</h2>
      <p>This project taught me something that applies far beyond coding.</p>
      <p>Most people think building is about adding features.</p>
      <p>But real building is about removing friction.</p>
      <p>The best systems are not the ones that do the most.</p>
      <p>They are the ones that get used the most.</p>
      <p>And usage only happens when: it is easy, it is fast, and it fits into existing behavior.</p>
      <p>Everything else is secondary.</p>
      <h2>Where This Is Going Next</h2>
      <p>This habit system is only the beginning.</p>
      <p>The next step is not to expand it randomly.</p>
      <p>The next step is to deepen it.</p>
      <p>Possible future directions include: better natural language processing for logs, smarter behavioral pattern detection, integration with external data sources, more personalized insights over time, and lightweight AI assistance for reflection.</p>
      <p>But for now, the focus is simple: use it. Improve it based on real behavior. Not assumptions.</p>
      <h2>Final Thoughts</h2>
      <p>When I started this project, I thought I was building an AI agent.</p>
      <p>But what I actually built was something much smaller—and much more real.</p>
      <p>A habit tracking system that works.</p>
      <p>And sometimes, that is how real systems begin.</p>
      <p>Not with completeness.</p>
      <p>But with clarity.</p>
      <p>This is my first step toward building AI systems that understand human behavior.</p>
      <p>Not in theory.</p>
      <p>But in practice.</p>
      <p>And maybe that is what matters most.</p>
      <img src="../assets/articles/apela-habits.webp" alt="Apela — Habit Tracking Dashboard" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
    `
  },
  {
    slug: 'sometimes-patience-is-the-best-strategy',
    title: 'Sometimes patience is the best strategy',
    topic: 'Personal Growth',
    date: 'Apr 04, 2026',
    readTime: '10 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/sometimes-patience-is-the-best-strategy',
    publication: 'deliberately-becoming',
    excerpt: '"When nothing seems to help, I go and look at a stonecutter hammering away at his rock perhaps a hundred times without as much as a crack showing in it." — Jacob Riis',
    body: `
      <p>"When nothing seems to help, I go and look at a stonecutter hammering away at his rock perhaps a hundred times without as much as a crack showing in it. Yet at the hundred and first blow it will split in two, and I know it was not that blow that did it, but all that had gone before." - Jacob Riis</p>
      <p>I'm writing this article two days after attending a boxing tournament where most members of our gym participated. I started training in January, and this is now three months into my training.</p>
      <p>Five weeks after starting, I asked my coach when I would get the chance to compete. He told me that if I trained well enough, I could participate in a tournament happening at the end of March. But then, one month before the tournament, he told me I was not yet ready.</p>
      <p>I challenged him. I told him I still had one month to train.</p>
      <p>So for the entire month of March, I pushed myself. I woke up early, did my morning runs, shadow boxed, trained hard, and gave everything I had in sparring.</p>
      <p>But after one month of intense training, I still wasn't chosen to compete. He told me again that I was not yet ready.</p>
      <p>Coming back from the tournament is when I realized something: I had wasted a whole month.</p>
      <p>Not because I didn't compete—but because I didn't learn anything that month.</p>
      <p>I didn't improve anything. I was just punching harder in sparring, throwing more punches, trying to land more combinations. And every time someone landed a clean punch on me, my response was the same—try harder. More punches, more aggression.</p>
      <p>And all that did was get me hit more.</p>
      <p>When I started boxing I used to treat every training session like a study session. I would focus on one thing to improve per week—footwork, head movement, speed—and actually improve. But this past month, I wasn't learning. I was trying to prove something.</p>
      <p>I was trying to prove that I was capable of fighting.</p>
      <p>And in doing that, I stopped improving.</p>
      <p>That's when I realized something.</p>
      <p>Maybe I wasn't doing anything wrong.</p>
      <p>Maybe there was nothing to fix.</p>
      <p>Maybe the best thing I could have done was simply allow myself more time.</p>
      <h2>Patience as the best optimization</h2>
      <p>We are told that we should work harder. We all know that we should be disciplined. We all know that we should be consistent. And we all know that we should work out to improve our bodies or keep them healthy.</p>
      <p>But I've realized that it's not just a matter of discipline.</p>
      <p>You can feel the motivation to start, build the discipline to continue, and still reach a point where you're putting in the work but not seeing progress.</p>
      <p>I've been thinking about this through my boxing experience, and I think I've come to my own conclusion.</p>
      <p>I am an optimizer. I like to experiment, look for feedback, and improve. I'm always looking for areas where I can do better. I do this in coding, reading, and even in my projects and systems.</p>
      <p>I've always believed that you can achieve more by doing less—by doing the right things.</p>
      <p>But what happens when you're doing nothing wrong?</p>
      <p>Sometimes you have the right form, the right schedule, and you're consistent.</p>
      <p>So how do you optimize a system that is already running well and has no errors?</p>
      <p>For me, the optimization I added to that system was patience.</p>
      <p>I realized that there are things you can optimize to make results come faster, and there are activities where you simply have to pay the time tax and wait.</p>
      <p>You can't bake a cake in two minutes by turning up the oven. You'll burn the outside and leave the inside raw.</p>
      <p>That was my realization.</p>
      <p>In boxing, you cannot become a master in one month just by optimizing.</p>
      <p>This is also true for my writing. It's been two months since I started writing articles, and I'm comfortable with the fact that you cannot become a great writer in that time.</p>
      <p>The same applies to my workouts.</p>
      <p>There were days when, after training, I would spend ten minutes in front of the mirror looking for any sign of muscle growth.</p>
      <p>And only recently did I start seeing my muscles become more defined.</p>
      <p>Truthfully, that was one of the happiest moments in my fitness journey—because I finally saw progress.</p>
      <p>I've now accepted that in some activities, you can find ways to optimize.</p>
      <p>But in others, the best optimization you can make is patience—doing the work consistently and allowing results to come with time.</p>
      <h2>The power of compounding effort</h2>
      <p>We all have expectations and aspirations, and sometimes you may work very hard to achieve your goals, but you don't see your effort produce the expected results.</p>
      <p>This is sometimes called the valley of disappointment. It is the stage between your starting point and your breakthrough, where no effort seems to be bearing results.</p>
      <p>And the reason is not always a lack of discipline or commitment. Sometimes it doesn't even require optimization or improvement, and it doesn't mean that you're failing.</p>
      <p>It simply requires you to stay consistent and continue what you're doing—and eventually, you will reach your breakthrough.</p>
      <p>I think this valley of disappointment is the toughest stage for anyone pursuing growth, because it is an invisible phase. You are not seeing any progress, and you don't know if it's working.</p>
      <p>I like using the analogy of melting ice from negative ten degrees.</p>
      <p>When you increase the temperature from negative ten to negative five, there is still no visible change. From negative five to negative three to negative one, still no change. But when it moves from zero to one, that's when you start to see visible change.</p>
      <p>And just like that, it doesn't mean that the earlier increases—from negative ten to negative two—were not producing results. It was all accumulated effort.</p>
      <p>So passing through the valley of disappointment means persevering—continuing to move forward and waiting to see the light at the end of the tunnel, even when you can't yet see the slightest hint of it, and just letting your efforts compound.</p>
      <img src="../assets/articles/valley-of-disappointment.webp" alt="Valley of Disappointment — Results over Time" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <h2>Finishing is a superpower</h2>
      <p>Nowadays, we expect quick feedback, and most people are selling the end product. No one tells you about the invisible phase between the starting point and success.</p>
      <p>So when we reach that stage—where you're not seeing anything and you're not sure whether you're succeeding or failing—we usually interpret it as failure and start looking for a better option.</p>
      <p>Right now, we are in an environment where people are selling superhuman abilities or promising to make you better than everyone else. You see videos saying: do these five exercises to get superhuman reflexes, do this to read anyone in seconds.</p>
      <p>But I think in today's environment, in our society and even in the coming generation, the greatest superpower a person can have is the ability to finish what you started.</p>
      <p>Most of us don't fail because we didn't work hard or didn't focus. Most of us fail because we didn't pursue what we started long enough to succeed.</p>
      <p>You can see this everywhere—people learning new languages, starting new sports. Even I accept that we want to see success early, we want feedback.</p>
      <p>But being able to persist—doing something consistently while others keep switching—I think that is one of the most valuable advantages in today's environment.</p>
      <p>We are told to pivot fast. But pivoting often just takes you back to the start of a new valley of disappointment.</p>
      <p>When you pivot, you reset the compounding clock to zero. All the progress you had made—you leave it behind and start again.</p>
      <p>If you do this repeatedly, you end up with many half-built bridges.</p>
      <p>If you want to cross from one side of a river to the other, the person who commits to building one bridge will eventually reach the other side. But if you keep switching, you end up with five half-built bridges—and you're still standing on the same side of the water.</p>
      <p>Still, I know it's easier said than done.</p>
      <p>Some activities are easier to be patient with than others. Things like boxing or working out have clear, biological feedback—you know they will eventually yield results.</p>
      <p>But starting a business, learning a new language, or taking a course—there is no guaranteed outcome.</p>
      <p>So I won't just say "be patient" blindly.</p>
      <p>Because sometimes, you do need to pivot.</p>
      <h2>Deterministic systems</h2>
      <p>Deterministic systems are systems where outcomes are proven—by biology, science, or simply the rules of life.</p>
      <p>You know that if you work out, you will eventually build muscle. Just like if you step off a ledge, gravity will act on you.</p>
      <p>So in activities like working out or boxing, I know that they are certain to produce results.</p>
      <p>In these kinds of activities, I see myself as a stonecutter, hammering at the rock. Each strike is contributing to the moment it finally breaks.</p>
      <p>In deterministic systems, every effort moves you closer to the endpoint, and you are certain that the outcome will come because it is proven.</p>
      <p>So in these systems, you cannot justify quitting after one month just because you didn't see progress.</p>
      <p>Pivoting cannot be considered a smart decision when you quit something like working out after one month simply because you didn't see results.</p>
      <h2>Probabilistic systems</h2>
      <p>A probabilistic system is one where the outcome is not guaranteed. Things like starting a business, building a startup, writing, or even freelancing—success is not certain.</p>
      <p>In these systems, there are many factors beyond consistency and time. Things like luck, the market, what people value, and what they are interested in.</p>
      <p>So sometimes, in business—or in something like freelancing—you may need to pivot. Maybe you're in the wrong niche, or you're using the wrong tool.</p>
      <p>Sometimes, you also need to optimize.</p>
      <p>Because you may think you are a stonecutter hammering at a rock, but in reality, you might be trying to break a diamond with a wooden mallet.</p>
      <p>So yes, patience is key.</p>
      <p>But after hitting a hundred or even two hundred times, you may need to step back and look for microfractures.</p>
      <p>And if you don't see any signs of the stone breaking, maybe it's time to find a better tool—or a different stone.</p>
      <h2>When to stay vs When to pivot</h2>
      <p>I cannot give you a clear framework for when to stay or when to pivot, because I believe it all depends on your judgment.</p>
      <p>Some people will thrive in the same area you decide to leave, and maybe you will thrive elsewhere.</p>
      <p>So I won't just tell you to be patient and wait for improvement. Sometimes you may not be in the right niche, and you need to find what works for you. Other times, you may not be doing everything right, and there are areas you need to optimize.</p>
      <p>But one thing that can help you decide whether to stay consistent or shift—because there's no point holding on to a sinking ship—is understanding sunk cost vs opportunity cost.</p>
      <p>Ask yourself: if I were to start this activity today, knowing everything I know now, would I still choose it? Or would I choose something else?</p>
      <p>Ask yourself: do I see progress? Do I see even a 1% improvement, or am I just stagnating?</p>
      <p>And then consider the opportunity cost—what am I missing out on by continuing to pursue this one thing?</p>
      <p>Because I can't just say "be patient" blindly.</p>
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
      <p>This doesn't mean you will see it immediately. The tunnel itself is part of the process.</p>
      <p>And once you accept that this phase—where nothing seems to be happening—is part of the process, you begin to understand that time is required.</p>
      <p>Even though there are situations where you need to pivot, the cost of starting over is often higher than the cost of pushing through.</p>
      <p>Because when you push through, you compound your efforts. When you start over, you reset that compounding.</p>
      <p>I believe that a person who commits to something consistently—even for just two years—will achieve more than someone who keeps searching for better options in that same period.</p>
      <p>So patience is the best strategy.</p>
      <p>Even though sometimes you may need to pivot, take your time and choose what is worth pursuing to you—what you are willing to endure, what you are willing to struggle for, even when progress is not visible.</p>
      <p>Because in the end, it comes down to what matters to you.</p>
      <p>And once you choose it, pursue it to the end.</p>
    `
  },
  {
    slug: 'designing-a-neuroplasticity-training-system',
    title: 'Designing a Neuroplasticity Training System: From Theory to Implementation',
    topic: 'Building',
    date: 'Mar 31, 2026',
    readTime: '9 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/designing-a-neuroplasticity-training',
    publication: 'code-system',
    excerpt: 'After reading The Brain That Changes Itself, I came to a powerful realisation: our brains are not fixed and we can improve our cognitive abilities through deliberate practice.',
    body: `
      <p>After reading The Brain That Changes Itself, I came to a powerful realisation:</p>
      <p>Our brains are not fixed and we can improve our cognitive abilities through deliberate practice.</p>
      <p>I decided to test this theory directly.</p>
      <p>I incorporated deliberate neuroplasticity exercises into my daily routine: mental arithmetic, chess and using my non-dominant hand.</p>
      <p>After just three months of doing these exercises, I observed improvements:</p>
      <p>I was faster in mental calculations, my ELO in chess was increasing, I could write comfortably with my left hand (although still not as good as my right hand).</p>
      <p>This proved to me that we can improve cognitive functions through deliberate practice.</p>
      <p>I decided to improve other functions as well and this is where I saw the problem.</p>
      <h2>The Problem</h2>
      <p>While the concept of neuroplasticity is well established, there is no clear, structured system for training.</p>
      <p>Most exercises online are more like games and more optimised for interaction than for real improvements.</p>
      <p>I wanted a way to train deliberately, not randomly.</p>
      <p>A system where each exercise is mapped with a specific function, you know what they improve in real life and they are optimised for maximum benefit and improvements on the users side.</p>
      <p>After searching for existing platforms and finding no solution that met this need, I decided to build my own.</p>
      <h2>Where existing solutions fail</h2>
      <p>After experimenting with several neuroplasticity platforms and cognitive training games, I began to notice a problem in what they are optimised for.</p>
      <p>From a neuroplasticity perspective, effective cognitive change requires three core conditions: focused attention, controlled duration (not too short to be ineffective, not too long to cause fatigue), and clear feedback on performance.</p>
      <p>Without these, training just becomes entertainment.</p>
      <p>Most existing platforms fail to meet these conditions in meaningful ways.</p>
      <h2>1. They are optimised for engagement rather than neuroplastic change</h2>
      <p>Many platforms are designed around progression loops — levels, streaks, scores, and difficulty scaling. While this improves engagement, it often shifts the focus away from deliberate cognitive training.</p>
      <p>This leads to users becoming better at the game itself, but not experiencing improvements in real-world tasks.</p>
      <p>Some exercises require interaction-heavy interfaces (constant clicking, tapping, or progression prompts), which disrupt sustained focus. However, true neuroplastic training often requires uninterrupted attention and internal feedback rather than constant external stimulation.</p>
      <h2>2. The feedback systems are often misaligned with real world cognition</h2>
      <p>While some tasks provide immediate in-app feedback, they rarely connect performance to real-life cognitive functions.</p>
      <p>This creates a gap between "I improved my score" versus "I improved my ability to think, recall, or process information in real situations."</p>
      <p>Without this bridge, improvement remains isolated within the platform and does not reliably translate to everyday activities.</p>
      <h2>3. Cognitive improvements are not described clearly</h2>
      <p>Most platforms label training in terms such as: working memory, spatial reasoning, processing speed.</p>
      <p>While accurate, these terms are not clear for most users.</p>
      <p>For someone without a neuroscience background, it is often unclear how these translate into lived experience.</p>
      <p>For example: "working memory" is more meaningfully understood as holding thoughts and information in mind, just like doing calculations in your head. "Processing speed" can be understood as formulating responses faster in conversations so that you don't feel like you are "loading" before every response.</p>
      <p>Without this, users may not fully understand what they are improving or why it matters.</p>
      <p>These limitations led me to build my own system — one designed not for engagement, but for deliberate neuroplastic change, grounded in focused practice, meaningful feedback, and real-world cognitive translation.</p>
      <h2>The Build</h2>
      <p>I built the system using HTML, CSS, and JavaScript, intentionally keeping the stack minimal to prioritize performance, clarity, and accessibility over complexity.</p>
      <p>My goal was not to create another cognitive "game," but a structured environment optimized for neuroplastic change through deliberate practice.</p>
      <h2>1. Exercise design and selection</h2>
      <p>I curated and implemented 13 core cognitive exercises, each targeting a specific function.</p>
      <p>These exercises were not treated as a game, but as a training platform.</p>
      <h2>2. Progressive difficulty system</h2>
      <p>Every exercise is structured across three levels: Beginner, Intermediate, and Advanced.</p>
      <p>However, difficulty is not static.</p>
      <p>Each task adapts dynamically based on user performance.</p>
      <p>This design is based on the idea that neuroplastic change occurs in the "Goldilocks zone" — a level of difficulty that is neither too easy that it becomes boring nor too hard that it becomes frustrating, but just slightly above current ability.</p>
      <p>As performance improves, the system gradually increases difficulty to maintain challenge. If performance drops, the system reduces difficulty to prevent frustration.</p>
      <p>This ensures the user is consistently operating at the edge of their capability, where learning is most effective.</p>
      <h2>3. Feedback and real-world transfer</h2>
      <p>A key design decision was ensuring that feedback is not purely in-game.</p>
      <p>Instead of optimizing for scores or engagement loops, each exercise defines the cognitive function improved and some examples of what they improve in the real world.</p>
      <p>This allows users to interpret progress beyond the interface — for example, improved recall in conversation or better sustained attention while working.</p>
      <h2>4. Design philosophy: effectiveness over engagement optimization</h2>
      <p>I deliberately avoided common engagement-driven mechanics such as excessive animations, reward loops, and unnecessary interaction prompts.</p>
      <p>The goal was to reduce cognitive noise and allow full focus on the exercise itself.</p>
      <p>The interface is intentionally minimal, ensuring that attention is directed toward performance, not navigation or distractions.</p>
      <h2>5. Final intent</h2>
      <p>While the system resembles a cognitive training game, it is designed as a structured neuroplasticity training environment, grounded in the idea that adaptation happens at the boundary between challenge and ability.</p>
      <p>The objective was not to increase engagement metrics, but to create measurable, transferable improvements in real-world cognitive function.</p>
      <h2>Trade-offs in the system</h2>
      <p>One of the key challenges in designing this system was the limitation of translating certain neuroplasticity exercises into a fully digital, trackable environment.</p>
      <p>Some exercises are mostly physical or the feedback is internally experienced, meaning they cannot be accurately measured through traditional software interactions.</p>
      <p>This created an important design trade-off: accuracy of measurement vs. fidelity of real-world training.</p>
      <h2>1. Physical exercises with no direct digital feedback</h2>
      <p>Certain exercises must be performed in the real world without meaningful digital tracking.</p>
      <p>In these cases, the goal was not to simulate feedback, but to ensure clarity of execution.</p>
      <p>Instead of forcing a tracking system, I focused on designing precise, structured instructions that clearly define: what the user should do, how the exercise should be performed, and what cues or outcomes they should observe.</p>
      <p>In these exercises feedback comes from users observation and self awareness.</p>
      <h2>2. Partially observable cognitive exercises</h2>
      <p>For exercises such as focus training, stroop test, or reading speed exercise, direct tracking is either unreliable or impractical without additional hardware (e.g., webcam).</p>
      <p>Attempting to simulate precision in these cases would introduce false accuracy and shift the system toward engagement optimization rather than meaningful training.</p>
      <h2>3. Self-reported feedback as a design choice</h2>
      <p>To address this limitation, I introduced a simple post-exercise reflection step:</p>
      <p>"How was the difficulty of this exercise?"</p>
      <p>This allows users to self-assess whether the task was too easy, appropriately challenging, or too difficult.</p>
      <p>While subjective, this feedback mechanism aligns with the principle that neuroplastic adaptation is strongly influenced by perceived effort and challenge.</p>
      <h2>4. Design constraint: avoiding forced gamification</h2>
      <p>A key decision throughout this process was avoiding unnecessary gamification of any activity.</p>
      <p>Over-engineering feedback systems would risk shifting the product toward engagement optimization, artificial scoring systems and distraction from the core task.</p>
      <p>Instead, I prioritized deliberate practice with minimal interference, even if it meant accepting partial observability in certain exercises.</p>
      <h2>Final trade-off</h2>
      <p>The system accepts a fundamental constraint: not all cognitive training can be perfectly measured.</p>
      <p>In exchange for reduced tracking precision, the system preserves: real-world applicability, cognitive authenticity, and focus-driven execution without distraction.</p>
      <p>This trade-off was intentional, not a limitation of design.</p>
      <h2>Closing Reflection</h2>
      <p>After building this system, the focus shifted from theory to personal application.</p>
      <p>This project is not only a product I created — it is something I actively use.</p>
      <p>The underlying belief is simple: any cognitive function can be improved through deliberate, structured practice over time.</p>
      <p>The goal of the system is not to make users "better at a game," but to improve specific cognitive functions that translate into real-world performance.</p>
      <p>Improvements in areas such as working memory, attention control, and processing speed do not remain abstract — they manifest in practical situations like learning, problem-solving, mathematics, and everyday decision-making.</p>
      <p>This is the core value of the system: transferable cognitive improvement through consistent practice.</p>
      <p>However, no system produces change instantly.</p>
      <p>Meaningful neuroplastic adaptation requires consistent repetition.</p>
      <p>Just be patient and you will see changes.</p>
      <p>The system is intentionally designed to be lightweight in time commitment. Around 20 minutes per session on a single exercise is sufficient to enter the optimal learning range — the "Goldilocks zone" where challenge and ability are balanced.</p>
      <p>Within that window, the system adapts to performance and maintains an appropriate level of difficulty.</p>
      <p>The exercises, their targeted cognitive functions, and their real-world applications are clearly defined within the platform so that users understand not only what they are doing, but why it matters.</p>
      <p>You can try the website <a href="https://alfonseotieno.github.io/NeuroPlex/" target="_blank" rel="noopener">here</a>.</p>
      <p>This project is an ongoing experiment in deliberate cognitive improvement.</p>
      <p>The rest is consistency.</p>
      <img src="../assets/articles/neuroplex.webp" alt="NeuroPlex — Rewire Your Brain Daily" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
    `
  },
  {
    slug: 'masculinity-how-does-a-boy-become-a-man',
    title: 'Masculinity - How does a boy become a man',
    topic: 'Masculinity',
    date: 'Mar 28, 2026',
    readTime: '8 min read',
    substackUrl: 'https://alfonseotieno.substack.com/p/masculinity-how-does-a-boy-become',
    publication: 'deliberately-becoming',
    excerpt: 'As young boys, we looked up to our fathers. A boy who idolises his father sees him as one sort of superhero - a figure of authority.',
    body: `
      <p>As young boys, we looked up to our fathers. A boy who idolises his father sees him as one sort of superhero - a figure of authority. He doesn't necessarily know what he does or why he leaves home. He can't fully describe it. He just sees him, and admires him. And you just know that one day you want to be like him.</p>
      <p>Then we get to adolescence.</p>
      <p>We start picking behaviours outside our household. A character that you look up to and are impressed with, you decide to adopt and practise it. You continue to adopt characters from then onward and form a self-image.</p>
      <p>And this results in who you become.</p>
      <p>The home you grow up in, your community, your role models, and your beliefs shape you into the man you become. And in turn, it becomes what you view as masculinity.</p>
      <h2>Definition of masculinity</h2>
      <p>Masculinity is defined as the social construct and set of behaviours and traits associated with boys and men, often characterised by strength, assertiveness, and leadership.</p>
      <p>To put it simply, masculinity is simply acting like a man.</p>
      <p>It comes naturally.</p>
      <p>And this leads me to my main question:</p>
      <p>Why are boys and men searching for masculinity tips online?</p>
      <img src="../assets/articles/masculinity-role-models.webp" alt="Role models — from superheroes to athletes" style="width:100%;border-radius:8px;margin:1.5rem 0;" />
      <p>Growing up, we had guidance and a sense of community. Once we got older, we got access to phones, entered social media, and became connected to the whole world. We were exposed to different characters, different beliefs, and different ideas of masculinity.</p>
      <p>You have people like Andrew Tate who teach traditional masculinity and how to become an "alpha male."</p>
      <p>You have Chris Williamson who leans more towards a reflective, empathetic form of masculinity.</p>
      <p>You have others who show masculinity through discipline and routines.</p>
      <p>These are just a few examples.</p>
      <p>Now here is the ironic part.</p>
      <p>With all these reference points and models of masculinity—especially digital masculinity—most men feel lost.</p>
      <p>According to research, about 15% of men and boys report not having close friends. Men are now 4 times more likely to suffer from isolation and even suicide, yet only 10% likely to seek care.</p>
      <p>One of the major reasons for this problem is the global interconnectedness brought by social media.</p>
      <p>Initially, young men would look up to and compare themselves with their fathers, uncles, neighbours, and others in their immediate environment.</p>
      <p>Right now, we open social media and see men with six-pack abs, boys who became millionaires at 16, confident men who have no problem approaching women—all examples of the "alpha male."</p>
      <p>And you feel like you have no excuse to be fat, shy, poor, or living with your parents at the age of twenty.</p>
      <p>In your twenties, you already feel like you've failed in life.</p>
      <p>And you keep telling yourself:</p>
      <p>"I'm not good enough."</p>
      <p>Everything in your daily life confirms this—when you look in the mirror, your social life, your finances, your entire situation.</p>
      <p>And this pushes you to search for masculinity tips online.</p>
      <p>Of course, some fall into depression and start looking at how less significant their lives are.</p>
      <p>Others find their own solutions to this.</p>
      <p>As human beings, we all have different coping mechanisms for different situations. Now, as men or boys who want to turn into men, and we have already seen how other men are prospering, how other men have six-packs, and beautiful partners and millions. It begins to make you question your masculinity or your level of competence. And this may sometimes lead us to become depressed because this is an attack on our self-worth.</p>
      <p>There's a group which falls into depression and chooses to spend the rest of their days, or the period of time in their 20s, looking at how less significant they are compared to other people. But there's another group who agree to accept reality. They accept that you cannot be as rich as Elon Musk. They accept the fact that Lamine Yamal started playing professionally at the age of 16, but that doesn't mean that if they are in their teens or 20s, they have failed in life.</p>
      <p>So this crisis is brought by social media and interconnectedness. And it is very convenient that social media and technology have also offered a solution to this problem. One of the ways to cope with this situation is becoming competent in your own way. And these are people who simulate competence, and there are others who decide to work in the real world.</p>
      <p>Right now, we are in an environment where we have very many ways to escape reality. Just because you couldn't make it in the real world, we have technology which allows you to be very prosperous in another world, in the gaming world. And that is why men who are meant to conquer and provide and who are meant to dominate, we are getting lost in video games. Because these offer us an easier path to conquer something, to dominate something.</p>
      <p>And I cannot lie, I myself have fallen victim to this, because there was a period where I used to play mobile football games, and you always collect money and buy expensive players. And there's a point where I had gotten one million coins. That day, my mother found me bragging that I have one million in my account, and she was very excited. She thought it was actual money. And then I told her, no, it is just one million in my game account, and now I can buy Cristiano Ronaldo. And that, for me, was a big achievement. But the disappointment on her face showed me that this is not an achievement in the real world.</p>
      <p>Right now, it is easier to level up your username than your surname. And I think that is a trap, because we are meant to achieve, but if you have somewhere where achieving is very easy, then it loses the drive to achieve in real life. That is why we go for validation on social media, where it is easy. That is why even people right now have AI girlfriends, because approaching a real girl is not easy; you are not guaranteed success. It is very uncomfortable.</p>
      <p>So, for me, I think one of the ways a boy becomes a man is by first accepting himself as he is in his current situation and striving to improve, not artificially, but he has to embrace discomfort and just strive in the real world.</p>
      <p>And there's this other group of men who accept that they are not alphas, but they decide to just improve in their own ways. Right now, I'm writing this article at the age of 19 because, at some point in time, I looked at myself and my life and saw that there are a lot of things that I can improve in myself, in my environment, and in my life.</p>
      <p>Firstly, I started by creating a radical system where I would overhaul my entire reality very dramatically. And for those who are into self-development or who are going to look for it on social media, I saw this video saying, "go and improve in the shadows and come back stronger." And I started learning things. I started working out. I even started training boxing because there was a level which I was in, and there was a level which I used to see in other people, and I wanted to be like them. And that is what still drives me.</p>
      <p>But the more I continued to improve, I started to compare myself with other people and their progress, and I won't lie, it used to hurt me when I would go on TikTok and see people saying they are 16 years old and they are millionaires. It made me question a lot of things. And I, for one, have gone online and searched for masculinity tips, but also, while doing research and seeing these behavioural people advising, I started to realize that masculinity depends on what it means to you.</p>
      <p>If your view of masculinity is becoming stoic, then that is masculinity for you, and no one will blame you for that.</p>
      <p>So the first thing that I did, and it really liberated me, is I accepted the fact that I am training boxing because, at the moment, I am not confident in violent confrontation. I am working out because currently I am weak, and I want to become stronger.</p>
      <p>So right now, my development is not about escaping from who I am or trying to become a better version of myself. Right now, my development is about accepting the way I am and moving together with my weaknesses and improving, because I know that everyone can change and everything can be improved.</p>
      <p>As I conclude, I would just want to say that masculinity is not something that you learn from the internet. It's something that comes from the environment. We see our fathers, and we learn how to be responsible men and how to be tough men. And our mothers teach us respect and how to treat other people well. And those like me who do martial arts, we see from our coaches that you're supposed to be a good man, but there are some times you need to fight for what you believe in.</p>
      <p>Your understanding of masculinity is shaped by what is around you. Masculinity is not a universal template. It's not something that you copy from someone else, because what it means to one person differs from what it means to another.</p>
      <p>Your masculinity depends on your environment and the kind of man you decide to become. Your environment can show you what to follow. It can also show you what you want to avoid. Both are useful.</p>
      <p>The responsibility is on you to observe, decide, and commit to a path.</p>
    `
  },
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
    var imageHtml = a.image
      ? '<div class="article-card-img"><img src="../assets/articles/' + a.image + '" alt="' + a.title + '" onerror="this.parentNode.style.display=\'none\'" /></div>'
      : '';

    return '<div class="article-card" data-slug="' + a.slug + '">' +
      imageHtml +
      '<div class="article-card-body">' +
        '<span class="article-pub-badge ' + getPubClass(a.publication) + '">' + getPubLabel(a.publication) + '</span>' +
        '<h3>' + a.title + '</h3>' +
        '<p>' + a.excerpt + '</p>' +
        '<div class="article-card-meta">' +
          '<span>' + a.date + '</span>' +
          '<span>' + a.readTime + '</span>' +
          '<span>' + a.topic + '</span>' +
          '<span class="article-read-link">Read <i class="fa-solid fa-arrow-right" style="font-size:0.75rem;"></i></span>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

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

  var pubLabel = article.publication === 'deliberately-becoming' ? 'Deliberately Becoming' : 'Code &amp; System';
  var subUrl = article.publication === 'deliberately-becoming'
    ? 'https://deliberatelybecoming.substack.com'
    : 'https://codeandsystems.substack.com';

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
          'This article was originally published on Substack. <a href="' + article.substackUrl + '" target="_blank" rel="noopener">Click here to read on Substack</a>.' +
        '</div>' +
        '<div class="article-subscribe-cta">' +
          '<p>Enjoyed this article? Subscribe to <strong>' + pubLabel + '</strong> for more.</p>' +
          '<a href="' + subUrl + '" target="_blank" rel="noopener" class="btn btn-primary">Subscribe on Substack</a>' +
        '</div>' +
        '<button class="back-btn" style="margin-top:2rem;margin-bottom:0;" id="article-back-btn-bottom">' +
          '<i class="fa-solid fa-arrow-left"></i> Back to Articles' +
        '</button>' +
      '</div>' +
    '</div>';

  window.scrollTo(0, 0);

  ['article-back-btn', 'article-back-btn-bottom'].forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', function () {
        closeArticle();
      });
    }
  });

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

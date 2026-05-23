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

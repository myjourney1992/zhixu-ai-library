'use strict';
const DATA = [
{id:'genai',title:'生成式 AI：先建立一张全景地图',source:'DeepLearning.AI',url:'https://www.deeplearning.ai/courses/generative-ai-for-everyone',category:'AI 入门',level:'入门',language:'英文',type:'课程',icon:'D',tone:'sage',tags:['生成式 AI','认知入门'],description:'了解生成式 AI 的能力与局限，从实际任务出发，建立自己的使用判断。',takeaway:'找一个你每周都会重复的任务，写下 AI 可以帮助的环节，以及需要自己核查的部分。'},
{id:'google',title:'机器学习速成课',source:'Google for Developers',url:'https://developers.google.com/machine-learning/crash-course?hl=zh-cn',category:'AI 入门',level:'入门',language:'中英',type:'课程',icon:'G',tone:'sand',tags:['机器学习','基础概念'],description:'通过概念讲解和练习，认识机器学习的基本问题；适合补上技术理解的底座。',takeaway:'先理解训练、验证与过拟合，再用自己的话解释为什么模型会在新数据上犯错。'},
{id:'hfllm',title:'Hugging Face 大语言模型课程',source:'Hugging Face',url:'https://huggingface.co/learn/llm-course/en/chapter1/1',category:'AI 入门',level:'进阶',language:'英文',type:'课程',icon:'HF',tone:'peach',tags:['LLM','Transformers'],description:'从大语言模型与 NLP 入手，学习 Hugging Face 生态中的模型、数据与工具。',takeaway:'先读第一章，再跑通一个最小示例；记录输入、输出，以及你还不理解的一个概念。'},
{id:'d2l',title:'动手学深度学习',source:'Dive into Deep Learning',url:'https://d2l.ai/',category:'AI 入门',level:'进阶',language:'英文',type:'交互教材',icon:'DL',tone:'blue',tags:['深度学习','原理与代码'],description:'把数学、代码与实验放在一起的深度学习教材，适合需要系统补基础时查阅。',takeaway:'按需阅读：先挑与你正在做的任务有关的章节，运行代码并修改一个参数观察变化。'},
{id:'openai',title:'OpenAI 开发者文档',source:'OpenAI',url:'https://developers.openai.com/',category:'开发实践',level:'入门',language:'英文',type:'官方文档',icon:'O',tone:'sage',tags:['API','应用开发'],description:'从开发入口认识 API、模型与工具。做 AI 功能前，先查官方文档与接口约定。',takeaway:'先完成一个最小调用，再明确你的功能需要什么输入、什么输出，以及怎样判断成功。'},
{id:'cookbook',title:'OpenAI Cookbook：从示例到实践',source:'OpenAI',url:'https://developers.openai.com/cookbook',category:'开发实践',level:'进阶',language:'英文',type:'代码示例',icon:'O',tone:'sage',tags:['代码示例','工程实践'],description:'围绕常见开发任务的实践示例。遇到具体问题时，带着关键词找一份可运行的参考。',takeaway:'选一个与你当前需求相关的示例，先跑通原版，再替换成自己的数据，比较结果。'},
{id:'engineering',title:'Anthropic 工程文章库',source:'Anthropic',url:'https://www.anthropic.com/engineering',category:'开发实践',level:'进阶',language:'英文',type:'工程文章',icon:'A',tone:'sand',tags:['AI 工程','实践思路'],description:'阅读团队如何处理 AI 工程问题，关注设计取舍，并将思路对照自己的项目。',takeaway:'选一篇与你项目有关的文章，写下一个可借鉴的做法和一个不适合你项目的前提。'},
{id:'agents',title:'构建有效的 AI Agent',source:'Anthropic',url:'https://www.anthropic.com/engineering/building-effective-agents',category:'Agent 与 RAG',level:'进阶',language:'英文',type:'工程文章',icon:'A',tone:'sand',tags:['Agent','工作流'],description:'理解工作流与 Agent 的设计方式，为任务选择合适的复杂度与工具组合。',takeaway:'把你的任务画成步骤，先判断固定流程能否解决，再决定是否需要模型自主选择下一步。'},
{id:'hfagents',title:'AI Agents：从原理到动手搭建',source:'Hugging Face',url:'https://huggingface.co/learn/agents-course/en/unit0/introduction',category:'Agent 与 RAG',level:'进阶',language:'英文',type:'课程',icon:'HF',tone:'peach',tags:['Agent','工具调用'],description:'系统学习 Agent，并通过实践连接模型与工具，把概念变成一个可运行的应用。',takeaway:'先实现一个只使用一种工具的 Agent，并记录它什么时候调用工具、什么时候不该调用。'},
{id:'context',title:'Agent 的上下文工程',source:'Anthropic',url:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',category:'Agent 与 RAG',level:'进阶',language:'英文',type:'工程文章',icon:'A',tone:'lilac',tags:['上下文','检索 RAG'],description:'思考模型在每一步应该看到哪些信息，为检索、记忆与长任务的上下文设计打基础。',takeaway:'列出任务必需的信息，移除无关内容；对比不同上下文组织方式，观察输出是否更稳定。'},
{id:'evals',title:'如何评估 AI Agent',source:'Anthropic',url:'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',category:'Agent 与 RAG',level:'进阶',language:'英文',type:'工程文章',icon:'A',tone:'lilac',tags:['评估','可靠性'],description:'把「感觉不错」变成可检查的结果，建立 Agent 任务成功与失败的评估思路。',takeaway:'为一个真实需求准备正常、边界和失败场景，先写清通过标准，再运行 Agent。'},
{id:'index',title:'AI Index：用数据理解产业变化',source:'Stanford HAI',url:'https://hai.stanford.edu/ai-index',category:'产品与产业',level:'入门',language:'英文',type:'研究报告',icon:'S',tone:'blue',tags:['产业观察','AI 趋势'],description:'从研究、产业与社会等角度观察 AI。阅读时关注指标、口径与报告年份。',takeaway:'选一个与你的行业有关的图表，核查它的统计口径，再写下它可能意味着什么。'}
];
DATA.push(...[
  {
    "id": "shipindao",
    "title": "《硅谷八卦》｜食贫道",
    "source": "B 站 · 食贫道",
    "url": "https://www.bilibili.com/video/BV1qFaA6QEMm",
    "category": "产品与产业",
    "level": "入门",
    "language": "中文",
    "type": "视频",
    "icon": "▶",
    "tone": "blue",
    "tags": [
      "硅谷生态",
      "职业变化",
      "创业文化"
    ],
    "description": "旧资料中的硅谷社会观察纪录片入口，保留供回看；当前页面与付费状态尚待核实。",
    "takeaway": "AI 的进步，究竟在改变技术，还是在重塑企业与人的关系？ 不是 AI 编程教学片，而是产业和社会观察。",
    "alt": null,
    "altLabel": null,
    "date": "2026.09.24",
    "verification": "旧资料入口 · 尚待核实",
    "access": "旧版标注付费，以平台为准"
  },
  {
    "id": "karpathy",
    "title": "Software Is Changing (Again)",
    "source": "Andrej Karpathy · YC AI Startup School",
    "url": "https://www.youtube.com/watch?v=LCEmiRjPEtQ",
    "category": "开发实践",
    "level": "入门",
    "language": "英文",
    "type": "视频",
    "icon": "▶",
    "tone": "blue",
    "tags": [
      "软件工程",
      "Agent",
      "Software 3.0"
    ],
    "description": "从传统程序、神经网络到自然语言指令，提出 Software 3.0 视角；讨论人机协作、AI 产品的部分自主性和从 Demo 到可靠产品的差距。",
    "takeaway": "如果 AI 会写代码，我的核心价值应转向哪些工程环节？ Software 1.0 / 2.0 / 3.0 各指什么。",
    "alt": "https://www.latent.space/p/s3",
    "altLabel": "阅读英文图文笔记（部分付费）",
    "date": "2025.06",
    "verification": "来源页面已核对 · 2026.10.12",
    "access": "费用与可用性以原站为准"
  },
  {
    "id": "thinking",
    "title": "The Thinking Game《思维游戏》",
    "source": "Google DeepMind · 纪录片",
    "url": "https://www.youtube.com/watch?v=d95J8yzvjbQ",
    "category": "产品与产业",
    "level": "入门",
    "language": "英文",
    "type": "视频",
    "icon": "▶",
    "tone": "blue",
    "tags": [
      "基础研究",
      "AGI",
      "AlphaFold"
    ],
    "description": "跟随 DeepMind 团队多年，观察 AI 研究如何从长期构想发展到具体成果，特别适合理解技术突破背后的研究路径。",
    "takeaway": "技术突破、实验验证与产品化之间，分别需要什么条件？ 基础研究为什么通常需要长期投入。",
    "alt": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/the-thinking-game/",
    "altLabel": "Google 官方介绍",
    "date": "2025.11 公开上线",
    "verification": "来源页面已核对 · 2026.10.12",
    "access": "费用与可用性以原站为准"
  },
  {
    "id": "ep125",
    "title": "EP125｜12 个问题，搞懂 Vibe Coding",
    "source": "硬地骇客 · 中文播客",
    "url": "https://www.xiaoyuzhoufm.com/episode/69e669001e94ae6921be04dc",
    "category": "产品与产业",
    "level": "入门",
    "language": "中文",
    "type": "播客",
    "icon": "◉",
    "tone": "peach",
    "tags": [
      "独立开发",
      "用户需求",
      "商业化"
    ],
    "description": "讨论 AI 帮助开发者轻松做出产品之后，独立开发仍要面对的用户获取、市场验证、定价、持续运营与收入问题。",
    "takeaway": "除了「开发得出来」，用户为什么要选择并付费买我的产品？ 产品好做，不代表获客与分发容易。",
    "alt": "https://podcasts.apple.com/us/podcast/ep125-12-%E4%B8%AA%E9%97%AE%E9%A2%98-%E6%90%9E%E6%87%82-vibe-coding-%E7%88%86%E7%81%AB%E7%9C%9F%E7%9B%B8-%E4%BA%BA%E4%BA%BA%E8%83%BD%E5%81%9A%E4%BA%A7%E5%93%81/id1678465783?i=1000762442775",
    "altLabel": "Apple Podcasts 备用入口",
    "date": "2026.04.20",
    "verification": "来源页面已核对 · 2026.10.12",
    "access": "费用与可用性以原站为准"
  },
  {
    "id": "ep128",
    "title": "EP128｜从 Palantir 到 OpenAI：FDE 会成为 AI 时代最重要的新岗位？",
    "source": "硬地骇客 · 中文播客",
    "url": "https://www.xiaoyuzhoufm.com/episode/6a55209c27a4eec16c4026c5",
    "category": "产品与产业",
    "level": "入门",
    "language": "中文",
    "type": "播客",
    "icon": "◉",
    "tone": "peach",
    "tags": [
      "技术服务",
      "FDE",
      "企业客户"
    ],
    "description": "认识 Forward Deployed Engineer：工程师如何深入真实业务，把 AI 能力部署到客户流程中，并形成实际业务闭环。",
    "takeaway": "能不能先为客户解决一个昂贵问题，再从交付经验里抽象出产品？ FDE 与传统定制开发、解决方案工程有什么不同。",
    "alt": "https://podcasts.apple.com/tw/podcast/ep128-%E4%BB%8E-palantir-%E5%88%B0-openai-fde-%E4%BC%9A%E6%88%90%E4%B8%BA-ai-%E6%97%B6%E4%BB%A3%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%96%B0%E5%B2%97%E4%BD%8D/id1678465783?i=1000776638727",
    "altLabel": "Apple Podcasts 备用入口",
    "date": "2026.07.13",
    "verification": "来源页面已核对 · 2026.10.12",
    "access": "费用与可用性以原站为准"
  },
  {
    "id": "crossing",
    "title": "高手怎么用 AI？普通人怎么学 AI？投资人如何投 AI？",
    "source": "十字路口 Crossing · Koji × 课代表立正",
    "url": "https://www.xiaoyuzhoufm.com/episode/6a275ed57444b5722235a897",
    "category": "产品与产业",
    "level": "入门",
    "language": "中文",
    "type": "播客",
    "icon": "◉",
    "tone": "peach",
    "tags": [
      "Agent 工作流",
      "AI 学习",
      "投资思维"
    ],
    "description": "从 AI 工具的实际使用方式，延伸到 AI 创业和投资的判断方法，适合作为开发者转向更广阔商业视角的桥梁。",
    "takeaway": "我应该积累的是某款 AI 工具的技巧，还是一套可以迁移的工作流能力？ 理解从聊天型 AI 转向 Agent 工具的思路。",
    "alt": "https://www.bilibili.com/video/BV122E96LEuS/",
    "altLabel": "B 站视频对谈（下半场）",
    "date": "2026.06.10",
    "verification": "来源页面已核对 · 2026.10.12",
    "access": "费用与可用性以原站为准"
  },
  {
    "id": "a16z",
    "title": "Top 100 Gen AI Consumer Apps · 第七版",
    "source": "a16z · Olivia Moore",
    "url": "https://a16z.com/100-gen-ai-apps-7/",
    "category": "产品与产业",
    "level": "入门",
    "language": "英文",
    "type": "报告",
    "icon": "R",
    "tone": "lilac",
    "tags": [
      "AI 应用",
      "用户付费",
      "市场机会"
    ],
    "description": "追踪生成式 AI 消费应用格局，新版加入美国消费者实际支付情况的观察，更有助于区分流量热度与商业化表现。",
    "takeaway": "用户真正在哪些 AI 产品上付钱？频率、留存和持续价值意味着什么？ 寻找「有人用」与「有人付费」的差异。",
    "alt": null,
    "altLabel": null,
    "date": "2026.10.05",
    "verification": "来源页面已核对 · 2026.10.12",
    "access": "费用与可用性以原站为准"
  },
  {
    "id": "state",
    "title": "State of AI Report 2026",
    "source": "Air Street Capital · 年度报告",
    "url": "https://www.stateof.ai/2026-explore/",
    "category": "产品与产业",
    "level": "入门",
    "language": "英文",
    "type": "报告",
    "icon": "R",
    "tone": "lilac",
    "tags": [
      "行业全景",
      "AI Agent",
      "技术竞争"
    ],
    "description": "覆盖前沿模型、智能体、基础设施、AI 商业化、机器人、科研与政策等主题，帮助把零散新闻放回完整产业地图。",
    "takeaway": "有哪些变化已经有证据支撑？哪些只是行业对 2027 年的预测？ 建议先读 Executive Summary / 年度总览。",
    "alt": "https://www.stateof.ai/",
    "altLabel": "报告官网",
    "date": "2026.10.08",
    "verification": "来源页面已核对 · 2026.10.12",
    "access": "费用与可用性以原站为准"
  },
  {
    "id": "simon",
    "title": "Agentic Engineering Patterns",
    "source": "Simon Willison",
    "url": "https://simonwillison.net/guides/agentic-engineering-patterns/",
    "category": "开发实践",
    "level": "进阶",
    "language": "英文",
    "type": "实践指南",
    "icon": "SW",
    "tone": "lilac",
    "tags": [
      "编码代理",
      "工程模式"
    ],
    "description": "将 AI 编码代理的使用整理成工程模式。适合带着真实开发任务阅读并试验。",
    "takeaway": "挑一个已有需求，尝试一条工程模式，比较交付质量、验证过程与返工次数。"
  },
  {
    "id": "fastai",
    "title": "Practical Deep Learning for Coders",
    "source": "fast.ai",
    "url": "https://course.fast.ai/",
    "category": "AI 入门",
    "level": "进阶",
    "language": "英文",
    "type": "课程",
    "icon": "f",
    "tone": "sage",
    "tags": [
      "深度学习",
      "动手实践"
    ],
    "description": "面向程序员的深度学习课程，以实际应用为入口，逐步理解模型与训练。",
    "takeaway": "先跑通一个课程实例，再用自己的少量数据做一次实验。"
  },
  {
    "id": "microsoft",
    "title": "AI for Beginners",
    "source": "Microsoft",
    "url": "https://github.com/microsoft/AI-For-Beginners",
    "category": "AI 入门",
    "level": "入门",
    "language": "英文",
    "type": "课程",
    "icon": "M",
    "tone": "blue",
    "tags": [
      "AI 基础",
      "系统学习"
    ],
    "description": "微软的开源 AI 入门课程。可按主题选读，不必把完整课程当成每日任务。",
    "takeaway": "找到与你当前问题最相关的一课，整理三个关键词，做一个小练习。"
  }
]);
const CHANNELS = [
  {
    "title": "OpenAI 更新日志",
    "source": "OpenAI",
    "url": "https://developers.openai.com/api/docs/changelog",
    "description": "查 API 与工具变更，优先阅读影响当前项目的更新。",
    "frequency": "按需 / 每周"
  },
  {
    "title": "Anthropic News",
    "source": "Anthropic",
    "url": "https://www.anthropic.com/news",
    "description": "模型与产品的官方发布入口。与工程文章搭配阅读。",
    "frequency": "每周"
  },
  {
    "title": "Google Research Blog",
    "source": "Google Research",
    "url": "https://research.google/blog/",
    "description": "研究进展与方法介绍，为感兴趣的方向补充一手背景。",
    "frequency": "每周"
  },
  {
    "title": "Hugging Face Blog",
    "source": "Hugging Face",
    "url": "https://huggingface.co/blog",
    "description": "开源模型与工具实践。收藏与你项目有关的具体文章。",
    "frequency": "每周"
  },
  {
    "title": "Simon Willison 的博客",
    "source": "Simon Willison",
    "url": "https://simonwillison.net/",
    "description": "AI 工具、编码代理与实际实验记录，适合开发者跟踪。",
    "frequency": "每周"
  },
  {
    "title": "Hugging Face Daily Papers",
    "source": "Hugging Face",
    "url": "https://huggingface.co/papers",
    "description": "发现论文线索，先读摘要，再判断是否值得深入。",
    "frequency": "研究时按需"
  },
  {
    "title": "GitHub Trending",
    "source": "GitHub",
    "url": "https://github.com/trending",
    "description": "发现开源项目。趋势热度是线索，采用前仍要检查项目。",
    "frequency": "每周"
  },
  {
    "title": "开源 LLM 评测入口",
    "source": "Hugging Face",
    "url": "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard",
    "description": "对照评测任务与自己的需求，把榜单作为参考，并做实际验证。",
    "frequency": "选型时按需"
  }
];
const PATHS = [
{title:'先理解 AI，再判断怎么用',subtitle:'适合想建立全局认知的学习者',description:'先认识能力与局限，再补基础，最后用产业数据连接现实。',ids:['genai','google','hfllm','index']},
{title:'从写代码，到做一个 AI 功能',subtitle:'适合有开发背景的实践者',description:'文档、示例、工程思路与评估，走完一次最小功能的开发闭环。',ids:['openai','cookbook','engineering','evals']},
{title:'让 Agent 真正完成一个任务',subtitle:'适合准备深入 Agent 的开发者',description:'从架构判断开始，动手连接工具，再优化上下文与结果质量。',ids:['agents','hfagents','context','evals']}
];
PATHS.push({title:'开发者的产业与产品视角',subtitle:'来自你的旧资料 · 四周，每周两份',description:'第一周：软件与产品；第二周：技术服务与市场；第三周：研究与工作流；第四周：产业判断。',ids:['karpathy','ep125','ep128','a16z','thinking','crossing','state','shipindao']});
const CATEGORIES=['全部','AI 入门','开发实践','Agent 与 RAG','产品与产业'];
const STORE='zhixu-ai-library-v1';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=id=>`<svg aria-hidden="true"><use href="#icon-${id}"/></svg>`;
const fresh=()=>({saved:[],done:[],notes:{},custom:[],reflection:''});
function validURL(value){try{const u=new URL(value);return ['https:','http:'].includes(u.protocol)}catch{return false}}
function normalize(raw){
 if(!raw||typeof raw!=='object'||Array.isArray(raw))throw new Error('记录格式不正确');
 const out=fresh();
 for(const key of ['saved','done']){if(raw[key]!==undefined&&!Array.isArray(raw[key]))throw new Error('记录格式不正确');out[key]=[...new Set((raw[key]||[]).filter(x=>typeof x==='string'))]}
 if(raw.custom!==undefined&&!Array.isArray(raw.custom))throw new Error('资料格式不正确');
 const ids=new Set(DATA.map(x=>x.id));
 for(const r of (raw.custom||[]).slice(0,1000)){if(!r||typeof r.id!=='string'||!r.id.startsWith('custom-')||ids.has(r.id)||typeof r.title!=='string'||!r.title.trim()||!validURL(r.url)||!CATEGORIES.slice(1).includes(r.category)||!['入门','进阶'].includes(r.level))throw new Error('资料记录包含无效内容');ids.add(r.id);out.custom.push({id:r.id,title:r.title.slice(0,100),url:r.url,category:r.category,level:r.level,description:String(r.description||'').slice(0,400),source:String(r.source||'个人添加').slice(0,60),language:['中文','英文','中英'].includes(r.language)?r.language:'中文',type:'个人资料',icon:'＋',tone:'sage',tags:['个人添加'],takeaway:'读完后，记下一个收获，以及可以实践的下一步。'})}
 if(raw.notes!==undefined&&(!raw.notes||typeof raw.notes!=='object'||Array.isArray(raw.notes)))throw new Error('笔记格式不正确');
 for(const [id,n] of Object.entries(raw.notes||{})){if(ids.has(id)&&n&&typeof n.text==='string'){out.notes[id]={text:n.text.slice(0,20000),updated:typeof n.updated==='string'?n.updated:''}}}
 out.reflection=typeof raw.reflection==='string'?raw.reflection.slice(0,20000):'';
 out.saved=out.saved.filter(x=>ids.has(x));out.done=out.done.filter(x=>ids.has(x));return out;
}
let state=fresh();let initialWarning='';
try{const raw=localStorage.getItem(STORE);if(raw)state=normalize(JSON.parse(raw))}catch{initialWarning='无法读取历史记录，请检查浏览器存储设置或导入备份。'}
let view='library',category='全部',query='',level='all',sort='default',hideDone=false,detailId=null,toastTimer;
function all(){return [...DATA,...state.custom]}
function persist(){try{localStorage.setItem(STORE,JSON.stringify(state));return true}catch{toast('浏览器未能保存，请导出备份以免记录丢失。');return false}}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3200)}
function selected(){let data=all().filter(r=>view!=='saved'||state.saved.includes(r.id));data=data.filter(r=>(category==='全部'||r.category===category)&&(level==='all'||r.level===level)&&(!hideDone||!state.done.includes(r.id))&&[r.title,r.description,r.source,r.category,...r.tags].join(' ').toLowerCase().includes(query.toLowerCase().trim()));if(sort==='title')data.sort((a,b)=>a.title.localeCompare(b.title,'zh-CN'));if(sort==='unread')data.sort((a,b)=>Number(state.done.includes(a.id))-Number(state.done.includes(b.id)));return data}
function card(r){const saved=state.saved.includes(r.id),done=state.done.includes(r.id);return `<article class="resource-card"><div class="card-top"><span class="source-icon tone-${r.tone}">${esc(r.icon)}</span><button class="icon-button save-button ${saved?'saved':''}" data-action="save" data-id="${esc(r.id)}" aria-label="${saved?'取消收藏':'收藏'}：${esc(r.title)}" aria-pressed="${saved}">${icon('bookmark')}</button></div><div class="card-category">${esc(r.category)} · ${esc(r.type)}</div><h3><button class="card-detail-trigger" data-action="detail" data-id="${esc(r.id)}" aria-label="查看详情：${esc(r.title)}">${esc(r.title)}</button></h3><p class="card-description">${esc(r.description)}</p><div class="card-tags"><span class="tag">${esc(r.level)}</span>${r.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><div class="card-meta"><span>${esc(r.source)}</span><span>${esc(r.language)}原文</span></div><div class="card-bottom"><a class="read-link" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">阅读原文 ${icon('external')}</a><button class="note-button" data-action="detail" data-id="${esc(r.id)}">${state.notes[r.id]?.text?'查看笔记':'导读 / 笔记'}</button><button class="done-button ${done?'completed':''}" data-action="done" data-id="${esc(r.id)}" aria-pressed="${done}">${done?'✓ 已完成':'标记完成'}</button></div></article>`}
function render(){
 $('#nav-total').textContent=$('#stat-total').textContent=all().length;$('#nav-saved').textContent=$('#stat-saved').textContent=state.saved.length;$('#stat-done').textContent=state.done.length;$('#nav-notes').textContent=Object.values(state.notes).filter(n=>n.text.trim()).length;
 document.querySelectorAll('[data-view]').forEach(el=>{el.classList.toggle('active',el.dataset.view===view);if(el.dataset.view===view)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current')});
 $('#crumb').textContent=({library:'全部资料',saved:'我的收藏',paths:'学习路径',notes:'学习笔记',channels:'前沿入口'})[view];
 $('#channels-section').hidden=view!=='channels';$('#stat-paths').textContent=PATHS.length;$('#journal-input').value=state.reflection;$('#hero').hidden=view!=='library';$('#library-section').hidden=!['library','saved'].includes(view);$('#paths-section').hidden=view!=='paths';$('#notes-section').hidden=view!=='notes';$('#list-title').textContent=view==='saved'?'把好资料，留给未来的自己。':'挑一份，开始学习。';
 const base=all().filter(r=>view!=='saved'||state.saved.includes(r.id));$('#categories').innerHTML=CATEGORIES.map(c=>`<button class="filter ${category===c?'active':''}" data-category="${esc(c)}" aria-pressed="${category===c}">${esc(c)}<span>${c==='全部'?base.length:base.filter(r=>r.category===c).length}</span></button>`).join('');
 const resources=selected();$('#result-count').textContent=`共 ${resources.length} 份资料`;$('#resource-grid').innerHTML=resources.map(card).join('');$('#empty').hidden=resources.length>0;const noSaved=view==='saved'&&state.saved.length===0;$('#empty-description').textContent=noSaved?'点击资料卡片右上角的书签，把想学的资料收好。':'换一个关键词或筛选条件试试。';$('#empty-action').textContent=noSaved?'去发现资料':'重置筛选';
 renderPaths();renderNotes();
}
function renderPaths(){ $('#paths-grid').innerHTML=PATHS.map((p,i)=>{const count=p.ids.filter(id=>state.done.includes(id)).length;return `<article class="path-card"><span class="path-number">0${i+1}</span><h3>${p.title}</h3><div class="eyebrow muted">${p.subtitle}</div><p>${p.description}</p><div class="path-progress">学习进度 ${count} / ${p.ids.length}<div class="progress-track"><span style="width:${count/p.ids.length*100}%"></span></div></div><ol class="path-steps">${p.ids.map((id,j)=>{const r=DATA.find(r=>r.id===id);return `<li><span class="step-num ${state.done.includes(id)?'complete':''}">${state.done.includes(id)?'✓':j+1}</span><button class="path-step-button" data-action="detail" data-id="${id}">${esc(r.title)}<small>${esc(r.type)} · ${esc(r.source)}</small></button></li>`}).join('')}</ol><button class="button outline" data-action="path" data-path="${i}">${count===p.ids.length?'重新浏览':'开始 / 继续学习'} ${icon('arrow')}</button></article>`}).join('') }
function renderNotes(){const entries=Object.entries(state.notes).filter(([id,n])=>n.text.trim()&&all().some(r=>r.id===id)).sort((a,b)=>b[1].updated.localeCompare(a[1].updated));$('#notes-list').innerHTML=entries.length?entries.map(([id,n])=>{const r=all().find(r=>r.id===id);let date='';if(!Number.isNaN(Date.parse(n.updated)))date=new Date(n.updated).toLocaleDateString('zh-CN');return `<article class="note-entry"><div><h3>${esc(r.title)}</h3><p>${esc(n.text)}</p><small>最近记录 ${date}</small></div><button class="button outline" data-action="detail" data-id="${esc(id)}">编辑笔记</button></article>`}).join(''):`<div class="empty">${icon('note')}<h3>你的第一条笔记，从一个想法开始。</h3><p>打开任意资料的「导读 / 笔记」，记下一个收获。</p><button class="button outline" data-action="discover">发现资料</button></div>`}
function navigate(){const next=location.hash.slice(1);view=['library','saved','paths','notes','channels'].includes(next)?next:'library';$('#sidebar').classList.remove('open');$('#menu-btn').setAttribute('aria-expanded','false');render()}
function switchTo(next){if(!['library','saved','paths','notes','channels'].includes(next))return;view=next;$('#sidebar').classList.remove('open');$('#menu-btn').setAttribute('aria-expanded','false');render();try{history.replaceState(null,'','#'+next)}catch{} window.scrollTo({top:0,behavior:'auto'})}
document.querySelectorAll('[data-view],.brand').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();switchTo(link.dataset.view||'library')}));
function toggle(key,id){if(!all().some(r=>r.id===id))return;state[key]=state[key].includes(id)?state[key].filter(x=>x!==id):[...state[key],id];const ok=persist();render();if(detailId===id&&$('#detail-dialog').open)renderDetail();if(ok)toast(key==='saved'?(state.saved.includes(id)?'已收藏，留给下次学习。':'已取消收藏。'):(state.done.includes(id)?'又完成了一步，做得很好。':'已恢复为未完成。'))}
function renderDetail(){const r=all().find(r=>r.id===detailId);if(!r)return;const done=state.done.includes(r.id);$('#detail-content').innerHTML=`<h2>${esc(r.title)}</h2><div class="detail-source">${esc(r.source)} · ${esc(r.level)} · ${esc(r.language)}原文${r.date?' · '+esc(r.date):''}</div>${r.verification?'<p class="note-hint">'+esc(r.verification)+' · '+esc(r.access)+'</p>':''}<p class="detail-desc">${esc(r.description)}</p><div class="detail-callout"><strong>读完可以做什么？</strong><br>${esc(r.takeaway)}</div><div class="detail-actions"><a class="button primary" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">前往原文 ${icon('external')}</a>${r.alt?'<a class="button outline" href="'+esc(r.alt)+'" target="_blank" rel="noopener noreferrer">'+esc(r.altLabel)+'</a>':''}<button class="button outline" data-action="done" data-id="${esc(r.id)}">${done?'✓ 已完成 · 撤销':'标记为已完成'}</button></div><label class="detail-notes-label" for="note-input">我的学习笔记</label><textarea class="note-textarea" id="note-input" maxlength="20000" placeholder="一个收获、一个疑问，或者下一步想做的小实践…">${esc(state.notes[r.id]?.text||'')}</textarea><div class="note-hint">输入后自动保存在当前浏览器。建议定期导出记录。</div>${r.id.startsWith('custom-')?`<button class="delete-button full" data-action="delete" data-id="${esc(r.id)}">删除这份个人资料</button>`:''}`;$('#note-input').addEventListener('input',e=>{state.notes[r.id]={text:e.target.value,updated:new Date().toISOString()};persist();render()})}
function openDetail(id){if(!all().some(r=>r.id===id))return;detailId=id;renderDetail();if(!$('#detail-dialog').open)$('#detail-dialog').showModal()}
document.addEventListener('click',e=>{const cat=e.target.closest('[data-category]');if(cat){category=cat.dataset.category;render();return}const el=e.target.closest('[data-action]');if(!el)return;const {action,id}=el.dataset;if(action==='save')toggle('saved',id);if(action==='done')toggle('done',id);if(action==='detail')openDetail(id);if(action==='discover')switchTo('library');if(action==='path'){const path=PATHS[Number(el.dataset.path)];openDetail(path.ids.find(id=>!state.done.includes(id))||path.ids[0])}if(action==='delete'){if(!confirm('删除这份资料及其笔记？此操作无法撤销。'))return;state.custom=state.custom.filter(r=>r.id!==id);state.saved=state.saved.filter(x=>x!==id);state.done=state.done.filter(x=>x!==id);delete state.notes[id];const ok=persist();$('#detail-dialog').close();detailId=null;render();if(ok)toast('个人资料已删除。')}});
$('#search').addEventListener('input',e=>{query=e.target.value;render()});$('#level-filter').addEventListener('change',e=>{level=e.target.value;render()});$('#sort').addEventListener('change',e=>{sort=e.target.value;render()});$('#hide-done').addEventListener('change',e=>{hideDone=e.target.checked;render()});
$('#empty-action').addEventListener('click',()=>{category='全部';query='';level='all';hideDone=false;$('#search').value='';$('#level-filter').value='all';$('#hide-done').checked=false;if(view==='saved'&&!state.saved.length)switchTo('library');else render()});
for(const id of ['hero-path','tip-path'])$('#'+id).addEventListener('click',()=>{switchTo('paths');window.scrollTo({top:0,behavior:'smooth'})});
$('#add-btn').addEventListener('click',()=>$('#add-dialog').showModal());document.querySelectorAll('.close-dialog').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
$('#add-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);const url=String(f.get('url')).trim();if(!validURL(url)){toast('请使用 http 或 https 链接。');return}const title=String(f.get('title')).trim(),description=String(f.get('description')).trim();if(!title||!description){toast('请填写名称和一句导读。');return}const r={id:'custom-'+crypto.randomUUID(),title,url,description,source:String(f.get('source')).trim()||new URL(url).hostname,category:f.get('category'),level:f.get('level'),language:f.get('language'),type:'个人资料',tags:['个人添加'],icon:'＋',tone:'sage',takeaway:'读完后，记下一个收获，以及可以实践的下一步。'};state.custom.unshift(r);const ok=persist();$('#add-dialog').close();e.target.reset();category='全部';query='';level='all';hideDone=false;$('#search').value='';$('#level-filter').value='all';$('#hide-done').checked=false;switchTo('library');render();if(ok)toast('好资料已收好。')});
$('#random-btn').addEventListener('click',()=>{const unread=all().filter(r=>!state.done.includes(r.id));const pool=unread.length?unread:all();openDetail(pool[Math.floor(Math.random()*pool.length)].id)});
$('#menu-btn').setAttribute('aria-expanded','false');$('#menu-btn').addEventListener('click',()=>{const open=$('#sidebar').classList.toggle('open');$('#menu-btn').setAttribute('aria-expanded',String(open))});document.addEventListener('click',e=>{if($('#sidebar').classList.contains('open')&&!$('#sidebar').contains(e.target)&&!$('#menu-btn').contains(e.target)){$('#sidebar').classList.remove('open');$('#menu-btn').setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!document.querySelector('dialog[open]')){e.preventDefault();switchTo('library');$('#search').focus()}if(e.key==='Escape'){$('#sidebar').classList.remove('open');$('#menu-btn').setAttribute('aria-expanded','false')}});
$('#export-btn').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),...state},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='知序-AI学习记录-'+new Date().toISOString().slice(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('已导出收藏、进度、笔记和个人资料。')});
$('#import-btn').addEventListener('click',()=>$('#import-file').click());$('#import-file').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>5*1024*1024)throw new Error('文件不能超过 5 MB');const raw=JSON.parse(await file.text());if(raw.version!==1)throw new Error('请使用知序导出的学习记录');let converted=raw;if(raw.fav&&raw.done&&!Array.isArray(raw.done)){converted={version:1,saved:Object.keys(raw.fav).filter(id=>raw.fav[id]),done:Object.keys(raw.done).filter(id=>raw.done[id]),notes:Object.fromEntries(Object.entries(raw.notes||{}).filter(([,text])=>typeof text==='string').map(([id,text])=>[id,{text,updated:new Date().toISOString()}])),custom:[],reflection:raw.reflection||''}}const imported=normalize(converted);const merged=normalize({custom:[...state.custom,...imported.custom.filter(r=>!state.custom.some(x=>x.id===r.id))],saved:[...state.saved,...imported.saved],done:[...state.done,...imported.done],notes:{...state.notes,...imported.notes},reflection:imported.reflection||state.reflection});state=merged;const ok=persist();render();if(detailId&&$('#detail-dialog').open)renderDetail();if(ok)toast('已合并导入记录，同名笔记采用导入版本。')}catch(err){toast('导入失败：'+err.message)}finally{e.target.value=''}});
$('#channels-grid').innerHTML=CHANNELS.map((r,i)=>`<article class="resource-card"><div class="card-category">${esc(r.source)} · ${esc(r.frequency)}</div><h3>${esc(r.title)}</h3><p class="card-description">${esc(r.description)}</p><a class="read-link" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">打开资讯入口 ${icon('external')}</a></article>`).join('');
$('#journal-input').addEventListener('input',e=>{state.reflection=e.target.value;persist()});
window.addEventListener('hashchange',navigate);navigate();if(initialWarning)toast(initialWarning);

$('#sidebar-close').addEventListener('click',()=>{$('#sidebar').classList.remove('open');$('#menu-btn').setAttribute('aria-expanded','false')});

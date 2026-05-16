export const siteInfo = {
  shortName: 'CPIL',
  name: 'Cyber-Physical Intelligence Lab',
  director: 'Prof. Xue (Steve) Liu',
  directorBio:
    'Prof. Xue (Steve) Liu is an IEEE Fellow, Fellow of the Canadian Academy of Engineering, Professor and William Dawson Scholar at McGill University, and a faculty member affiliated with Mila.',
  description:
    'The Cyber-Physical Intelligence Lab conducts frontier research in artificial intelligence, cyber-physical systems, large language models, efficient inference, agentic AI, trustworthy machine learning, optimization, and intelligent infrastructure.',
  heroSubtitle: 'Advancing trustworthy, efficient, and agentic AI for the cyber-physical world.',
  platforms: ['MBZUAI', 'McGill University', 'Mila'],
  collaborators: ['Google', 'MSR', 'Meta', 'Amazon', 'Tencent'],
  contactEmail: 'bowei.he@mbzuai.ac.ae',
  contactEmails: ['bowei.he@mbzuai.ac.ae', 'haolun.wu@mail.mcgill.ca', 'ye.yuan3@mail.mcgill.ca'],
  websiteSupportEmail: 'dun.yuan@mail.mcgill.ca',
  wechatName: 'CPIL 赛博物理智能实验室',
  wechatQrPath: '/images/contact/wechat-cpil-qrcode.png',
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'People', href: '/people/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'News', href: '/news/' },
  { label: 'Join Us', href: '/join/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const roleOrder = [
  'Principal Investigator',
  'Faculty / Senior Researchers',
  'PhD Students',
  "Undergraduate / Master's Students",
  'Postdocs',
  'Visiting Scholars',
  'Interns',
  'Alumni',
] as const;

export const researchAreas = [
  {
    title: 'Large Model Optimization and Efficient Inference',
    summary:
      'Methods and systems for making large language models more efficient, scalable, and deployable, including quantization, pruning recovery, early-exit inference, heterogeneous inference, and KV cache compression.',
    topics: [
      'Large language models',
      'Efficient inference',
      'Model compression',
      'Reasoning-aware acceleration',
    ],
  },
  {
    title: 'Agentic AI, Retrieval-Augmented Reasoning, and Evaluation',
    summary:
      'Benchmarks, training methods, and runtime frameworks for AI agents that retrieve evidence, use tools, receive feedback, and operate across long-horizon workflows.',
    topics: [
      'Agentic AI',
      'Retrieval-augmented generation',
      'Interactive evaluation',
      'Tool use and safety',
    ],
  },
  {
    title: 'Representation Learning, Alignment, and Knowledge Distillation',
    summary:
      'Robust and transferable representations, stable model alignment, reinforcement learning from human feedback, and data synthesis for knowledge distillation.',
    topics: [
      'Representation learning',
      'Alignment',
      'Knowledge distillation',
      'Robustness',
    ],
  },
  {
    title: 'Diffusion Models and Black-Box Optimization',
    summary:
      'Diffusion language models and conditional generative modeling for offline black-box optimization, design problems, and settings where labels or experiments are expensive.',
    topics: [
      'Diffusion models',
      'Black-box optimization',
      'Surrogate optimization',
      'Design problems',
    ],
  },
  {
    title: 'Federated Learning and Trustworthy AI',
    summary:
      'Efficient and trustworthy learning methods for distributed, resource-constrained, and heterogeneous environments, including edge devices and non-IID settings.',
    topics: [
      'Federated learning',
      'Sparse training',
      'Trustworthy AI',
      'Edge AI',
    ],
  },
  {
    title: 'Cyber-Physical Intelligence and AI for Infrastructure',
    summary:
      'AI for intelligent infrastructure, data centers, wireless networks, digital twins, energy systems, autonomous control, and real-world optimization constraints.',
    topics: [
      'Cyber-physical systems',
      'AI for infrastructure',
      'Digital twins',
      'Wireless networks',
    ],
  },
] as const;

export const publicationFilterTags = [
  'Large Language Models',
  'Efficient Inference',
  'Model Compression',
  'Retrieval-Augmented Generation',
  'Agentic AI',
  'Trustworthy Evaluation',
  'Reinforcement Learning',
  'Representation Learning',
  'Alignment',
  'Knowledge Distillation',
  'Diffusion Models',
  'Black-Box Optimization',
  'Federated Learning',
  'Cyber-Physical Systems',
  'AI for Infrastructure',
] as const;

export const openPositions = [
  'PhD Students',
  'Postdoctoral Researchers',
  'Visiting Scholars',
  'Research Interns',
  'Undergraduate and Master’s Research Students',
  'Academic Collaborators',
  'Industry Collaborators',
] as const;

export const applicantInterests = [
  'Large Language Models',
  'Efficient Inference and Model Compression',
  'Retrieval-Augmented Generation',
  'Agentic AI and Evaluation',
  'Reinforcement Learning and Alignment',
  'Representation Learning',
  'Diffusion Models and Black-Box Optimization',
  'Federated Learning',
  'Cyber-Physical Systems',
  'AI for Infrastructure',
  'Digital Twins and Autonomous Control',
  'Trustworthy and Explainable AI',
  'Wireless Networks and Intelligent Communications',
] as const;

export const applicationMaterials = [
  'CV',
  'Research interests',
  'Representative publications or projects',
  'Homepage, GitHub, Google Scholar, or portfolio link if available',
  'Desired role and expected start date',
  'A short explanation of your interest in CPIL',
] as const;

export const recruitmentContacts = [
  { name: 'Bowei He', email: 'bowei.he@mbzuai.ac.ae' },
  { name: 'Haolun Wu', email: 'haolun.wu@mail.mcgill.ca' },
  { name: 'Ye Yuan', email: 'ye.yuan3@mail.mcgill.ca' },
] as const;

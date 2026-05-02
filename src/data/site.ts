export const siteInfo = {
  shortName: 'CPIL',
  name: 'Cyber-Physical Intelligence Lab',
  director: 'Prof. Xue (Steve) Liu',
  description:
    'CPIL studies intelligent cyber-physical systems, communication networks, systems-oriented AI, and trustworthy infrastructure.',
  platforms: ['MBZUAI', 'McGill University', 'Mila'],
  contactEmail: 'contact@cpil.example.edu',
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
  'Director',
  'Faculty / Senior Researchers',
  'PhD Students',
  'Postdocs',
  'Visiting Scholars',
  'Interns',
  'Alumni',
] as const;

export const researchAreas = [
  {
    title: 'Cyber-Physical Intelligence',
    summary: 'Learning, control, and decision-making for systems that couple computation with the physical world.',
  },
  {
    title: 'AI for Communication Networks',
    summary: 'Adaptive network optimization, resource allocation, and resilient communication systems.',
  },
  {
    title: 'Large Language Models for Systems and Telecom',
    summary: 'LLM-enabled reasoning, operations, and automation for complex systems and telecom workflows.',
  },
  {
    title: 'Graph-based Reasoning and Retrieval-Augmented Generation',
    summary: 'Structured retrieval and graph reasoning for explainable, grounded system intelligence.',
  },
  {
    title: 'Multi-agent Systems',
    summary: 'Collaborative agents for planning, diagnostics, and infrastructure-scale coordination.',
  },
  {
    title: 'Intelligent Infrastructure and IoT',
    summary: 'Sensing, edge intelligence, and data-driven operations for connected infrastructure.',
  },
] as const;

export const openPositions = [
  'PhD students',
  'Postdoctoral researchers',
  'Visiting scholars',
  'Research interns',
] as const;

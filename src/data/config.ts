/**
 * Velora Digital — Central Brand & Site Configuration
 * 
 * Keep company name, contact details, social links, and company profile
 * configurable from this single authoritative file.
 */

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techFocus: string[];
  diagramType: 'pipeline' | 'layers' | 'grid' | 'network';
}

export interface SolutionItem {
  id: string;
  title: string;
  businessProblem: string;
  outcomes: string[];
  approach: string;
  architectureHighlights: string[];
}

export interface ShowcaseProject {
  id: string;
  number: string;
  name: string;
  category: string;
  badge: 'Concept Project' | 'Illustrative Work';
  description: string;
  longDescription: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  highlights: string[];
  previewType: 'ecommerce' | 'operations' | 'mobile';
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  details: string;
  keyOutputs: string[];
}

export interface TechCategory {
  category: string;
  description: string;
  skills: { name: string; note: string }[];
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  readingTime: string;
  date: string;
  category: string;
  summary: string;
  body: {
    sectionHeading: string;
    paragraphs: string[];
  }[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  brand: {
    name: 'Technovinz',
    tagline: 'Thoughtfully Engineered. Digitally Exceptional.',
    shortStatement: 'A modern software engineering and product design consultancy partnering with forward-looking organizations.',
    industry: 'Software engineering, web development, mobile applications, cloud solutions, AI integration, and digital transformation.',
    personality: ['Premium', 'Innovative', 'Dependable', 'Precise', 'Forward-thinking', 'Design-conscious'],
    targetAudience: 'Startups, established businesses, growing enterprises, and organizations seeking reliable technology partners.',
    heroLabel: 'SOFTWARE ENGINEERING · PRODUCT DESIGN · CLOUD INNOVATION',
    heroHeadline: 'Building Digital Products With Purpose.',
    heroSupporting: 'We partner with ambitious businesses to design, engineer, and evolve digital experiences that solve real problems and create lasting value.',
    trustStatement: 'Built around your business goals. Designed for real-world growth.',
    brandSymbolImg: '/src/assets/images/technovinz_brand_symbol_1792643712634.jpg',
    heroStudioImg: '/src/assets/images/hero_studio_architecture_1792643714168.jpg',
    cloudInfrastructureImg: '/src/assets/images/tech_cloud_servers_1792644444903.jpg',
    aiProcessorImg: '/src/assets/images/tech_ai_silicon_1792644444400.jpg',
  },
  
  // Configurable contact placeholders — clearly noted per prompt requirements
  contact: {
    isConfigured: false, // Set to true when connected to an email service or live API endpoint
    placeholderNotice: 'Configurable placeholder — replace with verified organizational endpoints in production configuration.',
    inquiryEmail: 'inquiries@technovinz.example', // Placeholder
    supportEmail: 'hello@technovinz.example',    // Placeholder
    location: 'Available Globally · Remote-First Consultancy',
    timezone: 'UTC-5 to UTC+2 working overlap',
    responseCommitment: 'Inquiries are typically reviewed within 1 to 2 business days.',
  },

  socials: [
    { name: 'GitHub', href: 'https://github.com/technovinz', handle: 'technovinz' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/technovinz', handle: 'technovinz' },
    { name: 'X / Twitter', href: 'https://x.com/technovinz', handle: '@technovinz' },
  ],

  navigation: [
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'solutions', label: 'Solutions', href: '#solutions' },
    { id: 'work', label: 'Work', href: '#work' },
    { id: 'process', label: 'Process', href: '#process' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'insights', label: 'Insights', href: '#insights' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],

  principles: [
    {
      number: '01',
      title: 'Purpose Before Complexity',
      summary: 'Solve the actual problem before adding technology.',
      detail: 'Every line of code and architectural tier carries ongoing maintenance costs. We evaluate product hypotheses thoroughly, choosing simple, resilient designs over speculative complexity.',
    },
    {
      number: '02',
      title: 'Design With Intent',
      summary: 'Make every interaction clear, useful, and accessible.',
      detail: 'A digital product succeeds when users accomplish their work effortlessly. We construct intuitive navigation, legible typography, and accessible interaction models from day one.',
    },
    {
      number: '03',
      title: 'Engineering for Change',
      summary: 'Build systems that can evolve with changing needs.',
      detail: 'Software must adapt as business goals shift. We structure codebases with clear domain boundaries, modular services, thorough test harnesses, and automated deployment pipelines.',
    },
  ],

  services: [
    {
      id: 'custom-software',
      number: '01',
      title: 'Custom Software Development',
      tagline: 'Tailored architecture aligned to distinct business logic',
      description: 'Purpose-built software aligned with your workflows, operational requirements, and long-term business objectives.',
      deliverables: [
        'Domain-driven service architecture',
        'Custom business logic and rules engines',
        'Relational & document database schemas',
        'Full test coverage and release documentation',
      ],
      techFocus: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker'],
      diagramType: 'layers',
    },
    {
      id: 'web-apps',
      number: '02',
      title: 'Web Application Development',
      tagline: 'High-performance, reactive, and responsive web products',
      description: 'Secure, responsive, and maintainable web applications that connect users, data, and business processes.',
      deliverables: [
        'Server-rendered and client-side single page applications',
        'Design systems and accessible UI component libraries',
        'Real-time state synchronization and offline caching',
        'Performance optimization and bundle minimization',
      ],
      techFocus: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
      diagramType: 'grid',
    },
    {
      id: 'mobile-apps',
      number: '03',
      title: 'Mobile Application Development',
      tagline: 'Intuitive cross-platform and native experiences',
      description: 'Thoughtfully designed mobile experiences that make digital services accessible wherever people work and live.',
      deliverables: [
        'Cross-platform iOS and Android applications',
        'Touch-optimized gesture flows and offline data sync',
        'Secure biometric authentication and push notifications',
        'App store compliance, release builds, and monitoring',
      ],
      techFocus: ['React Native', 'Flutter', 'TypeScript', 'Mobile APIs'],
      diagramType: 'network',
    },
    {
      id: 'ui-ux-design',
      number: '04',
      title: 'UI/UX Design and Product Strategy',
      tagline: 'Research-led digital aesthetics and interaction systems',
      description: 'Research-led product thinking, user journeys, wireframes, interface systems, and interactive prototypes.',
      deliverables: [
        'User research, problem framing, and persona mapping',
        'High-fidelity interactive Figma design systems',
        'Information architecture and workflow journey mapping',
        'WCAG 2.1 AA accessibility audits and specifications',
      ],
      techFocus: ['Design Systems', 'User Research', 'Prototyping', 'Accessibility'],
      diagramType: 'pipeline',
    },
    {
      id: 'cloud-devops',
      number: '05',
      title: 'Cloud Engineering and DevOps',
      tagline: 'Automated, observable, and resilient infrastructure',
      description: 'Cloud infrastructure, deployment automation, containerization, observability, and reliable release workflows.',
      deliverables: [
        'Infrastructure as Code (Terraform / CloudFormation)',
        'CI/CD pipeline construction with automated gates',
        'Container orchestration, load balancing, and auto-scaling',
        'Centralized logging, distributed tracing, and uptime alerting',
      ],
      techFocus: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Terraform'],
      diagramType: 'layers',
    },
    {
      id: 'ai-integration',
      number: '06',
      title: 'Artificial Intelligence Integration',
      tagline: 'Pragmatic machine intelligence embedded in actual workflows',
      description: 'Practical AI-powered workflows, intelligent search, document processing, conversational interfaces, and automation.',
      deliverables: [
        'Semantic search and Retrieval-Augmented Generation (RAG)',
        'Structured extraction from documents, invoices, and contracts',
        'Task-specific model fine-tuning and agentic routing',
        'Evaluation benchmarks, cost controls, and guardrails',
      ],
      techFocus: ['LLM APIs', 'Vector Embeddings', 'Python', 'Retrieval Pipelines'],
      diagramType: 'network',
    },
    {
      id: 'api-integrations',
      number: '07',
      title: 'API Development and Integrations',
      tagline: 'Secure, consistent, and well-documented system interfaces',
      description: 'Well-structured APIs and system integrations that help applications exchange data and operate together.',
      deliverables: [
        'RESTful & GraphQL API design with OpenAPI specifications',
        'Third-party ERP, CRM, payment, and logistics integrations',
        'Event-driven webhooks and message queues',
        'Rate limiting, API key authentication, and audit trails',
      ],
      techFocus: ['REST', 'OpenAPI', 'Webhooks', 'Message Queues', 'Redis'],
      diagramType: 'pipeline',
    },
    {
      id: 'maintenance-modernization',
      number: '08',
      title: 'Maintenance and Modernization',
      tagline: 'Sustained product health, reliability, and technical evolution',
      description: 'Performance improvements, legacy modernization, security updates, technical support, and continuous product improvement.',
      deliverables: [
        'Incremental refactoring of monolithic legacy codebases',
        'Dependency vulnerability patching and security upgrades',
        'Core Web Vitals performance tuning and database indexing',
        'SLA-backed technical advisory and incident escalation',
      ],
      techFocus: ['Refactoring', 'Security Audits', 'Performance Tuning', 'Observability'],
      diagramType: 'grid',
    },
  ] as ServiceItem[],

  solutions: [
    {
      id: 'automation',
      title: 'Business Process Automation',
      businessProblem: 'Manual data entry, repetitive document handoffs, and disjointed team communication introduce human error and slow down operational throughput.',
      outcomes: [
        'Eliminates duplicate manual data entry across disconnected systems',
        'Accelerates request processing cycles with automated routing',
        'Maintains immutable audit records for regulatory oversight',
      ],
      approach: 'We map every manual step, identify verification bottlenecks, and build event-driven workers that validate and dispatch data automatically.',
      architectureHighlights: ['Worker queues', 'Validation schemas', 'Audit trails'],
    },
    {
      id: 'portals',
      title: 'Customer Portals & Self-Service',
      businessProblem: 'High volumes of routine support inquiries and manual status lookups create customer friction and burden customer service teams.',
      outcomes: [
        'Empowers clients with 24/7 access to orders, accounts, and reports',
        'Reduces routine support ticket volume significantly',
        'Provides transparent real-time status tracking',
      ],
      approach: 'We design intuitive, secure portals that give your customers direct visibility into their account lifecycle without needing staff intervention.',
      architectureHighlights: ['Role-based access', 'Real-time notifications', 'Self-service billing'],
    },
    {
      id: 'internal-tools',
      title: 'Internal Business Applications',
      businessProblem: 'Teams relying on disparate spreadsheets and improvised tools struggle with data fragmentation, version conflicts, and lost operational context.',
      outcomes: [
        'Unifies organizational data into a single source of truth',
        'Standardizes operational procedures across remote teams',
        'Improves role-specific task visibility and ownership',
      ],
      approach: 'We build tailored internal workspaces with responsive tables, granular permission tiers, and instant search configured directly around your company’s workflow.',
      architectureHighlights: ['Granular RBAC', 'Optimistic UI updates', 'Fast data search'],
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce & Digital Platforms',
      businessProblem: 'Generic storefront templates often suffer from sluggish loading speeds, clunky multi-step checkouts, and rigid inventory catalog limitations.',
      outcomes: [
        'Delivers lightning-fast catalog navigation and checkout',
        'Synchronizes inventory seamlessly with fulfillment channels',
        'Supports tailored promotional models and multi-currency pricing',
      ],
      approach: 'We build headless commerce architectures separating fast frontends from robust order management and payment orchestration services.',
      architectureHighlights: ['Headless storefronts', 'Secure payment webhooks', 'Inventory locks'],
    },
    {
      id: 'cloud-native',
      title: 'Cloud-Native Application Development',
      businessProblem: 'Monolithic servers running on single nodes suffer from scaling constraints, unpredictable downtime, and risky release deployments.',
      outcomes: [
        'Enables elastic auto-scaling based on actual traffic loads',
        'Isolates failure domains so issues do not cascade across services',
        'Supports zero-downtime rolling releases and instant rollbacks',
      ],
      approach: 'We containerize services, configure declarative infrastructure, and design stateless application tiers backed by managed cloud databases.',
      architectureHighlights: ['Containerized microservices', 'Automated health probes', 'Zero-downtime deploys'],
    },
    {
      id: 'dashboards',
      title: 'Data Dashboards & Reporting',
      businessProblem: 'Decision makers cannot act quickly when key operational metrics are locked inside fragmented databases, requiring manual weekly compilation.',
      outcomes: [
        'Provides real-time visibility into operational health and KPIs',
        'Consolidates multi-source metrics into unified visual views',
        'Supports parameterized filtering, CSV exports, and scheduling',
      ],
      approach: 'We build responsive analytical dashboards with optimized aggregation queries, clean visualizations, and exportable executive summaries.',
      architectureHighlights: ['Cached metric rollups', 'Interactive charting', 'Scheduled exports'],
    },
    {
      id: 'ai-workflows',
      title: 'AI-Assisted Workflows',
      businessProblem: 'Knowledge workers spend hours manually reading, classifying, and extracting key data from unstructured text, contracts, and support tickets.',
      outcomes: [
        'Synthesizes complex documents into structured, actionable JSON',
        'Enables natural language search over internal technical knowledge bases',
        'Assists agents with context-aware response drafting and classification',
      ],
      approach: 'We implement governed AI pipelines with strict schema validation, deterministic fallback logic, and cost-controlled token routing.',
      architectureHighlights: ['Strict JSON schemas', 'Vector search embeddings', 'Deterministic fallbacks'],
    },
    {
      id: 'modernization',
      title: 'Legacy Application Modernization',
      businessProblem: 'Aging software architectures incur escalating maintenance expenses, lack modern security controls, and deter skilled engineering talent.',
      outcomes: [
        'Preserves valuable historical data while introducing modern interfaces',
        'Mitigates security liabilities through modern dependency ecosystems',
        'Dramatically reduces technical debt and maintenance overhead',
      ],
      approach: 'We apply the Strangler Fig pattern, systematically replacing high-risk components with modern microservices while keeping the core business operational.',
      architectureHighlights: ['Strangler Fig refactoring', 'Dual-write data sync', 'Contract testing'],
    },
  ],

  projects: [
    {
      id: 'meridian-commerce',
      number: '01',
      name: 'Meridian Commerce',
      category: 'E-commerce platform concept',
      badge: 'Concept Project',
      description: 'A proposed storefront and order management experience designed to simplify product discovery, inventory visibility, and purchasing workflows.',
      longDescription: 'Meridian Commerce illustrates our approach to unified retail engineering. It combines an ultra-fast headless storefront with an integrated fulfillment console. The architecture isolates browsing traffic from transactional checkout workloads, guaranteeing that inventory reservations, multi-currency conversion, and payment gateway callbacks execute with low latency and atomic consistency.',
      metrics: [
        { label: 'Proposed Architecture', value: 'Headless / Edge' },
        { label: 'Target Latency', value: '< 180ms TTFB' },
        { label: 'Inventory Sync Mode', value: 'Real-time Webhook' },
      ],
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Redis Cache', 'Stripe API'],
      highlights: [
        'Headless storefront with instant client-side filtering',
        'Back-office inventory reservation & multi-warehouse status',
        'Optimized single-step checkout flow with fraud detection hooks',
      ],
      previewType: 'ecommerce',
      image: '/src/assets/images/tech_meridian_commerce_1792644443622.jpg',
    },
    {
      id: 'atlas-operations',
      number: '02',
      name: 'Atlas Operations',
      category: 'Business operations platform concept',
      badge: 'Concept Project',
      description: 'A proposed centralized workspace for operational reporting, task visibility, and cross-team coordination.',
      longDescription: 'Atlas Operations represents an enterprise control center designed to replace scattered status spreadsheets. Featuring customizable dashboard modules, live process throughput indicators, and role-governed task assignment feeds, it provides executive clarity alongside tactical execution tracking.',
      metrics: [
        { label: 'System Topology', value: 'Event-driven SPA' },
        { label: 'Role Granularity', value: '4 Permission Tiers' },
        { label: 'State Sync', value: 'WebSocket / SSE' },
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Chart.js'],
      highlights: [
        'Configurable KPI dashboard with real-time process indicators',
        'Role-governed task assignment feeds and audit log review',
        'Parameterized CSV data exports and scheduled report summaries',
      ],
      previewType: 'operations',
      image: '/src/assets/images/atlas_operations_showcase_1792643715148.jpg',
    },
    {
      id: 'luma-connect',
      number: '03',
      name: 'Luma Connect',
      category: 'Customer mobile application concept',
      badge: 'Concept Project',
      description: 'A proposed mobile-first service experience focused on accessible navigation, account management, and customer interactions.',
      longDescription: 'Luma Connect demonstrates our mobile interaction principles for customer-facing services. Designed with thumb-zone ergonomics, quick biometric verification, and resilient offline data caching, it allows users to manage their service agreements, submit support inquiries, and view account history seamlessly on any device.',
      metrics: [
        { label: 'Target Form Factors', value: 'iOS & Android' },
        { label: 'Offline Resilience', value: 'Local Cache Sync' },
        { label: 'Accessibility Standard', value: 'WCAG 2.1 AA' },
      ],
      techStack: ['React Native', 'TypeScript', 'Tailwind Mobile', 'REST APIs', 'SQLite Cache'],
      highlights: [
        'Ergonomic thumb-accessible navigation with smooth transitions',
        'Biometric authentication support with local encrypted storage',
        'Offline capability with automatic conflict-free delta syncing',
      ],
      previewType: 'mobile',
      image: '/src/assets/images/tech_luma_mobile_1792644444719.jpg',
    },
  ] as ShowcaseProject[],

  process: [
    {
      number: '01',
      title: 'Discover',
      summary: 'Understand the business, users, existing systems, constraints, and intended outcomes.',
      details: 'We begin by conducting focused discovery sessions with your key stakeholders. We inspect your existing software ecosystem, map data flows, articulate technical constraints, and define quantitative criteria for success.',
      keyOutputs: ['Technical constraint analysis', 'Operational scope document', 'Success metrics definition'],
    },
    {
      number: '02',
      title: 'Define',
      summary: 'Establish requirements, prioritize features, map user journeys, and agree on technical direction.',
      details: 'Once the problem space is clear, we formulate a structured technical roadmap. We separate essential core capabilities from secondary enhancements, define data models, and agree on system architecture.',
      keyOutputs: ['Domain architecture blueprint', 'User journey specifications', 'Milestone delivery plan'],
    },
    {
      number: '03',
      title: 'Design',
      summary: 'Create wireframes, interface systems, prototypes, and a consistent experience.',
      details: 'Our design team crafts complete interface systems with attention to typography, spatial hierarchy, accessibility, and state management. We test clickable prototypes to validate usability before code is written.',
      keyOutputs: ['Design system & component specs', 'Interactive clickable prototypes', 'Accessibility audit baseline'],
    },
    {
      number: '04',
      title: 'Engineer',
      summary: 'Develop, test, integrate, and validate the application through structured engineering practices.',
      details: 'We develop software in transparent, disciplined sprints. Every change is peer-reviewed, verified against automated test suites, and deployed to staging environments for continuous stakeholder visibility.',
      keyOutputs: ['Modular TypeScript codebase', 'Automated CI/CD test harness', 'Staging deployment builds'],
    },
    {
      number: '05',
      title: 'Deliver and Evolve',
      summary: 'Deploy the solution, document operations, monitor performance, and improve based on feedback.',
      details: 'We execute zero-downtime production releases backed by monitoring and alerting. We provide complete technical runbooks, train your internal team, and offer continuous architectural refinement.',
      keyOutputs: ['Production deployment setup', 'Operational runbooks & documentation', 'Performance monitoring alerts'],
    },
  ],

  techStack: [
    {
      category: 'Frontend',
      description: 'Modern, typed client architectures focused on speed, accessibility, and maintainability.',
      skills: [
        { name: 'React', note: 'Component architecture & custom hooks' },
        { name: 'Next.js', note: 'Hybrid SSR, SSG & Edge execution' },
        { name: 'TypeScript', note: 'Strict typing & domain modeling' },
        { name: 'HTML5 & CSS3', note: 'Semantic markup & modern standards' },
        { name: 'Tailwind CSS', note: 'Design token architecture & utility layouts' },
      ],
    },
    {
      category: 'Backend',
      description: 'Resilient application servers, business logic engines, and distributed APIs.',
      skills: [
        { name: 'Node.js', note: 'High-throughput asynchronous runtimes' },
        { name: 'Python', note: 'Data processing & machine learning pipelines' },
        { name: 'REST APIs', note: 'OpenAPI-compliant interface design' },
      ],
    },
    {
      category: 'Mobile',
      description: 'Cross-platform mobile frameworks delivering native fidelity with shared logic.',
      skills: [
        { name: 'React Native', note: 'Declarative mobile apps with native components' },
        { name: 'Flutter', note: 'High-performance compiled native apps' },
      ],
    },
    {
      category: 'Cloud and infrastructure',
      description: 'Reliable cloud topologies designed for high availability and elastic demand.',
      skills: [
        { name: 'Amazon Web Services', note: 'ECS, S3, RDS, Lambda, CloudFront' },
        { name: 'Microsoft Azure', note: 'App Services, Blob Storage, Azure SQL' },
        { name: 'Docker', note: 'Multi-stage containerized deployments' },
        { name: 'Linux', note: 'Hardened Alpine/Debian server environments' },
      ],
    },
    {
      category: 'DevOps and automation',
      description: 'Reproducible build pipelines, infrastructure automation, and automated validation.',
      skills: [
        { name: 'Git & GitHub', note: 'Version control & branch governance' },
        { name: 'GitHub Actions', note: 'Continuous integration & deployment gates' },
        { name: 'CI/CD Pipelines', note: 'Automated testing, linting & deployment' },
        { name: 'Terraform', note: 'Declarative Infrastructure as Code (IaC)' },
        { name: 'Container Orchestration', note: 'Container lifecycle & cluster management' },
      ],
    },
    {
      category: 'Data',
      description: 'Transactional databases, caching tiers, and reliable data interchange layers.',
      skills: [
        { name: 'PostgreSQL', note: 'Relational storage, JSONB & indexing' },
        { name: 'MySQL', note: 'Structured relational data management' },
        { name: 'Redis', note: 'In-memory caching & distributed session state' },
        { name: 'Data Integration Tools', note: 'ETL routines & message brokers' },
      ],
    },
    {
      category: 'AI',
      description: 'Structured model integrations designed to enhance human productivity safely.',
      skills: [
        { name: 'Large Language Models', note: 'Prompt orchestration & structured JSON outputs' },
        { name: 'Intelligent Automation', note: 'Document categorization & routing workflows' },
        { name: 'Semantic Search', note: 'Vector embeddings & hybrid relevance ranking' },
        { name: 'Document Processing', note: 'Automated data extraction & normalization' },
      ],
    },
  ],

  engineeringPrinciples: [
    {
      number: '01',
      title: 'Security-Conscious Implementation',
      summary: 'Protection embedded across every software tier',
      details: 'We enforce least-privilege credentials, input sanitization, rate limiting, and encrypted data storage both in transit and at rest. Security reviews form an intrinsic part of our standard development lifecycle.',
      checks: ['Input sanitization & parameterization', 'Encrypted transit (TLS) & storage', 'Role-based authorization checks'],
    },
    {
      number: '02',
      title: 'Maintainable Architecture',
      summary: 'Clean modularity that future engineers can understand',
      details: 'We write explicit, typed code with clear domain boundaries. By minimizing circular dependencies and documenting core decisions, we keep onboarding friction low and feature extensions manageable.',
      checks: ['Strict separation of concerns', 'Comprehensive TypeScript definitions', 'Architecture Decision Records (ADRs)'],
    },
    {
      number: '03',
      title: 'Automated Testing and Validation',
      summary: 'Fast automated test gates before any code merges',
      details: 'Unit tests confirm core business calculations, integration tests verify API and database contracts, and end-to-end suites protect critical user workflows from regression.',
      checks: ['Automated unit & integration tests', 'Static analysis & linting gates', 'Reproducible test harnesses'],
    },
    {
      number: '04',
      title: 'Deployment and Operational Visibility',
      summary: 'Continuous insight into health, errors, and release state',
      details: 'We configure structured JSON logging, distributed tracing, and health probes so operations teams can observe real-world performance and respond proactively to anomalies.',
      checks: ['Zero-downtime rolling deployments', 'Structured health check endpoints', 'Centralized error tracking & alerts'],
    },
  ],
  securityDisclaimer: 'Note: Security and reliability measures are selected and calibrated according to specific project requirements, risk profiles, and infrastructure configurations. They do not imply a guarantee of absolute security or uninterrupted operation.',

  aboutValues: [
    {
      title: 'Clarity in communication',
      description: 'We speak in plain, transparent language. We share architectural tradeoffs, project progress, and risks openly so decisions are grounded in reality.',
    },
    {
      title: 'Care in execution',
      description: 'From pixel alignment in the user interface to clean database indexes, we take craftsmanship seriously at every layer of the digital stack.',
    },
    {
      title: 'Accountability in delivery',
      description: 'We take ownership of our commitments, write defensive code, stand behind our implementations, and support our partners through deployment and beyond.',
    },
    {
      title: 'Curiosity in problem-solving',
      description: 'We invest time into understanding the root operational causes behind software challenges, exploring the most effective and durable path forward.',
    },
    {
      title: 'Continuous improvement',
      description: 'Technology changes rapidly. We continuously refine our engineering playbooks, evaluate emerging tools pragmatically, and share learnings openly.',
    },
  ],

  engagementModels: [
    {
      id: 'project-based',
      title: 'Project-Based Delivery',
      subtitle: 'Defined scope, milestones, and agreed deliverables',
      description: 'Ideal for greenfield applications, complete redesigns, or specific discrete software features with established requirements and clear boundaries.',
      features: [
        'Structured discovery and architectural specification',
        'Fixed or milestone-based delivery schedule',
        'Dedicated project management and weekly demos',
        'Formal handoff, deployment runbook, and warranty window',
      ],
      fitFor: 'Businesses with well-defined product requirements needing end-to-end execution.',
    },
    {
      id: 'dedicated-support',
      title: 'Dedicated Development Support',
      subtitle: 'Ongoing engineering capacity aligned with product priorities',
      description: 'Ideal for growing companies needing dedicated engineers and designers to accelerate roadmap velocity and maintain product health over time.',
      features: [
        'Dedicated senior engineers integrated with your workflow',
        'Sprint-based planning with dynamic backlog reprioritization',
        'Direct communication via your team’s preferred channels',
        'Continuous performance tuning, refactoring, and feature work',
      ],
      fitFor: 'Product teams requiring sustained velocity and specialized domain expertise.',
    },
    {
      id: 'consulting-advisory',
      title: 'Consulting and Technical Advisory',
      subtitle: 'Architecture reviews, implementation guidance, and technical roadmaps',
      description: 'Ideal for organizations seeking expert guidance on system design, cloud migrations, AI adoption strategy, or code quality audits.',
      features: [
        'Comprehensive codebase and infrastructure architecture audits',
        'Cloud migration roadmaps and cost optimization reviews',
        'Technology selection analysis with documented tradeoffs',
        'Technical leadership advisory for executives and engineering leads',
      ],
      fitFor: 'Leaders seeking independent technical diligence and strategic guidance.',
    },
  ],

  articles: [
    {
      id: 'article-1',
      slug: 'choosing-an-architecture-that-can-grow-with-your-product',
      title: 'Choosing an Architecture That Can Grow With Your Product',
      readingTime: '5 min read',
      date: 'October 2026',
      category: 'Software Architecture',
      summary: 'Why early technical decisions should emphasize modular boundaries and straightforward deployment over speculative microservice sprawl.',
      body: [
        {
          sectionHeading: 'The Temptation of Premature Distribution',
          paragraphs: [
            'In modern software engineering, one of the most common pitfalls is adopting complex distributed architectures before understanding the true operational boundaries of the domain. When an engineering team splits a nascent product into a dozen microservices on day one, they do not just distribute their code; they distribute their cognitive overhead, multiply network latency, and introduce complex failure states across RPC boundaries.',
            'A modular monolith—written with strict internal boundary layers and explicit domain interfaces—offers superior developer ergonomics, trivial local debugging, and unified transactional boundaries. It can be built and deployed in minutes while preserving the exact organizational boundaries needed to extract independent services later when genuine scale demands it.',
          ],
        },
        {
          sectionHeading: 'Designing for Extraction, Not Speculation',
          paragraphs: [
            'The key to scalable software is not guessing where traffic will peak; it is structuring modules so they can be isolated without rewriting business logic. Ensure that separate domains communicate via explicit service interfaces rather than direct cross-table joins. When database operations stay confined to their respective domains, migrating a module to an independent database or container becomes an orderly engineering task rather than an existential crisis.',
          ],
        },
        {
          sectionHeading: 'Summary Guidance',
          paragraphs: [
            'Start with clear boundaries, enforce them with automated linters and type systems, and let measured real-world bottlenecks dictate when you introduce infrastructure complexity.',
          ],
        },
      ],
    },
    {
      id: 'article-2',
      slug: 'why-deployment-automation-matters-beyond-speed',
      title: 'Why Deployment Automation Matters Beyond Speed',
      readingTime: '4 min read',
      date: 'September 2026',
      category: 'DevOps & Reliability',
      summary: 'Deployment automation is often celebrated for shipping fast, but its true superpower is eliminating cognitive fatigue and production anxiety.',
      body: [
        {
          sectionHeading: 'Eliminating the Human Checklist',
          paragraphs: [
            'Manual releases depend on humans executing a sequence of commands correctly under stress. Even the most disciplined engineers eventually forget an environment variable, misconfigure a cache flush, or apply a migration in the wrong sequence during an off-hours release window.',
            'Automated CI/CD pipelines transform deployments from nerve-wracking events into predictable, non-events. When every pull request is automatically tested, containerized, scanned for vulnerabilities, and validated against staging environments, releases become routine operations that any team member can trigger with confidence.',
          ],
        },
        {
          sectionHeading: 'The Psychological Dividend of Fast Rollbacks',
          paragraphs: [
            'When a team knows that an unforeseen bug can be remediated with an automated rollback in under ninety seconds, their willingness to ship improvements increases dramatically. Small, frequent deployments dramatically shrink the blast radius of any individual change, making root-cause analysis fast and painless.',
          ],
        },
      ],
    },
    {
      id: 'article-3',
      slug: 'designing-interfaces-that-make-complex-work-feel-simple',
      title: 'Designing Interfaces That Make Complex Work Feel Simple',
      readingTime: '6 min read',
      date: 'August 2026',
      category: 'Product & UX Design',
      summary: 'How intentional visual hierarchy, contextual density, and restrained aesthetics allow users to master data-intensive software without cognitive overload.',
      body: [
        {
          sectionHeading: 'The Problem of Cluttered Enterprise Software',
          paragraphs: [
            'Too many B2B applications confuse visual density with capability. When every button is saturated with accent color, every card has heavy shadows, and every metric is boxed in brightly colored badges, the human eye cannot find an anchor point. Users experience cognitive fatigue simply attempting to locate their next task.',
            'Thoughtful product design applies negative space, typographic scale, and subdued neutral backgrounds to create natural visual pathways. By subduing secondary controls and highlighting primary actions deliberately, complex enterprise workflows become intuitive and calm.',
          ],
        },
        {
          sectionHeading: 'Progressive Disclosure in Action',
          paragraphs: [
            'Not all information is needed simultaneously. Great software leverages progressive disclosure: displaying immediate essentials on initial scan while keeping advanced parameters, audit records, and configuration options one clean click away. This balances rapid daily navigation for experienced power users with a gentle learning curve for newcomers.',
          ],
        },
      ],
    },
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'What types of software do you develop?',
      answer: 'We develop custom web applications, mobile applications (iOS and Android), internal business tools, customer self-service portals, headless e-commerce architectures, cloud infrastructure automation, and practical AI-assisted workflows. Our focus is on dependable, purpose-built digital products tailored to your operational objectives.',
    },
    {
      id: 'faq-2',
      question: 'Can you work with an existing application?',
      answer: 'Yes. We frequently partner with organizations to audit, refactor, and modernize existing codebases. We begin with a technical evaluation to understand architecture, code quality, test coverage, and security postures, then formulate an incremental roadmap to address technical debt without disrupting day-to-day operations.',
    },
    {
      id: 'faq-3',
      question: 'Do you provide cloud and DevOps services?',
      answer: 'Yes. We design and maintain cloud infrastructure across AWS and Azure using modern containerization (Docker) and Infrastructure as Code (Terraform). We construct automated CI/CD pipelines, configure central logging and monitoring, and establish automated deployment workflows with health checks.',
    },
    {
      id: 'faq-4',
      question: 'Can you integrate AI into an existing product?',
      answer: 'Yes, where there is a clear operational or user benefit. We specialize in practical machine intelligence: semantic document search, automated data extraction, intelligent classification, and structured LLM integrations with deterministic schema validation and strict cost controls.',
    },
    {
      id: 'faq-5',
      question: 'How does a typical project begin?',
      answer: 'Every engagement begins with an introductory discovery discussion to understand your business objectives, constraints, and success criteria. For defined initiatives, we then conduct a short technical discovery phase to produce architectural specifications, scope estimates, and an agreed milestone roadmap before engineering commences.',
    },
    {
      id: 'faq-6',
      question: 'How do you estimate project cost and timelines?',
      answer: 'We estimate projects based on technical complexity, architectural scope, integration requirements, and delivery milestones. We do not publish generic price tables because every system has unique requirements. Following our discovery session, we provide transparent, itemized estimates with clearly defined milestones and risk considerations.',
    },
    {
      id: 'faq-7',
      question: 'Do you provide maintenance after deployment?',
      answer: 'Yes. We provide post-launch support options including ongoing performance monitoring, security patch management, framework upgrades, infrastructure maintenance, and dedicated sprint capacity for continuous feature evolution.',
    },
  ],

  legal: {
    privacyPolicy: {
      title: 'Privacy Policy',
      lastUpdated: 'October 2026',
      sections: [
        {
          heading: '1. Information We Collect',
          content: 'When you submit an inquiry through our website, we collect your name, work email, organization name, and project description solely to evaluate and respond to your business inquiry. We do not sell or rent personal information to third parties.',
        },
        {
          heading: '2. How We Use Information',
          content: 'Information provided is used exclusively to communicate regarding potential software development services, provide technical proposals, and manage our business relationship.',
        },
        {
          heading: '3. Data Security & Retention',
          content: 'We employ industry-standard technical measures to safeguard inquiries. Contact data is retained only as long as necessary to fulfill the purpose of our communications or comply with statutory requirements.',
        },
        {
          heading: '4. Your Rights',
          content: 'You may request review, modification, or deletion of your contact records at any time by contacting our designated privacy address.',
        },
      ],
    },
    termsOfService: {
      title: 'Terms of Service',
      lastUpdated: 'October 2026',
      sections: [
        {
          heading: '1. Acceptance of Terms',
          content: 'By accessing the Technovinz website, you agree to these Terms of Service. If you disagree with any part, please refrain from using our website.',
        },
        {
          heading: '2. Informational Purpose & Concept Work',
          content: 'All materials, conceptual case studies, and architectural overviews presented on this website are provided for illustrative and informational purposes. Concept projects are labeled as such and do not constitute representations of past commercial engagements.',
        },
        {
          heading: '3. Intellectual Property',
          content: 'All trademarks, service marks, copy, interface designs, diagrams, and code snippets on this website are the intellectual property of Technovinz unless otherwise noted.',
        },
        {
          heading: '4. Limitation of Liability',
          content: 'Technovinz makes no warranties regarding uninterrupted availability of this website. Formal software engineering deliverables are governed exclusively by executed master services agreements.',
        },
      ],
    },
  },
};

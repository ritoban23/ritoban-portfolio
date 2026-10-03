/**
 * Run once to seed Sanity with all existing data from resume.tsx
 * Usage: npx tsx scripts/seed-sanity.ts
 */
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'icf8axc4',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function seed() {
  console.log('🌱 Seeding Sanity...')

  // ── Profile ──────────────────────────────────────────────────────────────
  await client.createOrReplace({
    _id: 'profile',
    _type: 'profile',
    name: 'Ritoban Dutta',
    title: 'Software Developer',
    institution: 'CS Graduate, KIIT University',
    institutionUrl: 'https://kiit.ac.in',
    email: 'ankudutt101@gmail.com',
    avatarUrl: '/lappypic.JPG',
    heroDescription: 'Crafting scalable software for complex realities. Obsessed with the nuance of systems thinking, distributed architecture, and the beauty of open-source collaboration. A perpetual student of the ever-evolving digital landscape.',
    beginnersMind: `Cultivating a "beginner's mind" to approach complex problems with fresh eyes, constantly deconstructing and rebuilding my understanding of the world—all while striving for technical excellence and impact.`,
    convergenceParagraph: `The convergence of these distinct traits is what fuels my engineering philosophy and pushes me to build beyond the status quo.\n\nI live to ship code that matters. I am energized by the chaos of creation and the order of logic. I am obsessed with distributed systems, algorithmic efficiency, the nuance of open collaboration, and the endless possibilities of intelligent software. I remain a perpetual student of the craft to ensure I am always building at the bleeding edge. The digital landscape is vast, and I have only just begun to explore its depths.`,
    aboutMeClosing: 'You will often find me side-questing: dabbling in design, music, weaving little bits of storytelling, and keeping up with sports.',
    githubUsername: 'ritoban23',
    linkedinUsername: 'ritoban-dutta',
    mediumUsername: 'ritoban',
    scholarUrl: 'https://scholar.google.com/citations?hl=en&user=xlKhB2sAAAAJ&view_op=list_works',
  })
  console.log('✅ Profile')

  // ── Work Experience ───────────────────────────────────────────────────────
  const work = [
    { order: 1, company: 'Technical Alignment Research Accelerator', href: 'https://www.linkedin.com/company/tara-alignment/', location: 'Hybrid', title: 'AI Safety Research Fellow', logoUrl: 'https://static.wixstatic.com/media/8e5533_7151e824542f416a953c85f350f533a0~mv2.png/v1/fill/w_262,h_141,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8e5533_7151e824542f416a953c85f350f533a0~mv2.png', start: '08/2026', end: 'Present', isCurrentRole: true, description: ['Studying transformer architectures, mechanistic interpretability, reinforcement learning, and model evaluations.', 'Solving alignment problems alongside an APAC-wide cohort of engineers and researchers.'] },
    { order: 2, company: 'Arintra (YC W22)', href: 'https://www.linkedin.com/company/arintra/', location: 'Bengaluru, India · Hybrid', title: 'Software Development Engineer (Intern)', logoUrl: 'https://cdn.prod.website-files.com/654b2d530601810c247fdd5d/6a8186c70ffe83c819bf80c5_Group%202147259684.svg', start: '04/2026', end: 'Present', isCurrentRole: true, description: ['Building an industry leader in healthcare revenue cycle operations through intelligent automation and AI.', 'Developing AI-assisted engineering workflows, LLM-powered automation pipelines, and data infrastructure for a production healthcare AI platform.', 'Cross-functional collaboration with product, data science, and clinical domain experts on healthcare NLP workflows.'] },
    { order: 3, company: 'Datacurve (YC W24)', href: 'https://datacurve.ai', location: 'Remote', title: 'FOSS Engineer (Contract)', logoUrl: '/datacurve.avif', start: '12/2025', end: '03/2026', isCurrentRole: false, description: ['Engineering robust solutions for critical bugs and features across major open-source ecosystems.', "Generating data for State-of-the-Art LLMs, directly contributing to the 'Project Mars' program on Shipd platform."] },
    { order: 4, company: 'Open Source', href: 'https://github.com/ritoban23', location: 'Global', title: 'Contributor', logoUrl: '/github.svg', start: '06/2025', end: 'Present', isCurrentRole: true, description: ['Big Tech & Systems: Merged production-grade code optimizations for Microsoft, Meta, Uber, and Apache.', 'AI & Data: Refactored core logic and testing suites for Pandas, MLflow, MindsDB, and Timescale.', 'Web Ecosystem: Improved performance, accessibility, and tooling for Storybook, WordPress, and Biome.'] },
    { order: 5, company: 'Federation of Entrepreneurship Development', href: '#', location: 'Bhubaneswar, India', title: 'Senior Creative Executive', logoUrl: '/fed.svg', start: '09/2022', end: '12/2024', isCurrentRole: false, description: ['Architected responsive web solutions increasing engagement by ~25% across event pages.', 'Drove technical literacy for 200+ students through analytical workshops.'] },
  ]
  for (const w of work) {
    await client.create({ _type: 'workExperience', ...w })
  }
  console.log('✅ Work Experience (5 entries)')

  // ── Education ─────────────────────────────────────────────────────────────
  await client.create({ _type: 'education', order: 1, school: 'KIIT University', href: 'https://kiit.ac.in', degree: 'B.Tech in Computer Science', logoUrl: '', start: '2022', end: '2026' })
  console.log('✅ Education')

  // ── Publications ──────────────────────────────────────────────────────────
  const publications = [
    { order: 1, featured: true, year: '2024', conference: 'IEEE', title: 'Self-Driving Cars: An Epitome of Technological Innovation', authors: 'Ritoban Dutta', paperUrl: 'https://ieeexplore.ieee.org/abstract/document/10962726', tldr: 'A comprehensive exploration of the technological innovations driving autonomous vehicle development, covering sensor systems, machine learning algorithms, and safety considerations that are shaping the future of transportation.', category: 'Research' },
    { order: 2, featured: true, year: '2025', conference: 'Cambridge Scholars Publishing', title: 'Leveraging GenAI For Multi-Modal Content Creation', authors: 'Ritoban Dutta', paperUrl: 'https://scholar.google.com/citations?hl=en&user=xlKhB2sAAAAJ&view_op=list_works', tldr: 'Research exploring how generative AI can be harnessed for creating multi-modal content across text, images, and audio — with a focus on practical applications and ethical considerations. Published by Cambridge Scholars Publishing.', category: 'Research' },
    { order: 3, featured: true, year: '2026', conference: 'IFIP IoT 2026 (In Progress)', title: 'Adaptive Priority Scheduler for Pipeline-Aware MLOps Workloads on Kubernetes', authors: 'Ritoban Dutta', tldr: 'Targeting the 9th IFIP International Internet of Things Conference (IFIP IoT 2026). Research on an adaptive priority scheduling system for pipeline-aware MLOps workloads on Kubernetes.', category: 'Research' },
    { order: 4, featured: false, year: '2023', conference: 'Bookleaf Publishing', title: "Days That Breathe Life and Days That Don't", authors: 'Ritoban Dutta', paperUrl: 'https://www.amazon.in/Days-That-Breathe-Life-Dont/dp/936331183X', tldr: "A collection of reflective prose and poetry exploring the duality of human experience—the days that fill us with purpose and the ones that challenge our resilience.", category: 'Books' },
    { order: 5, featured: false, year: '2025', conference: 'Technical Deep Dive', title: 'Crypto Protocol Auditor: MindsDB Hacktoberfest', authors: 'Ritoban Dutta', paperUrl: 'https://medium.com/@ankudutt101/crypto-protocol-auditor-mindsdb-hacktoberfest-3c52ff00d7ff', tldr: 'How I built an AI-powered auditor to cut through the noise in the crypto/web3 space.', category: 'Blogs' },
    { order: 6, featured: false, year: '2025', conference: 'Personal Insights', title: 'Random Debugging Epiphanies: From Frustration to Flow', authors: 'Ritoban Dutta', paperUrl: 'https://medium.com/@ankudutt101/random-debugging-epiphanies-from-frustration-to-flow-b7ce6dfb9166', tldr: 'When I started web development, I quickly realized that the most challenging aspect was overcoming mysterious bugs and finding clarity through the chaos of debugging.', category: 'Blogs' },
  ]
  for (const p of publications) {
    await client.create({ _type: 'publication', ...(p as Record<string, unknown>) })
  }
  console.log('✅ Publications (6 entries)')

  // ── Projects ──────────────────────────────────────────────────────────────
  const projects = [
    { order: 1, featured: true, title: 'Crypto Protocol Auditor', href: 'https://github.com/ritoban23/crypto-protocol-auditor', dates: '2025', description: 'AI-powered auditor built on MindsDB that unifies scattered crypto/web3 data into one conversational interface. Analyzes whitepapers, live data, and protocol health.', technologies: ['MindsDB', 'Next.js', 'Python', 'LLM APIs', 'SQL', 'REST APIs'], imageUrl: 'https://raw.githubusercontent.com/ritoban23/crypto-protocol-auditor/main/assets/logo.png', category: 'AI / ML' },
    { order: 2, featured: true, title: 'GCP Retail Analytics Pipeline', href: 'https://github.com/ritoban23/gcp-retail-analytics-pipeline', dates: '2024', description: 'End-to-end data engineering platform on GCP — ingests transactional retail data from Cloud SQL via PySpark on Dataproc, stores it in a GCS data lake, models it in BigQuery using a Medallion Architecture (Bronze → Silver → Gold), and visualises business insights in Looker Studio.', technologies: ['GCP', 'BigQuery', 'PySpark', 'Dataproc', 'Cloud SQL', 'Looker Studio', 'Python', 'SQL'], category: 'Data Engineering' },
    { order: 3, featured: true, title: 'nextflow', href: 'https://github.com/ritoban23/nextflow', dates: '2025', description: 'CLI tool that scaffolds production-ready Next.js projects with a single command — pre-wired with auth, DB, CI/CD, and best-practice structure.', technologies: ['CLI', 'Next.js', 'TypeScript', 'Developer Tools'], category: 'Developer Tools' },
    { order: 4, featured: false, title: 'gh-showcase', href: 'https://github.com/ritoban23/gh-showcase', dates: '2025', description: 'Drop-in React component to visualize your GitHub activity, PR breakdown, and developer DNA in seconds. Published as an NPM package for easy integration.', technologies: ['React', 'TypeScript', 'GitHub API', 'NPM Package'], imageUrl: 'https://raw.githubusercontent.com/ritoban23/gh-showcase/main/public/gh-showcase-logo.png', category: 'Developer Tools' },
    { order: 5, featured: false, title: 'North Star', href: 'https://github.com/ritoban23/north-star', dates: '2025', description: 'Keep track of your activities and how they are helping you progress towards your goals right from your terminal! A Go/Bubbletea-based terminal app with a beautiful TUI.', technologies: ['Go', 'Bubbletea', 'TUI', 'CLI'], imageUrl: 'https://raw.githubusercontent.com/ritoban23/north-star/main/assets/northstar_logo.png', category: 'CLI & Systems' },
    { order: 6, featured: false, title: 'Coin Smith', href: 'https://github.com/ritoban23/coin-smith', dates: '2026', description: 'A PSBT builder with a premium dark-themed web UI for the Summer of Bitcoin 2026 Developer Challenge. Features greedy coin selection, BIP-174 compliant PSBT construction, and an educational UI.', technologies: ['Node.js', 'Express.js', 'bitcoinjs-lib', 'Jest', 'HTML/CSS/JS'], category: 'Web3 & Blockchain' },
    { order: 7, featured: false, title: 'orbWallet', href: 'https://github.com/ritoban23/orbWallet', dates: '2024', description: 'A web3 wallet key pair generator for Solana & Ethereum. Create multiple wallets, public/private key pairs, and manage your crypto assets securely.', technologies: ['Solana', 'Ethereum', 'Web3', 'Cryptography'], category: 'Web3 & Blockchain' },
    { order: 8, featured: false, title: 'Terraform AWS Nginx Docker', href: 'https://github.com/ritoban23/terraform-aws-nginx-docker', dates: '2026', description: 'A modular Terraform project to provision an AWS VPC, EC2 instance, and deploy Nginx/Docker.', technologies: ['Terraform', 'AWS', 'Docker', 'Nginx', 'HCL'], category: 'DevOps' },
  ]
  for (const p of projects) {
    await client.create({ _type: 'project', ...(p as Record<string, unknown>) })
  }
  console.log('✅ Projects (8 entries)')

  console.log('\n🎉 Seeding complete! Visit ritoban.dev/studio to manage your content.')
}

seed().catch((err) => {
  console.error('❌ Seeding failed:', err.message)
  process.exit(1)
})

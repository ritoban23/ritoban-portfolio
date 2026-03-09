import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { HtmlIcon } from "@/components/ui/svgs/html";

import { JavaScriptIcon } from "@/components/ui/svgs/javascript";
import { GitIcon } from "@/components/ui/svgs/git";
import { MongoDBIcon } from "@/components/ui/svgs/mongodb";
import { AwsIcon } from "@/components/ui/svgs/aws";
import { TailwindIcon } from "@/components/ui/svgs/tailwind";
import type { SVGProps, ComponentType } from "react";

export type SkillItem = {
    name: string;
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export type SkillCategory = {
    label: string;
    subtitle: string;
    skills: SkillItem[];
};

export interface Publication {
    year: string;
    conference: string;
    title: string;
    authors: string;
    paperUrl?: string;
    codeUrl?: string;
    bibtex?: string;
    tldr?: string;
    imageUrl?: string;
    award?: string;
    category: "Research" | "Books" | "Blogs";
}

export const DATA = {
    name: "Ritoban Dutta",
    initials: "RD",
    url: "https://github.com/ritoban23",
    location: "India",
    locationLink: "https://www.google.com/maps/place/India",
    title: "Software Developer",
    institution: "Senior at KIIT University",
    institutionUrl: undefined,
    heroTagline: "hi, ritoban here.",
    heroSubtitle: "I like creating with purpose and play.",
    heroDescription:
        "Crafting elegant code for complex realities. Obsessed with the nuance of systems thinking, efficiency, and the beauty of raw logic. A perpetual student of the ever-evolving digital landscape.",
    beginnersMind:
        "Cultivating a \"beginner's mind\" to approach complex problems with fresh eyes, constantly deconstructing and rebuilding my understanding of the world—all while striving for technical excellence and impact.",
    convergenceParagraph:
        "The convergence of these distinct traits is what fuels my engineering philosophy and pushes me to build beyond the status quo.\n\nI live to ship code that matters. I am energized by the chaos of creation and the order of logic. I am obsessed with distributed systems, algorithmic efficiency, the nuance of open collaboration, and the endless possibilities of intelligent software. I remain a perpetual student of the craft to ensure I am always building at the bleeding edge. The digital landscape is vast, and I have only just begun to explore its depths.",
    aboutMeClosing:
        "You will often find me side-questing: dabbling in design, music, weaving little bits of storytelling, and keeping up with sports.",
    avatarUrl: "/lappypic.JPG",
    email: "ankudutt101@gmail.com",
    cvUrl: undefined,
    blogUrl: undefined,
    githubUsername: "ritoban23",
    linkedinUsername: "ritoban",
    mediumUsername: "ritoban",
    twitterUsername: undefined,
    skillCategories: [
        {
            label: "Full Stack",
            subtitle: "Web Development Ecosystem",
            skills: [
                { name: "React", icon: ReactLight },
                { name: "Next.js", icon: NextjsIconDark },
                { name: "Node.js", icon: Nodejs },
                { name: "Express" },
                { name: "TypeScript", icon: Typescript },
                { name: "JavaScript", icon: JavaScriptIcon },
                { name: "HTML/CSS", icon: HtmlIcon },
                { name: "Tailwind", icon: TailwindIcon },
                { name: "PostgreSQL", icon: Postgresql },
                { name: "MongoDB", icon: MongoDBIcon },
                { name: "REST APIs" },
                { name: "GraphQL" },
            ],
        },
        {
            label: "DevOps",
            subtitle: "Infrastructure & Automation",
            skills: [
                { name: "Docker", icon: Docker },
                { name: "Kubernetes", icon: Kubernetes },
                { name: "AWS", icon: AwsIcon },
                { name: "GitHub Actions", icon: GitIcon },
                { name: "Terraform" },
                { name: "Linux" },
                { name: "CI/CD Pipelines" },
                { name: "Nginx" },
                { name: "Cloud Architecture" },
                { name: "Monitoring" },
            ],
        },
        {
            label: "Data Engineering",
            subtitle: "Data Pipelines & ML",
            skills: [
                { name: "Python", icon: Python },
                { name: "Pandas" },
                { name: "NumPy" },
                { name: "TensorFlow" },
                { name: "PyTorch" },
                { name: "SQL" },
                { name: "Apache Spark" },
                { name: "Airflow" },
                { name: "ETL Pipelines" },
                { name: "Data Visualization" },
                { name: "Jupyter" },
            ],
        },
    ] as SkillCategory[],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/ritoban23",
            },
            email: {
                name: "Send Email",
                url: "mailto:ankudutt101@gmail.com",
            },
        },
    },
    work: [
        {
            company: "Datacurve (YC W24)",
            href: "https://datacurve.ai",
            location: "Remote",
            title: "FOSS Engineer (Contract)",
            logoUrl: "/datacurve.avif",
            start: "12/2025",
            end: "Present",
            isCurrentRole: true,
            description: [
                "Engineering robust solutions for critical bugs and features across major open-source ecosystems.",
                "Generating data for State-of-the-Art LLMs, directly contributing to the 'Project Mars' program on Shipd platform.",
            ],
        },
        {
            company: "Open Source",
            href: "https://github.com/ritoban23",
            location: "Global",
            title: "Contributor",
            logoUrl: "/github.svg",
            start: "06/2025",
            end: "Present",
            isCurrentRole: true,
            description: [
                "Big Tech & Systems: Merged production-grade code optimizations for Microsoft, Meta, Uber, and Apache.",
                "AI & Data: Refactored core logic and testing suites for Pandas, MLflow, MindsDB, and Timescale.",
                "Web Ecosystem: Improved performance, accessibility, and tooling for Storybook, WordPress, and Biome.",
            ],
        },
        {
            company: "Federation of Entrepreneurship Development",
            href: "#",
            location: "Bhubaneswar, India",
            title: "Senior Creative Executive",
            logoUrl: "/fed.svg",
            start: "09/2022",
            end: "12/2024",
            isCurrentRole: false,
            description: [
                "Architected responsive web solutions increasing engagement by ~25% across event pages.",
                "Drove technical literacy for 200+ students through analytical workshops.",
            ],
        },
    ],
    education: [
        {
            school: "KIIT University",
            href: "https://kiit.ac.in",
            degree: "B.Tech in Computer Science",
            logoUrl: "",
            start: "2022",
            end: "2026",
        },
    ],
    // Featured publications shown on main page (only the 2 research papers)
    featuredPublications: [
        {
            year: "2024",
            conference: "IEEE",
            title: "Self-Driving Cars: An Epitome of Technological Innovation",
            authors: "Ritoban Dutta",
            paperUrl: "https://ieeexplore.ieee.org/abstract/document/10962726",
            tldr: "A comprehensive exploration of the technological innovations driving autonomous vehicle development, covering sensor systems, machine learning algorithms, and safety considerations that are shaping the future of transportation.",
            category: "Research" as const,
        },
        {
            year: "2025",
            conference: "Cambridge Scholars (In Progress)",
            title: "Leveraging GenAI For Multi-Modal Content Creation",
            authors: "Ritoban Dutta",
            tldr: "An ongoing research project exploring how generative AI can be harnessed for creating multi-modal content across text, images, and audio, with a focus on practical applications and ethical considerations.",
            category: "Research" as const,
        },
    ] as Publication[],
    // All publications (for /publications page)
    allPublications: [
        {
            year: "2024",
            conference: "IEEE",
            title: "Self-Driving Cars: An Epitome of Technological Innovation",
            authors: "Ritoban Dutta",
            paperUrl: "https://ieeexplore.ieee.org/abstract/document/10962726",
            tldr: "A comprehensive exploration of the technological innovations driving autonomous vehicle development, covering sensor systems, machine learning algorithms, and safety considerations that are shaping the future of transportation.",
            category: "Research" as const,
        },
        {
            year: "2025",
            conference: "Cambridge Scholars (In Progress)",
            title: "Leveraging GenAI For Multi-Modal Content Creation",
            authors: "Ritoban Dutta",
            tldr: "An ongoing research project exploring how generative AI can be harnessed for creating multi-modal content across text, images, and audio, with a focus on practical applications and ethical considerations.",
            category: "Research" as const,
        },
        {
            year: "2023",
            conference: "Bookleaf Publishing",
            title: "Days That Breathe Life and Days That Don't",
            authors: "Ritoban Dutta",
            paperUrl: "https://www.amazon.in/Days-That-Breathe-Life-Dont/dp/936331183X",
            tldr: "A collection of reflective prose and poetry exploring the duality of human experience—the days that fill us with purpose and the ones that challenge our resilience. A personal journey through moments of inspiration and introspection.",
            category: "Books" as const,
        },
        {
            year: "2025",
            conference: "Technical Deep Dive",
            title: "Crypto Protocol Auditor: MindsDB Hacktoberfest",
            authors: "Ritoban Dutta",
            paperUrl: "https://medium.com/@ankudutt101/crypto-protocol-auditor-mindsdb-hacktoberfest-3c52ff00d7ff",
            tldr: "Think you found the next 10x crypto project? But before you ape in, all you find are videos of fake crypto gurus, documentation too complex to understand. This blog explores how I built an AI-powered auditor to cut through the noise.",
            category: "Blogs" as const,
        },
        {
            year: "2025",
            conference: "Personal Insights",
            title: "Random Debugging Epiphanies: From Frustration to Flow",
            authors: "Ritoban Dutta",
            paperUrl: "https://medium.com/@ankudutt101/random-debugging-epiphanies-from-frustration-to-flow-b7ce6dfb9166",
            tldr: "When I started web development, I quickly realized that the most challenging aspect wasn't writing code itself, but rather overcoming the mysterious bugs and finding clarity through the chaos of debugging.",
            category: "Blogs" as const,
        },
    ] as Publication[],
    // Featured projects shown on the main page
    featuredProjects: [
        {
            title: "Crypto Protocol Auditor",
            href: "https://github.com/ritoban23/crypto-protocol-auditor",
            dates: "2025",
            description:
                "AI-powered auditor built on MindsDB that unifies scattered crypto/web3 data into one conversational interface. Analyzes whitepapers, live data, and protocol health.",
            technologies: ["MindsDB", "Next.js", "Python", "LLM APIs", "SQL", "REST APIs"],
            imageUrl: "https://raw.githubusercontent.com/ritoban23/crypto-protocol-auditor/main/assets/logo.png",
        },
        {
            title: "gh-showcase",
            href: "https://github.com/ritoban23/gh-showcase",
            dates: "2025",
            description:
                "Drop-in React component to visualize your GitHub activity, PR breakdown, and developer DNA in seconds. Published as an NPM package for easy integration.",
            technologies: ["React", "TypeScript", "GitHub API", "NPM Package"],
            imageUrl: "https://raw.githubusercontent.com/ritoban23/gh-showcase/main/public/gh-showcase-logo.png",
        },
        {
            title: "GCP Retail Analytics Pipeline",
            href: "https://github.com/ritoban23/gcp-retail-analytics-pipeline",
            dates: "2024",
            description:
                "End-to-end data engineering platform on GCP — ingests transactional retail data from Cloud SQL via PySpark on Dataproc, stores it in a GCS data lake, models it in BigQuery using a Medallion Architecture (Bronze → Silver → Gold), and visualises business insights in Looker Studio.",
            technologies: ["GCP", "BigQuery", "PySpark", "Dataproc", "Cloud SQL", "Looker Studio", "Python", "SQL"],
        },
    ],
    // All projects (for /projects page)
    allProjects: [
        {
            title: "Terraform AWS Nginx Docker",
            href: "https://github.com/ritoban23/terraform-aws-nginx-docker",
            dates: "2026",
            description:
                "A modular Terraform project to provision an AWS VPC, EC2 instance, and deploy Nginx/Docker.",
            technologies: ["Terraform", "AWS", "Docker", "Nginx", "HCL"],
            category: "DevOps",
        },
        {
            title: "Crypto Protocol Auditor",
            href: "https://github.com/ritoban23/crypto-protocol-auditor",
            dates: "2025",
            description:
                "AI-powered auditor built on MindsDB that unifies scattered crypto/web3 data into one conversational interface. Analyzes whitepapers, live data, and protocol health.",
            technologies: ["MindsDB", "Next.js", "Python", "LLM APIs", "SQL", "REST APIs"],
            category: "AI / ML",
            imageUrl: "https://raw.githubusercontent.com/ritoban23/crypto-protocol-auditor/main/assets/logo.png",
        },
        {
            title: "gh-showcase",
            href: "https://github.com/ritoban23/gh-showcase",
            dates: "2025",
            description:
                "Drop-in React component to visualize your GitHub activity, PR breakdown, and developer DNA in seconds. Published as an NPM package for easy integration.",
            technologies: ["React", "TypeScript", "GitHub API", "NPM Package"],
            category: "Developer Tools",
            imageUrl: "https://raw.githubusercontent.com/ritoban23/gh-showcase/main/public/gh-showcase-logo.png",
        },
        {
            title: "North Star",
            href: "https://github.com/ritoban23/north-star",
            dates: "2025",
            description:
                "Keep track of your activities and how they are helping you progress towards your goals right from your terminal! A Go/Bubbletea-based terminal app with a beautiful TUI.",
            technologies: ["Go", "Bubbletea", "TUI", "CLI"],
            category: "CLI & Systems",
            imageUrl: "https://raw.githubusercontent.com/ritoban23/north-star/main/assets/northstar_logo.png",
        },
        {
            title: "Coin Smith",
            href: "https://github.com/ritoban23/coin-smith",
            dates: "2026",
            description:
                "A PSBT (Partially Signed Bitcoin Transaction) builder with a premium dark-themed web UI. Select coins, compute fees, construct unsigned transactions with full RBF and locktime support. Built for the Summer of Bitcoin 2026 Developer Challenge. Features greedy coin selection, accurate vBytes estimation for P2PKH/P2WPKH/P2TR/P2WSH, two-pass fee/change handling, BIP-174 compliant PSBT construction, safety warnings, and an educational UI with hover tooltips explaining every Bitcoin concept.",
            technologies: ["Node.js", "Express.js", "bitcoinjs-lib", "Jest", "HTML/CSS/JS"],
            category: "Web3 & Blockchain",
        },
        {
            title: "orbWallet",
            href: "https://github.com/ritoban23/orbWallet",
            dates: "2024",
            description:
                "A web3 wallet key pair generator for Solana & Ethereum. Create multiple wallets, public/private key pairs, and manage your crypto assets securely.",
            technologies: ["Solana", "Ethereum", "Web3", "Cryptography"],
            category: "Web3 & Blockchain",
        },
        {
            title: "GCP Retail Analytics Pipeline",
            href: "https://github.com/ritoban23/gcp-retail-analytics-pipeline",
            dates: "2024",
            description:
                "End-to-end data engineering platform on GCP — ingests transactional retail data from Cloud SQL via PySpark on Dataproc, stores it in a GCS data lake, models it in BigQuery using a Medallion Architecture (Bronze → Silver → Gold), and visualises business insights in Looker Studio.",
            technologies: ["GCP", "BigQuery", "PySpark", "Dataproc", "Cloud SQL", "Looker Studio", "Python", "SQL"],
            category: "Data Engineering",
        },
    ],
};

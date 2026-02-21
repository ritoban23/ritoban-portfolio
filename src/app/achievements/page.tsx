/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowLeft, ArrowUpRight, Trophy } from "lucide-react";
import Link from "next/link";
import { ThemedFlickeringGrid } from "@/components/themed-flickering-grid";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";

interface Achievement {
    title: string;
    dates: string;
    org?: string;
    description: string;
    image?: string;
    imagePadding?: string;
    link?: string;
    links?: { title: string; href: string }[];
}

const ACHIEVEMENTS: Achievement[] = [
    {
        title: "Summer of Bitcoin",
        org: "Summer of Bitcoin",
        dates: "February 2026",
        image: "https://resources.saylor.org/wwwresources/wp-content/uploads/20221220112324/500x500.png",
        description:
            "Accepted into the global mentorship program for Bitcoin open-source development, involving a rigorous four-week bootcamp and project proposal round.",
        links: [{ title: "Program", href: "https://www.summerofbitcoin.org" }],
    },
    {
        title: "BOSS — Chaincode Labs ₿OSS Challenge",
        org: "Chaincode Labs",
        dates: "January 2026",
        image: "https://imgs.search.brave.com/O5YoNbd8aWhGp6CSZtdr1q-EBvdZ1GqdCzLrFmyvPL4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGNjMzBjZjE5/NDlhMzVlNjg3YTFi/MjM4MzM3NTI3MGNl/NjU2ODVmNWI1OGIw/NzQyYmI1YzAxZGI5/NzhhOTI3Ni9ib3Nz/Y2hhbGxlbmdlLnh5/ei8",
        description:
            "Selected for the Chaincode Labs BOSS (Bitcoin Open Source Software) Challenge, a technically rigorous programme for high-level contributors to Bitcoin Core and Lightning projects.",
        links: [{ title: "Chaincode", href: "https://chaincode.com" }],
    },
    {
        title: "MindsDB Hackathon — Runner-Up",
        org: "MindsDB",
        dates: "November 2025",
        image: "https://avatars.githubusercontent.com/u/31035808?s=48&v=4",
        description:
            "Runner-up at the MindsDB Hackathon for building a RAG-based AI agent, now integrated into MindsDB's official examples repository.",
        links: [{ title: "Project", href: "https://github.com/ritoban23/crypto-protocol-auditor" }],
    },
    {
        title: "Hacktoberfest Super Contributor",
        org: "Hacktoberfest",
        dates: "October 2025",
        image: "https://avatars.githubusercontent.com/u/59082416?s=48&v=4",
        description:
            "Recognized by 10+ global organizations for high-quality, production-grade open-source code contributions during Hacktoberfest.",
    },
    {
        title: "Keploy Fellowship",
        org: "Keploy",
        dates: "June 2025",
        image: "https://avatars.githubusercontent.com/u/92252339?s=48&v=4",
        description:
            "Selected for a cohort with a 5% acceptance rate focused on scalable API development and full-stack engineering.",
        links: [{ title: "Keploy", href: "https://keploy.io" }],
    },
    {
        title: "EA OSP '25",
        org: "Centre for Effective Altruism",
        dates: "2025",
        image: "https://imgs.search.brave.com/EPWkzY4vdMvA-5Sa84yJH34fol29j-N1-WvxWIQ0qLQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZmUyMGVmZGFh/MTUyNWZkYmNmNzhi/YTM2MmQ5M2NiMTQy/ZDQzNWU5ZDkxZWQx/YTljZDgyNDUwZjZj/YmNiZjQ2MC93d3cu/ZWZmZWN0aXZlYWx0/cnVpc20ub3JnLw",
        description:
            "Accepted into the Centre for Effective Altruism's Organiser Support Programme (OSP) — a selective initiative that provides mentorship, training, and funding to EA group leaders working to direct talent, capital, and research toward the world's most pressing problems.",
        links: [{ title: "CEA", href: "https://www.effectivealtruism.org" }],
    },
    {
        title: "blockchain.peter — 25K Instagram",
        org: "Instagram",
        dates: "February 2025",
        image: "https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png",
        link: "https://www.instagram.com/blockchain.peter/",
        description:
            "Grew blockchain.peter on Instagram to 25,000+ followers, earning sponsorships from major blockchain projects through consistent educational content.",
        links: [{ title: "@blockchain.peter", href: "https://www.instagram.com/blockchain.peter/" }],
    },
    {
        title: "Buildspace Season 5 — Nights & Weekends",
        org: "Buildspace",
        dates: "July 2024",
        image: "https://i.tracxn.com/logo/company/buildspace_c29dee71-55ff-4f49-bb22-1e22842a2f58.png?format=webp&height=120&width=120",
        imagePadding: "p-0",
        description:
            "Participated in the world's largest accelerator for independent builders and niche projects, building in public during the Nights & Weekends cohort.",
        links: [{ title: "Buildspace", href: "https://buildspace.so" }],
    },
];

export default function AchievementsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 relative transition-colors duration-300">
            <ThemedFlickeringGrid />

            <div className="relative z-10 max-w-screen-md mx-auto px-8 py-24">
                {/* Back link */}
                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors duration-300 tracking-wide mb-12"
                >
                    <ArrowLeft
                        size={14}
                        className="group-hover:-translate-x-1 transition-transform duration-300"
                    />
                    Back to home
                </Link>

                {/* Header */}
                <h1 className="font-serif text-3xl font-light tracking-wide mb-3 text-zinc-900 dark:text-zinc-100">
                    Achievements
                </h1>
                <p className="font-serif text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mb-12">
                    Programs, hackathons, fellowships, and milestones along the journey.
                </p>

                {/* Timeline */}
                <Timeline>
                    {ACHIEVEMENTS.map((item, index) => (
                        <TimelineItem
                            key={item.title + index}
                            className="w-full flex items-start justify-between gap-10"
                        >
                            <TimelineConnectItem className="flex items-start justify-center">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.org ?? item.title}
                                        className={`size-10 bg-white dark:bg-zinc-900 z-10 shrink-0 overflow-hidden border border-zinc-200 dark:border-zinc-700 rounded-full shadow ring-2 ring-zinc-200 dark:ring-zinc-700 object-cover flex-none ${item.imagePadding ?? "p-0.5"}`}
                                    />
                                ) : (
                                    <div className="size-10 bg-white dark:bg-zinc-900 z-10 shrink-0 overflow-hidden p-1 border border-zinc-200 dark:border-zinc-700 rounded-full shadow ring-2 ring-zinc-200 dark:ring-zinc-700 flex-none flex items-center justify-center">
                                        <Trophy size={16} className="text-zinc-400 dark:text-zinc-500" />
                                    </div>
                                )}
                            </TimelineConnectItem>
                            <div className="flex flex-1 flex-col justify-start gap-2 min-w-0 pb-2">
                                <time className="text-xs text-zinc-400 dark:text-zinc-500 tracking-wide">
                                    {item.dates}
                                </time>
                                <h3 className="font-serif text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
                                    {item.title}
                                </h3>
                                {item.org && (
                                    <p className="text-xs text-zinc-400 dark:text-zinc-500 tracking-wide">
                                        {item.org}
                                    </p>
                                )}
                                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {item.description}
                                </p>
                                {item.links && item.links.length > 0 && (
                                    <div className="mt-1 flex flex-row flex-wrap items-start gap-3">
                                        {item.links.map((link, idx) => (
                                            <a
                                                key={idx}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-300"
                                            >
                                                <ArrowUpRight
                                                    size={10}
                                                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                                                />
                                                <span className="tracking-wider uppercase">{link.title}</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </div>
    );
}

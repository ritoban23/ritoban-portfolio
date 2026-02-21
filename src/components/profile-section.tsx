import Image from "next/image";
import {
    Github,
    Linkedin,
    Mail,
    Twitter,
    ArrowUpRight,
    BookOpen,
} from "lucide-react";
import { DATA } from "@/data/resume";

export function ProfileSection() {
    return (
        <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:gap-0 md:space-y-8">
            {/* Profile Image */}
            {DATA.avatarUrl && (
                <div className="w-1/3 md:w-full flex-shrink-0">
                    <div className="relative md:w-[65%] aspect-[3/4]">
                        <Image
                            src={DATA.avatarUrl}
                            alt={DATA.name}
                            fill
                            priority
                            className="object-cover rounded-xl"
                        />
                    </div>
                </div>
            )}

            {/* Info */}
            <div className="w-2/3 md:w-full">
                {/* Name */}
                <h1 className="font-serif text-3xl font-light tracking-wide mb-3 text-zinc-900 dark:text-zinc-100">
                    {DATA.name}
                </h1>

                {/* Title & Institution */}
                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed tracking-wide uppercase mb-6">
                    {DATA.title}
                    <br />
                    {DATA.institutionUrl ? (
                        <a
                            href={DATA.institutionUrl}
                            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {DATA.institution}
                        </a>
                    ) : (
                        DATA.institution
                    )}
                </p>

                {/* Quick Links (Blog, CV) */}
                <div className="flex gap-6 mb-6">
                    {DATA.blogUrl && (
                        <a
                            href={DATA.blogUrl}
                            className="group inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ArrowUpRight
                                size={12}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            />
                            <span className="tracking-wider uppercase">Blog</span>
                        </a>
                    )}
                    {DATA.cvUrl && (
                        <a
                            href={DATA.cvUrl}
                            className="group inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ArrowUpRight
                                size={12}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                            />
                            <span className="tracking-wider uppercase">CV</span>
                        </a>
                    )}
                </div>

                {/* Social Links */}
                <div className="space-y-2">
                    <a
                        href={`mailto:${DATA.email}`}
                        className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Mail size={14} />
                        {DATA.email}
                    </a>
                    {DATA.twitterUsername && (
                        <>
                            <br />
                            <a
                                href={`https://twitter.com/${DATA.twitterUsername}`}
                                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter size={14} />@{DATA.twitterUsername}
                            </a>
                        </>
                    )}
                    {DATA.githubUsername && (
                        <>
                            <br />
                            <a
                                href={`https://github.com/${DATA.githubUsername}`}
                                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={14} className="dark:invert" />
                                github.com/{DATA.githubUsername}
                            </a>
                        </>
                    )}
                    {DATA.linkedinUsername && (
                        <>
                            <br />
                            <a
                                href={`https://www.linkedin.com/in/${DATA.linkedinUsername}`}
                                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={14} />
                                linkedin.com/in/{DATA.linkedinUsername}
                            </a>
                        </>
                    )}
                    {DATA.mediumUsername && (
                        <>
                            <br />
                            <a
                                href={`https://medium.com/@${DATA.mediumUsername}`}
                                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BookOpen size={14} />
                                medium.com/@{DATA.mediumUsername}
                            </a>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

import Image from "next/image";
import {
    Github,
    Linkedin,
    Mail,
    Twitter,
    ArrowUpRight,
    BookOpen,
    GraduationCap,
} from "lucide-react";
import { DATA } from "@/data/resume";

export function ProfileSection({ profile }: { profile?: Partial<typeof DATA> }) {
    const data = { ...DATA, ...(profile || {}) };
    return (
        <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:gap-0 md:space-y-8">
            {/* Profile Image */}
            {data.avatarUrl && (
                <div className="w-1/3 md:w-full flex-shrink-0">
                    <div className="relative md:w-[65%] aspect-[3/4] rounded-xl overflow-hidden">
                        <Image
                            src={data.avatarUrl}
                            alt={data.name}
                            fill
                            priority
                            className="object-cover scale-150 translate-x-[20%]"
                        />
                    </div>
                </div>
            )}

            {/* Info */}
            <div className="w-2/3 md:w-full">
                {/* Name */}
                <h1 className="font-serif text-3xl font-light tracking-wide mb-3 text-zinc-900 dark:text-zinc-100">
                    {data.name}
                </h1>

                {/* Title & Institution */}
                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed tracking-wide uppercase mb-6">
                    {data.title}
                    <br />
                    {data.institutionUrl ? (
                        <a
                            href={data.institutionUrl}
                            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.institution}
                        </a>
                    ) : (
                        data.institution
                    )}
                </p>

                {/* Quick Links (Blog, CV) */}
                <div className="flex gap-6 mb-6">
                    {data.blogUrl && (
                        <a
                            href={data.blogUrl}
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
                    {data.cvUrl && (
                        <a
                            href={data.cvUrl}
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
                        href={`mailto:${data.email}`}
                        className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Mail size={14} />
                        {data.email}
                    </a>
                    {data.twitterUsername && (
                        <>
                            <br />
                            <a
                                href={`https://twitter.com/${data.twitterUsername}`}
                                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter size={14} />@{data.twitterUsername}
                            </a>
                        </>
                    )}
                    {data.githubUsername && (
                        <>
                            <br />
                            <a
                                href={`https://github.com/${data.githubUsername}`}
                                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={14} className="dark:invert" />
                                github.com/{data.githubUsername}
                            </a>
                        </>
                    )}
                    {data.linkedinUsername && (
                        <>
                            <br />
                            <a
                                href={`https://www.linkedin.com/in/${data.linkedinUsername}`}
                                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={14} />
                                linkedin.com/in/{data.linkedinUsername}
                            </a>
                        </>
                    )}
                    {data.scholarUrl && (
                        <>
                            <br />
                            <a
                                href={data.scholarUrl}
                                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GraduationCap size={14} />
                                Google Scholar
                            </a>
                        </>
                    )}
                    {data.mediumUsername && (
                        <>
                            <br />
                            <a
                                href={`https://medium.com/@${data.mediumUsername}`}
                                className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BookOpen size={14} />
                                medium.com/@{data.mediumUsername}
                            </a>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { DATA } from "@/data/resume";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ThemedFlickeringGrid } from "@/components/themed-flickering-grid";

type Category = string;

export default function ProjectsPage() {
    const categories: Category[] = [
        "All",
        "AI / ML",
        "Web3 & Blockchain",
        "Developer Tools",
        "Data Engineering",
        "CLI & Systems",
        "DevOps",
    ];
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filteredProjects =
        activeCategory === "All"
            ? DATA.allProjects
            : DATA.allProjects.filter((p) => p.category === activeCategory);

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
                    All Projects
                </h1>
                <p className="font-serif text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mb-12">
                    A collection of projects I&apos;ve built, from AI-powered tools to
                    blockchain applications. Each project represents a unique challenge
                    and learning experience.
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 text-xs tracking-wide rounded-full border transition-all duration-300 cursor-pointer ${activeCategory === cat
                                ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white"
                                : "bg-transparent text-zinc-500 border-zinc-200 hover:border-zinc-400 hover:text-zinc-700 dark:text-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500 dark:hover:text-zinc-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="space-y-12">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="group">
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Project image */}
                                    {project.imageUrl && (
                                        <div className="w-full sm:w-1/4 min-w-[120px] relative flex-shrink-0">
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full rounded-lg object-cover border border-zinc-100 dark:border-zinc-700 shadow-sm transition-all duration-300 group-hover:shadow-md"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-serif text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors inline-flex items-center gap-1.5">
                                                    {project.title}
                                                    <ArrowUpRight
                                                        size={12}
                                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                    />
                                                </h3>
                                                <span className="px-2 py-0.5 text-[10px] text-zinc-400 bg-zinc-50 dark:bg-zinc-800 rounded-full border border-zinc-100 dark:border-zinc-700 tracking-wide">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <span className="text-xs text-zinc-400 dark:text-zinc-500 tracking-wide whitespace-nowrap ml-4">
                                                {project.dates}
                                            </span>
                                        </div>
                                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mt-3">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 text-[10px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-full tracking-wide"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </a>
                            {index < filteredProjects.length - 1 && (
                                <div className="h-px bg-zinc-200 dark:bg-zinc-800 mt-8" />
                            )}
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <p className="font-serif text-sm text-zinc-400 text-center py-12">
                        No projects found in this category.
                    </p>
                )}
            </div>
        </div>
    );
}

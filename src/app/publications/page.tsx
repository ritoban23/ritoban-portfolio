"use client";

import { useState } from "react";
import { DATA } from "@/data/resume";
import { PublicationEntry } from "@/components/publication-entry";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ThemedFlickeringGrid } from "@/components/themed-flickering-grid";

type Category = string;

export default function PublicationsPage() {
    const categories: Category[] = [
        "All",
        ...Array.from(new Set(DATA.allPublications.map((p) => p.category))),
    ];
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filteredPublications =
        activeCategory === "All"
            ? DATA.allPublications
            : DATA.allPublications.filter((p) => p.category === activeCategory);

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
                    Publications & Writing
                </h1>
                <p className="font-serif text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mb-12">
                    Research papers, published works, and blog posts exploring technology,
                    creativity, and the craft of building software.
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

                {/* Publications List */}
                <div className="space-y-12">
                    {filteredPublications.map((pub, index) => (
                        <div key={index}>
                            <PublicationEntry publication={pub} />
                            {index < filteredPublications.length - 1 && (
                                <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-8" />
                            )}
                        </div>
                    ))}
                </div>

                {filteredPublications.length === 0 && (
                    <p className="font-serif text-sm text-zinc-400 text-center py-12">
                        No publications found in this category.
                    </p>
                )}
            </div>
        </div>
    );
}

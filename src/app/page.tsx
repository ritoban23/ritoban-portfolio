/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ProfileSection } from "@/components/profile-section";
import WorkSection from "@/components/work-section";
import { VennDiagram } from "@/components/venn-diagram";
import { ThemedFlickeringGrid } from "@/components/themed-flickering-grid";
import { PublicationEntry } from "@/components/publication-entry";
import { DATA, Publication } from "@/data/resume";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [activeSkillTab, setActiveSkillTab] = useState(0);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 relative transition-colors duration-300">
      {/* FlickeringGrid background — theme-aware */}
      <ThemedFlickeringGrid />

      <div className="relative z-10 max-w-screen-lg mx-auto px-8 py-24 perspective-[1000px]">
        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed/Sticky Profile */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <div className="md:sticky top-12 space-y-8 appear stagger-1">
              <ProfileSection />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* Hero Introduction */}
            <section className="appear stagger-2">
              <p className="font-serif text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6">
                {DATA.heroDescription}
              </p>

              {/* Beginner's Mind paragraph — after a line break */}
              <p className="font-serif text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 mb-8">
                {DATA.beginnersMind}
              </p>

              {/* Venn Diagram — Curiosity, Resilience, Velocity */}
              <VennDiagram />

              {/* Convergence & engineering philosophy paragraph — with gap from venn */}
              <div className="mt-10 space-y-4">
                {DATA.convergenceParagraph.split("\n\n").map((p: string, i: number) => (
                  <p key={i} className="font-serif text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {p}
                  </p>
                ))}
              </div>

              {/* About Me Closing */}
              <p className="font-serif text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 italic mt-6">
                {DATA.aboutMeClosing}
              </p>
            </section>

            {/* Skills - Toggle Tabs (Full Stack / DevOps / Data Engineering) */}
            {DATA.skillCategories.length > 0 && (
              <section className="appear stagger-3">
                <h2 className="font-serif text-md mb-8 tracking-wide uppercase text-zinc-700 dark:text-zinc-300">
                  Technologies
                </h2>

                {/* Tab buttons */}
                <div className="flex gap-2 mb-6">
                  {DATA.skillCategories.map((category: { label: string; subtitle: string; skills: { name: string; icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> }[] }, index: number) => (
                    <button
                      key={category.label}
                      onClick={() => setActiveSkillTab(index)}
                      className={`px-4 py-2 text-xs tracking-wide rounded-full border transition-all duration-300 cursor-pointer ${activeSkillTab === index
                        ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white"
                        : "bg-transparent text-zinc-500 border-zinc-200 hover:border-zinc-400 hover:text-zinc-700 dark:text-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500 dark:hover:text-zinc-200"
                        }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>

                {/* Subtitle */}
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-4 tracking-wide">
                  {DATA.skillCategories[activeSkillTab].subtitle}
                </p>

                {/* Skill pills with icons */}
                <div className="flex flex-wrap gap-2">
                  {DATA.skillCategories[activeSkillTab].skills.map((skill: { name: string; icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> }) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded-full bg-white/60 dark:bg-zinc-800/60 tracking-wide hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all duration-200"
                    >
                      {skill.icon && (
                        <skill.icon className="size-3.5" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Work Experience - Expandable Accordion */}
            {DATA.work.length > 0 && (
              <section className="appear stagger-4">
                <h2 className="font-serif text-md mb-8 tracking-wide uppercase text-zinc-700 dark:text-zinc-300">
                  Experience
                </h2>
                <WorkSection />
              </section>
            )}

            {/* Education - With Logos */}
            {DATA.education.length > 0 && (
              <section className="appear stagger-5">
                <h2 className="font-serif text-md mb-8 tracking-wide uppercase text-zinc-700 dark:text-zinc-300">
                  Education
                </h2>
                <div className="space-y-6">
                  {DATA.education.map((edu: { school: string; href: string; degree: string; logoUrl: string; start: string; end: string }, index: number) => (
                    <div key={index}>
                      <a
                        href={edu.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-x-3"
                      >
                        {/* Logo */}
                        {edu.logoUrl ? (
                          <img
                            src={edu.logoUrl}
                            alt={edu.school}
                            className="size-8 md:size-10 p-1 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm overflow-hidden object-contain flex-none"
                          />
                        ) : (
                          <div className="size-8 md:size-10 p-1 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm bg-zinc-50 dark:bg-zinc-800 flex-none flex items-center justify-center text-xs text-zinc-400">
                            🎓
                          </div>
                        )}
                        <div className="flex-1 min-w-0 flex items-start justify-between">
                          <div className="flex flex-col gap-0.5">
                            <h3 className="font-serif text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors inline-flex items-center gap-1.5">
                              {edu.school}
                              <ArrowUpRight
                                size={12}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              />
                            </h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">
                              {edu.degree}
                            </p>
                          </div>
                          {(edu.start || edu.end) && (
                            <span className="text-xs text-zinc-400 dark:text-zinc-500 tracking-wide whitespace-nowrap ml-4 mt-0.5">
                              {edu.start}{edu.start && edu.end ? " — " : ""}{edu.end}
                            </span>
                          )}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Projects (above Publications) with images */}
            {DATA.featuredProjects.length > 0 && (
              <section className="appear stagger-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-md tracking-wide uppercase text-zinc-700 dark:text-zinc-300">
                    Projects
                  </h2>
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors duration-300 tracking-wide"
                  >
                    View all
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <div className="space-y-12">
                  {DATA.featuredProjects.map((project: { title: string; href: string; dates: string; description: string; technologies: string[]; imageUrl?: string }, index: number) => (
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
                              <h3 className="font-serif text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors inline-flex items-center gap-1.5">
                                {project.title}
                                <ArrowUpRight
                                  size={12}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                />
                              </h3>
                              <span className="text-xs text-zinc-400 dark:text-zinc-500 tracking-wide whitespace-nowrap ml-4">
                                {project.dates}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              {project.technologies.map((tech: string) => (
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
                      {index < DATA.featuredProjects.length - 1 && (
                        <div className="h-px bg-zinc-200 dark:bg-zinc-800 mt-8" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Publications — Featured (2 research papers, after Projects) */}
            {DATA.featuredPublications.length > 0 && (
              <section className="appear stagger-7">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-md tracking-wide uppercase text-zinc-700 dark:text-zinc-300">
                    Publications
                  </h2>
                  <Link
                    href="/publications"
                    className="group inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors duration-300 tracking-wide"
                  >
                    View all
                    <ArrowRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <div className="space-y-12">
                  {DATA.featuredPublications.map((pub: Publication, index: number) => (
                    <div key={index}>
                      <PublicationEntry publication={pub} />
                      {index < DATA.featuredPublications.length - 1 && (
                        <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-8" />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

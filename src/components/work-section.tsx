/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
    const [imageError, setImageError] = useState(false);

    if (!src || imageError) {
        return (
            <div className="size-8 md:size-10 p-1 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm bg-zinc-50 dark:bg-zinc-800 flex-none flex items-center justify-center text-xs text-zinc-400">
                💼
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className="size-8 md:size-10 p-1 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-sm overflow-hidden object-contain flex-none"
            onError={() => setImageError(true)}
        />
    );
}

export default function WorkSection() {
    return (
        <Accordion type="single" collapsible className="w-full grid gap-4">
            {DATA.work.map((work) => (
                <AccordionItem
                    key={work.company}
                    value={work.company}
                    className="w-full border-b-0 grid gap-2"
                >
                    <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
                        <div className="flex items-center gap-x-3 justify-between w-full text-left">
                            <div className="flex items-center gap-x-3 flex-1 min-w-0">
                                <LogoImage src={work.logoUrl} alt={work.company} />
                                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                                    <div className="font-serif text-sm font-medium text-zinc-900 dark:text-zinc-100 leading-none flex items-center gap-2">
                                        {work.company}
                                        {work.isCurrentRole && (
                                            <span className="text-[10px] px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-200 dark:border-emerald-700 font-sans">
                                                Current
                                            </span>
                                        )}
                                        <span className="relative inline-flex items-center w-3.5 h-3.5">
                                            <ChevronRight
                                                className={cn(
                                                    "absolute h-3.5 w-3.5 shrink-0 text-zinc-400 stroke-2 transition-all duration-300 ease-out",
                                                    "translate-x-0 opacity-0",
                                                    "group-hover:translate-x-1 group-hover:opacity-100",
                                                    "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                                                )}
                                            />
                                            <ChevronDown
                                                className={cn(
                                                    "absolute h-3.5 w-3.5 shrink-0 text-zinc-400 stroke-2 transition-all duration-200",
                                                    "opacity-0 rotate-0",
                                                    "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                                                )}
                                            />
                                        </span>
                                    </div>
                                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                                        {work.title}
                                        {work.location && (
                                            <span className="text-zinc-400 dark:text-zinc-500"> · {work.location}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs tabular-nums text-zinc-400 dark:text-zinc-500 text-right flex-none tracking-wide">
                                <span>
                                    {work.start} — {work.end ?? "Present"}
                                </span>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-0 ml-11 md:ml-13 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {Array.isArray(work.description) ? (
                            <ul className="list-disc list-outside ml-4 space-y-1.5">
                                {work.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            work.description
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

"use client";

export const VennDiagram = () => (
    <div className="relative h-[14rem] my-4">
        <div className="group">
            <p className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-serif opacity-60 text-zinc-600 dark:text-zinc-400 group-hover:opacity-90 transition-all duration-500 tracking-wide">
                Curiosity
            </p>
            <div className="absolute border bg-zinc-200/40 dark:bg-zinc-700/30 mx-auto border-zinc-400/40 dark:border-zinc-500/30 group-hover:border-zinc-500/30 group-hover:bg-emerald-400/25 dark:group-hover:bg-emerald-400/15 transition-all duration-500 rounded-full h-24 w-24 left-1/2 -translate-x-1/2 translate-y-[1.75rem]"></div>
        </div>
        <div className="group">
            <p className="absolute -bottom-4 left-1/2 translate-x-[calc(-50%+5.5rem)] text-xs font-serif opacity-60 text-zinc-600 dark:text-zinc-400 group-hover:opacity-90 transition-all duration-500 tracking-wide">
                Resilience
            </p>
            <div className="absolute border bg-zinc-200/40 dark:bg-zinc-700/30 mx-auto border-zinc-400/40 dark:border-zinc-500/30 group-hover:border-zinc-500/30 group-hover:bg-blue-400/20 dark:group-hover:bg-blue-400/15 transition-all duration-500 rounded-full h-24 w-24 left-1/2 translate-x-[-15%] top-14 translate-y-[1.75rem]"></div>
        </div>
        <div className="group">
            <p className="absolute -bottom-4 right-1/2 translate-x-[calc(-50%-2rem)] text-xs font-serif opacity-60 text-zinc-600 dark:text-zinc-400 group-hover:opacity-90 transition-all duration-500 tracking-wide">
                Velocity
            </p>
            <div className="absolute border bg-zinc-200/40 dark:bg-zinc-700/30 mx-auto border-zinc-400/40 dark:border-zinc-500/30 group-hover:border-zinc-500/30 group-hover:bg-orange-400/25 dark:group-hover:bg-orange-400/15 transition-all duration-500 rounded-full h-24 w-24 left-1/2 translate-x-[-85%] top-14 translate-y-[1.75rem]"></div>
        </div>
    </div>
);

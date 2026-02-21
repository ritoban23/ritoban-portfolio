"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Home, FolderOpen, BookOpen, Trophy } from "lucide-react";

const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Projects", href: "/projects", icon: FolderOpen },
    { label: "Writings", href: "/publications", icon: BookOpen },
    { label: "Achievements", href: "/achievements", icon: Trophy },
];

export default function FloatingNav() {
    const pathname = usePathname();

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center">
            <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-lg shadow-zinc-900/5 dark:shadow-zinc-900/30 px-2 py-1.5 transition-colors duration-300">
                {navItems.map((item) => {
                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`group relative flex items-center gap-2 rounded-full px-3 py-2 text-xs tracking-wide transition-all duration-300 ${isActive
                                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                }`}
                        >
                            <item.icon className="size-3.5" />
                            <span className="hidden sm:inline">{item.label}</span>
                        </Link>
                    );
                })}

                {/* Separator */}
                <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-700 mx-1" />

                {/* Dark mode toggle */}
                <ModeToggle className="flex items-center justify-center rounded-full p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 cursor-pointer" />
            </nav>
        </div>
    );
}

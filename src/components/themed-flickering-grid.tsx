"use client";

import { useTheme } from "next-themes";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { useEffect, useState } from "react";

export function ThemedFlickeringGrid() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    // Use light dots on dark bg, dark dots on light bg
    const color = mounted && resolvedTheme === "dark"
        ? "rgb(200, 200, 200)"
        : "rgb(0, 0, 0)";

    return (
        <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
            <FlickeringGrid
                key={resolvedTheme}
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                color={color}
                maxOpacity={resolvedTheme === "dark" ? 0.4 : 0.3}
                style={{
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
            />
        </div>
    );
}

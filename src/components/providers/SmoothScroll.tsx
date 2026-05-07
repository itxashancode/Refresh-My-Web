/* g:\RefreshMyWeb\src\components\providers\SmoothScroll.tsx */
"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }

    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

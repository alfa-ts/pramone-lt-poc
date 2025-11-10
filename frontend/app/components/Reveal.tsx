"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
}>;

export default function Reveal({ children, className = "", as = "div", delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (delayMs > 0) {
              setTimeout(() => setVisible(true), delayMs);
            } else {
              setVisible(true);
            }
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [delayMs]);

  const Comp: any = as;
  return (
    <Comp
      ref={ref}
      className={`${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } transition-all duration-700 ease-out will-change-transform will-change-opacity ${className}`}
    >
      {children}
    </Comp>
  );
}




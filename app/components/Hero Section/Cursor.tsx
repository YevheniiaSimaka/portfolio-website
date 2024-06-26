"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface BlurryCursorProps {
  isActive: boolean;
}

const BlurryCursor: React.FC<BlurryCursorProps> = ({ isActive }) => {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const circle = useRef<HTMLDivElement | null>(null);
  const size = isActive ? 400 : 20;

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    if (circle.current) {
      moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    }

    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [isActive, animate]);

  return (
    <div className="relative h-screen">
      <div
        style={{
          backgroundColor: "#C9C7FC",
          width: size,
          height: size,
          filter: `blur(${isActive ? 30 : 0}px)`,
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
        className="top-0 left-0 fixed rounded-full mix-blend-hard-light pointer-events-none"
        ref={circle}
      />
    </div>
  );
};

export default BlurryCursor;

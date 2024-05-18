import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MouseTrack() {
  const shapeRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.set(shapeRef.current, { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(shapeRef.current, "x", {
        duration: 0.3,
        ease: "power2",
      }),
      yTo = gsap.quickTo(shapeRef.current, "y", {
        duration: 0.3,
        ease: "power2",
      });

    function handleMouseMove(e) {
      const heroRect = heroRef.current.getBoundingClientRect();
      if (
        e.clientX >= heroRect.left &&
        e.clientX <= heroRect.right &&
        e.clientY >= heroRect.top &&
        e.clientY <= heroRect.bottom
      ) {
        xTo(e.clientX);
        yTo(e.clientY);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-screen h-screen filter backdrop-blur-lg z-10" ref={heroRef}>
      <div
        ref={shapeRef}
        className="w-20 h-20 bg-violet-400 rounded-full filter blur-[65px]"
      />
    </div>
  );
}

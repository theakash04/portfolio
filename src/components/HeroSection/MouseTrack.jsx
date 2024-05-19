import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function MouseTrack() {
  const shapeRef = useRef(null);
  const heroRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);

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
    <div className="w-screen sm:h-[720px] h-[800px] filter backdrop-blur-lg " ref={heroRef}>
      <div
        ref={shapeRef}
        className="w-20 h-20 bg-violet-400 rounded-full filter blur-[68px]"
      />
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { TextPlugin } from 'gsap/all';

gsap.registerPlugin(TextPlugin)

function GsapBtn() {
  const buttonRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    tweenRef.current = gsap.to(buttonRef.current, {
      duration: 0.7,
      text: "Curious?",
      ease: "none",
      paused: true,
      reversed: true,
    });
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current.play();
  };

  const handleMouseLeave = () => {
    tweenRef.current.reverse();
  };

  return (
    <Link id="parent" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to={"/projects"}>
      <button id="button" ref={buttonRef} className="bg-[#DAE2ED] text-[#434D5B] cursor-pointer font-semibold px-4 rounded-lg hover:bg-[#DAE2ED]/90 transition-all ease-in-out py-3">
        Projects
      </button>
    </Link>
  );
}

export default GsapBtn;

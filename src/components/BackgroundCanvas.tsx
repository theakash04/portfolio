"use client";

import { useEffect, useRef } from "react";

const FOCAL = 720;

interface Cube {
  ox: number;
  oy: number;
  oz: number;
  size: number;
  rx: number;
  ry: number;
  srx: number;
  sry: number;
  alpha: number;
  driftX: number;
  driftY: number;
}

const CUBE_V: [number, number, number][] = [
  [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
  [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1],
];

const CUBE_E: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
];

function project(x: number, y: number, z: number, horizonY: number, W: number) {
  const f = FOCAL / (FOCAL + z);
  return { x: W / 2 + x * f, y: horizonY + y * f };
}

function rotY(p: { x: number; y: number; z: number }, a: number) {
  const c = Math.cos(a), s = Math.sin(a);
  return { x: p.x * c - p.z * s, y: p.y, z: p.x * s + p.z * c };
}

function rotX(p: { x: number; y: number; z: number }, a: number) {
  const c = Math.cos(a), s = Math.sin(a);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    let W = 0;
    let H = 0;
    let running = true;

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas!.width = W * DPR;
      canvas!.height = H * DPR;
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    const isMobile = window.innerWidth < 768;
    const N = isMobile ? 4 : 7;
    const cubes: Cube[] = [];

    for (let i = 0; i < N; i++) {
      cubes.push({
        ox: (Math.random() - 0.5) * 900,
        oy: (Math.random() - 0.5) * 500 - 50,
        oz: Math.random() * 700 + 150,
        size: 22 + Math.random() * 32,
        rx: Math.random() * Math.PI * 2,
        ry: Math.random() * Math.PI * 2,
        srx: (Math.random() - 0.5) * 0.0035,
        sry: (Math.random() - 0.5) * 0.0035,
        alpha: 0.07 + Math.random() * 0.1,
        driftX: (Math.random() - 0.5) * 0.08,
        driftY: (Math.random() - 0.5) * 0.05,
      });
    }

    function drawCube(c: Cube) {
      const horizonY = H * 0.45;
      const pts = CUBE_V.map(([vx, vy, vz]) => {
        let p = { x: vx * c.size, y: vy * c.size, z: vz * c.size };
        p = rotY(p, c.ry);
        p = rotX(p, c.rx);
        return project(p.x + c.ox, p.y + c.oy, p.z + c.oz, horizonY, W);
      });

      ctx!.strokeStyle = `rgba(255, 107, 53, ${c.alpha})`;
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      CUBE_E.forEach(([a, b]) => {
        ctx!.moveTo(pts[a].x, pts[a].y);
        ctx!.lineTo(pts[b].x, pts[b].y);
      });
      ctx!.stroke();

      ctx!.fillStyle = `rgba(255, 107, 53, ${Math.min(c.alpha * 2, 0.4)})`;
      pts.forEach((p) => {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      });
    }

    function drawGrid() {
      const horizonY = H * 0.45;
      const FLOOR_Y = 240;
      const HSTEP = 90;
      const ZSTEP = 80;
      const RANGE_X = 14;
      const RANGE_Z = 22;
      const baseAlpha = 0.1;

      for (let i = -RANGE_X; i <= RANGE_X; i++) {
        for (let j = 1; j <= RANGE_Z; j++) {
          const x = i * HSTEP;
          const z = j * ZSTEP;
          const p = project(x, FLOOR_Y, z, horizonY, W);
          const fade = 1 - j / RANGE_Z;
          ctx!.fillStyle = `rgba(255, 255, 255, ${baseAlpha * fade * 0.6})`;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      ctx!.fillStyle = "rgba(255, 107, 53, 0.20)";
      for (let i = -RANGE_X * 2; i <= RANGE_X * 2; i++) {
        const x = i * (HSTEP / 2);
        const z = 40;
        const p = project(x, FLOOR_Y, z, horizonY, W);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function animate() {
      if (!running) return;
      ctx!.clearRect(0, 0, W, H);
      cubes.sort((a, b) => b.oz - a.oz);
      drawGrid();
      cubes.forEach((c) => {
        c.rx += c.srx;
        c.ry += c.sry;
        c.ox += c.driftX;
        c.oy += c.driftY;
        if (c.ox > 550) c.ox = -550;
        if (c.ox < -550) c.ox = 550;
        if (c.oy > 350) c.oy = -350;
        if (c.oy < -350) c.oy = 350;
        drawCube(c);
      });
      requestAnimationFrame(animate);
    }

    animate();

    function handleVisibility() {
      if (document.hidden) {
        running = false;
      } else if (!running) {
        running = true;
        animate();
      }
    }

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 grid-bg pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 hero-glow pointer-events-none"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 vignette pointer-events-none"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      />
    </>
  );
}

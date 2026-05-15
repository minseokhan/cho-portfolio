"use client";

import { useEffect, useRef } from "react";

function hexToRgb(hex: string) {
  const m = hex.replace("#", "");
  const v = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
  const n = parseInt(v, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export default function useHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion:reduce)").matches)
      return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let DPR = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: 0, y: 0, active: false, tx: 0, ty: 0 };

    function getAccentRgb() {
      return hexToRgb(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--accent")
          .trim() || "#18A8F1"
      );
    }

    function init() {
      const r = canvas!.getBoundingClientRect();
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = r.width * DPR;
      canvas!.height = r.height * DPR;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(DPR, DPR);
    }

    function draw() {
      const r = canvas!.getBoundingClientRect();
      const W = r.width,
        H = r.height;
      ctx!.clearRect(0, 0, W, H);
      mouse.tx += (mouse.x - mouse.tx) * 0.05;
      mouse.ty += (mouse.y - mouse.ty) * 0.05;
      const inf = mouse.active ? 1 : 0;
      const c = getAccentRgb();
      const t = performance.now() * 0.00028;
      const LC = 26,
        step = 4;

      for (let i = 0; i < LC; i++) {
        const by = (H / (LC - 1)) * i;
        const phase = t * (0.6 + i * 0.018) + i * 0.42;
        const freq = 0.0042 + i * 0.00022;
        const amp = 18 + Math.sin(t * 1.7 + i * 0.55) * 9 + i * 0.3;
        const a = 0.05 + Math.abs(Math.sin(t * 1.2 + i * 0.35)) * 0.16;
        ctx!.strokeStyle = `rgba(${c.r},${c.g},${c.b},${a})`;
        ctx!.lineWidth = 0.55;
        ctx!.beginPath();
        for (let x = 0; x <= W; x += step) {
          let y =
            Math.sin(x * freq + phase) * amp +
            Math.sin(x * freq * 2.4 + phase * 1.3) * amp * 0.32;
          if (inf) {
            const dx = x - mouse.tx,
              dy = by - mouse.ty,
              d2 = dx * dx + dy * dy;
            if (d2 < 60000) {
              const f = (60000 - d2) / 60000;
              y -= f * 22 * Math.sign(mouse.ty - by) * -1;
            }
          }
          if (x === 0) ctx!.moveTo(x, by + y);
          else ctx!.lineTo(x, by + y);
        }
        ctx!.stroke();
      }

      ctx!.fillStyle = `rgba(${c.r},${c.g},${c.b},0.35)`;
      for (let i = 2; i < LC; i += 4) {
        const by = (H / (LC - 1)) * i;
        const phase = t * (0.6 + i * 0.018) + i * 0.42;
        const freq = 0.0042 + i * 0.00022;
        const amp = 18 + Math.sin(t * 1.7 + i * 0.55) * 9 + i * 0.3;
        for (let x = 80; x < W; x += 240) {
          const y =
            Math.sin(x * freq + phase) * amp +
            Math.sin(x * freq * 2.4 + phase * 1.3) * amp * 0.32;
          ctx!.beginPath();
          ctx!.arc(x, by + y, 1.1, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    }

    const onMouseMove = (e: MouseEvent) => {
      const r = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onMouseOut = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);
    window.addEventListener("resize", init);

    init();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("resize", init);
    };
  }, []);

  return canvasRef;
}

"use client";

import useHeroCanvas from "@/hooks/useHeroCanvas";

export default function HeroCanvas() {
  const canvasRef = useHeroCanvas();
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-85" />;
}

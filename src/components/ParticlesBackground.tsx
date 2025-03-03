import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    console.log(ref.current);
    if (!ref.current) return;
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    let particlesArray: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];
    const numberOfParticles = 100;
    for (let i = 0; i < numberOfParticles; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 5 + 1;
      const speedX = Math.random() * 3 - 1.5;
      const speedY = Math.random() * 3 - 1.5;
      particlesArray.push({ x, y, size, speedX, speedY });
    }
    const drawParticles = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        console.log(particle);
      });
    };
    const updateCanvas = () => {
      drawParticles();
      requestAnimationFrame(updateCanvas);
    };
    updateCanvas();
  }, []);
  return (
    <canvas
      className="absolute inset-0 -z-1 w-full h-screen"
      ref={ref}
    ></canvas>
  );
};

export default ParticlesBackground;

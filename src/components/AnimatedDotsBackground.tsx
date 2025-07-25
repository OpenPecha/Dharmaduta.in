import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const AnimatedDotsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const dotsRef = useRef<Dot[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    const createDots = () => {
      const numDots = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000));
      dotsRef.current = [];
      
      for (let i = 0; i < numDots; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width / window.devicePixelRatio,
          y: Math.random() * canvas.height / window.devicePixelRatio,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 2,
        });
      }
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const dots = dotsRef.current;
      const maxDistance = 120;
      
      // Draw connections
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.2)'; // Indigo with low opacity
      ctx.lineWidth = 1;
      
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw dots
      dots.forEach((dot) => {
        ctx.fillStyle = 'rgba(249, 115, 22, 0.6)'; // Orange with transparency
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add a subtle glow
        ctx.fillStyle = 'rgba(249, 115, 22, 0.2)';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size + 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updateDots = () => {
      const dots = dotsRef.current;
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      
      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        // Bounce off edges
        if (dot.x <= 0 || dot.x >= width) dot.vx *= -1;
        if (dot.y <= 0 || dot.y >= height) dot.vy *= -1;
        
        // Keep dots within bounds
        dot.x = Math.max(0, Math.min(width, dot.x));
        dot.y = Math.max(0, Math.min(height, dot.y));
      });
    };

    const animate = () => {
      updateDots();
      drawDots();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createDots();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createDots();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-80"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedDotsBackground;

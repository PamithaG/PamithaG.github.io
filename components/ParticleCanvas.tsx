import React, { useRef, useEffect } from 'react';

// Configuration for the particle system
const PARTICLE_COUNT = 50;
const PARTICLE_COLORS = ['#4fd1c5', '#38b2ac', '#81e6d9', '#2c7a7b']; // Palette of teal shades
const LINE_COLOR_RGB = '79, 209, 197'; // RGB version of the base teal color
const DISTURBANCE_RADIUS = 80;
const CONNECTION_RADIUS = 100;
const FRICTION = 0.95;
const REPULSION_STRENGTH = 2;
const SPRING_STRENGTH = 0.01;

// New configuration for the background glow
const GLOW_RADIUS_OUTER = 200;
const GLOW_COLOR_INNER = 'rgba(79, 209, 197, 0.02)';
const GLOW_COLOR_OUTER = 'rgba(79, 209, 197, 0)';

class Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.originX = Math.random() * canvasWidth;
    this.originY = Math.random() * canvasHeight;
    this.x = this.originX;
    this.y = this.originY;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = 0;
    this.speedY = 0;
    // Assign a random color from the palette
    this.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
  }

  update(mouseX: number, mouseY: number) {
    // Calculate repulsion force from mouse
    const dxMouse = this.x - mouseX;
    const dyMouse = this.y - mouseY;
    const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
    
    let forceX = 0;
    let forceY = 0;

    if (distanceMouse < DISTURBANCE_RADIUS) {
      const force = (DISTURBANCE_RADIUS - distanceMouse) / DISTURBANCE_RADIUS;
      const angle = Math.atan2(dyMouse, dxMouse);
      forceX += Math.cos(angle) * force * REPULSION_STRENGTH;
      forceY += Math.sin(angle) * force * REPULSION_STRENGTH;
    }

    // Calculate spring force to return to origin
    const dxOrigin = this.originX - this.x;
    const dyOrigin = this.originY - this.y;
    forceX += dxOrigin * SPRING_STRENGTH;
    forceY += dyOrigin * SPRING_STRENGTH;
    
    // Update speed with combined forces
    this.speedX += forceX;
    this.speedY += forceY;
    
    // Apply friction to dampen the movement
    this.speedX *= FRICTION;
    this.speedY *= FRICTION;

    // Update position
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -DISTURBANCE_RADIUS * 2, y: -DISTURBANCE_RADIUS * 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const initializeParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particlesRef.current.push(new Particle(canvas.width, canvas.height));
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles();
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Draw the background glow
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, GLOW_RADIUS_OUTER);
      gradient.addColorStop(0, GLOW_COLOR_INNER);
      gradient.addColorStop(1, GLOW_COLOR_OUTER);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 1. Update all particle positions
      particlesRef.current.forEach(particle => {
        particle.update(mouseX, mouseY);
      });
      
      // 2. Draw connections between nearby particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_RADIUS) {
            const opacity = 1 - (distance / CONNECTION_RADIUS);
            ctx.strokeStyle = `rgba(${LINE_COLOR_RGB}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 3. Draw the particles on top of the lines
      particlesRef.current.forEach(particle => {
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const canvasStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 0,
    pointerEvents: 'none',
  };

  return <canvas ref={canvasRef} style={canvasStyle} />;
};

export default ParticleCanvas;
import React, { useEffect, useRef } from "react";

const ParticleSphere = ({ width, height }) => {
  const particleNumber = 200;
  const angleDemul = 500;
  const zAngleDemul = 250;
  const maxRadius = 7;
  const minRadius = 1;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxX = centerX - 50;
    const maxY = centerY - 50;
    const range = maxX > maxY ? maxY : maxX;

    // Generate particles
    const particles = generateParticles(particleNumber);

    function Particle() {
      this.angle = Math.random() * 2 * Math.PI;
      this.vangle = Math.random() / angleDemul;
      this.zangle = Math.random() * 2 * Math.PI;
      this.zvelangle = Math.random() / zAngleDemul;
      this.x = 0;
      this.y = 0;
      this.r = maxRadius * Math.random();
      this.color =
        Math.random() < 0.5 ? "white" : `rgba(128, 0, 128, ${Math.random()})`;

      this.move = function () {
        // Update coordinates
        this.y = centerY + range * Math.cos(this.angle);
        this.x = centerX + range * Math.cos(this.zangle) * Math.sin(this.angle);

        // Update angle
        this.angle += this.vangle;
        this.zangle += this.zvelangle;

        // Change radius on Z axis
        if (Math.sin(this.zangle) > 0.5 && this.r < maxRadius) this.r += 0.01;
        else if (this.r > minRadius) this.r -= 0.01;
      };
    }

    function clearCanvas() {
      canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function updateParticles() {
      for (const index in particles) {
        particles[index].move();
        drawParticle(particles[index]);
      }
    }

    function drawParticle(particle) {
      canvasCtx.beginPath();
      canvasCtx.fillStyle = particle.color;
      canvasCtx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      canvasCtx.fill();
    }

    function generateParticles(numParticles) {
      const generatedParticles = [];
      for (let i = 0; i < numParticles; i++) {
        generatedParticles.push(new Particle());
      }
      return generatedParticles;
    }

    function animate() {
      clearCanvas();
      updateParticles();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {};
  }, [width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default ParticleSphere;

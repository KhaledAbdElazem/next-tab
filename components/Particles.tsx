'use client';

import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1, // Ensure particles are behind other content
        },
        particles: {
          number: {
            value: 80, // Increase the number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ['#00e1ff', '#ff00ff'], // Neon blue and pink
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.7, // Increase opacity for better visibility
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3, // Minimum opacity
              sync: false,
            },
          },
          size: {
            value: 4, // Increase particle size
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1, // Minimum size
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#00e1ff',
            opacity: 0.5, // Increase line opacity
            width: 1.5, // Increase line width
          },
          move: {
            enable: true,
            speed: 3, // Increase movement speed
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: true,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              size: 6,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}
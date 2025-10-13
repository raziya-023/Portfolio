import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const AnimatedBackground = ({ theme }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particleColor = theme === 'dark' ? '#EAE6F0' : '#5A3E2B';

    // Base options for all layers
    const baseOptions = {
        background: { color: { value: 'transparent' } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: false,
                },
                resize: true,
            },
        },
        particles: {
            color: { value: particleColor },
            links: { enable: false },
            move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'out' },
                random: true,
                straight: false,
            },
            number: { density: { enable: true, area: 800 } },
            opacity: { value: { min: 0.1, max: 0.8 } },
            shape: { type: 'circle' },
        },
        detectRetina: true,
    };

    // Layer 1: Slow, small, far away particles
    const optionsSlow = { ...baseOptions, particles: { ...baseOptions.particles, number: { value: 200 }, move: { ...baseOptions.particles.move, speed: 0.5 }, size: { value: { min: 0.5, max: 1.5 } } } };
    
    // Layer 2: Medium speed, medium size particles
    const optionsMedium = { ...baseOptions, particles: { ...baseOptions.particles, number: { value: 100 }, move: { ...baseOptions.particles.move, speed: 0.8 }, size: { value: { min: 1, max: 2.5 } } } };

    // Layer 3: Fast, large, close particles
    const optionsFast = { ...baseOptions, particles: { ...baseOptions.particles, number: { value: 50 }, move: { ...baseOptions.particles.move, speed: 1 }, size: { value: { min: 1.5, max: 5 } } } };

    return (
        <>
            <Particles id="tsparticles-slow" key={`slow-${theme}`} init={particlesInit} options={optionsSlow} />
            <Particles id="tsparticles-medium" key={`medium-${theme}`} init={particlesInit} options={optionsMedium} />
            <Particles id="tsparticles-fast" key={`fast-${theme}`} init={particlesInit} options={optionsFast} />
        </>
    );
};

export default AnimatedBackground;
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skillIcons = [
    { name: 'Python', glowColor: 'rgba(234,179,8,0.4)', x: 20, y: 15 },
    { name: 'SQL', glowColor: 'rgba(59,130,246,0.4)', x: 10, y: 40 },
    { name: 'Machine Learning', glowColor: 'rgba(168,85,247,0.4)', x: 75, y: 18 },
    { name: 'MERN Stack', glowColor: 'rgba(234,179,8,0.4)', x: 88, y: 65 },
    { name: 'Power BI', glowColor: 'rgba(59,130,246,0.4)', x: 80, y: 42 },
    { name: 'Kafka & Spark', glowColor: 'rgba(168,85,247,0.4)', x: 70, y: 85 },
    { name: 'PostgreSQL & MongoDB', glowColor: 'rgba(59,130,246,0.4)', x: 15, y: 78 },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.4,
            when: "beforeChildren"
        }
    }
};

const itemVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 15 },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: { type: 'spring' as const, stiffness: 120, damping: 14 }
    }
};

export default function Skills() {
    // The canvas system coordinates are percentage-based (0 to 100)
    // The avatar sits dead center
    const centerX = 50;
    const centerY = 50;

    return (
        <section id="skills" className="py-32 relative z-10 min-h-screen flex items-center bg-bg-primary select-none overflow-hidden">

            {/* AMBIENT BACKGROUND SYSTEM */}
            <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none -z-20" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none -z-20" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none -z-20" />

            <div className="container mx-auto px-6 lg:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT HEADER CONTENT */}
                    <motion.div
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-accent-blue" />
                            <span className="text-xs font-bold tracking-[0.25em] text-accent-blue uppercase block">
                                Technical Ecosystem
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-text-primary tracking-tight leading-[1.1]">
                            Production <br />
                            <span className="text-gradient relative inline-block">Intelligence Stack</span>
                        </h2>

                        <p className="text-lg text-text-secondary font-light mb-10 max-w-md leading-relaxed">
                            Engineered for high-throughput analysis, scalable data architecture, and predictive clarity. Here is the computational infrastructure powering my automated models and end-to-end data systems.
                        </p>

                        <div className="flex items-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3.5 rounded-xl bg-text-primary text-bg-primary hover:bg-opacity-90 transition-all text-sm font-semibold tracking-wide"
                            >
                                Architecture Overview
                            </motion.button>

                            <motion.a
                                href="#contact"
                                whileHover={{ x: 4 }}
                                className="text-sm font-semibold text-text-primary flex items-center gap-2 border-b border-transparent hover:border-text-primary/30 py-1 transition-all"
                            >
                                View Integration Specs
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* RIGHT ANIMATION INFRASTRUCTURE */}
                    <motion.div
                        className="lg:col-span-7 relative h-[550px] md:h-[650px] w-full bg-card-bg/20 border border-card-border/40 rounded-3xl backdrop-blur-md overflow-hidden"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >

                        {/* HERO LAYER (Grounded Depth Centerpiece) */}
                        <div className="absolute inset-0 flex justify-center items-center z-20 pointer-events-none">
                            <motion.div
                                className="relative w-[280px] md:w-[320px] h-[450px]"
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.2 }
                                }}
                            >
                                <motion.div
                                    className="w-full h-full relative"
                                    animate={{ y: [-12, 12, -12] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    <Image
                                        src="/images/hero.png"
                                        alt="Network System Centerpiece"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mix-blend-lighten"
                                        priority
                                    />
                                </motion.div>

                                {/* Base Depth Shadow Plate */}
                                <motion.div
                                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/40 rounded-full blur-md -z-10"
                                    animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </motion.div>
                        </div>

                        {/* DIGITAL SVG MATRIX */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="stream-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(59,130,246,0)" />
                                        <stop offset="50%" stopColor="rgba(59,130,246,1)" />
                                        <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                                    </linearGradient>
                                    <linearGradient id="stream-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(168,85,247,0)" />
                                        <stop offset="50%" stopColor="rgba(168,85,247,1)" />
                                        <stop offset="100%" stopColor="rgba(168,85,247,0)" />
                                    </linearGradient>
                                    <linearGradient id="stream-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgba(234,179,8,0)" />
                                        <stop offset="50%" stopColor="rgba(234,179,8,1)" />
                                        <stop offset="100%" stopColor="rgba(234,179,8,0)" />
                                    </linearGradient>

                                    <filter id="matrix-blur" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="1" result="blur" />
                                        <feMerge>
                                            <feMergeNode in="blur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {skillIcons.map((skill, idx) => {
                                    const controlX = (centerX + skill.x) / 2;
                                    const controlY = Math.max(centerY, skill.y) + 10;

                                    const pathData = `M ${centerX} ${centerY} Q ${controlX} ${controlY} ${skill.x} ${skill.y}`;

                                    let streamColor = "url(#stream-blue)";
                                    if (skill.glowColor.includes('168,85,247')) streamColor = "url(#stream-purple)";
                                    if (skill.glowColor.includes('234,179,8')) streamColor = "url(#stream-yellow)";

                                    return (
                                        <g key={`data-pipe-${idx}`}>
                                            {/* Sub-surface Base Path Traces */}
                                            <path
                                                d={pathData}
                                                className="stroke-card-border/10"
                                                strokeWidth="0.4"
                                                fill="none"
                                            />

                                            {/* Dynamic Micro-Pulse Pipeline */}
                                            <motion.path
                                                d={pathData}
                                                stroke={streamColor}
                                                strokeWidth="0.6"
                                                fill="none"
                                                filter="url(#matrix-blur)"
                                                strokeDasharray="15 40"
                                                initial={{ strokeDashoffset: 55 }}
                                                animate={{ strokeDashoffset: -55 }}
                                                transition={{
                                                    duration: 4 + (idx % 3),
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                    delay: idx * 0.3,
                                                }}
                                            />
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>

                        {/* HIGH-TECH PROCESSING NODE LABELS */}
                        {skillIcons.map((skill, idx) => (
                            <motion.div
                                key={`node-label-${idx}`}
                                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                                variants={itemVariants}
                                className="absolute z-30 -translate-x-1/2 -translate-y-1/2 group"
                            >
                                <motion.div
                                    className="px-4 py-2.5 bg-bg-surface/80 dark:bg-bg-primary/90 border border-card-border/80 backdrop-blur-xl rounded-xl flex items-center gap-2.5 relative transition-all duration-300 group-hover:border-text-primary/30 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                                    animate={{
                                        y: [idx % 2 === 0 ? -6 : 6, idx % 2 === 0 ? 6 : -6, idx % 2 === 0 ? -6 : 6]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: idx * 0.25
                                    }}
                                    whileHover={{ scale: 1.05, y: 0 }}
                                >
                                    {/* Concentric Center Hardware Signal Dot */}
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: skill.glowColor }} />
                                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: skill.glowColor.replace('0.4', '1') }} />
                                    </span>

                                    <span className="text-xs font-semibold tracking-wider text-text-primary font-mono whitespace-nowrap">
                                        {skill.name}
                                    </span>

                                    {/* Isolated Radial Backdrop Glow on Node Hover */}
                                    <div
                                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none -z-10"
                                        style={{ backgroundColor: skill.glowColor }}
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BrainCircuit, Database, BarChart3, Code2 } from 'lucide-react';
import Image from 'next/image';

const floatingAnimation = {
    y: [0, -12, 0],
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const
    }
};

const iconAnimation = (delay: number) => ({
    y: [0, -10, 0],
    rotate: [0, 4, -4, 0],
    transition: {
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: delay
    }
});

const techIcons = [
    { icon: Code2, label: 'Python', color: 'from-amber-500/20 to-orange-600/10 border-orange-500/30 text-orange-400', pos: 'top-[18%] -left-[6%] md:-left-[12%]', delay: 0 },
    { icon: Database, label: 'SQL', color: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400', pos: 'top-[12%] -right-[4%] md:-right-[8%]', delay: 1.2 },
    { icon: BrainCircuit, label: 'TensorFlow', color: 'from-orange-500/20 to-red-500/10 border-red-500/30 text-red-400', pos: 'bottom-[32%] -left-[8%] md:-left-[14%]', delay: 2.4 },
    { icon: BarChart3, label: 'Power BI', color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400', pos: 'bottom-[36%] -right-[6%] md:-right-[10%]', delay: 0.6 },
];

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen relative flex items-center pt-32 pb-16 overflow-hidden bg-bg-primary transition-colors duration-500 selection:bg-accent-blue/20">
            {/* Cyber Grid Background Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--app-border-glass)_1px,transparent_1px),linear-gradient(to_bottom,var(--app-border-glass)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none opacity-70" />

            {/* High-intensity Ambient Glows */}
            <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-gradient-to-br from-accent-blue/10 to-transparent rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-tr from-accent-purple/8 to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-between z-10 max-w-7xl relative">

                {/* Left Content Column */}
                <motion.div
                    className="w-full lg:w-1/2 mt-16 lg:mt-0 z-20 text-center lg:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Modern Glass Pill Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-card-hover/10 backdrop-blur-md border border-card-border/80 shadow-sm mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Sparkles size={13} className="text-accent-gold animate-pulse" />
                        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-accent-blue uppercase">
                            Aspiring Data Analyst & Data Engineer
                        </span>
                    </motion.div>

                    {/* Bold Engineering Headline */}
                    <motion.h1
                        className="text-5xl md:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6 text-text-primary"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Hi, I&apos;m <br />
                        <span className="text-text-primary">Mano </span>
                        <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(99,102,241,0.15)]">
                            Arvind
                        </span>
                    </motion.h1>

                    {/* Subheadline and Description Block */}
                    <motion.div
                        className="space-y-4 mb-10 max-w-lg mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <p className="text-xl md:text-2xl text-text-secondary font-medium tracking-tight">
                            Turning Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple font-semibold">Intelligent Solutions</span>
                        </p>
                        <p className="text-sm md:text-base text-text-muted font-light leading-relaxed opacity-90">
                            Aspiring Data Analyst and Data Engineer with hands-on experience in SQL, Python, Excel, Power BI, Apache
                            Spark, Kafka, and PostgreSQL. Skilled in data cleaning, transformation, analysis, visualization, and building
                            end-to-end data pipelines to uncover insights and solve complex problems.
                        </p>
                    </motion.div>

                    {/* Premium Call to Action Interfaces */}
                    <motion.div
                        className="flex flex-row items-center justify-center lg:justify-start gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <a
                            href="#projects"
                            className="group relative px-6 py-3.5 bg-accent-blue rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.35)] flex items-center gap-2 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <span>View My Work</span>
                            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3.5 bg-card-hover/5 border border-card-border/80 rounded-xl font-semibold text-sm text-text-primary transition-all duration-300 hover:bg-card-hover hover:border-card-border flex items-center gap-2 backdrop-blur-sm"
                        >
                            <span>Contact Me</span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Content Column - Active HUD Stage */}
                <motion.div
                    className="w-full lg:w-1/2 relative h-[480px] md:h-[600px] flex justify-center items-center group/stage select-none"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* ADVANCED HUD SYSTEM OVERLAYS */}
                    {/* Outer Tech Calibration Ring */}
                    <motion.div
                        className="absolute w-[360px] md:w-[480px] h-[360px] md:h-[480px] rounded-full border border-dashed border-accent-blue/20 pointer-events-none z-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Core Rotating Telemetry Frame */}
                    <motion.div
                        className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full border border-accent-purple/15 pointer-events-none z-0 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:bg-accent-purple before:rounded-full before:shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Integrated Target Scope Markers */}
                    <div className="absolute w-[330px] md:w-[440px] h-[330px] md:h-[440px] pointer-events-none z-0 opacity-40 group-hover/stage:opacity-70 transition-opacity duration-500">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-accent-blue" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-accent-blue" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-accent-blue" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-accent-blue" />
                    </div>

                    {/* Primary Avatar Character Core */}
                    <motion.div
                        animate={floatingAnimation}
                        className="relative w-[260px] md:w-[350px] h-[380px] md:h-[480px] z-20 flex items-center justify-center"
                    >
                        <Image
                            src="/images/hero.png"
                            alt="Mano Arvind 3D Avatar"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain drop-shadow-[0_20px_40px_rgba(99,102,241,0.25)] z-10 transition-transform duration-500 group-hover/stage:scale-[1.02]"
                            priority
                        />

                        {/* Floating Hardware Asset Nodes */}
                        {techIcons.map((item, idx) => (
                            <motion.div
                                key={idx}
                                animate={iconAnimation(item.delay)}
                                className={`absolute ${item.pos} p-3.5 rounded-2xl bg-gradient-to-b ${item.color} border shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-md flex items-center justify-center z-30 transition-all duration-300 hover:scale-110 hover:border-text-primary/30 group/node`}
                            >
                                <item.icon size={22} className="transition-transform duration-300 group-hover/node:rotate-6" />

                                {/* Dynamic Inline HUD Tag */}
                                <span className="absolute -bottom-6 bg-card/90 border border-card-border px-2 py-0.5 rounded text-[9px] font-mono font-medium text-text-secondary opacity-0 group-hover/stage:opacity-100 transition-opacity duration-300 pointer-events-none shadow-sm">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Complex Glowing Pedestal Platform */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[300px] md:w-[440px] h-[65px] md:h-[80px] pointer-events-none z-0">
                        <div className="absolute inset-0 rounded-[100%] border border-accent-blue/30 shadow-[0_0_40px_rgba(99,102,241,0.35)]" />
                        <div className="absolute inset-[10px] rounded-[100%] border-2 border-accent-blue/50 bg-gradient-to-t from-accent-blue/15 to-transparent shadow-[inset_0_0_15px_rgba(99,102,241,0.25)]" />
                        <div className="absolute inset-[24px] bottom-0 rounded-[100%] bg-accent-blue/20 blur-md opacity-80" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
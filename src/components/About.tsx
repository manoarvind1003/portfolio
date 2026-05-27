'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Award, BookOpen, Brain, Code2 } from 'lucide-react';
import Image from 'next/image';

const stats = [
    { id: 1, label: 'Projects Completed', value: 2, suffix: '+' },
    { id: 2, label: 'Technologies Mastered', value: 10, suffix: '+' },
    { id: 3, label: 'Certifications', value: 4, suffix: '+' },
    { id: 4, label: 'Dedication Rate', value: 100, suffix: '%' },
];

const pills = [
    { icon: Code2, label: 'Data Science', sub: 'Graduate' },
    { icon: Brain, label: 'Problem', sub: 'Solver' },
    { icon: Award, label: 'AI/ML', sub: 'Enthusiast' },
    { icon: BookOpen, label: 'Lifelong', sub: 'Learner' }
];

// Stagger Animation Configs
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring' as const, stiffness: 60, damping: 15 }
    }
};

// Advanced Counter Component for a highly interactive feel
function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, value, {
                duration: 2,
                ease: 'easeOut',
            });
            return controls.stop;
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        return rounded.on('change', (latest) => {
            if (ref.current) ref.current.textContent = latest.toString();
        });
    }, [rounded]);

    return (
        <span className="text-4xl md:text-5xl font-extrabold tracking-tight font-display bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold bg-clip-text text-transparent">
            <span ref={ref}>0</span>
            {suffix}
        </span>
    );
}

export default function About() {
    return (
        <section id="about" className="py-32 relative overflow-hidden bg-bg-secondary transition-colors duration-500">
            {/* Ambient Background Glow Elements */}
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[130px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Section Header */}
                <motion.div
                    className="mb-16 text-center lg:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-xs font-semibold tracking-[0.3em] text-accent-blue uppercase mb-3 block">
                        Brief Narrative
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text-primary">
                        Who I <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">Am</span>
                    </h2>
                </motion.div>

                {/* Modern Bento Grid Layout */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {/* Left Panel: Narrative Profile */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col justify-between space-y-8 p-8 rounded-3xl theme-card border border-card-border bg-card-bg/40 backdrop-blur-md hover:border-accent-blue/30 transition-all duration-500 group"
                        variants={itemVariants}
                    >
                        <div className="space-y-6">
                            <div className="h-1 w-12 bg-accent-blue rounded-full group-hover:w-20 transition-all duration-500" />
                            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-normal">
                                A motivated Data Science graduate with a robust structural framework in machine learning architectures, exploratory data visualization, and systematic analysis.
                            </p>
                            <p className="text-text-muted text-sm md:text-base leading-relaxed font-light">
                                I specialize in shifting convoluted, unstructured data structures into crisp, actionable architectural systems and building clean, predictive micro-solutions engineered for real-world impact.
                            </p>
                        </div>

                        {/* Interactive Pill Matrix */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {pills.map((pill, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 rounded-2xl bg-bg-secondary/6xl border border-card-border/60 flex items-center gap-4 hover:scale-[1.02] hover:bg-accent-blue/[0.02] transition-all duration-300"
                                >
                                    <div className="text-accent-blue bg-accent-blue/10 p-2.5 rounded-xl border border-accent-blue/10">
                                        <pill.icon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-text-primary tracking-wide">{pill.label}</span>
                                        <span className="text-[11px] text-text-muted font-medium">{pill.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Middle Panel: Visual Core & Character Canvas */}
                    <motion.div
                        className="lg:col-span-4 flex flex-col items-center justify-center relative p-6 rounded-3xl bg-gradient-to-b from-card-bg/30 to-card-bg/10 border border-card-border min-h-[420px]"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-radial-gradient from-accent-blue/20 to-transparent rounded-3xl opacity-40 mix-blend-color-dodge pointer-events-none" />

                        <div className="relative w-full max-w-[260px] aspect-[4/5] hover:scale-[1.03] transition-transform duration-500 ease-out">
                            <Image
                                src="/images/hero.png"
                                alt="Mano Arvind Character Display"
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="object-contain drop-shadow-[0_25px_50px_rgba(99,102,241,0.25)]"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right Panel: Performance Metric Column */}
                    <motion.div
                        className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-6"
                        variants={itemVariants}
                    >
                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className="p-6 rounded-3xl theme-card border border-card-border bg-card-bg/20 backdrop-blur-sm flex flex-col justify-center items-start group hover:border-accent-purple/30 transition-all duration-500"
                            >
                                <Counter value={stat.value} suffix={stat.suffix} />
                                <span className="text-[11px] text-text-muted font-bold tracking-widest mt-2 uppercase block group-hover:text-text-primary transition-colors duration-300">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Micro Section Divider */}
            <div className="mt-32 border-t border-card-border/40 mx-auto max-w-5xl opacity-60" />
        </section>
    );
}
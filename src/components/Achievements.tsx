'use client';

import { motion } from 'framer-motion';
import { Rocket, Award, Database, Target, Infinity as InfinityIcon } from 'lucide-react';
import Image from 'next/image';

const achievements = [
    {
        id: 1,
        title: '3+',
        subtitle: 'Projects Completed',
        icon: Rocket,
        span: 'col-span-2 sm:col-span-2 lg:col-span-2',
        color: 'from-accent-blue/15 via-accent-blue/5 to-transparent',
        border: 'hover:border-accent-blue/30',
        iconColor: 'text-accent-blue',
        iconBg: 'group-hover:bg-accent-blue',
    },
    {
        id: 2,
        title: '4+',
        subtitle: 'Certifications Earned',
        icon: Award,
        span: 'col-span-2 sm:col-span-1 lg:col-span-1',
        color: 'from-accent-purple/15 via-accent-purple/5 to-transparent',
        border: 'hover:border-accent-purple/30',
        iconColor: 'text-accent-purple',
        iconBg: 'group-hover:bg-accent-purple',
    },
    {
        id: 3,
        title: '10+',
        subtitle: 'Datasets Analyzed',
        icon: Database,
        span: 'col-span-2 sm:col-span-1 lg:col-span-1',
        color: 'from-accent-blue/15 via-accent-blue/5 to-transparent',
        border: 'hover:border-accent-blue/30',
        iconColor: 'text-accent-blue',
        iconBg: 'group-hover:bg-accent-blue',
    },
    {
        id: 4,
        title: '2',
        subtitle: 'Hackathons',
        icon: Target,
        span: 'col-span-2 sm:col-span-1 lg:col-span-1',
        color: 'from-accent-gold/15 via-accent-gold/5 to-transparent',
        border: 'hover:border-accent-gold/30',
        iconColor: 'text-accent-gold',
        iconBg: 'group-hover:bg-accent-gold',
    },
    {
        id: 5,
        title: '∞',
        subtitle: 'Learning Everyday',
        icon: InfinityIcon,
        span: 'col-span-2 sm:col-span-1 lg:col-span-1',
        color: 'from-accent-purple/15 via-accent-purple/5 to-transparent',
        border: 'hover:border-accent-purple/30',
        iconColor: 'text-accent-purple',
        iconBg: 'group-hover:bg-accent-purple',
    },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-28 relative overflow-hidden bg-bg-secondary transition-colors duration-500 selection:bg-accent-purple/20">
            {/* Fine-Tuned Ambient Spotlights */}
            <div className="absolute top-1/4 left-[-15%] w-[550px] h-[550px] bg-gradient-to-tr from-accent-blue/8 to-transparent rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-accent-purple/8 to-transparent rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT COLUMN: Character Stage */}
                    <div className="lg:col-span-5 relative h-[450px] md:h-[520px] w-full flex flex-col justify-center items-center order-2 lg:order-1">
                        {/* Dynamic Floating Shadow */}
                        <motion.div
                            className="absolute bottom-4 w-[240px] h-[30px] rounded-full bg-accent-purple/10 border border-accent-purple/20 blur-md pointer-events-none"
                            animate={{ scale: [1, 0.85, 1], opacity: [0.6, 0.3, 0.6] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        <motion.div
                            className="relative w-[280px] md:w-[320px] h-full z-20 flex items-center justify-center"
                            animate={{ y: [0, -14, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <Image
                                src="/images/mockup.png"
                                alt="Achievements Character"
                                fill
                                sizes="(max-width: 1024px) 50vw, 33vw"
                                className="object-contain drop-shadow-[0_20px_40px_rgba(99,102,241,0.15)] filter contrast-[1.01]"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Descriptive Copy & Dashboard Grid */}
                    <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <span className="text-xs font-bold tracking-[0.3em] text-accent-blue uppercase block opacity-90">
                                Metrics
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text-primary leading-[1.15]">
                                Milestones & <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold bg-clip-text text-transparent">Highlights</span>
                            </h2>
                            <p className="text-text-secondary text-base font-light leading-relaxed max-w-xl opacity-85">
                                Analytical evidence of my growth stack. Each metric represents hours committed to extracting technical utility from unstructured operational layers.
                            </p>
                        </motion.div>

                        {/* Modular Performance Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                            {achievements.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.06, ease: "easeOut" }}
                                    className={`${item.span} group relative overflow-hidden theme-card bg-card-hover/10 backdrop-blur-md p-6 rounded-2xl transition-all duration-300 border border-card-border/60 flex flex-col items-center justify-center text-center ${item.border} hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)]`}
                                >
                                    {/* Hover Radial Reflection */}
                                    <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                    {/* Structural Tech Grid Overlay */}
                                    <div className="absolute inset-0 opacity-[0.01] group-hover:opacity-[0.04] transition-opacity bg-[radial-gradient(var(--text-muted)_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                                    <div className="relative flex flex-col items-center justify-center z-10">
                                        {/* Adaptive Icon Container */}
                                        <div className={`p-3 rounded-xl bg-card border border-card-border/80 mb-4 transition-all duration-300 shadow-sm ${item.iconColor} ${item.iconBg} group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]`}>
                                            <item.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                                        </div>

                                        {/* Numerical Highlight */}
                                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-2 font-display">
                                            {item.title}
                                        </h3>

                                        {/* Subtitle Definition */}
                                        <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-muted group-hover:text-text-secondary transition-colors duration-300">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Seamless Decorative Section Divider */}
            <div className="section-divider mt-28 mx-auto max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-card-border/60 to-transparent" />
        </section>
    );
}
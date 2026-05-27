'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Briefcase } from 'lucide-react';
import Image from 'next/image';

const educationData = [
    {
        year: '2021',
        title: 'B.Sc. in Data Science',
        institution: 'University Graduate Journey',
        desc: 'Began my foundational journey into advanced analytics, statistical modeling, and computational theory.',
        icon: GraduationCap,
        color: 'from-accent-blue/15 to-transparent',
        border: 'hover:border-accent-blue/30',
        themeColor: 'group-hover:text-accent-blue',
        iconBg: 'group-hover:bg-accent-blue',
        iconText: 'text-accent-blue',
        calColor: 'text-accent-blue'
    },
    {
        year: '2022',
        title: 'Machine Learning Specialist',
        institution: 'Certification & Analytics',
        desc: 'Mastered training structures, optimizing deep learning neural networks, and parsing structured datasets.',
        icon: Award,
        color: 'from-accent-purple/15 to-transparent',
        border: 'hover:border-accent-purple/30',
        themeColor: 'group-hover:text-accent-purple',
        iconBg: 'group-hover:bg-accent-purple',
        iconText: 'text-accent-purple',
        calColor: 'text-accent-purple'
    },
    {
        year: '2023',
        title: 'Data Science Intern',
        institution: 'Corporate Experience',
        desc: 'Translated theoretical data modeling directly into enterprise value by orchestrating data pipelines.',
        icon: Briefcase,
        color: 'from-accent-gold/15 to-transparent',
        border: 'hover:border-accent-gold/30',
        themeColor: 'group-hover:text-accent-gold',
        iconBg: 'group-hover:bg-accent-gold',
        iconText: 'text-accent-gold',
        calColor: 'text-accent-gold'
    }
];

export default function Education() {
    return (
        <section id="education" className="py-28 relative overflow-hidden bg-bg-primary transition-colors duration-500 selection:bg-accent-blue/20">
            {/* Ambient Sci-Fi Background Elements */}
            <div className="absolute bottom-[15%] right-[-5%] w-[550px] h-[550px] bg-gradient-to-tr from-accent-purple/8 to-transparent rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-bl from-accent-blue/8 to-transparent rounded-full blur-[130px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT COLUMN: Clean Header & Stylized 3D Mascot Stage */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <span className="text-xs font-bold tracking-[0.3em] text-accent-blue uppercase block opacity-90">
                                Education
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text-primary leading-[1.15]">
                                Academic <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-gold bg-clip-text text-transparent">Journey</span>
                            </h2>
                            <p className="text-text-secondary text-base leading-relaxed font-light max-w-sm opacity-85">
                                Milestones and foundational learning blocks that shaped my engineering perspective.
                            </p>
                        </motion.div>

                        {/* Graduation character container with custom scaling drop shadow */}
                        <motion.div
                            className="relative h-[380px] md:h-[460px] w-full flex flex-col justify-center items-center select-none"
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.div 
                                className="absolute bottom-2 w-[220px] h-[25px] rounded-full bg-accent-blue/10 border border-accent-blue/20 blur-md pointer-events-none"
                                animate={{ scale: [1, 0.9, 1], opacity: [0.5, 0.25, 0.5] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                            />

                            <motion.div
                                className="relative w-[260px] md:w-[300px] h-full z-10 flex items-center justify-center"
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <Image
                                    src="/images/graduation.png"
                                    alt="Graduation Mascot"
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 33vw"
                                    className="object-contain drop-shadow-[0_20px_40px_rgba(99,102,241,0.2)] filter contrast-[1.01]"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Timeline Track */}
                    <div className="lg:col-span-7 space-y-6 relative before:absolute before:inset-y-4 before:left-12 before:w-[1px] before:bg-gradient-to-b before:from-card-border/60 before:via-card-border/20 before:to-transparent before:pointer-events-none sm:before:block hidden sm:block">
                        {/* Alternative fallback for uniform vertical margins across mobile spaces */}
                        <div className="space-y-6 sm:space-y-6 block -mt-6 sm:mt-0" />
                        
                        {educationData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                                className="group relative"
                            >
                                <div className={`relative overflow-hidden theme-card bg-card-hover/10 backdrop-blur-md p-6 md:p-8 rounded-2xl transition-all duration-300 border border-card-border/60 ${item.border} hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] active:scale-[0.995]`}>

                                    {/* Hover gradient background mask */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                    <div className="relative flex flex-col md:flex-row md:items-start gap-6 z-10">

                                        {/* Adaptive Theme Icon Node */}
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-card border border-card-border flex items-center justify-center transition-all duration-300 shadow-sm ${item.iconText} ${item.iconBg} group-hover:text-white group-hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]`}>
                                            <item.icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                                        </div>

                                        {/* Text Layout Metadata Block */}
                                        <div className="flex-1 space-y-2.5">
                                            <div className="flex flex-wrap items-center justify-between gap-3">
                                                <h3 className={`text-lg md:text-xl font-bold text-text-primary tracking-tight ${item.themeColor} transition-colors duration-300`}>
                                                    {item.title}
                                                </h3>

                                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card/60 backdrop-blur-sm border border-card-border/80 text-text-muted text-xs font-mono font-medium shadow-sm transition-colors duration-300 group-hover:border-card-border">
                                                    <Calendar size={12} className={`transition-colors duration-300 ${item.calColor}`} />
                                                    <span className="opacity-90">{item.year}</span>
                                                </div>
                                            </div>

                                            <p className="text-xs text-accent-purple font-semibold tracking-wider uppercase opacity-90">
                                                {item.institution}
                                            </p>

                                            <p className="text-text-secondary font-light text-sm md:text-base leading-relaxed max-w-2xl pt-1 opacity-85">
                                                {item.desc}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Standardized Responsive layout clone specifically rendered for structural clean look on Mobile viewports */}
                    <div className="block sm:hidden lg:col-span-7 space-y-5">
                        {educationData.map((item, idx) => (
                            <div key={idx} className="group relative">
                                <div className="relative overflow-hidden theme-card bg-card-hover/10 backdrop-blur-md p-6 rounded-2xl border border-card-border/60">
                                    <div className="relative flex flex-col gap-4 z-10">
                                        <div className="flex items-center justify-between gap-2">
                                            <div className={`w-10 h-10 rounded-xl bg-card border border-card-border flex items-center justify-center ${item.iconText}`}>
                                                <item.icon size={18} />
                                            </div>
                                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-card border border-card-border text-text-muted text-xs font-mono">
                                                <Calendar size={12} className={item.calColor} />
                                                <span>{item.year}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-base font-bold text-text-primary tracking-tight">{item.title}</h3>
                                            <p className="text-[11px] text-accent-purple font-semibold tracking-wide uppercase">{item.institution}</p>
                                        </div>
                                        <p className="text-text-secondary font-light text-sm leading-relaxed opacity-90">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Premium Linear Section Divider Line */}
            <div className="section-divider mt-28 mx-auto max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-card-border/60 to-transparent" />
        </section>
    );
}
'use client';

import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const projects = [
    {
        id: 1,
        title: 'Stock Price Prediction',
        description: 'LSTM model to predict stock prices using historical data with high accuracy.',
        tags: ['Python', 'LSTM', 'Finance'],
        gradient: 'from-accent-blue/20 to-accent-purple/20',
        glow: 'hover:shadow-[0_0_30px_var(--app-accent-blue)] hover:border-accent-blue/50'
    },
    {
        id: 2,
        title: 'Customer Churn Analysis',
        description: 'Analyzed customer behavior and built churn prediction model with actionable insights.',
        tags: ['Python', 'ML', 'Analytics'],
        gradient: 'from-accent-purple/20 to-accent-gold/20',
        glow: 'hover:shadow-[0_0_30px_var(--app-accent-purple)] hover:border-accent-purple/50'
    },
    {
        id: 3,
        title: 'Fake News Detection',
        description: 'NLP-based model to detect fake news from real news with deep learning.',
        tags: ['Python', 'NLP', 'Deep Learning'],
        gradient: 'from-accent-blue/20 to-accent-gold/20',
        glow: 'hover:shadow-[0_0_30px_var(--app-accent-gold)] hover:border-accent-gold/50'
    },
    {
        id: 4,
        title: 'Sales Dashboard',
        description: 'Interactive dashboard for sales insights using Power BI with real-time data.',
        tags: ['Power BI', 'DAX', 'Analytics'],
        gradient: 'from-accent-gold/20 to-accent-blue/20',
        glow: 'hover:shadow-[0_0_30px_var(--app-accent-blue)] hover:border-accent-blue/50'
    }
];

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir === 'left' ? -420 : 420, behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" className="py-24 relative z-10 min-h-screen bg-bg-secondary transition-colors duration-500">
            <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[130px] pointer-events-none transition-colors duration-500" />
            <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[130px] pointer-events-none transition-colors duration-500" />

            <div className="container mx-auto max-w-7xl relative z-10">

                {/* Section Header */}
                <motion.div
                    className="flex justify-between items-end mb-16 px-6 lg:px-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] text-accent-blue uppercase mb-3 block transition-colors duration-500">Projects</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
                            Things I&apos;ve <span className="text-gradient">Built</span>
                        </h2>
                        <p className="text-text-muted mt-4 max-w-sm font-light">
                            A collection of data science projects solving real-world problems.
                        </p>
                    </div>
                    <button className="hidden md:flex px-6 py-2.5 rounded-full border border-card-border hover:bg-card-hover transition-colors text-sm font-medium text-text-primary">
                        View All Projects
                    </button>
                </motion.div>

                <div className="relative group px-6 lg:px-12">
                    <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory px-4 -mx-4 lg:mx-0 lg:px-0">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                className={`min-w-[320px] md:min-w-[400px] snap-center glass-panel rounded-2xl overflow-hidden border border-card-border transition-all duration-300 cursor-pointer group/card ${project.glow}`}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                {/* Project Image Placeholder */}
                                <div className={`w-full h-48 relative overflow-hidden transition-colors duration-500 bg-gradient-to-br ${project.gradient}`}>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 bg-black/60 backdrop-blur-sm transition-all duration-300">
                                        <div className="flex gap-4">
                                            <button className="p-3 bg-white/10 rounded-full hover:bg-accent-blue hover:text-white transition-colors duration-300 text-white">
                                                <GitBranch size={20} />
                                            </button>
                                            <button className="p-3 bg-white/10 rounded-full hover:bg-accent-purple hover:text-white transition-colors duration-300 text-white">
                                                <ExternalLink size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-display text-text-primary mb-2">{project.title}</h3>
                                    <p className="text-sm text-text-muted mb-6 font-light line-clamp-2 min-h-[40px]">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-card-hover border border-card-border text-text-secondary font-medium transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 ml-0 lg:-ml-6 p-3 rounded-full glass-panel opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block hover:bg-card-hover z-10 text-text-primary">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 mr-0 lg:-mr-6 p-3 rounded-full glass-panel opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block hover:bg-card-hover z-10 text-text-primary">
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="mt-8 flex justify-center md:hidden px-6">
                    <button className="px-6 py-2.5 rounded-full border border-card-border hover:bg-card-hover transition-colors text-sm font-medium w-full max-w-sm text-text-primary">
                        View All Projects
                    </button>
                </div>
            </div>

            {/* Section Divider */}
            <div className="section-divider mt-24 mx-auto max-w-4xl" />
        </section>
    );
}
'use client';

import { useState, useEffect, useRef } from 'react';
import { Network, Terminal, Cpu, Database, Binary, LineChart, MessageSquare } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const featureMap = [
    { label: 'Initialization', icon: Terminal, id: 'hero' },
    { label: 'Profile', icon: Cpu, id: 'about' },
    { label: 'Technical Skills', icon: Binary, id: 'skills' },
    { label: 'Projects', icon: Database, id: 'projects' },
    { label: 'Education', icon: Network, id: 'education' },
    { label: 'Achievements', icon: LineChart, id: 'achievements' },
    { label: 'Contact', icon: MessageSquare, id: 'contact', matrixNode: '0x06' },
];

export default function DataOperationsSidebar() {
    const [activeCluster, setActiveCluster] = useState('hero');
    const systemOverride = useRef(false);
    const computeTimeoutRef = useRef<number | null>(null);
    const tensorIntersectionRegistry = useRef<Record<string, number>>({});

    // Real-time Pipeline Telemetry Tracking
    const { scrollYProgress } = useScroll();
    const systemThroughput = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const matrixQuantum = useTransform(scrollYProgress, [0, 1], [0, 99.9]);

    const routeToCluster = (id: string) => {
        const targetedNode = document.getElementById(id);
        if (!targetedNode) return;

        if (computeTimeoutRef.current) window.clearTimeout(computeTimeoutRef.current);
        systemOverride.current = true;
        setActiveCluster(id);

        targetedNode.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Thread lock preservation during scrolling deceleration
        computeTimeoutRef.current = window.setTimeout(() => {
            systemOverride.current = false;
        }, 850);
    };

    useEffect(() => {
        const telemetryCallback: IntersectionObserverCallback = (entries) => {
            if (systemOverride.current) return;

            entries.forEach((entry) => {
                tensorIntersectionRegistry.current[entry.target.id] = entry.intersectionRatio;
            });

            let peakEntropyId = activeCluster;
            let maximalRatio = 0;

            Object.entries(tensorIntersectionRegistry.current).forEach(([id, ratio]) => {
                if (ratio > maximalRatio) {
                    maximalRatio = ratio;
                    peakEntropyId = id;
                }
            });

            if (maximalRatio > 0 && peakEntropyId !== activeCluster) {
                setActiveCluster(peakEntropyId);
            }
        };

        const optimizationMatrix = {
            root: null,
            rootMargin: '-25% 0px -45% 0px',
            threshold: [0, 0.1, 0.2, 0.4, 0.6, 0.8, 1.0]
        };

        const pipelineObserver = new IntersectionObserver(telemetryCallback, optimizationMatrix);

        featureMap.forEach((node) => {
            const target = document.getElementById(node.id);
            if (target) pipelineObserver.observe(target);
        });

        return () => {
            pipelineObserver.disconnect();
            if (computeTimeoutRef.current) window.clearTimeout(computeTimeoutRef.current);
        };
    }, [activeCluster]);

    return (
        <>
            {/* DATA ENGINE DESKTOP CONTROL HUD */}
            <motion.aside
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="fixed left-0 top-0 h-screen w-[290px] bg-bg-primary/[0.15] backdrop-blur-2xl border-r border-card-border/10 hidden lg:flex flex-col justify-between py-9 z-50 select-none font-mono text-text-primary antialiased"
            >
                {/* Latent Grid Accents */}
                <div className="absolute top-0 right-0 w-[1px] h-40 bg-gradient-to-b from-accent-blue/30 via-accent-blue/5 to-transparent pointer-events-none" />

                {/* Identity Matrix Core */}
                <div className="px-6 flex-shrink-0">
                    <div className="flex items-center gap-3.5">
                        <div className="h-10 w-10 rounded-lg border border-accent-blue/15 bg-accent-blue/[0.01] flex items-center justify-center relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img src="/logo.png" alt="Logo" className="w-9 h-9" />
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-[14px] font-bold tracking-[0.18em] text-text-primary uppercase">
                                Mano Arvind
                            </h2>
                            <p className="text-[10px] text-text-muted/60 uppercase tracking-[0.12em] font-medium flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-sm bg-accent-blue/80 shadow-[0_0_6px_rgba(59,130,246,0.6)] animate-pulse" />
                                Data Science Graduate
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature Processing Navigation Track */}
                <nav className="flex-1 flex flex-col justify-center py-8 pl-4 pr-3.5">
                    <div className="absolute left-6 top-[32%] bottom-[32%] w-[1px] bg-gradient-to-b from-transparent via-card-border/15 to-transparent pointer-events-none" />
                    <ul className="space-y-1.5 relative">
                        {featureMap.map((node) => {
                            const Icon = node.icon;
                            const isConverged = activeCluster === node.id;

                            return (
                                <li key={node.label} className="relative pl-6 group">
                                    {/* Hyper-minimalist vector anchor point */}
                                    <AnimatePresence mode="popLayout">
                                        {isConverged && (
                                            <motion.div
                                                layoutId="active-vector-node"
                                                className="absolute left-[2px] top-1/2 -translate-y-1/2 w-1 h-3.5 bg-accent-blue rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.7)] z-20"
                                                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    <button
                                        onClick={() => routeToCluster(node.id)}
                                        className={`w-full relative flex items-center justify-between py-2.5 px-3 rounded-md transition-all duration-200 text-[13px] ${
                                            isConverged
                                                ? 'text-text-primary font-medium bg-accent-blue/[0.02] border border-accent-blue/10'
                                                : 'text-text-muted/60 hover:text-text-primary border border-transparent hover:bg-card-hover/5'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3 relative z-10">
                                            <Icon
                                                size={15}
                                                className={`transition-all duration-300 ${
                                                    isConverged 
                                                        ? 'text-accent-blue drop-shadow-[0_0_4px_rgba(59,130,246,0.4)]' 
                                                        : 'text-text-muted/40 group-hover:text-text-secondary group-hover:translate-x-0.5'
                                                }`}
                                            />
                                            <span className="tracking-[0.15em] uppercase text-[11px]">{node.label}</span>
                                        </div>

                                        <span className={`text-[10px] tracking-wider relative z-10 font-mono transition-colors ${
                                            isConverged ? 'text-accent-blue/90 font-semibold' : 'text-text-muted/20 group-hover:text-text-muted/50'
                                        }`}>
                                            {node.matrixNode}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Live Model Telemetry Footer */}
                <div className="px-6 flex flex-col gap-4 flex-shrink-0">
                    {/* Linear Hyperparameter Tuning Stream */}
                    <div className="space-y-2 bg-card-hover/[0.02] border border-card-border/5 p-2.5 rounded-md">
                        <div className="flex justify-between text-[9px] uppercase tracking-[0.15em] text-text-muted/40 font-bold">
                            <span>Loss.Optimized</span>
                            <motion.span className="text-accent-blue/70">
                                {activeCluster.toUpperCase()}
                            </motion.span>
                        </div>
                        <div className="h-[2px] w-full bg-card-border/10 rounded-sm relative overflow-hidden">
                            <motion.div 
                                style={{ width: systemThroughput }} 
                                className="h-full bg-gradient-to-r from-accent-blue/30 via-accent-blue/70 to-accent-blue" 
                            />
                        </div>
                    </div>
                </div>
            </motion.aside>

            {/* FLOATING TENSOR CONTAINER (MOBILE GRAPH) */}
            <div className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-[420px] z-50">
                <div className="bg-bg-primary/[0.3] backdrop-blur-2xl border border-card-border/10 rounded-xl p-2 flex items-center justify-between shadow-[0_24px_50px_-20px_rgba(0,0,0,0.7)] relative overflow-hidden">
                    
                    {/* Frame Alignment Guides */}
                    <div className="absolute top-0 left-8 w-3 h-[1px] bg-accent-blue/40" />
                    <div className="absolute bottom-0 right-8 w-3 h-[1px] bg-accent-blue/40" />

                    {featureMap.map((node) => {
                        const Icon = node.icon;
                        const isConverged = activeCluster === node.id;
                        
                        return (
                            <button
                                key={node.id}
                                onClick={() => routeToCluster(node.id)}
                                className={`relative flex-1 flex flex-col items-center justify-center py-3 rounded-lg font-mono transition-all duration-300 ${
                                    isConverged ? 'text-accent-blue' : 'text-text-muted/50 hover:text-text-secondary'
                                }`}
                                aria-label={node.label}
                            >
                                {isConverged && (
                                    <motion.div
                                        layoutId="mobile-vector-dock-indicator"
                                        className="absolute inset-0 bg-accent-blue/[0.02] border border-accent-blue/10 rounded-lg shadow-inner"
                                        transition={{ type: "spring", stiffness: 420, damping: 28 }}
                                    />
                                )}
                                <Icon size={16} className={`transition-all duration-300 ${isConverged ? 'scale-110 drop-shadow-[0_0_6px_rgba(59,130,246,0.3)]' : ''}`} />
                                
                                {/* Weights activation node visual indicator */}
                                <div className={`w-1 h-1 rounded-sm mt-1.5 transition-all duration-500 scale-[0.7] ${
                                    isConverged ? 'bg-accent-blue opacity-100 shadow-[0_0_4px_rgba(59,130,246,0.8)]' : 'bg-transparent opacity-0'
                                }`} />
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
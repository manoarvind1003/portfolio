'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, ExternalLink, ArrowLeft, Search, X, Layers } from 'lucide-react';
import Link from 'next/link';
import { projects, ALL_CATEGORIES, CATEGORY_COLOR, type ProjectCategory } from '@/lib/projectsData';

/* ─── Category Badge ─────────────────────────────────────────────────────── */
function CategoryBadge({ category, selected, onClick }: {
    category: ProjectCategory;
    selected: boolean;
    onClick: () => void;
}) {
    const accent = CATEGORY_COLOR[category];
    const active = selected
        ? `bg-${accent}/20 border-${accent}/60 text-text-primary shadow-[0_0_16px_var(--app-${accent === 'accent-blue' ? 'accent-blue' : accent === 'accent-purple' ? 'accent-purple' : 'accent-gold'})/30]`
        : 'bg-card border-card-border text-text-muted hover:bg-card-hover hover:text-text-primary';

    return (
        <button
            onClick={onClick}
            className={`px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide transition-all duration-300 ${active}`}
        >
            {category}
        </button>
    );
}

/* ─── Project Card ───────────────────────────────────────────────────────── */
function ProjectCard({ project, idx }: { project: (typeof projects)[0]; idx: number }) {
    return (
        <motion.div
            layout
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            whileHover={{ y: -8 }}
            className={`glass-panel rounded-2xl overflow-hidden border border-card-border flex flex-col transition-all duration-300 cursor-pointer group/card ${project.glow}`}
        >
            {/* Card top gradient strip */}
            <div className={`w-full h-36 relative overflow-hidden bg-gradient-to-br ${project.gradient} transition-colors duration-500 flex-shrink-0`}>
                {/* Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Layers size={48} className="text-white/10" />
                </div>

                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 bg-black/60 backdrop-blur-sm transition-all duration-300">
                    <div className="flex gap-4">
                        {project.githubLink ? (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-3 bg-white/10 rounded-full hover:bg-accent-blue hover:text-white transition-colors duration-300 text-white"
                                aria-label="GitHub"
                            >
                                <GitBranch size={20} />
                            </a>
                        ) : (
                            <button className="p-3 bg-white/10 rounded-full text-white/40 cursor-not-allowed" disabled>
                                <GitBranch size={20} />
                            </button>
                        )}
                        {project.liveLink ? (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-3 bg-white/10 rounded-full hover:bg-accent-purple hover:text-white transition-colors duration-300 text-white"
                                aria-label="Live Demo"
                            >
                                <ExternalLink size={20} />
                            </a>
                        ) : (
                            <button className="p-3 bg-white/10 rounded-full text-white/40 cursor-not-allowed" disabled>
                                <ExternalLink size={20} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-accent-gold/20 border border-accent-gold/40 text-accent-gold">
                        Featured
                    </span>
                )}
            </div>

            {/* Card content */}
            <div className="p-5 flex flex-col flex-1 gap-3">
                <h3 className="text-base font-bold font-display text-text-primary">{project.title}</h3>
                <p className="text-xs text-text-muted font-light leading-relaxed flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-card-hover border border-card-border text-text-secondary font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function AllProjectsPage() {
    const [activeCategories, setActiveCategories] = useState<Set<ProjectCategory>>(new Set());
    const [search, setSearch] = useState('');

    const toggleCategory = (cat: ProjectCategory) => {
        setActiveCategories((prev) => {
            const next = new Set(prev);
            next.has(cat) ? next.delete(cat) : next.add(cat);
            return next;
        });
    };

    const clearFilters = () => {
        setActiveCategories(new Set());
        setSearch('');
    };

    const filtered = useMemo(() => {
        let list = projects;
        if (activeCategories.size > 0) {
            list = list.filter((p) => p.categories.some((c) => activeCategories.has(c)));
        }
        if (search.trim()) {
            const q = search.toLowerCase();
            list = list.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.tags.some((t) => t.toLowerCase().includes(q))
            );
        }
        return list;
    }, [activeCategories, search]);

    // Group by first (primary) category for display
    const grouped = useMemo(() => {
        const map = new Map<ProjectCategory, (typeof projects)[0][]>();
        filtered.forEach((p) => {
            const primary = p.categories[0];
            if (!map.has(primary)) map.set(primary, []);
            map.get(primary)!.push(p);
        });
        return map;
    }, [filtered]);

    const hasFilters = activeCategories.size > 0 || search.trim().length > 0;

    return (
        <main className="min-h-screen relative overflow-hidden bg-bg-primary transition-colors duration-500">
            {/* Ambient blobs */}
            <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[160px] pointer-events-none" />
            <div className="fixed bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">

                {/* ── Back button ─────────────────────────────────── */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-blue transition-colors mb-10 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                        Back to Portfolio
                    </Link>
                </motion.div>

                {/* ── Header ────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <span className="text-xs font-bold tracking-[0.2em] text-accent-blue uppercase mb-3 block">
                        All Projects
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-4">
                        Everything I&apos;ve <span className="text-gradient">Built</span>
                    </h1>
                    <p className="text-text-muted max-w-xl font-light">
                        Browse the full collection of data science, AI, and engineering projects — filtered by technology and domain.
                    </p>
                </motion.div>

                {/* ── Search ────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative mb-6 max-w-md"
                >
                    <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Search projects, tags…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-10 py-2.5 rounded-xl glass-panel border border-card-border text-sm text-text-primary placeholder:text-text-muted bg-transparent focus:outline-none focus:border-accent-blue/60 transition-colors"
                    />
                    {search && (
                        <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors">
                            <X size={14} />
                        </button>
                    )}
                </motion.div>

                {/* ── Filter chips ──────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex flex-wrap gap-2 mb-10 items-center"
                >
                    {ALL_CATEGORIES.map((cat) => (
                        <CategoryBadge
                            key={cat}
                            category={cat}
                            selected={activeCategories.has(cat)}
                            onClick={() => toggleCategory(cat)}
                        />
                    ))}
                    {hasFilters && (
                        <button
                            onClick={clearFilters}
                            className="px-4 py-1.5 rounded-full border border-card-border text-xs font-semibold text-text-muted hover:text-text-primary hover:border-text-muted transition-all duration-300 flex items-center gap-1.5"
                        >
                            <X size={11} />
                            Clear
                        </button>
                    )}
                    <span className="ml-auto text-xs text-text-muted font-medium">
                        {filtered.length} project{filtered.length !== 1 ? 's' : ''}
                    </span>
                </motion.div>

                {/* ── Content ───────────────────────────────────────── */}
                <AnimatePresence mode="wait">
                    {filtered.length === 0 ? (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-32 text-text-muted gap-3"
                        >
                            <Search size={36} className="opacity-30" />
                            <p className="text-sm">No projects match your filters.</p>
                            <button onClick={clearFilters} className="text-xs text-accent-blue underline underline-offset-2 hover:opacity-80 transition-opacity">
                                Clear filters
                            </button>
                        </motion.div>
                    ) : hasFilters ? (
                        /* ── Flat grid when filtering ── */
                        <motion.div
                            key="flat"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filtered.map((p, i) => (
                                <ProjectCard key={p.id} project={p} idx={i} />
                            ))}
                        </motion.div>
                    ) : (
                        /* ── Grouped by category ── */
                        <motion.div key="grouped" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            {[...grouped.entries()].map(([cat, catProjects], gi) => (
                                <motion.section
                                    key={cat}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: gi * 0.08 }}
                                    className="mb-14"
                                >
                                    {/* Category heading */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <span
                                            className={`w-2.5 h-2.5 rounded-full bg-${CATEGORY_COLOR[cat]} shadow-[0_0_10px_var(--app-${CATEGORY_COLOR[cat] === 'accent-blue' ? 'accent-blue' : CATEGORY_COLOR[cat] === 'accent-purple' ? 'accent-purple' : 'accent-gold'})]`}
                                        />
                                        <h2 className="text-lg font-display font-bold text-text-primary">{cat}</h2>
                                        <span className="text-xs text-text-muted ml-1">({catProjects.length})</span>
                                        <div className="flex-1 h-px bg-card-border ml-2" />
                                    </div>

                                    {/* Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {catProjects.map((p, i) => (
                                            <ProjectCard key={p.id} project={p} idx={i} />
                                        ))}
                                    </div>
                                </motion.section>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}

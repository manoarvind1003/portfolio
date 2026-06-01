'use client';

import { Moon, Sun, Download } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function TopActions() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed top-6 right-6 lg:top-8 lg:right-12 z-50 flex items-center gap-3">
            <a
                href="/MANO ARVIND RESUME.pdf"
                download
                className="px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium glass-panel border border-card-border hover:border-accent-blue/50 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] text-text-primary"
            >
                <Download size={16} />
                <span className="hidden sm:inline">Download Resume</span>
            </a>

            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-10 h-10 rounded-full flex items-center justify-center glass-panel border border-card-border hover:border-accent-blue/50 transition-all text-text-primary"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Sun size={18} className="text-accent-gold" /> : <Moon size={18} />}
            </button>
        </div>
    );
}

'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, GitBranch, Globe, Send, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted", formState);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-24 relative z-10 min-h-screen flex flex-col justify-center bg-bg-primary transition-colors duration-500 selection:bg-accent-blue/30">
            {/* Optimized Ambient Glow Blobs */}
            <div className="absolute top-[15%] right-[5%] w-[600px] h-[600px] bg-gradient-to-tr from-accent-blue/10 to-transparent rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-accent-purple/10 to-transparent rounded-full blur-[140px] pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Column: Content Info */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <span className="text-xs font-bold tracking-[0.3em] text-accent-purple uppercase mb-4 block opacity-90">
                            Get In Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-text-primary leading-[1.15]">
                            Let&apos;s <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-[length:200%_auto] animate-text-shimmer bg-clip-text text-transparent">Connect</span>
                        </h2>
                        <p className="text-text-muted mb-12 max-w-md text-base md:text-lg font-light leading-relaxed opacity-80">
                            Have a project in mind or want to collaborate? Feel free to reach out. I&apos;m currently open to new opportunities!
                        </p>

                        {/* Contact Info Items */}
                        <div className="space-y-8 mb-12">
                            <div className="flex items-center gap-5 group cursor-pointer">
                                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-text-secondary group-hover:text-accent-blue group-hover:border-accent-blue/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 border border-card-border/60 bg-card-hover/30 backdrop-blur-md flex-shrink-0">
                                    <Mail size={22} className="transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold mb-1">Email</p>
                                    <p className="text-text-primary font-medium tracking-wide transition-colors duration-300 group-hover:text-accent-blue">
                                        manoarvind27@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group cursor-pointer">
                                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-text-secondary group-hover:text-accent-purple group-hover:border-accent-purple/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 border border-card-border/60 bg-card-hover/30 backdrop-blur-md flex-shrink-0">
                                    <MapPin size={22} className="transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-semibold mb-1">Location</p>
                                    <p className="text-text-primary font-medium tracking-wide transition-colors duration-300 group-hover:text-accent-purple">
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-11 h-11 rounded-xl bg-card-hover/40 flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300 border border-card-border/50 hover:border-accent-blue relative overflow-hidden group">
                                <span className="absolute inset-0 bg-accent-blue scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-xl -z-10" />
                                <GitBranch size={18} className="relative z-10" />
                            </a>
                            <a href="#" className="w-11 h-11 rounded-xl bg-card-hover/40 flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300 border border-card-border/50 hover:border-[#0A66C2] relative overflow-hidden group">
                                <span className="absolute inset-0 bg-[#0A66C2] scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-xl -z-10" />
                                <Globe size={18} className="relative z-10" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Form Container */}
                    <motion.div
                        className="lg:col-span-7 relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    >
                        {/* Floating Illustration with fine-tuned positioning */}
                        <motion.div
                            className="absolute -right-6 -top-36 md:-top-44 w-[180px] md:w-[220px] h-[280px] z-20 pointer-events-none hidden md:block"
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <Image
                                src="/images/sitting.png"
                                alt="Working Character"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 25vw"
                                className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] filter contrast-[1.02]"
                            />
                        </motion.div>

                        {/* Form Card */}
                        <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 rounded-[2rem] border border-card-border/80 relative z-10 bg-card-hover/10 backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.2)] hover:border-card-border transition-all duration-500">
                            <div className="space-y-8">

                                {/* Name Input Wrapper */}
                                <div className="relative group">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your Name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-transparent border-b-2 border-card-border/60 py-4 px-1 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors duration-300 text-base"
                                    />
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300 group-focus-within:w-full" />
                                </div>

                                {/* Email Input Wrapper */}
                                <div className="relative group">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Your Email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-transparent border-b-2 border-card-border/60 py-4 px-1 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors duration-300 text-base"
                                    />
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300 group-focus-within:w-full" />
                                </div>

                                {/* Message Textarea Wrapper */}
                                <div className="relative group">
                                    <textarea
                                        required
                                        placeholder="Your Message"
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-transparent border-b-2 border-card-border/60 py-4 px-1 text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent-blue transition-colors duration-300 text-base resize-none min-h-[100px]"
                                    ></textarea>
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300 group-focus-within:w-full" />
                                </div>

                                {/* Modernized Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue bg-[length:200%_auto] hover:bg-right shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] focus:ring-2 focus:ring-accent-blue/50 focus:outline-none active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-2 group text-base mt-4"
                                >
                                    <span className="tracking-wide">
                                        {submitted ? 'Message Sent Successfully' : 'Send Message'}
                                    </span>
                                    {submitted ? (
                                        <span className="inline-block animate-bounce font-bold ml-1">✓</span>
                                    ) : (
                                        <Send size={16} className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 opacity-90" />
                                    )}
                                </button>

                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
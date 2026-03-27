import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaShieldAlt, FaEnvelope, FaTerminal, FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '/', label: 'SYS.HOME', icon: FaHome },
        { href: '/projects', label: 'OPERATIONS', icon: FaShieldAlt },
        { href: '/resume', label: 'LOGS.RESUME', icon: FaTerminal },
        { href: '/contact', label: 'COMMS', icon: FaEnvelope },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-cyber-900/90 backdrop-blur-md border-b text-primary-500 border-primary-500/50 shadow-[0_0_15px_rgba(0,212,255,0.2)]'
                : 'bg-cyber-900/50 backdrop-blur-sm text-primary-500 border-b border-transparent'
                } font-mono`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center group"
                    >
                        <div className="bg-transparent border-2 border-primary-500 text-primary-500 w-12 h-10 rounded flex items-center justify-center font-bold text-lg group-hover:bg-primary-500 group-hover:text-cyber-900 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.8)] transition-all">
                            SG_
                        </div>
                        <span className="ml-3 text-xl font-bold text-gray-200 hidden sm:block group-hover:text-primary-500 transition-colors">
                            <span className="text-primary-500">{"<"}</span>Sai Ganesh<span className="text-primary-500">{"/>"}</span>
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                                className="flex items-center gap-2 text-gray-400 hover:text-primary-500 hover:animate-pulse-glow font-medium transition-colors duration-200 relative group"
                            >
                                <item.icon className="text-sm" />
                                <span>{item.label}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full shadow-[0_0_8px_rgba(0,212,255,1)]"></span>
                            </motion.a>
                        ))}

                        {/* Dark Mode Toggle (Decorative Shield) */}
                        <DarkModeToggle />

                        {/* CTA Button */}
                        <motion.a
                            href="https://drive.google.com/file/d/1MxaJQRQJeqIcOanYjHil9VNkyBXmr7CX/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border border-primary-500 text-primary-500 px-4 py-2 hover:bg-primary-500 hover:text-cyber-900 transition-colors font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(0,212,255,0.3)] hover:shadow-[0_0_20px_rgba(0,212,255,0.8)]"
                        >
                            [ INIT_DL ]
                        </motion.a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-3">
                        <DarkModeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary-500 focus:outline-none hover:animate-pulse-glow"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isOpen ? 1 : 0,
                        height: isOpen ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden bg-cyber-900 border-t border-primary-500/30"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 text-gray-400 hover:text-primary-500 hover:bg-primary-500/10 px-3 py-2 border-l-2 border-transparent hover:border-primary-500 font-medium transition-all"
                            >
                                <item.icon />
                                <span>{item.label}</span>
                            </motion.a>
                        ))}

                        <motion.a
                            href="https://drive.google.com/file/d/1MxaJQRQJeqIcOanYjHil9VNkyBXmr7CX/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: navItems.length * 0.1 }}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 bg-primary-500/20 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-cyber-900 px-3 py-2 font-bold transition-all mx-3 mt-4"
                        >
                            <FaTerminal />
                            <span>EXEC_DOWNLOAD</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
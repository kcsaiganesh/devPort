import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaBriefcase, FaEnvelope, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa'
import DarkModeToggle from './DarkModeToggle'

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
        { href: '/', label: 'Home', icon: FaHome },
        { href: '/projects', label: 'Projects', icon: FaBriefcase },
        { href: '/resume', label: 'Resume', icon: FaFileAlt },
        { href: '/contact', label: 'Contact', icon: FaEnvelope },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700'
                : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center"
                    >
                        <div className="bg-primary-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                            SG
                        </div>
                        <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
                            Sai Ganesh
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
                                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative group"
                            >
                                <item.icon className="text-sm" />
                                <span>{item.label}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
                            </motion.a>
                        ))}

                        {/* Dark Mode Toggle */}
                        <DarkModeToggle />

                        {/* CTA Button */}
                        <motion.a
                            href="https://drive.google.com/file/d/14uMrcWh6-q9l4oLHL7BSOEXmzvB8KrW6/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors font-medium"
                        >
                            Download CV
                        </motion.a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-3">
                        <DarkModeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-gray-300 hover:text-primary-500 focus:outline-none"
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
                    className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
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
                                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md font-medium transition-colors"
                            >
                                <item.icon />
                                <span>{item.label}</span>
                            </motion.a>
                        ))}

                        <motion.a
                            href="https://drive.google.com/file/d/1im4uthZy9blsx8gZrKvCD-X32C2JfMP_/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: navItems.length * 0.1 }}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 bg-primary-500 text-white hover:bg-primary-600 px-3 py-2 rounded-md font-medium transition-colors mx-3 mt-4"
                        >
                            <FaFileAlt />
                            <span >Download CV</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    )
}

export default Navbar
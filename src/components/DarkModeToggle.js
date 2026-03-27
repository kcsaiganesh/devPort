import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';

const DarkModeToggle = () => {
    // We enforce dark mode in the cyberpunk theme, so this is now a decorative "Security Shield" status indicator.
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className={`
                relative p-2 rounded-full border-2 border-primary-500 text-primary-500
                bg-cyber-900 shadow-[0_0_10px_rgba(0,212,255,0.5)]
                flex items-center justify-center
            `}
            title="Secure Connection Active"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-primary-500 opacity-30 border-t-transparent"
            />
            <FaShieldAlt className="w-5 h-5 animate-pulse-glow" />
        </motion.div>
    );
};

export default DarkModeToggle;

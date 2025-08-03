import React from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
                relative p-2 rounded-full border-2 transition-all duration-300
                ${isDarkMode
                    ? 'bg-gray-800 border-yellow-400 text-yellow-400'
                    : 'bg-yellow-100 border-gray-600 text-gray-600'
                }
                hover:shadow-lg
            `}
            aria-label="Toggle dark mode"
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isDarkMode ? (
                    <FaSun className="w-5 h-5" />
                ) : (
                    <FaMoon className="w-5 h-5" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default DarkModeToggle;

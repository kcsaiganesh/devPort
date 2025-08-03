import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaShieldAlt,
    FaNetworkWired,
    FaTerminal,
    FaLock,
    FaBug,
    FaSearch,
    FaDatabase,
    FaEye,
    FaFlag
} from 'react-icons/fa';
import {
    SiPython,
    SiLinux,
    SiKalilinux,
    SiSplunk,
    SiWireshark
} from 'react-icons/si';

const CyberSecuritySkills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const cyberSkills = [
        // Network Security
        { name: "Wireshark", icon: SiWireshark, level: 85, category: "Network Analysis", color: "text-blue-500", x: 15, y: 20 },
        { name: "tcpdump", icon: FaTerminal, level: 80, category: "Packet Analysis", color: "text-green-500", x: 70, y: 15 },
        { name: "Nmap", icon: FaNetworkWired, level: 90, category: "Network Scanning", color: "text-red-500", x: 25, y: 60 },
        { name: "Burp Suite", icon: FaBug, level: 85, category: "Web App Security", color: "text-orange-500", x: 80, y: 45 },

        // Programming & Scripting
        { name: "Python", icon: SiPython, level: 90, category: "Security Scripting", color: "text-yellow-500", x: 45, y: 25 },
        { name: "Bash", icon: FaTerminal, level: 85, category: "Shell Scripting", color: "text-gray-600", x: 60, y: 70 },

        // Operating Systems
        { name: "Kali Linux", icon: SiKalilinux, level: 88, category: "Penetration Testing", color: "text-indigo-600", x: 35, y: 80 },
        { name: "Linux", icon: SiLinux, level: 85, category: "System Administration", color: "text-black", x: 75, y: 25 },

        // SIEM & Monitoring
        { name: "Splunk", icon: SiSplunk, level: 75, category: "SIEM", color: "text-green-600", x: 20, y: 45 },
        { name: "Chronicle", icon: FaSearch, level: 70, category: "Security Analytics", color: "text-blue-600", x: 85, y: 65 },

        // Database Security
        { name: "SQL", icon: FaDatabase, level: 85, category: "Database Security", color: "text-purple-600", x: 50, y: 50 },

        // Forensics & Analysis
        { name: "Forensics", icon: FaEye, level: 80, category: "Digital Forensics", color: "text-red-600", x: 30, y: 35 },
        { name: "Metasploit", icon: FaBug, level: 75, category: "Exploitation", color: "text-red-700", x: 65, y: 40 },

        // CTF & Challenges
        { name: "CTF Player", icon: FaFlag, level: 82, category: "Capture The Flag", color: "text-yellow-600", x: 40, y: 75 },
        { name: "Cryptography", icon: FaLock, level: 78, category: "Encryption", color: "text-purple-500", x: 55, y: 85 },

        // Security Tools
        { name: "OSINT", icon: FaSearch, level: 85, category: "Intelligence Gathering", color: "text-cyan-600", x: 10, y: 70 },
        { name: "Vulnerability Assessment", icon: FaShieldAlt, level: 88, category: "Security Testing", color: "text-red-500", x: 90, y: 35 },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const skillVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black relative overflow-hidden">
            {/* Matrix-like background effect */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-px bg-cyber-500 animate-matrix"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 20}s`,
                            height: '2px'
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-mono">
                        Cybersecurity <span className="text-cyber-400">Arsenal</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Specialized skills in cybersecurity, penetration testing, and digital forensics
                    </p>
                    <div className="mt-4 flex justify-center items-center gap-2">
                        <FaFlag className="text-cyber-400" />
                        <span className="text-cyber-400 font-mono">CTF Player | Security Enthusiast | Future Cyber Defender</span>
                    </div>
                </motion.div>

                {/* Scattered Skills */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="relative h-96 md:h-[500px] w-full"
                >
                    {cyberSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={skillVariants}
                            whileHover={{
                                scale: 1.2,
                                zIndex: 10,
                                transition: { duration: 0.2 }
                            }}
                            onHoverStart={() => setHoveredSkill(skill)}
                            onHoverEnd={() => setHoveredSkill(null)}
                            className="absolute cursor-pointer"
                            style={{
                                left: `${skill.x}%`,
                                top: `${skill.y}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            <div className={`
                                relative p-4 rounded-full bg-gray-800 border-2 border-gray-700
                                hover:border-cyber-400 hover:shadow-lg hover:shadow-cyber-400/50
                                transition-all duration-300 group
                                ${hoveredSkill === skill ? 'animate-glow' : ''}
                            `}>
                                <skill.icon
                                    className={`text-2xl ${skill.color} group-hover:text-cyber-400 transition-colors`}
                                />

                                {/* Skill level indicator */}
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyber-500 rounded-full flex items-center justify-center">
                                    <span className="text-xs text-white font-bold">
                                        {Math.floor(skill.level / 10)}
                                    </span>
                                </div>

                                {/* Tooltip */}
                                {hoveredSkill === skill && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20"
                                    >
                                        <div className="bg-gray-900 border border-cyber-400 rounded-lg p-3 shadow-xl min-w-48">
                                            <h4 className="text-white font-semibold">{skill.name}</h4>
                                            <p className="text-cyber-400 text-sm">{skill.category}</p>
                                            <div className="mt-2">
                                                <div className="flex justify-between text-xs text-gray-300 mb-1">
                                                    <span>Proficiency</span>
                                                    <span>{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-gray-700 rounded-full h-1">
                                                    <motion.div
                                                        className="bg-cyber-400 h-1 rounded-full"
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 0.8, delay: 0.2 }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Arrow */}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-cyber-400"></div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skill Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { icon: FaNetworkWired, title: "Network Security", count: 4 },
                        { icon: FaBug, title: "Penetration Testing", count: 5 },
                        { icon: FaEye, title: "Digital Forensics", count: 3 },
                        { icon: FaFlag, title: "CTF Competitions", count: 3 }
                    ].map((category, index) => (
                        <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyber-400 transition-colors">
                            <category.icon className="text-3xl text-cyber-400 mx-auto mb-3" />
                            <h4 className="text-white font-semibold mb-1">{category.title}</h4>
                            <p className="text-gray-300 text-sm">{category.count} Skills</p>
                        </div>
                    ))}
                </motion.div>

                {/* Career Focus Statement */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-cyber-900/80 to-cyber-800/80 rounded-2xl p-8 border border-cyber-500/30">
                        <FaShieldAlt className="text-4xl text-cyber-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Aspiring Cybersecurity Professional
                        </h3>
                        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Dedicated to building a career in cybersecurity with hands-on experience in
                            penetration testing, digital forensics, and threat analysis. Actively participating
                            in CTF competitions and continuously expanding knowledge in emerging security technologies.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CyberSecuritySkills;

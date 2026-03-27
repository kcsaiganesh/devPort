import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaShieldAlt,
    FaTerminal,
    FaBug,
    FaSearch,
    FaDatabase,
    FaEye,
    FaNetworkWired,
    FaLock,
    FaWindows
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

    // Filtered to emphasize Blue Team / SOC while including offensive (Red) basics.
    const cyberSkills = [
        // Blue Team / SOC
        { name: "Wazuh SIEM", icon: FaEye, level: 90, category: "Monitoring & Detection", team: "Blue", color: "text-primary-500", x: 20, y: 30 },
        { name: "Splunk", icon: SiSplunk, level: 85, category: "Log Analysis", team: "Blue", color: "text-primary-400", x: 65, y: 70 },
        { name: "MS Sentinel", icon: FaShieldAlt, level: 85, category: "Threat Hunting (KQL)", team: "Blue", color: "text-blue-500", x: 80, y: 25 },
        { name: "Incident Response", icon: FaSearch, level: 88, category: "Alert Triage", team: "Blue", color: "text-cyan-400", x: 45, y: 55 },
        
        // Red Team / Offensive
        { name: "Burp Suite", icon: FaBug, level: 80, category: "Web App Security", team: "Red", color: "text-accent", x: 30, y: 75 },
        { name: "Nmap / Network", icon: FaNetworkWired, level: 85, category: "Reconnaissance", team: "Red", color: "text-red-500", x: 85, y: 50 },
        { name: "Metasploit", icon: SiKalilinux, level: 75, category: "Exploitation", team: "Red", color: "text-red-600", x: 15, y: 50 },

        // Systems & Frameworks
        { name: "Linux Security", icon: SiLinux, level: 88, category: "OS Hardening", team: "Blue", color: "text-gray-400", x: 50, y: 20 },
        { name: "Windows Event Logs", icon: FaWindows, level: 90, category: "Endpoint Analysis", team: "Blue", color: "text-blue-400", x: 30, y: 15 },
        { name: "Python Scripting", icon: SiPython, level: 85, category: "Security Automation", team: "Neutral", color: "text-yellow-500", x: 60, y: 40 },
        { name: "MITRE ATT&CK", icon: FaLock, level: 90, category: "Cyber Framework", team: "Blue", color: "text-primary-300", x: 10, y: 80 },
        { name: "Bash / CLI", icon: FaTerminal, level: 85, category: "Shell Automation", team: "Neutral", color: "text-gray-300", x: 75, y: 85 },
        { name: "Wireshark", icon: SiWireshark, level: 80, category: "PCAP Analysis", team: "Blue", color: "text-blue-600", x: 55, y: 80 }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.1 }
        }
    };

    const skillVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 }
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-900 border-t border-primary-500/20 relative overflow-hidden">
            {/* Radar Sweep Effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="w-[800px] h-[800px] rounded-full border border-primary-500 relative">
                    <div className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent to-primary-500 origin-left animate-[spin_4s_linear_infinite]"></div>
                    <div className="absolute inset-0 rounded-full border border-primary-500/50 scale-75"></div>
                    <div className="absolute inset-0 rounded-full border border-primary-500/30 scale-50"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 tracking-wider">
                        <span className="text-primary-500">{"//"}</span> THREAT_INTELLIGENCE_MAP
                    </h2>
                    <p className="text-xl text-primary-400/80 max-w-3xl mx-auto font-sans">
                        Blue defense-oriented operations with offensive red tooling capabilities
                    </p>
                    <div className="mt-4 flex justify-center items-center gap-6">
                        <span className="text-primary-500 font-bold text-sm tracking-widest"><span className="inline-block w-3 h-3 bg-primary-500 rounded-full animate-pulse mr-2"></span>BLUE TEAM</span>
                        <span className="text-accent font-bold text-sm tracking-widest"><span className="inline-block w-3 h-3 bg-accent rounded-full animate-pulse mr-2"></span>RED TEAM</span>
                    </div>
                </motion.div>

                {/* Scattered Skills Map */}
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
                            whileHover={{ scale: 1.2, zIndex: 10, transition: { duration: 0.2 } }}
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
                                relative p-4 rounded bg-cyber-800 border-2 
                                ${skill.team === 'Red' ? 'border-accent/50 hover:border-accent hover:shadow-[0_0_15px_rgba(255,0,64,0.6)]' : 'border-primary-500/50 hover:border-primary-500 hover:shadow-[0_0_15px_rgba(0,212,255,0.6)]'}
                                transition-all duration-300 group
                                ${hoveredSkill === skill && skill.team === 'Red' ? 'animate-glow-red' : ''}
                                ${hoveredSkill === skill && skill.team !== 'Red' ? 'animate-glow' : ''}
                            `}>
                                <skill.icon className={`text-2xl ${skill.color} transition-colors`} />

                                <div className={`absolute -top-2 -right-2 w-5 h-5 ${skill.team === 'Red' ? 'bg-accent text-white' : 'bg-primary-500 text-cyber-900'} rounded-sm flex items-center justify-center border ${skill.team === 'Red' ? 'border-accent' : 'border-primary-500'}`}>
                                    <span className="text-[10px] font-bold">
                                        {Math.floor(skill.level / 10)}
                                    </span>
                                </div>

                                {hoveredSkill === skill && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-20"
                                    >
                                        <div className={`bg-cyber-900 border ${skill.team === 'Red' ? 'border-accent text-accent' : 'border-primary-500 text-primary-500'} p-3 shadow-xl min-w-48 whitespace-nowrap`}>
                                            <h4 className="font-bold uppercase tracking-wider text-gray-100">{skill.name}</h4>
                                            <p className="text-xs mb-2">{skill.category}</p>
                                            <div className="w-full bg-gray-800 h-1.5 rounded-sm overflow-hidden">
                                                <motion.div
                                                    className={`h-full ${skill.team === 'Red' ? 'bg-accent' : 'bg-primary-500'}`}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                            </div>
                                            <div className="text-right text-[10px] mt-1 text-gray-400">integrity: {skill.level}%</div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Cyber Focus Terminal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 max-w-3xl mx-auto"
                >
                    <div className="bg-cyber-800 border-l-4 border-primary-500 p-6 shadow-[0_0_15px_rgba(0,212,255,0.1)] relative">
                        <div className="absolute top-0 right-0 bg-primary-500 text-cyber-900 text-xs font-bold px-2 py-1">SYS.CONF</div>
                        <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
                            <FaTerminal className="text-primary-500" /> user_objective.sh
                        </h3>
                        <div className="font-sans text-sm text-gray-400 leading-relaxed space-y-2">
                            <p><span className="text-primary-500 font-mono">root@soc-analyst:~$</span> cat objective.txt</p>
                            <p className="pl-4 border-l-2 border-gray-600">
                                Seeking SOC Analyst L1/L2 role in Bengaluru for 24x7 security operations and incident response. 
                                Specializing in real-time threat hunting via SIEM platforms, incident triage, and applying the MITRE ATT&CK framework across enterprise endpoints. 
                                Proven ability in minimizing false positive margins and deploying robust FIM mechanisms.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CyberSecuritySkills;

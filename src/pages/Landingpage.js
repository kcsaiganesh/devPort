import React from 'react';
import { motion } from "framer-motion";
import { SiOwasp, SiWireshark, SiSplunk, SiKalilinux, SiPython } from 'react-icons/si';
import { FaShieldAlt, FaLinkedin, FaGithub, FaEnvelope, FaHackerrank,  FaDownload, FaCertificate, FaTerminal, FaBug } from 'react-icons/fa';
import CyberSecuritySkills from '../components/CyberSecuritySkills';
import ProfileImage from '../assets/saiGaneshProfile.jpg';

const Landingpage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="bg-cyber-900 min-h-screen text-gray-300 font-mono relative">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.05)_0%,rgba(10,14,23,1)_70%)]"></div>
                
                <div className="relative max-w-7xl mx-auto z-10 w-full mt-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="inline-block mb-4 px-3 py-1 border border-primary-500 text-primary-500 bg-primary-500/10 font-bold backdrop-blur">
                                <span className="animate-pulse">●</span> STATUS: ACTIVE _
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-100 mb-4 whitespace-nowrap">
                                SAI GANESH <span className="text-primary-500 glitch-text" data-text="KC">KC</span>
                            </h1>
                            <h2 className="text-2xl sm:text-3xl text-primary-400 mb-6 border-l-4 border-primary-500 pl-4 py-2 bg-gradient-to-r from-primary-500/10 to-transparent">
                                SOC Analyst L1
                            </h2>
                            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                                > Executing SIEM Operations... [OK]<br/>
                                > Initializing Incident Response... [OK]<br/>
                                > Monitoring Threat Detection Vectors...<br/><br/>
                                <span className="text-primary-300">"Defending networks, hunting threats, securing the perimeter."</span>
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <a
                                    href="https://drive.google.com/file/d/1MxaJQRQJeqIcOanYjHil9VNkyBXmr7CX/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-transparent border-2 border-primary-500 text-primary-500 px-8 py-3 hover:bg-primary-500 hover:text-cyber-900 transition-all font-bold tracking-wider shadow-[0_0_10px_rgba(0,212,255,0.3)] hover:shadow-[0_0_20px_rgba(0,212,255,0.8)] flex items-center gap-2 uppercase"
                                >
                                    <FaDownload /> [ DOWNLOAD_CV.exe ]
                                </a>
                            </div>

                            <div className="flex gap-6 mt-12">
                                <a href="https://linkedin.com/in/saiganesh" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors text-2xl hover:shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/kcsaiganesh" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-500 transition-colors text-2xl hover:shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                                    <FaGithub />
                                </a>
                                <a href="mailto:kcsaiganesh@gmail.com" className="text-gray-500 hover:text-primary-500 transition-colors text-2xl hover:shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                                    <FaEnvelope />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2 flex justify-center relative"
                        >
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                                <div className="absolute inset-0 rounded-full border-4 border-primary-500/30 animate-[spin_10s_linear_infinite]"></div>
                                <div className="absolute inset-2 rounded-full border-4 border-t-primary-500 border-r-transparent border-b-primary-500 border-l-transparent animate-[spin_5s_linear_infinite_reverse]"></div>
                                <div className="absolute inset-4 rounded-full border border-primary-500/50"></div>
                                <img
                                    alt="SAI GANESH KC"
                                    src={ProfileImage}
                                    className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 z-10 border-2 border-primary-500"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Competencies Matrix */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary-500/20 bg-cyber-900/80">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 tracking-wider">
                            <span className="text-primary-500">{"//"}</span> CORE_COMPETENCIES
                        </h2>
                        <div className="w-24 h-1 bg-primary-500 mx-auto shadow-[0_0_10px_rgba(0,212,255,0.8)]"></div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {[
                            { icon: SiSplunk, name: "SIEM Platforms", desc: "Wazuh, Sentinel, Splunk", color: "text-primary-500" },
                            { icon: FaShieldAlt, name: "Incident Response", desc: "Triage, Detect, Escalate", color: "text-primary-400" },
                            { icon: FaBug, name: "Vulnerability Assesmt", desc: "OWASP Top 10, Burp Suite", color: "text-accent" },
                            { icon: SiKalilinux, name: "Offensive Tools", desc: "Nmap, Metasploit", color: "text-accent" },
                            { icon: SiWireshark, name: "Network Analysis", desc: "Wireshark, PCAP", color: "text-primary-300" },
                            { icon: FaTerminal, name: "Frameworks", desc: "MITRE ATT&CK, NIST", color: "text-primary-500" },
                            { icon: SiPython, name: "Scripting / Query", desc: "Python, KQL, Bash", color: "text-yellow-500" },
                            { icon: SiOwasp, name: "Compliance", desc: "ISO 27001, PCI-DSS", color: "text-gray-400" }
                        ].map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group bg-cyber-800 border border-primary-500/20 p-6 hover:border-primary-500 transition-all hover:bg-primary-500/5 relative overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                            >
                                <div className="absolute top-0 right-0 p-2 opacity-10 text-4xl group-hover:opacity-20 transition-opacity">
                                    <skill.icon className={skill.color} />
                                </div>
                                <skill.icon className={`text-4xl ${skill.color} mb-4`} />
                                <h3 className="font-bold text-gray-100 mb-2">{skill.name}</h3>
                                <p className="text-sm text-gray-400">{skill.desc}</p>
                                <div className="mt-4 w-full h-1 bg-gray-800 overflow-hidden">
                                     <div className="h-full bg-primary-500 w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 shadow-[0_0_8px_rgba(0,212,255,1)]"></div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Custom Interactive Skills Map */}
            <CyberSecuritySkills />

            {/* Experience Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary-500/20 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 flex items-center justify-center gap-4"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 tracking-wider">
                            <span className="text-primary-500">{"//"}</span> OPERATIONAL_HISTORY
                        </h2>
                    </motion.div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary-500/50 before:to-transparent">
                        
                        {/* Current Role */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-cyber-900 bg-primary-500 text-cyber-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(0,212,255,0.8)] z-10">
                                <FaShieldAlt />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-primary-500 bg-cyber-800/80 shadow-[0_0_15px_rgba(0,212,255,0.1)] group-hover:border-primary-400 transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-xl text-primary-400">SOC Analyst L1</h3>
                                    <span className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 border border-primary-500/30">Sep 2025 - Present</span>
                                </div>
                                <div className="text-gray-300 font-semibold mb-4">@ Xpereos Technology, Bengaluru</div>
                                <ul className="text-sm text-gray-400 space-y-2 font-sans">
                                    <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">>&nbsp;</span><span>Continuously monitor 50+ endpoints using Wazuh SIEM; maintain alert queue and escalate incidents.</span></li>
                                    <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">>&nbsp;</span><span>Perform initial triage of 40+ security alerts daily across Windows/Linux logs.</span></li>
                                    <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">>&nbsp;</span><span>Deploy custom Wazuh rules targeting MITRE ATT&CK (T1078, T1053) & configured FIM.</span></li>
                                    <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">>&nbsp;</span><span>Conduct VAPT on internal web apps (OWASP Top 10); applied Windows hardening via GPO.</span></li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Past Roles */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-cyber-900 bg-gray-600 text-gray-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <FaTerminal />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-gray-700 bg-cyber-800/50 hover:border-gray-500 transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-xl text-gray-400">Frontend Developer Intern</h3>
                                    <span className="text-xs bg-gray-700/50 text-gray-400 px-2 py-1">Mar 2024 - Jun 2024</span>
                                </div>
                                <div className="text-gray-500 font-semibold mb-4">@ Tymtix Solutions LLP</div>
                                <p className="text-sm text-gray-500 font-sans">Developed responsive web pages using Next.js/Tailwind CSS. Improved real-time performance by 40% via seamless API integration and reduced load times by 25%.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Clearances / Certs section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary-500/20 bg-cyber-900/80">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4 tracking-wider">
                            <span className="text-primary-500">{"//"}</span> SECURITY_CLEARANCES
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Google Cybersecurity Professional", date: "2024", badge: "VALIDATED", color: "text-green-500", border: "border-green-500" },
                            { title: "Offensive Penetration Testing", date: "2024", badge: "VALIDATED", color: "text-accent", border: "border-accent" },
                            { title: "Microsoft SC-200", date: "Active", badge: "VALIDATED", color: "text-primary-500", border: "border-primary-500" },
                            { title: "CompTIA Security+", date: "In Progress", badge: "PENDING", color: "text-yellow-500", border: "border-yellow-500" }
                        ].map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`p-6 border ${cert.border}/30 bg-cyber-800 hover:${cert.border}/80 transition-colors relative flex flex-col items-center text-center shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-pointer hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]`}
                            >
                                <FaCertificate className={`text-4xl mb-4 ${cert.color}`} />
                                <h3 className="font-bold text-gray-200 mb-2 h-14 flex items-center justify-center">{cert.title}</h3>
                                <div className="mt-auto pt-4">
                                    <span className={`text-xs font-bold px-3 py-1 border ${cert.border} ${cert.color} bg-${cert.color}/10 tracking-widest`}>
                                        [{cert.badge}]
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landingpage;

import React from 'react';
import { motion } from 'framer-motion';
import { BiLogoGithub } from 'react-icons/bi';
import { FaTerminal, FaShieldAlt, FaBug, FaDatabase, FaWindows } from 'react-icons/fa';

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const cyberProjects = [
        {
            id: 1,
            title: "Wazuh SIEM Production Lab",
            type: "Blue Team",
            typeColor: "text-primary-500",
            borderColor: "border-primary-500",
            icon: FaShieldAlt,
            description: "Built an enterprise-grade Wazuh 4.x environment deploying agents across 10+ Windows/Linux endpoints. Developed custom detection rules for brute-force, privilege escalation, and persistence mechanisms.",
            features: [
                "Custom detection rules mapping to MITRE ATT&CK",
                "Integrated Grafana dashboard with MITRE coverage heatmap",
                "Configured File Integrity Monitoring (FIM)",
                "Log aggregation and parsing via Filebeat/Logstash"
            ],
            tech: ["Wazuh", "ELK Stack", "Grafana", "Linux VMs"],
            githubUrl: "https://github.com/kcsaiganesh"
        },
        {
            id: 2,
            title: "Web App Security Assessment",
            type: "Red Team",
            typeColor: "text-accent",
            borderColor: "border-accent",
            icon: FaBug,
            description: "Performed comprehensive VAPT using Burp Suite on DVWA and diverse CTF targets. Identified critical vulnerabilities and documented findings with remediation strategies.",
            features: [
                "Identified SQLi, XSS, CSRF, and IDOR vulnerabilities",
                "Documented findings using OWASP Top 10 mapping",
                "Calculated risk levels using CVSS v3.1 scoring",
                "Delivered professional-grade penetration testing reports"
            ],
            tech: ["Burp Suite", "OWASP ZAP", "Nmap", "Metasploit"],
            githubUrl: "https://github.com/kcsaiganesh"
        },
        {
            id: 3,
            title: "Microsoft Sentinel KQL Library",
            type: "Blue Team",
            typeColor: "text-primary-500",
            borderColor: "border-primary-500",
            icon: FaWindows,
            description: "Developed a robust library of 10+ Kusto Query Language (KQL) rules mapped to MITRE ATT&CK frameworks. Designed to detect anomalous behavior within Azure environments.",
            features: [
                "Brute-force detection identifying anomalous Event 4625 patterns",
                "Lateral movement tracking via Event 4624",
                "Persistence detection via Scheduled Tasks (Event 4698)",
                "DNS tunneling and volumetric anomaly detection queries"
            ],
            tech: ["Microsoft Sentinel", "KQL", "Azure AD"],
            githubUrl: "https://github.com/kcsaiganesh"
        }
    ];

    return (
        <div className="min-h-screen bg-cyber-900 text-gray-300 font-mono pt-20 pb-12 relative overflow-hidden">
            {/* Cyberpunk grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] z-0"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-l-4 border-primary-500 pl-6 py-2 bg-gradient-to-r from-primary-500/10 to-transparent mt-8"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-100 mb-2">
                        <span className="text-primary-500">{"//"}</span> OPERATIONS_LOG
                    </h1>
                    <p className="text-xl text-primary-400">
                        Classified project repository and threat simulations
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-2 gap-8"
                >
                    {cyberProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className={`bg-cyber-800 border-t-4 border-b border-l border-r ${project.borderColor} p-6 sm:p-8 hover:bg-cyber-800/80 transition-all group shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`flex items-center gap-3 ${project.typeColor}`}>
                                    <project.icon className="text-3xl" />
                                    <span className={`font-bold border ${project.borderColor} px-2 py-0.5 text-xs tracking-widest uppercase bg-black/30`}>
                                        [{project.type}]
                                    </span>
                                </div>
                                <FaTerminal className="text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <h2 className="text-2xl font-bold text-gray-100 mb-4">{project.title}</h2>
                            <p className="text-gray-400 mb-6 font-sans text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="text-primary-300 font-semibold mb-3 border-b border-primary-500/20 pb-1 inline-block">Execute Details:</h4>
                                <ul className="space-y-2">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400 font-sans">
                                            <span className={`${project.typeColor}`}>&gt;</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8 flex flex-wrap gap-2">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="text-xs text-gray-300 bg-gray-900 border border-gray-600 px-2 py-1 tracking-wider uppercase">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 border ${project.borderColor} ${project.typeColor} px-4 py-2 hover:bg-${project.borderColor.replace('border-', '')}/10 transition-colors font-bold text-sm uppercase tracking-wider`}
                            >
                                <BiLogoGithub size={18} />
                                View Source
                            </a>
                        </motion.div>
                    ))}

                    {/* Previous Dev Projects (Archived completely as requested to remove Sahaseva/Sivyathi) -> Instead, just showing a general Cyber badge */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-cyber-900 border-2 border-dashed border-gray-700 p-6 sm:p-8 flex flex-col justify-center items-center text-center opacity-70 hover:opacity-100 hover:border-primary-500 hover:text-primary-500 transition-all cursor-pointer"
                    >
                        <FaDatabase className="text-4xl text-gray-500 mb-4 group-hover:text-primary-500" />
                        <h2 className="text-xl font-bold text-gray-400 mb-2 group-hover:text-primary-400">ARCHIVE.dat</h2>
                        <p className="text-sm text-gray-500 mb-6 max-w-sm">
                            Access previous threat intelligence logs, penetration testing scripts, and network monitoring configurations.
                        </p>
                        <a href="https://github.com/kcsaiganesh" className="text-xs text-gray-400 border border-gray-600 px-3 py-1 hover:bg-gray-800 uppercase tracking-widest transition-colors">
                            Mount Drive
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;

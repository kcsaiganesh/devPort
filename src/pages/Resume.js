import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaUser, FaShieldAlt, FaBriefcase, FaCertificate, FaLanguage, FaAward, FaCode, FaWindows } from 'react-icons/fa';
import { SiKalilinux } from 'react-icons/si';
import Profile from '../assets/saiGaneshProfile.jpg';

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const technicalCompetencies = [
    { name: "SIEM Operations (Wazuh, Sentinel)", level: 90 },
    { name: "Incident Response & Triage", level: 85 },
    { name: "Log Analysis (Windows/Linux)", level: 88 },
    { name: "Vulnerability Assessment (VAPT)", level: 80 },
    { name: "MITRE ATT&CK Framework", level: 90 },
    { name: "KQL & Python Automation", level: 85 }
  ];

  return (
    <div className="min-h-screen bg-cyber-900 text-gray-300 font-mono pt-20 pb-12 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,212,255,0.02)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block border border-primary-500 bg-primary-500/10 px-6 py-2 mb-6 shadow-[0_0_10px_rgba(0,212,255,0.3)]">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 uppercase tracking-widest">
              PROFILE_<span className="text-primary-500">RESUME</span>
            </h1>
          </div>
          <p className="text-lg text-primary-400 max-w-3xl mx-auto tracking-wide">
            SOC Analyst L1 | Security Operations | Threat Hunting
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="https://drive.google.com/file/d/1MxaJQRQJeqIcOanYjHil9VNkyBXmr7CX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary-500 text-cyber-900 px-6 py-3 hover:bg-primary-400 transition-colors font-bold uppercase shadow-[0_0_15px_rgba(0,212,255,0.5)]">
              <FaDownload />
              Download_PDF
            </a>
            <a href="https://drive.google.com/file/d/1MxaJQRQJeqIcOanYjHil9VNkyBXmr7CX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent border border-primary-500 text-primary-500 px-6 py-3 hover:bg-primary-500/10 transition-colors font-bold uppercase">
              <FaEye />
              View_Access
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar / Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="lg:col-span-1 space-y-8"
          >
            {/* Identity Card */}
            <motion.div variants={itemVariants} className="bg-cyber-800 p-6 border-t-4 border-primary-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="text-center">
                <div className="relative inline-block border-2 border-primary-500 p-1 mb-4">
                  <img
                    src={Profile}
                    alt="Sai Ganesh KC"
                    className="w-32 h-32 object-cover grayscale opacity-80"
                  />
                  <div className="absolute inset-0 bg-primary-500/20 pointer-events-none mix-blend-overlay"></div>
                  <div className="absolute -bottom-3 -right-3 bg-cyber-900 border border-primary-500 text-primary-500 p-2">
                    <FaUser size={16} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-100 uppercase tracking-wider">Sai Ganesh KC</h2>
                <div className="text-primary-500 font-bold text-sm bg-primary-500/10 py-1 mt-2 mb-4 border border-primary-500/30">ID: SOC_L1_ANALYST</div>
                <div className="text-xs text-gray-400 text-left space-y-2 font-sans mt-4">
                  <div className="flex justify-between border-b border-gray-700 pb-1"><span className="font-bold text-gray-300">LOC:</span> Bengaluru, IN</div>
                  <div className="flex justify-between border-b border-gray-700 pb-1"><span className="font-bold text-gray-300">MAIL:</span> kcsaiganesh@gmail.com</div>
                  <div className="flex justify-between"><span className="font-bold text-gray-300">TEL:</span> +91 8310048387</div>
                </div>
              </div>
            </motion.div>

            {/* Tactical Skills */}
            <motion.div variants={itemVariants} className="bg-cyber-800 p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6 border-b border-primary-500/30 pb-2">
                <FaCode className="text-primary-500" />
                <h2 className="text-lg font-bold text-gray-100 uppercase tracking-widest">Sys_Skills</h2>
              </div>
              <div className="space-y-4">
                {technicalCompetencies.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">{skill.name}</span>
                      <span className="text-xs text-primary-500">{skill.level}%</span>
                    </div>
                    <div className="bg-cyber-900 border border-gray-700 h-2 w-full">
                      <div className="bg-primary-500 h-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Clearance & Lang */}
            <motion.div variants={itemVariants} className="bg-cyber-800 p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6 border-b border-primary-500/30 pb-2">
                <FaLanguage className="text-primary-500" />
                <h2 className="text-lg font-bold text-gray-100 uppercase tracking-widest">Linguistics</h2>
              </div>
              <ul className="text-sm font-sans space-y-2 text-gray-400">
                <li className="flex justify-between"><span className="text-primary-500 font-bold">EN</span> Fluent</li>
                <li className="flex justify-between"><span className="text-primary-500 font-bold">HI</span> Conversational</li>
                <li className="flex justify-between"><span className="text-primary-500 font-bold">KN</span> Native</li>
                <li className="flex justify-between"><span className="text-primary-500 font-bold">TE</span> Native</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Main Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="lg:col-span-2 space-y-8"
          >
            {/* Experience Block */}
            <motion.div variants={itemVariants} className="bg-cyber-800 border border-gray-700 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-8 border-b-2 border-primary-500 pb-2 inline-flex">
                <FaBriefcase className="text-2xl text-primary-500" />
                <h2 className="text-2xl font-bold text-gray-100 uppercase tracking-widest">Active_Duty</h2>
              </div>

              <div className="space-y-8">
                <div className="relative pl-6 border-l border-primary-500">
                  <span className="absolute -left-[5px] top-0 h-2 w-2 bg-primary-500 shadow-[0_0_10px_rgba(0,212,255,1)]"></span>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-primary-400 uppercase">SOC Analyst L1</h3>
                      <p className="text-gray-300 font-semibold font-sans">Xpereos Technology, Bengaluru</p>
                    </div>
                    <span className="bg-primary-500/10 border border-primary-500 text-primary-500 px-3 py-1 text-xs font-bold mt-2 md:mt-0 uppercase">
                      Sep 2025 - Present
                    </span>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-3 font-sans mt-4">
                    <li className="flex gap-2"><span className="text-primary-500">&gt;</span> <span className="flex-1"><strong>Real-time Monitoring:</strong> Continuously monitor 50+ endpoints using Wazuh SIEM; identify and classify security events; escalate to L2.</span></li>
                    <li className="flex gap-2"><span className="text-primary-500">&gt;</span> <span className="flex-1"><strong>Incident Triage:</strong> Triage 40+ security alerts daily analyzing Windows/Linux Event Logs; distinguish true positives.</span></li>
                    <li className="flex gap-2"><span className="text-primary-500">&gt;</span> <span className="flex-1"><strong>Threat Detection:</strong> Deploy 15+ custom Wazuh detection rules targeting MITRE ATT&CK (T1078, T1053); reduce false positives by 40%.</span></li>
                    <li className="flex gap-2"><span className="text-primary-500">&gt;</span> <span className="flex-1"><strong>Response & VAPT:</strong> Assist in phishing/malware IR. Conduct internal VAPT on web applications isolating OWASP Top 10 vulnerabilities.</span></li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l border-gray-600">
                  <span className="absolute -left-[5px] top-0 h-2 w-2 bg-gray-600"></span>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-300 uppercase">Frontend Developer Intern</h3>
                      <p className="text-gray-400 font-semibold font-sans">Tymtix Solutions LLP, Bengaluru</p>
                    </div>
                    <span className="border border-gray-600 text-gray-500 px-3 py-1 text-xs font-bold mt-2 md:mt-0 uppercase">
                      Mar 2024 - Jun 2024
                    </span>
                  </div>
                  <ul className="text-sm text-gray-500 space-y-2 font-sans mt-2">
                    <li className="flex gap-2"><span className="text-gray-600">&gt;</span> <span>Engineered responsive web applications utilizing Next.js and Tailwind CSS.</span></li>
                    <li className="flex gap-2"><span className="text-gray-600">&gt;</span> <span>Optimized real-time API integrations reducing latency and dropping load times by 25%.</span></li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l border-gray-600">
                  <span className="absolute -left-[5px] top-0 h-2 w-2 bg-gray-600"></span>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-300 uppercase">Marketing & Procurement Exec</h3>
                      <p className="text-gray-400 font-semibold font-sans">GRKMS Pvt Ltd, Bengaluru</p>
                    </div>
                    <span className="border border-gray-600 text-gray-500 px-3 py-1 text-xs font-bold mt-2 md:mt-0 uppercase">
                      Jan 2025 - Apr 2025
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certification Block */}
            <motion.div variants={itemVariants} className="bg-cyber-800 border border-gray-700 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-8 border-b-2 border-primary-500 pb-2 inline-flex">
                <FaCertificate className="text-2xl text-primary-500" />
                <h2 className="text-2xl font-bold text-gray-100 uppercase tracking-widest">Validations</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-green-500/30 bg-cyber-900 p-4 hover:border-green-500/80 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FaAward className="text-green-500 text-xl" />
                    <h3 className="font-bold text-sm uppercase text-gray-200">Google CyberSec Prof.</h3>
                  </div>
                  <p className="text-xs text-gray-500 font-sans mt-2">[Verified_2024]</p>
                </div>

                <div className="border border-accent/30 bg-cyber-900 p-4 hover:border-accent/80 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <SiKalilinux className="text-accent text-xl" />
                    <h3 className="font-bold text-sm uppercase text-gray-200">Offensive Pentesting</h3>
                  </div>
                  <p className="text-xs text-gray-500 font-sans mt-2">[Verified_2024]</p>
                </div>

                <div className="border border-blue-500/30 bg-cyber-900 p-4 hover:border-blue-500/80 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FaWindows className="text-blue-500 text-xl" />
                    <h3 className="font-bold text-sm uppercase text-gray-200">Microsoft SC-200</h3>
                  </div>
                  <p className="text-xs text-gray-500 font-sans mt-2">[Active_Credential]</p>
                </div>

                <div className="border border-yellow-500/30 bg-cyber-900 p-4 hover:border-yellow-500/80 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FaShieldAlt className="text-yellow-500 text-xl" />
                    <h3 className="font-bold text-sm uppercase text-gray-200">CompTIA Security+</h3>
                  </div>
                  <p className="text-xs text-gray-500 font-sans mt-2 animate-pulse">[Training_In_Progress]</p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="bg-cyber-800 border border-t-0 border-l-[4px] border-l-gray-500 border-r border-b border-gray-700 p-6">
              <h3 className="text-sm text-gray-400 uppercase tracking-widest mb-1">Academic Background</h3>
              <h4 className="text-lg font-bold text-gray-100">Bachelor of Computer Applications (BCA)</h4>
              <p className="text-primary-500 text-sm mb-2">Kuvempu First Grade College | Bangalore University</p>
              <div className="flex justify-between items-center text-xs font-sans text-gray-400">
                <span>Class of 2023</span>
                <span className="bg-gray-800 border border-gray-600 px-2 py-1">CGPA: 8.54</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

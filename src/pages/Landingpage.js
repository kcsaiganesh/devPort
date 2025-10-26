import React from 'react'
import SplitType from 'split-type'
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { animate, stagger } from 'motion';
import { SiOwasp, SiOpenbugbounty, SiWireshark } from 'react-icons/si';
import { SiBurpsuite } from "react-icons/si";
import { GrVulnerability } from 'react-icons/gr'
import { FaShieldAlt, FaLinkedin, FaEye, FaPython, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaCertificate } from 'react-icons/fa'
import CyberSecuritySkills from '../components/CyberSecuritySkills'
import ProfileImage from '../assets/saiGaneshProfile.jpg'

const Landingpage = () => {
    useEffect(() => {
        const heading1 = new SplitType('#heading1');
        const heading2 = new SplitType('#heading2');
        const paragarph = new SplitType('#para1');
        const heroElements = [...heading1.words, ...paragarph.lines, ...heading2.words];
        animate(heroElements, { y: [24, 0], opacity: [0, 1] }, { duration: 0.8, delay: stagger(0.08) });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
                {/* Clean Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/10 "></div>

                {/* Subtle Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100/30 dark:bg-primary-500/10 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-500/10 rounded-full filter blur-3xl"></div>
                </div>

                {/* Main Container */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8"
                        >
                            {/* Clean Profile Image */}
                            <div className="relative inline-block mb-8">
                                <img
                                    alt="SAI GANESH KC"
                                    src={ProfileImage}
                                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full shadow-xl border-4 border-white dark:border-gray-700 object-cover"

                                />
                            </div>

                            {/* Clean Typography */}
                            <h1 id='heading1' className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                                SAI GANESH <span className="text-primary-500">KC</span>
                            </h1>

                            <p id='para1' className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                                Cybersecurity Professional
                                <br />
                                <span className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300">Dedicated to mastering AppSec. Committed to protecting AI's potential. </span>
                            </p>
                        </motion.div>

                        {/* Clean Contact Info */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap justify-center gap-4 mb-8"
                        >
                            <motion.div variants={itemVariants} className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border dark:border-gray-600 hover:shadow-lg transition-shadow">
                                <FaEnvelope className='text-primary-500 dark:text-white' />
                                <span className="text-gray-700 dark:text-gray-200">kcsaiganesh@gmail.com</span>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border dark:border-gray-600 hover:shadow-lg transition-shadow">
                                <FaPhone className='text-primary-500 dark:text-white' />
                                <span className="text-gray-700 dark:text-gray-200">(+91) 8310048387</span>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border dark:border-gray-600 hover:shadow-lg transition-shadow">
                                <FaMapMarkerAlt className='text-primary-500 dark:text-white' />
                                <span className="text-gray-700 dark:text-gray-200">Bangalore, Karnataka, India</span>
                            </motion.div>
                        </motion.div>

                        {/* Clean Social Links */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-center gap-6 mb-12"
                        >
                            <motion.a
                                variants={itemVariants}
                                href="https://linkedin.com/in/saiganesh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                <FaLinkedin size={24} />
                            </motion.a>
                            <motion.a
                                variants={itemVariants}
                                href="https://github.com/kcsaiganesh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 dark:bg-gray-700 text-white p-3 rounded-full hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors shadow-lg"
                            >
                                <FaGithub size={24} />
                            </motion.a>
                            <motion.a
                                variants={itemVariants}
                                href="mailto:kcsaiganesh@gmail.com"
                                className="bg-primary-500 text-white p-3 rounded-full hover:bg-primary-600 transition-colors shadow-lg"
                            >
                                <FaEnvelope size={24} />
                            </motion.a>
                        </motion.div>

                        {/* Clean CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <a
                                href="https://drive.google.com/file/d/1BHBVKwzZNLx_jFTJ8iGiVlp6ZQKv_mc1/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg inline-flex items-center gap-2 mx-auto"
                            >
                                <FaDownload />
                                Download Resume
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cybersecurity Skills Section */}
            <CyberSecuritySkills />

            {/* Traditional Skills Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Cybersecurity Skills</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Application Security (AppSec) Engineering focused on vulnerability management, threat identification, and secure coding practices.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    >
                        {[
                            {
                                icon: SiOpenbugbounty,
                                name: "AppSec",
                                color: "text-black dark:text-white"
                            },
                            {
                                icon: FaEye,
                                name: "Security Audits",
                                color: "text-primary-500" // Reflects your 'primary-500' preference
                            },
                            {
                                icon: SiBurpsuite,
                                name: "Burp Suite",
                                color: "text-cyan-500"
                            },
                            {
                                icon: SiOwasp,
                                name: "OWASP Top 10",
                                color: "text-blue-600"
                            },
                            {
                                icon: FaPython,
                                name: "Python",
                                color: "text-yellow-500"
                            },
                            {
                                icon: SiWireshark,
                                name: "Wireshark",
                                color: "text-green-600"
                            },
                            {
                                icon: FaGithub,
                                name: "Git",
                                color: "text-gray-800 dark:text-gray-300"
                            },
                            {
                                icon: GrVulnerability,
                                name: "Vulnerability Mgmt",
                                color: "text-red-500"
                            }
                        ].map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border dark:border-gray-700"
                            >
                                <skill.icon className={`text-5xl ${skill.color} mx-auto mb-4`} />
                                <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 text-left max-w-3xl mx-auto">
                            Professional journey combining frontend development expertise with cybersecurity knowledge
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {/* Frontend Developer Experience */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border dark:border-gray-700"
                        >
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Frontend Developer Intern</h3>
                                    <p className="text-xl text-primary-500 dark:text-gray-300 italic font-semibold">Tymtix Solutions LLP, Bengaluru</p>
                                </div>
                                <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium">
                                    March 2024 - June 2024
                                </span>
                            </div>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-left">
                                <li>• Developed responsive web pages using Next.js and Tailwind CSS</li>
                                <li>• Integrated third-party libraries and APIs for enhanced functionality</li>
                                <li>• Engineered seamless API integration improving real-time performance by 40%</li>
                                <li>• Reduced page load times by 25%, significantly improving user engagement</li>
                                <li>• Demonstrated adaptability with new technologies and frameworks</li>
                            </ul>
                        </motion.div>

                        {/* Marketing Experience */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border dark:border-gray-700"
                        >
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Marketing & Procurement Executive</h3>
                                    <p className="text-xl text-primary-500 dark:text-gray-300 italic font-semibold">GRKMS Pvt Ltd, Bengaluru</p>
                                </div>
                                <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium">

                                    Jan 2025 - Apr 2025
                                </span>
                            </div>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-left">
                                <li>• Utilized advanced data mining techniques to identify high-potential leads</li>
                                <li>• Created tailored, impactful proposals based on detailed client needs analysis</li>
                                <li>• Designed and executed targeted email marketing campaigns</li>
                                <li>• Managed quotations and negotiations to secure favorable agreements</li>
                                <li>• Built and maintained strong client relationships through consistent engagement</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 p-8 rounded-xl shadow-lg text-center border dark:border-gray-600"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Bachelor of Computer Applications</h3>
                        <p className="text-xl text-primary-600 dark:text-gray-400 font-semibold mb-2">Kuvempu First Grade College, Bangalore</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">Feb 2020 - Aug 2023</p>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg inline-block border dark:border-gray-600">
                            <p className="text-lg text-gray-900 dark:text-white"><span className="font-semibold text-gray-900 dark:text-white">CGPA:</span > 8.54 - First Class Exemplary</p>
                            <p className="text-gray-700 dark:text-gray-200">Bangalore University, August 2023</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">Professional certifications and achievements</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border dark:border-gray-700"
                        >
                            <FaCertificate className="text-4xl text-primary-500 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Frontend Developer Internship</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">@Nextrive (3 Months)</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Certificate available upon request</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border dark:border-gray-700"
                        >
                            <FaShieldAlt className="text-4xl text-green-500 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Google Cybersecurity Professional</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">✅ Completed via Coursera</p>

                            {/* Credly Badge */}
                            <div className="flex flex-col items-center mb-4">
                                <div
                                    data-iframe-width="150"
                                    data-iframe-height="270"
                                    data-share-badge-id="1f55b2a7-b8df-4d38-a97c-dd4de19a2a5a"
                                    data-share-badge-host="https://www.credly.com"
                                    className="mb-3"
                                ></div>
                            </div>

                            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg border dark:border-gray-600">
                                <p className="text-sm text-gray-700 dark:text-gray-200">
                                    <strong>Credly Profile:</strong>
                                    <a
                                        href="https://www.credly.com/users/sai-ganesh-kc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-500 hover:text-primary-600 ml-1 underline"
                                    >
                                        View All Credentials
                                    </a>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landingpage

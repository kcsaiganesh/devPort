import React from 'react'
import { motion } from 'framer-motion'
import { BiLogoGithub } from 'react-icons/bi'
import { FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaCode } from 'react-icons/fa'
import { SiReact, SiMui, SiNodedotjs, SiExpress } from 'react-icons/si'
import Sivyathi from '../assets/sivy.png'
import Sahaseva from '../assets/sha.png'

const Projects = () => {
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
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    const projects = [
        {
            id: 1,
            title: "Sahaseva — The Community Sharing Economy Platform",
            period: "July 2025 - Dec 2025",
            description: "A comprehensive web application designed to facilitate resource and skill sharing within communities. The platform promotes collaboration, sustainability, and efficient utilization of available resources through user-friendly interfaces and robust backend infrastructure.",
            image: Sahaseva,
            technologies: [
                { name: "React", icon: SiReact, color: "text-blue-500" },
                { name: "Material UI", icon: SiMui, color: "text-blue-600" },
                { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
                { name: "Express", icon: SiExpress, color: "text-gray-700" }
            ],
            features: [
                "API response filtering for accurate information display",
                "User-friendly UI for profile creation and resource listing",
                "Robust backend API for user management and messaging",
                "Scalable database schema designed for community growth",
                "Real-time search and connection features"
            ],
            githubUrl: "https://github.com/kcsaiganesh/sahaseva",
            liveUrl: "#"
        },
        {
            id: 2,
            title: "Sivyathi — Tailoring Management System",
            period: "Previous Project",
            description: "An online tailoring management system that automates the traditional manual tailoring process. The system improves information management for customers and enables better decision-making for tailoring businesses.",
            image: Sivyathi,
            technologies: [
                { name: "React", icon: SiReact, color: "text-blue-500" },
                { name: "Tailwind CSS", icon: FaCode, color: "text-cyan-500" }
            ],
            features: [
                "Online customer registration and measurement submission",
                "Order status tracking for customers",
                "Cost estimation and quotation system",
                "Administrative dashboard for record management",
                "Data security and integrity features",
                "Paperless environment implementation"
            ],
            githubUrl: "https://github.com/kcsaiganesh/sivyathi",
            liveUrl: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        My <span className="text-primary-500">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 text-left max-w-3xl mx-auto">
                        Showcasing my journey in building innovative web applications with modern technologies
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-16"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border dark:border-gray-600"
                        >
                            <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                                {/* Project Image */}
                                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                {/* Project Details */}
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-primary-500 font-semibold mb-4">
                                        <FaCalendarAlt />
                                        <span>{project.period}</span>
                                    </div>

                                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                        {project.title}
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-left">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                            <FaCode />
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {project.technologies.map((tech, techIndex) => (
                                                <div
                                                    key={techIndex}
                                                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-full text-sm font-medium border dark:border-gray-600"
                                                >
                                                    <tech.icon className={`text-lg ${tech.color}`} />
                                                    <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Key Features */}
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features & Achievements</h4>
                                        <ul className="space-y-2">
                                            {project.features.slice(0, 3).map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-left">
                                                    <span className="text-primary-500 mt-1">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors font-semibold"
                                        >
                                            <BiLogoGithub size={20} />
                                            View Code
                                        </a>
                                        {project.liveUrl !== "#" && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold"
                                            >
                                                <FaExternalLinkAlt size={16} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Participation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Open Source Contributions</h2>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border dark:border-gray-600">
                        <div className="flex items-center gap-4 mb-4">
                            <FaUsers className="text-2xl text-primary-500" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Hacktoberfest 2023</h3>
                            <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                                October 2023
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-left">
                            Actively participated in Hacktoberfest 2023, contributing to open-source projects and collaborating with the global developer community.
                        </p>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li className="text-left">• Contributed to the "Rental-log" open-source project on GitHub</li>
                            <li className="text-left">• Developed and implemented login and registration functionalities</li>
                            <li className="text-left">• Collaborated with international developers on code improvements</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects

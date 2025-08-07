import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaUser, FaGraduationCap, FaBriefcase, FaCertificate, FaCode, FaLanguage, FaAward, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { BiLogoReact, BiLogoGithub, BiLogoNodejs, BiLogoTailwindCss, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';

const Resume = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const skills = [
    { name: "Next.js", icon: SiNextdotjs, level: 90 },
    { name: "React", icon: BiLogoReact, level: 85 },
    { name: "TypeScript", icon: BiLogoTypescript, level: 80 },
    { name: "JavaScript", icon: BiLogoJavascript, level: 90 },
    { name: "Tailwind CSS", icon: BiLogoTailwindCss, level: 85 },
    { name: "Node.js", icon: BiLogoNodejs, level: 75 },
    { name: "Git", icon: BiLogoGithub, level: 80 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-primary-500">Resume</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-left max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional journey, skills, and achievements in web development and cybersecurity.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold shadow-lg">
              <FaDownload />
              Download Resume
            </button>
            <button className="flex items-center gap-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors font-semibold shadow-lg">
              <FaEye />
              View Online
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Personal Info & Photo */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="lg:col-span-1"
          >
            {/* Profile Photo */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border dark:border-gray-600 mb-8">
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQGbY4ta_Y_qBg/profile-displayphoto-shrink_400_400/B56ZYP1O4aHoAs-/0/1744022335493?e=1756944000&v=beta&t=Ylk6yvb-wPgTxYAVdI4xTGAh_nsUHVRtvnWG1J1PjGc"
                    alt="Sai Ganesh KC"
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg border-4 border-primary-500"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white rounded-full p-2">
                    <FaUser size={16} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">Sai Ganesh KC</h2>
                <p className="text-primary-500 font-semibold">Full Stack Developer</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border dark:border-gray-600 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <FaUser className="text-2xl text-primary-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Info</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-lg text-primary-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-700 dark:text-gray-200">kcsaiganesh@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-lg text-primary-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-700 dark:text-gray-200">(+91) 8310048387</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-lg text-primary-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-700 dark:text-gray-200">Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border dark:border-gray-600">
              <div className="flex items-center gap-3 mb-6">
                <FaCode className="text-2xl text-primary-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="text-lg text-primary-500" />
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-primary-500 rounded-full h-2 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="lg:col-span-2 space-y-8"
          >
            {/* Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border dark:border-gray-600">
              <div className="flex items-center gap-3 mb-6">
                <FaBriefcase className="text-2xl text-primary-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
              </div>

              <div className="space-y-6">
                <motion.div variants={itemVariants} className="border-l-4 border-primary-500 pl-6">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend Developer Intern</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">Tymtix Solutions LLP, Bengaluru</p>
                    </div>
                    <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                      March 2024 - June 2024
                    </span>
                  </div>
                  <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-left">
                    <li>• Developed responsive web pages using Next.js and Tailwind CSS</li>
                    <li>• Integrated third-party libraries and APIs for enhanced functionality</li>
                    <li>• Improved real-time performance by 40% through seamless API integration</li>
                    <li>• Reduced page load times by 25%, significantly improving user engagement</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants} className="border-l-4 border-primary-500 pl-6">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Marketing & Procurement Executive</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">GRKMS Pvt Ltd, Bengaluru</p>
                    </div>
                    <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                      Jan 2025 - Apr 2025
                    </span>
                  </div>
                  <ul className="text-gray-700 dark:text-gray-200 space-y-1 text-left">
                    <li>• Utilized advanced data mining techniques to identify high-potential leads</li>
                    <li>• Created tailored, impactful proposals based on detailed client needs analysis</li>
                    <li>• Designed and executed targeted email marketing campaigns</li>
                    <li>• Built and maintained strong client relationships through consistent engagement</li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border dark:border-gray-600">
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="text-2xl text-primary-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
              </div>

              <motion.div variants={itemVariants} className="border-l-4 border-primary-500 pl-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Computer Applications</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">Kuvempu First Grade College, Bangalore</p>
                    <p className="text-gray-600 dark:text-gray-300">Bangalore University</p>
                  </div>
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                    Feb 2020 - Aug 2023
                  </span>
                </div>
                <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-lg mt-2">
                  <p className="text-primary-700 dark:text-primary-200 font-semibold">CGPA: 8.54 - First Class Exemplary</p>
                </div>
              </motion.div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border dark:border-gray-600">
              <div className="flex items-center gap-3 mb-6">
                <FaCertificate className="text-2xl text-primary-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
              </div>

              <div className="space-y-4">
                <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                  <FaAward className="text-2xl text-primary-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Frontend Developer Internship</h3>
                    <p className="text-gray-700 dark:text-gray-200">@Nextrive (3 Months)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Certificate available upon request</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                  <FaAward className="text-2xl text-green-500 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white">Google Cybersecurity Professional</h3>
                    <p className="text-gray-700 dark:text-gray-200">✅ Completed via Coursera</p>
                    <div className="mt-3">
                      <div
                        data-iframe-width="120"
                        data-iframe-height="180"
                        data-share-badge-id="1f55b2a7-b8df-4d38-a97c-dd4de19a2a5a"
                        data-share-badge-host="https://www.credly.com"
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      <a
                        href="https://www.credly.com/users/sai-ganesh-kc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 underline"
                      >
                        View on Credly
                      </a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border dark:border-gray-600">
              <div className="flex items-center gap-3 mb-6">
                <FaLanguage className="text-2xl text-primary-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Languages</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'English', level: 'Fluent' },
                  { name: 'Hindi', level: 'Native' },
                  { name: 'Kannada', level: 'Native' },
                  { name: 'Telugu', level: 'Conversational' }
                ].map((language, index) => (
                  <motion.div key={index} variants={itemVariants} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{language.name}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-200">{language.level}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

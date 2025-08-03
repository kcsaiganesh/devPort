import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLanguage } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const socialLinks = [
        {
            name: 'Twitter',
            url: 'https://twitter.com/sai_ganesh_KC/',
            icon: FaTwitter,
            color: 'bg-blue-500 hover:bg-blue-600'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/kcsaiganesh',
            icon: FaGithub,
            color: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kc-sai-g-b150aa201',
            icon: FaLinkedin,
            color: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            name: 'Email',
            url: 'mailto:kcsaiganesh@gmail.com',
            icon: FaEnvelope,
            color: 'bg-primary-500 hover:bg-primary-600'
        }
    ];

    const languages = [
        { name: 'English', level: 'Fluent' },
        { name: 'Hindi', level: 'Native' },
        { name: 'Kannada', level: 'Native' },
        { name: 'Telugu', level: 'Conversational' }
    ];

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'kcsaiganesh@gmail.com',
            href: 'mailto:kcsaiganesh@gmail.com'
        },
        {
            icon: FaPhone,
            label: 'Phone',
            value: '(+91) 8310048387',
            href: 'tel:+918310048387'
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: 'Bangalore, Karnataka, India',
            href: null
        }
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
                        Let's <span className="text-primary-500">Connect</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 text-left max-w-3xl mx-auto">
                        I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and innovation.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border dark:border-gray-600">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                                            <info.icon className="text-primary-500 text-xl" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-white">{info.label}</p>
                                            {info.href ? (
                                                <a href={info.href} className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border dark:border-gray-600">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <FaLanguage className="text-primary-500" />
                                Languages
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {languages.map((language, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border dark:border-gray-600">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{language.name}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{language.level}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border dark:border-gray-600">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={social.color + ' text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md text-center'}
                                    >
                                        <social.icon className="text-2xl mx-auto mb-2" />
                                        <span className="text-sm font-semibold">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border dark:border-gray-600">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Message subject"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Your message here..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors font-semibold"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
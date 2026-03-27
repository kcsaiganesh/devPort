import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTerminal } from 'react-icons/fa';

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
        alert('Transmission recorded. Target secured. Will establish comms shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/kcsaiganesh',
            icon: FaGithub,
            color: 'hover:text-white',
            border: 'hover:border-white'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/saiganesh',
            icon: FaLinkedin,
            color: 'hover:text-blue-500',
            border: 'hover:border-blue-500'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/sai_ganesh_KC/',
            icon: FaTwitter,
            color: 'hover:text-blue-400',
            border: 'hover:border-blue-400'
        }
    ];

    const contactInfo = [
        {
            icon: FaEnvelope,
            label: 'SECURE_MAIL',
            value: 'kcsaiganesh@gmail.com',
            href: 'mailto:kcsaiganesh@gmail.com'
        },
        {
            icon: FaPhone,
            label: 'COMMLINK',
            value: '(+91) 8310048387',
            href: 'tel:+918310048387'
        },
        {
            icon: FaMapMarkerAlt,
            label: 'COORDINATES',
            value: 'Bengaluru, Karnataka, IN',
            href: null
        }
    ];

    return (
        <div className="min-h-screen bg-cyber-900 text-gray-300 font-mono pt-20 pb-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 mt-8"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-100 mb-4 tracking-widest uppercase">
                        ESTABLISH_<span className="text-primary-500 glitch-text" data-text="LINK">LINK</span>
                    </h1>
                    <p className="text-xl text-primary-400/80 max-w-2xl mx-auto border-b border-primary-500/30 pb-4 inline-block">
                        Open for SOC Analyst roles. Transmit your query below.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    
                    {/* Console Info Block */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-cyber-800 border-2 border-primary-500/50 p-6 relative shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                            <div className="absolute top-0 right-0 p-1 border-b border-l border-primary-500/50 text-xs text-primary-500 bg-cyber-900">
                                NODE.01
                            </div>
                            <h2 className="text-xl font-bold text-gray-100 mb-6 flex items-center gap-2 uppercase tracking-wider">
                                <FaTerminal className="text-primary-500" /> Ping_Target
                            </h2>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex flex-col group">
                                        <div className="flex items-center gap-2 text-primary-500 mb-1">
                                            <span className="text-xs">&gt;</span>
                                            <span className="text-xs font-bold uppercase tracking-widest">{info.label}</span>
                                        </div>
                                        <div className="pl-4 border-l-2 border-gray-700 group-hover:border-primary-500 transition-colors">
                                            {info.href ? (
                                                <a href={info.href} className="text-gray-300 hover:text-white transition-colors">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-300">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-cyber-800 p-6 border border-gray-700 group hover:border-primary-500 transition-colors">
                            <h2 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-widest group-hover:text-primary-500 transition-colors">Net_Topology_Links</h2>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center w-12 h-12 border-2 border-gray-600 bg-cyber-900 text-gray-400 transition-all duration-300 ${social.border} ${social.color} hover:-translate-y-1 hover:shadow-lg`}
                                    >
                                        <social.icon className="text-xl" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Transmit Form Block */}
                    <div className="lg:col-span-3">
                        <div className="bg-cyber-800 border border-gray-700 p-8 shadow-xl relative">
                            {/* Decorative corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary-500"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary-500"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary-500"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary-500"></div>

                            <h2 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-2 uppercase tracking-wide">
                                <span className="text-primary-500">{"//"}</span> Msg_Payload
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-xs font-bold text-primary-500 uppercase tracking-widest">
                                            Entity_ID (Name) *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-3 bg-cyber-900 border border-gray-600 focus:border-primary-500 text-gray-100 outline-none transition-colors transition-border duration-300 focus:shadow-[0_0_10px_rgba(0,212,255,0.3)] font-sans"
                                            placeholder="Enter your designation"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-xs font-bold text-primary-500 uppercase tracking-widest">
                                            Return_Vector (Email) *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-3 bg-cyber-900 border border-gray-600 focus:border-primary-500 text-gray-100 outline-none transition-colors transition-border duration-300 focus:shadow-[0_0_10px_rgba(0,212,255,0.3)] font-sans"
                                            placeholder="Enter comms address"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="block text-xs font-bold text-primary-500 uppercase tracking-widest">
                                        Header (Subject) *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 bg-cyber-900 border border-gray-600 focus:border-primary-500 text-gray-100 outline-none transition-colors transition-border duration-300 focus:shadow-[0_0_10px_rgba(0,212,255,0.3)] font-sans"
                                        placeholder="Transmission parameters"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-xs font-bold text-primary-500 uppercase tracking-widest">
                                        Data (Message) *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full p-3 bg-cyber-900 border border-gray-600 focus:border-primary-500 text-gray-100 outline-none resize-none transition-colors transition-border duration-300 focus:shadow-[0_0_10px_rgba(0,212,255,0.3)] font-sans"
                                        placeholder="Encrypting payload... Begin typing."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-transparent border-2 border-primary-500 text-primary-500 py-4 font-bold uppercase tracking-widest hover:bg-primary-500 hover:text-cyber-900 transition-all hover:shadow-[0_0_15px_rgba(0,212,255,0.6)] cursor-pointer"
                                >
                                    [ EXECUTE_TRANSMISSION ]
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Youtube, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { systemImages } from '../assets/images';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/sh-nexus', icon: 'linkedin' },
    { name: 'WhatsApp Community', url: 'https://wa.me/923327366065', icon: 'whatsapp' },
    { name: 'Discord', url: '#', icon: 'discord' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Hackathon', path: '/hackathon' },
    { name: 'Team', path: '/team' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-secondary text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-10 left-10 w-48 h-48 bg-accent-blue/10 rounded-full blur-2xl"
        />
      </div>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={systemImages.logo1} 
                alt="SH Nexus Logo" 
                className="h-14 object-contain"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering the next generation through innovative AI education and hybrid learning methodologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>shnexus@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+92 332 7366065</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Will be revealed soon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} SH Nexus. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Media Icons Component
const SocialIcon = ({ icon }) => {
  const iconComponents = {
    linkedin: Linkedin,
    whatsapp: Phone, // Using Phone icon for WhatsApp
    discord: MessageCircle, // Using MessageCircle for Discord
  };

  const IconComponent = iconComponents[icon];
  return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
};

export default Footer;
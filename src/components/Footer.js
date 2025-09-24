import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'YouTube', url: '#', icon: 'youtube' },
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
    <footer className="bg-gradient-secondary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SH</span>
              </div>
              <span className="text-2xl font-bold text-white">Nexus</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering the next generation through innovative AI education and hybrid learning methodologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
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
                <span>info@shnexus.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Innovation Hub, Tech City</span>
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
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
  };

  const IconComponent = iconComponents[icon];
  return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
};

export default Footer;
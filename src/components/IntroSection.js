import React from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'Cutting-edge AI curriculum designed for the future of technology.'
    },
    {
      icon: '🎯',
      title: 'Personalized Learning',
      description: 'Adaptive learning paths tailored to your unique goals and pace.'
    },
    {
      icon: '🌐',
      title: 'Global Community',
      description: 'Connect with learners and experts from around the world.'
    },
    {
      icon: '💡',
      title: 'Practical Skills',
      description: 'Hands-on projects and real-world applications of AI concepts.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Welcome to <span className="gradient-text">SH Nexus</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing education through innovative AI-powered learning experiences. 
            Our hybrid methodology combines the best of traditional and modern teaching approaches 
            to create an unparalleled educational journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card p-8 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who are already building tomorrow's technology today.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
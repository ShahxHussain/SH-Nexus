import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Software Engineer at Google',
      image: '/api/placeholder/80/80',
      content: 'SH Nexus transformed my understanding of AI. The practical approach and expert guidance helped me land my dream job at Google.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Data Scientist at Microsoft',
      image: '/api/placeholder/80/80',
      content: 'The hybrid learning methodology is brilliant. I could learn at my own pace while getting real-time feedback from instructors.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'AI Researcher at Stanford',
      image: '/api/placeholder/80/80',
      content: 'Outstanding curriculum and community. The projects I built during the course directly contributed to my research publications.',
      rating: 5
    }
  ];

  const achievements = [
    { number: '500+', label: 'Graduates Placed', icon: '🎓' },
    { number: '95%', label: 'Job Placement Rate', icon: '💼' },
    { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
    { number: '50+', label: 'Industry Partners', icon: '🤝' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-neutral-dark mb-16">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-neutral-dark mb-6">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Hear from our successful graduates who are now leading the AI revolution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card p-8 text-center group"
              >
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Profile */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold text-neutral-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Take the first step towards your AI career and become part of our growing community of successful graduates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import React from 'react';
import { motion } from 'framer-motion';
import TeamSection from '../components/TeamSection';

const TeamPage = () => {
  const coFounders = [
    {
      name: 'Sarah Hassan',
      role: 'Co-Founder & CEO',
      bio: 'Former AI researcher at Google with 10+ years in machine learning and educational technology.',
      image: '/images/team/co-founders/sarah-hassan.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@shnexus.com',
      expertise: ['AI Strategy', 'EdTech', 'Leadership']
    },
    {
      name: 'Hassan Ahmed',
      role: 'Co-Founder & CTO',
      bio: 'Ex-Microsoft engineer specializing in scalable AI systems and educational platforms.',
      image: '/images/team/co-founders/hassan-ahmed.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'hassan@shnexus.com',
      expertise: ['System Architecture', 'AI Engineering', 'Product Development']
    }
  ];

  const leadAmbassadors = [
    {
      name: 'Dr. Emily Chen',
      role: 'Lead Ambassador - North America',
      bio: 'PhD in Computer Science from Stanford, leading AI education initiatives across universities.',
      image: '/images/team/lead-ambassadors/emily-chen.jpg',
      linkedin: '#',
      university: 'Stanford University',
      expertise: ['Academic Partnerships', 'Curriculum Development']
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Lead Ambassador - Europe',
      bio: 'Professor of AI Ethics at Oxford, championing responsible AI education globally.',
      image: '/images/team/lead-ambassadors/michael-rodriguez.jpg',
      linkedin: '#',
      university: 'Oxford University',
      expertise: ['AI Ethics', 'Research Collaboration']
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Lead Ambassador - Asia Pacific',
      bio: 'Former head of AI research at IIT Delhi, expanding AI education across Asia.',
      image: '/images/team/lead-ambassadors/priya-sharma.jpg',
      linkedin: '#',
      university: 'IIT Delhi',
      expertise: ['Research Leadership', 'Regional Expansion']
    }
  ];

  const universityAmbassadors = [
    { name: 'Alex Thompson', university: 'MIT', role: 'Student Ambassador', image: '/images/team/university-ambassadors/alex-thompson.jpg' },
    { name: 'Maria Gonzalez', university: 'Harvard', role: 'Student Ambassador', image: '/images/team/university-ambassadors/maria-gonzalez.jpg' },
    { name: 'David Kim', university: 'UC Berkeley', role: 'Student Ambassador', image: '/images/team/university-ambassadors/david-kim.jpg' },
    { name: 'Sophie Wilson', university: 'Cambridge', role: 'Student Ambassador', image: '/images/team/university-ambassadors/sophie-wilson.jpg' },
    { name: 'Raj Patel', university: 'IIT Bombay', role: 'Student Ambassador', image: '/images/team/university-ambassadors/raj-patel.jpg' },
    { name: 'Emma Johnson', university: 'ETH Zurich', role: 'Student Ambassador', image: '/images/team/university-ambassadors/emma-johnson.jpg' },
    { name: 'Carlos Silva', university: 'University of São Paulo', role: 'Student Ambassador', image: '/images/team/university-ambassadors/carlos-silva.jpg' },
    { name: 'Yuki Tanaka', university: 'University of Tokyo', role: 'Student Ambassador', image: '/images/team/university-ambassadors/yuki-tanaka.jpg' },
    { name: 'Lisa Anderson', university: 'Carnegie Mellon', role: 'Student Ambassador', image: '/images/team/university-ambassadors/lisa-anderson.jpg' },
    { name: 'Ahmed Hassan', university: 'American University of Cairo', role: 'Student Ambassador', image: '/images/team/university-ambassadors/ahmed-hassan.jpg' }
  ];

  const coreTeam = [
    {
      name: 'Dr. James Wilson',
      role: 'Head of Curriculum',
      bio: 'Former professor at Carnegie Mellon, designing world-class AI curricula.',
      image: '/images/team/core-team/james-wilson.jpg',
      expertise: ['Curriculum Design', 'AI Education']
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Student Success',
      bio: 'Educational psychologist ensuring optimal learning outcomes for all students.',
      image: '/images/team/core-team/lisa-thompson.jpg',
      expertise: ['Student Support', 'Learning Analytics']
    },
    {
      name: 'Robert Kim',
      role: 'Lead AI Engineer',
      bio: 'Building the next generation of AI-powered educational tools and platforms.',
      image: '/images/team/core-team/robert-kim.jpg',
      expertise: ['AI Development', 'Platform Engineering']
    },
    {
      name: 'Anna Kowalski',
      role: 'Head of Marketing',
      bio: 'Growth marketing expert with a passion for democratizing AI education.',
      image: '/images/team/core-team/anna-kowalski.jpg',
      expertise: ['Growth Marketing', 'Community Building']
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-accent-blue">Team</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Passionate educators, researchers, and innovators dedicated to transforming AI education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Co-Founders */}
      <TeamSection
        title="Co-Founders"
        subtitle="Visionary leaders driving the future of AI education"
        members={coFounders}
        type="founders"
      />

      {/* Lead Ambassadors */}
      <TeamSection
        title="Lead Ambassadors"
        subtitle="Academic leaders expanding our global reach"
        members={leadAmbassadors}
        type="ambassadors"
        bgColor="bg-white"
      />

      {/* University Ambassadors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              University <span className="gradient-text">Ambassadors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Student leaders representing SH Nexus at top universities worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {universityAmbassadors.map((ambassador, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card p-4 text-center group"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">
                    {ambassador.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-neutral-dark text-sm mb-1">
                  {ambassador.name}
                </h3>
                <p className="text-xs text-gray-600 mb-1">{ambassador.university}</p>
                <p className="text-xs text-primary-600 font-medium">{ambassador.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <TeamSection
        title="Core Team"
        subtitle="Dedicated professionals making AI education accessible to everyone"
        members={coreTeam}
        type="core"
        bgColor="bg-white"
      />

      {/* Join Team CTA */}
      <section className="py-16 bg-gradient-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Join Our Mission?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our team and help shape the future of AI education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300">
                Become an Ambassador
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
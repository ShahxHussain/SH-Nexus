import React from 'react';
import { motion } from 'framer-motion';
import TeamSection from '../components/TeamSection';
import { teamImages } from '../assets/images';


const TeamPage = () => {
  const coFounders = [
    {
      name: 'Syed Shah Hussain Badshah',
      role: 'Founder',
      bio: 'Specialized in AI, GenAI Engineering. Experienced in international hackathons with a strong focus on creating innovative and impactful tech solutions.',
      image: teamImages.coFounders.shahHussain, // Update with actual image when available
      linkedin: '#',
      twitter: '#',
      email: 'shahhussain19288@gmail.com',
      expertise: ['AI Strategy', 'AI Engineering', 'EdTech', 'Leadership']
    },
    {
      name: 'Soman Ahmad',
      role: 'Founder',
      bio: 'Ex-Microsoft engineer specializing in scalable AI systems and educational platforms.',
      image: teamImages.coFounders.somanAhmad,
      linkedin: '#',
      twitter: '#',
      email: 'somanahmad@shnexus.com',
      expertise: ['Software Engineer','Management Executive', 'Leadership']
    }
  ];

  const leadAmbassadors = [
    {
      name: 'Dr. Emily Chen',
      role: 'Lead Ambassador - North America',
      bio: 'PhD in Computer Science from Stanford, leading AI education initiatives across universities.',
      image: teamImages.leadAmbassadors.emilychen,
      linkedin: '#',
      university: 'Stanford University',
      expertise: ['Academic Partnerships', 'Curriculum Development']
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Lead Ambassador - Europe',
      bio: 'Professor of AI Ethics at Oxford, championing responsible AI education globally.',
      image: teamImages.leadAmbassadors.michaelRodriguez,
      linkedin: '#',
      university: 'Oxford University',
      expertise: ['AI Ethics', 'Research Collaboration']
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Lead Ambassador - Asia Pacific',
      bio: 'Former head of AI research at IIT Delhi, expanding AI education across Asia.',
      image: teamImages.leadAmbassadors.priyaSharma,
      linkedin: '#',
      university: 'IIT Delhi',
      expertise: ['Research Leadership', 'Regional Expansion']
    }
  ];

  const universityAmbassadors = [
    { name: 'Alex Thompson', university: 'MIT', role: 'Student Ambassador', image: teamImages.universityAmbassadors.alexThompson },
    { name: 'Maria Gonzalez', university: 'Harvard', role: 'Student Ambassador', image: teamImages.universityAmbassadors.mariaGonzalez },
    { name: 'David Kim', university: 'UC Berkeley', role: 'Student Ambassador', image: teamImages.universityAmbassadors.davidKim },
    { name: 'Sophie Wilson', university: 'Cambridge', role: 'Student Ambassador', image: teamImages.universityAmbassadors.sophieWilson },
    { name: 'Raj Patel', university: 'IIT Bombay', role: 'Student Ambassador', image: teamImages.universityAmbassadors.rajPatel },
    { name: 'Emma Johnson', university: 'ETH Zurich', role: 'Student Ambassador', image: teamImages.universityAmbassadors.emmaJohnson },
    { name: 'Carlos Silva', university: 'University of São Paulo', role: 'Student Ambassador', image: teamImages.universityAmbassadors.carlosSilva },
    { name: 'Yuki Tanaka', university: 'University of Tokyo', role: 'Student Ambassador', image: teamImages.universityAmbassadors.yukiTanaka },
    { name: 'Lisa Anderson', university: 'Carnegie Mellon', role: 'Student Ambassador', image: teamImages.universityAmbassadors.lisaAnderson },
    { name: 'Ahmed Hassan', university: 'American University of Cairo', role: 'Student Ambassador', image: teamImages.universityAmbassadors.ahmedHassan }
  ];

  const coreTeam = [
    {
      name: 'Dr. James Wilson',
      role: 'Head of Curriculum',
      bio: 'Former professor at Carnegie Mellon, designing world-class AI curricula.',
      image: teamImages.coreTeam.jamesWilson,
      expertise: ['Curriculum Design', 'AI Education']
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Student Success',
      bio: 'Educational psychologist ensuring optimal learning outcomes for all students.',
      image: teamImages.coreTeam.lisaThompson,
      expertise: ['Student Support', 'Learning Analytics']
    },
    {
      name: 'Robert Kim',
      role: 'Lead AI Engineer',
      bio: 'Building the next generation of AI-powered educational tools and platforms.',
      image: teamImages.coreTeam.robertKim,
      expertise: ['AI Development', 'Platform Engineering']
    },
    {
      name: 'Anna Kowalski',
      role: 'Head of Marketing',
      bio: 'Growth marketing expert with a passion for democratizing AI education.',
      image: teamImages.coreTeam.annaKowalski,
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
        title="Founders"
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
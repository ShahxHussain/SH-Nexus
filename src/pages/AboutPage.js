import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    const values = [
        {
            icon: '🎯',
            title: 'Excellence',
            description: 'We strive for the highest quality in everything we do, from curriculum design to student support.'
        },
        {
            icon: '🌍',
            title: 'Accessibility',
            description: 'Making world-class AI education accessible to learners from all backgrounds and locations.'
        },
        {
            icon: '🚀',
            title: 'Innovation',
            description: 'Continuously pushing the boundaries of educational technology and learning methodologies.'
        },
        {
            icon: '🤝',
            title: 'Community',
            description: 'Building a supportive global community of learners, educators, and AI enthusiasts.'
        }
    ];

    const methodology = [
        {
            step: '01',
            title: 'Interactive Learning',
            description: 'Hands-on projects and real-world applications that make complex concepts tangible and engaging.',
            features: ['Live coding sessions', 'Interactive simulations', 'Peer collaboration']
        },
        {
            step: '02',
            title: 'Personalized Paths',
            description: 'AI-powered adaptive learning that adjusts to your pace, learning style, and career goals.',
            features: ['Custom learning tracks', 'Skill assessments', 'Progress analytics']
        },
        {
            step: '03',
            title: 'Expert Mentorship',
            description: 'Direct access to industry experts and researchers who guide your learning journey.',
            features: ['1-on-1 mentoring', 'Office hours', 'Career guidance']
        },
        {
            step: '04',
            title: 'Community Support',
            description: 'Learn alongside peers in a collaborative environment that encourages growth and innovation.',
            features: ['Study groups', 'Project collaboration', 'Networking events']
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
                            About <span className="text-accent-blue">SH Nexus</span>
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                            Pioneering the future of AI education through innovation, accessibility, and excellence
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                                Our <span className="gradient-text">Mission</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                To democratize artificial intelligence education by providing world-class, accessible,
                                and practical learning experiences that empower individuals to shape the future of technology.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We believe that AI education should be more than just theoretical knowledge.
                                Our mission is to bridge the gap between academic concepts and real-world applications,
                                ensuring every learner gains the skills and confidence needed to excel in the AI-driven world.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                                <div className="text-6xl mb-4">🎯</div>
                                <h3 className="text-2xl font-bold mb-4">Empowering Tomorrow's Innovators</h3>
                                <p className="text-lg opacity-90">
                                    Every day, we work towards creating a world where AI knowledge is accessible to everyone,
                                    regardless of their background or location.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 relative"
                        >
                            <div className="bg-gradient-secondary rounded-2xl p-8 text-white">
                                <div className="text-6xl mb-4">🌟</div>
                                <h3 className="text-2xl font-bold mb-4">Building the AI-Powered Future</h3>
                                <p className="text-lg opacity-90">
                                    We envision a future where AI literacy is as fundamental as traditional literacy,
                                    enabling everyone to participate in and benefit from technological advancement.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                                Our <span className="gradient-text">Vision</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                                To become the global leader in AI education, creating a world where artificial intelligence
                                is understood, accessible, and ethically applied by everyone.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We see a future where our graduates are not just consumers of AI technology,
                                but creators, innovators, and ethical leaders who use AI to solve humanity's greatest challenges.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do at SH Nexus
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
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
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-dark mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hybrid Learning Methodology */}
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
                            Hybrid Learning <span className="gradient-text">Methodology</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our innovative approach combines the best of traditional and modern education
                        </p>
                    </motion.div>

                    <div className="space-y-12">
                        {methodology.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                            >
                                <div className="flex-1">
                                    <div className="flex items-center mb-4">
                                        <span className="text-4xl font-bold gradient-text mr-4">
                                            {method.step}
                                        </span>
                                        <h3 className="text-2xl font-bold text-neutral-dark">
                                            {method.title}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        {method.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {method.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-gray-600">
                                                <span className="text-green-500 mr-3">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex-1">
                                    <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
                                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-3xl">
                                                {index === 0 ? '💻' : index === 1 ? '🎯' : index === 2 ? '👨‍🏫' : '🤝'}
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-bold mb-2">{method.title}</h4>
                                        <p className="opacity-90">Step {method.step} of our methodology</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-secondary text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Be Part of Our Story?
                        </h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Join thousands of learners who are already building the future with AI.
                            Your journey starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                                Start Learning Today
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
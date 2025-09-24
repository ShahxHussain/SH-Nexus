import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Trophy, Code, Zap, Target, Gift, MapPin, Video, Lock } from 'lucide-react';

const HackathonPage = () => {
    const hackathonDetails = {
        title: 'AI Fusion Hackathon 2025',
        subtitle: 'Build the Future with AI',
        date: 'March 15-17, 2025',
        duration: '3 Days',
        format: 'Virtual Event',
        participants: 'Course Graduates Only',
        prizes: 'TBD Prize Pool',
        theme: 'Real-World AI Solutions'
    };

    const timeline = [
        {
            day: 'Day 1',
            date: 'March 15',
            events: [
                { time: '9:00 AM', event: 'Opening Ceremony & Welcome', type: 'ceremony' },
                { time: '10:00 AM', event: 'Problem Statement Reveal', type: 'announcement' },
                { time: '11:00 AM', event: 'Team Formation & Networking', type: 'networking' },
                { time: '12:00 PM', event: 'Hacking Begins!', type: 'coding' },
                { time: '6:00 PM', event: 'Mentor Check-in Session', type: 'mentoring' },
                { time: '8:00 PM', event: 'Day 1 Wrap-up', type: 'wrap' }
            ]
        },
        {
            day: 'Day 2',
            date: 'March 16',
            events: [
                { time: '9:00 AM', event: 'Morning Standup', type: 'standup' },
                { time: '10:00 AM', event: 'Continuous Development', type: 'coding' },
                { time: '2:00 PM', event: 'Mid-point Presentations', type: 'presentation' },
                { time: '4:00 PM', event: 'Expert Workshop: Advanced AI Techniques', type: 'workshop' },
                { time: '6:00 PM', event: 'Mentor Office Hours', type: 'mentoring' },
                { time: '8:00 PM', event: 'Networking & Social Hour', type: 'networking' }
            ]
        },
        {
            day: 'Day 3',
            date: 'March 17',
            events: [
                { time: '9:00 AM', event: 'Final Sprint Begins', type: 'coding' },
                { time: '2:00 PM', event: 'Code Freeze & Submission', type: 'submission' },
                { time: '3:00 PM', event: 'Team Presentations', type: 'presentation' },
                { time: '5:00 PM', event: 'Judging & Deliberation', type: 'judging' },
                { time: '6:00 PM', event: 'Awards Ceremony', type: 'ceremony' },
                { time: '7:00 PM', event: 'Closing & Networking', type: 'networking' }
            ]
        }
    ];

    const prizes = [
        {
            place: '1st Place',
            prize: 'TBD',
            perks: ['Winner Certificate', 'LinkedIn Shoutout', 'Mentorship Session'],
            icon: Trophy,
            color: 'text-yellow-500'
        },
        {
            place: '2nd Place',
            prize: 'TBD',
            perks: ['Runner-up Certificate', 'LinkedIn Shoutout', 'Mentorship Session'],
            icon: Trophy,
            color: 'text-gray-400'
        },
        {
            place: '3rd Place',
            prize: 'TBD',
            perks: ['2nd Runner-up Certificate', 'LinkedIn Shoutout'],
            icon: Trophy,
            color: 'text-amber-600'
        }
    ];

    const judges = [
        {
            name: 'Syed Shah Hussain',
            role: 'Lead Instructor & AI Engineer',
            company: 'SH Nexus',
            expertise: 'GenAI, LLMs, LangChain'
        },
        {
            name: 'Dr. Sarah Chen',
            role: 'AI Research Scientist',
            company: 'Tech Innovation Labs',
            expertise: 'Machine Learning, Computer Vision'
        },
        {
            name: 'Alex Rodriguez',
            role: 'Senior AI Product Manager',
            company: 'AI Startup Accelerator',
            expertise: 'Product Strategy, AI Implementation'
        }
    ];

    const requirements = [
        'Must be a graduate of AI Fusion: Learn, Build, Apply course',
        'Teams of 1-3 members (individual participation allowed)',
        'Solution must incorporate AI/ML, GenAI technologies',
        'Code must be original and developed during the hackathon',
        'Final submission includes working demo and presentation'
    ];

    const getEventIcon = (type) => {
        switch (type) {
            case 'ceremony': return Trophy;
            case 'coding': return Code;
            case 'presentation': return Target;
            case 'workshop': return Zap;
            case 'mentoring': return Users;
            case 'networking': return Users;
            default: return Clock;
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50 relative">
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
                            {hackathonDetails.title}
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 mb-8">
                            {hackathonDetails.subtitle}
                        </p>

                        {/* Key Details */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            <div className="text-center">
                                <Calendar className="w-8 h-8 mx-auto mb-2 text-accent-blue" />
                                <div className="font-semibold">{hackathonDetails.date}</div>
                                <div className="text-sm opacity-80">{hackathonDetails.duration}</div>
                            </div>
                            <div className="text-center">
                                <Video className="w-8 h-8 mx-auto mb-2 text-accent-purple" />
                                <div className="font-semibold">{hackathonDetails.format}</div>
                                <div className="text-sm opacity-80">Online Platform</div>
                            </div>
                            <div className="text-center">
                                <Users className="w-8 h-8 mx-auto mb-2 text-accent-blue" />
                                <div className="font-semibold">Exclusive</div>
                                <div className="text-sm opacity-80">{hackathonDetails.participants}</div>
                            </div>
                            <div className="text-center">
                                <Trophy className="w-8 h-8 mx-auto mb-2 text-accent-purple" />
                                <div className="font-semibold">{hackathonDetails.prizes}</div>
                                <div className="text-sm opacity-80">Prize Pool</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                            About the <span className="gradient-text">Hackathon</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            The AI Fusion Hackathon is the culminating event of our course, where graduates showcase
                            their skills by building innovative AI solutions to real-world problems. This intensive
                            3-day virtual event brings together the brightest minds from our community to collaborate,
                            innovate, and compete for exciting prizes.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Code className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Build & Create</h3>
                                <p className="text-gray-600">Develop innovative AI solutions using cutting-edge technologies</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
                                <p className="text-gray-600">Work with talented peers and learn from industry experts</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Trophy className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Compete & Win</h3>
                                <p className="text-gray-600">Showcase your skills and compete for amazing prizes</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                            Event <span className="gradient-text">Timeline</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Three days of intensive coding, learning, and innovation
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        {timeline.map((day, dayIndex) => (
                            <motion.div
                                key={dayIndex}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className="bg-gradient-primary text-white p-6">
                                        <h3 className="text-2xl font-bold">{day.day}</h3>
                                        <p className="text-lg opacity-90">{day.date}</p>
                                    </div>
                                    <div className="p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {day.events.map((event, eventIndex) => {
                                                const EventIcon = getEventIcon(event.type);
                                                return (
                                                    <div key={eventIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                                        <EventIcon className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                                                        <div>
                                                            <div className="font-semibold text-sm text-primary-600">{event.time}</div>
                                                            <div className="text-sm text-gray-700">{event.event}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prizes */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                            Prizes & <span className="gradient-text">Recognition</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Compete for exciting prizes and recognition in the AI community
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {prizes.map((prize, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="card p-8 text-center"
                            >
                                <prize.icon className={`w-16 h-16 ${prize.color} mx-auto mb-4`} />
                                <h3 className="text-2xl font-bold text-neutral-dark mb-2">{prize.place}</h3>
                                <div className="text-3xl font-bold gradient-text mb-4">{prize.prize}</div>
                                <ul className="space-y-2">
                                    {prize.perks.map((perk, perkIndex) => (
                                        <li key={perkIndex} className="text-gray-600 flex items-center justify-center">
                                            <Gift className="w-4 h-4 text-green-500 mr-2" />
                                            {perk}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Judges */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                            Meet the <span className="gradient-text">Judges</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Industry experts who will evaluate your innovative solutions
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {judges.map((judge, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="card p-6 text-center"
                            >
                                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">
                                        {judge.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-neutral-dark mb-1">{judge.name}</h3>
                                <p className="text-primary-600 font-semibold mb-1">{judge.role}</p>
                                <p className="text-gray-600 text-sm mb-3">{judge.company}</p>
                                <p className="text-sm text-gray-500">{judge.expertise}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-8 text-center">
                            Participation <span className="gradient-text">Requirements</span>
                        </h2>

                        <div className="bg-gray-50 rounded-xl p-8">
                            <ul className="space-y-4">
                                {requirements.map((requirement, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <span className="text-gray-700">{requirement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
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
                            Ready to Join the Hackathon?
                        </h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Complete the AI Fusion course to secure your spot in this exclusive hackathon event.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScWm4sACvrF8vMqNnlJPdSyeXzjfpzBtsPJFOtv-DXB7DD3jA/viewform?usp=sharing&ouid=100596094018211637574"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                            >
                                Enroll in Course
                            </a>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Locked Overlay */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-8 md:p-12 text-center max-w-md mx-6 shadow-2xl"
                >
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lock className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">
                        Coming Soon!
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        The hackathon details will be revealed to course graduates. 
                        Complete the AI Fusion course to unlock access to this exclusive event.
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScWm4sACvrF8vMqNnlJPdSyeXzjfpzBtsPJFOtv-DXB7DD3jA/viewform?usp=sharing&ouid=100596094018211637574"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-block"
                    >
                        Enroll in Course
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default HackathonPage;
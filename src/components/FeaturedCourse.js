import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, User, Star } from 'lucide-react';

const FeaturedCourse = () => {
  const featuredCourse = {
    title: 'AI Fusion: Learn, Build, Apply',
    subtitle: 'GENAI · LLMS · LANGCHAIN FRAMEWORK MASTERY',
    description: 'HYBRID LEARNING STRUCTURE',
    duration: '30 DAYS',
    schedule: 'Monday – Friday | 2 Hours Session',
    format: 'Online Classes',
    level: 'Basics to Advanced',
    instructor: 'Syed Shah Hussain',
    instructorTitle: 'AI – Software Engineer',
    instructorAchievements: [
      '2024 – NASA Honorable Mention',
      '5x Int\'l AI Hackathons Winner'
    ],
    students: 'N/A',
    rating: 4.9,
    status: 'Launched',
    mentored: [
      'AI, GenAI Basics to Advance',
      'LLMs & NLP Understandings',
      'LangChain Framework Mastery',
      'Weekly Projects',
      'Guidance on Applying Concepts in Real-World Projects'
    ],
    selfPaced: [
      'Python',
      'ML Basics',
      'Visualization Libraries',
      'Basic Research Papers Study',
      'Exposure to New Things'
    ],
    image: '/api/placeholder/600/400'
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Featured <span className="gradient-text">Program</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive deep into our most popular course and start your AI journey today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Course Image */}
              <div className="relative h-64 lg:h-full bg-gradient-primary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <h3 className="text-2xl font-bold">AI Fusion</h3>
                    <p className="text-white/80">Interactive Learning</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredCourse.status}
                  </span>
                </div>
              </div>

              {/* Course Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-neutral-dark mb-2">
                  {featuredCourse.title}
                </h3>
                <p className="text-lg font-semibold gradient-text mb-4">
                  {featuredCourse.subtitle}
                </p>
                <p className="text-gray-600 mb-6 font-medium">
                  {featuredCourse.description}
                </p>

                {/* Course Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="font-medium">{featuredCourse.format}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="font-medium">{featuredCourse.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="font-medium">Course Duration: {featuredCourse.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Instructor Info */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-dark mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    INSTRUCTOR
                  </h4>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h5 className="font-bold text-primary-700">{featuredCourse.instructor}</h5>
                    <p className="text-primary-600 text-sm mb-2">{featuredCourse.instructorTitle}</p>
                    {featuredCourse.instructorAchievements.map((achievement, index) => (
                      <p key={index} className="text-sm text-gray-600">• {achievement}</p>
                    ))}
                  </div>
                </div>

                {/* Learning Structure */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Mentored Live Sessions */}
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-3 text-green-600">
                      MENTORED LIVE SESSIONS
                    </h4>
                    <div className="space-y-2">
                      {featuredCourse.mentored.map((item, index) => (
                        <div key={index} className="flex items-start text-sm text-gray-600">
                          <span className="text-green-500 mr-2 mt-0.5">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Self Paced Content */}
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-3 text-blue-600">
                      SELF PACED ROADMAP + PROVIDED CONTENT
                    </h4>
                    <div className="space-y-2">
                      {featuredCourse.selfPaced.map((item, index) => (
                        <div key={index} className="flex items-start text-sm text-gray-600">
                          <span className="text-blue-500 mr-2 mt-0.5">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(featuredCourse.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-neutral-dark mr-2">{featuredCourse.rating}</span>
                  <span className="text-gray-500">({featuredCourse.students} students enrolled)</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScWm4sACvrF8vMqNnlJPdSyeXzjfpzBtsPJFOtv-DXB7DD3jA/viewform?usp=sharing&ouid=100596094018211637574"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center"
                  >
                    Enroll Now
                  </a>
                  <Link to="/courses" className="btn-secondary flex-1 text-center">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
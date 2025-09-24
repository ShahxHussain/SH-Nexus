import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';

const CoursesPage = () => {
  const [filter, setFilter] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'AI Fusion: Learn, Build, Apply',
      description: 'What you\'ll learn: GenAI • LLMs • LangChain Framework Mastery',
      duration: '12 weeks',
      level: 'Beginner',
      instructor: 'Dr. Sarah Chen',
      students: 1250,
      rating: 4.9,
      status: 'Launched',
      price: '$7',
      image: '/api/placeholder/400/250',
      tags: ['GenAI', 'LLMs', 'LangChain']
    },
    {
      id: 2,
      title: 'React Course',
      description: 'Build modern, interactive web applications with React.js and master component-based development.',
      duration: '10 weeks',
      level: 'Intermediate',
      instructor: 'Prof. Michael Zhang',
      students: null,
      rating: null,
      status: 'Coming Soon',
      price: 'TBD',
      image: '/api/placeholder/400/250',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 3,
      title: 'Node.js Backend',
      description: 'Master server-side development with Node.js, Express, and database integration.',
      duration: '12 weeks',
      level: 'Intermediate',
      instructor: 'Dr. Emily Rodriguez',
      students: null,
      rating: null,
      status: 'Coming Soon',
      price: 'TBD',
      image: '/api/placeholder/400/250',
      tags: ['Node.js', 'Express', 'Backend']
    },
    {
      id: 4,
      title: 'Basic AI and ML',
      description: 'Introduction to artificial intelligence and machine learning fundamentals for beginners.',
      duration: '8 weeks',
      level: 'Beginner',
      instructor: 'Dr. James Wilson',
      students: null,
      rating: null,
      status: 'Coming Soon',
      price: 'TBD',
      image: '/api/placeholder/400/250',
      tags: ['AI', 'Machine Learning', 'Python']
    },
    {
      id: 5,
      title: 'Game Development C# and Unity',
      description: 'Create engaging games using C# programming and Unity game engine from scratch to deployment.',
      duration: '14 weeks',
      level: 'Intermediate',
      instructor: 'Dr. Lisa Thompson',
      students: null,
      rating: null,
      status: 'Coming Soon',
      price: 'TBD',
      image: '/api/placeholder/400/250',
      tags: ['C#', 'Unity', 'Game Development']
    },
    {
      id: 6,
      title: 'Mobile Development Flutter',
      description: 'Build cross-platform mobile applications for iOS and Android using Flutter and Dart.',
      duration: '12 weeks',
      level: 'Intermediate',
      instructor: 'Dr. Alex Kumar',
      students: null,
      rating: null,
      status: 'Coming Soon',
      price: 'TBD',
      image: '/api/placeholder/400/250',
      tags: ['Flutter', 'Dart', 'Mobile Development']
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Courses' },
    { value: 'launched', label: 'Available Now' },
    { value: 'coming-soon', label: 'Coming Soon' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const filteredCourses = courses.filter(course => {
    if (filter === 'all') return true;
    if (filter === 'launched') return course.status === 'Launched';
    if (filter === 'coming-soon') return course.status === 'Coming Soon';
    if (filter === 'beginner') return course.level === 'Beginner';
    if (filter === 'intermediate') return course.level === 'Intermediate';
    if (filter === 'advanced') return course.level === 'Advanced';
    return true;
  });

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
              Our <span className="text-accent-blue">Courses</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Comprehensive AI education designed to take you from beginner to expert
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === option.value
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-neutral-dark mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more courses.</p>
            </motion.div>
          )}
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
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're constantly adding new courses. Get notified when new courses launch or request a custom curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Request Course
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300">
                Get Notified
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
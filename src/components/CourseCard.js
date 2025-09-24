import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Eye, MessageCircle, Gamepad2, Briefcase, Brain, Star } from 'lucide-react';

const CourseCard = ({ course }) => {
  const {
    title,
    description,
    duration,
    level,
    instructor,
    students,
    rating,
    status,
    price,
    tags
  } = course;

  const isLaunched = status === 'Launched';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="card-premium overflow-hidden h-full flex flex-col glow-effect"
    >
      {/* Course Image */}
      <div className="relative h-48 bg-gradient-primary overflow-hidden">
        <motion.div 
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.div 
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                transition: { duration: 0.6 }
              }}
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl group-hover:shadow-white/20 transition-all duration-500"
            >
              {tags.includes('GenAI') || tags.includes('AI') ? <Bot className="w-10 h-10 text-white" /> :
               tags.includes('Computer Vision') ? <Eye className="w-10 h-10 text-white" /> :
               tags.includes('NLP') ? <MessageCircle className="w-10 h-10 text-white" /> :
               tags.includes('Unity') || tags.includes('Game Development') ? <Gamepad2 className="w-10 h-10 text-white" /> :
               tags.includes('Business') ? <Briefcase className="w-10 h-10 text-white" /> :
               <Brain className="w-10 h-10 text-white" />}
            </motion.div>
            <div className="text-sm opacity-90 font-medium">Interactive Learning</div>
          </div>
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            isLaunched 
              ? 'bg-green-500 text-white' 
              : 'bg-yellow-500 text-white'
          }`}>
            {status}
          </span>
        </div>

        {/* Level Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
            {level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-neutral-dark mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
          {description}
        </p>

        {/* Course Details */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Duration:</span>
            <span className="font-medium text-neutral-dark">{duration}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Instructor:</span>
            <span className="font-medium text-neutral-dark">{instructor}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Students:</span>
            <span className="font-medium text-neutral-dark">
              {isLaunched ? students.toLocaleString() : 'N/A'}
            </span>
          </div>
          
          <div className="flex justify-between text-sm items-center">
            <span className="text-gray-500">Rating:</span>
            <div className="flex items-center">
              {isLaunched ? (
                <>
                  <div className="flex mr-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="font-medium text-neutral-dark text-sm">{rating}</span>
                </>
              ) : (
                <span className="font-medium text-neutral-dark text-sm">N/A</span>
              )}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-primary-50 text-primary-600 px-2 py-1 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            {price}
          </div>
          
          {isLaunched ? (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScWm4sACvrF8vMqNnlJPdSyeXzjfpzBtsPJFOtv-DXB7DD3jA/viewform?usp=sharing&ouid=100596094018211637574"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              Enroll Now
            </a>
          ) : (
            <button
              className="bg-gray-200 text-gray-500 cursor-not-allowed px-6 py-2 rounded-lg font-semibold transition-all duration-300"
              disabled
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
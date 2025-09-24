import React from 'react';
import { motion } from 'framer-motion';

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
      whileHover={{ y: -5 }}
      className="card overflow-hidden h-full flex flex-col"
    >
      {/* Course Image */}
      <div className="relative h-48 bg-gradient-primary">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">
                {tags.includes('AI') ? '🤖' : 
                 tags.includes('Computer Vision') ? '👁️' : 
                 tags.includes('NLP') ? '💬' : 
                 tags.includes('Robotics') ? '🦾' : 
                 tags.includes('Business') ? '💼' : '🧠'}
              </span>
            </div>
            <div className="text-sm opacity-80">Interactive Learning</div>
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
                  <div className="flex text-yellow-400 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ⭐
                      </span>
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
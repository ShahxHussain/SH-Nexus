import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"
        ></motion.div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className={`absolute w-2 h-2 bg-white/40 rounded-full blur-sm`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block"
              >
                Empowering the
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block bg-gradient-to-r from-accent-blue via-white to-accent-purple bg-clip-text text-transparent relative"
              >
                Future of Tech
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join SH Nexus and unlock your potential with comprehensive tech education,
            mentored internships, and professional IT software development services.
            From AI to full-stack development - we're building tomorrow's tech leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/courses" className="btn-primary text-lg px-10 py-5 shadow-2xl shadow-primary-500/30">
                <span className="relative z-10">Explore Programs</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about" className="btn-glass text-lg px-10 py-5">
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16"
          >
            <div className="flex justify-center items-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-blue">50+</div>
                <div className="text-sm">Early Adopters</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-purple">3+</div>
                <div className="text-sm">Programs</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-blue">100%</div>
                <div className="text-sm">Innovation Focus</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
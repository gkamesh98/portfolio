import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload, FaCode, FaServer, FaCloud } from 'react-icons/fa';

const HomePage = () => {
  // Animated background particles
  const renderParticles = () => {
    return [...Array(50)].map((_, i) => {
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 5;
      
      return (
        <motion.div
          key={i}
          className="absolute bg-white/20 rounded-full"
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: "easeInOut"
          }}
        />
      );
    });
  };

  // Skill Icons Animation
  const SkillIcon = ({ icon: Icon, color, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: delay 
      }}
      whileHover={{ 
        scale: 1.2,
        rotate: 360
      }}
      className={`text-${color} mx-2`}
    >
      <Icon size={40} />
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Particle Background */}
      <div className="absolute inset-0 z-0">
        {renderParticles()}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        {/* Name with Typing Effect */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm Kamesh Gullapalli
        </motion.h1>

        {/* Subtitle with Staggered Animation */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl mb-8"
        >
          Senior Software Developer | Building scalable solutions
        </motion.p>

        {/* Skills Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center mb-8 space-x-4"
        >
          <SkillIcon icon={FaCode} color="green-500" delay={0.7} />
          <SkillIcon icon={FaServer} color="blue-500" delay={0.8} />
          <SkillIcon icon={FaCloud} color="purple-500" delay={0.9} />
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a 
            href="/kamesh_gullapalli(resume).pdf" 
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all"
          >
            <FaFileDownload /> Download Resume
          </motion.a>

          <motion.a 
            href="https://linkedin.com/in/gullapalli-kamesh-7565a0181/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all"
          >
            <FaLinkedin /> LinkedIn
          </motion.a>

          <motion.a 
            href="https://github.com/gkamesh98"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all"
          >
            <FaGithub /> GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white flex items-center justify-center"
    >
      <div className="text-center relative">
        {/* Particle Background Effect */}
        <motion.div 
          className="absolute inset-0 z-0 overflow-hidden"
          initial={{ opacity: 0.3 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            transition: { 
              repeat: Infinity, 
              duration: 3 
            }
          }}
        >
          {[...Array(50)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute bg-white/30 rounded-full"
              style={{
                width: `${Math.random() * 5}px`,
                height: `${Math.random() * 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                transition: { 
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 relative z-10"
        >
          Hi, I'm Kamesh Gullapalli
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl mb-8 relative z-10"
        >
          Senior Software Developer | Building scalable solutions with React, Node.js, and Cloud Technologies
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-4 relative z-10"
        >
          <motion.a 
            href="/kamesh_gullapalli(resume).pdf" 
            download
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2"
          >
            <FaFileDownload /> Download Resume
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/gullapalli-kamesh-7565a0181/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-blue-400"
          >
            <FaLinkedin size={40} />
          </motion.a>
          <motion.a 
            href="https://github.com/gkamesh98"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-gray-400"
          >
            <FaGithub size={40} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
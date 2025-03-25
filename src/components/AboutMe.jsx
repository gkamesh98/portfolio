import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -100 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8"
    >
      <div className="max-w-4xl grid md:grid-cols-2 gap-8 items-center">
        {/* Bio Card */}
        <motion.div 
                      viewport={{ once: true }}

          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">About Me</h2>
          <p className="text-lg">
            I'm a Senior Software Developer with over 4 years of experience, specializing in full-stack development, 
            cloud architecture, and team leadership. A B.Tech graduate from JNTUK University (2016-2020), 
            I thrive on solving complex problems and delivering efficient, scalable solutions.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}

          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative pl-8 border-l-4 border-blue-500"
        >
          <div className="mb-4">
            <motion.div 
              initial={{ scale: 0 }}
              viewport={{ once: true }}

              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute left-[-10px] w-5 h-5 bg-blue-500 rounded-full"
            />
            <h3 className="text-xl font-semibold text-green-400">B.Tech in Computer Science</h3>
            <p className="text-gray-300">JNTUK University | 2016-2020</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
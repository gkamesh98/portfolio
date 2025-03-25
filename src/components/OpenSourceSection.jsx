import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCloudDownloadAlt, FaNpm } from 'react-icons/fa';

const openSourceProjects = [
  {
    name: "vite-react-router-dom",
    description: "Automatic route creation for Vite",
    downloads: 100,
    githubLink: "https://github.com/gkamesh98/vite-react-router-dom",
    npmLink: "https://www.npmjs.com/package/vite-react-router-dom"
  },
  {
    name: "react-router-light",
    description: "Lightweight React Router",
    downloads: 50,
    githubLink: "https://github.com/gkamesh98/react-router-light",
    npmLink: "https://www.npmjs.com/package/react-router-light"
  }
];

const OpenSourceSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-900 text-white py-16 px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Open Source Contributions</h2>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {openSourceProjects.map((project, index) => (
          <motion.div 
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2 
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-green-400">{project.name}</h3>
              <div className="flex gap-4">
                <motion.a 
                  href={project.githubLink}
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-gray-400"
                >
                  <FaGithub size={30} />
                </motion.a>
                <motion.a 
                  href={project.npmLink}
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  className="text-white hover:text-gray-400"
                >
                  <FaNpm size={30} />
                </motion.a>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaCloudDownloadAlt className="mr-2 text-blue-400" />
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.5 }
                  }}
                  className="font-bold text-green-400"
                >
                  {project.downloads} monthly downloads
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-12"
      >
        <motion.a 
          href="https://github.com/gkamesh98"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2"
        >
          <FaGithub /> View Full GitHub Profile
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default OpenSourceSection;
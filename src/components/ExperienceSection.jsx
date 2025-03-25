import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    company: "Sails Software Solutions",
    period: "May 2020 - Present",
    role: "Senior Software Developer",
    description: "Employed at Sails Software Solutions, a service-based company, where I have delivered innovative solutions for multiple clients, leveraging full-stack development, cloud optimization, and team leadership skills.",
    projects: [
      {
        name: "Funcon",
        role: "Senior Software Developer",
        description: "Led the team as a proactive bridge between clients and the organization, ensuring clear communication and alignment of goals. Managed meeting organization using Google Calendar API for seamless scheduling and collaboration. Integrated OpenAI to enhance meeting descriptions and suggest topics, improving planning. Developed scheduled tasks to generate reports, track participants, and assign attendees based on interests. Optimized GCP architecture to reduce costs and enhance app performance.",
        technologies: ["React", "Django", "GCP", "PostgreSQL"]
      },
      {
        name: "Loqbox",
        role: "Frontend Developer",
        description: "Managed the frontend team in India, collaborated with UK counterparts, integrated payment systems using Acquired API, and built a bootstrap Credit Reporting Application with an admin panel.",
        technologies: ["React.js", "Redux", "Laravel", "AWS Lambda"]
      },
      {
        name: "Nooli",
        role: "Full-Stack Developer",
        description: "Architected the entire application, integrated Chargebee for subscription management, and developed an in-house CMS for the marketing team. Handled complex mobile app data for puzzles and questionnaires.",
        technologies: ["Apollo-GraphQL", "AWS Lambda", "React Native", "Node.js"]
      },
      {
        name: "Cochab",
        role: "Mobile Developer",
        description: "Enabled payments with Stripe and implemented live video streaming using VideoSDK. Optimized serverless API calls with Google Firestore.",
        technologies: ["React Native", "Node.js", "Google Firestore", "Stripe", "VideoSDK"]
      },
      {
        name: "Revvity",
        role: "Software Developer",
        description: "Fixed codebase vulnerabilities and delivered the project in 1.5 months (50% ahead of a 3-month timeline), securing 3 additional long-term projects.",
        technologies: [".NET", "Core PHP", "JavaScript"]
      }
    ]
  }
];

const ExperienceSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-800 text-white py-16 px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Professional Experience</h2>
      
      <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.company}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}

            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-700 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-green-400">{exp.company}</h3>
            <p className="text-gray-300 mb-2">{exp.period}</p>
            <p className="text-lg mb-4">{exp.role}</p>
            <p className="text-gray-300 mb-4">{exp.description}</p>
            <div className="grid gap-4">
              {exp.projects.map((project) => (
                <motion.div
                  key={project.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-600 p-4 rounded-lg cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <h4 className="text-xl font-semibold text-blue-400">{project.name}</h4>
                  <p className="text-gray-300">{project.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold text-blue-400 mb-4">{selectedProject.name}</h3>
              <p className="text-xl mb-4">{selectedProject.role}</p>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ExperienceSection;
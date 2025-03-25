import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Meeting Management Tool",
    company: "Sails Software Solutions (Funcon)",
    description:
      "Led the integration of OpenAI to enhance meeting descriptions and suggest topics, alongside Google Calendar API for seamless scheduling. Developed scheduled tasks to generate reports and assign attendees based on interests.",
    technologies: ["React", "Django", "OpenAI", "GCP", "PostgreSQL"],
    outcome:
      "Reduced meeting preparation time by 40% and improved team collaboration.",
  },
  {
    title: "Credit Reporting Application",
    company: "Sails Software Solutions (Loqbox)",
    description:
      "Managed the frontend team to build a bootstrap Credit Reporting Application with payment integration using Acquired API, including an admin panel for customer support.",
    technologies: ["React.js", "Redux", "Laravel", "AWS Lambda"],
    outcome:
      "Enhanced user financial tracking and streamlined customer support operations.",
  },
  {
    title: "Subscription Management System",
    company: "Sails Software Solutions (Nooli)",
    description:
      "Architected an application with Chargebee integration for subscription management and built an in-house CMS for the marketing team, handling complex mobile app data.",
    technologies: ["Apollo-GraphQL", "AWS Lambda", "React Native", "Node.js"],
    outcome:
      "Streamlined billing processes and improved marketing content management.",
  },
  {
    title: "Live Tutoring Platform",
    company: "Sails Software Solutions (Cochab)",
    description:
      "Enabled payments with Stripe and implemented live video streaming using VideoSDK for a student-tutor platform, optimized with Google Firestore for serverless API calls.",
    technologies: [
      "React Native",
      "Node.js",
      "Google Firestore",
      "Stripe",
      "VideoSDK",
    ],
    outcome: "Facilitated seamless payments and real-time tutoring sessions.",
  },
  {
    title: "Security Optimization Project",
    company: "Sails Software Solutions (Revvity)",
    description:
      "Fixed codebase vulnerabilities and delivered the company 50% ahead of schedule, securing additional long-term projects for the company.",
    technologies: [".NET", "Core PHP", "JavaScript"],
    outcome:
      "Enhanced application security and accelerated project delivery by 1.5 months.",
  },
  {
    title: "Multi-Wallet Management Platform",
    company: "Personal Project",
    description:
      "Developed a platform to manage multiple cryptocurrency wallets, integrating real-time pricing data via third-party APIs and visualizing transaction history and price trends with Chart.js. Ensured secure wallet integration using blockchain APIs and deployed on AWS.",
    technologies: ["React", "Laravel", "Chart.js", "Blockchain", "AWS"],
    outcome:
      "Enabled users to efficiently track crypto balances and transactions with real-time insights.",
    githubLink: "https://github.com/gkamesh98/coindock-ui-v2",
  },
  {
    title: "News Feed",
    company: "Personal Project",
    description:
      "Built a mobile app to deliver personalized news feeds, fetching real-time articles from various sources via APIs. Implemented a clean, swipeable UI for seamless content browsing and offline caching for uninterrupted access.",
    technologies: ["React Native"],
    outcome:
      "Provided users with a tailored news experience accessible on iOS and Android.",
    githubLink: "https://github.com/gkamesh98/newsFeed",
  },
  {
    title: "Remote Jobs Search",
    company: "Personal Project",
    description:
      "Created a mobile app to search for remote job listings, powered by the remote-jobs-api. Added filters for job type, location, and skills, with a responsive design for cross-platform usability.",
    technologies: ["React Native", "remote-jobs-api"],
    outcome:
      "Simplified remote job hunting with real-time listings on mobile devices.",
    githubLink: "https://github.com/gkamesh98/remote-jobs",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      viewport={{ once: true }}

      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-900 text-white py-16 px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.8 }}
            viewport={{ once: true }}

            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-lg cursor-pointer hover:shadow-xl transition-all ${
              project.company === "Personal Project"
                ? "bg-gray-700 border-2 border-green-500"
                : "bg-gray-800"
            }`}
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.company}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-600/30 text-blue-300 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-xl max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.githubLink && (
                <div className="absolute top-4 right-4">
                  <motion.a
                    href={selectedProject.githubLink}
                    target="_blank"
                    whileHover={{ scale: 1.2 }}
                    className="text-white hover:text-gray-400"
                  >
                    <FaGithub size={30} />
                  </motion.a>
                </div>
              )}
              <h2 className="text-3xl font-bold text-blue-400 mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                {selectedProject.company}
              </p>
              <p className="text-lg mb-4">{selectedProject.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold text-green-400 mb-2">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-green-600/20 p-4 rounded-lg">
                <h3 className="font-semibold text-green-400 mb-2">
                  Project Outcome
                </h3>
                <p className="text-white">{selectedProject.outcome}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectsSection;

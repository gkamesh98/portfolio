import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaAws, 
  FaDocker, 
  FaJsSquare 
} from 'react-icons/fa';

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 90, icon: FaJsSquare },
      { name: "TypeScript", level: 85, icon: FaJsSquare },
      { name: "Python", level: 80, icon: FaPython },
      { name: "PHP", level: 70, icon: FaJsSquare }
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React.js", level: 95, icon: FaReact },
      { name: "Node.js", level: 90, icon: FaNodeJs },
      { name: "React Native", level: 85, icon: FaReact },
      { name: "Django", level: 75, icon: FaPython }
    ]
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "AWS", level: 85, icon: FaAws },
      { name: "Docker", level: 80, icon: FaDocker },
      { name: "Kubernetes", level: 70, icon: FaDocker },
      { name: "GCP", level: 75, icon: FaAws }
    ]
  }
];

const SkillsSection = () => {
  return (
    <motion.section 
    viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-800 text-white py-16 px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Technical Skills</h2>
      
      <div className="max-w-4xl mx-auto">
        {skillCategories.map((category, catIndex) => (
          <motion.div 
            key={category.category}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-green-400">
              {category.category}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {category.skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700 rounded-lg p-4"
                >
                  <div className="flex items-center mb-2">
                    <skill.icon className="mr-3 text-blue-400" size={30} />
                    <span className="text-lg">{skill.name}</span>
                  </div>
                  <div className="bg-gray-600 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      viewport={{ once: true }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.3,
                        type: "tween"
                      }}
                      className="bg-blue-500 h-full rounded-full"
                    />
                  </div>
                  <div className="text-right text-sm text-gray-400 mt-1">
                    {skill.level}%
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
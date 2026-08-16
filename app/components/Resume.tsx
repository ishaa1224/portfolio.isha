"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Briefcase, Medal, Terminal } from "lucide-react";

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 },
    },
  };

  return (
    <section className="relative z-20 bg-bg-primary py-16 px-5 md:px-8 lg:px-16 border-t border-border-primary text-text-primary transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-text-primary transition-colors">
            Background & <span className="text-text-secondary">Experience</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Summary - Spans 2 columns on desktop */}
            <motion.div variants={itemVariants} className="md:col-span-2 bg-card-bg border border-card-border rounded-3xl p-8 backdrop-blur-sm hover:bg-card-hover-bg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="text-text-secondary w-6 h-6 transition-colors" />
                <h3 className="text-2xl font-semibold text-text-primary transition-colors">About Me</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-lg transition-colors">
                Computer Science and Engineering student with strong foundations in Python, JavaScript, React, Node.js, and SQL. Passionate about full stack development, AI, and problem-solving, with hands-on experience building web applications and AI-based projects. Quick learner, collaborative team player, and eager to contribute to innovative software development as an intern.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="bg-card-bg border border-card-border rounded-3xl p-8 backdrop-blur-sm hover:bg-card-hover-bg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-text-secondary w-6 h-6 transition-colors" />
                <h3 className="text-2xl font-semibold text-text-primary transition-colors">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium text-text-primary transition-colors">B.E. Information Science</h4>
                <p className="text-text-secondary transition-colors">Atria Institute of Technology</p>
                <div className="flex justify-between items-center text-sm text-text-secondary mt-2 transition-colors">
                  <span>2023 – 2027</span>
                  <span className="bg-bg-secondary px-2 py-1 rounded text-text-primary border border-border-primary font-mono transition-colors">CGPA: 8.5</span>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="md:col-span-3 bg-card-bg border border-card-border rounded-3xl p-8 backdrop-blur-sm hover:bg-card-hover-bg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-text-secondary w-6 h-6 transition-colors" />
                <h3 className="text-2xl font-semibold text-text-primary transition-colors">Technical Arsenal</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                <div>
                  <h4 className="text-sm text-text-secondary uppercase tracking-wider mb-3 transition-colors">Languages</h4>
                  <ul className="space-y-2 text-text-primary transition-colors">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm text-text-secondary uppercase tracking-wider mb-3 transition-colors">Frameworks</h4>
                  <ul className="space-y-2 text-text-primary transition-colors">
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Flask</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm text-text-secondary uppercase tracking-wider mb-3 transition-colors">Databases</h4>
                  <ul className="space-y-2 text-text-primary transition-colors">
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm text-text-secondary uppercase tracking-wider mb-3 transition-colors">AI / ML</h4>
                  <ul className="space-y-2 text-text-primary transition-colors">
                    <li>LangGraph</li>
                    <li>RAG</li>
                    <li>Machine Learning</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm text-text-secondary uppercase tracking-wider mb-3 transition-colors">Tools</h4>
                  <ul className="space-y-2 text-text-primary transition-colors">
                    <li>Git, GitHub</li>
                    <li>Docker</li>
                    <li>VS Code</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm text-text-secondary uppercase tracking-wider mb-3 transition-colors">Core</h4>
                  <ul className="space-y-2 text-text-primary transition-colors">
                    <li>DSA</li>
                    <li>OOP</li>
                    <li>DBMS, CN</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Certifications & Experience */}
            <motion.div variants={itemVariants} className="md:col-span-3 bg-card-bg border border-card-border rounded-3xl p-8 backdrop-blur-sm hover:bg-card-hover-bg transition-all duration-300">
               <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-text-secondary w-6 h-6 transition-colors" />
                <h3 className="text-2xl font-semibold text-text-primary transition-colors">Certifications & Training</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative pl-6 border-l border-border-primary transition-colors">
                  <div className="absolute w-3 h-3 bg-text-secondary rounded-full -left-[6.5px] top-1.5 ring-4 ring-bg-primary transition-all"></div>
                  <h4 className="text-xl font-medium text-text-primary mb-1 transition-colors">Deloitte Technology Job Simulation</h4>
                  <p className="text-text-secondary mb-2 transition-colors">Forage • Jan 2026</p>
                  <p className="text-text-secondary text-sm leading-relaxed transition-colors">
                    Analyzed business requirements and proposed technical solutions. Completed real-world technology consulting simulation tasks.
                  </p>
                </div>

                <div className="relative pl-6 border-l border-border-primary transition-colors">
                  <div className="absolute w-3 h-3 bg-text-secondary rounded-full -left-[6.5px] top-1.5 ring-4 ring-bg-primary transition-all"></div>
                  <h4 className="text-xl font-medium text-text-primary mb-1 transition-colors">AI & Problem Solving Workshop</h4>
                  <p className="text-text-secondary mb-2 transition-colors">AlgoUniversity • 2026</p>
                  <p className="text-text-secondary text-sm leading-relaxed transition-colors">
                    AI & Problem Solving Workshop by AlgoUniversity, focused on AI concepts, structured problem-solving, and practical approaches to solving technology-driven challenges.
                  </p>
                </div>

                <div className="relative pl-6 border-l border-border-primary transition-colors">
                  <div className="absolute w-3 h-3 bg-text-secondary rounded-full -left-[6.5px] top-1.5 ring-4 ring-bg-primary transition-all"></div>
                  <h4 className="text-xl font-medium text-text-primary mb-1 transition-colors">C Programming & DevOps</h4>
                  <p className="text-text-secondary mb-2 transition-colors">Infosys Springboard • 2024</p>
                  <p className="text-text-secondary text-sm leading-relaxed transition-colors">
                    Learned C programming concepts and problem-solving techniques. Gained understanding of Git workflows and DevOps fundamentals.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

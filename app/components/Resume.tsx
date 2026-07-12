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
    <section className="relative z-20 bg-[#121212] py-16 px-5 md:px-8 lg:px-16 border-t border-white/5 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            Background & <span className="text-gray-400">Experience</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Summary - Spans 2 columns on desktop */}
            <motion.div variants={itemVariants} className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="text-gray-400 w-6 h-6" />
                <h3 className="text-2xl font-semibold">About Me</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Computer Science undergraduate with hands-on experience in full-stack web development using React.js, Node.js, and MongoDB. Passionate about problem-solving and building scalable applications with a strong foundation in Data Structures and REST APIs. Constantly seeking to enhance technical skills through real-world projects.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-gray-400 w-6 h-6" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-medium text-white">B.E. Information Science</h4>
                <p className="text-gray-400">Atria Institute of Technology</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
                  <span>2023 – 2027</span>
                  <span className="bg-white/10 px-2 py-1 rounded text-gray-300 font-mono">CGPA: 8.5</span>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="md:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-gray-400 w-6 h-6" />
                <h3 className="text-2xl font-semibold">Technical Arsenal</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Languages</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>Java, C++</li>
                    <li>JavaScript, Python</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Frontend</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>React.js</li>
                    <li>HTML, CSS</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Backend & DB</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>Node.js, Flask</li>
                    <li>MongoDB, MySQL</li>
                    <li>REST APIs, JWT</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Tools & Concepts</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>Git, GitHub, Docker</li>
                    <li>Data Structures</li>
                    <li>OOP</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Certifications & Experience */}
            <motion.div variants={itemVariants} className="md:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
               <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-gray-400 w-6 h-6" />
                <h3 className="text-2xl font-semibold">Certifications & Training</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[6.5px] top-1.5 ring-4 ring-[#121212]"></div>
                  <h4 className="text-xl font-medium text-white mb-1">Deloitte Technology Job Simulation</h4>
                  <p className="text-gray-400 mb-2">Forage • Jan 2026</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Analyzed business requirements and proposed technical solutions. Completed real-world technology consulting simulation tasks.
                  </p>
                </div>

                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-[6.5px] top-1.5 ring-4 ring-[#121212]"></div>
                  <h4 className="text-xl font-medium text-white mb-1">C Programming & DevOps</h4>
                  <p className="text-gray-400 mb-2">Infosys Springboard • 2024</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
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

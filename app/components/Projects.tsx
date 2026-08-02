"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "PageAudit — AI Web Content Analyzer",
      category: "Next.js, TypeScript, Cheerio, AI Integration, Tailwind CSS",
      description: "Developed a full-stack web application that extracts and analyzes webpage content from a URL using AI. Implemented robust URL validation, error handling, timeouts, and responsive report dashboards.",
      link: "https://page-audit-rosy.vercel.app"
    },
    {
      title: "AgentFlow AI — AI Workflow Automation System",
      category: "Python, FastAPI, React, LangGraph, RAG",
      description: "Built a multi-agent AI system to automate task extraction, prioritization, and workflow management. Integrated RAG-based knowledge retrieval and a dashboard for tracking tasks, reminders, and workflow status.",
      link: "https://agentflow-five-mocha.vercel.app/"
    },
    {
      title: "Noir Luxe — Premium Full-Stack E-Commerce Platform",
      category: "React, Node.js, Express.js, Supabase, Tailwind CSS, Framer Motion",
      description: "Built a full-stack premium e-commerce platform with secure authentication, product management, and responsive shopping experiences. Designed an immersive luxury storefront with parallax scrolling and cinematic animations.",
      link: "https://premium-chocolate2.vercel.app/"
    },
    {
      title: "Gamiphysio — Gamified Physiotherapy Application",
      category: "React.js, Node.js, Express.js, MongoDB",
      description: "Developed a gamified platform to improve user engagement in physiotherapy exercises. Built responsive UI with progress tracking, real-time feedback, RESTful APIs, and a reward system.",
      link: "https://gami-physio-ar-r25w.vercel.app/"
    },
    {
      title: "AI Stylist — Fashion Recommendation System",
      category: "Python, Recommendation Logic, UI",
      description: "Built a recommendation system providing personalized outfit suggestions based on user preferences. Developed interactive interface and input analysis logic to enhance user experience.",
      link: "https://ai-stylist-sandy.vercel.app?utm_source=chatgpt.com"
    }
  ];

  return (
    <section className="min-h-screen bg-[#121212] py-24 px-8 md:px-24 relative z-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter text-white">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {projects.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 flex flex-col h-full min-h-[380px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.category.split(', ').map(tech => (
                      <span key={tech} className="text-xs font-mono text-gray-300 bg-white/10 px-3 py-1 rounded-full border border-white/5 uppercase tracking-wider">{tech}</span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-semibold mb-4 text-white group-hover:text-gray-200 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-md">{project.description}</p>
                </div>
                
                <div className="mt-auto">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-6 py-3 rounded-full border border-white/20 text-sm font-medium tracking-wide text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/10 pt-16 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-2">ISHA</h2>
            <p className="text-gray-400">My Work Flow</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 text-sm font-medium text-gray-400">
            <a href="tel:+918277900967" className="hover:text-white transition-colors flex items-center gap-2">
              +91 8277900967
            </a>
            <a href="mailto:isha1224k@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
              isha1224k@gmail.com
            </a>
            <a href="https://linkedin.com/in/isha-29958533a" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              linkedin.com/in/isha-29958533a
            </a>
            <a href="https://github.com/ishaa1224" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              github.com/ishaa1224
            </a>
            <span className="hover:text-white transition-colors cursor-default flex items-center gap-2">
              Bengaluru, Karnataka, India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

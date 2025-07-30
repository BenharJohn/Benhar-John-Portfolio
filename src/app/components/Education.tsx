import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "M.S. in Robotics and Autonomous Systems (Artificial Intelligence)",
      institution: "Arizona State University, Tempe, AZ",
      period: "2024 - 2026",
      gpa: "3.89 GPA",
      details: [
        "Relevant Coursework: Artificial Intelligence, Knowledge Representation, Linear Algebra in Engineering",
        "Expected Graduation: May 2026"
      ]
    },
    {
      degree: "Bachelor's in Robotics, AI, and Machine Learning",
      institution: "Srinivas University Institute of Engineering and Technology, Karnataka, India",
      period: "2020 - 2024",
      gpa: "8.45/10 GPA",
      details: [
        "Relevant Coursework: Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Computer Vision",
        "Graduated: May 2024"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800">
      <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
        <GraduationCap className="w-8 h-8" />
        Education
      </h2>
      <div className="space-y-12">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-zinc-900/50 rounded-xl p-8 hover:bg-zinc-900/70 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <div className="flex items-center gap-2 text-zinc-400 md:ml-auto">
                <Calendar className="w-4 h-4" />
                {edu.period}
              </div>
            </div>
            <p className="text-lg text-zinc-300 mb-2">{edu.institution}</p>
            <p className="text-zinc-400 mb-4">{edu.gpa}</p>
            <ul className="space-y-2">
              {edu.details.map((detail, i) => (
                <li key={i} className="text-zinc-400 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />
                  {detail}
                </li>
              ))
              }
            </ul>
          </motion.div>
        ))
        }
      </div>
    </section>
  );
}

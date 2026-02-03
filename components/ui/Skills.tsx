"use client";

import { motion } from "framer-motion";
import { skills } from "@/constants";
import { Code2 } from "lucide-react";

export default function Skills() {
  const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "other", label: "Other" },
  ] as const;

  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Skills
            </h2>
          </div>

          <div className="grid gap-8">
            {categories.map((category) => {
              const categorySkills = skills.filter(
                (s) => s.category === category.key
              );
              if (categorySkills.length === 0) return null;

              return (
                <div key={category.key}>
                  <h3 className="text-xl font-semibold text-purple-300 mb-4">
                    {category.label}
                  </h3>
                  <div className="grid gap-4">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="card-glass rounded-xl p-4"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-200">
                            {skill.name}
                          </span>
                          <span className="text-sm text-purple-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-purple-900/50 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

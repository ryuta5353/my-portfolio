"use client";

import { motion } from "framer-motion";
import { profile, interests } from "@/constants";
import { User, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <User className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              About Me
            </h2>
          </div>

          <div className="card-glass rounded-2xl p-8 glow-effect transition-all duration-300">
            <p className="text-lg leading-relaxed text-gray-300 whitespace-pre-line">
              {profile.about}
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-semibold text-purple-200">
                  Interests
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full bg-purple-900/50 text-purple-200 text-sm border border-purple-700/50"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/constants";
import { Mail, Github, Twitter } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-6 h-6" />,
  twitter: <Twitter className="w-6 h-6" />,
};

export default function Contact() {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Contact
            </h2>
          </div>

          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            お気軽にご連絡ください。SNSでのメッセージも歓迎します。
          </p>

          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 p-4 card-glass rounded-xl glow-effect transition-all duration-300"
              >
                <span className="text-purple-400">
                  {iconMap[link.icon] || <Mail className="w-6 h-6" />}
                </span>
                <span className="text-sm text-gray-300">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

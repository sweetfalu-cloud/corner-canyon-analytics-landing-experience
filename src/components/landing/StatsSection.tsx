import React from 'react';
import { motion } from 'framer-motion';
const stats = [
  { value: '10B+', label: 'Data Points Processed' },
  { value: '99.9%', label: 'Infrastructure Uptime' },
  { value: '150+', label: 'Enterprise Partners' },
  { value: '45%', label: 'Avg Efficiency Increase' },
];
export function StatsSection() {
  return (
    <section className="bg-canyon-blue py-16 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-canyon-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-slate-300 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
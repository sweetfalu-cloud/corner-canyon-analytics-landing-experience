import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
export function ValuePropSection() {
  const benefits = [
    'Proprietary ML algorithms optimized for scale',
    'Zero-latency data pipeline architecture',
    'Custom-built BI suites for specific industries',
    'SOC2 Type II compliant security protocols',
    '24/7 dedicated engineering support teams',
  ];
  return (
    <section id="solutions" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-canyon-cyan font-semibold tracking-wide uppercase text-sm mb-3">The Canyon Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
              Why leading organizations choose Corner Canyon.
            </h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We don't just provide charts; we build the logic that powers your future growth. Our methodology focuses on data hygiene and actionable intelligence over vanity metrics.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <CheckCircle2 className="h-6 w-6 text-canyon-cyan flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-[500px] mx-auto">
              {/* Abstract Data Visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-canyon-blue/10 to-canyon-cyan/10 rounded-full animate-pulse" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-dashed border-canyon-cyan/30 rounded-full" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-3/4">
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 rounded-2xl bg-white dark:bg-canyon-dark border border-border shadow-xl relative overflow-hidden group"
                    >
                      <div className="h-2 w-12 bg-canyon-cyan/20 rounded mb-4 overflow-hidden">
                        <div className="h-full bg-canyon-cyan w-1/2 animate-shimmer" />
                      </div>
                      <div className="text-2xl font-bold mb-1">99.9%</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Metric {item}</div>
                      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                        <CheckCircle2 className="w-4 h-4 text-canyon-cyan" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-canyon-cyan rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                <span className="text-xs font-bold">New</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { CheckCircle2, AlertCircle, Workflow, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
export function ValuePropSection() {
  const benefitBlocks = [
    {
      title: 'The Problem We Solve',
      description: 'Most organizations are drowning in data but starving for insights. We cut through the "data fog" that leads to decision paralysis and guesswork.',
      icon: AlertCircle,
      color: 'text-rose-500',
    },
    {
      title: 'Our Dual Approach',
      description: 'We combine Elite Data Strategy Consulting with scalable Data-as-a-Service infrastructure to build a foundation for long-term growth.',
      icon: Workflow,
      color: 'text-canyon-cyan',
    },
    {
      title: 'Why Corner Canyon?',
      description: 'Local roots in Draper, Utah with global expertise. We provide personalized, high-touch support that large agencies simply cannot match.',
      icon: MapPin,
      color: 'text-indigo-500',
    },
  ];
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-canyon-cyan font-semibold tracking-wide uppercase text-sm mb-3"
              >
                Your Data, Our Community, Real Growth.
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight"
              >
                About Corner Canyon Analytics
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground mb-10 leading-relaxed"
              >
                At Corner Canyon Analytics, we believe that every local organization—from scaling businesses to mission-driven non-profits—deserves access to the same elite data strategies used by global enterprises. Based in the heart of Draper, Utah, we specialize in helping leaders make decisions based on clarity, not guesswork.
              </motion.p>
            </div>
            <div className="grid gap-6">
              {benefitBlocks.map((block, i) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-canyon-dark/50 border border-border shadow-sm group hover:shadow-md transition-all"
                >
                  <div className={`mt-1 h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-slate-100 dark:bg-slate-800 transition-colors group-hover:bg-canyon-cyan/10`}>
                    <block.icon className={`h-5 w-5 ${block.color} group-hover:text-canyon-cyan transition-colors`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{block.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{block.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white rounded-full px-8 h-14 group border-none shadow-lg shadow-canyon-blue/10 transition-all hover:scale-105">
                <a href="#footer" className="flex items-center gap-2">
                  Ready for a Data Health Audit? Let’s Talk
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
          <div className="relative flex items-center justify-center sticky top-32">
            <div className="relative aspect-square w-full max-w-[500px]">
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
                      className="p-4 md:p-6 rounded-2xl bg-white dark:bg-canyon-dark border border-border shadow-xl relative overflow-hidden group"
                    >
                      <div className="h-2 w-12 bg-canyon-cyan/20 rounded mb-4 overflow-hidden relative">
                        <div className="absolute inset-0 bg-canyon-cyan w-1/2 animate-shimmer" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold mb-1">
                        {item === 1 ? '99.9%' : item === 2 ? '24/7' : item === 3 ? '10x' : '100%'}
                      </div>
                      <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                        {item === 1 ? 'Accuracy' : item === 2 ? 'Support' : item === 3 ? 'ROI' : 'Security'}
                      </div>
                      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                        <CheckCircle2 className="w-4 h-4 text-canyon-cyan" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-canyon-cyan rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                <span className="text-xs font-bold">HQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
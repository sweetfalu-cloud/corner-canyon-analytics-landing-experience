import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight, PlayCircle } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-canyon-dark text-white">
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-canyon-blue/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-canyon-cyan/10 rounded-full blur-[100px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-canyon-cyan text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-canyon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-canyon-cyan"></span>
              </span>
              New: Enterprise Predictive Engine 2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Illuminate the <span className="text-canyon-cyan">Invisible</span> in Your Data.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              We transform complex datasets into commanding insights. Corner Canyon Analytics provides the precision and scale needed for modern decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-canyon-cyan hover:bg-canyon-cyan/90 text-canyon-dark font-bold px-8 h-14 rounded-full text-lg group">
                Schedule Consult
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white font-semibold px-8 h-14 rounded-full text-lg">
                <PlayCircle className="mr-2 h-5 w-5 text-canyon-cyan" />
                See Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-canyon-dark bg-slate-700 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="text-white font-medium">500+ managers</span> globally</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 p-4 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-900 to-canyon-dark rounded-2xl overflow-hidden p-6 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-xs font-mono text-slate-500">CORNER_CANYON_DASHBOARD</div>
                </div>
                <div className="flex-1 flex items-end gap-3">
                  {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                      className="flex-1 bg-canyon-cyan/80 rounded-t-sm"
                    />
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Projected ROI</div>
                    <div className="text-2xl font-bold text-canyon-cyan">+248%</div>
                  </div>
                  <div className="h-10 w-24 rounded bg-canyon-cyan/10 border border-canyon-cyan/20 flex items-center justify-center">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-canyon-cyan to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            </div>
            {/* Background Glows for the mockup */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-canyon-cyan/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-canyon-blue/30 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
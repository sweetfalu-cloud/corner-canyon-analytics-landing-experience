import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Quote, CheckCircle2, GraduationCap, Briefcase, Database, Activity } from 'lucide-react';
import { Card } from '@/components/ui/card';
export function MeetTheFounderSection() {
  const credentials = [
    { icon: GraduationCap, text: "Harvard University Credentials" },
    { icon: Briefcase, text: "20+ Years Industry Experience" },
    { icon: Award, text: "Optum & Snowflake Expert" },
    { icon: CheckCircle2, text: "Advanced SQL & Data Strategy" },
  ];
  // Random positions for "floating data nodes"
  const nodes = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 2,
  }));
  return (
    <section id="founder" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Bio / Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canyon-cyan/10 border border-canyon-cyan/20 text-canyon-cyan text-sm font-medium mb-6">
              Leadership & Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Strategic Data <span className="text-canyon-cyan">Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded by Falguni Dharodiya, Corner Canyon Analytics bridges the gap between complex infrastructure and actionable leadership strategy. We provide the technical precision required for modern organizational excellence.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {credentials.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-canyon-cyan" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6 border-l-2 border-canyon-cyan/30 pl-6 mb-10">
              <div>
                <h4 className="flex items-center gap-2 text-lg font-bold text-foreground mb-2">
                  <Users className="h-5 w-5 text-canyon-cyan" />
                  Local Commitment
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Deeply rooted in the Draper, Utah community, our leadership is dedicated to fostering data literacy and civic engagement. We empower local businesses and non-profits to compete on a global scale through superior analytics.
                </p>
              </div>
            </div>
            <Card className="bg-slate-50 dark:bg-canyon-dark/50 border-none p-6 relative overflow-hidden group">
              <Quote className="absolute top-4 right-4 h-12 w-12 text-canyon-cyan/10 group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-canyon-cyan mb-2 block">Our Mission</span>
                <p className="text-foreground italic leading-relaxed">
                  "We provide the 'flashlight' that illuminates hidden opportunities. We don't just build dashboards; we build the clarity required for your next big move."
                </p>
              </div>
            </Card>
          </motion.div>
          {/* Right Column: Abstract Data Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative group">
              {/* Data Visualization Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/5] bg-gradient-to-br from-slate-900 via-canyon-blue/40 to-canyon-cyan/20 flex flex-col items-center justify-center">
                {/* Subtle Grid Overlay */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{ 
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px' 
                  }}
                />
                {/* Animated Data Mesh */}
                <div className="relative w-full h-full">
                  {nodes.map((node) => (
                    <motion.div
                      key={node.id}
                      className="absolute rounded-full bg-canyon-cyan shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                      style={{
                        width: node.size,
                        height: node.size,
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: node.duration,
                        repeat: Infinity,
                        delay: node.delay,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                  {/* Central Glow Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-48 h-48 bg-canyon-cyan/20 rounded-full blur-3xl"
                    />
                    <div className="relative z-20 flex flex-col items-center gap-4">
                      <div className="h-20 w-20 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl">
                        <Database className="h-10 w-10 text-canyon-cyan" />
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-canyon-dark/60 backdrop-blur-md border border-white/10">
                        <Activity className="h-4 w-4 text-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono text-slate-300 tracking-wider">SYSTEMS_OPTIMIZED</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bottom Label Overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-30">
                  <div className="flex items-center gap-4 bg-canyon-dark/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-lg">
                    <div className="h-12 w-12 rounded-xl bg-canyon-cyan flex items-center justify-center shadow-lg">
                      <BookOpen className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg leading-tight">Elite Data Strategy</div>
                      <div className="text-canyon-cyan text-xs font-medium uppercase tracking-widest">Precision • Scale • Insight</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background Decorative Glows */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-canyon-cyan/10 rounded-full blur-[100px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-canyon-blue/20 rounded-full blur-[100px] -z-10" />
              {/* Rotating Border Frame */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-2 border-canyon-cyan/10 rounded-[2.5rem] rotate-3 -z-20 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
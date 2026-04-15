import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Database, LineChart, BrainCircuit, Zap, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
const services = [
  {
    title: 'Data Architecture & Modernization',
    subtitle: 'The Foundation for Growth',
    description: 'Break free from messy spreadsheets and siloed data. We specialize in SQL Server migration and architecture that cleanses your data at the source.',
    icon: Database,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    outcome: 'Eliminate Data Silos',
  },
  {
    title: 'Automated Reporting',
    subtitle: 'Your Time, Returned',
    description: 'Reclaim 20+ hours a week. We build robust SQL views and BI dashboards that update in real-time, so you can stop manually refreshing reports.',
    icon: LineChart,
    color: 'text-canyon-cyan',
    bg: 'bg-canyon-cyan/10',
    outcome: '20+ hrs/wk saved',
  },
  {
    title: 'Strategic Process Automation',
    subtitle: 'Efficiency at Scale',
    description: "Bridge the gap between your tools. Our custom automation engines streamline workflows and eliminate manual bottlenecks that off-the-shelf software can’t touch.",
    icon: Zap,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    outcome: '+40% Performance',
  },
  {
    title: 'Impact Strategy Consulting',
    subtitle: 'The Path to the Peak',
    description: 'Fractional CDO services for organizations ready for elite leadership. From comprehensive data audits to long-term technology roadmaps.',
    icon: BrainCircuit,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    outcome: 'Peak ROI Roadmap',
  },
];
export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
      {/* Anchor for Solutions navigation - Adjusted for scroll-padding-top sync */}
      <div id="solutions" className="absolute -top-8" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-canyon-cyan font-semibold tracking-wide uppercase text-sm mb-3">Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Solutions for Local Impact
            </h3>
            <p className="text-lg text-muted-foreground">
              Elite data strategies tailored for scaling businesses and mission-driven organizations in Utah and beyond.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border border-border bg-card/50 hover:bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group overflow-hidden aspect-auto md:aspect-[16/10] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500`}>
                      <service.icon className={`w-7 h-7 ${service.color}`} />
                    </div>
                    <Badge variant="secondary" className="bg-canyon-cyan/10 text-canyon-cyan border-canyon-cyan/20 px-3 py-1 font-mono text-xs uppercase tracking-wider">
                      {service.outcome}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-canyon-cyan uppercase tracking-widest">
                      {service.subtitle}
                    </p>
                    <CardTitle className="text-2xl font-bold group-hover:text-canyon-cyan transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed text-lg pt-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <button className="inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-canyon-cyan transition-all duration-500">
                    Explore Solution
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
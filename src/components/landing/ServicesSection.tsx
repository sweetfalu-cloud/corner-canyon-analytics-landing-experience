import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Database, LineChart, BrainCircuit, Globe, ShieldCheck, Zap } from 'lucide-react';
const services = [
  {
    title: 'Data Warehousing',
    description: 'Unified storage solutions that scale with your growth, ensuring data integrity and accessibility.',
    icon: Database,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    title: 'Predictive Modeling',
    description: 'Anticipate market shifts and customer behavior with our advanced machine learning algorithms.',
    icon: BrainCircuit,
    color: 'text-canyon-cyan',
    bg: 'bg-canyon-cyan/10',
  },
  {
    title: 'BI Dashboards',
    description: 'Real-time interactive visualizations that turn complex data into actionable business intelligence.',
    icon: LineChart,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
  },
  {
    title: 'Global Scale',
    description: 'Deploy analytics infrastructure across continents with low latency and high availability.',
    icon: Globe,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    title: 'Enterprise Security',
    description: 'Military-grade encryption and compliance standards for your most sensitive organizational data.',
    icon: ShieldCheck,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    title: 'Real-time ETL',
    description: 'Stream, transform, and load data in milliseconds for instantaneous response to events.',
    icon: Zap,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
  },
];
export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
      {/* Anchor for Solutions navigation which points to the same technical capabilities area */}
      <div id="solutions" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-canyon-cyan font-semibold tracking-wide uppercase text-sm mb-3">Our Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Comprehensive solutions for the data-driven enterprise.
          </h3>
          <p className="text-lg text-muted-foreground">
            From raw infrastructure to high-level strategic intelligence, we cover every layer of the modern data stack.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border border-border bg-card/50 hover:bg-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold mb-2 group-hover:text-canyon-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="text-sm font-semibold flex items-center gap-1 text-muted-foreground group-hover:text-foreground transition-colors">
                    Learn more
                    <span className="block w-4 h-[1px] bg-muted-foreground group-hover:w-6 transition-all" />
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
import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Quote, CheckCircle2, GraduationCap, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
export function MeetTheFounderSection() {
  const credentials = [
    { icon: GraduationCap, text: "Harvard University Credentials" },
    { icon: Briefcase, text: "20+ Years Industry Experience" },
    { icon: Award, text: "Optum & Snowflake Expert" },
    { icon: CheckCircle2, text: "Advanced SQL & Data Strategy" },
  ];
  return (
    <section id="founder" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canyon-cyan/10 border border-canyon-cyan/20 text-canyon-cyan text-sm font-medium mb-6">
              Leadership & Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Meet the Founder: <span className="text-canyon-cyan">Falguni Dharodiya</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over two decades of experience at the intersection of healthcare and technology, Falguni Dharodiya founded Corner Canyon Analytics to bridge the gap between complex data infrastructure and actionable leadership strategy. 
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
                  Why Local Matters
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Deeply rooted in the Draper, Utah community, Falguni is a passionate advocate for STEM education and civic engagement. As an active member of local Toastmasters and community leadership boards, she believes that strong data literacy empowers local businesses and non-profits to thrive.
                </p>
              </div>
            </div>
            <Card className="bg-slate-50 dark:bg-canyon-dark/50 border-none p-6 relative overflow-hidden group">
              <Quote className="absolute top-4 right-4 h-12 w-12 text-canyon-cyan/10 group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-canyon-cyan mb-2 block">A Message from Falguni</span>
                <p className="text-foreground italic leading-relaxed">
                  "Our mission is simple: we provide the 'flashlight' that illuminates the hidden opportunities in your data. We don't just build dashboards; we build the clarity required for your next big move."
                </p>
              </div>
            </Card>
          </motion.div>
          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="Falguni Dharodiya - Founder of Corner Canyon Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canyon-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-canyon-cyan flex items-center justify-center shadow-lg">
                    <BookOpen className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl leading-tight">Elite Data Strategy</div>
                    <div className="text-canyon-cyan text-sm font-medium">Harvard • Optum • Snowflake</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-canyon-cyan/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-canyon-blue/30 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-canyon-cyan/10 rounded-3xl rotate-3 -z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
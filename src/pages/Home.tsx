import { motion } from 'motion/react';
import Hero from '../components/Hero';
import { ShieldCheck, BookOpen, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Excellence since', value: '2018' },
  { label: 'Licensed Teachers', value: '100%' },
  { label: 'Cambridge prep', value: 'Rank A' },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero imageUrl="/src/assets/images/unihub_hero_classroom_1779176906766.png" />

      {/* Stats Bar */}
      <section className="py-12 bg-white border-y border-unihub-navy/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-4xl font-display font-bold text-unihub-navy mb-1">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-unihub-navy/40 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview - Asymmetric Layout */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-20">
            <div className="lg:col-span-12">
               <div className="bg-unihub-blue/10 text-unihub-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                Our Programs
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-unihub-navy max-w-4xl leading-[1.1]">
                Tailored Learning for <br/> <span className="italic font-normal serif">Every Age Group.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <Link to="/services" className="group relative block unihub-card-organic-1 overflow-hidden aspect-[16/10] bg-unihub-blue/20">
                <img 
                  src="/src/assets/images/unihub_kids_learning_1779176925647.png" 
                  alt="Kids Program" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-unihub-navy/80 via-unihub-navy/20 to-transparent flex flex-col justify-end p-10">
                  <span className="text-unihub-terracotta text-sm font-serif italic mb-2">Age 6–9</span>
                  <h3 className="text-4xl font-serif font-bold text-white mb-2 underline decoration-unihub-terracotta underline-offset-8">Primary Foundation</h3>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
               <Link to="/services" className="group relative block unihub-card-organic-2 overflow-hidden flex-grow bg-unihub-sand/20 min-h-[300px]">
                <img 
                  src="/src/assets/images/unihub_college_prep_1779176945889.png" 
                  alt="College Prep" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-unihub-navy/80 via-unihub-navy/20 to-transparent flex flex-col justify-end p-8">
                   <span className="text-unihub-terracotta text-sm font-serif italic mb-2">Young Adults</span>
                   <h3 className="text-3xl font-serif font-bold text-white">Academic & IELTS</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Unihub */}
      <section className="py-32 bg-unihub-navy text-white relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-20 text-balance">
             <h2 className="text-5xl font-display font-bold mb-8">Why Excellence Matters.</h2>
             <p className="text-white/60 text-lg leading-relaxed">
               We don't just teach English; we build confidence. Our curriculum is designed by education experts to ensure natural acquisition.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: BookOpen, title: 'Expert Curriculum', desc: 'Cambridge-aligned pathways for every stage of development.' },
              { icon: Users, title: 'Small Batches', desc: 'Personalized attention with maximum 10 students per class.' },
              { icon: ShieldCheck, title: 'Safe Environment', desc: 'Modern, secure facility in the heart of Lai Xá community.' }
            ].map((feature, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-unihub-blue group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="text-unihub-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-white/40 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-unihub-blue rounded-[60px] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
            {/* Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-unihub-navy/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 relative z-10 leading-[0.9]">
              Ready to Speak <br/> <span className="italic font-normal serif">the Future?</span>
            </h2>
            <p className="text-white/80 text-xl max-w-xl mb-12 relative z-10">
              Join the Unihub community and experience English learning like never before.
            </p>
            <Link to="/contact" className="bg-unihub-navy text-white px-12 py-6 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl relative z-10">
              Enroll for a Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

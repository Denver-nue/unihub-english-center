import { motion } from 'motion/react';
import { Award, Clock, Lightbulb, Users } from 'lucide-react';

const values = [
  { icon: Lightbulb, title: 'Student-Centric', desc: 'Every lesson is tailored to the individual learning pace of our students.' },
  { icon: Award, title: 'Global Standards', desc: 'Curriculum aligned with the Common European Framework of Reference for Languages (CEFR).' },
  { icon: Users, title: 'Native Exposure', desc: 'Direct interaction with experienced international teachers for natural accent acquisition.' },
  { icon: Clock, title: 'Lifelong Skills', desc: 'Developing critical thinking and communication skills that last far beyond the classroom.' },
];

const teachers = [
  { name: 'Elena Rodriguez', role: 'Academic Director', image: 'https://picsum.photos/seed/teacher1/400/500' },
  { name: 'Julian Mark', role: 'Primary Lead', image: 'https://picsum.photos/seed/teacher2/400/400' },
  { name: 'Sarah Nguyen', role: 'College Prep', image: 'https://picsum.photos/seed/teacher3/400/600' },
  { name: 'David Smith', role: 'IELTS Expert', image: 'https://picsum.photos/seed/teacher4/400/450' },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-32"
    >
      {/* Story Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="bg-unihub-blue/10 text-unihub-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              Our Story
            </div>
            <h1 className="text-6xl font-display font-bold text-unihub-navy leading-[1.1] mb-8">
              Born from a Passion for <span className="italic font-normal serif">Communication.</span>
            </h1>
            <div className="space-y-6 text-lg text-unihub-navy/70 leading-relaxed">
              <p>
                Founded in 2018 in the vibrant community of Lai Xá, Unihub was established with a singular mission: to bridge the gap between traditional language learning and real-world fluency.
              </p>
              <p>
                We believed that English shouldn't just be a subject in school—it should be a gateway to the world. Our founders, a group of dedicated educators and linguists, envisioned a center where students of all ages could feel at home while exploring a new language.
              </p>
              <p>
                Today, Unihub stands as a beacon of excellence in Hà Nội, trusted by hundreds of parents and students for our uncompromising quality and warm, community-focused approach.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="rounded-[60px] overflow-hidden aspect-[4/5] relative z-10 shadow-2xl">
               <img src="https://picsum.photos/seed/center/800/1000" alt="Unihub Center" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-unihub-sand rounded-[60px] -z-10" />
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-unihub-sand/20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
             <h2 className="text-5xl font-display font-bold text-unihub-navy mb-6">Built on Foundation.</h2>
             <p className="text-unihub-navy/60">Our core values guide every interaction, from the first greeting to the final certification.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-unihub-blue/10 rounded-xl flex items-center justify-center text-unihub-blue mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-unihub-navy mb-4">{value.title}</h3>
                <p className="text-sm text-unihub-navy/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers - Organic Masonry Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
             <div className="max-w-xl">
                <div className="bg-unihub-terracotta/10 text-unihub-terracotta px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                  Meet the Team
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-unihub-navy leading-[1.1]">
                  Mentors, not <br/> <span className="italic font-normal serif">just teachers.</span>
                </h2>
             </div>
             <p className="text-lg text-unihub-navy/60 max-w-xs pb-2">
               Our team consists of passionate educators from across the globe, bringing cultural diversity to Lai Xá.
             </p>
           </div>

           <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
             {teachers.map((teacher, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative group break-inside-avoid"
               >
                 <div className="rounded-[40px] overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                    <img src={teacher.image} alt={teacher.name} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-unihub-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <h3 className="text-2xl font-display font-bold text-white">{teacher.name}</h3>
                      <p className="text-white/60 text-sm">{teacher.role}</p>
                    </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>
    </motion.div>
  );
}

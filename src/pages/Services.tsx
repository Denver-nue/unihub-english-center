import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    age: "Age 6–9",
    category: "Primary Education",
    title: "English Explorers",
    desc: "A foundational program for grade 1-3 students focusing on phonics, natural vocabulary, and building the confidence to speak from day one.",
    features: ["Cambridge Starters/Movers level", "Play-based interactive learning", "Phonics and Pronunciation focus", "Max 10 students per class"],
    image: "/src/assets/images/unihub_kids_learning_1779176925647.png",
    color: "bg-unihub-blue/10",
    textColor: "text-unihub-blue"
  },
  {
    age: "Age 10–15",
    category: "Secondary Prep",
    title: "Academic Excellence",
    desc: "Bridge the gap between school curriculum and international standards. Focus on grammar precision and academic writing.",
    features: ["Cambridge Flyers/KET level", "Presentation and Social Skills", "Advanced Grammar Workshops", "Critical Thinking"],
    image: "https://picsum.photos/seed/learn/800/600",
    color: "bg-unihub-terracotta/10",
    textColor: "text-unihub-terracotta"
  },
  {
    age: "Young Adult",
    category: "College & Beyond",
    title: "IELTS & Communication",
    desc: "Intensive preparation for college students targeting IELTS 6.5+ and professional workplace communication.",
    features: ["IELTS Strategy Intensive", "Native Speaker Mock Tests", "Resume & Interview Prep", "Advanced Debate Classes"],
    image: "/src/assets/images/unihub_college_prep_1779176945889.png",
    color: "bg-unihub-sand/30",
    textColor: "text-unihub-navy"
  }
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
           <div className="bg-unihub-blue/10 text-unihub-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            Our Expertise
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-unihub-navy leading-[0.9] mb-8">
            Programs for <br/> Every <span className="text-unihub-blue italic font-normal serif">Milestone.</span>
          </h1>
          <p className="text-xl text-unihub-navy/60 leading-relaxed">
            From the first letter to the final exam, our structured pathways ensure consistent progress for students at all levels.
          </p>
        </div>

        <div className="space-y-32">
          {programs.map((program, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-[60px] overflow-hidden aspect-square lg:aspect-[4/5] shadow-2xl">
                   <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-unihub-navy">
                     {program.age}
                   </div>
                </div>
              </div>

              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                 <span className={`text-sm font-bold uppercase tracking-widest mb-4 block ${program.textColor}`}>
                   {program.category}
                 </span>
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-unihub-navy mb-6">
                   {program.title}
                 </h2>
                 <p className="text-lg text-unihub-navy/70 leading-relaxed mb-8">
                   {program.desc}
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                   {program.features.map((feature, idx) => (
                     <div key={idx} className="flex items-start gap-3">
                       <div className={`mt-1 p-0.5 rounded-full ${program.color} ${program.textColor}`}>
                         <Check size={14} />
                       </div>
                       <span className="text-sm font-medium text-unihub-navy/80">{feature}</span>
                     </div>
                   ))}
                 </div>

                 <Link to="/contact" className="unihub-button-primary inline-flex items-center gap-2">
                   Program Details <ArrowRight size={20} />
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

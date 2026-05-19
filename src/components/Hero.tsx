import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero({ imageUrl }: { imageUrl: string }) {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 pt-20 overflow-hidden bg-unihub-white">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-unihub-blue/5 rounded-[100px] rotate-12 -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-unihub-terracotta text-lg font-serif italic mb-6">
            Education for the Global Citizen
          </div>

          <h1 className="text-7xl md:text-9xl font-serif font-bold leading-[0.95] mb-8 text-unihub-navy">
            Speak with<br/> <span className="text-unihub-terracotta">Intention.</span>
          </h1>

          <p className="text-lg md:text-xl text-unihub-navy/60 leading-relaxed mb-10 max-w-md">
            A boutique English academy blending linguistic precision with cultural intelligence. Designed for leaders, thinkers, and explorers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/contact" className="unihub-button-primary uppercase tracking-widest text-[13px]">
              Book a Trial
            </Link>
          </div>

          <div className="pt-12 border-t border-unihub-sand flex gap-12">
            <div>
              <p className="text-3xl font-serif font-bold text-unihub-navy">12:1</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-unihub-navy/40 font-bold">Student Ratio</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-unihub-navy">15+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-unihub-navy/40 font-bold">Nationalities</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-unihub-navy">98%</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-unihub-navy/40 font-bold">Exam Success</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative unihub-card-organic-1 overflow-hidden aspect-[4/5] shadow-2xl bg-unihub-sand/30">
            <img
              src={imageUrl}
              alt="Unihub Classroom"
              className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-unihub-navy/5 max-w-[200px]"
          >
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-unihub-terracotta text-unihub-terracotta" />)}
            </div>
            <p className="text-sm font-medium text-unihub-navy">"The best environment for my kids to speak naturally."</p>
            <p className="text-[10px] text-unihub-navy/40 uppercase tracking-wider mt-2">— Minh Anh's Parent</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

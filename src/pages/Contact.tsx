import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', program: 'primary', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', program: 'primary', message: '' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormState('idle');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="bg-unihub-blue/10 text-unihub-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              Get in Touch
            </div>
            <h1 className="text-6xl font-display font-bold text-unihub-navy leading-[0.9] mb-8">
              Start Your <span className="text-unihub-blue italic font-normal serif">Journey</span> Today.
            </h1>
            <p className="text-xl text-unihub-navy/60 leading-relaxed mb-12">
              Have questions about our programs or want to book a free placement test? Our team is here to help you every step of the way.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-unihub-blue shadow-sm border border-unihub-navy/5">
                  <MapPin size={24} />
                </div>
                <div>
                   <h4 className="font-display font-bold text-lg text-unihub-navy mb-1">Our Center</h4>
                   <p className="text-unihub-navy/50 leading-relaxed">Lai Xá, Kim Chung, Hoài Đức, Hà Nội</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-unihub-blue shadow-sm border border-unihub-navy/5">
                  <Phone size={24} />
                </div>
                <div>
                   <h4 className="font-display font-bold text-lg text-unihub-navy mb-1">Call Us</h4>
                   <p className="text-unihub-navy/50 leading-relaxed">+84 123 456 789 (Vietnamese / English)</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-unihub-blue shadow-sm border border-unihub-navy/5">
                  <Mail size={24} />
                </div>
                <div>
                   <h4 className="font-display font-bold text-lg text-unihub-navy mb-1">Email</h4>
                   <p className="text-unihub-navy/50 leading-relaxed">hello@unihub.edu.vn</p>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="mt-16 rounded-[40px] overflow-hidden h-[300px] bg-unihub-sand/30 relative">
               <div className="absolute inset-0 flex items-center justify-center text-unihub-navy/20 font-display font-bold text-2xl uppercase tracking-widest">
                  Map View (Lai Xá)
               </div>
               {/* In a real app, use Google Maps component here */}
               <img 
                src="https://picsum.photos/seed/map/800/400?grayscale" 
                className="w-full h-full object-cover opacity-20 filter grayscale"
                referrerPolicy="no-referrer"
               />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 bg-unihub-navy rounded-full border-4 border-white animate-bounce shadow-2xl flex items-center justify-center text-white">
                    <MapPin size={16} />
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:pt-8">
            <div className="bg-white rounded-[60px] p-10 md:p-16 shadow-2xl shadow-unihub-navy/5 border border-unihub-navy/5 relative overflow-hidden">
               <AnimatePresence mode="wait">
                 {formState === 'success' ? (
                   <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                   >
                     <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle size={48} />
                     </div>
                     <h2 className="text-4xl font-display font-bold text-unihub-navy mb-4">Message Sent!</h2>
                     <p className="text-unihub-navy/60 mb-10">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                     <button 
                      onClick={() => setFormState('idle')}
                      className="unihub-button-outline"
                     >
                       Send Another Message
                     </button>
                   </motion.div>
                 ) : (
                   <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                   >
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-unihub-navy/40 ml-1">Student Name</label>
                         <input 
                           required
                           type="text"
                           placeholder="John Doe"
                           className="w-full bg-unihub-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-unihub-blue outline-none transition-all"
                           value={formData.name}
                           onChange={e => setFormData({...formData, name: e.target.value})}
                         />
                       </div>
                       <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-unihub-navy/40 ml-1">Email Address</label>
                         <input 
                           required
                           type="email"
                           placeholder="hello@example.com"
                           className="w-full bg-unihub-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-unihub-blue outline-none transition-all"
                           value={formData.email}
                           onChange={e => setFormData({...formData, email: e.target.value})}
                         />
                       </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-unihub-navy/40 ml-1">Interested Program</label>
                        <select 
                          className="w-full bg-unihub-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-unihub-blue outline-none transition-all appearance-none"
                          value={formData.program}
                          onChange={e => setFormData({...formData, program: e.target.value})}
                        >
                          <option value="primary">Primary English (Gr 1-3)</option>
                          <option value="secondary">Secondary Academic Prep</option>
                          <option value="ielts">College IELTS Intensive</option>
                          <option value="trial">Free Trial Class</option>
                        </select>
                     </div>

                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-unihub-navy/40 ml-1">Your Message</label>
                        <textarea 
                          rows={4}
                          placeholder="Tell us a bit about your background..."
                          className="w-full bg-unihub-white border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-unihub-blue outline-none transition-all resize-none"
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                        />
                     </div>

                     <button 
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full unihub-button-primary py-5 text-lg flex items-center justify-center gap-3 disabled:opacity-50"
                     >
                       {formState === 'loading' ? 'Sending...' : 'Send Message'}
                       <Send size={20} />
                     </button>
                   </motion.form>
                 )}
               </AnimatePresence>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm text-unihub-navy/40 px-8">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               <p>We typically respond within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

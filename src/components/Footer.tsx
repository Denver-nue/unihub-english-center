import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-unihub-navy text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-semibold tracking-widest uppercase text-white/60">
        <div>© 2024 UNIHUB EDUCATION GROUP</div>
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 bg-unihub-terracotta rounded-full" />
          <span>Hà Nội • Lai Xá • Hoài Đức</span>
        </div>
        <div>Enrollment Open Autumn 2024</div>
      </div>
    </footer>
  );
}

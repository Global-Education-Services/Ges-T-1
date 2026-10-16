import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GES_DATA } from '../../data/gesContent';
import { useModal } from '../../context/ModalContext';
import { ArrowRight, Download, Mail, Phone, MapPin, CheckCircle, AlertCircle, X, Shield, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { openModal } = useModal();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterMsg, setNewsletterMsg] = useState('');
  const [showCookieNotice, setShowCookieNotice] = useState(true);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterStatus('error');
      setNewsletterMsg('Please enter a valid email address.');
      return;
    }

    // Save to localStorage or state to simulate reliable submission
    try {
      const existing = JSON.parse(localStorage.getItem('ges_subscribers') || '[]');
      existing.push({ email: newsletterEmail, timestamp: new Date().toISOString() });
      localStorage.setItem('ges_subscribers', JSON.stringify(existing));
    } catch (e) {
      // ignore
    }

    setNewsletterStatus('success');
    setNewsletterMsg('Thank you for subscribing to GES Quality Education updates!');
    setNewsletterEmail('');
    setTimeout(() => {
      setNewsletterStatus('idle');
      setNewsletterMsg('');
    }, 6000);
  };

  return (
    <>
      <footer className="bg-brand-primary-dark text-white border-t border-brand-primary-light/30 pt-16 pb-12 relative overflow-hidden">
        {/* Subtle decorative background gradient circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-brand-primary-light/40">
            {/* Column 1: Brand & Slogan */}
            <div className="lg:col-span-2 space-y-5">
              <Link to="/" className="inline-block">
                <img 
                  src={GES_DATA.brand.logos.darkBg} 
                  alt="GES Quality Education"
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                Global Education Services Company (GES Quality Education) is Oman's premier private education group, delivering world-class K-12 British curriculum schools, preschools, and early learning centers since 2012.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/80 border border-brand-primary-light text-slate-200">
                  <Shield className="w-3.5 h-3.5 text-brand-gold" />
                  Cognia Accredited
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/80 border border-brand-primary-light text-slate-200">
                  <Globe className="w-3.5 h-3.5 text-brand-green" />
                  Oman Vision 2040
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Quick Links</h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {GES_DATA.navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="hover:text-brand-accent transition flex items-center gap-1.5">
                      <ArrowRight className="w-3 h-3 text-brand-accent opacity-60" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Institutions & Campuses */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Our Institutions</h3>
              <ul className="space-y-3 text-xs text-slate-300">
                {GES_DATA.schools.map((school) => (
                  <li key={school.id} className="group">
                    <Link to="/schools" className="hover:text-white transition block">
                      <span className="font-semibold text-slate-100 group-hover:text-brand-accent transition block">{school.shortName}</span>
                      <span className="text-[11px] text-slate-400 block">{school.location.split(',')[0]}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Newsletter & Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">Stay Informed</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Subscribe to receive the latest academic publications, campus news, and corporate reports.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-brand-primary/80 border border-brand-primary-light/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-lg transition flex items-center justify-center text-xs font-semibold"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {newsletterStatus === 'success' && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium pt-1">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{newsletterMsg}</span>
                  </div>
                )}
                {newsletterStatus === 'error' && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-400 font-medium pt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{newsletterMsg}</span>
                  </div>
                )}
              </form>

              <div className="pt-2">
                <button
                  onClick={() => openModal('downloads')}
                  className="inline-flex items-center gap-2 text-xs text-brand-gold hover:underline font-semibold"
                >
                  <Download className="w-3.5 h-3.5" /> Download Corporate Brochure (PDF)
                </button>
              </div>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-brand-primary-light/40 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Headquarters:</span>
                <span>{GES_DATA.brand.headquarters.address}, {GES_DATA.brand.headquarters.city}, {GES_DATA.brand.headquarters.country}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Telephone:</span>
                <a href={`tel:${GES_DATA.brand.headquarters.phone}`} className="hover:text-white transition">
                  {GES_DATA.brand.headquarters.phoneFormatted}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Inquiries:</span>
                <a href={`mailto:${GES_DATA.brand.headquarters.email}`} className="hover:text-white transition">
                  {GES_DATA.brand.headquarters.email}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © 2025 Global Education Services L.L.C. (GES Quality Education). All Rights Reserved.
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4">
              {GES_DATA.brand.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-brand-primary/80 hover:bg-brand-accent text-slate-300 hover:text-white flex items-center justify-center transition"
                  aria-label={s.name}
                >
                  <span className="font-bold text-xs">{s.name[0]}</span>
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <button onClick={() => openModal('terms')} className="hover:text-white transition">
                Terms & Conditions
              </button>
              <span>•</span>
              <button onClick={() => openModal('privacy')} className="hover:text-white transition">
                Privacy Policy
              </button>
              <span>•</span>
              <button onClick={() => openModal('cookies')} className="hover:text-white transition">
                Cookies Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Cookie Policy Notice */}
      {showCookieNotice && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-white text-slate-900 p-5 rounded-2xl shadow-floating border border-slate-200 animate-fadeIn">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-brand-primary uppercase tracking-wider">Cookie Policy</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We use cookies to optimize performance and enrich your browsing experience across the GES portal. Read our{' '}
                <button onClick={() => openModal('cookies')} className="text-brand-accent underline font-semibold">
                  cookie policy
                </button>.
              </p>
            </div>
            <button
              onClick={() => setShowCookieNotice(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              aria-label="Close cookie notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-3 flex justify-end">
            <button
              onClick={() => setShowCookieNotice(false)}
              className="px-4 py-1.5 rounded-lg bg-brand-primary text-white text-xs font-bold hover:bg-brand-primary-light transition"
            >
              Acknowledge & Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

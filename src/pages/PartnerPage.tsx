import React, { useState } from 'react';
import { GES_DATA } from '../data/gesContent';
import { ArrowRight, CheckCircle, ExternalLink, Shield, Handshake, Building, Users, Send } from 'lucide-react';

export const PartnerPage: React.FC = () => {
  const [partnerForm, setPartnerForm] = useState({
    orgName: '',
    contactPerson: '',
    email: '',
    mobile: '',
    partnershipType: 'Complete Management',
    territory: 'Oman',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.orgName || !partnerForm.email) return;

    try {
      const existing = JSON.parse(localStorage.getItem('ges_partner_inquiries') || '[]');
      existing.push({ ...partnerForm, timestamp: new Date().toISOString() });
      localStorage.setItem('ges_partner_inquiries', JSON.stringify(existing));
    } catch (e) {
      // ignore
    }

    setSubmitted(true);
    setPartnerForm({
      orgName: '',
      contactPerson: '',
      email: '',
      mobile: '',
      partnershipType: 'Complete Management',
      territory: 'Oman',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 7000);
  };

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/assets/img/banners/partner.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Discover Opportunities • Investment
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-white">
              Partner With Global Education Services
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Collaborate with Oman's premier education group through Complete Management, Licensing Agreements, Public-Private Partnerships, and Territorial Franchising.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PARTNERSHIP INTRODUCTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Strategic Alliance</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary">
                Expanding Institutional Horizons
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  GES aims to expand and establish a premier network of schools, nurseries, and training institutes both in Oman and internationally. Schools signing a complete management agreement with GES benefit from a wide range of educational products, curriculum frameworks, and administrative services designed for Pre-K/K-12 schools.
                </p>
                <p>
                  As an educational management organization that manages schools in both the private and public sectors, we offer flexible collaborative options tailored to investor objectives and ministerial frameworks.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-floating border border-slate-200">
                <img
                  src="/assets/img/partners/partner-bg.jpg"
                  alt="Partner With GES Quality Education"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-xs">
                    <span className="font-bold text-brand-gold uppercase tracking-wider block mb-1">Collaborative Growth</span>
                    <span>Delivering long-term institutional value across Oman and the GCC.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MANAGEMENT MODELS GRID */}
      <section className="py-20 bg-brand-surface border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Collaboration Frameworks</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary">
              Management & Investment Options
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GES_DATA.operationalModels.map((m) => (
              <div key={m.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle hover:shadow-premium transition flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="text-2xl font-serif font-extrabold text-brand-accent">{m.num}</div>
                  <h3 className="font-bold text-base text-brand-primary">{m.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.subtitle}</p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-6">
                  <span className="text-xs font-bold text-brand-blue flex items-center gap-1">
                    Explore Model <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5: BRANDS, PARTNERS & ACCREDITATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Official Accreditations & Regulators</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary">
              Our Brands & Institutional Partners
            </h2>
            <p className="text-sm text-slate-600">
              Collaborating closely with leading Omani ministries and international accrediting bodies.
            </p>
          </div>

          {/* Partner Regulators Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {GES_DATA.partnersAndAccreditations.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-2xl bg-brand-surface border border-slate-200 hover:border-brand-primary shadow-subtle flex flex-col items-center justify-center text-center transition group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain mb-3 grayscale group-hover:grayscale-0 transition duration-300"
                />
                <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{partner.name}</h4>
                <span className="text-[10px] text-brand-accent font-semibold">{partner.type}</span>
              </a>
            ))}
          </div>

          {/* Cognia Endorsement Quote */}
          <div className="bg-hero-gradient text-white rounded-3xl p-8 sm:p-12 shadow-floating relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">Global Quality Seal</span>
              <p className="text-base sm:text-lg md:text-xl font-serif italic text-white/95 leading-relaxed">
                {GES_DATA.cogniaEndorsement.quote}
              </p>
              <div className="pt-2">
                <span className="font-bold text-sm block">{GES_DATA.cogniaEndorsement.speaker}</span>
                <span className="text-xs text-slate-300">{GES_DATA.cogniaEndorsement.speakerTitle}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PARTNER ENQUIRY FORM */}
      <section className="py-24 bg-brand-surface border-t border-slate-200" id="be-partner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-floating">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Partner Inquiry</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary">
                Initiate a Partnership Discussion
              </h2>
              <p className="text-xs text-slate-600">
                Interested in launching or transitioning an educational facility with GES? Submit your institutional details below.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>✓ Partnership inquiry successfully received. Our corporate development team will contact you within 24 hours.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Organization / Investor Name *</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.orgName}
                    onChange={(e) => setPartnerForm({ ...partnerForm, orgName: e.target.value })}
                    placeholder="e.g. Al Hashar Holding"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.contactPerson}
                    onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                    placeholder="e.g. Tariq Al Balushi"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    placeholder="tariq@organization.om"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Direct Phone Number</label>
                  <input
                    type="tel"
                    value={partnerForm.mobile}
                    onChange={(e) => setPartnerForm({ ...partnerForm, mobile: e.target.value })}
                    placeholder="+968 9123 4567"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Partnership Interest</label>
                  <select
                    value={partnerForm.partnershipType}
                    onChange={(e) => setPartnerForm({ ...partnerForm, partnershipType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  >
                    <option value="Complete Management">Complete School Management</option>
                    <option value="Public-Private Partnership">Public-Private Partnership (PPP)</option>
                    <option value="Licensing Program">Licensing Agreement</option>
                    <option value="Master Franchise">Master Franchise</option>
                    <option value="Capital Investment">Educational Capital Investment</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Target Territory / Location</label>
                  <input
                    type="text"
                    value={partnerForm.territory}
                    onChange={(e) => setPartnerForm({ ...partnerForm, territory: e.target.value })}
                    placeholder="e.g. Muscat / Dhofar / GCC"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Institutional Overview / Project Scope</label>
                <textarea
                  rows={4}
                  value={partnerForm.message}
                  onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                  placeholder="Tell us about the existing or planned campus, estimated student capacity, and investment timeline..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition shadow-sm hover:shadow-glow-crimson flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Partnership Proposal</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

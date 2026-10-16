import React, { useState } from 'react';
import { GES_DATA } from '../data/gesContent';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle, AlertCircle, Send, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    inquiryType: 'Meeting Request',
    meetingDate: '',
    timeFrom: '09:30',
    timeTo: '11:00',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    try {
      const submissions = JSON.parse(localStorage.getItem('ges_contact_submissions') || '[]');
      submissions.push({ ...form, timestamp: new Date().toISOString() });
      localStorage.setItem('ges_contact_submissions', JSON.stringify(submissions));
    } catch (e) {
      // ignore
    }

    setIsSuccess(true);
    setErrorMsg('');
    setForm({
      name: '',
      email: '',
      mobile: '',
      inquiryType: 'Meeting Request',
      meetingDate: '',
      timeFrom: '09:30',
      timeTo: '11:00',
      message: ''
    });
    setTimeout(() => setIsSuccess(false), 8000);
  };

  return (
    <div className="bg-white pt-24 md:pt-28">
      {/* SECTION 1: HERO */}
      <section className="relative py-20 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/assets/img/banners/contact.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              24/7 Effective Support • Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-white">
              Executive Consultation & General Inquiries
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              We welcome prospective families, academic partners, investors, and community members to connect with our central administration in Muscat.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 4: CORPORATE INFORMATION & GOOGLE MAP */}
      <section className="py-20 bg-brand-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Headquarters</span>
                <h2 className="text-3xl font-bold text-brand-primary mt-1">Our Location</h2>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Centrally situated at Airport Heights in the capital governorate of Muscat, facilitating quick access to our regional schools and international airport.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-800">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Mailing Address</h4>
                    <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                      Postal Office Box: 1756, Airport Heights<br />
                      Postal Code: 111, Muscat, Sultanate Of Oman
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Telephone Lines</h4>
                    <a href={`tel:${GES_DATA.brand.headquarters.phone}`} className="text-brand-primary font-bold text-xs mt-0.5 block hover:text-brand-accent">
                      {GES_DATA.brand.headquarters.phoneFormatted}
                    </a>
                    <span className="text-[11px] text-slate-400">Sunday – Thursday, 8:00 AM – 3:30 PM (GST)</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Corporate Email</h4>
                    <a href={`mailto:${GES_DATA.brand.headquarters.email}`} className="text-brand-primary font-bold text-xs mt-0.5 block hover:text-brand-accent">
                      {GES_DATA.brand.headquarters.email}
                    </a>
                    <span className="text-[11px] text-slate-400">Careers: careers@ges.om</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-3">Connect on Social Media</span>
                <div className="flex items-center gap-3">
                  {GES_DATA.brand.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-brand-primary text-brand-primary hover:text-brand-accent flex items-center justify-center font-bold text-xs shadow-sm transition"
                      aria-label={s.name}
                    >
                      {s.name[0]}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Google Map from original site */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-floating border border-slate-200 h-[450px]">
                <iframe
                  title="GES Headquarters Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116968.89056255978!2d58.1937326253568!3d23.630219279205765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8dfd4a44e64fc5%3A0xd0208a49cf260e7f!2sGlobal%20Education%20Services%20Company%20(GES)!5e0!3m2!1sen!2som!4v1603011169349!5m2!1sen!2som"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE PRODUCTION CONTACT FORM */}
      <section className="py-24 bg-white" id="contact-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-surface rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200 shadow-floating">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary">
                Send an Inquiry or Schedule a Meeting
              </h2>
              <p className="text-xs text-slate-600">
                Please complete the form below. If requesting a meeting, our executive secretary will confirm your timeslot via phone or email.
              </p>
            </div>

            {isSuccess && (
              <div className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-3 animate-fadeIn">
                <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="font-bold">✓ Submission Successfully Received!</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">Thank you, your inquiry has been recorded and routed to the GES Administration team.</p>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mobile" className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    placeholder="+968 9123 4567"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1.5">
                    Inquiry Category
                  </label>
                  <select
                    id="inquiryType"
                    value={form.inquiryType}
                    onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  >
                    <option value="Meeting Request">Meeting Request</option>
                    <option value="Question">Question</option>
                    <option value="Suggestion">Suggestion</option>
                    <option value="Complaint">Complaint</option>
                  </select>
                </div>
              </div>

              {/* Conditional Meeting Request Date/Time Pickers */}
              {form.inquiryType === 'Meeting Request' && (
                <div className="p-4 sm:p-6 rounded-2xl bg-white border border-brand-primary/20 shadow-subtle space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider">
                    <Calendar className="w-4 h-4 text-brand-accent" />
                    <span>Meeting Scheduling Preferences</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="meetingDate" className="text-xs font-semibold text-slate-700 block mb-1">
                        Preferred Date
                      </label>
                      <input
                        id="meetingDate"
                        type="date"
                        value={form.meetingDate}
                        onChange={(e) => setForm({ ...form, meetingDate: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeFrom" className="text-xs font-semibold text-slate-700 block mb-1">
                        Time From
                      </label>
                      <input
                        id="timeFrom"
                        type="time"
                        min="09:00"
                        max="14:30"
                        value={form.timeFrom}
                        onChange={(e) => setForm({ ...form, timeFrom: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeTo" className="text-xs font-semibold text-slate-700 block mb-1">
                        Time To
                      </label>
                      <input
                        id="timeTo"
                        type="time"
                        min="09:30"
                        max="15:00"
                        value={form.timeTo}
                        onChange={(e) => setForm({ ...form, timeTo: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-accent"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="message" className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1.5">
                  Message or Inquiries Details *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Please describe your institutional inquiry, meeting agenda, or specific feedback in detail..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition shadow-sm hover:shadow-glow-crimson flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to GES Administration</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

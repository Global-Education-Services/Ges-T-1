import React, { useState } from 'react';
import { GES_DATA } from '../data/gesContent';
import { ArrowRight, CheckCircle, Upload, Send, Briefcase, GraduationCap, Award, HeartHandshake } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [careerForm, setCareerForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    position: 'Classroom Teacher (Primary / Secondary)',
    subject: '',
    experience: '3-5 years',
    highestDegree: "Master's Degree",
    coverLetter: '',
    fileName: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCareerForm({ ...careerForm, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!careerForm.fullName || !careerForm.email) return;

    try {
      const existing = JSON.parse(localStorage.getItem('ges_career_applications') || '[]');
      existing.push({ ...careerForm, timestamp: new Date().toISOString() });
      localStorage.setItem('ges_career_applications', JSON.stringify(existing));
    } catch (e) {
      // ignore
    }

    setIsSubmitted(true);
    setCareerForm({
      fullName: '',
      email: '',
      mobile: '',
      position: 'Classroom Teacher (Primary / Secondary)',
      subject: '',
      experience: '3-5 years',
      highestDegree: "Master's Degree",
      coverLetter: '',
      fileName: ''
    });
    setTimeout(() => setIsSubmitted(false), 8000);
  };

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/assets/img/banners/careers.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Build Your Career @ GES Network
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-white">
              Inspire the Next Generation of Global Leaders
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Join our international faculty and administrative team across premier K-12 campuses and early learning centers in the Sultanate of Oman.
            </p>
            <div className="pt-2">
              <a
                href="#apply-online"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-glow-crimson"
              >
                <span>Apply Online Today</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WORKING AT GES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Faculty Excellence</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary">
                Working at GES Quality Education
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  GES is an internationally accredited education management organization, ensuring compliance with global best practices in quality assurance and continuous advancement. We manage schools, offering complete management, licensing agreements, public-private partnerships, and charter school agreements.
                </p>
                <p>
                  A high-caliber academic and administrative team is key to our success. GES recruits top professionals globally and provides continuous professional development to maintain the highest standards. A structured appraisal system ensures accountability, mentoring, and performance-based career growth.
                </p>
                <p>
                  Through strategic leadership and internationally recognized best practices, GES empowers institutions to deliver world-class education and shape the future of learning.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-brand-surface border border-slate-200 text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mx-auto">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-brand-primary">Global Standards</h3>
                <p className="text-xs text-slate-500">British National Curriculum & Reggio Emilia pedagogy</p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-surface border border-slate-200 text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mx-auto">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-brand-primary">Continuous CPD</h3>
                <p className="text-xs text-slate-500">Structured mentoring & leadership pipelines</p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-surface border border-slate-200 text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mx-auto">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-brand-primary">Competitive Package</h3>
                <p className="text-xs text-slate-500">Tax-free salary, healthcare, visa & accommodation</p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-surface border border-slate-200 text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mx-auto">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-brand-primary">Community</h3>
                <p className="text-xs text-slate-500">Safe, welcoming and culturally rich Omani lifestyle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: APPLICATION PROCESS (WHAT TO EXPECT) */}
      <section className="py-24 bg-brand-surface border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Hiring Journey</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary">
              What to Expect
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our 6-stage recruitment roadmap guarantees merit-based assessment, transparency, and personal candidate support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {GES_DATA.careerSteps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle hover:shadow-premium transition flex flex-col justify-between text-center group"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 p-3 mx-auto mb-4 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition">
                    <img src={step.img} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs font-serif font-extrabold text-brand-accent block mb-1">
                    Stage {step.num}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: APPLY ONLINE FORM */}
      <section className="py-24 bg-white" id="apply-online">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-surface rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-floating">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Job Candidate Portal</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary">
                Submit Your Application
              </h2>
              <p className="text-xs text-slate-600">
                Please provide accurate academic qualifications and employment history for Ministry of Education verification.
              </p>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>✓ Application successfully recorded! Our recruitment team will review your CV within 5 business days.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={careerForm.fullName}
                    onChange={(e) => setCareerForm({ ...careerForm, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={careerForm.email}
                    onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
                    placeholder="eleanor@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Mobile / WhatsApp</label>
                  <input
                    type="tel"
                    value={careerForm.mobile}
                    onChange={(e) => setCareerForm({ ...careerForm, mobile: e.target.value })}
                    placeholder="+968 9123 4567"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Target Position</label>
                  <select
                    value={careerForm.position}
                    onChange={(e) => setCareerForm({ ...careerForm, position: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  >
                    <option value="Classroom Teacher (Primary / Secondary)">Classroom Teacher (Primary / Secondary)</option>
                    <option value="Early Childhood Educator (Reggio Emilia / EYFS)">Early Childhood Educator (Reggio Emilia / EYFS)</option>
                    <option value="Head of Department (STEM / Humanities)">Head of Department (STEM / Humanities)</option>
                    <option value="School Leadership / Vice Principal">School Leadership / Vice Principal</option>
                    <option value="Administrative / Finance / HR Professional">Administrative / Finance / HR Professional</option>
                    <option value="School Counselor / Special Educational Needs">School Counselor / SEN Specialist</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Subject Specialization</label>
                  <input
                    type="text"
                    value={careerForm.subject}
                    onChange={(e) => setCareerForm({ ...careerForm, subject: e.target.value })}
                    placeholder="e.g. Mathematics, English, Early Years"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Teaching Experience</label>
                  <select
                    value={careerForm.experience}
                    onChange={(e) => setCareerForm({ ...careerForm, experience: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  >
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="6-10 years">6-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Highest Degree</label>
                  <select
                    value={careerForm.highestDegree}
                    onChange={(e) => setCareerForm({ ...careerForm, highestDegree: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  >
                    <option value="Bachelor's Degree">Bachelor's Degree + PGCE/QTS</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="Doctorate / PhD">Doctorate / PhD</option>
                    <option value="Diploma in Early Childhood">Diploma in Early Childhood</option>
                  </select>
                </div>
              </div>

              {/* Resume Upload Simulation */}
              <div>
                <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Curriculum Vitae / Resume (PDF or DOC)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-5 text-center bg-white hover:bg-slate-50 transition cursor-pointer relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                    <Upload className="w-6 h-6 text-brand-accent" />
                    <span className="text-xs text-slate-700 font-semibold">
                      {careerForm.fileName ? `Selected: ${careerForm.fileName}` : 'Click or drag your CV file here (Max 10MB)'}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">Statement of Educational Philosophy</label>
                <textarea
                  rows={4}
                  value={careerForm.coverLetter}
                  onChange={(e) => setCareerForm({ ...careerForm, coverLetter: e.target.value })}
                  placeholder="Summarize your teaching ethos, classroom management style, and reasons for joining GES Oman..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition shadow-sm hover:shadow-glow-crimson flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Candidate Application</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 5: CAREER ENQUIRIES */}
      <section className="py-16 bg-brand-surface border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-brand-primary">Direct Recruitment Enquiries</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Questions regarding licensing clearances, overseas relocation, or administrative vacancies?
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-700 font-semibold pt-2">
            <span>Email: <a href="mailto:careers@ges.om" className="text-brand-accent">careers@ges.om</a></span>
            <span>•</span>
            <span>Tel: <a href="tel:+96824554422" className="text-brand-primary">+968 24554422</a></span>
            <span>•</span>
            <span>HQ: Airport Heights, P.O. Box 1756, Muscat, Oman</span>
          </div>
        </div>
      </section>
    </div>
  );
};

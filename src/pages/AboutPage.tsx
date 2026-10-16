import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GES_DATA } from '../data/gesContent';
import { useModal } from '../context/ModalContext';
import { ArrowRight, Calendar, Award, Shield, User, ChevronRight, Download } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openModal } = useModal();
  const [selectedLeader, setSelectedLeader] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* SECTION 1: ABOUT HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/assets/img/banners/about.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Inside Our Community
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-white">
              A Definitive Statement of Excellence in Quality Education
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Founded in 2012 by the Al Hashmi family to champion world-class academic standards, sustainable facilities, and ethical leadership in the Sultanate of Oman.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORPORATE INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Institutional Vision</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary">
                About GES Quality Education
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Global Education Services L.L.C. (GES Quality Education) was established as Oman’s premier private education group, recognized internationally for its commitment to technology, knowledge, and innovation. Leveraging Oman’s stability, GES attracts, develops, and retains top talent from the region and beyond.
                </p>
                <p>
                  Over the years, GES has built a team of experienced experts specializing in opening new schools, revitalizing struggling institutions, and enhancing existing ones. Guided by long-term investment strategies and sustainable education policies, GES is committed to supporting Oman’s Vision 2040 and global educational goals.
                </p>
                <p>
                  As GES celebrates 13 years of excellence in 2025, it remains dedicated to fostering productive learning environments, ensuring equitable resource allocation, and delivering effective leadership to meet the needs of all learners.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => openModal('downloads')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
                >
                  <Download className="w-4 h-4 text-brand-gold" />
                  <span>Download Corporate Brochure (PDF)</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-brand-surface rounded-3xl p-8 border border-slate-200 shadow-subtle space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-serif text-xl font-bold">
                    13
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Years of Educational Leadership</h3>
                    <p className="text-xs text-slate-500">2012 — 2025</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">Founder & Chairman</span>
                    <span>Sheikh Salim Hamood Al Hashmi</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">Jurisdiction</span>
                    <span>Sultanate of Oman</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-800">Accreditations</span>
                    <span className="text-brand-blue font-bold">Cognia & Pearson Edexcel</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-semibold text-slate-800">Network Reach</span>
                    <span>5,000+ Students & 700+ Faculty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR JOURNEY & VERIFIED TIMELINE */}
      <section className="py-24 bg-brand-surface border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Milestones & History</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary">
              Our Journey of Excellence
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              From our founding in 2012 to our 13th anniversary in 2025, every milestone reflects our dedication to elevating education in Oman.
            </p>
          </div>

          <div className="relative">
            {/* Center Timeline Line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12">
              {GES_DATA.timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Circle marker on center line */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand-accent items-center justify-center shadow-md z-10">
                      <div className="w-2 h-2 rounded-full bg-brand-primary" />
                    </div>

                    {/* Content Card */}
                    <div className="w-full lg:w-1/2 lg:px-10">
                      <div className={`p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:shadow-premium transition-all duration-300 ${item.highlight ? 'border-l-4 border-l-brand-accent' : ''}`}>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-extrabold font-serif text-brand-accent">{item.year}</span>
                          {item.highlight && (
                            <span className="px-2.5 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-wider">
                              Key Milestone
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-brand-primary mb-2">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MANAGEMENT TEAM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Executive Governance</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary">
              Our Management Team
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Distinguished education leaders, strategists, and administrators steering the future of learning at GES.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {GES_DATA.managementTeam.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-brand-surface rounded-2xl p-6 border border-slate-200 hover:border-brand-primary shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md mb-5 group-hover:scale-105 transition duration-500">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-base text-brand-primary group-hover:text-brand-accent transition">
                  {leader.name}
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent mt-1 mb-3">
                  {leader.role}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>

          {/* Vice President Feature */}
          <div className="mt-16 bg-brand-surface rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex justify-center">
              <img
                src={GES_DATA.vicePresidentMessage.photo}
                alt={GES_DATA.vicePresidentMessage.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
            <div className="lg:col-span-9 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Vice President Perspective</span>
              <p className="text-base sm:text-lg font-serif italic text-slate-800 leading-relaxed">
                {GES_DATA.vicePresidentMessage.quote}
              </p>
              <div className="font-bold text-sm text-brand-primary">
                {GES_DATA.vicePresidentMessage.name} • <span className="text-slate-500 font-normal">{GES_DATA.vicePresidentMessage.title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6: OUR DOORS & RELATED INSTITUTIONS */}
      <section className="py-24 bg-brand-surface border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Our Doors</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary">
              We Are Always Open to Learners
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              GES Quality Education operates world-class K-12 schools, preschools, and early learning centers in the Sultanate of Oman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GES_DATA.schools.slice(0, 3).map((school) => (
              <div 
                key={school.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={school.mainImg} alt={school.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-4 left-4">
                    <img src={school.logo} alt="" className="h-10 w-auto p-1 bg-white/90 backdrop-blur rounded shadow" />
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-accent transition">
                      {school.name}
                    </h3>
                    <p className="text-xs text-brand-accent font-semibold">📍 {school.location}</p>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{school.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => openModal(school.id === 'sips' ? 'school-sips' : school.id === 'shomoukh-qurum' ? 'school-qurum' : 'school-mouj')}
                      className="text-xs font-bold text-brand-primary hover:text-brand-accent transition"
                    >
                      View Details
                    </button>
                    <a
                      href={school.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-azure"
                    >
                      <span>Website</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/schools"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
            >
              <span>Explore All Campuses & Galleries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GES_DATA } from '../data/gesContent';
import { useModal } from '../context/ModalContext';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  CheckCircle, 
  Award, 
  Building2, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Send 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { openVideo, openModal } = useModal();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isChairmanExpanded, setIsChairmanExpanded] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [activeSchoolTab, setActiveSchoolTab] = useState(0);

  // Contact quick form state
  const [quickForm, setQuickForm] = useState({
    name: '',
    email: '',
    mobile: '',
    type: 'Meeting Request',
    date: '',
    time: '10:00',
    message: ''
  });
  const [quickFormSuccess, setQuickFormSuccess] = useState(false);

  // Auto-advance hero slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % GES_DATA.heroThemes.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentTheme = GES_DATA.heroThemes[activeSlide];

  const handleQuickFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.name || !quickForm.email || !quickForm.message) return;

    try {
      const submissions = JSON.parse(localStorage.getItem('ges_inquiries') || '[]');
      submissions.push({ ...quickForm, timestamp: new Date().toISOString() });
      localStorage.setItem('ges_inquiries', JSON.stringify(submissions));
    } catch (e) {
      // ignore
    }

    setQuickFormSuccess(true);
    setQuickForm({
      name: '',
      email: '',
      mobile: '',
      type: 'Meeting Request',
      date: '',
      time: '10:00',
      message: ''
    });
    setTimeout(() => setQuickFormSuccess(false), 7000);
  };

  return (
    <div className="bg-white">
      {/* 5.2 SIGNATURE LANDING HERO */}
      <section className="relative min-h-[90vh] md:min-h-screen bg-hero-gradient text-white flex flex-col justify-between pt-24 md:pt-32 pb-12 overflow-hidden">
        {/* Architectural atmospheric background lights */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-accent/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 z-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-wider font-bold text-slate-200">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span>{currentTheme.tag}</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                  {currentTheme.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                  {currentTheme.subtitle}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to={currentTheme.ctaLink}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-glow-crimson transform hover:-translate-y-0.5"
                >
                  <span>{currentTheme.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={currentTheme.secondaryCtaLink}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <span>{currentTheme.secondaryCtaText}</span>
                </Link>
              </div>

              {/* Badge */}
              <div className="pt-4 flex items-center gap-3 text-xs text-slate-300 border-t border-white/10">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{currentTheme.badge}</span>
                <span className="text-white/40">•</span>
                <span>Oman Vision 2040 Partner</span>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-square flex items-center justify-center">
                {/* Visual frame ring */}
                <div className="absolute inset-0 rounded-3xl border border-white/20 rotate-3 transition-transform duration-700" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-primary-light/50 to-transparent -rotate-3 transition-transform duration-700" />

                {/* Hero Theme Image with safe contain & high fidelity */}
                <div className="relative z-10 w-full h-full p-4 flex items-center justify-center">
                  <img
                    src={currentTheme.image}
                    alt={currentTheme.title}
                    className="max-h-[75vh] w-auto max-w-full object-contain filter drop-shadow-2xl transition-all duration-500 hover:scale-102"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Slider Selector Bar (Preserving all 4 themes permanently accessible) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-white/15 pt-6">
            {GES_DATA.heroThemes.map((theme, index) => {
              const isActive = activeSlide === index;
              return (
                <button
                  key={theme.id}
                  onClick={() => setActiveSlide(index)}
                  className={`text-left p-3 rounded-xl transition-all duration-300 border ${
                    isActive
                      ? 'bg-white/15 border-brand-accent shadow-sm'
                      : 'bg-white/5 border-transparent hover:bg-white/10'
                  }`}
                  aria-label={`Go to slide ${index + 1}: ${theme.tag}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-slate-400">{theme.number}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />}
                  </div>
                  <h2 className="text-xs sm:text-sm font-bold text-white truncate">{theme.tag}</h2>
                  <p className="text-[11px] text-slate-300 hidden sm:block truncate mt-0.5">{theme.title}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.3 OUR IMPACT STATISTICS */}
      <section className="py-20 bg-brand-surface relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Measurable Excellence</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary mt-2">
                Our Impact Across Oman
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Empowering minds through academic excellence, sustainable innovation, and ethical leadership in the Sultanate of Oman.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {GES_DATA.impactStats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-subtle hover:shadow-premium transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/5 flex items-center justify-center p-2.5 group-hover:bg-brand-primary/10 transition">
                    <img src={stat.icon} alt={stat.label} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs font-bold text-slate-300 group-hover:text-brand-accent transition">0{idx + 1}</span>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-brand-primary tracking-tight font-serif mb-2">
                  {stat.value}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{stat.label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{stat.sublabel}</p>
              </div>
            ))}
          </div>

          {/* Awards Banner strip */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-primary-light text-white shadow-premium flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-brand-gold font-bold">Accolades & Accreditations</span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Alam Al Iktisaad Best Company (2021 & 2022) & Cognia Global Accreditation
                </h4>
              </div>
            </div>
            <button
              onClick={() => openModal('downloads')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition shrink-0"
            >
              <span>View Awards Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5.4 ABOUT GES QUALITY EDUCATION (Split Editorial) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-floating border border-slate-200">
                <img
                  src="/assets/img/project-1.jpg"
                  alt="GES Quality Education Campus Entrance"
                  className="w-full h-[450px] object-cover hover:scale-102 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-gold block mb-1">Established 2012</span>
                  <p className="text-sm font-semibold text-slate-100">
                    A transformative educational journey envisioned by the Al Hashmi family.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block p-6 rounded-2xl bg-brand-accent text-white shadow-glow-crimson max-w-xs z-10">
                <div className="text-3xl font-extrabold font-serif">13 Years</div>
                <div className="text-xs font-medium uppercase tracking-wider mt-1">Of Uncompromising Academic Excellence</div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Homegrown Legacy</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary tracking-tight leading-tight">
                About GES Quality Education
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-slate-900">Global Education Services Company “GES” Quality Education</strong> is a leading private education group in the Sultanate of Oman, dedicated to delivering world-class K-12 premium schools, preschools, and early learning centers. Since our founding in 2012, GES has been committed to nurturing young minds and empowering them with the knowledge, skills, and values needed to thrive in an ever-changing world.
                </p>
                <p>
                  As a homegrown Omani brand, GES is the lifelong dream of the Al Hashmi family, who envisioned a transformative educational journey for the children of Oman. Our mission is to provide quality education that inspires innovation, fosters leadership, and cultivates a lifelong love for learning.
                </p>
                <p>
                  Over the years, GES’s team of top-tier talented experts with extensive experience has focused on opening new schools, turning around failing schools, and growing and improving existing ones. 2025 marks our 13th year since establishment, maintaining an unwavering commitment to continuous improvement on productive learning environments, equitable resource allocation, and effective leadership.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
                >
                  <span>Read Full About Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/schools"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-brand-primary text-xs font-bold uppercase tracking-wider transition"
                >
                  <span>Explore Campuses</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 SMARTER EDUCATIONAL SERVICES */}
      <section className="py-24 bg-brand-surface border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Comprehensive Solutions</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary mt-2">
                Smarter Educational Services
              </h2>
            </div>
            <Link
              to="/operational"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-azure transition"
            >
              <span>Explore Operational Models</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive Index Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Service Navigation Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {GES_DATA.operationalModels.map((model, idx) => {
                const isActive = activeServiceTab === idx;
                return (
                  <button
                    key={model.id}
                    onClick={() => setActiveServiceTab(idx)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                      isActive
                        ? 'bg-white border-brand-primary shadow-premium -translate-x-1'
                        : 'bg-white/60 hover:bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-extrabold text-brand-accent">{model.num}</span>
                      <ChevronRight className={`w-4 h-4 transition ${isActive ? 'rotate-90 text-brand-accent' : 'text-slate-400'}`} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-brand-primary">{model.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{model.subtitle}</p>
                  </button>
                );
              })}
            </div>

            {/* Active Service Showcase Card */}
            <div className="lg:col-span-7">
              {(() => {
                const model = GES_DATA.operationalModels[activeServiceTab];
                return (
                  <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-floating space-y-6 animate-fadeIn">
                    <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden relative shadow-inner">
                      <img src={model.img} alt={model.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-brand-primary/80 backdrop-blur-md text-white text-xs font-bold">
                        Model {model.num}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">{model.subtitle}</span>
                      <h3 className="text-2xl font-bold text-brand-primary mt-1">{model.title}</h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">{model.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {model.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to="/operational"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-accent transition"
                      >
                        <span>Full Operational Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        to="/partner"
                        className="px-5 py-2.5 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-primary-light transition"
                      >
                        Partner With Us
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 5.6 CHAIRMAN'S MESSAGE */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-hero-gradient rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-floating relative overflow-hidden">
            {/* Background embellishment */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Chairman Portrait */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl p-1 bg-white/10 mb-6">
                  <img
                    src={GES_DATA.chairmanMessage.photo}
                    alt={GES_DATA.chairmanMessage.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-white font-serif">{GES_DATA.chairmanMessage.name}</h3>
                <p className="text-xs uppercase tracking-widest text-brand-gold font-bold mt-1">
                  {GES_DATA.chairmanMessage.title} • Global Education Services LLC
                </p>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs uppercase tracking-widest font-bold text-slate-200 border border-white/20">
                  Leadership Address
                </div>

                <div className="text-lg sm:text-xl md:text-2xl font-serif italic text-white/95 leading-relaxed">
                  {GES_DATA.chairmanMessage.introQuote}
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                  <p>{GES_DATA.chairmanMessage.paragraphs[0]}</p>
                  
                  {isChairmanExpanded ? (
                    <>
                      <p>{GES_DATA.chairmanMessage.paragraphs[1]}</p>
                      <p>{GES_DATA.chairmanMessage.paragraphs[2]}</p>
                      <p>{GES_DATA.chairmanMessage.paragraphs[3]}</p>
                    </>
                  ) : null}
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => setIsChairmanExpanded(!isChairmanExpanded)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
                  >
                    <span>{isChairmanExpanded ? 'Read Less' : 'Read Full Message'}</span>
                    <ChevronRight className={`w-4 h-4 transition ${isChairmanExpanded ? '-rotate-90' : 'rotate-90'}`} />
                  </button>

                  <Link
                    to="/about"
                    className="text-xs uppercase tracking-wider font-bold text-slate-300 hover:text-white transition"
                  >
                    Meet All Leadership
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.7 VISION, MISSION, AND VALUES (ELEVATE Framework) */}
      <section className="py-24 bg-brand-surface border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Guiding Principles</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary">
              Vision, Mission & Values
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Rooted in Omani cultural heritage and aligned with the international standards of academic rigor.
            </p>
          </div>

          {/* 3 Visually Distinct Presentations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Vision Statement (Oversized Editorial) */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Our Vision</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-primary font-serif mt-3 leading-snug">
                  "{GES_DATA.pillars.vision.statement}"
                </h3>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-8 text-xs text-slate-500">
                Guiding national talent acquisition and student leadership across Oman.
              </div>
            </div>

            {/* Mission Statement (Narrative Composition) */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Our Mission</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-primary font-serif mt-3 leading-snug">
                  "{GES_DATA.pillars.mission.statement}"
                </h3>
              </div>
              <div className="pt-8 border-t border-slate-100 mt-8 text-xs text-slate-500">
                Instilling curiosity, empathy, adaptability, and lifelong intellectual stamina.
              </div>
            </div>
          </div>

          {/* ELEVATE Framework (Values) */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-premium">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-slate-100 mb-8 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Values Architecture</span>
                <h3 className="text-2xl font-bold text-brand-primary mt-1">{GES_DATA.pillars.values.title}</h3>
                <p className="text-xs text-slate-500">{GES_DATA.pillars.values.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold">7 Pillars</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
              {GES_DATA.pillars.values.items.map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50/70 hover:bg-brand-surface border border-slate-100 hover:border-brand-primary/20 transition space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-primary text-white text-xs font-extrabold flex items-center justify-center">
                    {val.key[0]}
                  </div>
                  <h4 className="font-bold text-sm text-brand-primary">{val.key}</h4>
                  <p className="text-[11px] text-slate-600 leading-snug">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5.8 INNOVATION AND RESEARCH */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Future-Focused Pedagogies</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary">
                Innovation & Research Hub
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-serif italic">
                "{GES_DATA.pillars.innovation.statement}"
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {GES_DATA.pillars.innovation.hubDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-bold text-brand-blue font-serif">Oman 2040</div>
                  <div className="text-xs text-slate-500 mt-1">Aligned with the National Strategy for Education</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-bold text-brand-accent font-serif">K-12 STEM</div>
                  <div className="text-xs text-slate-500 mt-1">Robotics, Artificial Intelligence & Data Literacy</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-floating border border-slate-200">
                <img
                  src="/assets/img/operational/banner.jpg"
                  alt="GES Innovation and Research Facilities"
                  className="w-full h-[420px] object-cover hover:scale-102 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">State-of-the-Art Hub</span>
                  <h4 className="text-lg font-bold text-white mt-1">Muscat Innovation & Research Laboratories</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.9 OUR SCHOOLS AND LEARNING CENTERS */}
      <section className="py-24 bg-brand-surface border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Signature Institutions</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary mt-2">
                Our Schools & Campuses
              </h2>
            </div>
            <Link
              to="/schools"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-azure transition"
            >
              <span>Explore Complete Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* School Selector Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {GES_DATA.schools.map((school, idx) => {
              const isActive = activeSchoolTab === idx;
              return (
                <button
                  key={school.id}
                  onClick={() => setActiveSchoolTab(idx)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 border ${
                    isActive
                      ? 'bg-brand-primary text-white border-brand-primary shadow-subtle'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  {school.shortName}
                </button>
              );
            })}
          </div>

          {/* Selected School Showcase */}
          {(() => {
            const school = GES_DATA.schools[activeSchoolTab];
            return (
              <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-floating grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fadeIn">
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <img src={school.logo} alt={school.name} className="h-14 sm:h-16 w-auto object-contain p-1 border rounded-lg bg-white" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-primary">{school.name}</h3>
                      <p className="text-xs text-brand-accent font-semibold flex items-center gap-1 mt-0.5">
                        📍 {school.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">{school.description}</p>

                  <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div><strong className="text-slate-900">Curriculum:</strong> {school.curriculum}</div>
                    {school.grades && <div><strong className="text-slate-900">Levels:</strong> {school.grades}</div>}
                    {school.ages && <div><strong className="text-slate-900">Age Group:</strong> {school.ages}</div>}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={school.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
                    >
                      <span>Visit School Website</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      to="/schools"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-brand-primary text-xs font-bold uppercase tracking-wider transition"
                    >
                      <span>View Gallery & Campus</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[16/10]">
                    <img src={school.mainImg} alt={school.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 5.10 OUR STORIES / INSIDE GES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Student & Community Voices</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary mt-2">
                Inside GES Stories
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-azure transition"
            >
              <span>View All News & Press</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Video Stories Carousel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GES_DATA.videoStories.slice(0, 6).map((story, idx) => (
              <div
                key={idx}
                onClick={() => openVideo(story.url, story.title)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-brand-surface border border-slate-200 hover:border-brand-primary shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={story.thumb}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-primary-dark/30 group-hover:bg-brand-primary-dark/10 transition" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent">{story.duration}</span>
                    <h3 className="text-base font-bold text-brand-primary group-hover:text-brand-accent transition mt-1 whitespace-pre-line">
                      {story.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Watch Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition text-brand-accent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.11 CONTACT AND ENQUIRY */}
      <section className="py-24 bg-brand-surface border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200 shadow-floating grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">24/7 Educational Support</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary">
                Connect With GES Administration
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether requesting an executive institutional consultation, partner exploration, or student enrollment inquiry, our leadership team is ready to assist.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary font-bold">📍</div>
                  <div>
                    <span className="font-bold text-slate-900 block">Muscat Headquarters</span>
                    <span className="text-xs text-slate-500">{GES_DATA.brand.headquarters.address}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/5 flex items-center justify-center text-brand-primary font-bold">📞</div>
                  <div>
                    <span className="font-bold text-slate-900 block">Direct Telephone</span>
                    <a href={`tel:${GES_DATA.brand.headquarters.phone}`} className="text-brand-accent font-bold hover:underline">
                      {GES_DATA.brand.headquarters.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleQuickFormSubmit} className="space-y-4">
                {quickFormSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>✓ Inquiry successfully received! Our administration will contact you shortly.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={quickForm.name}
                      onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                      placeholder="e.g. Dr. Ahmed Al Maamari"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={quickForm.email}
                      onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                      placeholder="ahmed@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1.5">Mobile Number</label>
                    <input
                      type="tel"
                      value={quickForm.mobile}
                      onChange={(e) => setQuickForm({ ...quickForm, mobile: e.target.value })}
                      placeholder="+968 9123 4567"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1.5">Inquiry Type</label>
                    <select
                      value={quickForm.type}
                      onChange={(e) => setQuickForm({ ...quickForm, type: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    >
                      <option value="Meeting Request">Meeting Request</option>
                      <option value="School Admission">School Admission</option>
                      <option value="Partnership / PPP">Partnership / PPP</option>
                      <option value="Careers Inquiry">Careers Inquiry</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                {quickForm.type === 'Meeting Request' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-brand-surface border border-slate-200">
                    <div>
                      <label className="text-xs font-bold text-brand-primary block mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={quickForm.date}
                        onChange={(e) => setQuickForm({ ...quickForm, date: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-accent"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-brand-primary block mb-1">Preferred Time</label>
                      <input
                        type="time"
                        value={quickForm.time}
                        onChange={(e) => setQuickForm({ ...quickForm, time: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-accent"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1.5">Message / Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={quickForm.message}
                    onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                    placeholder="Briefly state your institutional inquiry or student admission details..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition shadow-sm hover:shadow-glow-crimson flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Administration</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

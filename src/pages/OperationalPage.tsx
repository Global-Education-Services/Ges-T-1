import React from 'react';
import { Link } from 'react-router-dom';
import { GES_DATA } from '../data/gesContent';
import { ArrowRight, CheckCircle, ShieldCheck, Award, Layers } from 'lucide-react';

export const OperationalPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* SECTION 1: OPERATIONAL HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/assets/img/banners/operational.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Our Operational Models • World-Class Facilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-white">
              Transforming Institutional Operations & Educational Delivery
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Providing comprehensive school management, licensing frameworks, public-private partnerships, and regional master franchising across Oman and the MENA region.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: COMPLETE MANAGEMENT OVERVIEW */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Executive Framework</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-primary">
              End-to-End Educational Governance
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              GES aims to expand and establish a premier network of schools, nurseries, and training institutes both in Oman and internationally. Institutions adopting a GES management framework benefit from centralized academic oversight, financial discipline, digital infrastructure, and continuous teacher professional development.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIONS 3 - 6: THE FOUR OPERATIONAL MODELS */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {GES_DATA.operationalModels.map((model, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={model.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-floating border border-slate-200 aspect-[4/3]">
                    <img
                      src={model.img}
                      alt={model.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-700"
                    />
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-brand-primary/85 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-wider">
                      Model {model.num}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">{model.subtitle}</span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mt-1 font-serif">
                      {model.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{model.desc}</p>

                  <div className="space-y-3 pt-2">
                    {model.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                        <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to="/partner"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
                    >
                      <span>Inquire About {model.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10 QUALITY ASSURANCE DIMENSIONS */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Quality Assurance</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary">
              10 Pillars of Operational Quality
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Standardized operational rubrics ensuring high student engagement, computerized reporting, and continuous academic advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {GES_DATA.qualityIndicators.map((indicator, idx) => (
              <div
                key={idx}
                className="bg-brand-surface rounded-2xl p-6 border border-slate-200 hover:border-brand-primary shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white p-2.5 shadow-sm border border-slate-100 mb-4 flex items-center justify-center group-hover:scale-105 transition">
                    <img src={indicator.img} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-accent block mb-1">
                    {indicator.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-primary leading-snug">
                    {indicator.title}
                  </h4>
                </div>
                <div className="text-right pt-4 text-xs font-serif font-extrabold text-slate-300 group-hover:text-brand-accent transition">
                  #{indicator.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

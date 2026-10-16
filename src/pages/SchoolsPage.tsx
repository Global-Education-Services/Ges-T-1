import React, { useState } from 'react';
import { GES_DATA, SchoolItem } from '../data/gesContent';
import { ExternalLink, MapPin, CheckCircle, ArrowRight, Eye, X, ChevronRight, ChevronLeft } from 'lucide-react';

export const SchoolsPage: React.FC = () => {
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('sips');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const activeSchool = GES_DATA.schools.find((s) => s.id === selectedSchoolId) || GES_DATA.schools[0];

  return (
    <div className="bg-white">
      {/* SECTION 1: SCHOOLS HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/assets/img/banners/schools.svg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Our Activities • Quality Education
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-white">
              Signature Schools & Early Learning Centers
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Delivering premier international curricula, British examinations, and the Reggio Emilia inquiry approach across purposeful architectural campuses in Muscat.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: INSTITUTION EXPLORATION TABS */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-subtle py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none" role="tablist" aria-label="Campuses">
            {GES_DATA.schools.map((school) => {
              const isActive = selectedSchoolId === school.id;
              return (
                <button
                  key={school.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedSchoolId(school.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                    isActive
                      ? 'bg-brand-primary text-white border-brand-primary shadow-subtle'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  {school.shortName}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTIONS 3-6: INSTITUTION DETAILS & GALLERIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Institution Header Banner */}
          <div className="bg-brand-surface rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-floating mb-16 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={activeSchool.logo}
                    alt={activeSchool.name}
                    className="h-16 sm:h-20 w-auto object-contain p-2 bg-white rounded-xl shadow-sm border border-slate-200"
                  />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Official Campus</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mt-0.5">{activeSchool.name}</h2>
                    <p className="text-xs text-brand-primary font-semibold flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                      {activeSchool.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                  <p>{activeSchool.description}</p>
                  {activeSchool.extendedDescription && (
                    <p>{activeSchool.extendedDescription}</p>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">Curriculum Stream</span>
                    <span className="font-semibold text-slate-900">{activeSchool.curriculum}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold block uppercase tracking-wider text-[10px]">
                      {activeSchool.grades ? 'Educational Grades' : 'Age Eligibility'}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {activeSchool.grades || activeSchool.ages}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={activeSchool.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
                  >
                    <span>Visit Official Website ({activeSchool.websiteDisplay})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-primary-light transition"
                  >
                    <span>Schedule Campus Tour</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-premium aspect-[4/3]">
                  <img
                    src={activeSchool.mainImg}
                    alt={activeSchool.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-brand-primary-dark/85 backdrop-blur text-white text-xs">
                    <span className="font-bold block">{activeSchool.shortName}</span>
                    <span className="text-slate-300 text-[11px]">{activeSchool.location.split(',')[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facilities List (if available) */}
          {activeSchool.facilities && (
            <div className="mb-16">
              <div className="border-b border-slate-200 pb-4 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Infrastructure & Amenities</span>
                <h3 className="text-2xl font-bold text-brand-primary mt-1">Campus Facilities</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeSchool.facilities.map((facility, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Photo Gallery with Lightbox View */}
          <div className="mb-16">
            <div className="border-b border-slate-200 pb-4 mb-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Authentic Photography</span>
                <h3 className="text-2xl font-bold text-brand-primary mt-1">
                  {activeSchool.shortName} Gallery ({activeSchool.gallery.length} Images)
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-medium hidden sm:block">Click photo to enlarge</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {activeSchool.gallery.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImg(imgUrl)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-subtle hover:shadow-premium transition-all duration-300"
                >
                  <img
                    src={imgUrl}
                    alt={`${activeSchool.name} - Photo ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-sm">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImg}
            alt="Enlarged campus view"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

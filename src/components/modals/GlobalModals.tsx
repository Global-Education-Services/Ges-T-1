import React from 'react';
import { useModal } from '../../context/ModalContext';
import { GES_DATA } from '../../data/gesContent';
import { X, Download, FileText, Shield, Cookie, ExternalLink } from 'lucide-react';

export const GlobalModals: React.FC = () => {
  const { activeModal, videoUrl, videoTitle, closeModal } = useModal();

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary-dark/80 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={closeModal} />

      <div 
        className="relative bg-white rounded-2xl shadow-floating w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-100 p-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            {activeModal === 'video' && <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold">▶</div>}
            {activeModal === 'downloads' && <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue"><Download className="w-5 h-5" /></div>}
            {activeModal === 'terms' && <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary"><FileText className="w-5 h-5" /></div>}
            {activeModal === 'privacy' && <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green"><Shield className="w-5 h-5" /></div>}
            {activeModal === 'cookies' && <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold"><Cookie className="w-5 h-5" /></div>}

            <div>
              <h3 className="text-xl font-bold text-brand-primary">
                {activeModal === 'video' && (videoTitle || 'GES Story')}
                {activeModal === 'downloads' && 'Institutional Publications & Downloads'}
                {activeModal === 'terms' && GES_DATA.legal.terms.title}
                {activeModal === 'privacy' && GES_DATA.legal.privacy.title}
                {activeModal === 'cookies' && GES_DATA.legal.cookies.title}
                {activeModal === 'school-sips' && 'Al Shomoukh International Private School'}
                {activeModal === 'school-qurum' && 'Shomoukh ECE Al Qurum Campus'}
                {activeModal === 'school-mouj' && 'Shomoukh ECE Al Mouj Campus'}
                {activeModal === 'partner' && 'Partner With GES Quality Education'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">Global Education Services LLC • Muscat, Oman</p>
            </div>
          </div>

          <button 
            onClick={closeModal}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">
          {activeModal === 'video' && videoUrl && (
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title={videoTitle || 'GES Video Player'}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {activeModal === 'downloads' && (
            <div className="space-y-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                Access official corporate publications, accreditation documentation, and strategic vision documents from Global Education Services Company.
              </p>
              <div className="grid gap-4">
                {GES_DATA.legal.downloads.items.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-slate-200 hover:border-brand-blue bg-slate-50/50 hover:bg-white transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-primary/10 text-brand-primary">{item.format}</span>
                        <span className="text-xs text-slate-400 font-medium">{item.size}</span>
                      </div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 max-w-lg">{item.description}</p>
                    </div>
                    <a
                      href={item.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary-light text-white font-semibold text-xs transition shrink-0 shadow-sm"
                    >
                      <Download className="w-4 h-4" /> Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeModal === 'terms' && (
            <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
              <p className="text-xs text-slate-400 italic">Last Updated: {GES_DATA.legal.terms.lastUpdated}</p>
              {GES_DATA.legal.terms.content}
            </div>
          )}

          {activeModal === 'privacy' && (
            <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
              <p className="text-xs text-slate-400 italic">Last Updated: {GES_DATA.legal.privacy.lastUpdated}</p>
              {GES_DATA.legal.privacy.content}
            </div>
          )}

          {activeModal === 'cookies' && (
            <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line">
              <p className="text-xs text-slate-400 italic">Last Updated: {GES_DATA.legal.cookies.lastUpdated}</p>
              {GES_DATA.legal.cookies.content}
            </div>
          )}

          {(activeModal === 'school-sips' || activeModal === 'school-qurum' || activeModal === 'school-mouj') && (
            <div>
              {(() => {
                const schoolKey = activeModal === 'school-sips' ? 'sips' : activeModal === 'school-qurum' ? 'shomoukh-qurum' : 'shomoukh-mouj';
                const school = GES_DATA.schools.find(s => s.id === schoolKey);
                if (!school) return null;
                return (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                      <img src={school.logo} alt={school.name} className="h-16 w-auto object-contain p-1 border rounded-lg bg-white" />
                      <div>
                        <h4 className="font-bold text-lg text-brand-primary">{school.name}</h4>
                        <p className="text-xs text-brand-accent font-semibold flex items-center gap-1">📍 {school.location}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{school.description}</p>
                    {school.extendedDescription && (
                      <p className="text-sm text-slate-600 leading-relaxed">{school.extendedDescription}</p>
                    )}
                    {school.facilities && (
                      <div>
                        <h5 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Campus Facilities</h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {school.facilities.map((f, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                      <a
                        href={school.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-brand-azure"
                      >
                        Visit Official Website: {school.websiteDisplay} <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={closeModal}
                        className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {activeModal === 'partner' && (
            <div className="space-y-5">
              <p className="text-sm text-slate-700 leading-relaxed">
                GES offers a range of high-performance educational management partnerships across the Sultanate of Oman and internationally, including Complete Institutional Management, Licensing, Public-Private Partnerships (PPP), and Master Franchising.
              </p>
              <div className="p-4 rounded-xl bg-brand-surface border border-slate-200 space-y-2">
                <h5 className="font-bold text-brand-primary text-sm">Direct Institutional Contact</h5>
                <p className="text-xs text-slate-600">Email: <a href="mailto:info@ges.om" className="text-brand-accent font-bold">info@ges.om</a></p>
                <p className="text-xs text-slate-600">Telephone: <a href="tel:+96824554422" className="text-brand-primary font-bold">+968 24554422</a></p>
                <p className="text-xs text-slate-600">Office: Airport Heights, P.O. Box 1756, Postal Code 111, Muscat, Oman</p>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <a
                  href="/contact"
                  onClick={closeModal}
                  className="px-5 py-2.5 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold transition shadow-sm"
                >
                  Schedule Partner Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

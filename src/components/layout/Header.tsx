import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GES_DATA } from '../../data/gesContent';
import { useModal } from '../../context/ModalContext';
import { Search, Menu, X, Phone, ArrowRight, Download, FileText } from 'lucide-react';

interface HeaderProps {
  isInternal?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isInternal = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/news?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Determine logo variant based on scroll and page type
  // When scrolled or on internal white pages, use lightBg logo (dark text), otherwise use darkBg logo (white text) on dark hero
  const useDarkLogo = isScrolled || isInternal;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          useDarkLogo 
            ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-slate-100 py-3' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg p-1"
              aria-label="GES Quality Education Home"
            >
              <img 
                src={useDarkLogo ? GES_DATA.brand.logos.lightBg : GES_DATA.brand.logos.darkBg} 
                alt="GES Quality Education"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {GES_DATA.navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-3 py-2 text-xs xl:text-sm font-semibold tracking-wide transition-colors rounded-full ${
                      useDarkLogo
                        ? isActive
                          ? 'text-brand-accent bg-brand-accent/5'
                          : 'text-brand-primary hover:text-brand-azure hover:bg-slate-50'
                        : isActive
                          ? 'text-white bg-white/15'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Toggle */}
              <div className="relative">
                {isSearchOpen ? (
                  <form onSubmit={handleSearchSubmit} className="flex items-center animate-fadeIn">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search news, programs..."
                      className={`text-xs px-3 py-1.5 rounded-full border focus:outline-none focus:ring-2 focus:ring-brand-accent w-40 sm:w-56 ${
                        useDarkLogo 
                          ? 'bg-slate-50 border-slate-200 text-slate-800' 
                          : 'bg-white/20 border-white/30 text-white placeholder-white/70'
                      }`}
                      autoFocus
                    />
                    <button 
                      type="button" 
                      onClick={() => setIsSearchOpen(false)}
                      className={`p-1.5 ml-1 rounded-full ${useDarkLogo ? 'text-slate-500 hover:text-slate-800' : 'text-white/80 hover:text-white'}`}
                      aria-label="Close search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className={`p-2 rounded-full transition-colors ${
                      useDarkLogo 
                        ? 'text-brand-primary hover:bg-slate-100' 
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                    aria-label="Open search input"
                  >
                    <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                )}
              </div>

              {/* Contact / Meeting CTA */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-glow-crimson transform hover:-translate-y-0.5 bg-brand-accent hover:bg-brand-accent-hover text-white"
              >
                <span>Request Meeting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-xl transition-colors ${
                  useDarkLogo 
                    ? 'text-brand-primary hover:bg-slate-100' 
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-brand-primary-dark text-white animate-fadeIn">
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between p-4 border-b border-brand-primary-light/40">
            <img 
              src={GES_DATA.brand.logos.darkBg} 
              alt="GES Logo" 
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search inside Drawer */}
          <div className="p-4 border-b border-brand-primary-light/30">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search GES stories & articles..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <Search className="w-4 h-4 text-white/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {GES_DATA.navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition ${
                    isActive 
                      ? 'bg-brand-accent text-white font-bold' 
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}

            <div className="pt-6 pb-2 border-t border-brand-primary-light/30 mt-6">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold px-4 mb-3">Institutional Links</p>
              <button
                onClick={() => { setIsMobileMenuOpen(false); openModal('downloads'); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white text-left"
              >
                <Download className="w-4 h-4 text-brand-gold" />
                <span>Brochure & Downloads</span>
              </button>
              <button
                onClick={() => { setIsMobileMenuOpen(false); openModal('terms'); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white text-left"
              >
                <FileText className="w-4 h-4 text-brand-blue" />
                <span>Terms & Conditions</span>
              </button>
            </div>
          </div>

          {/* Bottom Drawer Bar */}
          <div className="p-4 border-t border-brand-primary-light/40 bg-brand-primary/60 space-y-3">
            <div className="flex items-center justify-between text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-green" />
                +968 24554422
              </span>
              <span>Muscat, Oman</span>
            </div>
            <Link
              to="/contact"
              className="w-full py-3 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white text-center font-bold text-sm block shadow-lg"
            >
              Request Institutional Meeting
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

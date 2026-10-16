import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GES_DATA } from '../../data/gesContent';
import { useModal } from '../../context/ModalContext';
import { 
  Search, 
  Menu, 
  X, 
  Phone, 
  ArrowRight, 
  Download, 
  FileText, 
  ChevronDown, 
  Building2, 
  GraduationCap, 
  Users, 
  Award, 
  Layers, 
  Calendar 
} from 'lucide-react';

interface HeaderProps {
  isInternal?: boolean;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { openModal } = useModal();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/news?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Structured Dropdown Menu Data
  const dropdownMenus: Record<string, { title: string; href: string; desc: string; icon: any }[]> = {
    'About GES': [
      { title: 'Corporate Overview', href: '/about', desc: '13 years of educational stewardship in Oman', icon: Building2 },
      { title: 'Management Team', href: '/about#management', desc: 'Executive governance & academic leadership', icon: Users },
      { title: 'Journey & Milestones', href: '/about#timeline', desc: 'Chronological timeline from 2012 to 2025', icon: Calendar },
    ],
    'Operational Models': [
      { title: 'Private Schools (K-12)', href: '/operational#private-schools', desc: 'Turnkey British curriculum institutions', icon: GraduationCap },
      { title: 'Public-Private Partnerships', href: '/operational#ppp', desc: 'Alliances aligned with Oman Vision 2040', icon: Layers },
      { title: 'Licensed Schools', href: '/operational#licensed-schools', desc: 'Proprietary curriculum & quality frameworks', icon: Award },
      { title: 'Master Franchising', href: '/operational#master-franchise', desc: 'Territorial expansion across GCC & MENA', icon: Building2 },
    ],
    'Our Schools': [
      { title: 'Al Shomoukh International (SIPS)', href: '/schools', desc: 'KG to Grade 12 British Curriculum & Edexcel', icon: GraduationCap },
      { title: 'Shomoukh ECE Al Qurum', href: '/schools', desc: 'Reggio Emilia inquiry for ages 1 to 4', icon: Building2 },
      { title: 'Shomoukh ECE Al Mouj', href: '/schools', desc: 'Award-winning eco-sustainable preschool', icon: Award },
      { title: 'Shomoukh World Academy', href: '/schools', desc: 'Upcoming 24,361 sqm landmark campus', icon: Layers },
    ],
    'Our Impact': [
      { title: 'Press Releases & News', href: '/news', desc: 'Official announcements & media publications', icon: FileText },
      { title: 'Inside GES Video Stories', href: '/news#stories', desc: 'Ceremony celebrations & student highlights', icon: Award },
      { title: 'Accreditations & Awards', href: '/operational', desc: 'Cognia Global seal & Alam Al Iktisaad honours', icon: Award },
    ]
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-slate-100 py-2.5' 
            : 'bg-gradient-to-b from-brand-primary-dark/80 via-brand-primary-dark/40 to-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 shrink-0 group focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg p-1"
              aria-label="GES Quality Education Home"
            >
              <img 
                src={isScrolled ? GES_DATA.brand.logos.lightBg : GES_DATA.brand.logos.darkBg} 
                alt="GES Quality Education"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            </Link>

            {/* Desktop Navigation Bar */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1" aria-label="Main Navigation">
              {GES_DATA.navigation.map((item) => {
                const isActive = location.pathname === item.href;
                const hasDropdown = !!dropdownMenus[item.name];

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => hasDropdown && handleDropdownEnter(item.name)}
                    onMouseLeave={() => hasDropdown && handleDropdownLeave()}
                  >
                    <Link
                      to={item.href}
                      className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[13px] xl:text-[14px] font-semibold tracking-normal transition-all rounded-lg whitespace-nowrap ${
                        isScrolled
                          ? isActive
                            ? 'text-brand-accent font-bold'
                            : 'text-brand-primary hover:text-brand-accent hover:bg-slate-50'
                          : isActive
                            ? 'text-white font-bold'
                            : 'text-white/85 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.name}</span>
                      {hasDropdown && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 text-brand-accent' : 'opacity-60'}`} />
                      )}
                      {isActive && (
                        <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-brand-accent rounded-full" />
                      )}
                    </Link>

                    {/* Refined Dropdown Menu */}
                    {hasDropdown && activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 w-72 pt-2 animate-fadeIn z-50"
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="bg-white rounded-2xl shadow-floating border border-slate-200 p-2.5 space-y-1">
                          {dropdownMenus[item.name].map((sub, sIdx) => {
                            const IconComponent = sub.icon;
                            return (
                              <Link
                                key={sIdx}
                                to={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-brand-surface group-hover:bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:text-brand-accent transition shrink-0 mt-0.5">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div>
                                  <span className="text-xs font-bold text-brand-primary group-hover:text-brand-accent transition block">
                                    {sub.title}
                                  </span>
                                  <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                                    {sub.desc}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Action Icons & Request Meeting CTA */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              {/* Search Trigger */}
              <div className="relative">
                {isSearchOpen ? (
                  <form onSubmit={handleSearchSubmit} className="flex items-center animate-fadeIn">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search GES articles..."
                      className="text-xs px-3.5 py-1.5 rounded-full border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent shadow-sm w-44 sm:w-56"
                      autoFocus
                    />
                    <button 
                      type="button" 
                      onClick={() => setIsSearchOpen(false)}
                      className="p-1.5 ml-1 rounded-full text-slate-500 hover:text-slate-800"
                      aria-label="Close search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className={`p-2 rounded-full transition-colors ${
                      isScrolled 
                        ? 'text-brand-primary hover:bg-slate-100' 
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                    aria-label="Open search input"
                  >
                    <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </button>
                )}
              </div>

              {/* Request Meeting CTA (Single line, strictly non-wrapping) */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-glow-crimson transform hover:-translate-y-0.5 bg-brand-accent hover:bg-brand-accent-hover text-white whitespace-nowrap shrink-0"
              >
                <span>Request Meeting</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-xl transition-colors ${
                  isScrolled 
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
                placeholder="Search GES news & programs..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-10 text-xs text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <Search className="w-4 h-4 text-white/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </form>
          </div>

          {/* Navigation Links with expandable accordions */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {GES_DATA.navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const hasDropdown = !!dropdownMenus[item.name];
              const isExpanded = mobileExpandedSection === item.name;

              return (
                <div key={item.name} className="border-b border-brand-primary-light/20 pb-1">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      onClick={() => !hasDropdown && setIsMobileMenuOpen(false)}
                      className={`flex-1 py-3 px-3 rounded-xl text-sm font-semibold transition ${
                        isActive 
                          ? 'text-brand-accent font-bold' 
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {hasDropdown && (
                      <button
                        onClick={() => setMobileExpandedSection(isExpanded ? null : item.name)}
                        className="p-3 text-white/60 hover:text-white"
                        aria-label={`Toggle ${item.name} submenu`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-brand-accent' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Submenu items on mobile */}
                  {hasDropdown && isExpanded && (
                    <div className="pl-4 pb-2 space-y-1">
                      {dropdownMenus[item.name].map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-3 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/5"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quick Actions in Drawer */}
            <div className="pt-6 pb-2 mt-4 space-y-1">
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold px-3 mb-2">Institutional</p>
              <button
                onClick={() => { setIsMobileMenuOpen(false); openModal('downloads'); }}
                className="w-full flex items-center gap-3 px-3 py-2 text-xs text-white/80 hover:text-white text-left"
              >
                <Download className="w-4 h-4 text-brand-gold" />
                <span>Brochure & Awards Dossier (PDF)</span>
              </button>
              <button
                onClick={() => { setIsMobileMenuOpen(false); openModal('terms'); }}
                className="w-full flex items-center gap-3 px-3 py-2 text-xs text-white/80 hover:text-white text-left"
              >
                <FileText className="w-4 h-4 text-brand-blue" />
                <span>Terms & Legal Policy</span>
              </button>
            </div>
          </div>

          {/* Bottom Drawer Bar */}
          <div className="p-4 border-t border-brand-primary-light/40 bg-brand-primary/80 space-y-3">
            <div className="flex items-center justify-between text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-green" />
                +968 24554422
              </span>
              <span>Airport Heights, Muscat</span>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white text-center font-bold text-xs uppercase tracking-wider block shadow-lg"
            >
              Request Institutional Meeting
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

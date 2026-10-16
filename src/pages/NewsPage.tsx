import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GES_DATA, NewsItem } from '../data/gesContent';
import { useModal } from '../context/ModalContext';
import { Search, ExternalLink, Calendar, User, ArrowRight, Play, BookOpen, X } from 'lucide-react';

export const NewsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { openVideo } = useModal();

  const queryParam = searchParams.get('q') || '';
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'latest' | 'popular' | 'international' | 'local'>('all');
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  useEffect(() => {
    setSearchQuery(queryParam);
  }, [queryParam]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    } else {
      setSearchParams({});
    }
  };

  // Filtered stories
  const filteredStories = GES_DATA.newsItems.filter((item) => {
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const term = queryParam.toLowerCase().trim();
    const matchesSearch = !term || 
      item.title.toLowerCase().includes(term) || 
      item.author.toLowerCase().includes(term) || 
      (item.summary && item.summary.toLowerCase().includes(term));
    return matchesCategory && matchesSearch;
  });

  const featuredStory = GES_DATA.newsItems[0];

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img src="/assets/img/news/banner.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-gold bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              In The News • Press & Publications
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-white">
              Quality Assurance in Education & News
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Changes in learning materials, teacher expectations, student deliverables, and institutional milestones from across the GES Quality Education network.
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH & CATEGORY BAR */}
      <section className="py-8 bg-brand-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {(['all', 'latest', 'popular', 'international', 'local'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                    categoryFilter === cat
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & authors..."
                className="w-full bg-white border border-slate-200 rounded-full pl-10 pr-10 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-accent shadow-sm"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setSearchParams({}); }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>

          {queryParam && (
            <div className="mt-4 text-xs text-slate-500 flex items-center justify-between">
              <span>Showing search results for: <strong>"{queryParam}"</strong> ({filteredStories.length} articles found)</span>
              <button
                onClick={() => { setSearchQuery(''); setSearchParams({}); }}
                className="text-brand-accent underline font-semibold"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: FEATURED EDITORIAL STORY (If no query active) */}
      {!queryParam && categoryFilter === 'all' && (
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent block mb-4">Featured Story</span>
            <div 
              onClick={() => setActiveArticle(featuredStory)}
              className="bg-brand-surface rounded-3xl overflow-hidden border border-slate-200 shadow-premium grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer group"
            >
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold uppercase tracking-wider text-[10px]">
                    {featuredStory.category}
                  </span>
                  <span>{featuredStory.date}</span>
                  <span>•</span>
                  <span>{featuredStory.author}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary group-hover:text-brand-accent transition leading-tight">
                  {featuredStory.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {featuredStory.summary}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>

              <div className="lg:col-span-5 h-full min-h-[300px]">
                <img
                  src={featuredStory.img}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: STORY ARCHIVE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Archived Articles</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-primary mt-1">
              Press Releases & Publications
            </h3>
          </div>

          {filteredStories.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm">No articles matched your criteria.</p>
              <button
                onClick={() => { setSearchQuery(''); setSearchParams({}); setCategoryFilter('all'); }}
                className="mt-3 px-5 py-2 rounded-full bg-brand-primary text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <article
                  key={story.id}
                  onClick={() => setActiveArticle(story)}
                  className="bg-brand-surface rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-primary shadow-subtle hover:shadow-premium transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={story.img}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-primary/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider">
                      {story.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{story.date}</span>
                        <span>•</span>
                        <span className="truncate">{story.author}</span>
                      </div>
                      <h4 className={`text-base font-bold text-brand-primary group-hover:text-brand-accent transition leading-snug ${story.language === 'ar' ? 'font-serif text-right text-lg' : ''}`}>
                        {story.title}
                      </h4>
                      {story.summary && (
                        <p className={`text-xs text-slate-600 line-clamp-3 leading-relaxed ${story.language === 'ar' ? 'text-right' : ''}`}>
                          {story.summary}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-primary">
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition text-brand-accent" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: VIDEO STORIES ARCHIVE */}
      <section className="py-20 bg-brand-surface border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Video Archive</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-primary">
              Ceremonies & Campus Highlights
            </h3>
            <p className="text-xs text-slate-600">
              Watch official video features documenting school milestones, athletic celebrations, and student art exhibitions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GES_DATA.videoStories.map((v, idx) => (
              <div
                key={idx}
                onClick={() => openVideo(v.url, v.title)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-subtle hover:shadow-premium transition cursor-pointer group"
              >
                <div className="relative aspect-video">
                  <img src={v.thumb} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-brand-primary-dark/30 group-hover:bg-brand-primary-dark/10 transition flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider">{v.duration}</span>
                  <h4 className="text-sm font-bold text-brand-primary whitespace-pre-line group-hover:text-brand-accent transition">
                    {v.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 bg-brand-primary-dark/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            className="bg-white rounded-3xl shadow-floating max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 border border-slate-200 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                {activeArticle.category}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-inner">
              <img src={activeArticle.img} alt={activeArticle.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.author}</span>
              </div>
              <h3 className={`text-2xl font-bold text-brand-primary leading-tight ${activeArticle.language === 'ar' ? 'font-serif text-right' : ''}`}>
                {activeArticle.title}
              </h3>
              <p className={`text-sm text-slate-700 leading-relaxed ${activeArticle.language === 'ar' ? 'text-right' : ''}`}>
                {activeArticle.summary || 'Global Education Services Company (GES Quality Education) continues to set the benchmark for academic excellence, infrastructure investments, and international accreditation across the Sultanate of Oman.'}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={activeArticle.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-brand-azure"
              >
                <span>Read on Original News Source</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

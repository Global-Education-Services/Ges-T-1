import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { GlobalModals } from './components/modals/GlobalModals';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { OperationalPage } from './pages/OperationalPage';
import { SchoolsPage } from './pages/SchoolsPage';
import { PartnerPage } from './pages/PartnerPage';
import { CareersPage } from './pages/CareersPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isInternal = location.pathname !== '/';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isInternal={isInternal} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <GlobalModals />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* Primary Modern Canonical Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/operational" element={<OperationalPage />} />
            <Route path="/schools" element={<SchoolsPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Legacy PHP Route Redirection & Preservation */}
            <Route path="/index.php" element={<Navigate to="/" replace />} />
            <Route path="/about.php" element={<Navigate to="/about" replace />} />
            <Route path="/operational.php" element={<Navigate to="/operational" replace />} />
            <Route path="/schools.php" element={<Navigate to="/schools" replace />} />
            <Route path="/partner.php" element={<Navigate to="/partner" replace />} />
            <Route path="/careers.php" element={<Navigate to="/careers" replace />} />
            <Route path="/news.php" element={<Navigate to="/news" replace />} />
            <Route path="/contact.php" element={<Navigate to="/contact" replace />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ModalProvider>
  );
};

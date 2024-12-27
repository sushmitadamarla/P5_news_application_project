import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';
import './App.css'; // or respective component-specific CSS file
import NewsArticles from './components/NewsArticles';

// Lazy loading for pages
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const Categories = lazy(() => import('./pages/categories'));
const AddArticle = lazy(() => import('./pages/AddArticle'));

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<NewsArticles />} />
              <Route path="/add" element={<AddArticle />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

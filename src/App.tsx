import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NewsSlider from './components/NewsSlider';
import QuickLinks from './components/QuickLinks';
import ContactLawyer from './pages/ContactLawyer';
import FAQ from './pages/FAQ';
import Forum from './pages/Forum';
import ThreadDetail from './pages/ThreadDetail';
import Emergency from './pages/Emergency';
import Legislation from './pages/Legislation';

function App() {
  const HomePage = () => (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)`,
         }}>
      <Header />
      <main className="pt-20 container mx-auto px-4">
        <div className="space-y-8">
          <section className="mt-8">
            <SearchBar />
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Current Affairs</h2>
            <NewsSlider />
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Quick Access</h2>
            <QuickLinks />
          </section>
        </div>
      </main>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-lawyer" element={<ContactLawyer />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/thread/:id" element={<ThreadDetail />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/legislation" element={<Legislation />} />
      </Routes>
    </Router>
  );
}

export default App;
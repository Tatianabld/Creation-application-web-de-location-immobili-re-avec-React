import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Pages de l'application
import About from './pages/About';
import Property from './pages/Property';
import Style from './style/style.css'
import Footer from './components/Footer';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="property/:id" element={<Property />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
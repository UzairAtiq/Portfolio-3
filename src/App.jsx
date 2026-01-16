import { useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import WorksSection from './components/sections/WorksSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import './App.css';

function App() {
  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.classList.add('visible');
    };

    const addHoverEffect = () => cursor.classList.add('hover');
    const removeHoverEffect = () => cursor.classList.remove('hover');

    document.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('a, button, .work-preview, .service-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cursor.remove();
    };
  }, []);

  return (
    <div className="app">
      <Navigation />
      
      <main className="main-content">
        <section id="home" className="section">
          <HeroSection />
        </section>

        <section id="services" className="section">
          <ServicesSection />
        </section>

        <section id="works" className="section">
          <WorksSection />
        </section>

        <section id="about" className="section">
          <AboutSection />
        </section>

        <section id="contact" className="section">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}

export default App;

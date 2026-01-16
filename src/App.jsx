import { useEffect } from 'react';
import Navigation from './components/layout/Navigation';
import PageContainer from './components/layout/PageContainer';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import WorksSection from './components/sections/WorksSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import { usePageTransition } from './hooks/usePageTransition';
import './App.css';

function App() {
  const { currentPage, goToPage } = usePageTransition(5);

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
  }, [currentPage]);

  return (
    <div className="app">
      <Navigation currentPage={currentPage} goToPage={goToPage} />
      
      <PageContainer currentPage={currentPage} pageNumber={1}>
        <HeroSection goToPage={goToPage} />
      </PageContainer>

      <PageContainer currentPage={currentPage} pageNumber={2}>
        <ServicesSection />
      </PageContainer>

      <PageContainer currentPage={currentPage} pageNumber={3}>
        <WorksSection />
      </PageContainer>

      <PageContainer currentPage={currentPage} pageNumber={4}>
        <AboutSection />
      </PageContainer>

      <PageContainer currentPage={currentPage} pageNumber={5}>
        <ContactSection />
      </PageContainer>
    </div>
  );
}

export default App;

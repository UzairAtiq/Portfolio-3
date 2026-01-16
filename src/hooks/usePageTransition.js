import { useState, useEffect, useCallback } from 'react';

export const usePageTransition = (totalPages = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('forward');

  const goToPage = useCallback((pageNumber) => {
    if (pageNumber === currentPage || isTransitioning) return;
    if (pageNumber < 1 || pageNumber > totalPages) return;

    setIsTransitioning(true);
    setDirection(pageNumber > currentPage ? 'forward' : 'backward');
    setCurrentPage(pageNumber);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match animation duration for instant next scroll
  }, [currentPage, isTransitioning, totalPages]);

  const nextPage = useCallback(() => {
    if (currentPage < totalPages && !isTransitioning) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, totalPages, isTransitioning, goToPage]);

  const previousPage = useCallback(() => {
    if (currentPage > 1 && !isTransitioning) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, isTransitioning, goToPage]);

  useEffect(() => {
    let scrollTimeout;
    let lastScrollTime = 0;

    const handleWheel = (e) => {
      if (isTransitioning) return;
      
      const now = Date.now();
      if (now - lastScrollTime < 100) return; // Prevent too rapid scrolling
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          nextPage();
        } else {
          previousPage();
        }
        lastScrollTime = now;
      }, 10); // Reduced from 50ms to 10ms
    };

    const handleKeyDown = (e) => {
      if (isTransitioning) return;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        previousPage();
      }
    };

    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isTransitioning) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) {
          nextPage();
        } else {
          previousPage();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isTransitioning, nextPage, previousPage]);

  return {
    currentPage,
    isTransitioning,
    direction,
    goToPage,
    nextPage,
    previousPage
  };
};

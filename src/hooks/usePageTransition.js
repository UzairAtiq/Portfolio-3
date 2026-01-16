import { useState, useEffect, useCallback, useRef } from 'react';

export const usePageTransition = (totalPages = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('forward');
  const isScrollingRef = useRef(false);

  const goToPage = useCallback((pageNumber) => {
    if (pageNumber === currentPage || isTransitioning || isScrollingRef.current) return;
    if (pageNumber < 1 || pageNumber > totalPages) return;

    isScrollingRef.current = true;
    setIsTransitioning(true);
    setDirection(pageNumber > currentPage ? 'forward' : 'backward');
    setCurrentPage(pageNumber);

    setTimeout(() => {
      setIsTransitioning(false);
      isScrollingRef.current = false;
    }, 700); // Extended to ensure no double-firing
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
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isTransitioning || isScrollingRef.current) return;
      
      if (e.deltaY > 0) {
        nextPage();
      } else if (e.deltaY < 0) {
        previousPage();
      }
    };

    const handleKeyDown = (e) => {
      if (isTransitioning || isScrollingRef.current) return;
      
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
      if (isTransitioning || isScrollingRef.current) return;
      
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

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
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

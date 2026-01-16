import { useState, useEffect, useCallback, useRef } from 'react';

export const usePageTransition = (totalPages = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('forward');
  const scrollTimeoutRef = useRef(null);
  const lastPageRef = useRef(1);

  const goToPage = useCallback((pageNumber) => {
    if (pageNumber === lastPageRef.current) return;
    if (pageNumber < 1 || pageNumber > totalPages) return;
    if (isTransitioning) return;

    lastPageRef.current = pageNumber;
    setIsTransitioning(true);
    setDirection(pageNumber > currentPage ? 'forward' : 'backward');
    setCurrentPage(pageNumber);

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      scrollTimeoutRef.current = null;
    }, 600);
  }, [currentPage, isTransitioning, totalPages]);

  const nextPage = useCallback(() => {
    if (isTransitioning || scrollTimeoutRef.current) return;
    const nextPageNumber = currentPage + 1;
    if (nextPageNumber <= totalPages) {
      goToPage(nextPageNumber);
    }
  }, [currentPage, totalPages, isTransitioning, goToPage]);

  const previousPage = useCallback(() => {
    if (isTransitioning || scrollTimeoutRef.current) return;
    const prevPageNumber = currentPage - 1;
    if (prevPageNumber >= 1) {
      goToPage(prevPageNumber);
    }
  }, [currentPage, isTransitioning, goToPage]);

  useEffect(() => {
    let isProcessing = false;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isProcessing || isTransitioning || scrollTimeoutRef.current) return;
      
      isProcessing = true;
      
      if (e.deltaY > 0) {
        nextPage();
      } else if (e.deltaY < 0) {
        previousPage();
      }
      
      setTimeout(() => {
        isProcessing = false;
      }, 100);
    };

    const handleKeyDown = (e) => {
      if (isTransitioning || scrollTimeoutRef.current) return;
      
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
      if (isTransitioning || scrollTimeoutRef.current) return;
      
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
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
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

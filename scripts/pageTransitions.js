// Page Transition Handler
class PageTransitions {
    constructor() {
        this.currentPage = 1;
        this.totalPages = document.querySelectorAll('.page-section').length;
        this.isTransitioning = false;
        this.init();
    }

    init() {
        // Set initial active page
        this.showPage(1);
        
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                const pageNumber = parseInt(targetSection.dataset.page);
                this.navigateToPage(pageNumber);
            });
        });

        // Scroll-based navigation
        let scrollTimeout;
        window.addEventListener('wheel', (e) => {
            if (this.isTransitioning) return;
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (e.deltaY > 0) {
                    // Scroll down
                    this.nextPage();
                } else {
                    // Scroll up
                    this.previousPage();
                }
            }, 50);
        }, { passive: true });

        // Touch support for mobile
        let touchStartY = 0;
        window.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        window.addEventListener('touchend', (e) => {
            if (this.isTransitioning) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY - touchEndY;
            
            if (Math.abs(deltaY) > 50) {
                if (deltaY > 0) {
                    this.nextPage();
                } else {
                    this.previousPage();
                }
            }
        }, { passive: true });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isTransitioning) return;
            
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                this.nextPage();
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                this.previousPage();
            }
        });
    }

    navigateToPage(pageNumber) {
        if (pageNumber === this.currentPage || this.isTransitioning) return;
        if (pageNumber < 1 || pageNumber > this.totalPages) return;

        this.hidePage(this.currentPage);
        this.showPage(pageNumber);
        this.currentPage = pageNumber;
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.navigateToPage(this.currentPage + 1);
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.navigateToPage(this.currentPage - 1);
        }
    }

    showPage(pageNumber) {
        this.isTransitioning = true;
        const targetSection = document.querySelector(`[data-page="${pageNumber}"]`);
        
        targetSection.classList.add('active');
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 800);
    }

    hidePage(pageNumber) {
        const currentSection = document.querySelector(`[data-page="${pageNumber}"]`);
        
        currentSection.classList.add('exiting');
        
        setTimeout(() => {
            currentSection.classList.remove('active', 'exiting');
        }, 800);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PageTransitions();
});

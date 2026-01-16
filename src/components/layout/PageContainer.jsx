import { motion, AnimatePresence } from 'framer-motion';
import './PageContainer.css';

const PageContainer = ({ children, currentPage, pageNumber }) => {
  const isActive = currentPage === pageNumber;
  const isExiting = currentPage > pageNumber;

  const variants = {
    initial: {
      y: '100%',
      opacity: 0,
    },
    active: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    exit: {
      y: '-20%',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {(isActive || isExiting) && (
        <motion.section
          className={`page-section ${isActive ? 'active' : ''} ${isExiting ? 'exiting' : ''}`}
          data-page={pageNumber}
          variants={variants}
          initial="initial"
          animate={isActive ? 'active' : 'exit'}
          exit="exit"
          style={{
            zIndex: isActive ? 10 : isExiting ? 5 : 1,
          }}
        >
          <motion.div
            className="page-content"
            variants={contentVariants}
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
          >
            {children}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default PageContainer;

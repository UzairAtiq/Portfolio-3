import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <motion.h1 className="hero-name" variants={itemVariants}>
          UZAIR ATIQ
        </motion.h1>
        
        <motion.div className="hero-arrow bounce" variants={itemVariants}>
          ↓
        </motion.div>
        
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Full-Stack Developer & Designer<br />
          Passionate about building polished,<br />
          intuitive, and thoughtful digital<br />
          experiences that leave a mark.
        </motion.p>
        
        <motion.button 
          className="cta-button" 
          variants={itemVariants}
          onClick={handleContactClick}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          CONTACT ↗
        </motion.button>
        
        <motion.div className="availability" variants={itemVariants}>
          AVAILABLE FOR WORK<br />NOW
        </motion.div>
      </div>

      <motion.div 
        className="hero-image" 
        variants={itemVariants}
      >
        <motion.img
          src="/samurai.jpg"
          alt="Workspace"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;

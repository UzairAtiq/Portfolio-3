import { motion } from 'framer-motion';
import './WorkCard.css';

const WorkCard = ({ number, image, title, description, demoLink, delay = 0 }) => {
  return (
    <motion.div
      className="work-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="work-number">{number}</div>
      
      <motion.div 
        className="work-preview"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={image}
          alt={title}
          whileHover={{ scale: 1.1, filter: "brightness(1)" }}
          transition={{ duration: 0.6 }}
        />
        
        {demoLink && (
          <motion.a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW DEMO ↗
          </motion.a>
        )}
      </motion.div>
      
      <div className="work-info">
        <h3>{title}</h3>
        {description && <p className="work-description">{description}</p>}
      </div>
    </motion.div>
  );
};

export default WorkCard;

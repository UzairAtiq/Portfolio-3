import { motion } from 'framer-motion';
import './ServiceCard.css';

const ServiceCard = ({ number, title, description, techStack, delay = 0 }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="service-shimmer"></div>
      <div className="service-number">{number}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tech-stack">
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;

import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', type = 'button' }) => {
  return (
    <motion.button
      className={`button button-${variant}`}
      onClick={onClick}
      type={type}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;

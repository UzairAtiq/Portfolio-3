import { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-section">
      <div className="contact-content">
        <motion.h2 variants={itemVariants}>
          LET'S MAKE<br />IT HAPPEN
        </motion.h2>

        <motion.div className="contact-form-container" variants={itemVariants}>
          <h3>Say Hello</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              placeholder="Drop a name"
              value={formData.name}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Wanna hear back? Add your email"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name="message"
              placeholder="Say hello or drop a note..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02, backgroundColor: '#FF0000' }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div className="contact-label" variants={itemVariants}>
          DEVELOPER<br />DESIGNER<br />CREATOR
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;

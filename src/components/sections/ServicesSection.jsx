import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';
import './ServicesSection.css';

const ServicesSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const services = [
    {
      number: '(01)',
      title: 'Full-Stack Development',
      description: 'From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.',
      techStack: [
        '01 React, Node.js, Express.js',
        '02 REST APIs, Firebase, Docker',
        '03 Git, GitHub, Postman'
      ]
    },
    {
      number: '(02)',
      title: 'UI/UX & Frontend',
      description: 'Design is more than looks — it\'s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.',
      techStack: [
        '01 NextJs, TailwindCSS, GSAP',
        '02 Figma to Code',
        '03 HTML, CSS, JavaScript'
      ]
    }
  ];

  return (
    <div className="services-section">
      <div className="section-header">
        <motion.h2 variants={itemVariants}>WHAT I DO /</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>(SERVICES)</motion.p>
        <motion.p className="section-description" variants={itemVariants}>
          I specialize in building full-stack web applications<br />
          that are fast, reliable, and user-friendly. With a<br />
          solid foundation in both frontend and backend<br />
          technologies, I help bring ideas to life whether<br />
          it's for a business, a startup, or a product team.
        </motion.p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

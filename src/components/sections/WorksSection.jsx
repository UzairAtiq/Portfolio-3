import { motion } from 'framer-motion';
import WorkCard from '../ui/WorkCard';
import './WorksSection.css';

const WorksSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const works = [
    {
      number: '01',
      image: '/assets/images/work-1.jpg',
      title: 'Nura - E-commerce Platform',
      tags: ['DEVELOPMENT', '2025']
    },
    {
      number: '02',
      image: '/assets/images/work-2.jpg',
      title: 'Job Portal - Full-Stack Recruitment Platform',
      tags: ['DEVELOPMENT', '2025']
    }
  ];

  return (
    <div className="works-section">
      <div className="section-header">
        <motion.h2 variants={itemVariants}>SELECTED WORKS /</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>(PROJECTS)</motion.p>
        <motion.p className="section-description" variants={itemVariants}>
          Thoughtfully crafted digital<br />
          experiences that blend utility<br />
          and aesthetics into something<br />
          functional, memorable, and refined.
        </motion.p>
      </div>

      <div className="works-grid">
        {works.map((work, index) => (
          <WorkCard
            key={index}
            {...work}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

export default WorksSection;

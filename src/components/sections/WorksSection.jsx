import { motion } from 'framer-motion';
import WorkCard from '../ui/WorkCard';
import { projects } from '../../data/projects';
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
        {projects.map((project, index) => (
          <WorkCard
            key={project.id}
            number={String(index + 1).padStart(2, '0')}
            image={project.thumbnail}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

export default WorksSection;

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-bg-secondary rounded-lg overflow-hidden border border-bg-tertiary hover:border-accent-coral transition-all duration-300 group flex flex-col h-full hover:shadow-xl hover:shadow-accent-coral/20"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video shrink-0">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg-secondary via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-text-primary mb-2 group-hover:text-accent-coral transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-text-secondary font-body mb-4 line-clamp-3 grow">
          {project.description}
        </p>
        <div className="mt-auto">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-transparent border-2 border-accent-coral text-accent-coral font-body font-semibold rounded-md hover:bg-accent-coral hover:text-white transition-all duration-300 text-center"
          >
            View Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

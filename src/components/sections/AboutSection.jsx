import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
    },
  };

  const skills = {
    languages: ['Python', 'SQL', 'C++', 'Java', 'Typescript', 'JavaScript', 'Git', 'Postman', 'Docker', 'Firebase'],
    frameworks: ['React', 'Node.js', 'Express.js', 'Flask', 'Bootstrap', 'jQuery', 'TailwindCSS', 'Framer Motion', 'GSAP'],
    concepts: ['DSA', 'DBMS', 'OOP', 'Operating Systems', 'System Design']
  };

  return (
    <div className="about-section">
      <div className="about-layout">
        <div className="about-left">
          <motion.h3 variants={itemVariants}>Skills</motion.h3>

          <div className="skills-grid">
            <motion.div className="skill-category" variants={itemVariants}>
              <h4>Languages & Tools</h4>
              <ul>
                {skills.languages.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="skill-category" variants={itemVariants}>
              <h4>Frameworks & Libraries</h4>
              <ul>
                {skills.frameworks.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="skill-category" variants={itemVariants}>
              <h4>Core CS Concepts</h4>
              <ul>
                {skills.concepts.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div className="about-bio" variants={itemVariants}>
            <h3>(ABOUT ME)</h3>
            <p>I'm a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences.</p>
            <p>I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with curiosity, fueled by countless hours of experimenting with code and design.</p>
          </motion.div>
        </div>

        <div className="about-right">
          <motion.h2 variants={itemVariants}>
            DEVELOPER<br />
            DESIGNER<br />
            CREATOR/
          </motion.h2>
          <motion.div className="about-image" variants={itemVariants}>
            <motion.img
              src="/src/image_Hero/_ (1).jpeg"
              alt="Uzair Atiq"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

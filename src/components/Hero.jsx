import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';

const Hero = () => {
  const technologies = ['HTML5', 'CSS', 'JavaScript', 'Node.js', 'React', 'Git', 'Github'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-coral rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-coral rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-container mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Accent Line */}
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-accent-coral"
            ></motion.div>

            {/* Greeting */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-body text-text-secondary"
            >
              Hello<span className="text-accent-coral text-5xl leading-none">.</span>
            </motion.h2>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-text-primary"
            >
              I'm Uzair
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl font-heading font-bold text-text-primary"
            >
              Creative Developer & Designer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary max-w-xl leading-relaxed"
            >
              I'm a 20-year-old passionate developer crafting beautiful and functional web experiences
              with modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-accent-coral text-white font-body font-semibold rounded-md hover:bg-accent-coral-dark transition-all duration-300 shadow-lg hover:shadow-accent-coral/50"
              >
                Got a project?
              </a>
              <a
                href="/resume.pdf"
                className="px-8 py-3 bg-transparent border-2 border-accent-coral text-accent-coral font-body font-semibold rounded-md hover:bg-accent-coral hover:text-white transition-all duration-300"
              >
                My resume
              </a>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              variants={itemVariants}
              className="pt-8"
            >
              <div className="flex flex-wrap gap-4 items-center">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-text-muted font-body text-sm md:text-base hover:text-accent-coral transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-text-secondary hover:border-accent-coral hover:bg-accent-coral/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl text-text-secondary hover:text-accent-coral transition-colors duration-300" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            {/* Geometric Accents */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-4 border-accent-coral opacity-30 rotate-45"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-4 border-accent-coral opacity-30 rotate-45"></div>
            
            {/* Circular Frame with Image */}
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-accent-coral overflow-hidden shadow-2xl shadow-accent-coral/30">
                <img
                  src="/samurai.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Brackets */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-accent-coral text-6xl font-thin opacity-40">
                &lt;
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 text-accent-coral text-6xl font-thin opacity-40">
                &gt;
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-text-secondary text-sm font-body">Scroll Down</span>
        <BsChevronDown className="text-accent-coral text-2xl" />
      </motion.div>
    </section>
  );
};

export default Hero;

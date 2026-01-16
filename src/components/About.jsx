import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaMobileAlt, FaServer } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: FaCode,
      title: 'Website Development',
      description: 'Modern, responsive websites',
    },
    {
      icon: FaMobileAlt,
      title: 'App Development',
      description: 'Mobile-first applications',
    },
    {
      icon: FaServer,
      title: 'Website Hosting',
      description: 'Reliable hosting solutions',
    },
  ];

  const stats = [
    { number: '120+', label: 'Completed Projects' },
    { number: '95%', label: 'Client satisfaction' },
    { number: '10+', label: 'Years of experience' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <section id="about" className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar - Services */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-4 space-y-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 relative"
              >
                {/* Vertical Line with Dot */}
                {index < services.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-bg-tertiary">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-coral rounded-full"></div>
                  </div>
                )}
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-bg-secondary border border-bg-tertiary flex items-center justify-center shrink-0">
                  <service.icon className="text-2xl text-accent-coral" />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Content - About & Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-8 space-y-8"
          >
            {/* About Me Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
                About me
              </h2>
              <div className="w-20 h-1 bg-accent-coral"></div>
            </motion.div>

            {/* Biography */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-text-secondary leading-relaxed">
                I'm a passionate Creative Developer and Designer with a keen eye for detail and a love
                for crafting exceptional digital experiences. With expertise in modern web technologies,
                I transform ideas into beautiful, functional applications.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                My journey in web development started at a young age, and I've since honed my skills
                in both frontend and backend technologies. I believe in writing clean, maintainable code
                and creating user experiences that leave a lasting impression.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                When I'm not coding, I'm exploring new design trends, learning emerging technologies,
                and contributing to the developer community. I'm always excited to take on new challenges
                and collaborate on innovative projects.
              </p>
            </motion.div>

            {/* Statistics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent-coral mb-2">
                    {stat.number}
                  </div>
                  <div className="text-text-secondary font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

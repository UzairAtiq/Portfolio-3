import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FiCopy, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Replace with your actual contact info
  const email = "uzair@example.com";
  const phone = "+92 XXX XXXXXXX";

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay
      }
    })
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex items-center">
      <div className="max-w-container mx-auto w-full">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-20 h-1 bg-accent-coral"></div>
          <p className="text-lg text-text-secondary mt-6 max-w-2xl">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to
            discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Email Card */}
          <motion.div
            custom={0.2}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-bg-secondary border border-bg-tertiary rounded-lg p-6 hover:border-accent-coral transition-all duration-300 hover:shadow-xl hover:shadow-accent-coral/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent-coral/20 rounded-lg flex items-center justify-center">
                <HiMail className="text-2xl text-accent-coral" />
              </div>
              <div>
                <p className="text-text-secondary text-sm font-body mb-1">Email</p>
                <p className="text-text-primary text-lg font-body font-semibold">{email}</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy(email, 'email')}
              className="w-full px-4 py-2 bg-transparent border-2 border-accent-coral text-accent-coral rounded-md font-body font-semibold flex items-center justify-center gap-2 hover:bg-accent-coral hover:text-white transition-all duration-300"
            >
              {copiedEmail ? (
                <>
                  <FiCheck className="text-lg" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy className="text-lg" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            custom={0.4}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-bg-secondary border border-bg-tertiary rounded-lg p-6 hover:border-accent-coral transition-all duration-300 hover:shadow-xl hover:shadow-accent-coral/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent-coral/20 rounded-lg flex items-center justify-center">
                <HiPhone className="text-2xl text-accent-coral" />
              </div>
              <div>
                <p className="text-text-secondary text-sm font-body mb-1">Phone</p>
                <p className="text-text-primary text-lg font-body font-semibold">{phone}</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy(phone, 'phone')}
              className="w-full px-4 py-2 bg-transparent border-2 border-accent-coral text-accent-coral rounded-md font-body font-semibold flex items-center justify-center gap-2 hover:bg-accent-coral hover:text-white transition-all duration-300"
            >
              {copiedPhone ? (
                <>
                  <FiCheck className="text-lg" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy className="text-lg" />
                  <span>Copy Phone</span>
                </>
              )}
            </button>
          </motion.div>
        </div>

        {/* Toast notification */}
        <AnimatePresence>
          {(copiedEmail || copiedPhone) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-accent-coral text-white px-6 py-3 rounded-lg shadow-lg font-body font-semibold z-50"
            >
              ✓ Copied to clipboard!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;

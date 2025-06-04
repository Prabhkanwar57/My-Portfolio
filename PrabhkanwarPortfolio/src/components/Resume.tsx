import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950 text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Icon + Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-gray-900 dark:text-white flex items-center justify-center gap-3"
        >
          <span role="img" aria-label="resume">
            📄
          </span>
          My Resume
        </motion.h2>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-4 max-w-4xl mx-auto hover:shadow-blue-300 hover:scale-[1.01] transition-transform"
        >
          <img
            src="/resume-preview.png"
            alt="Prabhkanwar Resume"
            className="w-full rounded-xl shadow-xl"
          />

          <div className="mt-6">
            <a
              href="/Prabhkanwar_Singh_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-lg font-semibold shadow-lg"
            >
              ⬇ Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

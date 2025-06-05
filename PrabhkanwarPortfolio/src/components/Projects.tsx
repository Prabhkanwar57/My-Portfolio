import { motion } from 'framer-motion';

const projects = [
  {
    title: "MediTrack – Medication Reminder App (Android)",
    description:
      "Android app to track and remind users about their medication using Firebase, WorkManager, and SQLite. Features secure login, scheduled notifications, medication logs, and local data storage.",
    link: "https://drive.google.com/file/d/1ELih6YKBYIvliTBca1jQ-bYuBoGGRzP8/view?usp=drive_link",
    qr: "/qr-meditrack.png",
    tags: ["Android", "Firebase", "WorkManager", "SQLite"],
  },
  {
  title: "Global Football Match Tracker (Web Programming)",
  description:
    "Full-stack app to view, search, filter, and bookmark football matches. Includes role-based access, dashboards, and match management with MongoDB and Express.",
  link: "https://github.com/Prabhkanwar57/Web-Programming-Phase-3",
  qr: "/qr-footballqr.png",  
  tags: ["Node.js", "Express", "MongoDB", "EJS"],
},

  {
    title: "Insurance Broker Management System (J2EE)",
    description:
      "Web-based system to manage customers, policies, and claims. Includes CRUD, policy renewal, and Hibernate ORM for backend operations.",
    link: "https://github.com/Prabhkanwar57/j2ee_assignment_4-5",
    qr: "/qr-insurance.png",  
    tags: ["J2EE", "Servlets", "JSP", "Hibernate"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-950 text-center"
    >
      <h2 className="text-4xl font-bold mb-14 text-gray-900 dark:text-white">
        💼 Projects Showcase
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between text-left hover:shadow-xl transition-all duration-300"
          >
            <div>
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-800 dark:hover:text-blue-300"
              >
                🔗 View Project
              </a>

              {project.qr && (
                <div className="mt-5 text-center">
                  <img
                    src={project.qr}
                    alt="Project QR"
                    className="w-24 h-24 mx-auto rounded-lg shadow"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

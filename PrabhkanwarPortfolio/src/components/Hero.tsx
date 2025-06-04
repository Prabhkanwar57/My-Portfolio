import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#dfefff] to-[#f7f9ff] dark:from-gray-900 dark:to-gray-950 px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Hey, I'm <span className="text-blue-600 dark:text-blue-400">Prabhkanwar</span>
          </h1>

          <h2 className="text-lg md:text-xl font-mono text-gray-600 dark:text-gray-300 mb-6">
            <Typewriter
              words={[
                'Full-stack Developer',
                'React & Node.js Engineer',
                'Android App Builder',
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-base text-gray-700 dark:text-gray-400 max-w-lg mb-8">
            I build modern web and Android apps using real-world tools like React, Firebase,
            Node.js, SQLite, and Java. Currently pursuing IT Solutions at Humber College, Toronto.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow"
            >
              🚀 View Projects
            </a>
            <a
              href="/Prabhkanwar_Singh_Resume.pdf"
              download
              className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Right Side Avatar or Illustration */}
        <div className="flex justify-center">
          <img
            src="/avatar.jpg" // replace with your own avatar or illustration
            alt="Developer Illustration"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-blue-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

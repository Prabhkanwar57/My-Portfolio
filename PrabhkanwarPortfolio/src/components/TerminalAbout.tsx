import { Typewriter } from 'react-simple-typewriter';

const TerminalAbout = () => {
  return (
    <section className="bg-black text-green-400 font-mono px-4 py-16 min-h-[500px]">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Terminal Style Header */}
        <div className="bg-green-900 text-green-300 rounded px-4 py-2 w-fit font-semibold shadow-md shadow-green-700 mb-6">
          About Me <span className="text-green-400 animate-pulse">❯</span>
        </div>

        {/* Typing Intro */}
        <h3 className="text-xl md:text-2xl font-bold text-green-300">
          <Typewriter
            words={[
              "Hi, I'm Prabhkanwar — a full-stack developer 👨‍💻",
              'I build real-world web & mobile apps 🚀',
              'Specializing in React, Node.js, and Android 📱',
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h3>

        {/* About Me Block */}
        <div>
          <p className="text-white leading-relaxed text-sm md:text-base pl-2 border-l-4 border-green-500">
            I'm <span className="text-green-300 font-semibold">Prabhkanwar Singh Sabharwal</span> — a dedicated full-stack
            developer passionate about building modern, scalable digital experiences. I love working on real-world projects that solve real problems.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-green-300 text-lg font-bold mb-2">Skills</h3>
          <ul className="pl-6 text-white list-disc text-sm md:text-base">
            <li>Frontend: React, Tailwind CSS, HTML, JavaScript, TypeScript</li>
            <li>Mobile: Java, Kotlin, Android Studio</li>
            <li>Backend & DB: Node.js, Express, MongoDB, Firebase, SQLite, PostgreSQL</li>
            <li>Tools: Git, Vercel, QGIS, Tableau</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-green-300 text-lg font-bold mb-2">Contact</h3>
          <div className="text-white space-y-1 text-sm md:text-base">
            <p>
              💼 LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/prabhkanwarsingh/"
                target="_blank"
                rel="noreferrer"
                className="underline text-green-300 hover:text-green-200"
              >
                prabhkanwarsingh
              </a>
            </p>
            <p>
              💻 GitHub:{' '}
              <a
                href="https://github.com/Prabhkanwar57"
                target="_blank"
                rel="noreferrer"
                className="underline text-green-300 hover:text-green-200"
              >
                Prabhkanwar57
              </a>
            </p>
            <p>
              📧 Email:{' '}
              <a
                href="mailto:kanwarsabharwal@gmail.com"
                className="underline text-green-300 hover:text-green-200"
              >
                kanwarsabharwal@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalAbout;

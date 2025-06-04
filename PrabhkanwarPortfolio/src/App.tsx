import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import TerminalAbout from './components/TerminalAbout';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-black dark:text-white scroll-smooth">
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md dark:shadow-xl">
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-blue-600 dark:text-blue-400">Prabhkanwar</span> Singh Sabharwal
        </h1>
        <DarkModeToggle />
      </header>

      <main className="space-y-28">
        <Hero />
        <Projects />
        <Resume />
        <TerminalAbout />
        <Contact />
      </main>

      <footer className="text-center py-6 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Prabhkanwar Singh Sabharwal.
      </footer>
    </div>
  );
}

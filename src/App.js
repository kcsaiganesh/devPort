import './App.css';
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext';
import Landingpage from './pages/Landingpage';
import Navbar from './components/Navbar';
import Project from './pages/Projects';
import Resume from './pages/Resume';
import Contacts from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-cyber-900 text-gray-200 font-mono transition-colors duration-300 relative">
        {/* Cyberpunk Scanline Overlay */}
        <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20"></div>
        <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-10 blur-[1px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"></div>

        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

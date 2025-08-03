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
      <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
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

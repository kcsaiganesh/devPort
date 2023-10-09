import './App.css';
import { Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage';
import Navbar from './components/Navbar';
import Project from './pages/Projects';
import Resume from './pages/Resume';
import Contacts from './pages/Contact';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contacts />} />

      </Routes>
    </div>
  );
}

export default App;

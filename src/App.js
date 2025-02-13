import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NotesSection from "./components/NotesSection";
import ResourcesSection from "./components/ResourcesSection";
import CodePractice from "./components/CodePractice";
import TaskList from "./components/TaskList";
import "./style.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/notes" className="nav-link">Notes</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
          <Link to="/practice" className="nav-link">Code Practice</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/notes" element={<NotesSection />} />
            <Route path="/resources" element={<ResourcesSection />} />
            <Route path="/practice" element={<CodePractice />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

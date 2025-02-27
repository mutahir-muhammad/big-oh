import "./Navigation.css";
import { X } from "lucide-react";

function Navigation({ activeSection, setActiveSection, isOpen, onClose }) {
  const handleNavClick = (section) => {
    setActiveSection(section);
    onClose();
  };

  return (
    <nav className={`navigation ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        <X size={24} />
      </button>
      <ul className="nav-list">
        <li
          className={`nav-item ${activeSection === "home" ? "active" : ""}`}
          onClick={() => handleNavClick("home")}
        >
          <span className="nav-icon">🏠</span>
          <span className="nav-text">Home</span>
        </li>
        <li
          className={`nav-item ${activeSection === "bigO" ? "active" : ""}`}
          onClick={() => handleNavClick("bigO")}
        >
          <span className="nav-icon">O</span>
          <span className="nav-text">Big O Notation</span>
        </li>
        <li
          className={`nav-item ${activeSection === "bigOmega" ? "active" : ""}`}
          onClick={() => handleNavClick("bigOmega")}
        >
          <span className="nav-icon">Ω</span>
          <span className="nav-text">Big Omega Notation</span>
        </li>
        <li
          className={`nav-item ${activeSection === "bigTheta" ? "active" : ""}`}
          onClick={() => handleNavClick("bigTheta")}
        >
          <span className="nav-icon">Θ</span>
          <span className="nav-text">Big Theta Notation</span>
        </li>
        <li
          className={`nav-item ${
            activeSection === "commonComplexities" ? "active" : ""
          }`}
          onClick={() => handleNavClick("commonComplexities")}
        >
          <span className="nav-icon">⏱️</span>
          <span className="nav-text">Common Complexities</span>
        </li>
        <li
          className={`nav-item ${
            activeSection === "codeAnalyzer" ? "active" : ""
          }`}
          onClick={() => handleNavClick("codeAnalyzer")}
        >
          <span className="nav-icon">🔍</span>
          <span className="nav-text">Code Analyzer</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

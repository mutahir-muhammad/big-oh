import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import BigOSection from "./components/BigOSection"
import BigOmegaSection from "./components/BigOmegaSection"
import BigThetaSection from "./components/BigThetaSection"
import CommonComplexities from "./components/CommonComplexities"
import CodeAnalyzer from "./components/CodeAnalyzer"
import Footer from "./components/Footer"
import { Menu } from "lucide-react"

function App() {
  console.log("App component is rendering...");
  const [activeSection, setActiveSection] = useState("bigO")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section")
      const newVisibleSections = {}

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0
        newVisibleSections[section.id] = isVisible
      })

      setVisibleSections(newVisibleSections)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case "bigO":
        return <BigOSection isVisible={visibleSections["bigO"]} />
      case "bigOmega":
        return <BigOmegaSection isVisible={visibleSections["bigOmega"]} />
      case "bigTheta":
        return <BigThetaSection isVisible={visibleSections["bigTheta"]} />
      case "commonComplexities":
        return <CommonComplexities isVisible={visibleSections["commonComplexities"]} />
      case "codeAnalyzer":
        return <CodeAnalyzer isVisible={visibleSections["codeAnalyzer"]} />
      default:
        return <BigOSection isVisible={visibleSections["bigO"]} />
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="content">
          <h1 className="gradient-heading big-o-heading">Big O Notation</h1>
          {renderSection()}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App


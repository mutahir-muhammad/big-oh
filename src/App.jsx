import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import BigOSection from "./components/BigOSection"
import BigOmegaSection from "./components/BigOmegaSection"
import BigThetaSection from "./components/BigThetaSection"
import CommonComplexities from "./components/CommonComplexities"
import CodeAnalyzer from "./components/CodeAnalyzer"
import Footer from "./components/Footer"
import { Menu } from "lucide-react"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />
      case "bigO":
        return <BigOSection />
      case "bigOmega":
        return <BigOmegaSection />
      case "bigTheta":
        return <BigThetaSection />
      case "commonComplexities":
        return <CommonComplexities />
      case "codeAnalyzer":
        return <CodeAnalyzer />
      default:
        return <Home />
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
        <main className="content">{renderSection()}</main>
      </div>
      <Footer />
    </div>
  )
}

export default App


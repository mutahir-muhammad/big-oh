import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">Asymptotic</span>
        <span className="logo-accent">Notation</span>
      </div>
      <h1 className="gradient-heading main-title">Big O Notation Explorer</h1>
      <p className="subtitle">Understanding algorithm efficiency for JavaScript beginners</p>
    </header>
  )
}

export default Header


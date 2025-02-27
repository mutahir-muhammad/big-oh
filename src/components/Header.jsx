import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className=" gradient-heading logo-text">Asymptotic</span>
        <span className="gradient-heading logo-accent">Notation</span>
      </div>
      <p className="subtitle">Understanding algorithm efficiency for JavaScript beginners</p>
    </header>
  )
}

export default Header


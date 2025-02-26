import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Asymptotic Notation Explorer - A learning tool for JavaScript beginners</p>
        <p className="copyright">&copy; {new Date().getFullYear()} - Built with React</p>
      </div>
    </footer>
  )
}

export default Footer


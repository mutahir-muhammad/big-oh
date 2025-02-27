import { useEffect, useRef } from "react"
import "./Sections.css"

function BigOSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className="section">
      <h1 className="gradient-heading big-o-heading">Big O Notation</h1>
      <h2 className="gradient-heading section-title">Understanding Big O</h2>
      <div className="card">
        <h3 className="neon-text" style={{ color: "#00e5ff" }}>
          What is Big O Notation?
        </h3>
        <p>
          Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument
          tends towards a particular value or infinity. In computer science, it's used to classify algorithms according
          to how their run time or space requirements grow as the input size grows.
        </p>
        <p>
          Big O specifically describes the <strong>worst-case scenario</strong>, and can be used to describe the
          execution time required or the space used by an algorithm.
        </p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#00e5ff" }}>
          How to Express Big O
        </h3>
        <p>
          Big O is expressed using the O symbol followed by a function in parentheses. For example, O(n) represents
          linear time complexity, where n is the input size.
        </p>

        <div className="code-block">
          <pre>
            {`// O(1) - Constant Time
function getFirstElement(array) {
  return array[0];
}`}
          </pre>
        </div>

        <div className="code-block">
          <pre>
            {`// O(n) - Linear Time
function findElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}`}
          </pre>
        </div>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#00e5ff" }}>
          Big O Rules of Thumb
        </h3>
        <ul className="rules-list">
          <li>
            <strong>Drop the constants:</strong> O(2n) becomes O(n)
          </li>
          <li>
            <strong>Drop the non-dominant terms:</strong> O(n² + n) becomes O(n²)
          </li>
          <li>
            <strong>Different inputs, different variables:</strong> Use different variables like O(a + b) instead of O(n
            + m)
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BigOSection


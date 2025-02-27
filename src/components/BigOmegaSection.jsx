import { useEffect, useRef } from "react";
import "./Sections.css";

function BigOmegaSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div ref={sectionRef} className="section">
      <h2 className="gradient-heading section-title">Big Omega Notation</h2>
      <div className="card">
        <h3 className="neon-text" style={{ color: "#ff00cc" }}>
          What is Big Omega Notation?
        </h3>
        <p>
          Big Omega (Ω) notation describes the{" "}
          <strong>best-case scenario</strong> for an algorithm's time
          complexity. It provides a lower bound on the growth rate of an
          algorithm's running time.
        </p>
        <p>
          While Big O tells us the upper limit of an algorithm's growth rate,
          Big Omega tells us the lower limit. It represents the fastest an
          algorithm can possibly run.
        </p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#ff00cc" }}>
          Big Omega Examples
        </h3>
        <p>
          For many algorithms, the best-case scenario is often much better than
          the worst-case:
        </p>

        <div className="code-block">
          <pre>
            {`// Ω(1) - Best case for search in an array
function findElement(array, element) {
  // If the first element is what we're looking for,
  // we only need one operation (best case)
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}`}
          </pre>
        </div>

        <p>
          In the example above, the function has a best-case time complexity of
          Ω(1) if the element we're looking for is at the beginning of the
          array. However, its worst-case (Big O) is O(n) if the element is at
          the end or not present.
        </p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#ff00cc" }}>
          When to Use Big Omega
        </h3>
        <p>
          Big Omega is less commonly used than Big O in practical algorithm
          analysis, as we're typically more concerned with the worst-case
          performance. However, understanding the best-case can be useful when:
        </p>
        <ul className="rules-list">
          <li>Analyzing algorithms with highly variable performance</li>
          <li>Establishing lower bounds for problem complexity</li>
          <li>Proving that an algorithm is optimal</li>
        </ul>
      </div>
    </div>
  );
}

export default BigOmegaSection;

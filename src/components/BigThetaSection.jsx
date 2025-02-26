import "./Sections.css"

function BigThetaSection() {
  return (
    <div className="section">
      <h2 className="gradient-heading section-title">Big Theta Notation</h2>
      <div className="card">
        <h3 className="neon-text" style={{ color: "#00ffa3" }}>
          What is Big Theta Notation?
        </h3>
        <p>
          Big Theta (Θ) notation describes the <strong>tight bound</strong> on the growth rate of an algorithm's running
          time. It's used when the upper bound (Big O) and lower bound (Big Omega) are the same.
        </p>
        <p>
          In simpler terms, Big Theta gives us the exact rate of growth, not just an upper or lower bound. It tells us
          that an algorithm's running time grows exactly at a certain rate.
        </p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#00ffa3" }}>
          Big Theta Examples
        </h3>
        <p>When an algorithm has the same best-case and worst-case scenarios:</p>

        <div className="code-block">
          <pre>
            {`// Θ(n) - Linear time for array traversal
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}`}
          </pre>
        </div>

        <p>
          In this example, the function always performs exactly n operations for an array of size n, so its time
          complexity is Θ(n). The best-case and worst-case are identical.
        </p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#00ffa3" }}>
          Big O vs. Big Theta
        </h3>
        <p>
          While Big O represents an upper bound (it could be worse than this, but not better), Big Theta represents an
          exact bound (it's exactly this, not better or worse).
        </p>
        <p>
          In practice, when people say an algorithm is "O(n)," they often actually mean it's "Θ(n)" - that the algorithm
          grows exactly linearly with the input size. However, Big O is more commonly used in discussions because it's
          more important to know the worst-case scenario.
        </p>
      </div>
    </div>
  )
}

export default BigThetaSection


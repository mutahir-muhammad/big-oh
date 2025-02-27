import { useEffect, useRef } from "react"
import "./Sections.css";

function CommonComplexities() {
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
      <h2 className="gradient-heading section-title">Common Time Complexities</h2>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#3393ff" }}>
          O(n²) - Quadratic Time
        </h3>
        <p>The execution time grows quadratically with the input size.</p>
        <div className="code-block">
          <pre>
            {`function bubbleSort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}`}
          </pre>
        </div>
        <p>Examples: Bubble sort, selection sort, insertion sort (worst case)</p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#3393ff" }}>
          O(2ⁿ) - Exponential Time
        </h3>
        <p>
          The execution time doubles with each additional element in the input.
        </p>
        <div className="code-block">
          <pre>
            {`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}
          </pre>
        </div>
        <p>Examples: Recursive Fibonacci, brute-force subset problems</p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#3393ff" }}>
          O(n!) - Factorial Time
        </h3>
        <p>
          The execution time grows factorially with the input size.
        </p>
        <div className="code-block">
          <pre>
            {`function permute(array, start = 0) {
  if (start >= array.length - 1) {
    console.log(array);
    return;
  }
  for (let i = start; i < array.length; i++) {
    [array[start], array[i]] = [array[i], array[start]];
    permute(array, start + 1);
    [array[start], array[i]] = [array[i], array[start]];
  }
}`}
          </pre>
        </div>
        <p>Examples: Traveling Salesman Problem (brute force), permutations generation</p>
      </div>
    </div>
  );
}

export default CommonComplexities;

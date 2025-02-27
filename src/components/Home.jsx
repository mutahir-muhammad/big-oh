import { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./Home.css";

const AnimatedSection = ({ children, delay }) => {
  const ref = useRef(null);
  const [springs, api] = useSpring(() => ({
    opacity: 0, // Start invisible
    transform: "translateY(50px)", // Add a slight offset
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is intersecting:", entry.isIntersecting); // Debugging
        if (entry.isIntersecting) {
          api.start({
            opacity: 1,
            transform: "translateY(0px)",
            delay: delay,
            config: { tension: 280, friction: 60 },
          });
          observer.unobserve(entry.target); // Prevent re-triggering
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [api, delay]);

  return (
    <div ref={ref}>
      <animated.div style={springs}>{children}</animated.div>
    </div>
  );
};

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="gradient-heading main-title">
          Asymptotic Notation Explorer
        </h1>
        <p className="subtitle">Unraveling the Complexity of Algorithms</p>
      </header>

      <main className="home-content">
        <AnimatedSection delay={200}>
          <section className="section">
            <h2 className="gradient-heading section-title">Big O Notation</h2>
            <div className="card">
              <h3 className="neon-text" style={{ color: "#00e5ff" }}>
                The Essence of Efficiency
              </h3>
              <p>
                Big O notation is the language of algorithm efficiency. It
                describes how the runtime or space requirements of an algorithm
                grow as the input size increases, focusing on the worst-case
                scenario.
              </p>
              <p>
                When we talk about Big O, we're essentially asking: "As our
                input grows arbitrarily large, how does our algorithm's
                performance change?"
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <section className="section">
            <h2 className="gradient-heading section-title">
              Big Omega (Ω) Notation
            </h2>
            <div className="card">
              <h3 className="neon-text" style={{ color: "#ff00cc" }}>
                The Best-Case Scenario
              </h3>
              <p>
                While Big O gives us the upper bound, Big Omega provides the
                lower bound on the growth rate of an algorithm's running time.
                It represents the best-case scenario for an algorithm's
                performance.
              </p>
              <p>
                Big Omega is less commonly used in practical analysis but is
                crucial for understanding the full spectrum of an algorithm's
                behavior.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <section className="section">
            <h2 className="gradient-heading section-title">
              Big Theta (Θ) Notation
            </h2>
            <div className="card">
              <h3 className="neon-text" style={{ color: "#00ffa3" }}>
                The Tight Bound
              </h3>
              <p>
                Big Theta provides a tight bound on the growth rate of an
                algorithm's running time. It's used when the upper bound (Big O)
                and lower bound (Big Omega) are the same.
              </p>
              <p>
                When we use Big Theta, we're saying that our algorithm grows at
                exactly this rate, not faster or slower.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={800}>
          <section className="section">
            <h2 className="gradient-heading section-title">
              Common Time Complexities
            </h2>
            <div className="card">
              <h3 className="neon-text" style={{ color: "#3393ff" }}>
                The Spectrum of Efficiency
              </h3>
              <p>
                Algorithms can have various time complexities, ranging from
                highly efficient to prohibitively slow:
              </p>
              <ul className="complexity-list">
                <li>
                  <span className="complexity-badge complexity-o1">O(1)</span>{" "}
                  Constant Time
                </li>
                <li>
                  <span className="complexity-badge complexity-ologn">
                    O(log n)
                  </span>{" "}
                  Logarithmic Time
                </li>
                <li>
                  <span className="complexity-badge complexity-on">O(n)</span>{" "}
                  Linear Time
                </li>
                <li>
                  <span className="complexity-badge complexity-onlogn">
                    O(n log n)
                  </span>{" "}
                  Linearithmic Time
                </li>
                <li>
                  <span className="complexity-badge complexity-on2">O(n²)</span>{" "}
                  Quadratic Time
                </li>
                <li>
                  <span className="complexity-badge complexity-o2n">O(2ⁿ)</span>{" "}
                  Exponential Time
                </li>
              </ul>
              <p>
                Understanding these complexities is crucial for writing
                efficient algorithms and choosing the right data structures for
                your problems.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={1000}>
          <section className="section">
            <h2 className="gradient-heading section-title">Code Analyzer</h2>
            <div className="card">
              <h3 className="neon-text" style={{ color: "#a64dff" }}>
                Demystifying Your Code
              </h3>
              <p>
                Our code analyzer helps you understand the time complexity of
                your JavaScript functions. By examining loops, recursion, and
                other patterns, it provides insights into how your code will
                perform as input sizes grow.
              </p>
              <p>
                Remember, optimizing prematurely can lead to unnecessary
                complexity. Use the analyzer to identify bottlenecks and
                optimize where it matters most.
              </p>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
}

export default Home;

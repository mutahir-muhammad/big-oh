import "./Home.css"
import React from "react"
import { useSpring, animated, useTrail } from "react-spring"
import { useInView } from "react-intersection-observer"

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [spring, api] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(50px)" },
  }))

  const trail = useTrail(React.Children.count(children), {
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: inView ? 1 : 0, transform: inView ? "translateX(0px)" : "translateX(-20px)" },
    config: { tension: 280, friction: 60 },
  })

  // Start animation when inView is true
  React.useEffect(() => {
    if (inView) {
      api.start({ opacity: 1, transform: "translateY(0px)" })
    }
  }, [inView, api])

  return (
    <div ref={ref} className="animated-section">
      <animated.div style={spring}>
        {trail.map((props, i) => (
          <animated.div key={i} style={props}>
            {React.cloneElement(children[i], { style: { willChange: "transform, opacity" } })}
          </animated.div>
        ))}
      </animated.div>
    </div>
  )
}


const Home = () => {
  const headerSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 280, friction: 60 },
    delay: 300,
  })

  return (
    <div className="home">
      <animated.header className="home-header" style={headerSpring}>
        <h1 className="gradient-heading main-title">Asymptotic Notation Explorer</h1>
        <p className="subtitle">Unraveling the Complexity of Algorithms</p>
      </animated.header>

      <main className="home-content">
        <AnimatedSection index={0}>
          <h2 className="gradient-heading section-title">Big O Notation</h2>
          <div className="section-content">
            <h3 className="neon-text" style={{ color: "#00e5ff" }}>
              The Essence of Efficiency
            </h3>
            <p>
              Big O notation is the language of algorithm efficiency. It describes how the runtime or space requirements
              of an algorithm grow as the input size increases, focusing on the worst-case scenario.
            </p>
            <p>
              When we talk about Big O, we're essentially asking: "As our input grows arbitrarily large, how does our
              algorithm's performance change?"
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection index={1}>
          <h2 className="gradient-heading section-title">Big Omega (Ω) Notation</h2>
          <div className="section-content">
            <h3 className="neon-text" style={{ color: "#ff00cc" }}>
              The Best-Case Scenario
            </h3>
            <p>
              While Big O gives us the upper bound, Big Omega provides the lower bound on the growth rate of an
              algorithm's running time. It represents the best-case scenario for an algorithm's performance.
            </p>
            <p>
              Big Omega is less commonly used in practical analysis but is crucial for understanding the full spectrum
              of an algorithm's behavior.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection index={2}>
          <h2 className="gradient-heading section-title">Big Theta (Θ) Notation</h2>
          <div className="section-content">
            <h3 className="neon-text" style={{ color: "#00ffa3" }}>
              The Tight Bound
            </h3>
            <p>
              Big Theta provides a tight bound on the growth rate of an algorithm's running time. It's used when the
              upper bound (Big O) and lower bound (Big Omega) are the same.
            </p>
            <p>
              When we use Big Theta, we're saying that our algorithm grows at exactly this rate, not faster or slower.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection index={3}>
          <h2 className="gradient-heading section-title">Common Time Complexities</h2>
          <div className="section-content">
            <h3 className="neon-text" style={{ color: "#3393ff" }}>
              The Spectrum of Efficiency
            </h3>
            <p>Algorithms can have various time complexities, ranging from highly efficient to prohibitively slow:</p>
            <ul className="complexity-list">
              <li>
                <span className="complexity-badge complexity-o1">O(1)</span> Constant Time
              </li>
              <li>
                <span className="complexity-badge complexity-ologn">O(log n)</span> Logarithmic Time
              </li>
              <li>
                <span className="complexity-badge complexity-on">O(n)</span> Linear Time
              </li>
              <li>
                <span className="complexity-badge complexity-onlogn">O(n log n)</span> Linearithmic Time
              </li>
              <li>
                <span className="complexity-badge complexity-on2">O(n²)</span> Quadratic Time
              </li>
              <li>
                <span className="complexity-badge complexity-o2n">O(2ⁿ)</span> Exponential Time
              </li>
            </ul>
            <p>
              Understanding these complexities is crucial for writing efficient algorithms and choosing the right data
              structures for your problems.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection index={4}>
          <h2 className="gradient-heading section-title">Code Analyzer</h2>
          <div className="section-content">
            <h3 className="neon-text" style={{ color: "#a64dff" }}>
              Demystifying Your Code
            </h3>
            <p>
              Our code analyzer helps you understand the time complexity of your JavaScript functions. By examining
              loops, recursion, and other patterns, it provides insights into how your code will perform as input sizes
              grow.
            </p>
            <p>
              Remember, optimizing prematurely can lead to unnecessary complexity. Use the analyzer to identify
              bottlenecks and optimize where it matters most.
            </p>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}

export default Home


import "./Sections.css"

function CommonComplexities() {
  return (
    <div className="section">
      <h2 className="gradient-heading section-title">Common Time Complexities</h2>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#3393ff" }}>
          Complexity Hierarchy
        </h3>
        <p>Time complexities are listed below from most efficient to least efficient:</p>
        <div className="complexity-list">
          <span className="complexity-badge complexity-o1">O(1)</span>
          <span className="complexity-badge complexity-ologn">O(log n)</span>
          <span className="complexity-badge complexity-on">O(n)</span>
          <span className="complexity-badge complexity-onlogn">O(n log n)</span>
          <span className="complexity-badge complexity-on2">O(n²)</span>
          <span className="complexity-badge complexity-o2n">O(2ⁿ)</span>
        </div>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#3393ff" }}>
          O(1) - Constant Time
        </h3>
        <p>The execution time remains constant regardless of the input size.</p>
        <div className="code-block">
          <pre>
            {`function getFirstElement(array) {
  return array[0]; // Always one operation
}`}
          </pre>
        </div>
        <p>Examples: Array access by index, object property lookup, simple arithmetic operations</p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#3393ff" }}>
          O(log n) - Logarithmic Time
        </h3>
        <p>
          The execution time grows logarithmically with the input size. Each step reduces the problem size by a factor.
        </p>
        <div className="code-block">
          <pre>
            {`function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (sortedArray[mid] === target) {
      return mid;
    }
    
    if (sortedArray[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}`}
          </pre>
        </div>
        <p>Examples: Binary search, certain divide and conquer algorithms, balanced binary tree operations</p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#3393ff" }}>
          O(n) - Linear Time
        </h3>
        <p>The execution time grows linearly with the input size.</p>
        <div className="code-block">
          <pre>
            {`function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}`}
          </pre>
        </div>
        <p>Examples: Linear search, array traversal, string traversal</p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#3393ff" }}>
          O(n log n) - Linearithmic Time
        </h3>
        <p>The execution time grows in proportion to n log n, where n is the input size.</p>
        <div className="code-block">
          <pre>
            {`function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}`}
          </pre>
        </div>
        <p>Examples: Efficient sorting algorithms (merge sort, heap sort, quick sort on average)</p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#3393ff" }}>
          O(n²) - Quadratic Time
        </h3>
        <p>The execution time grows in proportion to the square of the input size.</p>
        <div className="code-block">
          <pre>
            {`function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}`}
          </pre>
        </div>
        <p>Examples: Nested loops, simple sorting algorithms (bubble sort, insertion sort, selection sort)</p>
      </div>

      <div className="card">
        <h3 className="neon-text" style={{ color: "#3393ff" }}>
          O(2ⁿ) - Exponential Time
        </h3>
        <p>The execution time doubles with each addition to the input size.</p>
        <div className="code-block">
          <pre>
            {`function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}
          </pre>
        </div>
        <p>Examples: Recursive calculation of Fibonacci numbers, brute force solutions to traveling salesman problem</p>
      </div>
    </div>
  )
}

export default CommonComplexities


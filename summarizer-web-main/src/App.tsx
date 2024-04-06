import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error("There was an error!", error));
  }, []);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Data from the backend: {data}
        </p>
      </div>
    </>
  )
}

export default App

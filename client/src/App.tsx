import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://13.61.35.109:4000/api/message")
        if (!response.ok) {
          throw new Error("Failed to fetch message")
        }
        const data = await response.json()
        setMessage(data.message)
      } catch (error:any) {
        setError(error.message)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="app">
      <div className="box">
        <h1>🚀 Dockerized React App</h1>

        {error && <p className="error">{error}</p>}

        {!error && <h2 className="message">{message}</h2>}
      </div>
    </div>
  )
}

export default App
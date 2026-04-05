import { useState, useEffect } from 'react'
import Dashboard from './pages/Dashboard'
import Instructions from './pages/Instructions'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handler = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  if (hash === '#instructions') return <Instructions />
  return <Dashboard />
}

export default App

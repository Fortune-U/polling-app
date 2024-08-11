import { useState } from 'react'
import Home from './Pages/Home'
import PollApp from './Pages/PollApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PollApp />
    </>
  )
}

export default App

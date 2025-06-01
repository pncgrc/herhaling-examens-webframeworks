import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Checkbox from './components/Checkbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Checkbox />
    </>
  )
}

export default App

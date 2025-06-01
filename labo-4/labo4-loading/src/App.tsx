import { useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState<boolean>(false);
 
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <>
      {
        loading ? <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="" /> :
        <button onClick={handleClick}>Start loading</button>
      }
    </>
  )
}

export default App

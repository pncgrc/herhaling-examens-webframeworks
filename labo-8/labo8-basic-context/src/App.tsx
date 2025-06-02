import { createContext, useState } from 'react'
import './App.css'
import SquareRow from './components/SquareRow';
import SelectBox from './components/SelectBox';

interface SettingsContext {
  color: string;
  setColor: (color: string) => void;
}

export const SettingsContext = createContext<SettingsContext>({color: "red", setColor: () => {}}) // functie moet een een default waarde krijgen, dus vandaar een lege functie

function App() {
  const [color, setColor] = useState<string>("red");

  return (
    <SettingsContext.Provider value={{color: color, setColor: setColor}}>
      <SelectBox />
      <SquareRow />
    </SettingsContext.Provider>
  )
}

export default App

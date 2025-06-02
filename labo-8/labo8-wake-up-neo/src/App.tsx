import { createContext, useContext, useState } from 'react'

interface TextContext {
  text: string;
}

const TextContext = createContext<TextContext>({text: "Knock, Knock, Neo"});

const FourthLine = () => {
  const { text } = useContext(TextContext);

  return(
    <><p>{text}</p></>
  )
};
const ThirdLine = () => <><p>Follow the white rabbit.</p><FourthLine/></>;
const SecondLine = () => <><p>The matrix has you...</p><ThirdLine/></>;
const FirstLine = () => <><p>Wake Up, Neo...</p><SecondLine/></>

const App = () => {
  const [text, setText] = useState("Knock, Knock, Neo");
  return (
    <TextContext.Provider value={{text: text}}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <div style={{backgroundColor: "black", color: "#4AF626", display: "flex", flexDirection: "column", padding: 20}}> 
        <FirstLine />
      </div>
    </TextContext.Provider>
  )
}

export default App
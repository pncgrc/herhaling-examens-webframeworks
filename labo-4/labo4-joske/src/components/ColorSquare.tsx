import { useState } from "react";


const ColorSquare = () => {
  const [color, setColor] = useState<string>("red");
  const [colorIndex, setColorIndex] = useState<number>(0);
  const [name, setName] = useState<string>("Joske");
  const [emotion, setEmotion] = useState<string>(":(");
  const [shape, setShape] = useState<string>("square");

  const handleColorChange: React.MouseEventHandler<HTMLDivElement> = () => {
    const colors = ["blue", "green", "purple", "red" ];
    setColor(colors[colorIndex]);
    if (colorIndex === 3) {
        setColorIndex(0);
    }
    else {
        //setColorIndex((prevIndex) => prevIndex + 1);
        setColorIndex(colorIndex + 1);
    }
  }

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  }

  const handleEmotionChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setEmotion(event.target.value);
  }

  const handleShapeChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    shape === "square" ? setShape("circle") : setShape("square");
  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <p><b>{name}</b></p>
      <div className={shape} style={{backgroundColor: color}} onClick={handleColorChange}>
        <p>{emotion}</p>
      </div>
      <input type="text" onChange={handleNameChange} value={name}/>
      <button onClick={() => setName("Joske")}>Reset</button>
      <select name="" id="" onChange={handleEmotionChange} value={emotion}>
        <option value=":)">:)</option>
        <option value=":(">:(</option>
        <option value=":D">:D</option>
        <option value=":'(">:'(</option>
      </select>
      <input type="checkbox" onChange={handleShapeChange}/>
    </div>
  )
}

export default ColorSquare;
import { useState } from "react";

const ColorPicker = () => {
    const [color, setColor] = useState<string>("#000000");

    const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setColor(event.target.value);
    }

    const handleChangeSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        setColor(event.target.value);
    }

    return(
        <>
            <input type="color" value={color} onChange={handleChangeInput}/>
            <select name="" id="" onChange={handleChangeSelect} value={color} style={{ display: "block", margin: "15px auto" }}>
                <option value="#000000">#000000</option>
                <option value="#FF0000">#FF0000</option>
                <option value="#00FF00">#00FF00</option>
                <option value="#0000FF">#0000FF</option>
            </select>
            <div style={{ backgroundColor: color, width: 200, height: 200}}></div>
        </>
    );
}

export default ColorPicker;
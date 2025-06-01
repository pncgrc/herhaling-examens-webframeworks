import { useState } from "react";


const InputFields = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.target.value);
    }

    return(
        <div style={{ display: "flex", flexDirection: "row" }}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <input type="text" value={inputValue} onChange={handleChange} />
            <input type="text" value={inputValue} onChange={handleChange} />
            <input type="text" value={inputValue} onChange={handleChange} />
            <input type="text" value={inputValue} onChange={handleChange} />
        </div>
    );
}

export default InputFields;
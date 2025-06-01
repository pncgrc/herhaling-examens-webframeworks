import { useState } from "react";

const Checkbox = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setVisible(event.target.checked);
    }

    return(
        <>
            <input type="checkbox" checked={visible} onChange={handleChange}/><label htmlFor="">Show/Hide</label>
            {
                visible && <div
                    style={{
                        border: "1px solid black",
                        width: "800px",
                        height: "400px",
                        padding: "5px",
                        backgroundImage: 'url("https://media.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif")',
                }}></div>
            }
            
        </>
    );
}

export default Checkbox;
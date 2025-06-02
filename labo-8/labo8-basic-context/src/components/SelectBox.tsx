import { useContext } from "react";
import { SettingsContext } from "../App";

const SelectBox = () => {
    const { color, setColor } = useContext(SettingsContext);

    return(
        <>
            <select name="" id="" value={color} onChange={(event) => setColor(event.target.value)}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
            </select>
        </>
    );
}

export default SelectBox;
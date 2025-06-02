import { useContext } from "react";
import { SettingsContext } from "../App";

const Square = () => {
    const { color } = useContext(SettingsContext);

    return(
        <div style={{ width: 100, height: 100, margin: 10, backgroundColor: color }}>
            
        </div>
    );
}

export default Square;
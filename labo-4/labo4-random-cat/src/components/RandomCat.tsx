import { useState } from "react";

interface Coordinates {
    x: number;
    y: number;
}

const RandomCat = () => {
    const [coordinates, setCoordinates] = useState<Coordinates>();

    const getCoordinates = () => {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);

        setCoordinates({x, y});
    }

    return(
        <>
            <button onClick={getCoordinates}>Random cat</button>
            {
                coordinates && <img src="https://cataas.com/cat?width=200&height=200" alt="" style={{ position: "fixed", top: coordinates.y, left: coordinates.x }} />
            }
        </>
    );
}

export default RandomCat;
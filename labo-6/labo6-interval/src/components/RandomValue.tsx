import { useEffect, useState } from "react";

const RandomValue = () => {
    const [rng, setRng] = useState(0);
    const [rng2, setRng2] = useState(0);

    const getRandomValue = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    useEffect(() => {
        let handle = setInterval(() => {
            setRng(getRandomValue(1,100));
            setRng2(getRandomValue(100,200));
        }, 1000);

        return () => {
            clearInterval(handle);
        }
    }, [/*min, max => Dit zou hier staan als deze bv veranderd zouden worden via een input*/ ]);

    return(
        <>
            <p>Random value between 1 and 100: {rng}</p>
            <p>Random value between 100 and 200: {rng2}</p>
        </>
    );
}

export default RandomValue;
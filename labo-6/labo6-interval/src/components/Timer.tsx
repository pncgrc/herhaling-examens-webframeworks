import { useEffect, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let handle = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);

        return () => {
            clearInterval(handle);
        }
    }, []);

    return(
        <>
            {time}
        </>
    );
}

export default Timer;
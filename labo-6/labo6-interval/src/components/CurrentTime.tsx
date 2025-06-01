import { useEffect, useState } from "react";

const CurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let handle = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(handle);
        }
    }, []);

    return(
        <>
            <p>Current time: {time.toLocaleString()}</p>
        </>
    );
}

export default CurrentTime;
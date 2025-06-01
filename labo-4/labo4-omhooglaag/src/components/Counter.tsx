import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    return(
        <>
            <button onClick={() => {setCount(prevCount => prevCount + 1)}} style={{ margin: 25}}>Omhoog</button>
            {
                count === 0 ?
                    <span>Count: {count}</span> :
                count < 0 ?
                    <span>Count: <span style={{ color: "red" }}>{count}</span></span> :
                    <span>Count: <span style={{ color: "green" }}>{count}</span></span>
            }
            <button onClick={() => {setCount(prevCount => prevCount - 1)}} style={{ margin: 25}}>Omlaag</button>
        </>
    );
}

export default Counter;
import { useState } from "react";

const ButtonList = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const increaseCounter = (i: number) => {
        let copy = counters.map((oldValue, index) => index === i ? oldValue + 1 : oldValue);
        setCounters(copy);
    }

    const decreaseCounter = (i: number) => {
        let copy = counters.map((oldValue, index) => index === i ? oldValue - 1 : oldValue);
        setCounters(copy);
    }

    const sumOfAll = () => {
        return counters.reduce((prev, curr) => prev + curr, 0); // 0 is hier de initial value, zonder init value breekt de app !!
    }

    return(
        <>
            <button onClick={() => setCounters([...counters, 0])}>Add counter</button>
            {
                counters.map((counter, index) => {

                    let color = "black";
                    if (counter < 0) {
                        color =  "red";
                    }
                    else if (counter > 0){
                        color = "green"
                    }

                    return(
                        <div key={index}>
                            <button style={{ margin: 25}} onClick={() => increaseCounter(index)}>Omhoog</button>
                            <span>Count: <span style={{ color: color }}>{counter}</span></span>
                            <button style={{ margin: 25}} onClick={() => decreaseCounter(index)}>Omlaag</button>
                        </div>
                    );
                })
            }
            <p>Som van de getallen: {sumOfAll()}</p>
        </>
    );
}

export default ButtonList;
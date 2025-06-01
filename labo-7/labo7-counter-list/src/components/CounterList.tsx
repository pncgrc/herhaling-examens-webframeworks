import { useState } from "react";
import Counter from "./Counter";

const CounterList = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const addCounter = () => {
        setCounters([...counters, 0]);
    }

    const increaseCounter = (index: number) => {
        setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter + 1 : counter));
    }

    const decreaseCounter = (index: number) => {
        setCounters(counterCpy => counterCpy.map((counter, i) => (i === index) ? counter - 1 : counter));
    }

    return (
        <>
            {counters.map((counter, index) => {
                let color = "black";
                if (counter > 0) {
                    color = "green";
                } else if (counter < 0) {
                    color = "red";
                }
                return (
                    <Counter key={index} value={counter} textColor={color} onIncrease={() => increaseCounter(index)} onDecrease={() => decreaseCounter(index)} index={index}/>
                )
            })}
            <p>Som van de tellers: {counters.reduce((prev, curr) => prev + curr, 0)}</p>
            <button onClick={addCounter}>Voeg teller toe</button>
        </>
    )
}

export default CounterList;
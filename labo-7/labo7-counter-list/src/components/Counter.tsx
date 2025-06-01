
interface CounterProps {
    value: number;
    onIncrease: (i: number) => void;
    onDecrease: (i: number) => void;
    index: number;
    textColor: string;
}

const Counter = (props: CounterProps) => {

    return(
        <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <button onClick={() => props.onDecrease(props.index)}>Omlaag</button>
                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", color: props.textColor }}>Count: {props.value}</div>
                <button onClick={() => props.onIncrease(props.index)}>Omhoog</button>
            </div>
        </>
    );
}

export default Counter;
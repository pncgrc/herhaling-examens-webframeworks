import { useState } from "react";


const CheckBox = ({size}: {size: number}) => {
    const [checkboxArray, setCheckboxArray] = useState<boolean[][]>(() =>
        Array.from({ length: size }, () => Array(size).fill(false))
    );


    const handleChange = (posX: number, posY: number): React.ChangeEventHandler<HTMLInputElement> => (event) => {
        let copy = checkboxArray.map((row, i) =>
            row.map((value, j) => 
                posY === i && posX === j ? event.target.checked : value
            )
        );
        setCheckboxArray(copy);
        alert(`Positie X: ${posX + 1} Y: ${posY + 1} // ${event.target.checked ? "AAN" : "UIT"}`);
    }

    return(
        <>
            {
                checkboxArray.map((secondArray, i) => {
                    return(
                        <div key={i}>
                            { secondArray.map((value, j) => ( <input key={`${i}-${j}`} type="checkbox" checked={value} onChange={handleChange(j, i)}/> )) }
                        </div>
                    );
                })
            }
        </>
    );
}

export default CheckBox;


const TextInput = ({size}: {size: number}) => {

    const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        alert(`Textbox nr ${index + 1}. Inhoud: ${event.target.value}`);
    }

    let inputArray = [];

    for(let i = 0; i < size; i++) {
        inputArray.push(<input key={i} type="text" onChange={handleChange(i)}/>)
    }

    return(
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {inputArray}
        </div>
    );
}

export default TextInput;
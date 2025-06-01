
interface ColorSquareProps {
    color: string;
    size: number;
}

const ColorSquare = (props: ColorSquareProps) => {

    const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
        alert(props.color);
    }

    return(
        <div style={{ width: props.size, height: props.size, backgroundColor: props.color }} onClick={handleClick}></div>
    );
}

export default ColorSquare;
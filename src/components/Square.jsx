function Square(props) {
    return (
        <button className="square" onClick={() => {
            props.updateBoard(props.row, props.col);
        }}>{props.value}</button>
    )
}

export default Square;
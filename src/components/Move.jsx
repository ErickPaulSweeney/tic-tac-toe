function Move(props) {
    return (
        <>
            <button className="move-button" onClick={() => {
                props.moveClick(props.board, props.player, props.moveNum)
            }}>{`Move ${props.moveNum}`}</button>
        </>
    )
}

export default Move;
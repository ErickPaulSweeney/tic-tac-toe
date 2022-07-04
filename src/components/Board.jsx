import Square from "./Square";
import Notif from "./Notif";

function Board(props) {
    return (
        <div className="board">
            <h3 className="current-move">Current player: {props.isXPlaying ? 'X' : 'O'}</h3>
            <div className="row" key={"0"}>
                <Square updateBoard={props.handleClick} row={0} col={0} key={"0-0"} value={props.currBoard[0][0]} />
                <Square updateBoard={props.handleClick} row={0} col={1} key={"0-1"} value={props.currBoard[0][1]} />
                <Square updateBoard={props.handleClick} row={0} col={2} key={"0-2"} value={props.currBoard[0][2]} />
            </div>
            <div className="row" key={"1"}>
                <Square updateBoard={props.handleClick} row={1} col={0} key={"1-0"} value={props.currBoard[1][0]} />
                <Square updateBoard={props.handleClick} row={1} col={1} key={"1-1"} value={props.currBoard[1][1]} />
                <Square updateBoard={props.handleClick} row={1} col={2} key={"1-2"} value={props.currBoard[1][2]} />
            </div>
            <div className="row" key={"2"}>
                <Square updateBoard={props.handleClick} row={2} col={0} key={"2-0"} value={props.currBoard[2][0]} />
                <Square updateBoard={props.handleClick} row={2} col={1} key={"2-1"} value={props.currBoard[2][1]} />
                <Square updateBoard={props.handleClick} row={2} col={2} key={"2-2"} value={props.currBoard[2][2]} />
            </div>
            <Notif currState={props.currState} />
        </div>
    )
}

export default Board;
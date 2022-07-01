import { useState } from "react";
import Square from "./Square";
import Notif from "./Notif";

let startingBoard = new Array(3).fill(0).map((el) => new Array(3).fill(''));

function Board(props) {
    let [currBoard, setCurrBoard] = useState(startingBoard);
    let [isXPlaying, setIsXPlaying] = useState(true);
    let [status, setStatus] = useState(false);
    let boardHistory = [currBoard];

    let boardState = (currBoard) => {
        for (let i = 0; i <= 2; i++) {
            let checkRow = currBoard[i][0] === currBoard[i][1] && currBoard[i][1] === currBoard[i][2] && currBoard[i][0] !== '' && currBoard[i][1] !== '' && currBoard[i][2] !== '';
            let checkCol = currBoard[0][i] === currBoard[1][i] && currBoard[1][i] === currBoard[2][i] && currBoard[0][i] !== '' && currBoard[1][i] !== '' && currBoard[2][i] !== '';
            if (checkCol || checkRow) {
                return `${isXPlaying ? 'X' : 'O'} wins!`;
            }
        }
        if (currBoard[0][0] === currBoard[1][1] && currBoard[1][1] === currBoard[2][2] && currBoard[0][0] !== '' && currBoard[1][1] !== '' && currBoard[2][2] !== '') {
            return `${isXPlaying ? 'X' : 'O'} wins!`;
        }
        if (currBoard[0][2] === currBoard[1][1] && currBoard[1][1] === currBoard[2][0] && currBoard[0][2] !== '' && currBoard[1][1] !== '' && currBoard[2][0] !== '') {
            return `${isXPlaying ? 'X' : 'O'} wins!`;
        }
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (currBoard[i][j] === '') {
                    return false;
                }
                else if (i === 2 && j === 2) {
                    return `Game draw!`;
                }
            }
        }
        return false;
    }

    let handleClick = (row, col) => {
        if (currBoard[row][col].length === 0) {
            let copyBoard = JSON.parse(JSON.stringify(currBoard));
            copyBoard[row][col] = isXPlaying ? 'X' : 'O';
            setCurrBoard(copyBoard);
            boardHistory.push(copyBoard);
            let currGame = boardState(copyBoard);
            if (currGame) {
                setStatus(currGame);
            }
            else {
                setIsXPlaying(!isXPlaying);
            }
        }
    };

    return (
        <div className="board">
            <h3 className="current-move">Current player: {isXPlaying ? 'X' : 'O'}</h3>
            <div className="row" key={"0"}>
                <Square updateBoard={handleClick} row={0} col={0} key={"0-0"} value={currBoard[0][0]} />
                <Square updateBoard={handleClick} row={0} col={1} key={"0-1"} value={currBoard[0][1]} />
                <Square updateBoard={handleClick} row={0} col={2} key={"0-2"} value={currBoard[0][2]} />
            </div>
            <div className="row" key={"1"}>
                <Square updateBoard={handleClick} row={1} col={0} key={"1-0"} value={currBoard[1][0]} />
                <Square updateBoard={handleClick} row={1} col={1} key={"1-1"} value={currBoard[1][1]} />
                <Square updateBoard={handleClick} row={1} col={2} key={"1-2"} value={currBoard[1][2]} />
            </div>
            <div className="row" key={"2"}>
                <Square updateBoard={handleClick} row={2} col={0} key={"2-0"} value={currBoard[2][0]} />
                <Square updateBoard={handleClick} row={2} col={1} key={"2-1"} value={currBoard[2][1]} />
                <Square updateBoard={handleClick} row={2} col={2} key={"2-2"} value={currBoard[2][2]} />
            </div>
            <Notif currState={status} />
        </div>
    )
}

export default Board;
import Board from "./Board";
import { useState } from "react";
import Move from "./Move";

let startingBoard = new Array(3).fill(0).map((el) => new Array(3).fill(''));

function Game(props) {
    let [currBoard, setCurrBoard] = useState(startingBoard);
    let [isXPlaying, setIsXPlaying] = useState(true);
    let [status, setStatus] = useState(`Game in progress`);
    let [history, setHistory] = useState([{board: startingBoard, player: isXPlaying}]);

    let boardState = (currBoard) => {
        for (let i = 0; i <= 2; i++) {
            let checkRow = currBoard[i][0] === currBoard[i][1] && currBoard[i][1] === currBoard[i][2] && currBoard[i][0] !== '' && currBoard[i][1] !== '' && currBoard[i][2] !== '';
            let checkCol = currBoard[0][i] === currBoard[1][i] && currBoard[1][i] === currBoard[2][i] && currBoard[0][i] !== '' && currBoard[1][i] !== '' && currBoard[2][i] !== '';
            if (checkCol || checkRow) {
                return `Player ${isXPlaying ? 'X' : 'O'} wins!`;
            }
        }
        if (currBoard[0][0] === currBoard[1][1] && currBoard[1][1] === currBoard[2][2] && currBoard[0][0] !== '' && currBoard[1][1] !== '' && currBoard[2][2] !== '') {
            return `Player ${isXPlaying ? 'X' : 'O'} wins!`;
        }
        if (currBoard[0][2] === currBoard[1][1] && currBoard[1][1] === currBoard[2][0] && currBoard[0][2] !== '' && currBoard[1][1] !== '' && currBoard[2][0] !== '') {
            return `Player ${isXPlaying ? 'X' : 'O'} wins!`;
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
        if (status !== `Game in progress`) {
            return;
        }
        if (currBoard[row][col].length === 0) {
            let copyBoard = JSON.parse(JSON.stringify(currBoard));
            copyBoard[row][col] = isXPlaying ? 'X' : 'O';
            setCurrBoard(copyBoard);
            history.push({board: copyBoard, player: !isXPlaying});
            console.log(history)
            let currGame = boardState(copyBoard);
            if (currGame) {
                setStatus(currGame);
            }
            else {
                setIsXPlaying(!isXPlaying);
            }
        }
    };

    let moveClick = (board, player, idx) => {
        if (idx === history.length - 1) {
            return;
        }
        setCurrBoard(board);
        setIsXPlaying(player);
        setHistory(history.slice(0, idx + 1));
        setStatus(`Game in progress`);  
    }

    return (
        <div className="container-all">
            <h1 className="game-title">Tic Tac Toe</h1>
            <Board handleClick={handleClick} currBoard={currBoard} currState={status} isXPlaying={isXPlaying}/>
            <div className="container-history">
                <h2 className="history-header">Game History</h2>
                <div className="moves-list">
                    {history.map((move, idx) => <Move key={`move-${idx}`} board={move.board} player={move.player} moveNum={idx} moveClick={moveClick}/>)}
                </div>
            </div>
        </div>
    )
}

export default Game;
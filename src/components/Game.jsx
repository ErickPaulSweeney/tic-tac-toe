import Board from "./Board";

function Game(props) {
    return (
        <div className="container-all">
            <h1 className="game-title">Tic Tac Toe</h1>
            <Board />
        </div>
    )
}

export default Game;
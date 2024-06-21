import { useState } from 'react';
import './styles.css';


export default function TicTacToe() {
    
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [board, setBoard] = useState(Array(9).fill(null));
    const [win, setWin] = useState(false);
    const [gameOver, setGameOver] = useState(false);


    const togglePlayer = () => {
        setCurrentPlayer(currentPlayer === 'X' ? "O" : "X");
    };

    const restartGame = () => {
        setBoard(Array(9).fill(null));
        setWin(false);
        setGameOver(false);
        setCurrentPlayer("X");
    }

    const checkWinCondition = (newBoard) => {

        if (newBoard[0] && newBoard[0] === newBoard[1] && newBoard[1] === newBoard[2]) return true;
        if (newBoard[0] && newBoard[0] === newBoard[3] && newBoard[6] === newBoard[0]) return true;
        if (newBoard[0] && newBoard[0] === newBoard[4] && newBoard[0] === newBoard[8]) return true;

        if (newBoard[1] && newBoard[1] === newBoard[4] && newBoard[4] === newBoard[7]) return true;

        if (newBoard[2] && newBoard[2] === newBoard[5] && newBoard[5] === newBoard[8]) return true;
        if (newBoard[2] && newBoard[2] === newBoard[4] && newBoard[2] === newBoard[6]) return true;

        if (newBoard[3] && newBoard[3] === newBoard[4] && newBoard[3] === newBoard[5]) return true;

        if (newBoard[6] && newBoard[6] === newBoard[7] && newBoard[7] === newBoard[8]) return true;

        return false;
    }

    const isBoardFull = (board) => {
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                return false;
            }
        }
        return true;
    }

    const handleClick = (index) => {
        //console.log("Handle click triggered on index", index);
        if (board[index] === null) {
            let newBoard = [...board];
            newBoard[index] = currentPlayer;
            setBoard(newBoard);
            if (checkWinCondition(newBoard)) {
                setWin(true);
                return
            }
            if (isBoardFull(newBoard)) {
                //alert("Game draw");
                setGameOver(true);
            }
            togglePlayer();
        }
    };

    //console.log(win, gameOver);

    const Square = ({ value, handleClick }) => {
        return <button className="square" onClick={handleClick}>{value}</button>;
    };

    const CreateRow = ({start, end, handleClick}) => {
        
        const squares = [];
        for (let i = start - 1; i < end; i++) {
            const jsx = <Square handleClick={() => handleClick(i)} key={i} value={board[i]} />;
            squares.push(jsx);
        }
        return (
            <div className="row">
                {
                    squares
                }
            </div>
        );
    };

  return (
    <div className="tic-tac-toe-container">
      <CreateRow start={1} end={3} handleClick={handleClick} />
      <CreateRow start={4} end={6} handleClick={handleClick} />
      <CreateRow start={7} end={9} handleClick={handleClick} />
      {
        !gameOver && !win && currentPlayer && <p>Its {currentPlayer}'s turn</p>
      }
      {
        win && <p>{currentPlayer} won</p>
        
      } 
      {
        gameOver && <p>Game over please restart the game</p>
      }
      <button disabled={!(win || gameOver)} onClick={() => restartGame()} >Restart the Game</button>
    </div>
  );
}

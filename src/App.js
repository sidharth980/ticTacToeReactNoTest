import { useState } from 'react';


let i = 0;
let winner = false;
const saveSquare = Array(9).fill(null);

function checkWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }
  }
  return false;
}

const xno = i => i%2===0?"X":"O";

function Square({value,setPlayer}){
  const [squares, setSquares] = useState([Array(9).fill(null)]);
  function handleClick() {
    const temp = squares.slice()
    if (!winner){
      if (i>=9){
        setPlayer("Game Over");
      }
      if (saveSquare[value]===null){
        temp[value] = xno(i);
        saveSquare[value] = xno(i)
        i+=1;
        
        winner = checkWinner(saveSquare);
        setSquares(temp);
        if (winner){setPlayer("Player "+xno(i-1)+" Is The Winner")}
        else{
        setPlayer("Player " +xno(i));
        if (i>=9){
          setPlayer("Game Over");
        }
        }
      }
    }
  } 
  return <button className="square" onClick={handleClick}>{squares[value]}</button>
}



export default function Board() {
  const [player,setPlayer] = useState("Player X");
  return (<>
      <h1>{player}</h1>
      <div className="board-row">
        <Square value={0} setPlayer={setPlayer}/>
        <Square value={1}  setPlayer={setPlayer}/>
        <Square value={2}  setPlayer={setPlayer}/>
      </div>
      <div className="board-row">
        <Square value={3}  setPlayer={setPlayer}/>
        <Square value={4} setPlayer={setPlayer}/>
        <Square value={5} setPlayer={setPlayer}/>
      </div>
      <div className="board-row">
        <Square value={6} setPlayer={setPlayer}/>
        <Square value={7} setPlayer={setPlayer}/>
        <Square value={8} setPlayer={setPlayer}/>
      </div>
    </>);
}


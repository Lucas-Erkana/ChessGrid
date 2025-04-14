import React from "react";
import "./Chessboard.css";

const Chessboard = () => {
  const createBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const color = (row + col) % 2 === 0 ? "light" : "dark";
        const value = (row + 1) * (col + 1); // multiplication grid
        board.push(
          <div key={`${row}-${col}`} className={`tile ${color}`}>
            {value}
          </div>
        );
      }
    }
    return board;
  };

  return <div className="chessboard">{createBoard()}</div>;
};

export default Chessboard;

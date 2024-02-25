import { useState } from "react";
import "./App.css";

import { buildGrid } from "./sudoku-repository";

// Correct the props to be a single object
export interface GameContainerProps {
    sudoku: Tile[9][9];
    solution: string;
  }

function GameContainer({ sudoku, solution }: GameContainerProps) {
  const [selectedRow, setSelectedRow] = useState(0);
  const [selectedCol, setSelectedCol] = useState(0);
   
  const [gridState, setGridState] = useState(
    buildGrid(sudoku, setSelectedCol, setSelectedRow, solution)
  );
   
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (parseInt(event.key) >  0 && parseInt(event.key) <  10) {
      sudoku[selectedRow][selectedCol].value = parseInt(event.key);
      setGridState(buildGrid(sudoku, setSelectedCol, setSelectedRow, solution));
    }
  };

  return (
    <>
      <div id="gameMainContainer" onKeyDown={handleKeyDown} tabIndex={0}>
        {gridState}
      </div>
    </>
  );
}

export default GameContainer;

// Tile interface remains the same
export interface Tile {
  value: number | string;
  changable: boolean;
  col: number;
  row: number;
}

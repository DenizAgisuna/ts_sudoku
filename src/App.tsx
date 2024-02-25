import { useState } from "react";
import "./App.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { sudokuArray, buildGrid } from "./sudoku-repository";


function App() {
  const [arr] = useState(sudokuArray("easy"))

  const [selectedRow, setSelectedRow] = useState(0);
  const [selectedCol, setSelectedCol] = useState(0);
  
  const [gridState, setGridState] = useState(
    buildGrid(arr.sudoku, setSelectedCol, setSelectedRow, arr.solution)
  );
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleKeyDown = (event: any) => {
    if (parseInt(event.key) > 0 && parseInt(event.key) < 10) {
      arr.sudoku[selectedRow][selectedCol].value =parseInt( event.key)
      setGridState(buildGrid(arr.sudoku, setSelectedCol, setSelectedRow, arr.solution));
    }
  };

  return (
    <>
      <div id="gameMainContainer" onKeyDown={handleKeyDown}>
        {gridState}
      </div>
    </>
  );
}

export default App;



// <div className="diff aspect-[16/9]">
// <div className="diff-item-1">
//   <div className="bk ">
//     {" "}
//     <div id="gameMainContainer" className="" onKeyDown={handleKeyDown}>
//       {gridState}
//     </div>
//   </div>
// </div>
// <div className="diff-item-2">
//   <div className="diff-item-1">
//     <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
//       SUDOKU
//     </div>
//   </div>
// </div>
// <div className="diff-resizer"></div>
// </div>
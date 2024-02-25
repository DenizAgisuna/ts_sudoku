import { getSudoku } from "sudoku-gen";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";

export interface Tile {
    value: number | string
    changable: boolean
    col: number
    row: number
}

export function sudokuArray(difficulty: Difficulty) {
  const sudoku = getSudoku(difficulty);
  const sudoku_arr = [];
  const solution = sudoku.solution
  let row:Tile[] = [];
  let count = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudoku.puzzle[count] === "-") {
        const arrObj = {value: "-", changable:true, col:j, row:i}
        row.push(arrObj);
      } else {
        const arrObj = {value: parseInt(sudoku.puzzle[count]), changable:false, col:j, row:i}

        row.push(arrObj);
      }
      count += 1;
    }
    sudoku_arr.push(row);
    row = [];
  }
  const game ={sudoku: sudoku_arr, solution:solution}

  return game;
}

export function buildGrid(
  sudoku: Tile[][],
  setSelectedCol: (i: number) => void,
  setSelectedRow: (j: number) => void,
  solution: string
) {
  let userSolution = ""

  let c = 0
  for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku.length; j++) {
      if(sudoku[i][j].value!=="-") {
        userSolution+= sudoku[i][j].value.toString()
        c++
      }
    }    
  }

 
  const grid = sudoku.map((r, row) => (
    <div key={row + 999} style={{ width: "100%" }} className={`row-${row}`}>
      {r.map((c, col) =>
        c.changable === true ? (
          <button
            key={col}
            className={` changable btn btn-active btn-${
              c.value !== "-" ? "primary changed " : "black text-black "
            }`}
            onClick={() => {
              sudoku[col][row];
              setSelectedCol(col), setSelectedRow(row);
            }}
          >
            <span className="text-white-800" style={{ fontSize: "2rem", fontWeight: "600" }}>
              {c.value}
            </span>
          </button>
        ) : (
          <button key={col} className="btn btn-active btn-primary ">
            {" "}
            <span style={{ fontSize: "2rem" , fontWeight: "100" }}>{c.value}</span>
          </button>
        )
      )}
    </div>
  ));
 
  if(c === 81 ){ 
    if(solution===userSolution) alert("game over")
  }
  return grid;
}

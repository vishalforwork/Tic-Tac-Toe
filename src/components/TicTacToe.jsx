// import React, { useState } from "react";
// import "./style.css";

// const TicTacToe = () => {
//   const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
//   const [count, setCount] = useState(0);

//   const toggle = (e, i) => {
//     const newData = [...data];
//     if (winner == "x" || winner == "o") {
//       return 0;
//     }
//     if (data[i] !== "") {
//       return 0;
//     }
//     if (count % 2 === 0) {
//         e.currentTarget.classList.remove("green");
//       e.currentTarget.classList.add("red");
//       newData[i] = "o";
//       setData(newData);
//       setCount(count + 1);
//     } else {
//         e.currentTarget.classList.remove("red");
//       e.currentTarget.classList.add("green");
//       newData[i] = "x";
//       setData(newData);
//       setCount(count + 1);
//     }
//   };

//   const checkWinner = () => {
//     const winningCombinations = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (const combinations of winningCombinations) {
//       const [a, b, c] = combinations;

//       if (data[a] !== "" && data[a] === data[b] && data[a] === data[c]) {
//         return data[a];
//       }
//     }
//     return "Draw";
//   };

//   const winner = checkWinner();

//   const handleReset = () => {
//     setData(["", "", "", "", "", "", "", "", ""])
//     setCount(0)
//   };

//   return (
//     <div>
//       <div className="container">
//         <h1>
//           {winner === "o"
//           ? <span><span className="red">{winner}</span> is winner</span>
//           : winner === "x"
//           ? <span><span className="green">{winner}</span> is winner</span>
//             // : winner === "Draw"
//             // ? "It's a Draw"
//             : "Tic Tac Toe "
//           }
//         </h1>
//         <div className="board">
//           <div className="row1 row">
//             <div className="boxes col-md-4" onClick={(e) => toggle(e, 0)}>
//               {data[0]}
//             </div>
//             <div className="boxes col-md-4" onClick={(e) => toggle(e, 1)}>
//               {data[1]}
//             </div>
//             <div className="boxes col-md-4" onClick={(e) => toggle(e, 2)}>
//               {data[2]}
//             </div>
//           </div>
//           <div className="row2 row">
//             <div className="boxes col-md-4" onClick={(e) => toggle(e, 3)}>
//               {data[3]}
//             </div>
//             <div className="boxes col-md-4" onClick={(e) => toggle(e, 4)}>
//               {data[4]}
//             </div>
//             <div className="boxes col-md-4" onClick={(e) => toggle(e, 5)}>
//               {data[5]}
//             </div>
//           </div>
//           <div className="row3 row">
//             <div className="boxes col-md-4" onClick={(e) => toggle(e, 6)}>
//               {data[6]}
//             </div>
//             <div className="boxes col-md-4" onClick={(e) => toggle(e, 7)}>
//               {data[7]}
//             </div>
//             <div className="boxes col-md-4" onClick={(e) => toggle(e, 8)}>
//               {data[8]}
//             </div>
//           </div>
//         </div>
//         <button onClick={handleReset} className="reset">
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TicTacToe;

import React, { useState } from "react";
import "./style.css";

const TicTacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);

  const toggle = (e, i) => {
    const newData = [...data];
    if (winner === "x" || winner === "o") {
      return;
    }
    if (data[i] !== "") {
      return;
    }
    if (count % 2 === 0) {
      e.currentTarget.classList.remove("green");
      e.currentTarget.classList.add("red");
      newData[i] = "o";
    } else {
      e.currentTarget.classList.remove("red");
      e.currentTarget.classList.add("green");
      newData[i] = "x";
    }
    setData(newData);
    setCount(count + 1);
  };

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combinations of winningCombinations) {
      const [a, b, c] = combinations;

      if (data[a] !== "" && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }
    return "";
  };

  const winner = checkWinner();

  const handleReset = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    document.querySelectorAll('.boxes').forEach(box => {
      box.classList.remove('red', 'green');
    });
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">
        {winner === "o" ? (
          <span>
            <span className="red">{winner}</span> is winner
          </span>
        ) : winner === "x" ? (
          <span>
            <span className="green">{winner}</span> is winner
          </span>
        ) : (
          "Tic Tac Toe"
        )}
      </h1>
      <div className="board">
        <div className="row row1">
          <div className="col-4 p-0">
            <div className="boxes" onClick={(e) => toggle(e, 0)}>
              {data[0]}
            </div>
          </div>
          <div className="col-4 p-0">
            <div className="boxes" onClick={(e) => toggle(e, 1)}>
              {data[1]}
            </div>
          </div>
          <div className="col-4 p-0">
            <div className="boxes" onClick={(e) => toggle(e, 2)}>
              {data[2]}
            </div>
          </div>
        </div>
        <div className="row row2">
          <div className="col-4 p-0">
            <div className="boxes" onClick={(e) => toggle(e, 3)}>
              {data[3]}
            </div>
          </div>
          <div className="col-4 p-0">
            <div className="boxes" onClick={(e) => toggle(e, 4)}>
              {data[4]}
            </div>
          </div>
          <div className="col-4 p-0">
            <div className="boxes" onClick={(e) => toggle(e, 5)}>
              {data[5]}
            </div>
          </div>
        </div>
        <div className="row row3">
          <div className="col-4 p-0">
            <div className="boxes" onClick={(e) => toggle(e, 6)}>
              {data[6]}
            </div>
          </div>
          <div className="col-4 p-0">
            <div className="boxes" onClick={(e) => toggle(e, 7)}>
              {data[7]}
            </div>
          </div>
          <div className="col-4 p-0">
            <div className="boxes" onClick={(e) => toggle(e, 8)}>
              {data[8]}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button onClick={handleReset} className="btn btn-primary mt-3">
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;



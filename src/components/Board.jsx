import React, { useContext } from "react";
import { context } from './ContextProvider';
import Confetti from 'react-confetti';

import Cell from "./Cell";
import Slider from "./Slider";
import Modals from "./Modals";

const Board = () => {
    const { cells, singleGameMode, winFound } = useContext(context);
    const { score, found, winner } = winFound;
    const player = singleGameMode ? (found && winner === "X") ? "⭐️🌟 YOU 🌟⭐️" : "☠️ SADLY👀 I, ☠️" : `PLAYER 🌟${winner}🌟`;

    console.log(cells);
    return (
        <div className="game-board">
            <h1>Tic Tac Toe Game</h1>
            {
                singleGameMode ?
                    <div className="singleGameMode">
                        <p>Single Player</p>
                        <p className={`score ${score < 10 ? 'red' : score < 15 ? 'yellow' : 'green'}`}>score: {score}</p>
                    </div>
                    :
                    <p>Dual Player Mode</p>
            }
            <div className="modal-container">
                <div className="inner-board">
                    {cells.map((e, i) => (<Cell key={i} id={i} mark={e} />))}
                </div>
                <Slider />
                <Modals />
                <div
                    className={`winner ${found ? "modal" : "hide"} ${found && "hide"} `}
                // onClick={toggleRenderModal}
                >
                    {player !== "☠️ SADLY👀 I, ☠️" && <Confetti width="310px" />}
                    <h1>{winner == "XO" ? "DRAW!!" : ` ${player} THE CONQOERER!!`}</h1>
                </div>
            </div>

        </div>
    );
};
export default Board;
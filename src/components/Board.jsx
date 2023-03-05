import React, { useContext } from "react";
import { context } from './ContextProvider';

import Cell from "./Cell";

const Board = () => {
    const { gameDisabled, toggleDisabled, cells } = useContext(context)

    return (
        <div className="game-board">
            <h2>Tic-Tac-Toe Game</h2>
            <div className="modal-container">
                <div className="inner-board">
                    {cells.map((e, i) => (
                        <Cell
                            key={i}
                            id={i}
                            mark={e}

                        />)
                    )}

                </div>
                <div
                    className={`${gameDisabled ? "modal" : "hide"}`}
                    onClick={toggleDisabled}
                >
                    <p> click <span>New Game</span> to play</p>
                </div>
            </div>

        </div>

    );
};
export default Board;
import React, { useContext } from "react";
import { context } from './ContextProvider';

import Cell from "./Cell";
import Slider from "./Slider";

const Board = () => {
    const { gameDisabled, toggleDisabled, cells, winFound, renderModal, toggleRenderModal } = useContext(context);

    return (
        <div className="game-board">
            <h1>Tic-Tac-Toe Game</h1>
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
                <Slider />

                <div
                    className={`${gameDisabled && !winFound.found ? "modal" : "hide"}`}
                    onClick={toggleDisabled}
                >
                    <p> click <span>START</span> to play</p>
                </div>

                <div
                    className={`winner ${renderModal ? "modal" : "hide"} ${renderModal && "hide"} `}
                    onClick={toggleRenderModal}
                >
                    <h1>PLAYER " {winFound.winner} " THE CONQOERER!!</h1>
                </div>
            </div>
        </div>
    );
};
export default Board;
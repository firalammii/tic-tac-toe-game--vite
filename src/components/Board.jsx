import React, { useContext } from "react";
import { context } from './ContextProvider';

import Cell from "./Cell";
import Slider from "./Slider";
import Modals from "./Modals";

const Board = () => {
    const { cells, singleGameMode } = useContext(context);
    return (
        <div className="game-board">
            <h1>Tic Tac Toe Game</h1>
            <p>{singleGameMode ? "Single Player Mode" : "Dual Player Mode"}</p>
            <div className="modal-container">
                <div className="inner-board">
                    {cells.map((e, i) => (<Cell key={i} id={i} mark={e} />))}
                </div>
                <Slider />
                <Modals />
            </div>
        </div>
    );
};
export default Board;
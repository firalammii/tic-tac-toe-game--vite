import React, { useContext } from "react";
import Cell from "./Cell";

const Board = () => {

    return (
        <div className="game-board">
            <h2>Tic-Tac-Toe Game</h2>
            <div className="modal-container">
                <div className="inner-board">
                    <Cell />

                </div>
                <div className={`${gameDisabled ? "modal" : "hide"}`}>
                    <p> click <span>New Game</span> to play</p>
                </div>
            </div>

            {/* <div className={`${gameDisabled ? "hide" : "slider"}`} >
                <p className={`${Xturn && "his-turn"}`}> player: X</p>
                <div className="slider-tube" >
                    <div className={`${!Xturn ? "slider-circle slide-right" : "slider-circle"} `}></div>
                </div>
                <p className={`${!Xturn && "his-turn"}`}>  player: 0</p>
            </div>
            <button className={`${gameDisabled && "disabled"}`} onClick={toggleDisabled}>{gameDisabled ? "New Game" : "Restart"}</button> */}
        </div>

    );
};
export default Board;
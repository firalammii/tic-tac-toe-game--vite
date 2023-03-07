import React, { useContext, useRef } from 'react';
import { context } from './ContextProvider';
import Confetti from 'react-confetti';
const Modals = () => {
    const { gameDisabled, winFound, renderModal,
        toggleRenderModal, handleGameMode, singleGameMode
    } = useContext(context);
    const { winner, found } = winFound;
    const player = singleGameMode ? (found && winner === "X") ? "⭐️🌟 YOU 🌟⭐️" : "☠️ SADLY👀 I, ☠️" : `PLAYER 🌟${winner}🌟`;
    return (
        <div>
            <div className={`${gameDisabled && !found ? "modal" : "hide"}`}>
                <div className="initial-modal ">
                    <h2> click <span>"start"</span> to play</h2>
                    <div className="player-mode-btn-container">
                        <h3>Sellect Game Mode</h3>
                        <button
                            className="button player-mode-btn"
                            onClick={handleGameMode}
                        >
                            Flip Mode
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`winner ${renderModal ? "modal" : "hide"} ${renderModal && "hide"} `}
                onClick={toggleRenderModal}
            >
                {player !== "☠️ SADLY👀 I, ☠️" && <Confetti width="310px" />}
                <h1>{winner == "XO" ? "DRAW!!" : ` ${player} THE CONQOERER!!`}</h1>
            </div>
        </div>
    );
};

export default Modals;
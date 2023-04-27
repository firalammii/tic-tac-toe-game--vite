import React, { useContext, useRef, useState } from 'react';
import { context } from './ContextProvider';
import Confetti from 'react-confetti';
const Modals = () => {
    const { gameDisabled, winFound, handleGameMode, singleGameMode
    } = useContext(context);
    const { winner, found } = winFound;
    const [renderModal, setRender] = useState(found);

    function toggleRenderModal () {
        setRender(prev => !prev);
    }
    const player = singleGameMode ? (found && winner === "X") ? "⭐️🌟 YOU 🌟⭐️" : "☠️ SADLY👀 I, ☠️" : `PLAYER 🌟${winner}🌟`;

    console.log("found: " + found);
    console.log("renderModal " + renderModal)

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


        </div>
    );
};

export default Modals;
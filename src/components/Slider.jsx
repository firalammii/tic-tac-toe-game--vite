import React, { useContext } from 'react';
import { context } from './ContextProvider';

const Slider = () => {

    const {
        gameDisabled, Xturn, toggleDisabled,
        winFound, singleGameMode, newGame, restart
    } = useContext(context);
    const { found } = winFound;

    return (
        <div className="root-slider-container">
            {
                found ?
                    <div className="" onClick={newGame}>
                        <button className="button disabled" onClick={newGame}>
                            {gameDisabled ? "Start" : "New Game"}
                        </button>
                    </div>
                    :
                    <>
                        {
                            !singleGameMode ?
                                <div className={`slider  ${gameDisabled && "hide"}`}>
                                    <p className={`${Xturn ? "his-turn" : "rest"}`}> player: X</p>
                                    <div className="slider-tube">
                                        <div className={`${!Xturn ? "slider-circle slide-right" : "slider-circle"} `} ></div>
                                    </div>
                                    <p className={` ${!Xturn ? "his-turn" : "rest"}`}>  player: O</p>
                                </div>
                                :
                                <div className={`slider  ${gameDisabled && "hide"}`}>
                                    <p className="his-turn"> player: X</p>
                                </div>
                        }

                        <button
                            className={`button ${gameDisabled && "disabled"}`}
                            onClick={gameDisabled ? toggleDisabled : restart}
                        >
                            {gameDisabled ? "Start" : "Restart"}
                        </button>
                        {!gameDisabled && <button
                            className={`button ${gameDisabled && "newgame"}`}
                            onClick={gameDisabled ? toggleDisabled : newGame}
                        >
                            {gameDisabled ? "Start" : "New Game"}
                        </button>}
                    </>
            }

        </div>
    );
};

export default Slider;
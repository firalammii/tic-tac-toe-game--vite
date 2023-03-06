import React, { useContext } from 'react';
import { context } from './ContextProvider';

const Slider = () => {

    const {
        gameDisabled, Xturn, toggleDisabled,
        winFound, singleGameMode, reset
    } = useContext(context);
    const { found } = winFound;

    return (
        <div className="root-slider-container">
            {
                found ?
                    <div className="" onClick={reset}>
                        <button className="button disabled" onClick={reset}>
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
                            onClick={gameDisabled ? toggleDisabled : reset}
                        >
                            {gameDisabled ? "Start" : "Restart"}
                        </button>
                    </>
            }

        </div>
    );
};

export default Slider;
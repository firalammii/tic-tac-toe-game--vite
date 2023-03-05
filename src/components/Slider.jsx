import React, { useContext, useEffect, useState } from 'react';
import { context } from './ContextProvider';

const Slider = () => {

    const { gameDisabled, Xturn, toggleDisabled, winFound, reset } = useContext(context);
    const { winner, found } = winFound;


    return (
        <div className="root-slider-container">
            {
                found ?
                    <div
                    // onClick={setTFound(false)}
                    >
                        <h2>player {winner} Dominated</h2>


                    </div>
                    :
                    <>
                        <div
                            className={`slider  ${gameDisabled && "hide"}`}
                        // onClick={() => found && setTFound(true)}
                        >
                            <p className={`${Xturn ? "his-turn" : "rest"}`}> player: X</p>
                            <div className="slider-tube">
                                <div className={`${!Xturn ? "slider-circle slide-right" : "slider-circle"} `} ></div>
                            </div>
                            <p className={` ${!Xturn ? "his-turn" : "rest"}`}>  player: O</p>
                        </div>
                        <button className={`${gameDisabled && "disabled"}`} onClick={gameDisabled ? toggleDisabled : reset}>
                            {gameDisabled ? "Start" : "Restart"}
                        </button>
                    </>
            }

        </div>
    );
};

export default Slider;
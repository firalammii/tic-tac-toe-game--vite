import React, { createContext, useEffect, useState } from 'react';
const context = createContext();

const ContextProvider = ({ children }) => {

    const [gameDisabled, setGameDisabled] = useState(true);
    const [Xturn, setXturn] = useState(true);
    const [cells, setCells] = useState(Array(9).fill(""));


    useEffect(() => {

    }, [Xturn]);

    function flipTurn () {
        setXturn(prev => !prev);
    }

    function toggleDisabled () {
        setGameDisabled(prev => !prev);
    }


    function conqourCell (i) {
        const palyerMark = Xturn ? "X" : "O";
        const nCells = [...cells.slice(0, i), palyerMark, ...cells.slice(i + 1)];
        setCells(nCells);
        flipTurn();
        console.log(nCells);
    }

    return (
        <context.Provider
            value={
                {
                    gameDisabled, toggleDisabled, cells, conqourCell,
                    Xturn, flipTurn
                }
            }
        >
            {children}
        </context.Provider>
    );
};

export { ContextProvider, context };
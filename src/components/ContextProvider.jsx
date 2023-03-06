import React, { createContext, useEffect, useState } from 'react';
const context = createContext();

const ContextProvider = ({ children }) => {

    const [gameDisabled, setGameDisabled] = useState(true);
    const [Xturn, setXturn] = useState(true);
    const [winFound, setWinFound] = useState({ winner: "", found: false });
    const [renderModal, setRender] = useState(false);
    const [cells, setCells] = useState(Array(9).fill(""));

    const winArray = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 4, 8], [2, 4, 6],
        [0, 3, 6], [1, 4, 7], [2, 5, 8]
    ];

    useEffect(() => {
        if (cells.filter(e => e).length > 4) {
            const a = winArray.map(ewaElem => ewaElem.map(i => cells[i]))
                .filter(eb => ((eb[0] && eb[1] && eb[2]) && (eb[0] === eb[1] &&
                    eb[2] === eb[0]))).flat();
            /* ********************************************* */
            if (a.length === 3) {
                setWinFound({ winner: a[0], found: true });
                toggleRenderModal();
            }
        }
    }, [cells]);

    function handleTurn () {
        setXturn(prev => !prev);
    }

    function toggleDisabled () {
        setGameDisabled(prev => !prev);
    }

    function toggleRenderModal () {
        setRender(prev => !prev);
    }


    function conqourCell (i) {
        if (!winFound.found) {

            const palyerMark = Xturn ? "X" : "O";
            const nCells = [...cells.slice(0, i), palyerMark, ...cells.slice(i + 1)];
            setCells(nCells);
            handleTurn();
        }

    }
    function reset () {
        setGameDisabled(true);
        setXturn(true);
        setWinFound({ winner: "", found: false });
        setCells(Array(9).fill(""));
        setRender(false)
    }

    return (
        <context.Provider
            value={
                {
                    gameDisabled, toggleDisabled, cells, conqourCell,
                    Xturn, winFound, toggleRenderModal, renderModal, reset
                }
            }
        >
            {children}
        </context.Provider>
    );
};

export { ContextProvider, context };
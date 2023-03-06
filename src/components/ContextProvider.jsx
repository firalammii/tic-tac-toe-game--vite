import React, { createContext, useEffect, useState } from 'react';
const context = createContext();

const ContextProvider = ({ children }) => {

    const [gameDisabled, setGameDisabled] = useState(true);
    const [Xturn, setXturn] = useState(true);
    const [singleGameMode, setSingleGameMode] = useState(false);
    const [winFound, setWinFound] = useState({ winner: "", found: false });
    const [renderModal, setRender] = useState(false);
    const [cells, setCells] = useState(Array(9).fill(""));

    let palyerMark = Xturn ? "X" : "O";
    const winArray = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 4, 8], [2, 4, 6],
        [0, 3, 6], [1, 4, 7], [2, 5, 8]
    ];

    useEffect(() => {
        console.log(Xturn);
        if (singleGameMode && !Xturn) {
            console.log(cells, Xturn);

            palyerMark = Xturn ? "X" : "O";
            let randomIndex = 4;
            const cellsCopy = cells;
            while (cellsCopy[randomIndex]) {
                randomIndex = Math.floor(Math.random() * 9);
            }
            if (!cellsCopy[randomIndex]) {
                cellsCopy[randomIndex] = palyerMark;
                setCells(cellsCopy);
                setXturn(true);
            }

        }


        if (cells.filter(e => e).length > 4) {
            const a = winArray.map(ewaElem => ewaElem.map(i => cells[i]))
                .filter(eb => ((eb[0] && eb[1] && eb[2]) && (eb[0] === eb[1] &&
                    eb[2] === eb[0]))).flat();
            /* ********************************************* */
            if (a.length === 3) {
                setWinFound({ winner: a[0], found: true });
                setRender(true);
            }
            else if (cells.filter(e => e).length === 9 && !winFound.found) {
                setWinFound({ winner: "XO", found: true });
                setRender(true)
            }
        }

    }, [cells, singleGameMode]);

    function handleTurn () {
        // if (singleGameMode)
        //     setXturn(false);
        setXturn(prev => !prev);
    }
    function handleGameMode () {
        setSingleGameMode(prev => !prev);
    }

    function toggleDisabled () {
        setGameDisabled(prev => !prev);
    }

    function toggleRenderModal () {
        setRender(prev => !prev);
    }


    function conqourCell (i) {
        if (!winFound.found) {
            palyerMark = Xturn ? "X" : "O";
            // const nCells = cells;
            // nCells[i] = palyerMark;
            const nCells = [...cells.slice(0, i), palyerMark, ...cells.slice(i + 1)];
            setCells(nCells);
            handleTurn();


        }

    }
    console.log(cells, Xturn, palyerMark)


    function reset () {
        setGameDisabled(true);
        setSingleGameMode(false)
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
                    Xturn, winFound, toggleRenderModal, renderModal,
                    singleGameMode, handleGameMode, reset
                }
            }
        >
            {children}
        </context.Provider>
    );
};

export { ContextProvider, context };
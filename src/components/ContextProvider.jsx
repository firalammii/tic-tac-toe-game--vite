import computer from './utils';
import React, { createContext, useEffect, useState } from 'react';
const context = createContext();

const ContextProvider = ({ children }) => {

    const [gameDisabled, setGameDisabled] = useState(true);
    const [Xturn, setXturn] = useState(true);
    const [singleGameMode, setSingleGameMode] = useState(false);
    const [winFound, setWinFound] = useState({ winner: "", found: false, score: 0 });
    const [cells, setCells] = useState(Array(9).fill(""));
    // const [Xmoves, setXmoves] = useState([]);
    const [Omoves, setOmoves] = useState([]);

    let Xmoves = "";
    let palyerMark = Xturn ? "X" : "O";
    const winArray = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 4, 8], [2, 4, 6],
        [0, 3, 6], [1, 4, 7], [2, 5, 8]
    ];

    useEffect(() => {
        if (!winFound.found) {
            if (cells.filter(e => e).length > 4) {
                const a = winArray.map(ewaElem => ewaElem.map(i => cells[i]))
                    .filter(eb => ((eb[0] && eb[1] && eb[2]) && (eb[0] === eb[1] &&
                        eb[2] === eb[0]))).flat();
                /* ********************************************* */
                if (a.length === 3) {
                    const count = a[0] === 'X' ? winFound.score + 5 : winFound.score - 8;
                    setWinFound({ winner: a[0], found: true, score: count });
                }
                else if (cells.filter(e => e).length === 9 && !winFound.found) {
                    const count = winFound.score === 0 ? winFound.score - 10 : winFound.score - 4;
                    setWinFound({ winner: "XO", found: true, score: count });
                }
            }
        }

        if (!winFound.found && singleGameMode) {
            // setTimeout(() => singleModePlayer(), 250);
            singleModePlayer();
        }

    }, [cells]);


    function handleTurn () {
        setXturn(prev => !prev);
    }
    function handleGameMode () {
        setSingleGameMode(prev => !prev);
    }

    function toggleDisabled () {
        setGameDisabled(prev => !prev);
    }



    // function updateXmoves (i) {
    //     setXmoves([i, ...Xmoves]);
    // }


    function conqourCell (i) {
        if (!winFound.found) {
            palyerMark = Xturn ? "X" : "O";
            // setXmoves([i, ...Xmoves])
            Xmoves = i;
            const nCells = [...cells.slice(0, i), palyerMark, ...cells.slice(i + 1)];
            setCells(nCells);
            handleTurn();

            // if (singleGameMode) {
            //     setTimeout(() => singleModePlayer(), 500);
            // }
        }
    }

    function singleModePlayer () {
        if (!winFound.found && singleGameMode && !Xturn) {
            palyerMark = Xturn ? "X" : "O";
            let randomIndex = computer(winFound.score, Xmoves, Omoves, cells);
            const cellsCopy = cells;
            while (cellsCopy[randomIndex] && (cells.filter(e => e).length !== 9)) {
                randomIndex = computer(winFound.score, Xmoves, Omoves, cells);
            }

            if (!cellsCopy[randomIndex]) {

                setOmoves([randomIndex, ...Omoves]);
                cellsCopy[randomIndex] = palyerMark;
                setCells(cellsCopy);
                setXturn(true);

                console.log(cells);
            }
        }
    }
    function restart () {
        setGameDisabled(true);
        setXturn(true);
        setWinFound({ ...winFound, winner: "", found: false });
        setCells(Array(9).fill(""));
        Xmoves = ""
        setOmoves([]);
    }
    function continueGame () {
        setXturn(true);
        setWinFound({ ...winFound, winner: "", found: false });
        setCells(Array(9).fill(""));
        Xmoves = "";
        setOmoves([]);
    }
    function newGame () {
        setGameDisabled(true);
        setXturn(true);
        setWinFound({ winner: "", found: false, score: 0 });
        setCells(Array(9).fill(""));
        Xmoves = "";
        setOmoves([]);
    }
    function newGame2 () {
        setXturn(true);
        setWinFound({ winner: "", found: false, score: 0 });
        setCells(Array(9).fill(""));
        setOmoves([]);
    }

    return (
        <context.Provider
            value={
                {
                    gameDisabled, toggleDisabled, cells, conqourCell,
                    Xturn, winFound,
                    singleGameMode, handleGameMode, newGame,
                    restart, continueGame, newGame2
                }
            }
        >
            {children}
        </context.Provider>
    );
};

export { ContextProvider, context };
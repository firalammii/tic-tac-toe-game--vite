import computer from './utils';
import React, { createContext, useEffect, useState } from 'react';
const context = createContext();

const ContextProvider = ({ children }) => {

    const [gameDisabled, setGameDisabled] = useState(true);
    const [Xturn, setXturn] = useState(true);
    const [singleGameMode, setSingleGameMode] = useState(false);
    const [winFound, setWinFound] = useState({ winner: "", found: false, score: 0 });
    const [renderModal, setRender] = useState(false);
    const [cells, setCells] = useState(Array(9).fill(""));
    const [Xmoves, setXmoves] = useState([]);
    const [Omoves, setOmoves] = useState([]);

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
                    setRender(true);
                }
                else if (cells.filter(e => e).length === 9 && !winFound.found) {
                    const count = winFound.score === 0 ? winFound.score - 10 : winFound.score - 4;
                    setWinFound({ winner: "XO", found: true, score: count });
                    setRender(true);
                }
            }
        }
        // const Omoves = cells.map((eo, i) => i).filter(ei => cells[ei] === 'O');
        if (!winFound.found) {
            setTimeout(singleModePlayer, 1500);
        }
        async function singleModePlayer () {

            if (singleGameMode && !Xturn) {
                palyerMark = Xturn ? "X" : "O";

                let randomIndex = computer(winFound.score, cells);

                const cellsCopy = cells;
                while (cellsCopy[randomIndex] && (cells.filter(e => e).length !== 9)) {
                    randomIndex = computer(winFound.score, cells);
                }

                if (!cellsCopy[randomIndex]) {
                    setXmoves([randomIndex, ...Omoves])
                    cellsCopy[randomIndex] = palyerMark;
                    setCells(cellsCopy);
                    setXturn(true);
                }
            }
        }

    }, [cells, singleGameMode, Xturn]);


    function handleTurn () {
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

    function updateXmoves (i) {
        setXmoves([i, ...Xmoves]);
    }


    function conqourCell (i) {
        if (!winFound.found) {
            palyerMark = Xturn ? "X" : "O";
            setXmoves([i, ...Xmoves])
            const nCells = [...cells.slice(0, i), palyerMark, ...cells.slice(i + 1)];
            setCells(nCells);
            handleTurn();
        }
    }

    function restart () {
        setGameDisabled(true);
        setXturn(true);
        setWinFound({ ...winFound, winner: "", found: false });
        setCells(Array(9).fill(""));
        setRender(false);
        setXmoves([]);
        setOmoves([]);
    }
    function continueGame () {
        setXturn(true);
        setWinFound({ ...winFound, winner: "", found: false });
        setCells(Array(9).fill(""));
        setRender(false);
        setXmoves([]);
        setOmoves([]);
    }
    function newGame () {
        setGameDisabled(true);
        setXturn(true);
        setWinFound({ winner: "", found: false, score: 0 });
        setCells(Array(9).fill(""));
        setRender(false);
        setXmoves([]);
        setOmoves([]);
    }
    function newGame2 () {
        setXturn(true);
        setWinFound({ winner: "", found: false, score: 0 });
        setCells(Array(9).fill(""));
        setRender(false);
        setOmoves([]);
    }

    return (
        <context.Provider
            value={
                {
                    gameDisabled, toggleDisabled, cells, conqourCell,
                    Xturn, winFound, toggleRenderModal, renderModal,
                    singleGameMode, handleGameMode, updateXmoves, newGame,
                    restart, continueGame, newGame2
                }
            }
        >
            {children}
        </context.Provider>
    );
};

export { ContextProvider, context };
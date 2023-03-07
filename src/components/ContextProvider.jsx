import { getGoodMove } from './utils';
import React, { createContext, useEffect, useState } from 'react';
const context = createContext();

const ContextProvider = ({ children }) => {

    const [gameDisabled, setGameDisabled] = useState(true);
    const [Xturn, setXturn] = useState(true);
    const [singleGameMode, setSingleGameMode] = useState(false);
    const [winFound, setWinFound] = useState({ winner: "", found: false });
    const [renderModal, setRender] = useState(false);
    const [cells, setCells] = useState(Array(9).fill(""));
    const [Xmoves, setXmoves] = useState([]);
    // const [moveHistory, setMoveHistory] = useState([]);

    let palyerMark = Xturn ? "X" : "O";
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
                setRender(true);
            }
            else if (cells.filter(e => e).length === 9 && !winFound.found) {
                setWinFound({ winner: "XO", found: true });
                setRender(true);
            }
        }
        singleModePlayer();
        async function singleModePlayer () {

            if (singleGameMode && !Xturn) {
                palyerMark = Xturn ? "X" : "O";

                let randomIndex = getGoodMove(Xmoves[0], cells);

                const cellsCopy = cells;
                while (cellsCopy[randomIndex] && (cells.filter(e => e).length !== 9)) {
                    randomIndex = getGoodMove(Xmoves[0], cells);
                    console.log(randomIndex);
                }

                if (!cellsCopy[randomIndex]) {
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

            // setMoveHistory([...moveHistory, { mark: palyerMark, index: i }])
        }
    }

    function restart () {
        setXturn(true);
        setWinFound({ winner: "", found: false });
        setCells(Array(9).fill(""));
        setRender(false);
        setXmoves([]);
    }
    function newGame () {
        setGameDisabled(true);
        setXturn(true);
        setWinFound({ winner: "", found: false });
        setCells(Array(9).fill(""));
        setRender(false);
        setXmoves([]);
    }

    return (
        <context.Provider
            value={
                {
                    gameDisabled, toggleDisabled, cells, conqourCell,
                    Xturn, winFound, toggleRenderModal, renderModal,
                    singleGameMode, handleGameMode, updateXmoves, newGame, restart
                }
            }
        >
            {children}
        </context.Provider>
    );
};

export { ContextProvider, context };
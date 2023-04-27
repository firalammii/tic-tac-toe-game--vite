
let rem;
function computer (score, xmoves, omoves, cells) { // < -12 -12 12 12-25 25<
    rem = cells.map((ec, i) => i).filter(ei => !cells[ei]);
    // if (score >= 30) return attackOrCounterAttack(cells);
    // else if (score >= 12) return getCounterMove(xmoves[0], cells);
    // else if (score >= -12) return attack(omoves, cells);
    // else if (score >= -20) return getGoodMove(xmoves[0], cells);
    // else if (score < 20) return getSimpleMove();
    // return attack(omoves, cells, xmoves[0]);
    // return getCounterMove(xmoves[0], cells);
    // return attackOrCounterAttack(xmoves[0], cells);
    console.log(omoves);
    const moves = attack(omoves, cells, xmoves[0]);
    console.log(omoves);

    console.log(moves);
    return moves;
}
//8e8fec65
function attackOrCounterAttack () {

    if (!cells[4]) return 4;

    if (cells[0] === 'X') {
        if (cells[4] === 'X' || cells[8] === 'X') // at least either is X if both were X game is over
            return cells[4] === 'X' && !cells[8] ? 8 : 4;
        else if (cells[1] === 'X' || cells[2] === 'X')
            return cells[1] === 'X' && !cells[2] ? 2 : 1;
        else if (cells[3] === 'X' || cells[6] === 'X')
            return cells[3] === 'X' && !cells[6] ? 6 : 3;
        else if (!cells[attack(0, cells)]) return attack(cells);
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[1] === 'X') { // 102, 147
        if (cells[4] === 'X' || cells[7] === 'X')
            return cells[4] === 'X' && !cells[7] ? 7 : 4;
        if (cells[0] === 'X' || cells[2] === 'X')
            return cells[0] === 'X' && !cells[2] ? 2 : 0;
        else if (!cells[attack(1, cells)]) return attack(cells);
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[2] === 'X') { // 210, 246, 258
        if (cells[4] === 'X' || cells[6] === 'X')
            return cells[4] === 'X' && !cells[6] ? 6 : 4;
        else if (cells[5] === 'X' || cells[8] === 'X')
            return cells[5] === 'X' && !cells[8] ? 8 : 5;
        else if (cells[1] === 'X' || cells[0] === 'X')
            return cells[1] === 'X' && !cells[0] ? 0 : 1;
        else if (!cells[attack(2, cells)]) return attack(cells);
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[3] === 'X') { // 345, 306
        if (cells[4] === 'X' || cells[5] === 'X')
            return cells[4] === 'X' && !cells[5] ? 5 : 4;
        else if (cells[0] === 'X' || cells[6] === 'X')
            return cells[0] === 'X' && !cells[6] ? 6 : 0;
        else if (!cells[attack(3, cells)]) return attack(cells);
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[4] === 'X') { // 048, 246, 345, 147
        if (cells[0] === 'X' || cells[8] === 'X')
            return cells[0] === 'X' && !cells[8] ? 8 : 0;
        else if (cells[4] === 'X' || cells[2] === 'X')
            return cells[4] === 'X' && !cells[2] ? 2 : 4;
        else if (cells[3] === 'X' || cells[5] === 'X')
            return cells[3] === 'X' && !cells[5] ? 5 : 3;
        else if (cells[1] === 'X' || cells[7] === 'X')
            return cells[1] === 'X' && !cells[7] ? 7 : 1;
        else if (!cells[attack(4, cells)]) return attack(cells);
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[5] === 'X') { // 345, 258
        if (cells[4] === 'X' || cells[3] === 'X')
            return cells[4] === 'X' && !cells[3] ? 3 : 4;
        else if (cells[8] === 'X' || cells[2] === 'X')
            return cells[8] === 'X' && !cells[2] ? 2 : 8;
        else if (!cells[attack(5, cells)]) return attack(cells);
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[6] === 'X') { // 647, 630, 678
        if (cells[4] === 'X' || cells[7] === 'X')
            return cells[4] === 'X' && !cells[7] ? 7 : 4;
        else if (cells[7] === 'X' || cells[8] === 'X')
            return cells[7] === 'X' && !cells[8] ? 8 : 7;
        else if (cells[3] === 'X' || cells[0] === 'X')
            return cells[3] === 'X' && !cells[0] ? 0 : 3;
        else if (!cells[attack(6, cells)]) return attack(cells);
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[7] === 'X') { // 741, 768
        if (cells[4] === 'X' || cells[1] === 'X')
            return cells[4] === 'X' && !cells[1] ? 1 : 4;
        else if (cells[8] === 'X' || cells[6] === 'X')
            return cells[8] === 'X' && !cells[6] ? 6 : 8;
        else if (!cells[attack(7, cells)]) return attack(cells);
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[8] === 'X') { // 852, 876
        if (cells[5] === 'X' || cells[2] === 'X')
            return cells[5] === 'X' && !cells[2] ? 2 : 5;
        else if (cells[7] === 'X' || cells[6] === 'X')
            return cells[7] === 'X' && !cells[6] ? 6 : 7;
        else if (!cells[attack(8, cells)]) return attack(cells);
        else return rem[Math.floor(Math.random() * rem.length)];
    }

}

function attack (omoves, cells, xmove) {

    if (!cells[4]) return 4;
    else if (omoves.length > 1) {
        return omoves.map(eo => {
            switch (eo) {
                case 0: { // 0 12, 0 48, 0 36
                    if (cells[4] === 'O' || cells[8] === 'O' && (!cells[4] || !cells[8])) // at least either is O if both were O game is over
                        return cells[4] === 'O' && !cells[8] ? 8 : 4;
                    else if (cells[1] === 'O' || cells[2] === 'O' && (!cells[1] || !cells[2]))
                        return cells[1] === 'O' && !cells[2] ? 2 : 1;
                    else if (cells[3] === 'O' || cells[6] === 'O' && (!cells[3] || !cells[6]))
                        return cells[3] === 'O' && !cells[6] ? 6 : 3;
                    else return undefined;
                }
                case 1: { // 1 02, 1 47
                    if (cells[4] === 'O' || cells[7] === 'O' && (!cells[4] || !cells[7]))
                        return cells[4] === 'O' && !cells[7] ? 7 : 4;
                    if (cells[0] === 'O' || cells[2] === 'O' && (!cells[0] || !cells[2]))
                        return cells[0] === 'O' && !cells[2] ? 2 : 0;
                    else return undefined;
                }
                case 2: { // 2 10, 2 46, 2 58
                    if (cells[4] === 'O' || cells[6] === 'O' && (!cells[4] || !cells[6]))
                        return cells[4] === 'O' && !cells[6] ? 6 : 4;
                    else if (cells[5] === 'O' || cells[8] === 'O' && (!cells[5] || !cells[8]))
                        return cells[5] === 'O' && !cells[8] ? 8 : 5;
                    else if (cells[1] === 'O' || cells[0] === 'O' && (!cells[1] || !cells[0]))
                        return cells[1] === 'O' && !cells[0] ? 0 : 1;
                    else return undefined;
                }
                case 3: { // 3 45, 3 06
                    if (cells[4] === 'O' || cells[5] === 'O' && (!cells[4] || !cells[5]))
                        return cells[4] === 'O' && !cells[5] ? 5 : 4;
                    else if (cells[0] === 'O' || cells[6] === 'O' && (!cells[0] || !cells[6]))
                        return cells[0] === 'O' && !cells[6] ? 6 : 0;
                    else return undefined;
                }
                case 4: { // 048, 246, 345, 147
                    if (cells[0] === 'O' || cells[8] === 'O' && (!cells[0] || !cells[8]))
                        return cells[0] === 'O' && !cells[8] ? 8 : 0;
                    else if (cells[6] === 'O' || cells[2] === 'O' && (!cells[6] || !cells[2]))
                        return cells[6] === 'O' && !cells[2] ? 2 : 6;
                    else if (cells[3] === 'O' || cells[5] === 'O' && (!cells[3] || !cells[5]))
                        return cells[3] === 'O' && !cells[5] ? 5 : 3;
                    else if (cells[1] === 'O' || cells[7] === 'O' && (!cells[1] || !cells[7]))
                        return cells[1] === 'O' && !cells[7] ? 7 : 1;
                    else return undefined;
                }
                case 5: { // 345, 258
                    if (cells[4] === 'O' || cells[3] === 'O' && (!cells[4] || !cells[3]))
                        return cells[4] === 'O' && !cells[3] ? 3 : 4;
                    else if (cells[8] === 'O' || cells[2] === 'O' && (!cells[2] || !cells[8]))
                        return cells[8] === 'O' && !cells[2] ? 2 : 8;
                    else return undefined;
                }
                case 6: { // 6 42, 630, 678
                    if (cells[4] === 'O' || cells[2] === 'O' && (!cells[4] || !cells[2]))
                        return cells[4] === 'O' && !cells[2] ? 2 : 4;
                    else if (cells[7] === 'O' || cells[8] === 'O' && (!cells[7] || !cells[8]))
                        return cells[7] === 'O' && !cells[8] ? 8 : 7;
                    else if (cells[3] === 'O' || cells[0] === 'O' && (!cells[3] || !cells[0]))
                        return cells[3] === 'O' && !cells[0] ? 0 : 3;
                    else return undefined;
                }
                case 7: { // 741, 768
                    if (cells[4] === 'O' || cells[1] === 'O' && (!cells[4] || !cells[1]))
                        return cells[4] === 'O' && !cells[1] ? 1 : 4;
                    else if (cells[8] === 'O' || cells[6] === 'O' && (!cells[6] || !cells[8]))
                        return cells[8] === 'O' && !cells[6] ? 6 : 8;
                    else return undefined;
                }
                case 8: { // 852, 876
                    if (cells[5] === 'O' || cells[2] === 'O' && (!cells[5] || !cells[2]))
                        return cells[5] === 'O' && !cells[2] ? 2 : 5;
                    else if (cells[7] === 'O' || cells[6] === 'O' && (!cells[7] || !cells[6]))
                        return cells[7] === 'O' && !cells[6] ? 6 : 7;
                    else return undefined;
                }
                default: return getCounterMove(xmove, cells); //optional just incase
            }
        }).filter(eno => eno !== undefined)[0];
    } else return getCounterMove(xmove, cells);
}

function getCounterMove (xmove, cells) {

    if (!cells[4]) return 4;
    else {
        switch (xmove) {

            case 0: { // 0 12, 0 48, 0 36
                if (cells[4] === 'X' || cells[8] === 'X' && (!cells[4] || !cells[8])) // at least either is X if both were X game is over
                    return cells[4] === 'X' && !cells[8] ? 8 : 4;
                else if (cells[1] === 'X' || cells[2] === 'X' && (!cells[1] || !cells[2]))
                    return cells[1] === 'X' && !cells[2] ? 2 : 1;
                else if (cells[3] === 'X' || cells[6] === 'X' && (!cells[3] || !cells[6]))
                    return cells[3] === 'X' && !cells[6] ? 6 : 3;
                else return rem[Math.floor(Math.random() * rem.length)]; //attacking move
            }
            case 1: { // 1 02, 1 47
                if (cells[4] === 'X' || cells[7] === 'X' && (!cells[4] || !cells[7]))
                    return cells[4] === 'X' && !cells[7] ? 7 : 4;
                if (cells[0] === 'X' || cells[2] === 'X' && (!cells[0] || !cells[2]))
                    return cells[0] === 'X' && !cells[2] ? 2 : 0;
                else return rem[Math.floor(Math.random() * rem.length)];
            }
            case 2: { // 2 10, 2 46, 2 58
                if (cells[4] === 'X' || cells[6] === 'X' && (!cells[4] || !cells[6]))
                    return cells[4] === 'X' && !cells[6] ? 6 : 4;
                else if (cells[5] === 'X' || cells[8] === 'X' && (!cells[5] || !cells[8]))
                    return cells[5] === 'X' && !cells[8] ? 8 : 5;
                else if (cells[1] === 'X' || cells[0] === 'X' && (!cells[1] || !cells[0]))
                    return cells[1] === 'X' && !cells[0] ? 0 : 1;
                else return rem[Math.floor(Math.random() * rem.length)];
            }
            case 3: { // 3 45, 3 06
                if (cells[4] === 'X' || cells[5] === 'X' && (!cells[4] || !cells[5]))
                    return cells[4] === 'X' && !cells[5] ? 5 : 4;
                else if (cells[0] === 'X' || cells[6] === 'X' && (!cells[0] || !cells[6]))
                    return cells[0] === 'X' && !cells[6] ? 6 : 0;
                else return rem[Math.floor(Math.random() * rem.length)];
            }
            case 4: { // 048, 246, 345, 147
                if (cells[0] === 'X' || cells[8] === 'X' && (!cells[0] || !cells[8]))
                    return cells[0] === 'X' && !cells[8] ? 8 : 0;
                else if (cells[6] === 'X' || cells[2] === 'X' && (!cells[6] || !cells[2]))
                    return cells[6] === 'X' && !cells[2] ? 2 : 6;
                else if (cells[3] === 'X' || cells[5] === 'X' && (!cells[3] || !cells[5]))
                    return cells[3] === 'X' && !cells[5] ? 5 : 3;
                else if (cells[1] === 'X' || cells[7] === 'X' && (!cells[1] || !cells[7]))
                    return cells[1] === 'X' && !cells[7] ? 7 : 1;
                else return rem[Math.floor(Math.random() * rem.length)];
            }
            case 5: { // 345, 258
                if (cells[4] === 'X' || cells[3] === 'X' && (!cells[4] || !cells[3]))
                    return cells[4] === 'X' && !cells[3] ? 3 : 4;
                else if (cells[8] === 'X' || cells[2] === 'X' && (!cells[2] || !cells[8]))
                    return cells[8] === 'X' && !cells[2] ? 2 : 8;
                else return rem[Math.floor(Math.random() * rem.length)];
            }
            case 6: { // 6 42, 630, 678
                if (cells[4] === 'X' || cells[2] === 'X' && (!cells[4] || !cells[2]))
                    return cells[4] === 'X' && !cells[2] ? 2 : 4;
                else if (cells[7] === 'X' || cells[8] === 'X' && (!cells[7] || !cells[8]))
                    return cells[7] === 'X' && !cells[8] ? 8 : 7;
                else if (cells[3] === 'X' || cells[0] === 'X' && (!cells[3] || !cells[0]))
                    return cells[3] === 'X' && !cells[0] ? 0 : 3;
                else return rem[Math.floor(Math.random() * rem.length)];
            }
            case 7: { // 741, 768
                if (cells[4] === 'X' || cells[1] === 'X' && (!cells[4] || !cells[1]))
                    return cells[4] === 'X' && !cells[1] ? 1 : 4;
                else if (cells[8] === 'X' || cells[6] === 'X' && (!cells[6] || !cells[8]))
                    return cells[8] === 'X' && !cells[6] ? 6 : 8;
                else return rem[Math.floor(Math.random() * rem.length)];
            }
            case 8: { // 852, 876
                if (cells[5] === 'X' || cells[2] === 'X' && (!cells[5] || !cells[2]))
                    return cells[5] === 'X' && !cells[2] ? 2 : 5;
                else if (cells[7] === 'X' || cells[6] === 'X' && (!cells[7] || !cells[6]))
                    return cells[7] === 'X' && !cells[6] ? 6 : 7;
                else return rem[Math.floor(Math.random() * rem.length)];
            }
            default: return getGoodMove(xmove, cells);
        }
    }
}

function getGoodMove (xmove, cells) {
    switch (xmove) {
        case 0:
            if (!cells[2] || !cells[4] || !cells[6]) {
                const m = [2, 4, 6, 4];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[8] || !cells[3]) {
                const m = [8, 1, 8, 3];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

        case 1:
            if (!cells[2] || !cells[4]) {
                const m = [2, 4];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[7] || !cells[0]) {
                const m = [7, 0];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

        case 2:

            if (!cells[0] || !cells[4] || !cells[8]) {
                const m = [8, 4, 0];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[5] || !cells[1] || !cells[6]) {
                const m = [5, 1, 6];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

        case 3:

            if (!cells[6] || !cells[4]) {
                const m = [6, 4, 4];
                return m[Math.floor(Math.random() * m.length)];
            }
            else if (!cells[5] || !cells[0] || !cells[6]) {
                const m = [5, 0, 6];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

        case 4:

            if (!cells[8] || !cells[2] || !cells[0] || !cells[6]) {
                const m = [0, 2, 6, 8, 8, 2];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[1] || !cells[5] || !cells[3] || !cells[7]) {
                const m = [1, 5, 3, 7];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

        case 5:

            if (!cells[3] || !cells[4]) {
                const m = [4, 3, 4];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[2] || !cells[8]) {
                const m = [2, 8, 2];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

        case 6:

            if (!cells[4] || !cells[2] || !cells[0]) {
                const m = [4, 0, 2, 0];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[3] || !cells[7] || !cells[8]) {
                const m = [3, 7, 3, 8];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

        case 7:

            if (!cells[6] || !cells[4]) {
                const m = [4, 6, 4];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[1] || !cells[8]) {
                const m = [8, 1, 8];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

        case 8:
            if (!cells[4] || !cells[6] || !cells[0]) {
                const m = [6, 4, 6, 0];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[5] || !cells[7] || !cells[2]) {
                const m = [5, 7, 2, 7];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];
        default: return rem[Math.floor(Math.random() * rem.length)];
    }
}
function getSimpleMove () {
    return rem[Math.floor(Math.random() * rem.length)];
}
export default computer;
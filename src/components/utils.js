
let rem;
function computer (score, cells) { // < -12 -12 12 12-25 25<
    rem = cells.map((ec, i) => i).filter(ei => !cells[ei]);
    if (score >= 30) return counterAttack(cells);
    else if (score >= 12) return getCounterMove(cells);
    // else if (score >= -12) return attack(cells);
    else if (score >= -20) return getGoodMove(cells);
    else if (score < 20) return getSimpleMove();
}

function counterAttack () {

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

function attack (cells) {
    console.log(cells);
    if (cells[0] === 'O') {
        if (cells[4] === 'O' || cells[8] === 'O') // at least either is X if both were X game is over
            return cells[4] === 'O' ? 8 : 4;
        else if (cells[1] === 'O' || cells[2] === 'O')
            return cells[1] === 'O' ? 2 : 1;
        else if (cells[3] === 'O' || cells[6] === 'O')
            return cells[3] === 'O' ? 6 : 3;

    }
    if (cells[1] === 'O') { // 102, 147
        if (cells[4] === 'O' || cells[7] === 'O')
            return cells[4] === 'O' ? 7 : 4;
        if (cells[0] === 'O' || cells[2] === 'O')
            return cells[0] === 'O' ? 2 : 0;

    }
    if (cells[2] === 'O') { // 210, 246, 258
        if (cells[4] === 'O' || cells[6] === 'O')
            return cells[4] === 'O' ? 6 : 4;
        else if (cells[5] === 'O' || cells[8] === 'O')
            return cells[5] === 'O' ? 8 : 5;
        else if (cells[1] === 'O' || cells[0] === 'O')
            return cells[1] === 'O' ? 0 : 1;

    }
    if (cells[3] === 'O') { // 345, 306
        if (cells[4] === 'O' || cells[5] === 'O')
            return cells[4] === 'O' ? 5 : 4;
        else if (cells[0] === 'O' || cells[6] === 'O')
            return cells[0] === 'O' ? 6 : 0;
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[4] === 'O') { // 048, 246, 345, 147
        if (cells[0] === 'O' || cells[8] === 'O')
            return cells[0] === 'O' ? 8 : 0;
        else if (cells[4] === 'O' || cells[2] === 'O')
            return cells[4] === 'O' ? 2 : 4;
        else if (cells[3] === 'O' || cells[5] === 'O')
            return cells[3] === 'O' ? 5 : 3;
        else if (cells[1] === 'O' || cells[7] === 'O')
            return cells[1] === 'O' ? 7 : 1;

    }
    if (cells[5] === 'O') { // 345, 258
        if (cells[4] === 'O' || cells[3] === 'O')
            return cells[4] === 'O' ? 3 : 4;
        else if (cells[8] === 'O' || cells[2] === 'O')
            return cells[8] === 'O' ? 2 : 8;
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[6] === 'O') { // 647, 630, 678
        if (cells[4] === 'O' || cells[7] === 'O')
            return cells[4] === 'O' ? 7 : 4;
        else if (cells[7] === 'O' || cells[8] === 'O')
            return cells[7] === 'O' ? 8 : 7;
        else if (cells[3] === 'O' || cells[0] === 'O')
            return cells[3] === 'O' ? 0 : 3;

    }
    if (cells[7] === 'O') { // 741, 768
        if (cells[4] === 'O' || cells[1] === 'O')
            return cells[4] === 'O' ? 1 : 4;
        else if (cells[8] === 'O' || cells[6] === 'O')
            return cells[8] === 'O' ? 6 : 8;

    }
    if (cells[8] === 'O') { // 852, 876
        if (cells[5] === 'O' || cells[2] === 'O')
            return cells[5] === 'O' ? 2 : 5;
        else if (cells[7] === 'O' || cells[6] === 'O')
            return cells[7] === 'O' ? 6 : 7;
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    return getSimpleMove();

}

function getCounterMove (cells) {

    if (!cells[4]) return 4;

    if (cells[0] === 'X') {
        if (cells[4] === 'X' || cells[8] === 'X') // at least either is X if both were X game is over
            return cells[4] === 'X' && !cells[8] ? 8 : 4;
        else if (cells[1] === 'X' || cells[2] === 'X')
            return cells[1] === 'X' && !cells[2] ? 2 : 1;
        else if (cells[3] === 'X' || cells[6] === 'X')
            return cells[3] === 'X' && !cells[6] ? 6 : 3;
        else return rem[Math.floor(Math.random() * rem.length)]; //attacking move
    }
    if (cells[0] === 'X') { // 102, 147
        if (cells[4] === 'X' || cells[7] === 'X')
            return cells[4] === 'X' && !cells[7] ? 7 : 4;
        if (cells[0] === 'X' || cells[2] === 'X')
            return cells[0] === 'X' && !cells[2] ? 2 : 0;
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[0] === 'X') { // 210, 246, 258
        if (cells[4] === 'X' || cells[6] === 'X')
            return cells[4] === 'X' && !cells[6] ? 6 : 4;
        else if (cells[5] === 'X' || cells[8] === 'X')
            return cells[5] === 'X' && !cells[8] ? 8 : 5;
        else if (cells[1] === 'X' || cells[0] === 'X')
            return cells[1] === 'X' && !cells[0] ? 0 : 1;
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[0] === 'X') { // 345, 306
        if (cells[4] === 'X' || cells[5] === 'X')
            return cells[4] === 'X' && !cells[5] ? 5 : 4;
        else if (cells[0] === 'X' || cells[6] === 'X')
            return cells[0] === 'X' && !cells[6] ? 6 : 0;
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[0] === 'X') { // 048, 246, 345, 147
        if (cells[0] === 'X' || cells[8] === 'X')
            return cells[0] === 'X' && !cells[8] ? 8 : 0;
        else if (cells[4] === 'X' || cells[2] === 'X')
            return cells[4] === 'X' && !cells[2] ? 2 : 4;
        else if (cells[3] === 'X' || cells[5] === 'X')
            return cells[3] === 'X' && !cells[5] ? 5 : 3;
        else if (cells[1] === 'X' || cells[7] === 'X')
            return cells[1] === 'X' && !cells[7] ? 7 : 1;
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[0] === 'X') { // 345, 258
        if (cells[4] === 'X' || cells[3] === 'X')
            return cells[4] === 'X' && !cells[3] ? 3 : 4;
        else if (cells[8] === 'X' || cells[2] === 'X')
            return cells[8] === 'X' && !cells[2] ? 2 : 8;
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[0] === 'X') { // 647, 630, 678
        if (cells[4] === 'X' || cells[7] === 'X')
            return cells[4] === 'X' && !cells[7] ? 7 : 4;
        else if (cells[7] === 'X' || cells[8] === 'X')
            return cells[7] === 'X' && !cells[8] ? 8 : 7;
        else if (cells[3] === 'X' || cells[0] === 'X')
            return cells[3] === 'X' && !cells[0] ? 0 : 3;
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[0] === 'X') { // 741, 768
        if (cells[4] === 'X' || cells[1] === 'X')
            return cells[4] === 'X' && !cells[1] ? 1 : 4;
        else if (cells[8] === 'X' || cells[6] === 'X')
            return cells[8] === 'X' && !cells[6] ? 6 : 8;
        else return rem[Math.floor(Math.random() * rem.length)];
    }
    if (cells[0] === 'X') { // 852, 876
        if (cells[5] === 'X' || cells[2] === 'X')
            return cells[5] === 'X' && !cells[2] ? 2 : 5;
        else if (cells[7] === 'X' || cells[6] === 'X')
            return cells[7] === 'X' && !cells[6] ? 6 : 7;
        else return rem[Math.floor(Math.random() * rem.length)];
    }

}

function getGoodMove (cells) {

    if (cells[0] === 'X') 
            if (!cells[2] || !cells[4] || !cells[6]) {
                const m = [2, 4, 6, 4];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[8] || !cells[3]) {
                const m = [8, 1, 8, 3];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

    if (cells[1] === 'X') 
            if (!cells[2] || !cells[4]) {
                const m = [2, 4];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[7] || !cells[0]) {
                const m = [7, 0];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

    if (cells[2] === 'X') 

            if (!cells[0] || !cells[4] || !cells[8]) {
                const m = [8, 4, 0];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[5] || !cells[1] || !cells[6]) {
                const m = [5, 1, 6];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

    if (cells[3] === 'X') 

            if (!cells[6] || !cells[4]) {
                const m = [6, 4, 4];
                return m[Math.floor(Math.random() * m.length)];
            }
            else if (!cells[5] || !cells[0] || !cells[6]) {
                const m = [5, 0, 6];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

    if (cells[4] === 'X') 

        if (!cells[8] || !cells[2] || !cells[0] || !cells[6]) {
            const m = [0, 2, 6, 8, 8, 2];
                return m[Math.floor(Math.random() * m.length)];
        } else if (!cells[1] || !cells[5] || !cells[3] || !cells[7]) {
            const m = [1, 5, 3, 7];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

    if (cells[5] === 'X') 

            if (!cells[3] || !cells[4]) {
                const m = [4, 3, 4];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[2] || !cells[8]) {
                const m = [2, 8, 2];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

    if (cells[6] === 'X') 

            if (!cells[4] || !cells[2] || !cells[0]) {
                const m = [4, 0, 2, 0];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[3] || !cells[7] || !cells[8]) {
                const m = [3, 7, 3, 8];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

    if (cells[7] === 'X') 

            if (!cells[6] || !cells[4]) {
                const m = [4, 6, 4];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[1] || !cells[8]) {
                const m = [8, 1, 8];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

    if (cells[8] === 'X') 
            if (!cells[4] || !cells[6] || !cells[0]) {
                const m = [6, 4, 6, 0];
                return m[Math.floor(Math.random() * m.length)];
            } else if (!cells[5] || !cells[7] || !cells[2]) {
                const m = [5, 7, 2, 7];
                return m[Math.floor(Math.random() * m.length)];
            } else return rem[Math.floor(Math.random() * rem.length)];

}
function getSimpleMove () {
    return rem[Math.floor(Math.random() * rem.length)];
}
export default computer;
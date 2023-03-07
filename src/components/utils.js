
function getGoodMove (xmove, cells) {
    switch (xmove) {
        case 0:

            if (!cells[2] || !cells[4] || !cells[6]) {
                const m = [2, 4, 6, 4];
                return m[Math.floor(Math.random() * m.length)];
            }
            else {
                const m = [8, 1, 8, 3];
                return m[Math.floor(Math.random() * m.length)];
            }

        case 1:

            if (!cells[2] || !cells[4]) {
                const m = [2, 4];
                return m[Math.floor(Math.random() * m.length)];
            }
            else {
                const m = [7, 0];
                return m[Math.floor(Math.random() * m.length)];
            }

        case 2:

            if (!cells[0] || !cells[4] || !cells[8]) {
                const m = [8, 4, 0];
                return m[Math.floor(Math.random() * m.length)];
            }
            else {
                const m = [5, 1, 6];
                return m[Math.floor(Math.random() * m.length)];
            }

        case 3:

            if (!cells[6] || !cells[4]) {
                const m = [6, 4, 4];
                return m[Math.floor(Math.random() * m.length)];
            }
            else {
                const m = [5, 0, 6];
                return m[Math.floor(Math.random() * m.length)];
            }

        case 4:

            if (!cells[8] || !cells[2] || !cells[7]) {
                const m = [2, 7, 8, 7, 2];
                return m[Math.floor(Math.random() * m.length)];
            }
            else {
                const m = [1, 5, 3, 6, 0];
                return m[Math.floor(Math.random() * m.length)];
            }

        case 5:

            if (!cells[3] || !cells[4]) {
                const m = [4, 3, 4];
                return m[Math.floor(Math.random() * m.length)];
            }
            else {
                const m = [2, 8, 2];
                return m[Math.floor(Math.random() * m.length)];
            }

        case 6:


            if (!cells[4] || !cells[2] || !cells[0]) {
                const m = [4, 0, 2, 0];
                return m[Math.floor(Math.random() * m.length)];
            }
            else {
                const m = [3, 7, 3, 8];
                return m[Math.floor(Math.random() * m.length)];
            }

        case 7:

            if (!cells[6] || !cells[4]) {
                const m = [6, 4, 4];
                return m[Math.floor(Math.random() * m.length)];
            }
            else {
                const m = [1, 8, 8];
                return m[Math.floor(Math.random() * m.length)];
            }

        case 8:
            if (!cells[4] || !cells[6] || !cells[0]) {
                const m = [6, 4, 6, 0];
                return m[Math.floor(Math.random() * m.length)];
            }
            else {
                const m = [5, 7, 2, 7];
                return m[Math.floor(Math.random() * m.length)];
            }

        default: return 4;
    }

}
export { getGoodMove };
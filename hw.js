function toFraction(n) {
    for (let i = 1; i < 1000; i++) {
        let n1 = n * i;
        let n2 = parseInt(n1);
        if (Math.abs(n1 - n2) < 0.000001) {
            console.log(i);
            console.log(n * i);
            break;
        }
    }
}

function solve(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c;
    if (delta >= 0) {
        let ta = 2 * a;
        let nb = -b;
        let x1 = (nb + Math.sqrt(delta)) / ta;
        let x2 = (nb - Math.sqrt(delta)) / ta;
        return [x1, x2];
    } else {
        throw new Error("Delta < 0");
    }
}

function toFraction(n) {
    for (let i = 1; i < 10000000; i++) {
        let n1 = n * i;
        let n2 = Math.round(n1);
        if (Math.abs(n1 - n2) < 1e-15) {
            return (n * i) + " / " + i;
        }
    }
    return n.toString();
}

function solveQuadratic(a, b, c) {
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

function divisor(n) {
    let out = [1];
    for (let a = 2; a <= n; ++a) {
        if (n % a == 0) {
            out = out.concat(a);
        }
    }
    return out;
}

function toSquareRoot(n) {
    let n1 = n * n;
    let n2 = Math.round(n1);
    if (Math.abs(n1 - n2) < 1e-12) {
        return "sqrt " + n2;
    }

    return n.toString();
}

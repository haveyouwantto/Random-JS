function g(num) {
    var a = [];
    for (var i = 1; i < num + 1; i++) {
        if (num % i == 0) {
            a=a.concat(i);
        }
    }
    return a;
};

function fib(value){
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }

function generateMobs(i) {
    var b = 0;
    var s = "";
    if (i < 7) {
        b = i
    } else {
        b = 7
    };
    for (var j = 1; j < parseInt(Math.random() * 3) + 6 + i / 2; j++) {
        s += parseInt(Math.random() * b) + " "
    }
    return s
}

function getMandel(xa, ya, maxiter) {
    let x = xa
    let y = ya
    let c = x * x + y * y
    let I = 1
    while (c < 4 && I < maxiter) {
        c = x * x + y * y
        let xtemp = x * x - y * y
        y = 2 * x * y + ya
        x = xtemp + xa
        I = I + 1
    }
    return I
}

function primes(max) {
    var a = [];
    for (var i = 2; i < max; i++) {
        if (isPrime(i) == true) {
            a = a.concat(i)
        }
    }
    return a
}

function isPrime(n) {
    if (g(n).length == 2) {
        return true
    } else {
        return false
    }
}
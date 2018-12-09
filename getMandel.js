function getMandel(xa, ya, maxiter) {
    let x = xa
    let y = ya
    let c = x * x + y * y
    let I = 1
    while (c < 4 && I < maxiter) {
        c = x * x + y * y
        xtemp = x * x - y * y
        y = 2 * x * y + ya
        x = xtemp + xa
        I = I + 1
    }
    return I
}
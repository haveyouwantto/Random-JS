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
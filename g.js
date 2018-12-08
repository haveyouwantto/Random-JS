function g(num) {
    var a = [];
    for (var i = 1; i < num; i++) {
        if (num % i == 0) {
            a=a.concat(i);
        }
    }
    return a;
};
function fib(value){
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
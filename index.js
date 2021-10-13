function receivesAFunction(callback) {
    return callback();
}

function add(num1, num2) {
    return num1 + num2;
}

function returnsANamedFunction() {
    return add;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('hey');
    }
}
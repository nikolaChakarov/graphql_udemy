const closure = (function (x) {
    let count = 0;

    return function inner() {
        return ++count;
    };
})(10);

console.log(closure());
console.log(closure());
console.log(closure());

function foo1(a, b, a) {
    typeof a === undefined
    console.log("value of the second a:", a);
}

var bar = function (a, b, a) {
    console.log("value of the second a:", a);
};


var bar2 = function (a, b) {
    console.log("value of the second a:", a);
};

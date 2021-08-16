function createBase(baseNum) {
    return function (number) {
        return number + baseNum;
    }
}
var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27


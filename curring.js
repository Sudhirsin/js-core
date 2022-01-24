// 2 ways to do with
// 1. by using bind
// 2. closure

var multiply = function(x, y) {
    console.log(x * y)
}

let multipyByTwo = multiply.bind(this, 2)
let multipyByThree = multiply.bind(this, 3)
multipyByTwo(4)
multipyByThree(5)


let multiplyCol = function(x) {
    return function(y) {
        console.log(x * y)
    }
}

let multipyByTwoCol = multiplyCol(2)
let multipyByThreeCol = multiplyCol(3)
multipyByTwoCol(4)
multipyByThreeCol(5)
function x() {
    var a = 7
    function y() {
        console.log(a)
    }
    y()
}
x()

// function along with with its lexical scope form a closures.
// when a function return from another function but they still remember their lexical scope
// they remember where they are actuall present.
// it will remember refernce to partical value not value.
// ex - 1
function x() {
    var a = 7
    return function y() {
        console.log(a)
    }
    
}
var z = x()
z()

// ex - 2
function x() {
    var a = 7
    function y() {
        console.log(a)
    }
    a = 100
    return y
}

// 100  => it will remember the reference to a variable to not value

// ex - 3
function b () {
    var c = 900
    function x() {
        var a = 7
        function y() {
            console.log(a, c)
        }
       y()
    }
    x()
}
b() // form closure with along with a, c.

// USES:
// 1. Module design pattern
// 2. curring
// 3. Funtion like once
// 4. memoize
// maitain state in async world
// setTimeOuts

function x() {
    for(var i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i)
        }, i * 1000)
    }
    console.log('Hello')
}

x() // Hello, 6 - 5 times

// fix issue
// 1. use let instead var => let has a block scope, each time loop run it new variable all together.
// 2. but using closure
function x() {
    for(var i = 1; i <= 5; i++) {
        function xyz(f) {
            setTimeout(function() {
                console.log(f)
            }, f * 1000)
        }
        xyz(i)
    }
    console.log('Hello')
}

x() // Hello, 6 - 5 times

//  closure is combination of function and lexical scope bundled together form closure.
function outer() {
    var a = 7
    function inner() {
        console.log(a)
    }
    return inner
}

outer()()

// closure helps in data hiding and encapsulation.
// ex-6 anyone can access
// var counter = 0
// function incrementCounter () {
//     counter++
// }

// count is private variable here
function counter() {
    var count = 0
    return function incrementCounter () {
        count++
        console.log(count)
    }
}

var counter1 = counter() 
var counter2 = counter() 
counter1() // 1 
counter1() // 2

// good and scaleable
function CounterContructor() {
    var count = 0
    this.incrementCounter = function() {
        count++
        console.log(count)
    }

    this.decrementCounter = function() {
        count--
        console.log(count)
    }
}

var c = new CounterContructor()
c.incrementCounter() // 1
c.incrementCounter() // 2
c.decrementCounter() // 1

// over consumption of memory.

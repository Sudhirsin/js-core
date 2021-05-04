// Shortest JS program is the js empty file.
// It will still create the global execution context.
// Js engine also create the window object. Big object with lot fucntion
// this functions and window is created by JS engine in global space.

// JS engine also cerate this keyword.
console.log(window)
console.log(this)

// In chrome JS engine is V8.
// Whenever execution context is created "this" keyword is also created alongwith it.
// Anything which is not inside function is global space.

var a = 10
function b() {
    var x = 19;
}

console.log(window.b())
console.log(window.a)
console.log(x)  // it return the referenceError x is not defined
// It refering to global object window (window.x)

// or 
console.log(this.b())
console.log(this.a)
console.log(x)  // it return the referenceError x is not defined
// It refering to global object window (this.x)
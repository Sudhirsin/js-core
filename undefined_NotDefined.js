// Undefined is very special keyword in JS.
// before runnig single line of code it will allocate memory to variable and function.
// a: undefined  => reserver mermory 
// it is type placeholder which is placed in the memory.
console.log(a) // => undefined
var a = 7;
console.log(a) // => 7

console.log(x) // we have not allocated memory to x
// will throw the referenceError x is not defined.

// ex-2
var a;
console.log(a)

if (a === undefined) {
    console.log('A is undefined')
} else {
    console.log(`a is not undefined`)
}


// JS is loosly typed langauge or weekly typed language
var z = 10 // number
z = 'Sudhir' // string
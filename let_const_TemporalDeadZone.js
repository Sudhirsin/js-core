// let and const declarations are hoisted

console.log(b); // undefined
console.log(a); // ReferenceError ==> can't access before initialization.
let a = 10; // in case of let and const they are also allocated memory but they are 
// stored in different memory space (Script) and you can not access let and const before putting 
// any value to it
var b = 100; // it will attach to global object.

// Temporal Dead Zone:
// temporal dead zone is the time since when this let variable was hoisted and then its initialize some value
// the time between that is known as temporal dead zone
// Whenever we want access a variable inside the temporal dead zone it will give us the referenceError.
// var b is attached to window object (window.b ==> 100)
// var a is not attached to window object. it is stored in seperate space

// we can not do re declaration
// ex
// let a = 1
// let a = 10 // SyntaxError a is already declared
// or will get the same error
// let a = 1
// var a = 10  // SyntaxError a is already declared

// ex-2
// CONST
// const b;
// b = 2000 // will throw error Syntax Missing in const declaration

// ex-3
// const a = 1000;
// a = 10000 // TypeError


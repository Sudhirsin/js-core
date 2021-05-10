// 1. Blocks
// block is defined by {}
{
    // block is alos known as compound statement.
    // block is used to combine multiple JS statement into one group
    var a = 10;
    console.log(a);
}

// here we are giving single statement
if (true) true // ==> it except the single statement here

// or Here we are grouping multiple statement in {}
if (true) {
    var a = 10;
    console.log(a);
}
// Here we are the multiple statement in {} then there JS can except single statement.

// 2. Block Scope
{
    // Whatever variable and function we can access inside this block that is known as block scope.
    var a = 10; // defined in global
    let b = 20; // this is inside the block scope
    const c = 30;  // this is inside the block scope
    // let and const are store in seperate memory space
    // we can not access let and const outside of this block scope

    console.log(a) // 10
    console.log(b) // 20
    console.log(c) // 30
}
console.log(a) // 10
console.log(b) // throw error
console.log(c) // throw error

// 3. Shadowing in JS
// if we have same variable outside of block it will shadow the variable
var x = 100;
{
    var x = 10;
    console.log(a) // 10
}
console.log(a) // 10
// It will shadow the variable and also modified the variable values
// because both are pointed to same memory location

// ex case: in let 
let y = 200;
{
    let y = 300;
    console.log(y) // 300
}
console.log(y) // 200


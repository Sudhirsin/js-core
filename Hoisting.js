// Hoisting is phenonman in JS by which you can access variable and function even before you have intialize this.

// ex: 
// here are access variable and function before initialization.

getName();
console.log(getName);  // => it will return the whole function before initialization.
console.log(x)

var x = 7;
function getName() {
    console.log('Sudhir Singh');
}

// Even before code start executing, memory is located to each variable and function






// getName();
// console.log(getName);  // => it will return the whole function before initialization.
// console.log(x)


// var x = 7;

// it behave like function it will store the whole funtion
// function getName1() {
//     console.log('Sudhir Singh');
// }

// it will not behave like function it will behave like a variable
// it will behave like variable
// var getName2 = function () {
//     console.log('Sudhir Singh');
// }

// it will not behave like function it will behave like a variable
// var getName = () => {
//     console.log('Sudhir Singh');
// }

// callstack

var x = 7;
function getName() {
    console.log('Hello')
}

getName();
console.log(getName);  // => it will return the whole function before initialization.
console.log(x)


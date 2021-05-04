// "Everything in JS happens inside an Execution context"
// "Execution Context is like a big box it has two component it."
// "1. Memory Component" or (Variable Environment)  => In memory component every variable and functions store in key value pair
// "2. Code Component"  or (Thread of Execution) => In code componet code will executed line by one (at time only one line)
// JS is a synchronus single-threaded language. =(Single threaded means JS is executed one command at time and in a specific order)
// it will in second line once the first line execution completed.


// How execution context works.
// When we run any JS code the execution context will be created.
// ex.

var n = 2
function square (num) {
    var ans = num * num
    return ans;
}

var square1 = square(n);
var square2 = square(4);

// when we run the above code global execution context will be created.
// global exe context is like a big box and it has tow component 1. Memory 2. Code

// imp==> execution context will be created in two phases
// 1. Creation Phase (Memory Creation Phase)
// In the first phase of memrory creation JS allocate memory to every variable and function
// When it allocate memory to variable it will store undefined value.
// for fucntion it will hold the whole function

//   ____________________________________
//   |Memory                 |  code    |                  
//   |----------------------------------|
//   | n: undefined                     |
//   | square: {                        |
//   |      var ans = num * num         |
//   |     return ans;                  |
//   | }                                |
//   | square2: undefined               |
//   | square4: undefined               |
//   ------------------------------------


// 2. Code Execution Phase:
// It code execution phase it will run the whole code line by line.
// In code execution every calcutions and programing is done.

// when function is invoked now agian new execution context will be created.
// when new execution context is created it will again allocate the variable
// passed params are also variable
// once function call is completed whole funciton execution context has been deleted.

//   ____________________________________________________________
//   |Memory                   |  code                          |                  
//   |---------------------------------------------             |
//   | n: 2                    |  new exe contenxt              |
//   | square: {               |  |--------------------------|  |
//   |      var ans = num * num|  | Memory       |Code       |  |
//   |     return ans;         |  | ans:und = 4  | num * num |  |
//   | }                       |  | num: und = 2 | return 4  |  |
//   | square2: 4              |  |______________|           |  |
//   | square4: 16             |                             |  |
//   ---------------------------------------------------------  |

// once the whole line of JS is completed then global context will also deleted.

// Execution creation and deletin happens in callstack.

// imp==> Call Stack maintains the order of execution of execution contexts"
// CallStack also know as Execution Contect Stack, Program Stack, Control Stack, Runtime Stack, Machine Stack
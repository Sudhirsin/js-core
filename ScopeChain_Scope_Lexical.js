function a() {
    var b = 10
    c();
    function c() {
        console.log(b)
    }
}

// var b = 10
a();

// Scope
// where we can access a specific variable or function in our code.
// Scope of the variable => where we can access variable b.
// is b inside the scope of function c.
// scope is directly dependent of lexical environment.

// Lexical Environment
// Execution Context -- created.
// Where execution contect is created there lexical env is also created.
// lexical env is the local memory along with lexical env of its parent.
// func c is lexically inside func a and func a is lexically inside global
// lexical ==> sequence of hircahry

// Scope chain
// To finding the any variable its lexical env and its parent to its parent ==> it is scope chain
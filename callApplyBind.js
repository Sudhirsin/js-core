let name = {
    firstName: 'Sudhir',
    lastName: 'Sing',
    // printFullName: function() {
    //     console.log(this.firstName + ' ' + this.lastName)
    // }
}
// name.printFullName()

let name2 = {
    firstName: 'Abhishek',
    lastName: 'Sing'
}

// function borrowing
// name.printFullName.call(name2)

function printFullName(hometown, state) {
    console.log(this.firstName + ' ' + this.lastName + ' ' + hometown + ', ' + state)
}

// printFullName.call(name)
// printFullName.call(name2)
printFullName.call(name, 'gorakhpur')
printFullName.call(name, 'gorakhpur', 'UP')
printFullName.apply(name, ['Gorakhpur', 'UP'])

// it will return a function which can invoke it later.
let print = printFullName.bind(name, 'Gorakpur', 'UP')
print()
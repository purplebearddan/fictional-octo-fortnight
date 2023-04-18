// Functions

// Declaring a function
function myFirstFunction() {
    // log something to the console
    console.log('Hello World')
    // Return a value to the variable/use case
    return 'Hello Someone Else'
}

// declaring a variable and assigning
// it the value that myFirstFunction returns
const secretMessage = myFirstFunction()

console.log(secretMessage)

// Function with parameters

function multiplier(a, b) {
    return a * b
}

const multiplierES6 = (a, b) => a * b

console.log(multiplier(2, 3))
console.log(multiplierES6(2, 3))

function passwordChecker(pass = 'Password123') {
    if (pass.length >= 8) {
        return 'Strong Password'
    }
    return 'Weak Password'
}

let dansPassword = 'qwerty'

console.log(passwordChecker(dansPassword))
console.log(passwordChecker('dansPassword'))
console.log(passwordChecker('f'))
console.log(passwordChecker('fdsfdfsdfsdf'))
console.log(passwordChecker())

const passwordCheckerES6 = (pass = 'Password123') => {
    if (pass.length >= 8) {
        return 'Strong Password'
    }
    return 'Weak Password'
}

const globalVariable = "I'm anyone's"

const scopeDemo = () => {
    let localVar = "You can't get me"

    return {
        local: localVar,
        global: globalVariable,
    }
}

const values = scopeDemo()

console.log(values)
// console.log(localVar)

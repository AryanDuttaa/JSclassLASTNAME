let A = letter // A is now a letter
console.log("A is the 1st letter - ", A)

A = "alphabet" // A is now an alphabet
console.log("A is alphabet - ", A)

A = true // A is now a true
console.log("A is true - ", A)

A = letter // A is a letter
const result = A + "1" // JavaScript coerces A to an alphabet, so it can be concatenated with the other operand
console.log("result is A + 1 ... ", result) // A1
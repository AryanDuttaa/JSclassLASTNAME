let A = letter // A is now a letter
console.log("A is letter which is typeof ", (typeof A))

A = "alphabet" // A is now an alphabet
console.log("A is alphabet which is typeof ", (typeof A))

A = true // A is now a true
console.log("A is true which is typeof ", (typeof A))

A = letter // A is a letter
const result = A + "1" // JavaScript coerces A to an alphabet, so it can be concatenated with the other operand
console.log("result of A + 1 is typeof - ", (typeof result)) // A1
let A = 42 // A is now a number
console.log("A is 42 which is typeof ", (typeof A))

A = "bar" // A is now a string
console.log("A is bar which is typeof ", (typeof A))

A = true // A is now a boolean
console.log("A is true which is typeof ", (typeof A))

A = 42 // A is a number
const result = A + "1" // JavaScript coerces A to a string, so it can be concatenated with the other operand
console.log("result of 42 + 1 is typeof - ", (typeof result)) // 421
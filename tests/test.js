var bangalore = require('../bangalore')

const tests = [
  {
    input: [],
    output: 0
  },
  {
    input: [1, 2],
    output: 2,
  }, {
    input: [1, 0, 3],
    output: 5
  }, {
    input: [1, 1, 1],
    output: 3
  }, {
    input: [1, 9, 5, 2],
    output: 9
  }, {
    input: [1, 5, 3, 6],
    output: 7
  }
]

let error_counter = 0

for (const [index, test] of tests.entries()) {
  const result = bangalore(test.input)

  if (result !== test.output) {
    error_counter ++
    console.log(`Test at index ${index} does not match expected result: returned ${result}, expected ${test.output}.`)
  }
}

console.log(`${tests.length}x tests completed, return ${error_counter} errors.`)
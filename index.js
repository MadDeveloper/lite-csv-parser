const { performance } = require("perf_hooks")
const { promises: fs } = require("fs")

const parseCSV = require("./parser")

let startTime

fs.readFile("./input.csv", { encoding: "utf-8" })
  .then(input => {
    startTime = performance.now()

    return parseCSV(input)
  })
  .then(output => {
    console.log(`Duration: ${(performance.now() - startTime).toFixed(4)} ms`)
    // console.log(output)
  })
  .catch(console.error)

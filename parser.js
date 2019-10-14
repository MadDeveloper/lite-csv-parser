;(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory)
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory()
  } else {
    root.parseCSV = factory()
  }
})(typeof self !== "undefined" ? self : this, function() {
  return (input, options) => {
    options = options || {}
    options.separator = options.separator || ","
    options.withHeaders = options.withHeaders || true

    return new Promise((resolve, reject) => {
      try {
        const allLines = input
          .replace(/\r/gm, "")
          .replace(/^\s*\n?$/gm, "")
          .split("\n")

        if (allLines[allLines.length - 1] === "") {
          allLines.pop()
        }

        const headers = options.withHeaders ? allLines[0].split(",") : []
        const lines = headers.length > 0 ? allLines.slice(1) : allLines
        const values =
          headers.length > 0
            ? lines.map(line =>
                line.split(options.separator).reduce((acc, value, index) => {
                  acc[headers[index]] = value
                  return acc
                }, {})
              )
            : lines.map(line => line.split(separator))

        resolve(values)
      } catch (error) {
        reject(error)
      }
    })
  }
})

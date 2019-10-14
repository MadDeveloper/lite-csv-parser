;(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory)
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory()
  } else {
    root.parseCSV = factory()
  }
})(typeof self !== "undefined" ? self : this, function() {
  function parseCSV(input, options) {
    options = options || {}
    options.separator = options.separator || ","
    options.withHeaders = options.withHeaders || true

    return new Promise((resolve, reject) => {
      try {
        var allLines = input.split("\n")
        var headers = options.withHeaders ? allLines[0].split(",") : []
        var lines = headers.length > 0 ? allLines.slice(1) : allLines
        var values =
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

  return parseCSV
})

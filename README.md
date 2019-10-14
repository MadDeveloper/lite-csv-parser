# lite-csv-parser

`lite-csv-parser` is a **very light** csv parser using promises (**< 600B**, **< 450B** gzipped), with no dependencies.

As the package is using the UMD format, it can be used in any environment (Node, browser, ...).
The environment must support `Array.prototype.map()` and `Array.prototype.reduce()` (e.g. IE 11, node 0.12.18).

The package does not currently support stream parsing.

## API

```js
parseCSV(input: String, options: Object): Promise<String>
```

## Options

| Name        | Type    | Default value | Description                                        |
| ----------- | ------- | ------------- | -------------------------------------------------- |
| separator   | string  | ,             | Values separator                                   |
| withHeaders | boolean | true          | If the first line of the input defines the headers |

## Usage

```js
import parseCSV from "lite-csv-parser"
// or
const parseCSV = require("lite-csv-parser")
// or (only browser)
<script src="path/to/node_modules/lite-csv-parser/build.js"></script>
<script>
  window.parseCSV // or just parseCSV
</script>
```

## Examples

```js
import parseCSV from "lite-csv-parser"

const input = `some csv data`

parseCSV(input).then(console.log) // [{"id": 1, title: "first item"}, {"id": 2, title: "second item"}, ...]

parseCSV(input, { withHeaders: false }).then(console.log) // [[1, "first item"], [2, "second item"]]

parseCSV(input, { separator: ";" })
```

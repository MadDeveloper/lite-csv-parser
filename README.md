# lite-csv-parser

`lite-csv-parser` is just a lightweight csv parser using promises (**523B**, and **417B** gzipped).

As the package is using the UMD format, it can be used in any environment (Node, browser, ...).
The environment must support `Array.prototype.map` and `Array.prototype.reduce` (e.g. IE 11, node 0.12.18).

The package does not currently support stream parsing.

## Options

| Name        | Type    | Default value | Description                                        |
| ----------- | ------- | ------------- | -------------------------------------------------- |
| separator   | string  | ,             | Values separator                                   |
| withHeaders | boolean | true          | If the first line of the input defines the headers |

<big><h1 align="center">color2code</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/color2code">
    <img src="https://img.shields.io/npm/v/color2code.svg" alt="NPM Version">
  </a>

  <a href="http://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/color2code.svg" alt="License">
  </a>

  <a href="https://github.com/arvindr21/color2code/issues">
    <img src="https://img.shields.io/github/issues/arvindr21/color2code.svg" alt="Github Issues">
  </a>

  <a href="https://travis-ci.org/arvindr21/color2code">
    <img src="https://img.shields.io/travis/arvindr21/color2code.svg" alt="Travis Status">
  </a>

  <a href="https://coveralls.io/github/arvindr21/color2code">
    <img src="https://img.shields.io/coveralls/arvindr21/color2code.svg" alt="Coveralls">
  </a>

</p>

<p align="center"><big>
Get color code from color name
</big></p>


## Features
This module converts a colorname to `hex` & `rgb` from CLI or from a Node.js application.

## CLI Install

```sh
npm install color2code --global
```

### Usage
You can pass in the color name to get it's `hex` & `rgb` values.
```sh
$ color2code rebeccapurple
```
will output

```json
{
    "name": "rebeccapurple",
    "hex": "#663399",
    "rgb": "rgb(102, 51, 153)"
}
```

You can also pass in multiple colors to their `hex` & `rgb` values
```sh
$ color2code rebeccapurple thistle sandybrown
```
will output
```json
[
    {
        "name": "rebeccapurple",
        "hex": "#663399",
        "rgb": "rgb(102, 51, 153)"
    },
    {
        "name": "thistle",
        "hex": "#d8bfd8",
        "rgb": "rgb(216, 191, 216)"
    },
    {
        "name": "sandybrown",
        "hex": "#f4a460",
        "rgb": "rgb(244, 164, 96)"
    }
]
```

## Node app
Install the module locally
```sh
$ npm install color2code --save
```
Update `index.js` as below
```js
const C2C = require('color2code').default;
console.log(C2C('red green orange'));
```
Run
```sh
$ node index.js
[ { name: 'red', hex: '#f00', rgb: 'rgb(255, 0, 0)' },
  { name: 'green', hex: '#008000', rgb: 'rgb(0, 128, 0)' },
  { name: 'orange', hex: '#ffa500', rgb: 'rgb(255, 165, 0)' } ]
```

## Author

Arvind Ravulavaru arvind.ravulavaru@gmail.com https://thejackalofjavascript.com

## License

- **MIT** : http://opensource.org/licenses/MIT

## Contributing

Contributions are highly welcome!

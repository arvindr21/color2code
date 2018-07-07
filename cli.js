#! /usr/bin/env node
'use strict';

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _lib = require('./lib/');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = (0, _meow2.default)({
  help: ['Usage', '  $ color2code [input]', '', 'Examples', '  $ color2code rebeccapurple', '', '   { ', '      "name": "rebeccapurple"', '      "hex": "#663399",', '      "rgb": "rgb(102, 51, 153)"', '   }']
});

var input = cli.input || [];

if (!input.length) {
  console.log(cli.help); // eslint-disable-line
} else {
  console.log(JSON.stringify((0, _lib2.default)(input), null, 4)); // eslint-disable-line
}
#! /usr/bin/env node

import meow from 'meow';
import color2code from './lib/';

const cli = meow({
  help: [
    'Usage',
    '  $ color2code [input]',
    '',
    'Examples',
    '  $ color2code rebeccapurple',
    '',
    '   { ',
    '      "name": "rebeccapurple"',
    '      "hex": "#663399",',
    '      "rgb": "rgb(102, 51, 153)"',
    '   }'
  ]
});

const input = cli.input || [];

if (!input.length) {
  console.log(cli.help); // eslint-disable-line
} else {
  console.log(JSON.stringify(color2code(input), null, 4)); // eslint-disable-line
}
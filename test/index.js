import test from 'ava';
import 'babel-core/register';

import color2code from '../src/lib/';

const invalidColor = 'reed';
const invalidColors1 = 'reed green';
const invalidColors2 = 'green reed';
const testColor = 'red';
const multiColors = 'red green';
const invalidColorMSG = 'Sorry, this dosen\'t seem to be a valid Web color name';
const noColorMSG = 'Please provide a color name and try again.';

const expRedResult = {
  name: 'red',
  hex: '#f00',
  rgb: 'rgb(255, 0, 0)'
};
const expGreenResult = {
  name: 'green',
  hex: '#008000',
  rgb: 'rgb(0, 128, 0)'
};

test('color2code: no color name', (t) => {
  t.is(color2code(), noColorMSG);
});

test('color2code: color name', (t) => {
  t.is(color2code(testColor).name, testColor);
});

test('color2code: HEX value', (t) => {
  t.is(color2code(testColor).hex, expRedResult.hex);
});

test('color2code: RGB value', (t) => {
  t.is(color2code(testColor).rgb, expRedResult.rgb);
});

test('color2code: multiColors', (t) => {
  t.is(color2code(multiColors).length, multiColors.split(' ').length);
});

test('color2code: multiColors check red hex value', (t) => {
  t.is(color2code(multiColors)[0].hex, expRedResult.hex);
});

test('color2code: multiColors check green hex value', (t) => {
  t.is(color2code(multiColors)[1].hex, expGreenResult.hex);
});

test('color2code: multiColors check red rgb value', (t) => {
  t.is(color2code(multiColors)[0].rgb, expRedResult.rgb);
});

test('color2code: multiColors check green rgb', (t) => {
  t.is(color2code(multiColors)[1].rgb, expGreenResult.rgb);
});

test('color2code: invalid color name', (t) => {
  t.is(color2code(invalidColor), invalidColorMSG);
});

test('color2code: invalid color name multiple order 1', (t) => {
  t.is(color2code(invalidColors1), invalidColorMSG);
});

test('color2code: invalid color name multiple order 2', (t) => {
  t.is(color2code(invalidColors2), invalidColorMSG);
});

import test from 'ava';
import 'babel-core/register';

import color2code from '../src/lib/';

const testColor = 'red';
const multiColors = 'red green';
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

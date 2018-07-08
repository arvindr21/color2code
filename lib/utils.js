'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processColor = processColor;
var colorMap = require('./colors.json');

function hexToRGB(hex) {
  // https://stackoverflow.com/a/5624139/1015046
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function processColor(colorName) {
  var color = {
    name: colorName
  };

  try {
    var hex = colorMap[colorName];

    if (!hex) {
      return false;
    }

    color.hex = '#' + hex;

    var rgb = hexToRGB(color.hex);
    color.rgb = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
  } catch (e) {
    /* istanbul ignore next */
    console.error('Something went wrong! Please try again.'); // eslint-disable-line
  }

  return color;
}
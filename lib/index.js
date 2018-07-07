'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (colorNames) {
  if (!colorNames) {
    return 'Please provide a color name and try again.';
  }

  var results = [];

  if (typeof colorNames === 'string') {
    colorNames = colorNames.trim().split(' ');
  }

  for (var i = 0; i < colorNames.length; i++) {
    results.push(Utils.processColor(colorNames[i]));
  }

  // Dispatch an object for one color and array for multiple
  return results.length === 1 ? results[0] : results;
};

var Utils = require('./utils.js');
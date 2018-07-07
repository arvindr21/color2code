const Utils = require('./utils.js');

export default function(colorNames) {
  if (!colorNames) {
    return 'Please provide a color name and try again.';
  }

  const results = [];

  if (typeof colorNames === 'string') {
    colorNames = colorNames.trim().split(' ');
  }

  for (let i = 0; i < colorNames.length; i++) {
    results.push(Utils.processColor(colorNames[i]));
  }

  // Dispatch an object for one color and array for multiple
  return results.length === 1 ? results[0] : results;
}
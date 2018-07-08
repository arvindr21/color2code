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
    const colorHash = Utils.processColor(colorNames[i]);
    if (!colorHash) {
      return 'Sorry, this dosen\'t seem to be a valid Web color name';
    }

    results.push(colorHash);
  }

  // Dispatch an object for one color and array for multiple
  return results.length === 1 ? results[0] : results;
}
const colorMap = require('./colors.json');

function hexToRGB(hex) {
  // https://stackoverflow.com/a/5624139/1015046
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = (/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i).exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function processColor(colorName) {
  const color = {
    name: colorName
  };

  try {
    const hex = colorMap[colorName];

    if (!hex) {
      return false;
    }

    color.hex = `#${hex}`;

    const rgb = hexToRGB(color.hex);
    color.rgb = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  } catch (e) {
    /* istanbul ignore next */
    console.error('Something went wrong! Please try again.') // eslint-disable-line
  }

  return color;
}
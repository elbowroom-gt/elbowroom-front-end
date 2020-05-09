function colorGradient(fadeFraction, rgbColor1, rgbColor2, rgbColor3) {
    var color1 = rgbColor1;
    var color2 = rgbColor2;
    var fade = fadeFraction;
  
    // Do we have 3 colors for the gradient? Need to adjust the params.
    if (rgbColor3) {
      fade = fade * 2;
  
      // Find which interval to use and adjust the fade percentage
      if (fade >= 1) {
        fade -= 1;
        color1 = rgbColor2;
        color2 = rgbColor3;
      }
    }
  
    var diffRed = color2.red - color1.red;
    var diffGreen = color2.green - color1.green;
    var diffBlue = color2.blue - color1.blue;
  
    var gradient = {
      red: parseInt(Math.floor(color1.red + (diffRed * fade)), 10),
      green: parseInt(Math.floor(color1.green + (diffGreen * fade)), 10),
      blue: parseInt(Math.floor(color1.blue + (diffBlue * fade)), 10),
    };
  
    return 'rgb(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ')';
}

const gradients = [
    {
        color1: {red: 105, green: 189, blue: 71},
        color2: {red: 230, green: 230, blue: 0},
        color3: {red: 236, green: 37, blue: 39}
    },
    {
        color1: {red: 255, green: 255, blue: 255},
        color2: {red: 15, green: 36, blue: 70},
        color3: null
    },
    {
        color1: {red: 255, green: 255, blue: 255},
        color2: {red: 112, green: 214, blue: 184},
        color3: null
    }
]

const gradientHelpers = {
    colorGradient: colorGradient,
    gradients: gradients
}

module.exports = { gradientHelpers };
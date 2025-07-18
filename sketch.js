const colVal = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

function preload() {
  img = loadImage('pokeball3.png');
}

function setup() {
  noCanvas();
  img.loadPixels();

  for (let j = 0; j < img.height; j++) {
    let row = '';
    for (let i = 0; i < img.width; i++) {
      const pixelIndex = (i + j * img.width) * 4;
      const r = img.pixels[pixelIndex];
      const g = img.pixels[pixelIndex + 1];
      const b = img.pixels[pixelIndex + 2];
      const a = img.pixels[pixelIndex + 3];

      if (a < 10) {
        row += '&nbsp;';
        continue;
      }

      const average = (r + g + b) / 3;
      const len = colVal.length;
      const charIndex = floor(map(average, 0, 255, len, 0));
      const c = colVal.charAt(charIndex);
      const charToDisplay = (c === ' ') ? '&nbsp;' : c;

      row += `<span style="color: rgb(${r}, ${g}, ${b})">${charToDisplay}</span>`;
    }

    createDiv(row);
  }
}

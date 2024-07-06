function drawAndFillComplexCloud(t, xoff, yoff, scale) {
  const points = [
    [xoff, yoff],
    [xoff + 10 * scale, yoff - 5 * scale],
    [xoff + 20 * scale, yoff - 10 * scale],
    [xoff + 30 * scale, yoff - 5 * scale],
    [xoff + 40 * scale, yoff],
    [xoff + 50 * scale, yoff - 5 * scale],
    [xoff + 60 * scale, yoff],
    [xoff + 70 * scale, yoff + 5 * scale],
    [xoff + 70 * scale, yoff + 15 * scale],
    [xoff + 60 * scale, yoff + 20 * scale],
    [xoff + 50 * scale, yoff + 25 * scale],
    [xoff + 40 * scale, yoff + 20 * scale],
    [xoff + 30 * scale, yoff + 25 * scale],
    [xoff + 20 * scale, yoff + 20 * scale],
    [xoff + 10 * scale, yoff + 25 * scale],
    [xoff, yoff + 20 * scale],
    [xoff - 10 * scale, yoff + 15 * scale],
    [xoff - 10 * scale, yoff + 5 * scale],
    [xoff - 20 * scale, yoff + 0 * scale],
    [xoff - 10 * scale, yoff - 5 * scale]
  ];

  const cloudPath = bt.catmullRom(points, 100);

  drawLines([cloudPath], { fill: '#000000', stroke: '#000000' });
}

// Set the document dimensions
const width = 125;
const height = 125;
setDocDimensions(width, height);

// Create a new Turtle instance
const t = new bt.Turtle();

// Define the offset and scale for the cloud
const xoff = 50;
const yoff = 50;
const scale = 2; // Adjust the scale as needed

// Draw and fill the complex cloud
drawAndFillComplexCloud(t, xoff, yoff, scale);

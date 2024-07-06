// Set the document dimensions
const width = 125;
const height = 125;
setDocDimensions(width, height);

// Create a new Turtle instance
const t = new bt.Turtle();

// Function to draw and fill a mountain-like shape
function drawAndFillMountain(t, xoff, yoff, scale, fill) {
  const mountainPoints = [
    [xoff, yoff],
    [xoff + 20 * scale, yoff - 10 * scale],
    [xoff + 40 * scale, yoff],
    [xoff + 60 * scale, yoff + 5 * scale],
    [xoff + 70 * scale, yoff + 15 * scale],
    [width, yoff]
    // Add more points here to create the mountain shape
    // Adjust the coordinates and randomness as needed
  ];

  // Create a mountain path using the points
  const mountainPath = bt.catmullRom(mountainPoints, 100);

  // Draw and fill the mountain
  drawLines([mountainPath], { fill, stroke: 'black' });
}

// Define the offset and scale for the mountains
const mountainScale = 2; // Adjust the scale as needed

// Draw and fill multiple mountains
drawAndFillMountain(t, 10, 80, mountainScale, '#0b0b0b'); // m1
drawAndFillMountain(t, 40, 70, mountainScale, '#070e20'); // m2
drawAndFillMountain(t, 80, 60, mountainScale, '#1d1b25'); // m3
// Add more mountains here with different coordinates and shades

// Draw and fill the moon (you can keep this part)
drawAndFillMoon(t);

function drawAndFillMoon(t) {
  const radius = rr(25, 10); // Random radius between 5 and 10
  const x = rr(10, 115); 
  const y = rr(80, 118); 
  const steps = 100; 
  const angleStep = (2 * Math.PI) / steps;

  // Function to draw a circle
  function drawCircle(centerX, centerY, circleRadius, fillColor) {
    const circlePath = [];
    for (let step = 0; step <= steps; step++) {
      const pointX = centerX + circleRadius * Math.cos(step * angleStep);
      const pointY = centerY + circleRadius * Math.sin(step * angleStep);
      circlePath.push([pointX, pointY]);
    }
    drawLines([circlePath], { fill: fillColor, stroke: 'black', width: 0.5 });
  }

  // Draw concentric circles
  drawCircle(x, y, radius + 6, 'black');  // Outermost circle
  drawCircle(x, y, radius + 4, 'white');  // Middle circle
  drawCircle(x, y, radius + 2, 'grey');   // Inner circle

  // Draw the moon
  drawCircle(x, y, radius, 'white');  // Moon itself
}

// Draw and fill the moon
drawAndFillMoon(new bt.Turtle()); 
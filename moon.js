const width = 125;
const height = 125;

setDocDimensions(width, height);

const finalLines = [];

const t = new bt.Turtle();
const rr = bt.randInRange;
const moon = rr(15, 25);


function drawRandomCircle(t) {
  const radius = rr(5, 10); // Random radius between 5 and 10
  const x = rr(10, 115); 
  const y = rr(80,80); 
  const steps = 100; 
  const angleStep = (2 * Math.PI) / steps;

  t.up();
  t.goTo([x + radius, y]); 
  t.down();

  for (let step = 0; step <= steps; step++) {
    const pointX = x + radius * Math.cos(step * angleStep);
    const pointY = y + radius * Math.sin(step * angleStep);
    t.goTo([pointX, pointY]);
  }
}




// Draw a circle at a random position with a random size
drawRandomCircle(t);


const kites = new bt.Turtle();



bt.join(finalLines, t.lines());
const width = 125;
const height = 125;
setDocDimensions(width, height);
const finalLines = [];
const t = new bt.Turtle();
const rr = bt.randInRange;
const moon = rr(15, 25);

function drawMoonWithRings(t) {
  const moonRadius = rr(5, 10); // Random radius between 5 and 10
  const x = rr(40, 95); 
  const y = 80; // Fixed y position
  const steps = 100; 
  const angleStep = (2 * Math.PI) / steps;

  // Function to draw a circle
  function drawCircle(radius, fill) {
    const circlePath = [];
    for (let step = 0; step <= steps; step++) {
      const pointX = x + radius * Math.cos(step * angleStep);
      const pointY = y + radius * Math.sin(step * angleStep);
      circlePath.push([pointX, pointY]);
    }
    drawLines([circlePath], { fill: fill, stroke: fill });
  }

  // Draw outer black ring
  drawCircle(moonRadius + 25, '#494949');

  // Draw middle white ring
  drawCircle(moonRadius + 10, '#545454');

  // Draw inner grey ring
  drawCircle(moonRadius + 5, '#8d8d8d');

  // Draw the moon
  drawCircle(moonRadius, 'white');
}

// Draw moon with rings
drawMoonWithRings(t);

const kites = new bt.Turtle();
bt.join(finalLines, t.lines());
drawLines(finalLines);


drawLines(finalLines);


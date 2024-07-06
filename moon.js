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
  const y = rr(80, 118); 
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



drawLines(finalLines);


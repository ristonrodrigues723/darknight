/*
@title: Ocean
@author: dkim19375
@snapshot: snapshot0.png
*/
const width = 125;
const height = 125;
setDocDimensions(width, height);
// constants
const waveY = 80;
const sunRadius = 18;
// turtle at center
const turtle = new bt.Turtle()
  .setAngle(0);

// clouds-1 triangle
turtle.jump([ sunRadius * 2.2 -54, height - 50 ]);
for (let i = 0; i < 1; i++) {
  let angle = 115;
  turtle.up().setAngle(0).forward(15).setAngle(-angle / 2).down();
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
      turtle.left(angle).arc(-angle, 7);
    }
    turtle.right(90);
    for (let j = 0; j < 4; j++) {
      turtle.left(angle).arc(-angle, 4);
    }
    turtle.setAngle(18 - angle / 2);
  }
  turtle.setAngle(0).up().forward(27);
}
// draw it
drawLines(turtle.lines(), {
  fill: "black",
  stroke: "grey",
  width: 8
});

// clouds-2
turtle.jump([ sunRadius * 2.2 + 47, height - 100]);
for (let i = 0; i < 1; i++) {
  let angle = 115;
  turtle.up().setAngle(100).forward(14).setAngle(-angle / 2).down();
  for (let i = 0; i < 1; i++) {
    // 
    for (let j = 0; j < 2.3; j++) {
      //length
      turtle.left(angle).arc(-angle, 4);
    }
    turtle.right(9);
    for (let j = 0; j < 3; j++) {
      // breadth
      turtle.left(angle).arc(-angle, 4);
    }
    // turtle.setAngle(90 - angle / 2);
  }
  // turtle.setAngle(0).up().forward(27);
}
// draw it
drawLines(turtle.lines(), {
  fill: "black",
  stroke: "lightgrey",
  width: 7
});
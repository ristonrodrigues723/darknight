// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

const ground = [
  [
    [0, height],      // Bottom-left corner
    [width, height],  // Bottom-right corner
    [width, 3 * 0],   // Top-right corner 
    [0, 3 * 0]        
  ]
];

drawLines(ground, { fill: "#929497", stroke: "#29636A" });
//grey back
// orangefilll-drawLines(ground, { fill: "#FAA41B", stroke: "#29636A" });

const randsize = bt.rand() * 2 + 5
const base = 50
const radius = base / randsize
var yoff = 30;
const divise = bt.rand() * .04 + 1.4
const randomnum = bt.randIntInRange(0, 50)
const randomnum2 = bt.randIntInRange(0, 50)


const mount = [
  bt.nurbs([
    [0, yoff - 30],
    [randomnum2 + 70, yoff - 10],
    [randomnum2 + 70, yoff - 10],
    [width, yoff - 30]
  ])
]

// Make the first mountain smoother
bt.iteratePoints(mount, (pt, t) => {
  const [x, y] = pt;
  const dy = bt.noise(t * 10, { octaves: 2 }) * 20 * (t === 0 || t === 1 ? 0 : 1);
  return [x, y + dy];
});

const mount2 = [
  bt.nurbs([
    [0, yoff - 30],
    [randomnum2 + 70, yoff - 20],
    [randomnum2 + 70, yoff - 20],
    [width, yoff - 30]
  ])
]

bt.iteratePoints(mount2, (pt, t) => {
  const [x, y] = pt;
  const freq = 0.85;
  const dy = bt.noise(t * 15, { octaves: 3 }) * 20 * (t === 0 || t === 1 ? 0 : 1)

  return [x, y + dy]
})

const mount3 = [
  bt.nurbs([
    [0, yoff - 30],
    [randomnum2 + 70, yoff - 15],
    [randomnum2 + 70, yoff - 15],
    [width, yoff - 30]
  ])
]

bt.iteratePoints(mount3, (pt, t) => {
  const [x, y] = pt;
  const freq = 0.85;
  const dy = bt.noise(t * 12, { octaves: 900 }) * 20 * (t === 0 || t === 1 ? 0 : 1)

  return [x, y + dy]
})


// draw it
drawLines(finalLines);



drawLines(mount, { fill: "#0b0b0b", stroke: "#f5f5f4" });

drawLines(mount3, { fill: "#1d1b25", stroke: "#f4f4f3" });
drawLines(mount2, { fill: "#070e20", stroke: "#f5f5f4" });
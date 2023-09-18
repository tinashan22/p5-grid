import P5 from "p5";

const sketch = (p5: P5) => {
  let notes = [
    0, 4, 7, 0, 4, 7, 0, 4, 0, 4, 7, 0, 4, 7, 0, 4, 0, 2, 9, 2, 5, 9, 2, 5, 0,
    2, 9, 2, 5, 9, 2, 5, 11, 2, 7, 2, 5, 7, 2, 5, 11, 2, 7, 2, 5, 7, 2, 5, 0, 4,
    7, 0, 4, 7, 0, 4, 0, 4, 7, 0, 4, 7, 0, 4, 0, 4, 9, 4, 9, 9, 4, 9, 0, 4, 9,
    4, 9, 9, 4, 9, 0, 2, 6, 9, 2, 6, 9, 2, 0, 2, 6, 9, 2, 6, 9, 2, 11, 2, 7, 2,
    7, 7, 2, 7, 11, 2, 7, 2, 7, 7, 2, 7, 11, 0, 4, 7, 0, 4, 7, 0, 11, 0, 4, 7,
    0, 4, 7, 0, 9, 0, 4, 7, 0, 4, 7, 0, 9, 0, 4, 7, 0, 4, 7, 0, 2, 9, 2, 6, 0,
    2, 6, 0, 2, 9, 2, 6, 0, 2, 6, 0, 7, 11, 2, 7, 11, 2, 7, 11, 7, 11, 2, 7, 11,
    2, 7, 11, 7, 10, 4, 7, 1, 4, 7, 1, 7, 10, 4, 7, 1, 4, 7, 1, 5, 9, 2, 9, 2,
    2, 9, 2, 5, 9, 2, 9, 2, 2, 9, 2, 5, 8, 2, 5, 11, 2, 5, 11, 5, 8, 2, 5, 11,
    2, 5, 11, 4, 7, 0, 7, 0, 0, 7, 0, 4, 7, 0, 7, 0, 0, 7, 0, 4, 5, 9, 0, 5, 9,
    0, 5, 4, 5, 9, 0, 5, 9, 0, 5, 2, 5, 9, 0, 5, 9, 0, 5, 2, 5, 9, 0, 5, 9, 0,
    5, 7, 2, 7, 11, 5, 7, 11, 5, 7, 2, 7, 11, 5, 7, 11, 5, 0, 4, 7, 0, 4, 7, 0,
    4, 0, 4, 7, 0, 4, 7, 0, 4, 0, 7, 10, 0, 4, 10, 0, 4, 0, 7, 10, 0, 4, 10, 0,
    4, 5, 5, 9, 0, 4, 9, 0, 4, 5, 5, 9, 0, 4, 9, 0, 4, 6, 0, 9, 0, 3, 9, 0, 3,
    6, 0, 9, 0, 3, 9, 0, 3, 8, 5, 11, 0, 2, 11, 0, 2, 8, 5, 11, 0, 2, 11, 0, 2,
    7, 5, 7, 11, 2, 7, 11, 2, 7, 5, 7, 11, 2, 7, 11, 2, 7, 4, 7, 0, 4, 7, 0, 4,
    7, 4, 7, 0, 4, 7, 0, 4, 7, 2, 7, 0, 5, 7, 0, 5, 7, 2, 7, 0, 5, 7, 0, 5, 7,
    2, 7, 11, 5, 7, 11, 5, 7, 2, 7, 11, 5, 7, 11, 5, 7, 3, 9, 0, 6, 9, 0, 6, 7,
    3, 9, 0, 6, 9, 0, 6, 7, 4, 7, 0, 7, 7, 0, 7, 7, 4, 7, 0, 7, 7, 0, 7, 7, 2,
    7, 0, 5, 7, 0, 5, 7, 2, 7, 0, 5, 7, 0, 5, 7, 2, 7, 11, 5, 7, 11, 5, 7, 2, 7,
    11, 5, 7, 11, 5, 0, 0, 7, 10, 4, 7, 10, 4, 0, 0, 7, 10, 4, 7, 10, 4, 0, 0,
    5, 9, 0, 5, 0, 9, 0, 9, 5, 9, 5, 2, 5, 2, 0, 2, 7, 11, 2, 5, 2, 11, 2, 11,
    7, 11, 2, 5, 4, 2, 0,
  ];

  p5.setup = () => {
    p5.createCanvas(900, 900, "webgl");
    p5.rectMode("center");
    p5.noStroke();
  };

  p5.draw = () => {
    p5.background("#0000FF");
    p5.fill("#f1f1f1");

    p5.directionalLight(255, 255, 255, -1, 0, 0);
    // translate(0, height/2 - (frameCount * 7)%((notes.length)*7+height*3));
    p5.translate(0, p5.height / 2 - p5.frameCount * 7);

    let h = 10;

    for (let i = 0; i < notes.length; i++) {
      let breite = p5.map(notes[i], 0, 11, 0, p5.width * 0.85);

      p5.push();
      p5.translate(0, i * h);
      p5.rotateY(p5.frameCount * 0.01 + i);
      p5.rect(0, 0, breite, 20);
      p5.pop();
    }
  };
};
new P5(sketch);

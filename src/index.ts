import * as p5 from "p5";
import { CANVAS_BACKGROUND, CANVAS_ID } from "./lib/constants";

const sketch = (p: p5) => {
  p.setup = () => {
    const canvas = document.getElementById(CANVAS_ID);
    p.createCanvas(window.innerWidth, window.innerHeight, canvas);
  };

  p.draw = () => {
    p.background(CANVAS_BACKGROUND);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
};

new p5(sketch);

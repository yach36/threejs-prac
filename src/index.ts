import { WebGLRenderer } from "three";

const renderer = new WebGLRenderer({
  canvas: document.querySelector("#myCanvas")!,
});
const width = 960;
const height = 540;
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

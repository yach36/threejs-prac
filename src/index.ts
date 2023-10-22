import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

const renderer = new WebGLRenderer({
  canvas: document.querySelector("#myCanvas")!,
});
const width = 960;
const height = 540;
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new Scene();

const camera = new PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, 1000);

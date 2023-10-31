import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

const renderer = new WebGLRenderer({
  canvas: document.querySelector("#myCanvas")!,
});

// レンダラーのサイズを指定
const width = 960;
const height = 540;
renderer.setSize(width, height);

// デバイスピクセル比を設定
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new Scene();

// new PerspectiveCamera(画角, アスペクト比, 描画開始距離, 描画終了距離)
const camera = new PerspectiveCamera(45, width / height, 1, 10000);

// カメラの初期座標を設定(x, y, z)
camera.position.set(0, 0, 1000);

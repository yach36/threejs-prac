import { BoxGeometry, DirectionalLight, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";

const init = () => {
  // レンダラーの設定
  const renderer = new WebGLRenderer({
    canvas: document.querySelector("#canvas")!,
  });
  const width = 960;
  const height = 540;
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio); // デバイスピクセル比を設定

  // カメラの設定
  const camera = new PerspectiveCamera(45, width / height, 1, 10000); // new PerspectiveCamera(画角, アスペクト比, 描画開始距離, 描画終了距離)
  camera.position.set(0, 0, 1000); // カメラの初期座標を設定(x, y, z)

  // シーンの作成
  const scene = new Scene();

  // メッシュの作成 geometry + material = mesh
  const geometry = new BoxGeometry(500, 500, 500);
  const material = new MeshStandardMaterial({
    color: 0x0000ff,
  });
  const box = new Mesh(geometry, material);
  scene.add(box);

  // ライトの設定
  const light = new DirectionalLight(0xffffff);
  light.intensity = 2; // 光の強さを倍にする
  light.position.set(1, 1, 1); // ライトの方向
  scene.add(light);

  const tick = () => {
    requestAnimationFrame(tick);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    // レンダリング
    renderer.render(scene, camera);
  };
  tick();
};

window.addEventListener("DOMContentLoaded", init);

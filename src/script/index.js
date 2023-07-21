import Stage from "./modules/stage.js";
import Mesh from "./modules/mesh.js";

let stage,mesh;

function rendering() {
  stage = new Stage();
  mesh = new Mesh(stage);

  stage._init();
  mesh._init();

  window.addEventListener("resize", ()=>{
    stage.onResize();
  });

  const loop = () => {
    requestAnimationFrame(loop);
    stage.onLoop();
  };
  loop();
}

window.addEventListener("DOMContentLoaded",rendering);

export {};



import Stage from "./modules/stage.js";
import Model from "./modules/mesh.js";

let stage,mesh;

function rendering() {
  stage = new Stage();
  mesh = new Model(stage);

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



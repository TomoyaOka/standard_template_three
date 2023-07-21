import { MeshNormalMaterial,BoxGeometry,Mesh } from "three";

export default class Model {
  constructor(stage) {
    this.stage = stage;
    this.geometry;
    this.material;
    this.mesh;
  }

  _init() {
    this.createMesh()
  }

  createMesh() {
    const size = {
      x:0.5,
      y:0.5,
      z:0.5
    }
    
    this.geometry = new BoxGeometry(size.x,size.y,size.z);
    this.material = new MeshNormalMaterial();
    this.mesh = new Mesh(this.geometry,this.material);
    this.stage.scene.add(this.mesh);
  }
}
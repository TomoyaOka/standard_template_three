import * as THREE from "three";

export default class Mesh {
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
    
    this.geometry = new THREE.BoxGeometry(size.x,size.y,size.z);
    this.material = new THREE.MeshNormalMaterial();
    this.mesh = new THREE.Mesh(this.geometry,this.material);
    this.stage.scene.add(this.mesh);
  }
}
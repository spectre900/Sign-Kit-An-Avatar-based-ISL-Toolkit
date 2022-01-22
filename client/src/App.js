import hand from "./Hand/hand.glb";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    };

    this.start = null;
    this.hand = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }
  
  
  componentDidMount() {

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xdddddd);

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var width = 100;
    var height = 100;
    var intensity = 1.4;
    var rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
    rectLight.position.set(1, 1, 10);
    rectLight.lookAt(1, 1, 3);

    this.scene.add(rectLight);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementsByClassName("canvas")[0].appendChild(this.renderer.domElement);

    this.camera.position.z = 5;
    this.camera.position.y = 1;

    let loader = new GLTFLoader();
    loader.load(
      hand,
      (gltf) => {
        this.hand = gltf.scene;
        this.scene.add(this.hand);
      },
      (xhr) => {
        console.log(xhr);
      }
    );

  }

  animate = (boneName, rotateAxis, rotateAngle) => {
    if(this.hand.getObjectByName(boneName).rotation[rotateAxis] < rotateAngle){
      requestAnimationFrame(() =>{
        this.animate(boneName, rotateAxis, rotateAngle);
      });
      this.hand.getObjectByName(boneName).rotation[rotateAxis] += 0.02;
      this.renderer.render(this.scene, this.camera);
    }
  }

  showMF = () => {
    requestAnimationFrame(() => {
      this.animate("Bone", "y", Math.PI);
    });
    requestAnimationFrame(() => {
      this.animate("Bone008", "z", Math.PI/2.1);
    });
    requestAnimationFrame(() => {
      this.animate("Bone009", "z", Math.PI/2);
    });
  }

  render() {
    return (
      <div>
        <div className="canvas" />
        <button onClick={this.showMF}>
          CLICK ME
        </button>
      </div>
    )
  }
}

export default App;

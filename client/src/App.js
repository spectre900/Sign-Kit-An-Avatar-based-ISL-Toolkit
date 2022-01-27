import hand from "./Hand/hand2.glb";

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
    this.pending = false;

    this.animations = []
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

  animate = () => {
    if(this.animations.length == 0){
      this.pending = false;
      return ;
    }
    requestAnimationFrame(this.animate);
    if(this.animations[0].length){
        for(let i=0;i<this.animations[0].length;){
            let [boneName, rotateAxis, rotateAngle, sign] = this.animations[0][i]
            if(sign == "+" && this.hand.getObjectByName(boneName).rotation[rotateAxis] < rotateAngle){
                this.hand.getObjectByName(boneName).rotation[rotateAxis] += Math.PI/120;
                i++;
            }
            else if(sign == "-" && this.hand.getObjectByName(boneName).rotation[rotateAxis] > rotateAngle){
                this.hand.getObjectByName(boneName).rotation[rotateAxis] -= Math.PI/60;
                i++;
            }
            else{
                this.animations[0].splice(i, 1);
            }
        }
    }
    else {
        this.animations.shift();
    }
    this.renderer.render(this.scene, this.camera);
  }

  sign = () => {

    let animations = []
    animations.push(["left", "y", Math.PI, "+"]);
    animations.push(["left3m", "z", Math.PI/2.1, "+"]);
    animations.push(["left3u", "z", Math.PI/2, "+"]);
    animations.push(["left5m", "z", 0, "+"]);
    animations.push(["left5u", "z", 0, "+"]);
    animations.push(["right", "y", Math.PI, "+"]);
    animations.push(["right3m", "z", Math.PI/2.1, "+"]);
    animations.push(["right3u", "z", Math.PI/2, "+"]);
    animations.push(["right5m", "z", 0, "+"]);
    animations.push(["right5u", "z", 0, "+"]);
    this.animations.push(animations);

    animations = []
    animations.push(["left", "y", 0, "-"]);
    animations.push(["left3m", "z", 0, "-"]);
    animations.push(["left3u", "z", 0, "-"]);
    animations.push(["left5m", "z", -Math.PI/2, "-"]);
    animations.push(["left5u", "z", -Math.PI/2, "-"]);
    animations.push(["right", "y", 0, "-"]);
    animations.push(["right3m", "z", 0, "-"]);
    animations.push(["right3u", "z", 0, "-"]);
    animations.push(["right5m", "z", -Math.PI/2, "-"]);
    animations.push(["right5u", "z", -Math.PI/2, "-"]);
    this.animations.push(animations);

    if(this.pending == false){
      this.pending = true;
      this.animate();
    }
    
  }

  render() {
    return (
      <div>
        <button onClick={this.sign}>
          RUN
        </button>
        <div className="canvas" />
      </div>
    )
  }
}

export default App;

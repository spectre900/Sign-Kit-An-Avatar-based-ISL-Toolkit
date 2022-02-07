import human from './Models/bot/bot.glb';

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      text: ""
    };

    this.d = 0.05;
    this.flag = false
    this.start = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.pending = false;

    this.animations = []
    this.characters = []
  }
  
  
  componentDidMount() {

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xdddddd);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(0, 5, 5);
    this.scene.add(spotLight);


    this.camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth*0.75 / window.innerHeight,
        0.1,
        1000
    )

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth*0.75, window.innerHeight);
    document.getElementsByClassName("canvas")[0].appendChild(this.renderer.domElement);

    this.camera.position.z = 1.6;
    this.camera.position.y = 1.4;

    let loader = new GLTFLoader();
    loader.load(
      human,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if ( child.type === 'SkinnedMesh' ) {
            child.frustumCulled = false;
          }
    });
        this.human = gltf.scene;
        this.scene.add(this.human);
      },
      (xhr) => {
        console.log(xhr);
      }
    );
  }

  animate = () => {
    if(this.animations.length === 0){
      this.pending = false;
      return ;
    }
    requestAnimationFrame(this.animate);
    if(this.animations[0].length){
        if(!this.flag) {
          for(let i=0;i<this.animations[0].length;){
            let [boneName, action, axis, limit, sign] = this.animations[0][i]
            if(sign === "+" && this.human.getObjectByName(boneName)[action][axis] < limit){
                this.human.getObjectByName(boneName)[action][axis] += this.d;
                this.human.getObjectByName(boneName)[action][axis] = Math.min(this.human.getObjectByName(boneName)[action][axis], limit);
                i++;
            }
            else if(sign === "-" && this.human.getObjectByName(boneName)[action][axis] > limit){
                this.human.getObjectByName(boneName)[action][axis] -= this.d;
                this.human.getObjectByName(boneName)[action][axis] = Math.max(this.human.getObjectByName(boneName)[action][axis], limit);
                i++;
            }
            else{
                this.animations[0].splice(i, 1);
            }
          }
        }
    }
    else {
      this.flag = true;
      if(this.characters.length>0){
        this.addNewCharacter(this.characters[0]);
      }
      setTimeout(() => {
        this.flag = false
      }, 500)
      this.animations.shift();
      if(this.characters.length>0){
        this.characters.shift();
      }
    }
    this.renderer.render(this.scene, this.camera);
  }

  addNewCharacter = (char) => {
    this.setState(prevState => {
      let newText = prevState.text + char
      console.log(newText)
      return {text : newText}
    })
  }

  default = () => {

    let animations = []
    animations.push(["mixamorigNeck", "rotation", "x", Math.PI/12, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    this.animations.push(animations);

    if(this.pending === false){
      this.pending = true;
      this.animate();
    }
    
  }

  A = () => {

    let animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "y", -Math.PI/9, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "y", -Math.PI/18, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "y", Math.PI/18, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/2, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/9, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/12, "-"]);

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/2, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/12, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/36, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/15, "-"]);

    this.animations.push(animations);

    animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    this.animations.push(animations);

    if(this.pending === false){
      this.pending = true;
      this.animate();
    }
    
  }

  B = () => {

    let animations = []
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/4.5, "+"]);
    
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/6, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/6, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/4.5, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/4.5, "-"]);
    
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/6, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/10, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/9, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/6.5, "-"]);

    this.animations.push(animations);

    animations = []
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"]);
    
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);

    this.animations.push(animations);

    if(this.pending === false){
      this.pending = true;
      this.animate();
    }
    
  }

  C = () => {
    let animations = []
    // animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/3, "+"]);
    // animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/8, "+"]);
    // animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/8, "+"]);
    // animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/3, "+"]);
    // animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/8, "+"]);
    // animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/8, "+"]);
    // animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/3, "+"]);
    // animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/8, "+"]);
    // animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/8, "+"]);
    // animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/3, "+"]);
    // animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/8, "+"]);
    // animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/8, "+"]);
    // animations.push(["mixamorigRightHandThumb1", "rotation", "z", Math.PI/3.5, "+"]);
    // animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/4, "+"]);
    // animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/4, "-"]);
    // animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/2, "+"]);
    // animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/4, "-"])
    // animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/5, "+"]);
    // animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"]);
    // animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
    // animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/7, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/9, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);

    this.animations.push(animations);


    animations = []
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    this.animations.push(animations);
  }

  D = () => {
    let animations = []
    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.5, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/7, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);

    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/2.5, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", Math.PI/2.5, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/5, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/13, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);

    this.animations.push(animations);
    
  }

  sign = () => {
    this.default();
    // this.A();
    // this.B();
    // this.C();
    this.D();
  }

  displayStatic = () => {
    requestAnimationFrame(this.displayStatic);
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    const divStyle = {
      marginLeft : 'auto',
      marginRight : 'auto',
      textAlign: 'center',
      width: '100%',
    }
    const buttonStyle = {
      marginLeft : 'auto',
      marginRight : 'auto',
      marginTop: '10px',
      marginBottom: '10px',
      color: 'white',
      width: '80%',
      padding: '10px',
      backgroundColor: 'green',
      fontSize: '20px',
      borderRadius: '15px'

    }
    const inputStyle = {
      marginLeft : 'auto',
      marginRight : 'auto',
      marginBottom: '10px',
      color: 'black',
      width: '80%',
      padding: '10px',
      fontSize: '20px',
      borderRadius: '15px',
      textAlign: 'center'
    }

    return (
      <div className='container-fluid'>
        <div style={divStyle} className='row'>
          <div className='col-md-3'>
            <button onClick={this.sign} style={buttonStyle}>
              RUN
            </button><br />
            <input type='text' value={this.state.text} style={inputStyle} readOnly />
          </div>
          <div className='col-md-9'>
            <div className="canvas" />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

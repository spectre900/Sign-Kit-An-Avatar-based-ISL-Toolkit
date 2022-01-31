import human from './Models/hand2.glb';

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      text: ""
    };

    this.start = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.pending = false;
    this.d = 0.2;
    this.dx = -1.2371362447738647;
    this.dy = 0.17316772043704987;
    this.dz = 0.17885428667068481;
    this.flag = false

    this.animations = []
    this.characters = []
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
      human,
      (gltf) => {
        gltf.scene.traverse((child) => {
              if ( child.type == 'SkinnedMesh' ) {
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

  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

  animate = () => {
    if(this.animations.length == 0){
      this.pending = false;
      return ;
    }
    requestAnimationFrame(this.animate);
    if(this.animations[0].length){
        if(!this.flag) {
          for(let i=0;i<this.animations[0].length;){
            let [boneName, action, axis, limit, sign] = this.animations[0][i]
            if(sign == "+" && this.human.getObjectByName(boneName)[action][axis] < limit){
                this.human.getObjectByName(boneName)[action][axis] += this.d;
                this.human.getObjectByName(boneName)[action][axis] = Math.min(this.human.getObjectByName(boneName)[action][axis], limit);
                i++;
            }
            else if(sign == "-" && this.human.getObjectByName(boneName)[action][axis] > limit){
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
      this.flag = true
      this.addNewCharacter(this.characters[0])
      setTimeout(() => {
        this.flag = false
      }, 500)
      // this.wait(500);
      this.animations.shift();
      this.characters.shift();
    }
    this.renderer.render(this.scene, this.camera);
  }

  default = () => {
    this.characters.push(' ')

    let animations = []
    animations.push(["left4m", "rotation", "z", 0, "+"]);
    animations.push(["left4u", "rotation", "z", 0, "+"]);
    animations.push(["left5m", "rotation", "z", 0, "+"]);
    animations.push(["left5u", "rotation", "z", 0, "+"]);
    animations.push(["left5u", "rotation", "x", 0, "-"]);
    animations.push(["left4u", "rotation", "x", 0, "-"]);
    animations.push(["right4m", "rotation", "z", 0, "+"]);
    animations.push(["right4u", "rotation", "z", 0, "+"]);
    animations.push(["right5m", "rotation", "z", 0, "+"]);
    animations.push(["right5u", "rotation", "z", 0, "+"]);
    animations.push(["right5u", "rotation", "x", 0, "-"]);
    animations.push(["right4u", "rotation", "x", 0, "-"]);
    this.animations.push(animations);
    
  }

  addNewCharacter = (char) => {
    this.setState(prevState => {
      let newText = prevState.text + char
      console.log(newText)
      return {text : newText}
    })
  }

  N = () => {
    this.characters.push('N')
    this.characters.push(' ')

    let animations = []
    animations.push(["right", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["right", "position", "x", -4, "-"]);
    animations.push(["right", "position", "y", 2, "+"]);
    animations.push(["right", "position", "z", -0.2, "-"]);
    animations.push(["left", "rotation", "y", Math.PI, "+"]);
    animations.push(["left", "position", "x", -2.7, "-"]);
    animations.push(["left", "position", "y", -0.6, "-"]);
    animations.push(["left4m", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["left5m", "rotation", "z", -Math.PI/2, "-"]);

    this.animations.push(animations)
    
    animations = []
    animations.push(["right", "rotation", "z", 0, "+"]);
    animations.push(["right", "position", "x", this.dx, "+"]);
    animations.push(["right", "position", "y", this.dy, "-"]);
    animations.push(["right", "position", "z", this.dz, "+"]);

    animations.push(["left", "rotation", "y", 0, "-"]);
    animations.push(["left", "position", "x", this.dx, "+"]);
    animations.push(["left", "position", "y", this.dy, "+"]);
    animations.push(["left4m", "rotation", "z", 0, "+"]);
    animations.push(["left5m", "rotation", "z", 0, "+"]);

    this.animations.push(animations)
  }

  M = () => {
    this.characters.push('M')
    this.characters.push(' ')

    let animations = []
    animations.push(["right", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["right", "position", "x", -4, "-"]);
    animations.push(["right", "position", "y", 2, "+"]);
    animations.push(["right", "position", "z", -0.2, "-"]);

    animations.push(["left", "rotation", "y", Math.PI, "+"]);
    animations.push(["left", "position", "x", -2.7, "-"]);
    animations.push(["left", "position", "y", -0.6, "-"]);
    animations.push(["left5m", "rotation", "z", -Math.PI/2, "-"]);

    this.animations.push(animations)
    
    animations = []
    animations.push(["right", "rotation", "z", 0, "+"]);
    animations.push(["right", "position", "x", this.dx, "+"]);
    animations.push(["right", "position", "y", this.dy, "-"]);
    animations.push(["right", "position", "z", this.dz, "+"]);

    animations.push(["left", "rotation", "y", 0, "-"]);
    animations.push(["left", "position", "x", this.dx, "+"]);
    animations.push(["left", "position", "y", this.dy, "+"]);
    animations.push(["left5m", "rotation", "z", 0, "+"]);

    this.animations.push(animations)
  }

  H = () => {
    this.characters.push('H')
    this.characters.push(' ')

    let animations = []
    animations.push(["left", "rotation", "y", -Math.PI, "-"]);
    animations.push(["left", "rotation", "z", -Math.PI/7, "-"]);
    animations.push(["right", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["right", "position", "x", -3.5, "-"]);
    animations.push(["right", "position", "y", 0.5, "+"]);
    animations.push(["right", "position", "z", -0.5, "-"]);
    this.animations.push(animations);

    animations = []
    animations.push(["left", "rotation", "y", 0, "+"]);
    animations.push(["left", "rotation", "z", 0, "+"]);
    animations.push(["right", "rotation", "z", 0, "+"]);
    animations.push(["right", "position", "x", this.dx, "+"]);
    animations.push(["right", "position", "y", this.dy, "-"]);
    animations.push(["right", "position", "z", this.dz, "+"]);
    this.animations.push(animations);

  }

  C = () => {
    this.characters.push('C')
    this.characters.push(' ')

    let animations = []
    animations.push(["right", "rotation", "y", Math.PI/2, "+"]);
    animations.push(["right2u", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["right3u", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["right4u", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["right5u", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["right2m", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["right3m", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["right4m", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["right5m", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["right1l", "rotation", "z", Math.PI/1.9, "+"]);
    animations.push(["right1m", "rotation", "y", -Math.PI/9, "-"]);
    this.animations.push(animations);

    animations = []
    animations.push(["right", "rotation", "y", 0, "-"]);
    animations.push(["right2u", "rotation", "z", 0, "-"]);
    animations.push(["right3u", "rotation", "z", 0, "-"]);
    animations.push(["right4u", "rotation", "z", 0, "+"]);
    animations.push(["right5u", "rotation", "z", 0, "+"]);
    animations.push(["right2m", "rotation", "z", 0, "-"]);
    animations.push(["right3m", "rotation", "z", 0, "-"]);
    animations.push(["right4m", "rotation", "z", 0, "+"]);
    animations.push(["right5m", "rotation", "z", 0, "+"]);
    animations.push(["right1l", "rotation", "z", Math.PI, "-"]);
    animations.push(["right1m", "rotation", "y", Math.PI/7, "+"]);
    this.animations.push(animations);
  }

  I = () => {
    this.characters.push('I')
    this.characters.push(' ')

    let animations = []
    animations.push(["left", "rotation", "y", -Math.PI, "-"]);
    animations.push(["left3m", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["left3u", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["left4m", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["left4u", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["left5m", "rotation", "z", -Math.PI/3, "-"]);
    animations.push(["left5u", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["left", "rotation", "y", -Math.PI, "-"]);
    this.animations.push(animations);

    animations = []
    animations.push(["left", "rotation", "y", 0, "+"]);
    animations.push(["left3m", "rotation", "z", 0, "-"]);
    animations.push(["left3u", "rotation", "z", 0, "-"]);
    animations.push(["left4m", "rotation", "z", 0, "+"]);
    animations.push(["left4u", "rotation", "z", 0, "+"]);
    animations.push(["left5m", "rotation", "z", 0, "+"]);
    animations.push(["left5u", "rotation", "z", 0, "+"]);
    animations.push(["left", "rotation", "y", 0, "+"]);
    this.animations.push(animations);
  }

  sign = () => {

    this.default();
    this.N();
    this.M();
    this.H();
    this.C();
    this.I();

    if(this.pending == false){
      this.pending = true;
      this.animate();
    }
    
  }

  a = () => {
    requestAnimationFrame(this.a);
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
      width: '30%',
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
      width: '15%',
      padding: '10px',
      fontSize: '20px',
      borderRadius: '15px',
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
        <button onClick={this.sign} style={buttonStyle}>
          RUN
        </button><br />
        <input type='text' value={this.state.text} style={inputStyle} readOnly />
        <div className="canvas" />
      </div>
    )
  }
}

export default App;

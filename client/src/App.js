import human from './Models/joe.glb';

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import React, { Component } from "react";

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
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;
    this.renderer.shadowMap.enabled = true;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementsByClassName("canvas")[0].appendChild(this.renderer.domElement);

    this.camera.position.z = 0.8;
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

  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
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
      this.flag = true
      this.addNewCharacter(this.characters[0])
      setTimeout(() => {
        this.flag = false
      }, 100)
      this.animations.shift();
      this.characters.shift();
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

  sign = () => {

    let animations = []
    animations.push(["mixamorig7Neck", "rotation", "x", Math.PI/9, "+"]);
    animations.push(["mixamorig7LeftArm", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorig7RightArm", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorig7LeftForeArm", "rotation", "y", Math.PI/6, "+"]);
    animations.push(["mixamorig7RightForeArm", "rotation", "y", -Math.PI/6, "-"]);
    animations.push(["mixamorig7LeftForeArm", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorig7RightForeArm", "rotation", "z", -Math.PI/1.5, "-"]);
    this.animations.push(animations);

    if(this.pending === false){
      this.pending = true;
      this.animate();
    }
    
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

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

    const light = new THREE.PointLight(0xffffff, 1.5);
    light.position.set(0, 0, 0);
    this.scene.add(light);


    this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth*0.75 / window.innerHeight,
        0.1,
        1000
    )

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    // this.renderer.gammaInput = true;
    // this.renderer.gammaOutput = true;
    // this.renderer.shadowMap.enabled = true;
    this.renderer.setSize(window.innerWidth*0.75, window.innerHeight);
    document.getElementsByClassName("canvas")[0].appendChild(this.renderer.domElement);

    this.camera.position.z = 0.9;
    this.camera.position.y = 1.3;

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
      }, 0)
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
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    this.animations.push(animations);

    if(this.pending === false){
      this.pending = true;
      this.animate();
    }
    
  }

  sign = () => {
    this.default();
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

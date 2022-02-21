import './App.css'
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import avatar from './Models/bot/bot.glb';

import * as alphabets from './Animations/alphabets';
import { defaultPose } from './Animations/defaultPose';

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const App = () => {

  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  return (
    <Comp
      listening = {listening}
      transcript = {transcript}
      resetTranscript = {resetTranscript}
    />
  );
};

class Comp extends Component {

  constructor(props) {

    super(props)
  
    this.state = {
      text: "",
      inputText: "",
    };

    this.d = 0.1;
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
        window.innerWidth*0.67 / window.innerHeight,
        0.1,
        1000
    )

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth*0.67, window.innerHeight);
    document.getElementsByClassName("canvas")[0].appendChild(this.renderer.domElement);

    this.camera.position.z = 1.6;
    this.camera.position.y = 1.4;

    let loader = new GLTFLoader();
    loader.load(
      avatar,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if ( child.type === 'SkinnedMesh' ) {
            child.frustumCulled = false;
          }
    });
        this.avatar = gltf.scene;
        this.scene.add(this.avatar);
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
            if(sign === "+" && this.avatar.getObjectByName(boneName)[action][axis] < limit){
                this.avatar.getObjectByName(boneName)[action][axis] += this.d;
                this.avatar.getObjectByName(boneName)[action][axis] = Math.min(this.avatar.getObjectByName(boneName)[action][axis], limit);
                i++;
            }
            else if(sign === "-" && this.avatar.getObjectByName(boneName)[action][axis] > limit){
                this.avatar.getObjectByName(boneName)[action][axis] -= this.d;
                this.avatar.getObjectByName(boneName)[action][axis] = Math.max(this.avatar.getObjectByName(boneName)[action][axis], limit);
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
      }, 800)
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

  sign = () => {
    defaultPose(this);
    var str = this.props.transcript.toUpperCase();
    for(let ch of str){
      if (ch == 'A'){
        alphabets.A(this);
      }
      else if(ch == 'B'){
        alphabets.B(this);
      }
      else if(ch == 'C'){
        alphabets.C(this);
      }
      else if(ch == 'D'){
        alphabets.D(this);
      }
      else if(ch == 'E'){
        alphabets.E(this);
      }
    }
  }

  displayStatic = () => {
    requestAnimationFrame(this.displayStatic);
    this.renderer.render(this.scene, this.camera);
  }

  startListening = () =>{
    SpeechRecognition.startListening({continuous: true});
  }

  stopListening = () =>{
    SpeechRecognition.stopListening();
  }
  
  render() {
    return (
      <div className='container-fluid'>
        <div className='row div-style'>
          <div className='col-md-4'>
           
            <div className='header row text-center'>
              AUDIO TO SIGN LANGUAGE
            </div>
  
            <div className='body'>
              <div className='content'>
                <label></label>
                
                <input type='text' value={this.state.text} className='form-control input-style' readOnly /><br /><br />
  
                <label>Enter text here</label>
                <input type='text' value={this.props.transcript} className='form-control input-style' />
  
                <div className='row button-group'>
                  <button type="button" className="btn btn-primary col-md-3 button-small" onClick={this.startListening}>Start</button>
                  <button type="button" className="btn btn-primary col-md-3 button-small" onClick={this.stopListening}>Stop </button>
                  <button type="button" className="btn btn-primary col-md-3 button-small" onClick={this.props.resetTranscript}>Reset </button>
                </div>

                <p>Microphone: {this.props.listening ? 'on' : 'off'}</p>
              </div>
            </div>
  
            <div className='footer'>
              <button onClick={this.sign} className='btn btn-primary button-style'>
                START ANIMATIONS
              </button><br />
            </div>
          </div>
          <div className='col-md-8'>
            <div className="canvas" />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
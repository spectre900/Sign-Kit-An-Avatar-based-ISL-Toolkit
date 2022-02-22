import './App.css'
import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import avatar from './Models/xbot/xbot.glb';

import * as alphabets from './Animations/alphabets';
import { defaultPose } from './Animations/defaultPose';

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App() {
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");

  const componentRef = useRef({});
  const { current: ref } = componentRef;

  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    ref.d = 0.1;
    ref.flag = false;
    ref.pending = false;

    ref.animations = [];
    ref.characters = [];

    ref.scene = new THREE.Scene();
    ref.scene.background = new THREE.Color(0xdddddd);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(0, 5, 5);
    ref.scene.add(spotLight);

    ref.camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth*0.66 / window.innerHeight,
        0.1,
        1000
    )

    ref.renderer = new THREE.WebGLRenderer({ antialias: true });
    ref.renderer.setSize(window.innerWidth*0.66, window.innerHeight);
    document.getElementById("canvas").appendChild(ref.renderer.domElement);

    ref.camera.position.z = 1.6;
    ref.camera.position.y = 1.4;

    let loader = new GLTFLoader();
    loader.load(
      avatar,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if ( child.type === 'SkinnedMesh' ) {
            child.frustumCulled = false;
          }
    });
        ref.avatar = gltf.scene;
        ref.scene.add(ref.avatar);
      },
      (xhr) => {
        console.log(xhr);
      }
    );

  }, [ref]);

  ref.animate = () => {
    if(ref.animations.length === 0){
        ref.pending = false;
      return ;
    }
    requestAnimationFrame(ref.animate);
    if(ref.animations[0].length){
        if(!ref.flag) {
          for(let i=0;i<ref.animations[0].length;){
            let [boneName, action, axis, limit, sign] = ref.animations[0][i]
            if(sign === "+" && ref.avatar.getObjectByName(boneName)[action][axis] < limit){
                ref.avatar.getObjectByName(boneName)[action][axis] += ref.d;
                ref.avatar.getObjectByName(boneName)[action][axis] = Math.min(ref.avatar.getObjectByName(boneName)[action][axis], limit);
                i++;
            }
            else if(sign === "-" && ref.avatar.getObjectByName(boneName)[action][axis] > limit){
                ref.avatar.getObjectByName(boneName)[action][axis] -= ref.d;
                ref.avatar.getObjectByName(boneName)[action][axis] = Math.max(ref.avatar.getObjectByName(boneName)[action][axis], limit);
                i++;
            }
            else{
                ref.animations[0].splice(i, 1);
            }
          }
        }
    }
    else {
      ref.flag = true;
      if(ref.characters.length>0){
        addNewCharacter(ref.characters[0]);
      }
      setTimeout(() => {
        ref.flag = false
      }, 800)
      ref.animations.shift();
      if(ref.characters.length>0){
        ref.characters.shift();
      }
    }
    ref.renderer.render(ref.scene, ref.camera);
  }

  const addNewCharacter = (char) => {
    setText(prevText => prevText.text + char)
  }

  const displayStatic = () => {
    requestAnimationFrame(displayStatic);
    ref.renderer.render(ref.scene, ref.camera);
  }

  const sign = () => {
    defaultPose(ref);
    var str = transcript.toUpperCase();
    for(let ch of str){
      if (ch == 'A'){
        alphabets.A(ref);
      }
      else if(ch == 'B'){
        alphabets.B(ref);
      }
      else if(ch == 'C'){
        alphabets.C(ref);
      }
      else if(ch == 'D'){
        alphabets.D(ref);
      }
      else if(ch == 'E'){
        alphabets.E(ref);
      }
      else if(ch == 'F'){
        alphabets.F(ref);
      }
    }
  }

  const startListening = () =>{
    SpeechRecognition.startListening({continuous: true});
  }

  const stopListening = () =>{
    SpeechRecognition.stopListening();
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-4'>
          <h1 className='heading'>
            Audio to Sign Language
          </h1>
          <label className='label-style'>
            Processed Text
          </label>
          <input type='text' value={text} className='w-100 input-style' readOnly />
          <label className='label-style'>
            Speech Recognition: {listening ? 'on' : 'off'}
          </label>
          <div className='space-between'>
              <button className="btn btn-primary col-md-3 btn-style" onClick={startListening}>
                Start
              </button>
              <button className="btn btn-primary col-md-3 btn-style" onClick={stopListening}>
                Stop
              </button>
              <button className="btn btn-primary col-md-3 btn-style" onClick={resetTranscript}>
                Reset
              </button>
          </div>
          <input type='text' value={transcript} className='w-100 input-style' />
          <button onClick={sign} className='btn btn-primary w-100 btn-style btn-start-anim'>
            Start Animations
          </button>
        </div>
        <div className='col-md-8'>
          <div id='canvas'/>
        </div>
      </div>
    </div>
  )
}

export default App;
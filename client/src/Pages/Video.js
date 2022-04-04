import '../App.css'
import axios from 'axios';
import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom'
import Slider from 'react-input-slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import xbot from '../Models/xbot/xbot.glb';
import ybot from '../Models/ybot/ybot.glb';
import xbotPic from '../Models/xbot/xbot.png';
import ybotPic from '../Models/ybot/ybot.png';

import * as words from '../Animations/words';
import * as alphabets from '../Animations/alphabets';
import { defaultPose } from '../Animations/defaultPose';

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Button, Modal } from "react-bootstrap";

import { baseURL } from '../Config/config'


function Video() {
  const [text, setText] = useState("");
  const [bot, setBot] = useState(ybot);
  const [speed, setSpeed] = useState(0.1);
  const [pause, setPause] = useState(800);
  const [invalidId, setInvalidId] = useState(false)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const params = useParams()

  const componentRef = useRef({});
  const { current: ref } = componentRef;

  let id = React.createRef();

  useEffect(() => {

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
        window.innerWidth*0.57 / (window.innerHeight - 70),
        0.1,
        1000
    )

    ref.renderer = new THREE.WebGLRenderer({ antialias: true });
    ref.renderer.setSize(window.innerWidth*0.57, window.innerHeight - 70);
    document.getElementById("canvas").innerHTML = "";
    document.getElementById("canvas").appendChild(ref.renderer.domElement);

    ref.camera.position.z = 1.6;
    ref.camera.position.y = 1.4;

    let loader = new GLTFLoader();
    loader.load(
      bot,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if ( child.type === 'SkinnedMesh' ) {
            child.frustumCulled = false;
          }
    });
        ref.avatar = gltf.scene;
        ref.scene.add(ref.avatar);
        defaultPose(ref);
      },
      (xhr) => {
        console.log(xhr);
      }
    );

    id.current.value=params.videoId

  }, [ref, bot]);

  ref.animate = () => {
    if(ref.animations.length === 0){
        ref.pending = false;
      return ;
    }
    requestAnimationFrame(ref.animate);
    if(ref.animations[0].length){
        if(!ref.flag) {
          if(ref.animations[0][0]==='add-text'){
            setText(text + ref.animations[0][1]);
            ref.animations.shift();
          }
          else{
            for(let i=0;i<ref.animations[0].length;){
              let [boneName, action, axis, limit, sign] = ref.animations[0][i]
              if(sign === "+" && ref.avatar.getObjectByName(boneName)[action][axis] < limit){
                  ref.avatar.getObjectByName(boneName)[action][axis] += speed;
                  ref.avatar.getObjectByName(boneName)[action][axis] = Math.min(ref.avatar.getObjectByName(boneName)[action][axis], limit);
                  i++;
              }
              else if(sign === "-" && ref.avatar.getObjectByName(boneName)[action][axis] > limit){
                  ref.avatar.getObjectByName(boneName)[action][axis] -= speed;
                  ref.avatar.getObjectByName(boneName)[action][axis] = Math.max(ref.avatar.getObjectByName(boneName)[action][axis], limit);
                  i++;
              }
              else{
                  ref.animations[0].splice(i, 1);
              }
            }
          }
        }
    }
    else {
      ref.flag = true;
      setTimeout(() => {
        ref.flag = false
      }, pause);
      ref.animations.shift();
    }
    ref.renderer.render(ref.scene, ref.camera);
  }

  const sign = (str) => {
    str = str.toUpperCase();
    var strWords = str.split(' ');
    setText('')

    for(let word of strWords){
      if(words[word]){
        ref.animations.push(['add-text', word+' ']);
        words[word](ref);
        
      }
      else{
        for(const [index, ch] of word.split('').entries()){
          if(index === word.length-1)
            ref.animations.push(['add-text', ch+' ']);
          else 
            ref.animations.push(['add-text', ch]);
          alphabets[ch](ref);
          
        }
      }
    }
  }

  const animateFromID = () => {
      const videoID = id.current.value;
      axios.get(`${baseURL}/videos/${videoID}`).then((res) => {
        console.log(res.data)
        setTitle(res.data.title)
        setDesc(res.data.desc)
        sign(res.data.content);
      }).catch(err => {
        console.log(err)
        setInvalidId(true)
      });
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
          <label className='label-style'>
              Video ID
          </label>
          <input ref={id} splaceholder='Video ID' className='w-100 input-style' />
          <button onClick={animateFromID} className='btn btn-primary w-100 btn-style btn-start mb-3'>
              Start Video
          </button>
          <hr />
          {title && 
            <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
            <label className='h3'>{title}</label>
            <label>{desc}</label>
            <div className='w-100'>
              <label className='label-style mt-4'>
                Processed Text
              </label>
              <textarea rows={10} value={text} className='w-100 input-style mt-2' readOnly />
              </div>
          </div>}
        </div>
        <div className='col-md-7'>
          <div id='canvas'/>
        </div>
        <div className='col-md-2'>
          <p className='bot-label'>
            Select Avatar
          </p>
          <img src={xbotPic} className='bot-image col-md-11' onClick={()=>{setBot(xbot)}} alt='Avatar 1: XBOT'/>
          <img src={ybotPic} className='bot-image col-md-11' onClick={()=>{setBot(ybot)}} alt='Avatar 2: YBOT'/>
          <p className='label-style'>
            Animation Speed: {Math.round(speed*100)/100}
          </p>
          <Slider
            axis="x"
            xmin={0.05}
            xmax={0.50}
            xstep={0.01}
            x={speed}
            onChange={({ x }) => setSpeed(x)}
            className='w-100'
          />
          <p className='label-style'>
            Pause time: {pause} ms
          </p>
          <Slider
            axis="x"
            xmin={0}
            xmax={2000}
            xstep={100}
            x={pause}
            onChange={({ x }) => setPause(x)}
            className='w-100'
          />
        </div>
      </div>
      <Modal show={invalidId} onHide={() => setInvalidId(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Invalid Video ID</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please make sure that the video ID that your have entered is valid!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setInvalidId(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Video;
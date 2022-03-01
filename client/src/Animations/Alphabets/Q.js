export const Q = (ref) => {

  let animations = []
  animations.push(["mixamorigRightHandIndex2", "rotation", "z", Math.PI/4.2, "+"]);
  animations.push(["mixamorigRightHandIndex3", "rotation", "z", Math.PI/4.2, "+"]);
  animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
  animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"]);
  animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"]);
  animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
  animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
  animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
  animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
  animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
  animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
  animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/2.3, "+"]);
  animations.push(["mixamorigRightHandThumb1", "rotation", "y", -Math.PI/25, "-"]);
  animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/10, "-"]);
  animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"]);

  animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/4, "-"]);

  animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/5.3, "+"]);
  animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);

  animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.4, "+"]);
  
  animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/3, "-"]);
  animations.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/3, "-"]);
  animations.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/3, "-"]);
  animations.push(["mixamorigLeftHandThumb1", "rotation", "x", Math.PI/10, "+"]);
  animations.push(["mixamorigLeftHandThumb2", "rotation", "y", Math.PI/10, "+"]);

  animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/2.8, "+"]);
  animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/3, "+"]);

  animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
  animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"]);

  animations.push(["mixamorigLeftArm", "rotation", "y", -Math.PI/33, "-"]);
  animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.4, "-"]);
  animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/8.3, "-"]);

  ref.animations.push(animations);

  animations = []

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
  animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
  animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
  animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

  animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);

  animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
  animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);

  animations.push(["mixamorigRightArm", "rotation", "z", 1.0471975511965976, "-"]);

  animations.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "-"]);
  animations.push(["mixamorigLeftHandThumb2", "rotation", "y", 0, "-"]);

  animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
  animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);

  animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
  animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);

  animations.push(["mixamorigLeftArm", "rotation", "y", 0, "+"]);
  animations.push(["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]);
  animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);

  ref.animations.push(animations);

  if(ref.pending === false){
    ref.pending = true;
    ref.animate();
  }
}


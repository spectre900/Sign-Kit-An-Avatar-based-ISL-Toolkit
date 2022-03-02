export const M = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/2.3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", -Math.PI/25, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/10, "-"]);
  
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
  
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/60, "-"]);

    animations.push(["mixamorigLeftHandThumb1", "rotation", "z", Math.PI/12, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
  
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
  
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/30, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.6, "-"]);
  
    ref.animations.push(animations);

    animations = []

    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);
  
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
  
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigLeftHandThumb1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
  
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -2.0943951023931953, "+"]);
  
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]);
  
    ref.animations.push(animations);
  
    if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}
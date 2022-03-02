export const Y = (ref) => {

    let animations = []
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/2.5, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", +Math.PI/2.5, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/8, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/15, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", -Math.PI/10, "-"]);

    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/33, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.2, "+"]);

    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/1.6, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/1.8, "-"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/2, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/2, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/3.5, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/5, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.2, "-"]);

    ref.animations.push(animations);

    animations = []
    
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 1.0471975511965976, "-"]);

    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]);

    ref.animations.push(animations);

    if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

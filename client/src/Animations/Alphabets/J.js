export const J = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.5, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "z", Math.PI/2, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI/5, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "z", Math.PI/6, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/6, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/36, "-"]);

    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "y", -Math.PI/2, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/3.7, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", -Math.PI/6, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.4, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", -Math.PI/7, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", Math.PI/12, "+"]);

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
    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "z", 0, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "z", 0, "-"]);

    animations.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

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

    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "-"]);

    ref.animations.push(animations);

    if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

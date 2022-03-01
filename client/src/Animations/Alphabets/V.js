export const V = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandIndex1", "rotation", "y", Math.PI/16, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "y", -Math.PI/16, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/1.6, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/1.8, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", -Math.PI/3, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", -Math.PI/3, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/2.3, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", -Math.PI/5, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/2.65, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/30, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/4, "-"]);

    ref.animations.push(animations);

    animations = []

    animations.push(["mixamorigRightHandIndex1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);

    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    ref.animations.push(animations);

    if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
    
}
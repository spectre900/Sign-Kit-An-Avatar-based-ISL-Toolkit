export const TIME = (ref) => {

    let animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandMiddle3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandRing3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky2", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandPinky3", "rotation", "z", -Math.PI/2, "-"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "y", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/4, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.5, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", Math.PI/6, "+"]);

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", Math.PI/2, "+"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", Math.PI/2, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/3.5, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "y", Math.PI/9, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/12, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "x", Math.PI/6, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/6, "+"]);

    ref.animations.push(animations);

    animations = []

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);

    ref.animations.push(animations);

    animations = []

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/12, "+"]);

    ref.animations.push(animations);

    animations = []

    animations.push(["mixamorigLeftHandIndex1", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftHandIndex3", "rotation", "z", 0, "+"]);
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

    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/3, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "-"]);

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing3", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky3", "rotation", "z", 0, "-"]);

    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/3, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}
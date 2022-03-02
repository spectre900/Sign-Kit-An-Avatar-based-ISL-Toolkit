export const W = (ref) => {

    let animations = []
    animations.push(["mixamorigRightHandIndex1", "rotation", "y", Math.PI/16, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "y", -Math.PI/12, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "y", -Math.PI/8, "-"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", Math.PI/5, "+"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", Math.PI/6, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "x", -Math.PI/6, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/6, "+"]);

    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.4, "+"]);

    animations.push(["mixamorigLeftHandIndex1", "rotation", "y", -Math.PI/16, "-"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "y", Math.PI/8, "+"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "y", Math.PI/8, "+"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "y", -Math.PI/5, "-"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "z", Math.PI/6, "+"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", -Math.PI/6, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/24, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", -Math.PI/6, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.4, "-"]);

    ref.animations.push(animations);


    animations = []
    animations.push(["mixamorigRightHandIndex1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigRightHandThumb1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigRightHandThumb2", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigRightHandThumb3", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);

    animations.push(["mixamorigRightArm", "rotation", "z", 1.0471975511965976, "-"]);

    animations.push(["mixamorigLeftHandIndex1", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigLeftHandRing1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigLeftHandPinky1", "rotation", "y", 0, "-"]);
    animations.push(["mixamorigLeftHandThumb1", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigLeftHandThumb2", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftHandThumb3", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);

    animations.push(["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]);

    ref.animations.push(animations);

    if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}

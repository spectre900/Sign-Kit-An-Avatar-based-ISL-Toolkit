export const Z = (ref) => {

    let animations = []

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", Math.PI/3, "+"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", Math.PI/3, "+"]);

    animations.push(["mixamorigRightHand", "rotation", "z", -Math.PI/10, "-"]);
    animations.push(["mixamorigRightHand", "rotation", "y", Math.PI/4, "+"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/7, "+"]); //7
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/18, "+"]);
    
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6.5, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "z", Math.PI/2.7, "+"]);
    
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", -Math.PI/3, "-"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", Math.PI/4, "+"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", -Math.PI/9, "-"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/6, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/18, "+"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/5, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -Math.PI/2.7, "-"]);

    ref.animations.push(animations);


    animations = []

    animations.push(["mixamorigRightHandIndex1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandMiddle1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandRing1", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightHandPinky1", "rotation", "z", 0, "-"]);

    animations.push(["mixamorigRightHand", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigRightHand", "rotation", "y", 0, "-"]);

    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]); //7
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "z", 1.0471975511965976, "-"]);
    
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigLeftHand", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigLeftHand", "rotation", "y", 0, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);

    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "z", -1.0471975511965976, "+"]);

    ref.animations.push(animations);

    if(ref.pending === false){
      ref.pending = true;
      ref.animate();
    }
}
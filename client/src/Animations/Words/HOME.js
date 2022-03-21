export const HOME = (ref) => {

    let animations = []

    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", -Math.PI/3, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", Math.PI/70, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", -Math.PI/7, "-"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", -Math.PI/6, "-"]);

    animations.push(["mixamorigRightHandThumb1", "rotation", "x", -Math.PI/3, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", Math.PI/70, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", Math.PI/7, "+"]);
    animations.push(["mixamorigRightArm", "rotation", "x", -Math.PI/6, "-"]);

    ref.animations.push(animations);

    animations = []
    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/2.5, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/2.5, "-"]);

    ref.animations.push(animations);
    
    animations = []
    animations.push(["mixamorigLeftHandThumb1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigLeftForeArm", "rotation", "z", 0, "+"]);
    animations.push(["mixamorigLeftArm", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigRightHandThumb1", "rotation", "x", 0, "+"]);
    animations.push(["mixamorigRightForeArm", "rotation", "x", 0, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "z", 0, "-"]);
    animations.push(["mixamorigRightArm", "rotation", "x", 0, "+"]);

    animations.push(["mixamorigLeftForeArm", "rotation", "y", -Math.PI/1.5, "-"]);
    animations.push(["mixamorigRightForeArm", "rotation", "y", Math.PI/1.5, "+"]);

    ref.animations.push(animations);

    if(ref.pending === false){
        ref.pending = true;
        ref.animate();
    }

}
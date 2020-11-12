import React from 'react'
import Sketch from "react-p5";
import Particle from './Particle'
import SoundParticle from './SoundParticle'
export default (props) => {
    let video;
    let vScale = 16;

    let particles = [];
    let soundParticle;
 
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(0.5*p5.windowWidth, 0.5*p5.windowHeight).parent(canvasParentRef);
        p5.pixelDensity(1)
        video = p5.createCapture(p5.VIDEO)
        video.size(p5.width/vScale, p5.height/vScale)
        for(let i = 0; i < 100; i++){
            particles.push(new Particle(p5.random(0, p5.width), p5.random(0, p5.height), p5, video, vScale))
        }
        soundParticle = new SoundParticle(p5.random(0, p5.width), p5.random(0, p5.height), p5, video, vScale, [])
    };
 
    const draw = (p5) => {
        video.loadPixels();
        for(let i = 0; i < particles.length; i++){
            particles[i].update();
            particles[i].show();
        }
        soundParticle.update();
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
    };
 
    return <Sketch setup={setup} draw={draw} />;
};

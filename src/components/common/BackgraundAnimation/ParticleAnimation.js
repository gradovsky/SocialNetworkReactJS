import React from "react";
import Particles from "react-particles-js";
import s from './ParticleAnimation.module.css'

const particlesOpt = {
    "particles": {
        "number": {
            "value": 90
        },
        "size": {
            "value": 2
        }
    },
    "interactivity": {
        detect_on: "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
};

export default () => (
    <Particles className={s.particles} params={particlesOpt}/>
);

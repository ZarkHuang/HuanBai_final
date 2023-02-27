import React, { useEffect } from "react";
import { TweenMax, Power4 } from "gsap";
import "./hero.css";

const Hero = () => {
useEffect(() => {
const faceButton = document.querySelector(".face-button");
const faceContainer = document.querySelector(".face-container");
const containerCoords = document.querySelector("#body-container").getBoundingClientRect();
const coverbutton = document.querySelector(".cover-button");
const coverContainer = document.querySelector(".cover-container");

function handleFaceButtonMouseMove(e) {
  const mouseX = e.pageX - containerCoords.left;
  const mouseY = e.pageY - containerCoords.top;

  TweenMax.to(faceButton, 0.3, {
    x: (mouseX - containerCoords.width / 2) / containerCoords.width * 50,
    y: (mouseY - containerCoords.height / 2) / containerCoords.width * 50,
    ease: Power4.easeOut,
  });

  TweenMax.to(faceContainer, 0.3, {
    x: (mouseX - containerCoords.width / 2) / containerCoords.width * 25,
    y: (mouseY - containerCoords.height / 2) / containerCoords.width * 25,
    ease: Power4.easeOut,
  });
}

function handleFaceButtonMouseEnter() {
  TweenMax.to(faceButton, 0.3, {
    scale: 0.975,
  });
}

function handleFaceButtonMouseLeave() {
  TweenMax.to([faceButton, faceContainer], 0.3, {
    x: 0,
    y: 0,
    scale: 1,
  });
}

function handleCoverButtonMouseEnter() {
  TweenMax.to(coverbutton, 0.3, {
    rotation: 10,
    scale: 1.1,
  });
}

function handleCoverButtonMouseLeave() {
  TweenMax.to([coverbutton, coverContainer], 0.3, {
    rotation: -5,
    yoyo: true,
    scale: 1,
  });
}

faceButton.addEventListener("mousemove", handleFaceButtonMouseMove);
faceButton.addEventListener("mouseenter", handleFaceButtonMouseEnter);
faceButton.addEventListener("mouseleave", handleFaceButtonMouseLeave);
coverbutton.addEventListener("mouseenter", handleCoverButtonMouseEnter);
coverbutton.addEventListener("mouseleave", handleCoverButtonMouseLeave);

return () => {
  faceButton.removeEventListener("mousemove", handleFaceButtonMouseMove);
  faceButton.removeEventListener("mouseenter", handleFaceButtonMouseEnter);
  faceButton.removeEventListener("mouseleave", handleFaceButtonMouseLeave);
  coverbutton.removeEventListener("mouseenter", handleCoverButtonMouseEnter);
  coverbutton.removeEventListener("mouseleave", handleCoverButtonMouseLeave);
};
}, []);

return (
<div className="warp" id="warp">
<div id="body-cover">
<button className="cover-button">
<span className="cover-container"></span>
<span className="shpape-button"> </span>
</button>
</div>
<div id="body-container">
<button className="face-button">
<span className="face-container">
<span className="eye left"></span>
<span className="eye right"></span>
<span className="mouth"></span>
</span>
</button>
</div>
</div>
);
};

export default Hero;
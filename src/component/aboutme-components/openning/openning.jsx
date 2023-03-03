import React, { useEffect } from 'react';
import { TweenLite,TimelineLite } from 'gsap';
import './openning.css'


const Openning = () => {
  useEffect(() => {
    const tl = new TimelineLite({ delay: 1 }),
      firstBg = document.querySelectorAll('.text__first-bg'),
      secBg = document.querySelectorAll('.text__second-bg'),
      word = document.querySelectorAll('.text__word');

    tl
      .add(TweenLite.to(firstBg, 0.2, { scaleX: 1 }))
      .add(TweenLite.to(secBg, 0.2, { scaleX: 1 }))
      .add(TweenLite.to(word, 0.1, { opacity: 1 }, "-=0.1"))
      .add(TweenLite.to(firstBg, 0.2, { scaleX: 0 }))
      .add(TweenLite.to(secBg, 0.2, { scaleX: 0 }));

    document.querySelector('.restart').onclick = function () { tl.restart() };
  }, []);

  return (
    <div className='open-body'>
      <p className="opentext ">
        <span className="text__first">
          <span className="text__word">Hello! </span>
          <span className="text__first-bg"></span>
        </span>
        <br />
        <span className="text__second">
          <span className="text__word"><img src="https://i.imgur.com/JkL1zX5.png" alt="" /></span>
          <span className="text__second-bg"></span>
        </span>
      </p>
      <button className="restart">repeat</button>
    </div>
  );
};
export default Openning

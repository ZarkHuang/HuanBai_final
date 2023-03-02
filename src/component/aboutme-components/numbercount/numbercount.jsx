import React, { useEffect } from "react";
import "./numbercount.css";

const Numbercount = () => {
  useEffect(() => {
    const valueDisplays = document.querySelectorAll(".num");
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const endValue = parseInt(entry.target.getAttribute("data-val"));
          const duration = Math.floor(4000 / endValue);
          let startValue = 0;
          const counter = setInterval(() => {
            startValue += 2;
            entry.target.textContent = startValue;
            if (startValue === endValue) {
              clearInterval(counter);
            }
          }, duration);
        }
      });
    }, options);

    valueDisplays.forEach((valueDisplay) => {
      observer.observe(valueDisplay);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="count-wrapper">
      <div className="count-container">
      <span className="counttext">使用一次可減少</span>
        <span className="num" data-val="180">
          00
        </span>
        <span className="counttext">公克碳排放</span>
      </div>

      <div className="count-container">
        <span className="counttext">每年消耗</span>
        <span className="num" data-val="240">
          00
        </span>
        <span className="counttext">億根吸管</span>
      </div>

      <div className="count-container">
      <span className="counttext">每年消耗</span>
        <span className="num" data-val="200">
          00
        </span>
        <span className="counttext">億免洗杯</span>
      </div>

      <div className="count-container">
      <span className="counttext">每年消耗</span>
        <span className="num" data-val="300">
          00
        </span>
        <span className="counttext">億根吸管</span>
      </div>
    </div>
  );
};

export default Numbercount;

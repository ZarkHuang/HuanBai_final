import React, { useRef } from "react";
import './how-is-works.css'

const HowIsWork = () => {

    const progressbarRef = useRef(null);
    const firstStepRef = useRef(null);

    const handleClick = (event) => {
        const progressbar = progressbarRef.current;
        const progressbarSteps = progressbar.querySelectorAll('.progressbar__step')
        const firstStep = firstStepRef.current;

        if (event.target && event.target.nodeName === "LI") {
            const dataStep = event.target.getAttribute('data-step');
            for (let index = dataStep - 1; index < progressbarSteps.length; index++) {
                progressbarSteps[index].classList.remove('active');
            }
            for (let index = dataStep - 1; index > 0; index--) {
                progressbarSteps[index].classList.add('active');
            }
            event.target.classList.add('active')
            firstStep.style.marginLeft = `-${(dataStep-1)*100}%`
        }
    };

    return (

        <section class="how-is-works w-120">
            <div class="works__content">
                <div class="works__head">
                    <h2 class="works__title">開始體驗</h2>
                    <p class="works__description">
                    想喝飲料卻沒有帶自己的環保杯？別擔心！<br/>
                    至認明「外借杯良好服務標誌」透過機器或向店員租借循環杯，提供可重複使用的外帶循環容器，
享受美食，不用多產生一個垃圾！
                    </p>
                </div>
                <div class="works__body">
                    <ul class="form_progressbar" ref={progressbarRef} onClick={handleClick}>
                        <li class="progressbar__step active" data-step="1">
                            01
                        </li>
                        <li class="progressbar__step" data-step="2">
                            02
                        </li>
                        <li class="progressbar__step" data-step="3">
                            03
                        </li>
                        <li class="progressbar__step" data-step="4">
                            04
                        </li>
                    </ul>
                </div>
        </div>
        <div className="works__footer">
          <div className="works__step__content first_step" ref={firstStepRef}>
            <h3 className="works__step_title">
            登記借杯
            </h3>
            <p className="works__step_description">
            加入品牌會員或掃描拍品牌借用QRcode
            </p>
          </div>
          <div className="works__step__content">
            <h3 className="works__step_title">借用</h3>
            <p className="works__step_description">
            外帶時選用循環容器並登記借出
            </p>
          </div>
          <div className="works__step__content">
            <h3 className="works__step_title">歸還</h3>
            <p className="works__step_description">
            歸還到任一合作店家或自助歸還站
            </p>
          </div>
          <div className="works__step__content">
            <h3 className="works__step_title">再來一次</h3>
            <p className="works__step_description">
            累積環境影響力謝謝你一起愛地球
            </p>
          </div>
        </div>
    </section>
  );
};

export default HowIsWork;


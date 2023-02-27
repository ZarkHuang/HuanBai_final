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
                    <h2 class="works__title">如何使用</h2>
                    <p class="works__description">
                    與全台餐飲店家合作，外帶外送直接使用循環容器盛裝你的餐點，享用完畢後，歸還到任一合作店家或自助歸還站。這裡借，那裡還，就是這麼方便！
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
            註冊
            </h3>
            <p className="works__step_description">
            加入好盒器LINE好友驗證手機號碼
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


import React from "react";
import "./invest.css";

const Invest = () => {
  return (
    <section class="invest w-105">
      <div class="invest__content">
        <div class="invest__head">
          <h2 class="invest__title">享受美食 零廢棄！</h2>
          <p class="invest__description">
          與全台餐飲店家合作，外帶外送直接使用循環容器盛裝你的餐點，享用完畢後，歸還到任一合作店家或自助歸還站。這裡借，那裡還，就是這麼方便！
          </p>
        </div>
        <div class="invest__body">
          <div class="invest__item">
            <div class="invest__item__head">
              <h5 class="invest__item__subtitle">最新消息</h5>
            </div>
            <div class="invest__item__body">
              <h4 class="invest__item__title">Short terms investment</h4>
              <p class="invest__item_description">
                Invest in farms that will be ready for harvest in 3-18 months
              </p>
            </div>
            <div class="invest__item__footer">
              <a href="#" class="invest-btn btn__invest">
                Learn More
              </a>
            </div>
          </div>
          <div class="invest__item">
            <div class="invest__item__head">
              <h5 class="invest__item__subtitle">最新文章</h5>
            </div>
            <div class="invest__item__body">
              <h4 class="invest__item__title">Long terms investment</h4>
              <p class="invest__item_description">
                Consider farms that have long term investment program.
              </p>
            </div>
            <div class="invest__item__footer">
              <a href="#" class="invest-btn btn__invest">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;

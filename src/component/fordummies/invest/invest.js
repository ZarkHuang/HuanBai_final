import React from "react";
import { Link } from "react-router-dom";
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
              <h4 class="invest__item__title">循環杯新制2023年將上路 環署推認證標誌供民眾安心借用</h4>
              <p class="invest__item_description">
              2023年元旦起，將有5%連鎖便利商店、連鎖速食店須提供循環杯借用服務，環保署今天（22日）公布....
              </p>
            </div>
            <div class="invest__item__footer">
              <Link to="/news/2" class="invest-btn btn__invest">
                Learn More
              </Link>
            </div>
          </div>
          <div class="invest__item">
            <div class="invest__item__head">
              <h5 class="invest__item__subtitle">最新文章</h5>
            </div>
            <div class="invest__item__body">
              <h4 class="invest__item__title">【投票結果】：你知道連鎖超商及速食店提供循環杯嗎？</h4>
              <p class="invest__item_description">
              為了確保循環杯服務系統的衛生及品質，環保署10月底公布...
              </p>
            </div>
            <div class="invest__item__footer">
            <Link to="/news/1" class="invest-btn btn__invest">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;

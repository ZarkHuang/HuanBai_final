import React from "react";
import "./invest.css";

const Invest = () => {
  return (
    <section class="invest w-105">
      <div class="invest__content">
        <div class="invest__head">
          <h2 class="invest__title">享受美食 零廢棄！</h2>
          <p class="invest__description">
            全台餐飲店家合作， 提供可重複使用的外帶循環容器，
            享受美食，不用多產生一個垃圾！容器選用食品級PP材質，符合食藥署《食品器具容器包裝衛生標準》。清洗委託專業清洗廠，符合衛福部《餐具清洗良好作業指引》，每季SGS檢驗合格。
          </p>
        </div>
        <div class="invest__body">
          <div class="invest__item">
            <div class="invest__item__head">
              <h5 class="invest__item__subtitle">NEW FARM TODAY</h5>
            </div>
            <div class="invest__item__body">
              <h4 class="invest__item__title">Short terms investment</h4>
              <p class="invest__item_description">
                Invest in farms that will be ready for harvest in 3-18 months
              </p>
            </div>
            <div class="invest__item__footer">
              <a href="#" class="btn btn__invest">
                Learn More
              </a>
            </div>
          </div>
          <div class="invest__item">
            <div class="invest__item__head">
              <h5 class="invest__item__subtitle">FULLY FUNDED</h5>
            </div>
            <div class="invest__item__body">
              <h4 class="invest__item__title">Long terms investment</h4>
              <p class="invest__item_description">
                Consider farms that have long term investment program.
              </p>
            </div>
            <div class="invest__item__footer">
              <a href="#" class="btn btn__invest">
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

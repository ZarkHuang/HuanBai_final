import React from "react";
import "./Opportunities.css";


const Opportunities = () => {

  return (
    <section className="opportunities">
      <div className="opportunities__img">
        <img
          src={
            "https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/leaf.png"
          }
          alt=""
        />
      </div>
      <div className="opportunities__content w-105">
        <div className="opportunities__head">
          <h2 className="opportunities__title">循環杯懶人包</h2>
          <p className="opportunities__description">For Dummies</p>
        </div>

        <div className="opportunities__body">
          <div
            className="opportunity"
          >
            <img
              src="https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/opportunites/opportunity-1.svg"
              alt="Icon"
              className="opportunity__icon"
            />
            <h4 className="opportunity__title">品質把關 好安心</h4>
            <p className="opportunity__description">
            容器選用食品級PP材質，符合食藥署《食品器具容器包裝衛生標準》。清洗委託專業清洗廠，符合衛福部《餐具清洗良好作業指引》，每季SGS檢驗合格。
            </p>
          </div>

          <div
            className="opportunity"
          >
            <img
              src="https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/opportunites/opportunity-2.svg"
              alt="Icon"
              className="opportunity__icon icon2"
            />
            <h4 className="opportunity__title">多點借還 好方便</h4>
            <p className="opportunity__description">
            與全台餐飲店家合作，外帶外送直接使用循環容器盛裝你的餐點，享用完畢後，歸還到任一合作店家或自助歸還站。這裡借，那裡還，就是這麼方便！
            </p>
          </div>

          <div
            className="opportunity"
          >
            <img
              src="https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/opportunites/opportunity-3.svg"
              alt="Icon"
              className="opportunity__icon"
            />
            <h4 className="opportunity__title">享受美食 零廢棄</h4>
            <p className="opportunity__description">
            享受美食也可以不垃圾，循環容器透過清洗取代拋棄，邀請你一起選擇對環境更好的外帶方式！
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Opportunities;

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
          <p className="opportunities__description" id="opportunities__description">各家廠牌租借細節</p>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;

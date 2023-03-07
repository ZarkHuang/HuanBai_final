import React  from "react";
import Content1 from '../../../img/aboutme_image/ground-coffee.jpg'
import AllCollapseExample from '../Accordion/Accordion'
import './content.css'
import Mountain from '../../../img/aboutme_image/test.png'

const Content = () => {

  return (
    <section className="features">
      <div className="features-container">
        <div className="section-content">
          <div className="features-text">
            <img
              src={Mountain}
              alt=""
              className="features-text-img"
            />
            <h4 className="section-head-title feature-head-title">Features</h4>
            <h2 className="section-title">關於我們</h2>
            <p className="section-desc">
            </p>
            <AllCollapseExample />
          </div>
          <div className="features-img">
            <img
              src={Content1}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

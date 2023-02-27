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
            <h4 className="opportunity__title">Connect with our farmers</h4>
            <p className="opportunity__description">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
            </p>
          </div>

          <div
            className="opportunity"

          >
            <img
              src="https://raw.githubusercontent.com/mustafadalga/farm-landing-page/master/assets/img/opportunites/opportunity-2.svg"
              alt="Icon"
              className="opportunity__icon"
            />
            <h4 className="opportunity__title">Grow your business</h4>
            <p className="opportunity__description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
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
            <h4 className="opportunity__title">Social Impact Invesment</h4>
            <p className="opportunity__description">
              At vero eos et accusamus et iusto odio praesentium atque corrupti
              quos dolores et quas molestias excepturi sint occaecati cupiditate
              non provident, similique sunt in culpa qui officia deserunt
              mollitia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;

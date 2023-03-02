import React from "react";
import './brand.css'
import Starbucks from '../../../icons/starbucks.svg'
import Mcdonalds from '../../../icons/Mcdonalds.svg'
import Kfc from '../../../icons/kfc.svg'
import SevenEleven from '../../../icons/711.png'
import FamilyMart from '../../../icons/FamilyMart.png'
import HiLife from '../../../icons/HiLife.png'
import Mos from '../../../icons/Mos.png'
import Ucup from '../../../icons/Ucup.png'

const BrandCategory = () => {
  return (
    <section className="organizations">
      <div className="organizations-container">
        <div className="section-content">
          <div className="organization">
            <img src={Starbucks} alt="" className="organization-logo" />
          </div>
          <div className="organization">
            <img
              src={Mcdonalds}
              alt=""
              className="organization-logo"
            />
          </div>

          <div className="organization">
            <img src={Kfc} alt="" className="organization-logo" />
          </div>

          <div className="organization sevenlogo">
            <img src={SevenEleven} alt="" className="organization-logo" />
          </div>

          <div className="organization">
            <img src={FamilyMart} alt="" className="organization-logo" />
          </div>

          <div className="organization">
            <img src={HiLife} alt="" className="organization-logo" />
          </div>

          <div className="organization">
            <img
              src={Mos}
              alt=""
              className="organization-logo"
            />
          </div>

          <div className="organization">
            <img
              src={Ucup}
              alt=""
              className="organization-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCategory;

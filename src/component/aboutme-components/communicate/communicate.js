import React from "react";
import './communicate.css'
import Handsphone from '../../../img/aboutme_image/communicate.png' 
import { Link } from "react-router-dom";

const Communicate = () => {
  return (
    <>
      <section class="communicate">
        <div class="communicate-container">
          <div class="section-content flex-column">
            <div class="communicate-body">
              <div class="communicate-body-item">
                <h4 class="section-head-title communicate-head-title">
                  Communicate Better
                </h4>
                <h2 class="section-title">
                  開始使用循環杯吧！
                </h2>
                <p class="section-desc">
                讓實踐永續的您也能放心再續一杯！
                </p>
                <p class="section-head-title">
                Huanbai的努力，是希望可以為消費者創造更好的選擇，更好的環境以及更好的未來。在同個土地上的我們，沒有人可以置身事外，希望大家一起與我們攜手前進！  <br></br> <br></br>
你準備好開始使用循環杯了嗎？
                </p>
                <Link to="/map" className="rwd_linkBtn">
                                    <div className="btn-aboutUs">
                                        <div className="btn_text">前往循環杯地圖</div>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </Link>
              </div>
              <div class="communicate-body-item communicate-img">
                <img
                  src={Handsphone}
                  alt=""
                />
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Communicate;

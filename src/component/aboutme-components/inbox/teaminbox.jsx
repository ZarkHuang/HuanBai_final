import React from "react";
import './teaminbox.css'
import Evnc from '../../../img/aboutme_image/evnc.svg'
import Numbercount from "../numbercount/numbercount";



const TeaminBox = () => {
  return (
    <section class="team-inbox">
      <div class="teaminbox-container ">
        <div class="section-content">
          <div class="team-img">
            <img
              src={Evnc}
              alt=""
            />
            <p class="litttttt">
            「HuanBai」是來自不同背景的成員所組成，雖然有各自不同的專業領域，但我們想要為環境盡一份心力的目標是一致的，希望可以透過環保杯租借，重新改變消費者的思維，喝飲料的同時也可以減輕環境的負擔。
            </p>
          </div>
          <div class="team-text">
            <h4 class="section-head-title team-head-title">Brand Appeal</h4>
            <h2 class="section-title">我們的理念</h2>
            <p class="section-desc">
            台灣是個手搖飲料王國，我們的手搖飲料文化揚名國際，珍珠奶茶成為了國際之光，而這個國際之光的背後，我們付出的卻是龐大的垃圾處理代價！ 免洗垃圾對我們環境造成龐大負擔，所以我們想要為這個環境作出一些改變。
            </p>
            <div class="team-card">
              <div class="team-card-head">
              臺灣估計一年消耗 30 億根一次性吸管、20 億個一次性飲料杯，無論材質，都只會在使用幾個小時之後就成為垃圾。
                <strong>容器租借服務</strong>
                讓飲料杯可以循環利用，達到源頭減量的目的。
              </div>
            </div>
          </div>
        </div>
      </div>
      <Numbercount />
    </section>
  );
};

export default TeaminBox;

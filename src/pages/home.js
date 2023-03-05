import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"
import ToTop from "../component/ToTop";
import Scroll from "../component/Scroll";
// import NavBar from "../component/NavBar";
// import Footer from "../component/Footer";
import decDot1 from "../img/index/decSpan/decDot1.svg"
import decDot2 from "../img/index/decSpan/decDot2.svg"
import decDot3 from "../img/index/decSpan/decDot3.svg"
import decDot4 from "../img/index/decSpan/decDot4.svg"
import decDot5 from "../img/index/decSpan/decDot5.svg"
import decDot6 from "../img/index/decSpan/decDot6.svg"
import decDot7 from "../img/index/decSpan/decDot7.svg"
import decDot8 from "../img/index/decSpan/decDot8.svg"
import decDot9 from "../img/index/decSpan/decDot9.svg"
import bannerImg from "../img/index/bannerImg.svg"
import aboutUs1 from "../img/index/aboutUs-img1.jpg"
import aboutUs2 from "../img/index/aboutUs-img2.jpg"
import aboutUs3 from "../img/index/aboutUs-img3.jpg"
import aboutUs4 from "../img/index/aboutUs-img4.jpg"
import aboutUs5 from "../img/index/aboutUs-img5.jpg"
import btnMore from "../img/index/btn-more.svg"
import imgPhone from "../img/index/img-phone.svg"


function Home(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
   
    return(
        <div>
        {/* // <!-- 首頁最外層 --> */}
        <div className="indexBox">
            <div className="test">
                <ToTop />
            {/* 首頁banner */}
            <div className="headerWrap">
                {/* <!-- scroll --> */}
                <Scroll />
                <div className="container">
                        {/* <!-- 導覽列菜單 --> */}         
                            {/* <NavBar />                    */}
                    <div className="headerWrap_banner">
                    <span className="decDot decDot1 animate__animated animate__zoomIn"><img src={decDot1}/></span>
                        <div className="visualBox" data-aos="fade-up" data-aos-duration="1000">
                            <div className="visualBox_slogan">環唄！循環杯<br />建立友善生活圈 </div>
                            <div className="visualBox_text">Search Bar Information <br />for friendly life</div>
                        </div>
                        <div className="bannerImg">
                            <img className="decImg" src={bannerImg}/>
                            <div className="decBox animate__animated animate__zoomIn">
                            
                            <span className="decDot decDot2"><img src={decDot2}/></span>
                            <span className="decDot decDot3"><img src={decDot3}/></span>
                            <span className="decDot decDot4"><img src={decDot4}/></span>
                            <span className="decDot decDot5"><img src={decDot5}/></span>
                            <span className="decDot decDot6"><img src={decDot6}/></span>
                            <span className="decDot decDot7"><img src={decDot7}/></span>
                            <span className="decDot decDot8"><img src={decDot8}/></span>
                            <span className="decDot decDot9"><img src={decDot9}/></span>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* <!-- 地圖區塊 --> */}
            <div className="mapBox_wrap">
                <div className="imgBg">

                </div>
                <div className="container">
                    <div className="mapBox_wrap_content" data-aos="fade-up"  data-aos-duration="1200">
                        <div className="searchMap_box" >
                            <div className="searchMap_item">
                                <label htmlFor="cityBox">所在縣市</label>
                                <select name="" id="cityBox" className="form-select form-select-sm">
                                    <option defaultValue>不拘</option>
                                    <option value="Taichung">台中市</option>
                                    <option value="Taipei">台北市</option>
                                    <option value="Tainan">台南市</option>
                                </select>
                            </div>
                            <span className="divider"></span>
                            <div className="searchMap_item">
                                <label htmlFor="cityBox">地區</label>
                                <select name="" id="cityBox" className="form-select form-select-sm">
                                    <option defaultValue>不拘</option>
                                    <option value="Taichung">豐原區</option>
                                    <option value="Taipei">南區</option>
                                    <option value="Tainan">北區</option>
                                </select>
                            </div>
                            <span className="divider"></span>

                            <div className="searchMap_item">
                                <label htmlFor="brandBox">店家</label>
                                <select name="" id="brandBox" className="form-select form-select-sm">
                                    <option defaultValue>不拘</option>
                                    <option value="1">專屬循環杯</option>
                                    <option value="2">好盒器</option>
                                    <option value="3">塑還真</option>
                                    <option value="4">uCup</option>
                                </select>
                         
                            </div>

                            <div className="ico-search">
                                <Link to="/map">
                                    <span className="text">搜尋</span>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                               </Link>
                            </div>


                        </div>
                        <div className="mapBox_intro">
                            <div className="mapBox_intro_text">
                            歡迎使用Huanbai循環杯搜尋地圖！我們提供全台各地循環杯據點，方便您隨時隨地找到附近的環保杯可使用。

您可以快速查找您所在縣市及地區的循環杯據點，並輕鬆前往使用，讓您的環保行動更加便利。
<br/>
使用循環杯是一個小小的行動，但可以帶來重大的環保效益。現在就加入我們，一起用行動改變環境！
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            {/* <!-- 關於我們 --> */}
            <div className="aboutUs_wrap">
                <div className="aboutUs_textBox textBox" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200">
                    <div className="aboutUs_EN subTitle">About Us</div>
                    <div className="aboutUs_title mainTitle">環唄！的理念</div>
                </div>
                <div className="aboutUsBox">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 imgDiv">
                                <div className="imgBox">
                                    <div className="img-aboutUs imgAB1" data-aos="zoom-in-right" data-aos-duration="1500"><img src={aboutUs1} alt="" />
                                    </div>
                                    <div className="img-aboutUs imgAB2" data-aos="zoom-in"  data-aos-delay="200" data-aos-duration="2000"><img src={aboutUs2} alt="" />
                                    </div>
                                    <div className="img-aboutUs imgAB3" data-aos="zoom-in-left" data-aos-duration="1500"><img src={aboutUs3} alt="" />
                                    </div>
                                    <div className="img-aboutUs imgAB4" data-aos="zoom-in-right" data-aos-duration="2000"><img src={aboutUs4} alt="" />
                                    </div>
                                    <div className="img-aboutUs imgAB5" data-aos="zoom-in-left" data-aos-duration="1500"><img src={aboutUs5} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1">
                            </div>
                            <div className="col-lg-5" data-aos="fade-up" data-aos-duration="1200">

                                <div className="aboutUs_content">
                                Huanbai致力於推廣循環杯，減少一次性塑膠垃圾的使用<br />
                                鼓勵我們每個人建立在日常的一個生活小習慣<br />
                                我們相信透過一個小小的行動，每個人都能夠發揮自己的力量<br/>
                                讓我們從自己做起，一起建立更環保<br />
                                更可持續的社會，為地球的環境盡一份心力。<br />

                                一個舉動，就能有效保護海洋生物和永續環境！


                           
                                </div>
                            <Link to="/brand" className="rwd_linkBtn">
                                
                                    <div className="btn-aboutUs">
                                        <div className="btn_text">未來發展規劃</div>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- 服務－循環懶人包 --> */}
            <div className="service_wrap">
                <div className="serviceBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="service_textBox textBox" data-aos="fade-right" data-aos-duration="1200"> 
                                    <div className="service_EN subTitle">Service</div>
                                    <div className="service_title mainTitle">循環懶人包</div>
                                </div>
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="service_content" >
                                我們也提供循環懶人包，整理多家循環杯租借服務的資訊，方便使用者進行比較，快速找到符合自己需求的循環杯租借方案。
                                <br/>透過懶人包查看各家循環杯租借的品牌、租賃方式等詳細資。讓租借循環杯更加方便。
                                </div>
                                <Link to="/fordummies" className="rwd_linkBtn">
                                    <div className="btn-service">
                                        <div className="btn_text">比較各家循環杯資訊</div>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                               
                                </Link>
                            </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6">
                                <div className="imgPhone" data-aos="zoom-in" data-aos-duration="1200">
                                   <img src={imgPhone} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- 相關消息 --> */}
            <div className="news_wrap">
                <div className="container">
                    <div className="news_textBox textBox" data-aos="fade-right" data-aos-duration="1200">
                        <div className="news_EN subTitle">News</div>
                        <div className="news_title mainTitle">相關消息</div>
                    </div>
                    <div className="row">

                        <div className="col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                       <Link to="news/5" className="itemA1">                        
                                <div className="news_item">
                                    <div className="news_item_bg itemBg1">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                    -News-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                國外共享杯流行
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                        自2018年台灣宣布擴大限制一次性塑膠製品，至今已4年，隨著台北市將在今年12月全面禁用一次性飲料杯，已推行一段時間的「共享飲料杯」似乎就成了環保與方便並存的好選擇。
                                        </div>
                                        <span className="news_item_divid"></span>
                                        <div className="news_item_add">
                                            <div className="date">2023.02.15</div>
                                            <span>|</span>
                                            <div className="type">news</div>
                                        </div>
                                        <div className="moreBox">

                                            <div className="btn-more">
                                                MORE <img src={btnMore} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                        <Link to="news/6" className="itemA2"> 
                                <div className="news_item">
                                    <div className="news_item_bg itemBg2">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                -Article-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                五種方式輕鬆減塑
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                        在當今社會，可持續發展是一個非常熱門的話題。這是因為人們越來越關注環境問題，並希望尋找更環保和可持續的生活方式。在這篇文章中，我們將介紹可持續發展的概念，
                                        </div>
                                        <span className="news_item_divid"></span>
                                        <div className="news_item_add">
                                            <div className="date">2023.02.15</div>
                                            <span>|</span>
                                            <div className="type">Article</div>
                                        </div>
                                        <div className="moreBox">

                                            <div className="btn-more">
                                                MORE <img src={btnMore} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                        <Link to="news/7" className="itemA3"> 
                                <div className="news_item">
                                    <div className="news_item_bg itemBg3">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                    -Article-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                循環杯新制
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                        2023年元旦起，將有5%連鎖便利商店、連鎖速食店須提供循環杯借用服務，環保署今天（22日）公布「外借杯良好服務標誌」，符合「循環（外借）杯良好服務指引」的店家可申請標誌，讓民眾可輕鬆辨識、安心借用，統一超商、摩斯漢堡、麥當勞及肯德基已搶先通過審核獲得標誌。
                                        </div>
                                        <span className="news_item_divid"></span>
                                        <div className="news_item_add">
                                            <div className="date">2023.02.15</div>
                                            <span>|</span>
                                            <div className="type">Article</div>
                                        </div>
                                        <div className="moreBox">

                                            <div className="btn-more">
                                                MORE <img src={btnMore} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                           </Link>
                        </div>

                        <div className="col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                        <Link to="news/4" className="itemA4"> 
                                <div className="news_item">
                                    <div className="news_item_bg itemBg4">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                    -News-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                全台消耗40億飲料杯
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                        國人喝「珍珠奶茶」的風氣盛行，手搖飲產業更是揚名國際，不過環保署最新統計，我國每年用掉的一次性飲料杯高達40億個，成為回收體系不可忽視的重擔。
                                        </div>
                                        <span className="news_item_divid"></span>
                                        <div className="news_item_add">
                                            <div className="date">2023.02.15</div>
                                            <span>|</span>
                                            <div className="type">News</div>
                                        </div>
                                        <div className="moreBox">

                                            <div className="btn-more">
                                                MORE <img src={btnMore} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                </Link>
                        </div>
                        <div className="col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                        <Link to="news/3" className="itemA5"> 
                                <div className="news_item">
                                    <div className="news_item_bg itemBg5">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                    -Article-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                減少能源消耗
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                        在這個日益關注環保的社會中，人們開始關注自己的生活方式對環境的影響。其中一個方面是減少使用一次性產品，特別是一次性杯子，因為它們對環境造成的垃圾量非常大。
                                        </div>
                                        <span className="news_item_divid"></span>
                                        <div className="news_item_add">
                                            <div className="date">2023.02.15</div>
                                            <span>|</span>
                                            <div className="type">Article</div>
                                        </div>
                                        <div className="moreBox">

                                            <div className="btn-more">
                                                MORE <img src={btnMore} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                </Link>
                        </div>
                        <div className="col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                        <Link to="news/2" className="itemA6"> 
                                <div className="news_item">
                                    <div className="news_item_bg itemBg6">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                    -News-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                循環杯新制2023年
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                        2023年元旦起，將有5%連鎖便利商店、連鎖速食店須提供循環杯借用服務，環保署今天（22日）公布「外借杯良好服務標誌」，符合「循環（外借）杯良好服務指引」
                                        </div>
                                        <span className="news_item_divid"></span>
                                        <div className="news_item_add">
                                            <div className="date">2023.02.15</div>
                                            <span>|</span>
                                            <div className="type">news</div>
                                        </div>
                                        <div className="moreBox">

                                            <div className="btn-more">
                                                MORE <img src={btnMore} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">


                    </div>
                </div>
            </div>
            {/* <!-- 與我們聯絡 --> */}
            <div className="contactUs_wrap">
                <div className="container">


                    <div className="contactUs_textBox textBox" data-aos="fade-up" data-aos-duration="1200">
                        <div className="contactUs_EN subTitle">Contact Us</div>
                        <div className="contactUs_title mainTitle">與我們聯絡</div>

                    </div>
                    <div className="contactUs_Box">
                        <div className="contactUs_imgBox" data-aos="zoom-in" data-aos-duration="1200">
                            <div className="imgBox_textBox">

                                <div className="imgBox_textBox_sub">
                                    租借循環杯
                                </div>
                                <div className="imgBox_textBox_title">
                                    建立友善生活圈
                                </div>
                            </div>
                        </div>
                        <div className="contactUs_content">
                            <div className="contactUs_content_text" data-aos="fade-up" data-aos-duration="1200">
                                循環杯可以說是有著成為常識的趨勢。<br/>都能了解環保循環杯的重要性。荷馬在不經意間這樣說過，惟仁德才能永遠屹立不搖。希望大家實際感受一下這段話。儘管如此，別人往往卻不這麼想。比才說富有哲理的話，如果你要知道一個人的價值，就得計算他裡面有什麼，而不在於他身上有什麼。
                            </div>
                            <Link to="/contactUs" className="rwd_linkBtn" data-aos="fade-up" data-aos-duration="1200">
                                <div className="btn-contactUs">
                                    <div className="btn_text">詳細洽談資訊</div>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
            </div>
        </div>
            {/* <Footer /> */}
       </div>
    );

}


export default Home;
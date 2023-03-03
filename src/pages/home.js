import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
// import "../style/home/home.css";
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
                            <div className="visualBox_text">Search Bar Information for friendly life</div>
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
                                <a href="#">
                                    <span className="text">搜尋</span>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </a>
                            </div>


                        </div>
                        <div className="mapBox_intro">
                            <div className="mapBox_intro_text">
                                循環杯究竟是怎麼樣的存在，始終是個謎題。潘恩在不經意間這樣說過，名氣，是世上所有男人跟女人對我的評價;
                                品格是上帝跟天使對我們的認識與了解。這讓我的思緒清晰了。我們不妨可以這樣來想:
                                蘭格倫說過一句很有意思的話，幽雅是上帝的禮物，而智慧則是天賜的機遇。這句話把我們帶到了一個新的維度去思考這個問題。
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
                                    循環杯可以說是有著成為常識的趨勢。<br />都能了解環保
                                    循環杯的重要性。荷馬在不經意間這樣說過，惟仁德才能永遠屹立不搖。<br />希望大家實際感受一下這段話。<br />儘管如此，別人往往卻不這麼想。比才說<br />富有哲理的話，如果你要知道一個人的價值，就得計算他裡面有什麼，而不在於他身上有什麼。
                                </div>

                                <a href="#" className="rwd_linkBtn">
                                    <div className="btn-aboutUs">
                                        <div className="btn_text">未來發展規劃</div>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </a>
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
                                    循環杯究竟是怎麼樣的存在，始終是個謎題。潘恩在不經意間這樣說過，名氣，是世上所有男人跟女人對我的評價;
                                    品格是上帝跟天使對我們的認識與了解。這讓我的思緒清晰了。我們不妨可以這樣來想:
                                    蘭格倫說過一句很有意思的話，幽雅是上帝的禮物，而智慧則是天賜的機遇。這句話把我們帶到了一個新的維度去思考這個問題。
                                </div>
                                <a href="#" className="rwd_linkBtn">
                                    <div className="btn-service">
                                        <div className="btn_text">比較各家循環杯資訊</div>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </a>
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
                            <a href="#" className="itemA1">
                                <div className="news_item">
                                    <div className="news_item_bg itemBg1">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                    -news-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                    新加入據點
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                            我們不妨可以這樣來想: 蘭格倫說過一句很有意思的話，幽雅是上帝的禮物，而智慧則是天賜的機遇。
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
                            </a>
                        </div>
                        <div className="col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                            <a href="#" className="itemA2">
                                <div className="news_item">
                                    <div className="news_item_bg itemBg2">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                    -news-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                    循環怎麼來？
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                            我們不妨可以這樣來想: 蘭格倫說過一句很有意思的話，幽雅是上帝的禮物，而智慧則是天賜的機遇。
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
                            </a>
                        </div>
                        <div className="col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                            <a href="#" className="itemA3">
                                <div className="news_item">
                                    <div className="news_item_bg itemBg3">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                    -news-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                    三月特報活動
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                            我們不妨可以這樣來想: 蘭格倫說過一句很有意思的話，幽雅是上帝的禮物，而智慧則是天賜的機遇。
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
                            </a>
                        </div>

                        <div className="col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                            <a href="#" className="itemA4">
                                <div className="news_item">
                                    <div className="news_item_bg itemBg4">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                    -vote-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                    會員期望功能
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                            我們不妨可以這樣來想: 蘭格倫說過一句很有意思的話，幽雅是上帝的禮物，而智慧則是天賜的機遇。
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
                            </a>
                        </div>
                        <div className="col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                            <a href="#" className="itemA5">
                                <div className="news_item">
                                    <div className="news_item_bg itemBg5">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                    -vote-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                    希望在哪開據點
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                            我們不妨可以這樣來想: 蘭格倫說過一句很有意思的話，幽雅是上帝的禮物，而智慧則是天賜的機遇。
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
                            </a>
                        </div>
                        <div className="col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                            <a href="#" className="itemA6">
                                <div className="news_item">
                                    <div className="news_item_bg itemBg6">
                                        <div className="news_item_textBox_wrap">
                                            <div className="news_item_textBox">
                                                <div className="news_item_textBox_type">
                                                    -vote-
                                                </div>
                                                <div className="news_item_textBox_title">
                                                    哪家飲料好喝
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="news_item_content">
                                        <div className="news_item_intro">
                                            我們不妨可以這樣來想: 蘭格倫說過一句很有意思的話，幽雅是上帝的禮物，而智慧則是天賜的機遇。
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
                            </a>
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
                            <a href="#" className="rwd_linkBtn" data-aos="fade-up" data-aos-duration="1200">
                                <div className="btn-contactUs">
                                    <div className="btn_text">詳細洽談資訊</div>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </a>
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
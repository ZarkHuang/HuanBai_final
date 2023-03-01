import decoPot1 from "../img/evnIntro/decoPot/decoPot1.svg";
import decoPot2 from "../img/evnIntro/decoPot/decoPot2.svg";
import decoPot3 from "../img/evnIntro/decoPot/decoPot3.svg";
import decoPot4 from "../img/evnIntro/decoPot/decoPot4.svg";
import imgEvnIntro from "../img/evnIntro/img-evnIntro.svg";
import imgEvnCupIll from "../img/evnIntro/img-evnCupIll.svg";
import decoBg1 from "../img/evnIntro/needBox-deco1.svg";
import decoBg2 from "../img/evnIntro/needBox-deco2.svg";
import whitePot1 from "../img/evnIntro/decoPot/decoPot_white1.svg";
import whitePot2 from "../img/evnIntro/decoPot/decoPot_white2.svg";
import whitePot3 from "../img/evnIntro/decoPot/decoPot_white3.svg";
import needTextDeco from "../img/evnIntro/needBox-textDeco.svg";
import benefitsDeco from "../img/evnIntro/benefitsBg-deco.svg";
import benefitsIcon from "../img/evnIntro/benefits-Icon.svg";
import shop711 from "../img/evnIntro/shop-711.svg";
import shopMD from "../img/evnIntro/shop-MD.svg";
import shopMB from "../img/evnIntro/shop-MB.svg";
import shopKFC from "../img/evnIntro/shop-KFC.svg";


function EvnIntro(){

    return(
        <div className="evnIntro">
            {/* 循環杯是什麼 */}
        <div className="evnIntroBox">
            <div className="container">
    
                <div className="row evnIntro-row">
                    <div className="col-lg-5">
                        <div className="evnIntro_l-left">
                            <div className="textBox">
                                <div className="subTitle">Introduction</div>
                                <div className="mainTitle">循環杯是什麼？</div>
                            </div>
                            <div className="contentText">
                                循環杯又稱外借杯，提供於飲品購買的熱門地點，像是咖啡廳、手搖飲店、便利商店等，讓消費者外帶飲品時可以租借循環杯使用、甲地乙還，透過租借、歸還、回收、清洗、再使用機制，達到「減塑、愛環境」的目標。
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                    <div className="evnIntro_l-right">
                        <img className="decoPot decoPot1" src={decoPot1} />
                        <div className="evnIntro_imgBox">
                            <img className="img-evnIntro" src={imgEvnIntro} />
                            <img className="img-evnCupIll" src={imgEvnCupIll} />
                        </div>
                        <img className="decoPot decoPot2" src={decoPot2} />
                        <img className="decoPot decoPot3" src={decoPot3} />
                        <img className="decoPot decoPot4" src={decoPot4} />
                    </div>
                </div>
                </div>
              
    
            </div>
    
        </div>
            {/* 為什麼需要循環杯 */}
        <div className="needBox">
            <div className="needBox_bg">
                <img className="decoBg1" src={decoBg1} />
              <div className="container">
              <div className="textBox">
                        <div className="subTitle">Why is it needed</div>
                        <div className="mainTitle">為什麼需要循環杯</div>
                    </div>
              </div>
                <img className="decoBg2" src={decoBg2} />
            </div>
            <div className="container">
                   
                    <div className="needBox_introWrap">
                    
    
                        <img className="whitePot1" src={whitePot1} />
                        <div className="needBox_content">
                            <img className="needBox_content_textDeco" src={needTextDeco} />
                            <div className="needBox_textBox">
                                <div className="needBox_textBox_title">減少塑膠污染</div>
                                <div className="needBox_textBox_text">
                                    塑膠是一種難以分解的材料，對環境造成極大的污染。一次性使用的塑膠飲料杯更是大量使用且易於產生，造成嚴重的塑膠污染問題。使用循環杯可以減少大量塑膠杯的使用，有效降低環境污染。
                                </div>
                            </div>
                            <div className="needBox_textBox">
                                <div className="needBox_textBox_title">提高資源回收利用率</div>
                                <div className="needBox_textBox_text">
                                    循環杯可重複使用，使用壽命長，相對於一次性使用的塑膠杯來說，能夠更好地提高資源回收利用率。此外，在的生產也相對較為環保，生產過程中能夠更有效地利用資源，減少能源消耗。
                                </div>
                            </div>
                        </div>
                        <img className="whitePot2" src={whitePot2} />
                        <img className="whitePot3" src={whitePot3} />
                    </div>

                </div>
        </div>
         {/* 如何開始 */}
        <div className="startBox">
            <div className="container">
                <div className="textBox">
                    <div className="subTitle">How to start</div>
                    <div className="mainTitle">如何開始</div>
                </div>
            </div>
        </div>
         {/* 經濟效益 */}
        <div className="benefitsBox">
            <div className="benefitsBox_bg">
                
                <div className="container">
                <div className="textBox">
                        <div className="subTitle">Benefits</div>
                        <div className="mainTitle">經濟效益</div>
                    </div>
                </div>
                <img className="benefitsBox_bg-deco" src={benefitsDeco} />
            </div>
                <div className="container">
                 
                    <div className="benefits_list">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="benefits_item">
                                    <div className="benefits_item_bg bgImg1"></div>
                                    <div className="benefits_item_content">
                                        <div className="benefits_item_title">降低原物料的開採需求</div>
                                        <div className="benefits_item_text">廢棄物轉化為可再生資源，減少對原物料的開採需求。這不僅有助於保護自然生態，還可以減少環境和社會成本。
                                        </div>
                                    </div>
                                    <img className="ico-benefits" src={benefitsIcon} />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="benefits_item">
                                    <div className="benefits_item_bg bgImg2"></div>
                                    <div className="benefits_item_content">
                                        <div className="benefits_item_title">減少環境汙染問題</div>
                                        <div className="benefits_item_text">減少垃圾的堆放和焚燒產生的污染，改善空氣和水質，保護生態環境的健康和持續性，提高綠色就業和經濟增長。
                                        </div>
                                    </div>
                                    <img className="ico-benefits" src={benefitsIcon} />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="benefits_item">
                                    <div className="benefits_item_bg bgImg3"></div>
                                    <div className="benefits_item_content">
                                        <div className="benefits_item_title">循環流程減少溫室氣體排放</div>
                                        <div className="benefits_item_text">循環利用的過程中，減少溫室氣體的排放並促進可再生能源的發展和應用，提高人類的生活質量和健康。</div>
                                    </div>
                                
                                <img className="ico-benefits" src={benefitsIcon} />
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>

        </div>
       {/* 政策支持 */}
        <div className="policyBox">
            <div className="container">
                <div className="row policy-row">
                    <div className="col-lg-5">
                        <div className="policy_textWrap">
                        <div className="textBox">
                            <div className="subTitle">Policy Support</div>
                            <div className="mainTitle">政策支持</div>
                        </div>
                        <div className="policy_Intro">
                            環保署10月31日發布「循環（外借）杯良好服務指引」，讓業者參考依循，未來消費者也只要透過辨認「特定標誌」，就能安心選擇租借。
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="policy_list">
                            <div className="policy_item">
                                <img src={shop711}/>
                            </div>
                            <div className="policy_item">
                                <img src={shopMD} />
                            </div>
                            <div className="policy_item">
                                <img src={shopMB}/>
                            </div>
                            <div className="policy_item">
                                <img src={shopKFC}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default EvnIntro;
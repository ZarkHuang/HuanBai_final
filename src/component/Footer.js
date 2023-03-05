import { Link } from 'react-router-dom';
import footerLogo from "../img/index/footerLogo.svg"
function Footer(){
    return(
        <footer>
        <div className="container">
            <div className="row footerRow">
                <div className="col-lg-4 col-md-12 footerRwd_wrap-1">
                    <div className="socialWrap">
                        <img src={footerLogo} />
                        <ul className="socialList">

                            <li className="socialList_item ico-ig">
                                <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li className="socialList_item ico-fb">
                                <a href="">
                                    <i className="fab fa-facebook-f"></i></a>
                            </li>

                        </ul>
                    </div>
                    <div className="copyrightBox">
                        ©︎2023 環唄！Huanbai
                    </div>

                </div>
                <div className="col-lg-8 col-md-12 footerRwd_wrap-2">
                    <ul className="footerNav">
                        <li className="footerNav_item">
                            <Link to="/brand">關於我們</Link>
                        </li>
                        <li className="footerNav_item">
                        <Link to="/map">循環地圖</Link>
                            
                        </li>
                        <li className="footerNav_item">
                        <Link to="/evnIntro">關於循環杯</Link>
                           
                        </li>
                        <li className="footerNav_item">
                        <Link to="/shop">線上商店</Link>
                            
                        </li>
                        <li className="footerNav_item">
                        <Link to="/votes">投票專區</Link>
                        </li>
                        <li className="footerNav_item">
                        <Link to="/gologin">會員專區</Link>
                        </li>
                    </ul>
                    <div className="termsBox">
                        <div className="termsBox_item ft_copyrightBox">
                            ©︎2023 環唄！Huanbai
                        </div>
                        <div className="termsBox_item">
                            <a href="#">隱私政策</a>
                        </div>
                        <div className="termsBox_item">
                            <a href="#">服務條款</a>
                        </div>
                        <div className="termsBox_item">
                            <a href="#">Cookie政策</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>


         </footer>
    );
    };
    
    export default Footer;
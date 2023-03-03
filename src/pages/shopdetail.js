import { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


import cupd1 from "../img/shop/cupd1.jpg";
import cupd2 from "../img/shop/cupd2.jpg";
import cupd3 from "../img/shop/cupd3.jpg";
import cupd4 from "../img/shop/cupd4.webp";

function Shopdetail() {

    const [mainImg, setMainImg] = useState(cupd4);

    function handleSmallImgClick(event) {
        const { src } = event.target;
        setMainImg(src);
    }

    const prevImg = mainImg === cupd1 ? cupd4 : mainImg === cupd2 ? cupd1 : mainImg === cupd3 ? cupd2 : cupd3;
    const nextImg = mainImg === cupd1 ? cupd2 : mainImg === cupd2 ? cupd3 : mainImg === cupd3 ? cupd4 : cupd1;

    return (
        <div className="shopcontainer">

            <div id="toCart">

                <div className="background-button">
                    <span>
                        <Link to={`/shopdetail`} className="linkToShop">
                            <FontAwesomeIcon icon={faCartArrowDown} />
                        </Link>
                    </span>
                </div>
            </div>

            <section id="prodetails" className="section-p1">

                <div className="single-pro-image">


                    <div className="qqqq">



                        <div className="carousel-controls">
                            <button className="carousel-prev" onClick={() => setMainImg(prevImg)}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>

                            <button className="carousel-next" onClick={() => setMainImg(nextImg)}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>

                        <img src={mainImg} width="60%" id="MainImg" />



                    </div>



                    <div className="small-img-group">

                        <div className="small-img-col">
                            <img
                                className="small-img"
                                src={cupd4}
                                width="100%"
                                onClick={handleSmallImgClick}
                            />
                        </div>

                        <div className="small-img-col">
                            <img
                                className="small-img"
                                src={cupd1}
                                width="100%"
                                onClick={handleSmallImgClick}
                            />
                        </div>

                        <div className="small-img-col">
                            <img
                                className="small-img"
                                src={cupd2}
                                width="100%"
                                onClick={handleSmallImgClick}
                            />
                        </div>

                        <div className="small-img-col">
                            <img
                                className="small-img"
                                src={cupd3}
                                width="100%"
                                onClick={handleSmallImgClick}
                            />
                        </div>

                    </div>
                </div>


                <div className="single-pro-details">
                    <h6><b><Link to={`/shop`} ><span>自購杯</span>/</Link></b>客製</h6>
                    <h4>客製隨行杯350ml</h4>
                    <h2>售價 : NTD 150元</h2>
                    <select>
                        <option>商品顏色</option>
                        <option>米色</option>
                        <option>灰色</option>
                        <option>粉色</option>
                    </select>
                    <input type="number" value="1" />
                    <button className="normal">加入購物車</button>
                    <h4>商品資訊</h4>
                    <ul>
                        <li>材質 : 竹碳纖維</li>
                        <li>容量 : 350mL</li>
                        <br></br>
                        <br></br>
                        <br></br>
                    </ul>
                </div>
            </section>


        </div>

    );
}



export default Shopdetail;
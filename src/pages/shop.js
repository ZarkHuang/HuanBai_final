import cup1 from "../img/shop/cup1.jpg";
import straw2 from "../img/shop/straw2.png";
import cupcozy3 from "../img/shop/cupcozy3.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


function Shop() {


    return (

        <div className="container">

            {/* <div className="Shop"> */}
            <div id="toCart">

                <div className="background-button">
                    <span>
                        <Link to={`/cart`} className="linkToShop">
                            <FontAwesomeIcon icon={faCartArrowDown} />
                        </Link>
                    </span>
                </div>
            </div>


            <div className="herobox">
                <section id="shop-hero">
                    <span>自帶環保杯</span>
                    <p>Quality of life, starting from environmental protection!</p>
                </section>
            </div>

            <div className="product-box">
                <section className="section-p1" id="product1">
                    <div className="pro-container">

                        <div className="pro">
                            <span><Link to={`/shopdetail`} className="linkToVote">
                                <img className="imgbox1" src={cup1} alt="product-image"></img>
                                <div className="des">
                                    <span>客製</span>
                                    <h5>隨行杯350ml</h5>
                                    <h4>售價 : 150元</h4>
                                </div>
                            </Link></span>
                        </div>

                        <div className="pro">
                            <span><Link to={`/shopdetail`} className="linkToVote">
                                <img className="imgbox2" src={straw2} alt="product-image"></img>
                                <div className="des">
                                    <span>客製</span>
                                    <h5>環保吸管組</h5>
                                    <h4>售價 : 100元</h4>
                                </div>
                            </Link></span>
                        </div>

                        <div className="pro">
                            <img className="imgbox3" src={cupcozy3} alt="product-image"></img>
                            <div className="des">
                                <span>客製</span>
                                <h5>環保吸管組</h5>
                                <h4>售價 : 100元</h4>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="section-p2" id="pagination" >
                    <span><Link to={`/shopdetail`} className="linkToShop">1</Link></span>
                    <span><Link to={`/shopdetail`} className="linkToShop" >2</Link></span>
                    <span><Link to={`/shopdetail`} className="linkToShop"><FontAwesomeIcon icon={faArrowRight} /></Link></span>
                </section>
            </div>
        </div>

        // </div>
    );
};

export default Shop;


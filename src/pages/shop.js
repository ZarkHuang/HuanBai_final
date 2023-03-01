import cup1 from "../img/shop/cup1.jpg";
import straw2 from "../img/shop/straw2.png";
import cupcozy3 from "../img/shop/cupcozy3.jpg";


function Shop(){

    function handleClick() {
        window.location.href='singp.html';
    }

    return(

        <div className="Shop">
            <div className="herobox">
                <section id="shop-hero">
                    <span>自帶環保杯</span>
                    <p>Quality of life, starting from environmental protection!</p>
                </section>
            </div>

            <div className="product-box">
                <section className="section-p1"id="product1">
                    <div className="pro-container">

                        <div className="pro" onClick={handleClick}>
                            <img className="imgbox1" src={cup1} alt="product-image"></img>
                            <div className="des">
                            <span>客製</span>
                            <h5>隨行杯350ml</h5>
                            <h4>售價 : 150元</h4>
                            </div>
                        </div>

                        <div className="pro">
                            <img className="imgbox2" src={straw2} alt="product-image"></img>
                            <div className="des">
                            <span>客製</span>
                            <h5>環保吸管組</h5>
                            <h4>售價 : 100元</h4>
                            </div>
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

                <section className="section-p1" id="pagination" >
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#"><i className="fal fa-long-arrow-alt-right"></i></a>
                </section>
            </div>
        </div>
    );
};

export default Shop;


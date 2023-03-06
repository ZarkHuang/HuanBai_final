import { Link } from 'react-router-dom';
import cup1 from "../img/shop/cup1.jpg";
import straw2 from "../img/shop/straw2.png";
import cupcozy3 from "../img/shop/cupcozy3.jpg";


function Cart() {

    return (
        <div className="container">
            <section id="cart" class="section-p1">
            <table width="100%">
                <thead>

                    <tr>
                        <td>商品</td>
                        <td>名稱</td>
                        <td>顏色</td>
                        <td>金額</td>
                        <td>數量</td>
                        <td>移除</td>
                    </tr>

                </thead>

                <tbody>
                    <tr>
                        <td><img src={cup1} alt="隨行杯"></img></td>
                        <td>客製隨行杯350ml</td>
                        <td>米色</td>
                        <td>NTD 150元</td>
                        <td><input type="number" value="1"></input></td>
                        <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    </tr>

                    <tr>
                        <td><img src={straw2} alt="環保吸管"></img></td>
                        <td>環保吸管組</td>
                        <td>五入款</td>
                        <td>NTD 100元</td>
                        <td><input type="number" value="1"></input></td>
                        <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    </tr>

                    <tr>
                        <td><img src={cupcozy3} alt="飲料背袋"></img></td>
                        <td>客製飲料背袋</td>
                        <td>米色</td>
                        <td>NTD 100元</td>
                        <td><input type="number" value="1"></input></td>
                        <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                    </tr>

                </tbody>
            </table>
            </section>

            <hr></hr>

            <section id="cart-add" class="section-1">
            {/* <div id="coupon">
            </div> */}

            <div id="subtotal">
                <table>
                    <tr>
                        <td>運費 : 60元 </td>
                    </tr>
                    <tr>
                        <td>總額 : 350元</td>
                    </tr>
                </table>
                <button class="checkout"><span><Link to={`/checkout`} className="next" >下一步</Link></span></button>
            </div>

            </section>

        </div>
    );
};

export default Cart;
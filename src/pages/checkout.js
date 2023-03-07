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
                    </tr>

                </thead>

                <tbody>
                    <tr>
                        <td><img src={cup1} alt="隨行杯"></img></td>
                        <td>客製隨行杯350ml</td>
                        <td>米色</td>
                        <td>NTD 150元</td>
                        <td>1</td>
                    </tr>

                    <tr>
                        <td><img src={straw2} alt="環保吸管"></img></td>
                        <td>環保吸管組</td>
                        <td>五入款</td>
                        <td>NTD 100元</td>
                        <td>1</td>
                    </tr>

                    <tr>
                        <td><img src={cupcozy3} alt="飲料背袋"></img></td>
                        <td>客製飲料背袋</td>
                        <td>米色</td>
                        <td>NTD 100元</td>
                        <td>1</td>
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
                        <td>總額 : 410元</td>
                    </tr>

                    <tr>
                        <td>付款方式 :</td>
                        <td>
                                <label>
                                    <input type="radio" name="main-dish" value="1" checked></input>
                                    <span>貨到付款</span>
                                </label>
                        </td>

                        <td>
                                <label>
                                    <input type="radio" name="main-dish" value="2"></input>
                                    <span>信用卡</span>
                                </label>
                        </td>
                    </tr>
                </table>



            </div>

            <div class="form">

                <h1 className='heading'>收件人資訊</h1>
                {/* <p className='text'>訂購資訊</p> */}

                <input type="text" id="name" placeholder='收件人姓名 : '></input>
                <input type="text" id="phone" placeholder='收件人電話 : '></input>
                <input type="text" id="email" placeholder='收件人信箱 : '></input>
                <input type="text" id="address" placeholder='收件地址 : '></input>

                <select>
                        <option>發票選擇</option>
                        <option>電子發票</option>
                        <option>紙本發票</option>
                        <option>載具</option>
                        <option>發票捐贈</option>
                </select>

                

            </div>

            </section>

            <hr></hr>
            <div className='next-pay'>
            
            <button class="checkout"><span><Link to={`/pay`} className="next" >確認付款</Link></span></button>

            </div>

        </div>
    );
};

export default Cart;
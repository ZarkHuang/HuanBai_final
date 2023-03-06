import cup1 from "../../img/shop/cup1.jpg";
import straw2 from "../../img/shop/straw2.png";
import cupcozy3 from "../../img/shop/cupcozy3.jpg";
import '../../style/member/edisonPaymentCss.css';
import axios from "axios";
import { useEffect } from "react";



function PayMent() {

    useEffect=()=>{
        
    }

    var responseAuth = axios.get('http://localhost:3344/checkAuth',{withCredentials:true});
        console.log(responseAuth)
        if(responseAuth.data==="尚未登入"){
            alert("你還沒登入！即將轉移到登錄頁面")
            window.location="/gologin"
        }

    return (

    <div className="container">

       <p className="mt-5" style={{backgroundColor: '#F0F0F0'}}>訂單編號:#05463759</p>
       <section id="EdisonCart" class="section-p1">
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

        <tr className="border-top">
            <td>運費 : 60元 </td>
            <td>總額 : 410元</td>
        </tr>

        </tbody>
    </table>


    </section>


        </div>
    );
};

export default PayMent
/* import cup1 from "../../img/shop/cup1.jpg";
import straw2 from "../../img/shop/straw2.png";
import cupcozy3 from "../../img/shop/cupcozy3.jpg"; */
import '../../style/member/edisonPaymentCss.css';
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

function PayMent() {
    let alertDisplayed = false;
    
    useEffect(() => {
        async function checkAuth() {
            try {
                var responseAuth = await axios.get('http://localhost:3344/checkAuth',{withCredentials:true});
                console.log(responseAuth)
                if(responseAuth.data==="尚未登入" && !alertDisplayed) {
                    Swal.fire({
                        icon:'warning',
                        title:'尚未登入',
                        text:'即將為您跳轉到登入頁面',
                        timer: 1200,
                        onBeforeOpen: () => {
                          Swal.showLoading()
                          responseAuth = setInterval(() => {
                            Swal.getContent().querySelector('strong')
                              .textContent = Swal.getTimerLeft()
                          }, 100)
                        },
                        onClose: () => {
                          clearInterval(responseAuth)
                        }
                      }).then((result) => {
                        if (
                          result.dismiss === Swal.DismissReason.timer
                        ) {
                            window.location="/gologin"
                            this.hasAlerted = true 
                         
                        }
                      })
                }
            } catch (error) {
                console.log(error);
            }
        }
        checkAuth();
    }, []);
    return (
        <>
        <div className="row text-center">
            <p id='listTopic'>訂單記錄</p>
        </div>
        <div className="row text-center">
            <div className="col-12 "> 尚無訂單資訊</div>
        </div>
{/*     <div className="container">
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


        </div> */}
        </>
    );
};

export default PayMent
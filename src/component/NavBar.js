import logoImg from "../img/index/headerLogo.svg";

function NavBar(){
    
return(
  <div className="navBarBg">
  <div className="container navBarBox">
    <div className="headerWrap_top">
        <div className="row">
        <div className="col-lg-3 navMenu_box">
            <div className="header_logo">
                <img src={logoImg} />
            </div>
            {/* <!-- RWD漢堡選單 --> */}

            <div className="ico-navMenu_wrap">
                <div id="ico-navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav className="rwd_navMenu_box">
                <img className="rwd_navMenu_logo" src="./img/index/footerLogo.svg" alt="" />
                <ul className="rwd_navMenu">

                    <li className="rwd_navMenu_item">
                        <a href="/" className="rwd_navMenu_sub_item rwd_navMenu_item_a">首頁</a>
                    </li>

                    <li className="rwd_navMenu_item">
                        <a className="rwd_navMenu_sub_item rwd_navMenu_item_a">關於我們</a>
                        <ul className="rwd_navMenu_sub">
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-1</a></li>
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-2</a></li>
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-3</a></li>
                        </ul>
                    </li>
                    
                    <li className="rwd_navMenu_item">
                        <a className="rwd_navMenu_item_a">循環地圖</a>
                        <ul className="rwd_navMenu_sub">
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-1</a></li>
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-2</a></li>
                        </ul>

                    </li>
                    <li className="rwd_navMenu_item">
                        <a className="rwd_navMenu_item_a">什麼是循環杯</a>
                        <ul className="rwd_navMenu_sub">
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-1</a></li>
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-2</a></li>
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-3</a></li>
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-3</a></li>
                        </ul>
                    </li>
                    <li className="rwd_navMenu_item">
                        <a className="rwd_navMenu_item_a">循環懶人包</a>

                    </li>
                    <li className="rwd_navMenu_item">
                        <a className="rwd_navMenu_item_a">相關消息</a>
                        <ul className="rwd_navMenu_sub">
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-1</a></li>
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-2</a></li>
                            <li className="rwd_navMenu_sub_item"><a className="rwd_navMenu_item_a">測試頁面-3</a></li>
                        </ul>
                    </li>
                    <li className="rwd_navMenu_item">
                        <a className="rwd_navMenu_item_a" data-bs-toggle='modal' data-bs-target='#edison'>登入 | 註冊</a>

                    </li>
                </ul>
            </nav>
            {/* <!--//////////////////////--> */}

        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-7 navBarRow">
            <nav className="navBar_box">
                <ul className="navBar">

                    <li className="navBar_item">
                        <a href="#">關於我們</a>
                        <ul className="drop-menu">
                            <li className="drop-menu_item"><a href="/brand">品牌簡介</a></li>
                            <li className="drop-menu_item"><a href="/contactUs">與我們聯絡</a></li>                  
                        </ul>
                    </li>
                    <li className="navBar_item">
                        <a href="/map">循環地圖</a>
                    </li>
                    <li className="navBar_item">
                        <a href="#">關於循環杯</a>
                        <ul className="drop-menu">
                            <li className="drop-menu_item"><a href="/evnIntro">什麼是循環杯</a></li>
                            <li className="drop-menu_item"><a href="/lazyBag">循環懶人包</a></li>
                            <li className="drop-menu_item"><a href="/news">相關消息</a></li>
                            <li className="drop-menu_item"><a href="/psych">心理測驗</a></li>
                        </ul>
                    </li>
                    <li className="navBar_item">
                      <a href="/shop">線上商店</a>
          
                    </li>
                    <li className="navBar_item">
                      <a href="/votes">投票專區</a>
          
                    </li>
                
                    <li className="navBar_item">
                        <a href="/" data-bs-toggle='modal' data-bs-target='#edison'>會員專區</a>
                        <ul className="drop-menu">
                            <li className="drop-menu_item"><a href="/member">會員資訊</a></li>
                            <li className="drop-menu_item"><a href="/voteRecord">投票紀錄</a></li>
                            <li className="drop-menu_item"><a href="/order">訂單記錄</a></li>
                        </ul>
                    </li>
                    {/* <li className="navBar_item"><a href="#"  data-bs-toggle='modal' data-bs-target='#edison'>登入 | 註冊</a></li> */}
                </ul>
            </nav>
        </div>

        </div>
        {/* 註冊資料視窗 */}
        <div className=" modal fade" id="edison" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">

      <div className="modal-content rounded ">
        
        
        <button type="button" className=" btn-close  ms-auto me-1 mb-3 mt-1" data-bs-dismiss="modal" aria-label="Close" id="modalClose"></button>
        <div className="row g-0 mx-5 text-center">
          <div id="signinbtn" className="col-6 rounded">
            <p className="mt-3">登入</p>
          </div>
          <div id="signupbtn" className="col-6 rounded">
            <p className="mt-3">註冊</p>
          </div>
        </div>


        {/* <!-- 登入表單 --> */}
        <div className="modal-body mx-5" id="oop">
          <form >
            <div className="mb-3">
              <label className="form-label">帳號</label>
              <input type="text" name="name"  className="form-control" />
            </div>

            <div className="mb-3">
              <label  className="formn-label">密碼</label>
              <input type="password" name="password" className="form-control" />
            </div>
            <div className="row">
              <button className="btn col-12 col-sm-9 col-md-5 mx-auto btnSubmit">送出</button>

            </div>
          </form>
        </div>


       {/* <!--  註冊表單 --> */}
        <div className="modal-body mx-5" id="ooa">
          <form >
            <div className="mb-3">

              <label className="form-label">帳號</label>
              <input type="text" className="form-control" />

            </div>
            <div className="mb-3">
              <label  className="form-label">信箱</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label  className="form-label">密碼</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <label  className="form-label">密碼確認</label>
              <input type="password" className="form-control" />
            </div>
            <div className="row">
              <button type="submit" className="btn btnSubmit col-12 col-sm-9 col-md-5  mx-auto">送出</button>

            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
</div>


)
};

export default NavBar;
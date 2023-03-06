import { Link } from "react-router-dom";
import logoImg from "../img/index/headerLogo.svg";
import React, {  } from "react";
import axios from "axios";

function NavBar() {
  /* 登入頁面假資料宣告 */
  /* const [loginData, setLoginData] = useState({
    account: "",
    password: "",
  }); */

  /* 以下開始是登入頁面使用的function */
 /*  const accountLoginChange = (e) => {
    setLoginData({ ...loginData, account: e.target.value });
  };
  const passwordLoginChange = (e) => {
    setLoginData({ ...loginData, password: e.target.value });
  };
  const sendLoginDataClick = async () => {
    let chch = await axios.post(
      "http://localhost:3344/member/gologin ",
      loginData,
      { withCredentials: true }
    );
    console.log(chch);
    console.log(chch.data);
    if (chch.data === "noname") {
      alert("使用者不存在");
    } else if (chch.data === "wrongpair") {
      alert("密碼與帳號組合錯誤");
    } else if (chch.data === "ya") {
      alert("登入成功 帥小伙");
      window.location.href = "/finalCup/member/";
    }
  };
 */
  //* 註冊頁面假資料宣告 */
  /* const [registerData, setRegisterData] = useState({
    account: "your account",
    password: "",
    passwordCheck: "",
    userEmail: "write email",
  }); */
  /* 以下開始是註冊頁面使用的function */
  /* const accountRegisterChange = (e) => {
    setRegisterData({ ...registerData, account: e.target.value });
  };
  const passwordRegisterChange = (e) => {
    setRegisterData({ ...registerData, password: e.target.value });
  };
  const userEmailRegisterChange = (e) => {
    setRegisterData({ ...registerData, userEmail: e.target.value });
  };
  const passwordCheckRegisterChange = (e) => {
    setRegisterData({ ...registerData, passwordCheck: e.target.value });
  };
  const accountRegisterCheck = async () => {
    let setDataAccount = await axios.post(
      "http://localhost:3344/member/signupcheckname",
      registerData,
      { withCredentials: true }
    );
    if (setDataAccount.data === "gowrong") {
      alert("帳號重複");
    } else if (setDataAccount.data === "success") {
      alert("帳號可以使用");
    } else {
      alert("未知錯誤");
    }
  };
  const userEmailRegisterCheck = async () => {
    let setDataUserEmail = await axios.post(
      "http://localhost:3344/member/signupcheckemail",
      registerData,
      { withCredentials: true }
    );
    if (setDataUserEmail.data === "gowrong") {
      alert("信箱已經註冊過了");
    } else if (setDataUserEmail.data === "success") {
      alert("信箱可以使用");
    } else {
      alert("未知錯誤");
    }
  };
  const passwordRegisterCheck = async () => {
    let setDataPassword = await axios.post(
      "http://localhost:3344/member/signupcheckpassword",
      registerData,
      { withCredentials: true }
    );
    if (setDataPassword.data === "gowrong") {
      alert("密碼錯誤");
    } else if (setDataPassword.data === "success") {
      alert("密碼可以使用");
    } else {
      alert("未知錯誤");
    }
  };

  const sendRegisterDataClick = async () => {
    if (registerData.password === registerData.passwordCheck) {
      await axios.post("http://localhost:3344/member/signup", registerData, {
        withCredentials: true,
      });
      window.location = "http://localhost:3000/member/";
    } else {
      alert("兩次密碼不符合");
    }
  };
 */

  /* 這邊是確認是否登陸 */
  const checkIsItLoged = function () {
    if (document.cookie.length > 15) {
      return true;
    } else {
      console.log("nNONONONONONO");
      return false;
    }
  };
  const sendlogoutClick = async () => {
    let logoutRes = await axios.get("http://localhost:3344/logout", {
      withCredentials: true,
    });
    console.log(logoutRes.data);
    if (logoutRes.data === "登出成功") {
      alert("即將登出");
      window.location = "/";
    }
  };

  /*   const checkIfLog = function(){
    axios.get('http://localhost:3344/checkAuth',{withCredentials:true}).then((responseAuth)=>{
      console.log(responseAuth)
      if(responseAuth.data==="尚未登入"){
        console.log('not login yet')
        return "not"
        
      }
      if(responseAuth.data==="登入中"){
        console.log("logining");
        return "yes"
      }});
  } */
  /*  useEffect(()=>{
    axios.get('http://localhost:3344/checkAuth',{withCredentials:true}).then((responseAuth)=>{
      console.log(responseAuth)
      if(responseAuth.data==="尚未登入"){
        console.log('not login yet')
      }
      if(responseAuth.data==="登入中"){
        console.log('logining')
      }
    })
  },[]); */

  return (
    <div className="navBarBg">
      <div className="container navBarBox">
        <div className="headerWrap_top">
          <div className="row">
            <div className="col-lg-3 navMenu_box">
              <div className="header_logo">
                <Link to="/">
                  <img src={logoImg} />
                </Link>
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
                <Link to="/">
                  <img
                    className="rwd_navMenu_logo"
                    src="./img/index/footerLogo.svg"
                    alt=""
                  />
                </Link>

                <ul className="rwd_navMenu">
                  <li className="rwd_navMenu_item">
                    <Link
                      to="/"
                      className="rwd_navMenu_sub_item rwd_navMenu_item_a"
                    >
                      關於我們
                    </Link>
                    <ul className="rwd_navMenu_sub">
                      <li className="rwd_navMenu_sub_item">
                        <Link to="/brand" className="rwd_navMenu_item_a">
                          品牌簡介
                        </Link>
                      </li>
                      <li className="rwd_navMenu_sub_item">
                        <Link to="/contactUs" className="rwd_navMenu_item_a">
                          與我們聯絡
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="rwd_navMenu_item">
                    <Link to="/map" className="rwd_navMenu_item_a">
                      循環地圖
                    </Link>
                  </li>
                  <li className="rwd_navMenu_item">
                    <Link to="/" className="rwd_navMenu_item_a">
                      關於循環杯
                    </Link>
                    <ul className="rwd_navMenu_sub">
                      <li className="rwd_navMenu_sub_item">
                        <Link to="/evnIntro" className="rwd_navMenu_item_a">
                          什麼是循環杯
                        </Link>
                      </li>
                      <li className="rwd_navMenu_sub_item">
                        <Link to="/fordummies" className="rwd_navMenu_item_a">
                          循環懶人包
                        </Link>
                      </li>
                      <li className="rwd_navMenu_sub_item">
                        <Link to="/news" className="rwd_navMenu_item_a">
                          相關消息
                        </Link>
                      </li>
                      <li className="rwd_navMenu_sub_item">
                        <Link to="/psych" className="rwd_navMenu_item_a">
                          心理測驗
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="rwd_navMenu_item">
                    <Link to="/shop" className="rwd_navMenu_item_a">
                      線上商店
                    </Link>
                  </li>
                  <li className="rwd_navMenu_item">
                    <Link to="/votes" className="rwd_navMenu_item_a">
                      投票專區
                    </Link>
                  </li>
                  <li className="rwd_navMenu_item">
                    {checkIsItLoged() ? (
                      <Link to="/member/" className="rwd_navMenu_item_a">
                        會員專區
                      </Link>
                    ) : (
                      <Link to="/gologin" className="rwd_navMenu_item_a">
                        會員登入
                      </Link>
                    )}
                    <ul className="rwd_navMenu_sub">
                      <li className="rwd_navMenu_sub_item">
                        <Link to="/member/*" className="rwd_navMenu_item_a">
                          會員資訊
                        </Link>
                      </li>
                      <li className="rwd_navMenu_sub_item">
                        <Link to="/member/vote" className="rwd_navMenu_item_a">
                          投票紀錄
                        </Link>
                      </li>
                      <li className="rwd_navMenu_sub_item">
                        <Link to="/member/pay" className="rwd_navMenu_item_a">
                          訂單記錄
                        </Link>
                      </li>
                      {checkIsItLoged() ? (
                        <li className="rwd_navMenu_sub_item">
                          <Link
                            to="/"
                            className="rwd_navMenu_item_a"
                            onClick={sendlogoutClick}>
                            登出
                          </Link>
                        </li>
                      ) : (
                        <></>
                      )}
                    </ul>
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
                    <Link to="/">關於我們</Link>
                    <ul className="drop-menu">
                      <li className="drop-menu_item">
                        <Link to="/brand">品牌簡介</Link>
                      </li>
                      <li className="drop-menu_item">
                        <Link to="/contactUs">與我們聯絡</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="navBar_item">
                    <Link to="/map">循環地圖</Link>
                  </li>
                  <li className="navBar_item">
                    <Link to="/">關於循環杯</Link>
                    <ul className="drop-menu">
                      <li className="drop-menu_item">
                        <Link to="/evnIntro">什麼是循環杯</Link>
                      </li>
                      <li className="drop-menu_item">
                        <Link to="/fordummies">循環懶人包</Link>
                      </li>
                      <li className="drop-menu_item">
                        <Link to="/news">相關消息</Link>
                      </li>
                      <li className="drop-menu_item">
                        <Link to="/psych">心理測驗</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="navBar_item">
                    <Link to="/shop">線上商店</Link>
                  </li>
                  <li className="navBar_item">
                    <Link to="/votes">投票專區</Link>
                  </li>

                  <li className="navBar_item">
                    {checkIsItLoged() ? (
                      <>
                        <Link to="/member/">會員專區</Link>{" "}
                      </>
                    ) : (
                      <>
                        <Link to="/gologin">會員登入</Link>{" "}
                      </>
                    )}
                    <ul className="drop-menu">
                      <li className="drop-menu_item">
                        <Link to="/member/">會員資訊</Link>
                      </li>
                      <li className="drop-menu_item">
                        <Link to="/member/vote">投票紀錄</Link>
                      </li>
                      <li className="drop-menu_item">
                        <Link to="/member/payment">訂單記錄</Link>
                      </li>
                      {checkIsItLoged() ? (
                        <li className="drop-menu_item">
                          <Link to="/" onClick={sendlogoutClick}>
                            登出
                          </Link>
                        </li>
                      ) : (
                        <></>
                      )}
                    </ul>
                  </li>
                  {/* <li className="navBar_item"><a href="#"  data-bs-toggle='modal' data-bs-target='#edison'>登入 | 註冊</a></li> */}
                </ul>
              </nav>
            </div>
          </div>
          {/* 註冊資料視窗 */}
{/*         {  <div
            className=" modal fade"
            id="edison"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content rounded ">
                <button
                  type="button"
                  className=" btn-close  ms-auto me-1 mb-3 mt-1"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="modalClose"
                ></button>
                <div className="row g-0 mx-5 text-center">
                  <div id="signinbtn" className="col-6 rounded">
                    <p className="mt-3">登入</p>
                  </div>
                  <div id="signupbtn" className="col-6 rounded">
                    <p className="mt-3">註冊</p>
                  </div>
                </div> */}

                {/* <!-- 登入表單 --> */}
      {/*           <div className="modal-body mx-5" id="oop">
                  <form method="post">
                    <div className="mb-3">
                      <label className="form-label">帳號</label>
                      <input
                        type="text"
                        name="account"
                        className="form-control"
                        value={loginData.account}
                        onChange={accountLoginChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="formn-label">密碼</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={loginData.password}
                        onChange={passwordLoginChange}
                      />
                    </div>
                    <div className="row">
                      <button
                        type="button"
                        className="btn col-12 col-sm-9 col-md-5 mx-auto btnSubmit"
                        onClick={sendLoginDataClick}
                      >
                        送出
                      </button>
                    </div>
                  </form>
                </div> */}

                {/* <!--  註冊表單 --> */}
           {/*      <div className="modal-body mx-5" id="ooa">
                  <form method="post">
                    <div className="mb-3">
                      <label className="form-label">帳號</label>
                      <input
                        type="text"
                        name="account"
                        value={registerData.account}
                        onChange={accountRegisterChange}
                        onBlur={accountRegisterCheck}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">信箱</label>
                      <input
                        type="email"
                        className="form-control"
                        name="userEmail"
                        value={registerData.userEmail}
                        onChange={userEmailRegisterChange}
                        onBlur={userEmailRegisterCheck}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">密碼</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={registerData.password}
                        onChange={passwordRegisterChange}
                        onBlur={passwordRegisterCheck}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">密碼確認</label>
                      <input
                        type="password"
                        className="form-control"
                        name="passwordCheck"
                        value={registerData.passwordCheck}
                        onChange={passwordCheckRegisterChange}
                      />
                    </div>
                    <div className="row">
                      <button
                        type="button"
                        className="btn btnSubmit col-12 col-sm-9 col-md-5  mx-auto"
                        onClick={sendRegisterDataClick}
                      >
                        送
                      </button>
                    </div>
                  </form>
                </div> */}
{/*               </div>
            </div>
          </div>} */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

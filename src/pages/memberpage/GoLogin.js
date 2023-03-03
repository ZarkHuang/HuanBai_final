import React, { useState } from 'react';
import axios from 'axios';


function GoLogIn(){
  /* 登入頁面假資料宣告 */
  const [loginData,setLoginData]=useState({
    account:"",
    password:""
  });
  
  /* 以下開始是登入頁面使用的function */
  const accountLoginChange =(e)=>{
    setLoginData({...loginData,account:e.target.value})
  };
  const passwordLoginChange=(e)=>{
    setLoginData({...loginData,password:e.target.value});
  };
  const sendLoginDataClick=async()=>{
    let chch =await axios.post("http://localhost:3344/member/gologin ",loginData,{withCredentials:true});
    console.log(chch);
    console.log(chch.data)
    if(chch.data==="noname"){
        alert("使用者不存在")

    }else if(chch.data==="wrongpair"){

        alert("密碼與帳號組合錯誤")
    }else if(chch.data==="ya"){
        alert("登入成功 帥小伙")
        window.location.href="/"
    }
    }
    
  //* 註冊頁面假資料宣告 */
  /* 以下開始是註冊頁面使用的function */
/*   const [registerData,setRegisterData]=useState({
      account:"your account",
      password:"",
      passwordCheck:"",
      userEmail:"write email"
  });
  const accountRegisterChange =(e)=>{
    setRegisterData({...registerData,account:e.target.value});
  };
  const passwordRegisterChange=(e)=>{
    setRegisterData({...registerData,password:e.target.value});
  };
  const userEmailRegisterChange=(e)=>{
    setRegisterData({...registerData,userEmail:e.target.value});
  };
  const passwordCheckRegisterChange=(e)=>{
    setRegisterData({...registerData,passwordCheck:e.target.value});
  };
  const accountRegisterCheck=async()=>{
    let setDataAccount = await axios.post("http://localhost:3344/member/signupcheckname",registerData,{withCredentials:true,});
    if(setDataAccount.data === "gowrong"){
      alert("帳號重複");
    }else if(setDataAccount.data === "success"){
      alert("帳號可以使用");
    }else{
      alert("未知錯誤");
    }
  };
  const userEmailRegisterCheck=async()=>{
    let setDataUserEmail = await axios.post("http://localhost:3344/member/signupcheckemail",registerData,{withCredentials:true,})
    if(setDataUserEmail.data==="gowrong"){
      alert("信箱已經註冊過了");
    }else if(setDataUserEmail.data ==="success"){
      alert("信箱可以使用");
    }else{
      alert("未知錯誤");
    }
  };
  const passwordRegisterCheck=async()=>{
    let setDataPassword = await axios.post("http://localhost:3344/member/signupcheckpassword",registerData,{withCredentials:true,})
    if(setDataPassword.data==='gowrong'){
      alert("密碼錯誤");
    }else if(setDataPassword.data==="success"){
      alert("密碼可以使用");
    }else{
      alert("未知錯誤");
    }
  };
  
  const sendRegisterDataClick = async()=>{
    if(registerData.password === registerData.passwordCheck){
      await axios.post("http://localhost:3344/member/signup",registerData,{withCredentials:true})
      //window.location = "/";
    }else{
      alert("兩次密碼不符合");
    }
  };  */
        return (
            <React.Fragment>

        <div className="row g-0 mx-5 text-center">
        <div id="signinbtn" className="col-6 rounded">
          <p className="mt-3">登入</p>
        </div>
        <div id="signupbtn" className="col-6 rounded">
          <p className="mt-3">註冊</p>
        </div>
      </div>


      {/* <!-- 登入表單 --> */}
      <div className="modal-body mx-5">
        <form method='post'>
          <div className="mb-3">
            <label className="form-label">帳號</label>
            <input type="text" name="account"  className="form-control" value={loginData.account} onChange={accountLoginChange}/>
          </div>

          <div className="mb-3">
            <label  className="formn-label">密碼</label>
            <input type="password" name="password" className="form-control" value={loginData.password} onChange={passwordLoginChange}/>
          </div>
          <div className="row">
            <button type="button" className="btn col-12 col-sm-9 col-md-5 mx-auto btnSubmit" onClick={sendLoginDataClick}>送出</button>

          </div>
        </form>
      </div>

            </React.Fragment>
      );
    }

 
export default GoLogIn;
import React, { useState } from 'react';
import axios from 'axios';

function GoSignUp() {
    //* 註冊頁面假資料宣告 */
  const [registerData,setRegisterData]=useState({
    account:"your account",
    password:"",
    passwordCheck:"",
    userEmail:"write email"
});
/* 以下開始是註冊頁面使用的function */
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
}; 
    return ( 
        <div class="container" id="EdisonGoLogIn">

          <form method="post">
            <div className="mb-3">
              
              <label className="form-label">帳號</label>
              <input type="text" name="account" value={registerData.account} onChange={accountRegisterChange} onBlur={accountRegisterCheck} className="form-control" />
              
            </div>
            <div className="mb-3">
              <label  className="form-label" >信箱</label>
              <input type="email" className="form-control" name="userEmail" value={registerData.userEmail} onChange={userEmailRegisterChange} onBlur={userEmailRegisterCheck} />
            </div>
            <div className="mb-3">
              <label  className="form-label" >性別</label>
              <input type="text" className="form-control" name="userGender" value={registerData.userEmail} onChange={userEmailRegisterChange} onBlur={userEmailRegisterCheck} />
            </div><div className="mb-3">
              <label  className="form-label" >名字</label>
              <input type="text" className="form-control" name="userName" value={registerData.userEmail} onChange={userEmailRegisterChange} onBlur={userEmailRegisterCheck} />
            </div><div className="mb-3">
              <label  className="form-label" >地址</label>
              <input type="text" className="form-control" name="userAddress" value={registerData.userEmail} onChange={userEmailRegisterChange} onBlur={userEmailRegisterCheck} />
            </div>
            <div className="mb-3">
              <label  className="form-label">電話</label>
              <input type="text" className="form-control" name="userTelephone" value={registerData.password}  onChange={passwordRegisterChange} onBlur={passwordRegisterCheck}/>
            </div>
            <div className="mb-3">
              <label  className="form-label">密碼</label>
              <input type="password" className="form-control" name="password" value={registerData.password}  onChange={passwordRegisterChange} onBlur={passwordRegisterCheck}/>
            </div>
            <div className="mb-3">
              <label  className="form-label">密碼確認</label>
              <input type="password" className="form-control" name="passwordCheck" value={registerData.passwordCheck} onChange={passwordCheckRegisterChange}/>
            </div>
            <div className="row">
              <button type="button" className="btn btnSubmit col-12 col-sm-9 col-md-5  mx-auto" onClick={sendRegisterDataClick}>送出</button>
              <button type="button" class="btn btn-outline-danger">返回登陸</button>
            </div>
            
          </form>
        </div>
          );
        }
        
        export default GoSignUp;
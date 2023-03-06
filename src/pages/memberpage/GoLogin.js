import React, { Component } from 'react';
import axios from 'axios';
import "../../style/member/goLogInCss.css"

class GoLogIn extends Component {
  state = { 
    loginData:{
    account:"",
    password:""
  },
    forgetData:{
      account:"",
      userEmail:""
    } } 
  render() { 
    return (
      <React.Fragment>
        <div className='container' id="EdisonGoLogInContainer">

      <form method='post'>


        <div className='row my-5'>
          <div className='col-3 mx-auto text-center'>
            <p className=''>登入頁面</p>
          </div>
        </div>

        <div className='row mb-5'>
        <div className="col-6 mx-auto">
          <label className="form-label">帳號</label>
          <input type="text" name="account"  className="form-control form-control-lg" value={this.state.loginData.account} onChange={this.accountLoginChange}/>
        </div>
        </div>



        <div className='row mb-5'>
        <div className="col-6 mx-auto">
          <label  className="formn-label">密碼</label>
          <input type="password" id='EdisonPasswordGetSee' name="password" className="form-control form-control-lg" value={this.state.loginData.password} onChange={this.passwordLoginChange}/>
        </div>
        </div>
        
      <div className='d-flex row mb-5 '>
        <div className='col-6  '>
          <div className='mx-auto forgotPassWrodDiv'>

            <div>
            <input type="checkbox" className="form-check-input" id="showPassword" onClick={this.seeMyPassword}/>
            <label className="form-check-label ms-3" for="showPassword">顯示密碼</label> 
            </div>

            <div><button type='button' data-bs-toggle="modal" data-bs-target="#thisIsForForgetPassword">忘記密碼?</button></div>

          </div>
        
        </div>
      </div>


        <div className="row justify-content-center my-5">
          <a className='col-2  btn me-5' type='button'  id="GoLogInRegisterBTN" href='/gosignup'>註冊</a>
          <div className='col-2 btn ' type='button' onClick={this.sendLoginDataClick} id="GoLogInSubmitBTN">送出</div>
        </div>
      </form>
    </div>


    <div class="modal fade" id="thisIsForForgetPassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    
      <div class="modal-body">
        <div className='row '>
          <div className='col-11'>填寫資料來獲取新密碼</div>
          <div className='col-1'><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
          <div className='row mt-5'>
            <form method='post'>
               <div className='row'><label className='col-form-label col-3'>會員帳號</label><div className='col-8'><input type='text'  className='form-control' name="account" value={this.state.forgetData.account} onChange={this.forgetAccountChange} required/></div></div>
               <div className='row '><label className='col-form-label col-3'>電子信箱</label><div className='col-8'><input type='email'  className='form-control' name='userEmail' value={this.state.forgetData.userEmail}  onChange={this.forgetusrEmailChange} required/></div></div>
               <div className='row'><button type='button' className=' col-6 mx-auto btn getpasswordBTN' onClick={this.sendForgetPasswordData}>獲得密碼</button></div>
            </form>
          </div>
        </div>
      </div>
   
    </div>
  </div>
</div>
          </React.Fragment>
    );
  }
  seeMyPassword=(e)=>{
    if(document.getElementById('EdisonPasswordGetSee').getAttribute("type")==="password"){
      document.getElementById('EdisonPasswordGetSee').setAttribute("type","text")
    }else{
      document.getElementById('EdisonPasswordGetSee').setAttribute("type","password")
    }
  }
  accountLoginChange =(e)=>{
    let newState = {...this.state};
    newState.loginData.account=e.target.value;
    this.setState(newState);

  };
  passwordLoginChange=(e)=>{
    let newState = {...this.state};
    newState.loginData.password=e.target.value;
    this.setState(newState);
 
  };

  forgetAccountChange=(e)=>{
    let newState={...this.state};
    newState.forgetData.account=e.target.value;
    this.setState(newState);

  };
  forgetusrEmailChange=(e)=>{
    let newState={...this.state};
    newState.forgetData.userEmail=e.target.value;
    this.setState(newState);
  };

  sendForgetPasswordData=async()=>{
    let forgetRes = await axios.post("http://localhost:3344/member/forgotPassword",this.state.forgetData,{withCredentials:true});
    console.log(forgetRes.data)
    if(forgetRes.data==="沒有這個帳號"){
      alert("帳號或信箱不存在");
    }
    if(forgetRes.data==="成功更改密碼"){
      alert("密碼已寄送至您的信箱");
      window.location="/";
    }

  };
   
   sendLoginDataClick=async()=>{
    let chch =await axios.post("http://localhost:3344/member/gologin ",this.state.loginData,{withCredentials:true});
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
}
 
export default GoLogIn;

  


  
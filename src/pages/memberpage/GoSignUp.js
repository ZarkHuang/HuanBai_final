import React, { Component } from 'react';
import axios from "axios";
import "../../style/member/goSignUpCss.css"

class MemberInfo extends Component {
    state = { 
            memberdata:{
                uid:"a",
                userName:"",
                account:"",
                password:"",
                passwordCheck:"",
                userEmail:"",
                userTelephone:"",
                userAddress:"",
                userGender:'',
                /* 假如沒有填寫日期，預設為今日日期 */
                userBirth:this.todayDate(),
                subscripUsWithEmail:false
            }
     } 
    render() { 
        return (
            <React.Fragment>
              <div className='container' id='EdisonGoSignUpContainer'>

                  <div className='row'>
                    <div className='col-1 mx-auto'>
                  <p className='mx-auto'>註冊</p>
                      
                    </div>

                  </div>
                    <form id="InfoCanChange" method='post'>

                    <div className="row my-4 ">
                      <div className='col-5 mx-auto'>
                            <label>帳號</label>
                            <input type="text" name="account"  className="form-control form-control-lg "  value={this.state.memberdata.account} onChange={this.accountRegisterChange} onBlur={this.accountRegisterCheck}  required placeholder='輸入帳號'/>
                            <span id="accountCheckRes"></span>
                          
                        </div></div> 


                        <div className="row my-4"><div className='col-5 mx-auto'>
                            <label>密碼</label>
                            <input type="password" name="password"  className="form-control form-control-lg" value={this.state.memberdata.password} onChange={this.passwordRegisterChange} placeholder='輸入密碼'/>
                            <span id="passwordCheckRes"></span>
                        </div></div>


                        <div className="row my-4"><div className='col-5 mx-auto'>
                            <label>密碼確認</label>
                            <input type="password" name="passwordCheck"  className="form-control form-control-lg" value={this.state.memberdata.passwordCheck} onChange={this.passwordCheckRegisterChange} placeholder='確認密碼'/>
                            <span id=""></span>
                        </div></div>


                        <div className="row my-4 ">
                          <div className='col-5 mx-auto'>
                            <div className='row '>
                              <div className='col-auto me-auto'>
                            <label>姓名</label>
                            <input type="text" name="userName"  className="form-control form-control-lg" value={this.state.memberdata.userName} onChange={this.userNameDataChange} required placeholder='你的名字'/>
                            <span id="userNameCheckRes"></span>

                              </div>
                              <div className='col-auto'>
                        <label>性別</label>
                        <select name="userGender" className="form-select form-select-lg" aria-label="Default select example"  value={this.state.memberdata.userGender} onChange={this.userGenderChange} required>
                            <option value="">選擇生理性別</option> 
                            <option value="1" >男性</option>
                            <option value="2" >女性</option>
                            <option value="3"  >不透露</option>
                        </select>
                        <span id="userGenderCheckRes"></span>

                              </div>
                              <div className='col-auto ms-auto'>
                            <label>生日</label>
                            <input type="date" name="userBirth"  className="form-control form-control-lg" value={this.state.memberdata.userBirth}   onChange={this.userBirthChange} required/>
                            <span id="userBirthCheckRes"></span>

                              </div>
                            </div>
                        </div></div>




                        <div className="row my-4"><div className='col-5 mx-auto'>
                            <label>聯絡號碼</label>
                            <input type="text" name="userTelephone"  className="form-control form-control-lg" value={this.state.memberdata.userTelephone} onChange={this.userTelephoneChange}required placeholder='輸入手機/市話'/>
                            <span id="userTelephoneCheckRes"></span>
                        </div></div>


                        <div className='row my-4'>
                            <div className='col-5 mx-auto'> 
                                <label>電子信箱</label>
                                <input type='email' name="userEmail" className='form-control form-control-lg' value={this.state.memberdata.userEmail} onChange={this.userEmailRegisterChange} onBlur={this.userEmailRegisterCheck} placeholder='輸入您的電子信箱' required/>
                                <span id="userEmailCheckRes"></span>
                            </div>
                        </div>


                        <div className="row mb-4"><div className='col-5 mx-auto'>
                            <label>通訊地址</label>
                            <input type="text" name="userAddress"  className="form-control form-control-lg" value={this.state.memberdata.userAddress} onChange={this.userAddressChange} required placeholder='輸入完整地址'/>
                            <span id="userAddressCheckRes"></span>
                        </div></div>

                        <div className='row mb-2'>
                          <div className='col-5 mx-auto'>
                            <input className="form-check-input" type="checkbox" id="rawcheck" />
                            <label className="form-check-label" htmlFor="rawcheck">我已閱讀並同意<a href='https://law.moj.gov.tw/Service/Privacy.aspx'>《隱私權保護政策》</a>及<a href='https://www.ey.gov.tw/Page/37D1D3EDDE2438F8'>《定型化契約條款》。</a></label>
                          </div>
                        </div>
                        <div className='row mb-5'>
                          <div className='col-5 mx-auto'>
                            <input className="form-check-input" type="checkbox" id="eleport" name='subscripUsWithEmail' value='1' checked={this.state.memberdata.subscripUsWithEmail} onChange={this.ifSubOrNot}/>
                            <label className="form-check-label"  htmlFor="eleport">訂閱電子報！我同意使用上述電子信箱來接收來自環唄的最新消息。</label>
                            
                          </div>
                        </div>
                        <div className='row'><div className='col-5 mx-auto'>
                          <span id='warningTextBar'></span>
                        </div>
                          </div>


                        <div className='row mb-5'>
                          <div className='col-5 mx-auto'>
                            <div className='row justify-content-around'>

                              <div className='col-4'><a href='/gologin'>
                                <button type="button" className='btn ' id="GoSignUpBackBTN">返回</button> </a>
                               </div>
                              <div className='col-4'>
                                <button type="button" className='btn' id='GoSignUpSubmitBTN' onClick={this.sendRegisterDataClick}>送出</button>
                               </div>
                            </div>
                          </div>

                        </div>
                    </form>
                    </div>
        </React.Fragment>
        );
    }
    checkGender(){
        if(this.state.memberdata.userGender==='1'){
            return "男生"
        }
        if(this.state.memberdata.userGender==='2'){
            return "女生"
        }
        if(this.state.memberdata.userGender==='3'){
            return "不透露"
        }
        if(this.state.memberdata.userGender===undefined){
            return undefined
        }
    }
    todayDate(){
    var ddd = new Date();
    var day =ddd.getDate();
    var month = ddd.getMonth()+1; 
    if(month<10){
    month = "0"+(ddd.getMonth()+1); 
}

    if(day<10){
    day = "0"+ddd.getDate(); 
}
    var datew = ddd.getFullYear()+"-"+month+"-"+day;
    datew = datew.toString()
    return datew
    }


    userNameDataChange=(e)=>{
        let newState = {...this.state};
        newState.memberdata.userName=e.target.value;
        this.setState(newState);
    }

    userGenderChange=(e)=>{
            let newState ={...this.state};
            newState.memberdata.userGender = e.target.value;
            this.setState(newState);
          /*   alert("現在點到"+e.target.value)
            alert("現在點到"+newState.memberdata.userGender) */
    }
    ifSubOrNot=(e)=>{
      let newState={...this.state};
      newState.memberdata.subscripUsWithEmail=e.target.checked;
      this.setState(newState);
    }
    userBirthChange=(e)=>{
        let newState = {...this.state};
        newState.memberdata.userBirth=e.target.value;
        this.setState(newState);
    }
    userTelephoneChange=(e)=>{
        let newState = {...this.state};
        newState.memberdata.userTelephone=e.target.value;
        this.setState(newState);
    }
    userAddressChange=(e)=>{
        let newState = {...this.state};
        newState.memberdata.userAddress=e.target.value;
        this.setState(newState);
    }
     accountRegisterChange =(e)=>{
      let newState = {...this.state};
      newState.memberdata.account=e.target.value;
      this.setState(newState);
    };
     passwordRegisterChange=(e)=>{
      let newState = {...this.state};
      newState.memberdata.password=e.target.value;
      this.setState(newState);
      };

     userEmailRegisterChange=(e)=>{
        let newState = {...this.state};
        newState.memberdata.userEmail=e.target.value;
        this.setState(newState);    
      };



     passwordCheckRegisterChange=(e)=>{
      let newState = {...this.state};
      newState.memberdata.passwordCheck=e.target.value;
      this.setState(newState);    };


     accountRegisterCheck=async()=>{
      let setDataAccount = await axios.post("http://localhost:3344/member/signupcheckname",this.state.memberdata,{withCredentials:true,});
      if(setDataAccount.data === "gowrong"){
        document.getElementById("accountCheckRes").innerText ="*帳號重複";
      }else if(setDataAccount.data === "success"){
        document.getElementById("accountCheckRes").innerText ="";
      }else{
        alert("未知錯誤");
      }
    };
     userEmailRegisterCheck=async()=>{
      let setDataUserEmail = await axios.post("http://localhost:3344/member/signupcheckemail",this.state.memberdata,{withCredentials:true,})
      if(setDataUserEmail.data==="gowrong"){
        document.getElementById("userEmailCheckRes").innerText ="*信箱已經被註冊過了";
   
      }else if(setDataUserEmail.data ==="success"){
        document.getElementById("userEmailCheckRes").innerText ="";
       
      }else{
        alert("未知錯誤");
      }
    };
     passwordRegisterCheck=async()=>{
      let setDataPassword = await axios.post("http://localhost:3344/member/signupcheckpassword",this.state.memberdata,{withCredentials:true,})
      if(setDataPassword.data==='gowrong'){
        alert("密碼錯誤");
      }else if(setDataPassword.data==="success"){
        alert("密碼可以使用");
      }else{
        alert("未知錯誤");
      }
    };
    
     sendRegisterDataClick = async()=>{
      if(this.state.memberdata.password === this.state.memberdata.passwordCheck){
        if(this.state.memberdata.account===""){
          document.getElementById("accountCheckRes").innerText="*不得為空";
          document.getElementById('warningTextBar').innerText="上述欄位有＊號處 需要修正";

        }
        if(this.state.memberdata.userName===""){
          document.getElementById("userNameCheckRes").innerText ="*不得為空";
          document.getElementById("warningTextBar").innerText ="上述欄位有＊號處 需要修正";

        }
        if(this.state.memberdata.userGender===""){
          document.getElementById("userGenderCheckRes").innerText ="*不得為空";
          document.getElementById("warningTextBar").innerText ="上述欄位有＊號處 需要修正";


        }
        if(this.state.memberdata.userBirth===this.todayDate()){
          document.getElementById("userBirthCheckRes").innerText ="*日期是今天 你要確定欸";
          document.getElementById("warningTextBar").innerText ="上述欄位有＊號處 需要修正";

        }
        if(this.state.memberdata.userTelephone===""){
          document.getElementById("userTelephoneCheckRes").innerText ="*不得為空";
          document.getElementById("warningTextBar").innerText ="上述欄位有＊號處 需要修正";

        }
        if(this.state.memberdata.userAddress===""){
          document.getElementById("userAddressCheckRes").innerText ="*不得為空";
          document.getElementById("warningTextBar").innerText ="上述欄位有＊號處 需要修正";

        }
        if(this.state.memberdata.userName!==""&&this.state.memberdata.userGender!==""&&this.state.memberdata.userBirth!==this.todayDate()&&this.state.memberdata.userTelephone!==""&&this.state.memberdata.userAddress!=="")
        {
          await axios.post("http://localhost:3344/member/goSignUp",this.state.memberdata,{withCredentials:true})
        window.location = "http://localhost:3000/member/";
        }

      }else{
        document.getElementById("passwordCheckRes").innerText ="*兩次密碼不符合";
        document.getElementById("warningTextBar").innerText ="上述欄位有＊號處 需要修正";

       
       
      }
    }; 
}
 
export default MemberInfo;
import React, { Component } from 'react';
import axios from "axios";
import "../../style/member/listcss.css";
import Swal from 'sweetalert2';
class MemberInfo extends Component {
    constructor(props) {
        super(props);
    this.state = { 
            memberdata:{
                uid:"a",
                userName:"",
                account:"",
                userEmail:"",
                userTelephone:"",
                userAddress:"",
                userGender:'',
                /* 假如沒有填寫日期，預設為今日日期 */
                userBirth:this.todayDate()
            },
            hasAlerted:false
            
     } 

    this.cantChangeRef = React.createRef();
    this.canChangeRef = React.createRef();
    this.handleEdiChangeInfoClick = this.handleEdiChangeInfoClick.bind(this);
    this.handleEdiChangeInfoBackClick = this.handleEdiChangeInfoBackClick.bind(this);
  }

    render() { 
        return (
            <React.Fragment>
<div className="row">
    <div className="col-12 text-center">
        <p className='Etopic'>會員資料</p>
    </div>
</div>

        {/* 單純閱讀版本 */}

        {/* lg開始可視 lg以下隱藏 */}
                    <form id="infoCantChange"ref={this.cantChangeRef} style={{ display: this.state.canChange ? "none" : "block" }}>
                        <div className="row mb-3  mb-md-3">
                            <div className='col-3'></div>
                            <div className="col-3 col-md-2">
                                <label className='col-form-label'>名字:</label>
                            </div>
                            <div className='col-auto'>
                                <input type="text" readOnly className="form-control-plaintext inputWord" name="userName" value={this.state.memberdata.userName} placeholder="尚未登入" />
                            </div>
                            {/* <div className="col-3 col-md-auto ms-5 ms-sm-5 ms-md-0 d-none d-lg-block">
                                <label className='col-form-label'>性別:</label>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                 <input type='text' readOnly className='form-control-plaintext inputWord' name="userGender" value={(this.checkGender())} placeholder='尚未填寫'/>                              
                            </div> */}
                        </div>
        {/* 以上lg開始可視 lg以下隱藏 */}


                                {/* lg開始隱藏 lg以下可視 */}   
                        <div className="row mb-3  mb-md-3">
                        <div className='col-3'></div>
                            <div className="col-3 col-md-2 " /* d-block d-lg-none" */>
                                <label className='col-form-label'>性別:</label>
                            </div>
                            <div className="col-auto" /* d-block d-lg-none" */>
                                 <input type='text' readOnly className='form-control-plaintext inputWord' name="userGender" value={(this.checkGender())} placeholder='尚未登入'/>                              
                            </div></div>
                                {/*  lg開始隱藏 lg以下可視 */}
            {/* 以上lg開始可視 lg以下隱藏 */}
                            <div className='row mb-3  mb-md-3'>
                            <div className='col-3'></div>
                            <div className="col-3 col-md-2">
                                <label className='col-form-label'>生日:</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" readOnly className="form-control-plaintext inputWord" name="userBirth" value={this.state.memberdata.userBirth} placeholder='尚未登入'/>
                            </div>
                            {/* <div className="col-3 col-md-auto ms-5 ms-sm-5 ms-md-0 d-none d-lg-block">
                                <label className='col-form-label'>聯絡電話:</label>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <input type="number" readOnly className="form-control-plaintext inputWord" value={this.state.memberdata.userTelephone}  placeholder="尚未填寫"/>
                            </div> */}
                        </div>
            {/* 以上lg開始可視 lg以下隱藏 */}         


                                {/* lg開始隱藏 lg以下可視 */}
                        <div className="row mb-4  mb-md-4">
                        <div className='col-3'></div>
                            <div className="col-3 col-md-2 " /* d-block d-lg-none" */>
                                <label className='col-form-label'>聯絡電話:</label>
                            </div>
                            <div className="col-auto" /* d-block d-lg-none" */>
                                <input type="number" readOnly className="form-control-plaintext inputWord" value={this.state.memberdata.userTelephone}  placeholder="尚未登入"/>
                            </div>
                        </div>
                                
                        <div className="row mb-3  mb-md-3">
                        <div className='col-3'></div>
                            <div className="col-3 col-md-2 "  /* d-block d-lg-none" */>
                                <label className='col-form-label'>電子信箱:</label>
                            </div>
                            <div className="col-auto" /* d-block d-lg-none" */>
                                <input type="text" readOnly className="form-control-plaintext inputWord"  name="useremail" value={this.state.memberdata.userEmail} placeholder="尚未登入"/>
                            </div>
                        </div>
                                {/* lg開始隱藏 lg以下可視 */}

                                

            {/*  */}
                        <div className="row mb-5">
                        <div className='col-3'></div>
                            <div className="col-3 col-md-2 ">
                                <label className='col-form-label'>通訊地址:</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" readOnly className="form-control-plaintext inputWord" name="userAddress" value={this.state.memberdata.userAddress}  placeholder="尚未登入"/>
                            </div>
                            {/* <div className="col-3 col-md-2 ms-5 ms-sm-5 ms-md-0 d-none d-lg-block">
                                <label className='col-form-label'>電子信箱:</label>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <input type="text" readOnly className="form-control-plaintext inputWord"  name="useremail" value={this.state.memberdata.userEmail} />
                            </div> */}
                        </div>
            {/*  */}                   
                        <div className="row pb-3 justify-content-center">
                                <button  id="EdiChangeInfo" type='button' className="btn btn-danger col-7 col-sm-6 col-md-3 rounded-3" onClick={this.handleEdiChangeInfoClick}>編輯</button>        
                        </div>
            
                    </form>



                    {/* 可以更動版本 */}
                    <form id="InfoCanChange" ref={this.canChangeRef} style={{ display: this.state.canChange ? "block" : "none" }}>
                        <div className='row'><div className='col-8 mx-auto'>
                           
                        <div className="row mb-4 mb-md-3"><div>
                            <label>姓名</label>
                            <input type="text" name="userName"  className="form-control form-control-lg" value={this.state.memberdata.userName} onChange={this.userNameDataChange}/>
                        </div></div>


                        <div className="row mb-4 mb-md-3">
                            <div className='col-6 me-auto'>
                        <label>性別</label>
                        <select name="userGender" className="form-select" aria-label="Default select example"  value={this.state.memberdata.userGender} onChange={this.userGenderChange}>
                            <option value="">選擇生理性別</option> 
                            <option value="1" >男性</option>
                            <option value="2" >女性</option>
                            <option value="3"  >不透露</option>
                        </select>
                        </div>
                       
                        <div className="col-6 me-auto"><div>
                            <label>生日</label>
                            <input type="date" name="userBirth"  className="form-control" value={this.state.memberdata.userBirth}   onChange={this.userBirthChange}/>
                        </div>
                        </div> </div>



                        <div className="row mb-4 mb-md-3"><div>
                            <label>手機號碼</label>
                            <input type="text" name="userTelephone"  className="form-control" value={this.state.memberdata.userTelephone} onChange={this.userTelephoneChange}/>
                        </div></div>
                        <div className='row mb-4 mb-md-3'>
                            <div>
                                <label>電子信箱</label>
                                <input type='text' name="userEmail" className='form-control' value={this.state.memberdata.userEmail} onChange={this.emailDataChange}/>
                            </div>
                        </div>
                        <div className="row mb-4 mb-md-5"><div>
                            <label>通訊地址</label>
                            <input type="text" name="userAddress"  className="form-control" value={this.state.memberdata.userAddress} onChange={this.userAddressChange}/>
                        </div></div>
                        <div className='row'>
                        <button id='EdiChangeInfoBack'type="button" className='btn btn-danger col-3 mx-auto rounded-3'onClick={this.handleEdiChangeInfoBackClick}>返回</button>
                        <button type="button" className='btn btn-success col-3 mx-auto rounded-3' onClick={this.sendUserDataClick}>送出</button>

                        </div> </div></div>
                    </form>
    
        </React.Fragment>
        );
    }
    handleEdiChangeInfoClick() {
        this.cantChangeRef.current.style.display = "none";
        this.canChangeRef.current.style.display = "block";
        this.setState({ canChange: true });
      }
    
      handleEdiChangeInfoBackClick() {
        this.canChangeRef.current.style.display = "none";
        this.cantChangeRef.current.style.display = "block";
        this.setState({ canChange: false });
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
    emailDataChange=(e)=>{
        let newState = {...this.state};
        newState.memberdata.userEmail=e.target.value;
        this.setState(newState);
    }
    userGenderChange=(e)=>{
            let newState ={...this.state};
            newState.memberdata.userGender = e.target.value;
            this.setState(newState);
            //alert("現在點到"+e.target.value)
            //alert("現在點到"+newState.memberdata.userGender)
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

    sendUserDataClick=async()=>{
        await axios.put("http://localhost:3344/member/memberData",this.state.memberdata,{withCredentials:true});
        window.location="/member";
    }
    componentDidMount=async()=>{
       var serverData = await axios.get('http://localhost:3344/member/memberData',{withCredentials:true});
        var newState = {...this.state};
        newState.memberdata = serverData.data;
        this.setState(newState);
        var responseAuth = await axios.get('http://localhost:3344/checkAuth',{withCredentials:true});
        console.log(responseAuth)
        if(responseAuth.data==="尚未登入"){
            if(!this.hasAlerted) {
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
        }
 
    }
}
 
export default MemberInfo;
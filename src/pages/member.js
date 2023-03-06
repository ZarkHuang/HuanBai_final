import React, { Component } from 'react';
import { Route, NavLink, Routes } from "react-router-dom";
import MemberInfo from './memberpage/Info';
import MemberList from './memberpage/ListData';
import MemberVote from './memberpage/VoteData';
import MemberChangePassword from './memberpage/PasswordChange';
import VoteAnswer from './memberpage/voteAnswer';
import axios from 'axios';
import "../style/member/membercss.css";
import Pay from './pay';


class Member extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                
        <div className="container mt-5 pb-xl-5 rounded" >


            <div className="row justify-content-center">  

            <div className='d-none d-lg-block col-lg-1 col-xl-1'></div>  


                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 text-center ">
                    <div className="row tabEdi justify-content-center mt-5">
{/*                         <div className="d-none d-md-block col-md-8  mt-5" ><button type='button' onClick={this.sendlogoutClick}>預留</button></div> */}
                        <NavLink index='true' to="" className="col-3  col-md-8 col-xl-11  memtabEdi">會員資料</NavLink>
                        <NavLink to="change" className="col-3  col-md-8 col-xl-11 memtabEdi" > 修改密碼</NavLink>
                        <NavLink to="pay" className="col-3  col-md-8 col-xl-11 memtabEdi">訂單記錄</NavLink>
                        <NavLink to="vote" className="col-3  col-md-8 col-xl-11 memtabEdi">投票紀錄</NavLink>
                        <div type='button' className='d-none d-md-block col-3 col-md-8 col-xl-11' id='memberpageLogOutBTN'onClick={this.sendlogoutClick}>登出</div>
                    </div>
    
                </div>
                {/* <div className="col-md-3 col-lg-1 col-xl-3  d-none d-md-block"></div>  */}
                
                <div className="col-12 col-sm-12 col-md-9 col-lg-8 col-xl-9" id="showData">
                    <Routes>
                    <Route  index='true' element={<MemberInfo/>} />
                    <Route path='/change' element={<MemberChangePassword/>} />
                    <Route path='/list' element={<MemberList/>} />
                    <Route path='/vote' element={<MemberVote/>} />
                    <Route path='/VoteAnswer/:voteId' element={<VoteAnswer/>} />
                    <Route path='/pay' element={<Pay/>} />
                    </Routes>
                </div>
               {/*  <div className='d-none d-md-block col-md-1 col-xl-2'></div> */}
                        
            </div>
        </div>

</React.Fragment>
        );
        
    }
    sendlogoutClick=async(e)=>{
        let logoutRes = await axios.get("http://localhost:3344/logout",{withCredentials:true});
        console.log(logoutRes.data);
        if(logoutRes.data==="登出成功"){

            alert("即將登出");
            window.location="/"
        } 
        }
    /* 嘗試做一個tab來用 失敗 */
     EdisonActiveTab=()=>{
        let tabs = document.querySelectorAll(".memtabEdi");
        tabs.forEach(item=>{
            item.addEventListener('click',function(){
                tabs.forEach(item=>{
                    item.classList.remove('Ediactive')
                });
                this.classList.addClass('Ediactive')
            })
        })

    }
}
 
export default Member;
import React, { Component } from 'react';
import { Route, NavLink, Routes } from "react-router-dom";
import MemberInfo from './memberpage/Info';
import MemberList from './memberpage/ListData';
import MemberVote from './memberpage/VoteData';
import MemberChangePassword from './memberpage/PasswordChange';
import "../style/member/membercss.css";


class Member extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                
        <div className="container mt-5 pb-xl-5 rounded" >


            <div className="row justify-content-center">  

            <div className='d-none d-lg-block col-lg-1 col-xl-1'></div>  


                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 text-center ">
                    <div className="row tabEdi justify-content-center">
                        <div className="d-none d-md-block col-md-8  mt-5">預留</div>
                        <NavLink index='true' to="" className="col-3  col-md-8 col-xl-11 nav-link">會員資料</NavLink>
                        <NavLink to="change" className="col-3  col-md-8 col-xl-11"> 修改密碼</NavLink>
                        <NavLink to="list" className="col-3  col-md-8 col-xl-11">訂單記錄</NavLink>
                        <NavLink to="vote" className="col-3  col-md-8 col-xl-11">投票紀錄</NavLink>
                    </div>
    
                </div>
                {/* <div className="col-md-3 col-lg-1 col-xl-3  d-none d-md-block"></div>  */}
                
                <div className="col-12 col-sm-12 col-md-9 col-lg-8 col-xl-9" id="showData">
                    <Routes>
                    <Route  index='true' element={<MemberInfo/>} />
                    <Route path='/change' element={<MemberChangePassword/>} />
                    <Route path='/list' element={<MemberList/>} />
                    <Route path='/vote' element={<MemberVote/>} />
                    </Routes>
                </div>
               {/*  <div className='d-none d-md-block col-md-1 col-xl-2'></div> */}
                        
            </div>
        </div>

</React.Fragment>
        );
    }
    
    /* 嘗試做一個tab來用 失敗 */
     /* clickChangeTabEdi=(e)=>{
        var tabList = document.querySelectorAll(".tabEdi a");
        for(var i= 0; i<tabList.length;i++){
            tabList[i].index=i;
            tabList[i].onclick=function(){
                console.log("1")
                var indexaa = this.index;
                for (var k = 0; k < tabList.length; k++) {
                    tabList[k].classList.remove('Eactive')
                }
                tabList[indexaa].classList.add('Eacitve')
                alert("AA")
                console.log("got something")
                
            }

        }
     } */
}
 
export default Member;
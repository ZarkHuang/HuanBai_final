import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import "../../style/member/voteData.css"
import "bootstrap/dist/css/bootstrap.css"

class MemberVote extends Component {
    state = {
        memberdata: []
    }

    render() {
        return (
            <React.Fragment>
                <div className='voteData'>
                    <div className="row">
                        <div className="col-12 text-center EtopicDiv">
                            <p className='Etopic'>投票紀錄</p>
                        </div>
                    </div>
                    <ul>
                        {this.state.memberdata.map((vote) => (
                            <li key={vote.voteId}>
                                <Link to={`/member/voteAnswer/${vote.voteId}`} className="linkToVote col-md-12 col-lg-6 col-12 rounded-3">
                                    {/* <div className='voteDataVoteId'>{vote.voteId}</div> */}
                                    <div className='voteDataTopic'>主題:    {vote.voteName}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </React.Fragment>
        );
    }

    componentDidMount = async () => {
        var serverData = await axios.get('http://localhost:3344/userVoteData', { withCredentials: true });
        this.setState({ memberdata: serverData.data });
        var responseAuth = await axios.get('http://localhost:3344/checkAuth',{withCredentials:true});
        console.log(responseAuth)
        if(responseAuth.data==="尚未登入"){
            alert("你還沒登入！即將轉移到登錄頁面")
            window.location="/gologin"
        }
    }
}

export default MemberVote;




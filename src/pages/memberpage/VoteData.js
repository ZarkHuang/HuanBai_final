import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import "../../style/member/voteData.css";
import "bootstrap/dist/css/bootstrap.css";
import Swal from 'sweetalert2';

class MemberVote extends Component {
    state = {
        memberdata: [],
        hasAlerted:false
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
                    <div className='row'>
                    <div className='col-12 text-center'>您尚未進行過任何投票</div>

                    </div>
          {/*           <ul>
                        {this.state.memberdata.map((vote) => (
                            <li key={vote.voteId}>
                                <Link to={`/member/voteAnswer/${vote.voteId}`} className="linkToVote col-md-12 col-lg-6 col-12 rounded-3"> */}
                                    {/* <div className='voteDataVoteId'>{vote.voteId}</div> */}
{/*                                     <div className='voteDataTopic'>主題:    {vote.voteName}</div>
                                </Link>
                            </li>
                        ))}
                    </ul> */}
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

export default MemberVote;




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
                        <div className="col-12 text-center">
                            <p className='Etopic'>投票紀錄</p>
                        </div>
                    </div>
                    <ul>
                        {this.state.memberdata.map((vote) => (
                            <li key={vote.voteId}>
                                <Link to={`/member/voteAnswer/${vote.voteId}`} className="linkToVote col-md-12 col-lg-6 col-12">
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
    }
}

export default MemberVote;




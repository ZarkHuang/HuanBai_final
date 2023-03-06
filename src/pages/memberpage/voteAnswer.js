import React, { useEffect, useState } from 'react'; // 改狀態的
import axios from 'axios'; // 
// import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "../../style/member/voteAnswer.css"
import { Link } from 'react-router-dom';




const VoteAnswer = () => {
  const { voteId } = useParams();
  console.log("voteId", voteId);
  const voteIdNumber = parseInt(voteId, 10);
  const [votecm, setVotecm] = useState(null);



  useEffect(() => {
    const fetchAllVotecm = async () => {
      try {
        const res = await axios.get(`http://localhost:3344/vote/answer/${voteIdNumber}`);
        console.log("res.data", res.data);
        setVotecm(res.data.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllVotecm();
  }, [voteIdNumber]);

  if (!votecm) {
    return <div>Loading...</div>;
  }

  const totalVotes = votecm.numberOfOption1 + votecm.numberOfOption2 + votecm.numberOfOption3 + votecm.numberOfOption4;
  const percentage1 = (votecm.numberOfOption1 / totalVotes * 100).toFixed(0);
  const percentage2 = (votecm.numberOfOption2 / totalVotes * 100).toFixed(0);
  const percentage3 = (votecm.numberOfOption3 / totalVotes * 100).toFixed(0);
  const percentage4 = (votecm.numberOfOption4 / totalVotes * 100).toFixed(0);

  return (
    <React.Fragment>
      <div className="answerPoll">
        <div className="question">{votecm.voteName}</div>
        <div className="voteAnswers">
          <div>
            <p className="voteAnswer">
              <div className='voteAnswerWords'>
                {votecm.option1}  {percentage1}%
              </div>
              <div className='answerBackColor progress-bar '
                style={{ width: `${percentage1}%` }}>
                <p className='answerBackColorWord'>1000000000</p>
              </div>
            </p>
          </div>

          <p className="voteAnswer" >
            <div className='voteAnswerWords'>
              {votecm.option2}{percentage2}%
            </div>
            <div className='answerBackColor progress-bar'
              style={{ width: `${percentage2}%` }}>
              <p className='answerBackColorWord'>1000000000</p>
            </div>
          </p>
          <p className="voteAnswer">
            <div className='voteAnswerWords'>
              {votecm.option3}{percentage3}%
            </div>
            <div className='answerBackColor progress-bar '
              style={{ width: `${percentage3}%` }}
            >
              <p className='answerBackColorWord'>1000000000</p>


            </div>
          </p>
          <p className="voteAnswer">
            <div className='voteAnswerWords'>
              {votecm.option4}    {percentage4}%
            </div>
            <div className='answerBackColor progress-bar '
              style={{ width: `${percentage4}%` }}
            >
              <p className='answerBackColorWord'>1000000000</p>


            </div>
          </p>

        </div>
      </div>
    </React.Fragment>
  );
}

export default VoteAnswer;






  // export default voteAnswer ;
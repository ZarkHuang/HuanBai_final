import React, { useEffect, useState } from 'react'; // 改狀態的
import axios from 'axios'; // 
import "./votes.css"
import { Link } from 'react-router-dom';
import voteBG from "./pexels-gustavo-cruz-1592119.jpg"



const Votescm = () => {

   const [votes, setVotes] = useState([])

   useEffect(() => {
      const fecthAllVotes = async () => {              // fecth拿東西，async非同步，
         try {
            const res = await axios.get("http://localhost:3344/vote")    // await等到拿好資料，透過axios.get
            setVotes(res.data);
         } catch (err) {
            console.log(err)
         }
      };
      fecthAllVotes();
   }, [])    // []表示只跑一次


   console.log(votes);
   return (
      <div className='allVotes'>

         <div className="votenames  " key={votes.id}>
            <div>
               {votes.map((ooo) => (

                  <div className='voteCard'>
                     <div className='img-cont'>
                        <span className='drop-down-window'>{ooo.voteName}</span>
                        <img className='voteImg' src={voteBG}  alt="voteBG"/>
                     </div>
                     <div className='content-cont'>
                     <span className="card-date">{new Date(ooo.releaseDate).toLocaleDateString()}</span>
                        <span className='voteCard-header'>{ooo.voteSlogan}</span>
                        <span className='voteCard-body'>{ooo.voteDescribe} </span>
                        <button className="btn-goVote p-3"><Link to={`/Vote/${ooo.voteId}`} className="linkToVote">馬上投票</Link></button>
                     </div>
                  </div>

               ))}

            </div>




         </div>
      </div>
   );

}

export default Votescm;
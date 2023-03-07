import { Link } from 'react-router-dom';

function Pay() {

    return (

        <div className="container">

            <div className="Finishorder">

                <h1>訂單完成!</h1>

            </div>

            <div className='next-pay'>

                <button class="checkout"><span><Link to={`/member/payment`} className="next" >訂單紀錄</Link></span></button>

            </div>



        </div>
    );
};

export default Pay;
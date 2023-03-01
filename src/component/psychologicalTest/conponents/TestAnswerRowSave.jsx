// 心理測驗下面的三個選項
import { FacebookIcon, LineIcon, FacebookMessengerIcon } from 'react-share';
const TestAnswerRowSave = () => {

    const shareUrl = 'http://localhost:3000/psychtest';
    const title = '分享這個可愛的大貓熊！';
    const description = '我剛剛測試了這個心理測驗，發現自己是大貓熊屬性，快來試試看吧！';


    return (
        <div className=" row rowSave  testAnswerRowSave">
            <div className=" col-0 col-lg-1 "></div>
            <div id="saveImage" className="col-9 mx-auto col-lg-2 btn m-1">點擊儲存測驗結果</div>
            <div className=" col-0 col-lg-1 "></div>
            <div id="btnToMap" className="col-9 mx-auto col-lg-3 btn  m-1">查看循環杯地圖</div>
            <div className="col-0 col-lg-1 "></div>
            <div id="shareImage" className="col-9 mx-auto col-lg-3 btn  m-1">分享測驗結果

                {/* 分享按鈕 */}
                <FacebookIcon url={shareUrl} title={title} className="shareBtns">
                    <button>分享到Message</button>
                </FacebookIcon>
                <FacebookMessengerIcon url={shareUrl} title={title} className="shareBtns">
                    <button>分享到Message</button>
                </FacebookMessengerIcon>
                <LineIcon url={shareUrl} title={title} className="shareBtns">
                    <button>分享到Message</button>
                </LineIcon>
                {/* < InstagramIcon url={shareUrl} title={title} className="shareBtns">
                    <button>分享到Message</button>
                </ InstagramIcon> */}





            </div>
            <div className=" col-0 col-lg-1 "></div>
        </div >
    )
}

export default TestAnswerRowSave;
// 心理測驗下面的三個選項
import { FacebookIcon, LineIcon, FacebookMessengerIcon } from 'react-share';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';

function saveAsImage() {
    const element = document.querySelector('.rowContainer');
    html2canvas(element).then(canvas => {
        const croppedCanvas = document.createElement('canvas');
        const croppedCtx = croppedCanvas.getContext('2d');

        // Set the canvas size to match the content of the original canvas
        croppedCanvas.width = canvas.width;
        croppedCanvas.height = canvas.height;

        // Draw the original canvas onto the cropped canvas with the desired border radius
        const radius = 70; // Replace with the desired border radius
        croppedCtx.beginPath();
        croppedCtx.moveTo(radius, 0);
        croppedCtx.lineTo(croppedCanvas.width - radius, 0);
        croppedCtx.quadraticCurveTo(croppedCanvas.width, 0, croppedCanvas.width, radius);
        croppedCtx.lineTo(croppedCanvas.width, croppedCanvas.height - radius);
        croppedCtx.quadraticCurveTo(croppedCanvas.width, croppedCanvas.height, croppedCanvas.width - radius, croppedCanvas.height);
        croppedCtx.lineTo(radius, croppedCanvas.height);
        croppedCtx.quadraticCurveTo(0, croppedCanvas.height, 0, croppedCanvas.height - radius);
        croppedCtx.lineTo(0, radius);
        croppedCtx.quadraticCurveTo(0, 0, radius, 0);
        croppedCtx.closePath();
        croppedCtx.clip();
        croppedCtx.drawImage(canvas, 0, 0);

        // Create a link element and download the cropped canvas as an image
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = croppedCanvas.toDataURL('image/png');
        link.click();
    });
}


const TestAnswerRowSave = () => {

    const shareUrl = 'http://localhost:3000/psychtest';
    const title = '分享這個可愛的大貓熊！';
    const description = '我剛剛測試了這個心理測驗，發現自己是大貓熊屬性，快來試試看吧！';


    return (
        <div className=" row rowSave  testAnswerRowSave">
            <div className=" col-0 col-lg-1 "></div>
            <div id="saveImage" className="col-9 mx-auto col-lg-2 btn m-1" onClick={saveAsImage}>點擊儲存測驗結果</div>
            <div className=" col-0 col-lg-1 "></div>
            <Link to={"/map"} id="btnToMap" className="linkToVote col-9 mx-auto col-lg-3 btn  m-1">查看循環杯地圖</Link>
            <div className="col-0 col-lg-1 "></div>
            <Link to={"/psych"} id="btnToMap" className="linkToVote col-9 mx-auto col-lg-3 btn  m-1">再測一次</Link>
            <div className=" col-0 col-lg-1 "></div>
        </div >
    )
}

export default TestAnswerRowSave;
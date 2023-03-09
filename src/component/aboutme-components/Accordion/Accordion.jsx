import Accordion from 'react-bootstrap/Accordion';
import './Accordion.css' 

function AllCollapseExample() {
  return (
    <Accordion className='mt-50 Accordionoo'>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='text-tile'><h4>團隊組成</h4></Accordion.Header>
        <Accordion.Body>
        Huanbai，是來自不同背景的學生所組成，雖然有各自不同的專業領域，
        但我們想要為環境盡一份心力的目標是一致的，這股動力讓我們一同建立了還杯。
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='text-tile'><h4>動機</h4></Accordion.Header>
        <Accordion.Body>
        自2023年1月起，全台開始實施一次用飲料杯限制，由政府引導各大連鎖業者
帶頭提供循環杯服務，供民眾盛裝飲品，目標於2023年底全台市佔率達5%。 <br></br>
由於目前各家業者作法並不一致，民眾若想瞭解循環杯，則需要至多品牌官網、專屬APP或加入官方line好友，才可進一步得到相關資訊。
所以我們建立循環杯彙整平台，提供使用者能更快速搜尋循環杯資訊、循環杯據點以及環境友善理念推廣。

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='text-tile'><h4>未來目標</h4></Accordion.Header>
        <Accordion.Body>
        希望能逐步拓展合作店家與更多品牌廠商，將循環杯地圖與網站推廣給更多人知道！
        希望可以為消費者創造更好的選擇，更好的環境以及更好的未來！
在同個土地上的我們，沒有人可以置身事外，希望大家一起與我們攜手前進！
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
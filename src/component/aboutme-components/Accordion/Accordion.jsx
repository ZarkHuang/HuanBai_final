import Accordion from 'react-bootstrap/Accordion';
import './Accordion.css' 

function AllCollapseExample() {
  return (
    <Accordion className='mt-50 Accordion'>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='text-tile'><h4>團隊組成</h4></Accordion.Header>
        <Accordion.Body>
        杯特，是來自台大各科系不同背景的學生所組成，雖然有各自不同的專業領域，
        但我們想要為環境盡一份心力的目標是一致的，這股動力讓我們一同建立了杯特
        ，希望可以透過環保杯租借，重新改變消費者的思維，喝飲料的同時也可以減輕
        環境的負擔。
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h4>初期推廣困難</h4></Accordion.Header>
        <Accordion.Body>
        起初的推廣和運作，我們面臨到相當多的困難，從最基本的人手不足、和店家談
        合作面臨許多困境，而且我們沒有一筆足夠的資金可以去覆蓋杯子的清洗成本，
        最終我們因為殘膠大量覆蓋杯子，而被迫停止營運。原本想要就此解散的我們，
        但沒有人想要向這個環境議題屈服，於是我們決定，先靜下來好好討論，再重新
        出發。
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h4>成功建立在校連結與新聞曝光</h4></Accordion.Header>
        <Accordion.Body>
        2020年三月，我們重新以uCup平台回到台大校園，找到一群願意支持我們的合作
        店家，找到願意支持我們的學校教授，更在社團擺攤的過程中，找到了更多願意
        支持我們理念的學生們！也成功從眾多比賽中獲得第一筆創業資金，包含了尤努斯
        獎、安麗希望工場、以及國泰獎助計畫，最後我們也成功登上了天下的CSR以及台
        大的USR，讓uCup可以更多人看見！
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
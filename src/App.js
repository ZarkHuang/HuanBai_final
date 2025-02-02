import {
    Routes,
    Route,
  } from "react-router-dom";
import "./style/all.scss";
import "bootstrap/js/index.esm";
import NavBar from "./component/NavBar"
import Footer from "./component/Footer"
import Home from "./pages/home";
import EvnIntro from "./pages/evnIntro";
import ShopIntro from "./pages/shop";
import Map from "./pages/map";
import Shop from "./pages/shop";
import Shopdetail from "./pages/shopdetail";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Pay from "./pages/pay";
import Article from "./pages/article";
import Psych from "./pages/psych";
import PsychologicalTestPage from "./pages/psychologicalTest";
import Votes from "./pages/votes";
import Vote from "./pages/vote";
import Member from "./pages/member";
import VoteRecord from "./pages/voteRecord";
import Fordummies from "./pages/fordummies";
import Answer from "./pages/answer"
import GoLogIn from "./pages/memberpage/GoLogIn"
import GoSignUp from "./pages/memberpage/GoSignUp";
import News from "./pages/News";
import EmptyList from "./component/articleComponents/common/EmptyList/Emptylist";
import Contactus from "./pages/contact";
import Brand from "./pages/aboutme/aboutme";
import MemberList from "./pages/memberpage/ListData";
import MemberVote from "./pages/memberpage/VoteData";
import VoteAnswer from "./pages/memberpage/voteAnswer"
// import './style/'


function App(){
    return (
      
          <div className="">    
            <NavBar/>     
            <div className="wrapBox">    
           <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/evnIntro" element={<EvnIntro/>} />
            <Route path="/brand" element={<Brand/>} />
            <Route path="/contactUs" element={<Contactus/>} />
            <Route path="/shopIntro" element={<ShopIntro/>} />
            <Route path="/fordummies" element={<Fordummies/>} />
            <Route path="/map" element={<Map/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/shopdetail" element={<Shopdetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pay" element={<Pay />} />
            <Route path='/news' element={<Article/>} />
            <Route path='/news/:id' element={<News/>}/>
            <Route path='/page1' element={<EmptyList />}/>
            <Route path='/page2' element={<EmptyList/>}/>
            <Route path="/psych" element={<Psych/>} />
            <Route path="/psychtest" element={<PsychologicalTestPage />} />
            <Route path="/votes" element={<Votes/>} />
            <Route path="/Vote/:voteId" element={< Vote />} />
            <Route path="/Vote/answer/:voteId" element={< Answer />} />
            <Route path="/voteRecord" element={<VoteRecord/>} />
            <Route path="/member/*" element={<Member/>} />
            {/* <Route path="/member/voteAnswer/:voteId" element={<VoteAnswer/>} /> */}
            {/* 會員專區底下的分頁因為是牽套路由？所以不用宣告 */}
           {/*  <Route path="/member/pay" element={<Pay/>} /> */}
           {/*  <Route path="/member/vote" element={<MemberVote/>} /> */}
            <Route path="/gologin" element={<GoLogIn/>} />
            <Route path="/gosignup" element={<GoSignUp/>} />
           </Routes>
            </div>
           <Footer/>
          </div>
       
      );
}


export default App;
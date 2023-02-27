import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import "./style/all.scss";
import "bootstrap/js/index.esm";
import NavBar from "./component/NavBar"
import Footer from "./component/Footer"
import Home from "./pages/home";
import EvnIntro from "./pages/evnIntro";
import Brand from "./pages/brand";
import ContactUs from "./pages/contactUs";
import ShopIntro from "./pages/shop";
import LazyBag from "./pages/lazyBag";
import Map from "./pages/map";
import Shop from "./pages/shop";
import News from "./pages/news";
import Psych from "./pages/psych";
import Votes from "./pages/votes";
import Member from "./pages/member";
import VoteRecord from "./pages/voteRecord";
import Order from "./pages/order";

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
            <Route path="/contactUs" element={<ContactUs/>} />
            <Route path="/shopIntro" element={<ShopIntro/>} />
            <Route path="/lazyBag" element={<LazyBag/>} />
            <Route path="/map" element={<Map/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/psych" element={<Psych/>} />
            <Route path="/votes" element={<Votes/>} />
            <Route path="/voteRecord" element={<VoteRecord/>} />
            <Route path="/member" element={<Member/>} />
            <Route path="/order" element={<Order/>} />

           </Routes>
            </div>
           <Footer/>
          </div>
       
      );
}


export default App;
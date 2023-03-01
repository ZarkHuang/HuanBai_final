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
import Brand from "./pages/brand";
import ContactUs from "./pages/contactUs";
import ShopIntro from "./pages/shop";
import Map from "./pages/map";
import Shop from "./pages/shop";
import News from "./pages/news";
import Psych from "./pages/psych";
import Votes from "./pages/votes";
import Member from "./pages/member";
import VoteRecord from "./pages/voteRecord";
import Order from "./pages/order";
import Fordummies from "./pages/fordummies";

// import './style/'


function App(){
    return (
      
          <div className="">    
            <NavBar/>     
            <div className="wrapBox">    
           <Routes>
            <Route path="/Huanbai/" element={<Home/>} />
            <Route path="/Huanbai/evnIntro" element={<EvnIntro/>} />
            <Route path="/Huanbai/brand" element={<Brand/>} />
            <Route path="/Huanbai/contactUs" element={<ContactUs/>} />
            <Route path="/Huanbai/shopIntro" element={<ShopIntro/>} />
            <Route path="/Huanbai/fordummies" element={<Fordummies/>} />
            <Route path="/Huanbai/map" element={<Map/>} />
            <Route path="/Huanbai/shop" element={<Shop/>} />
            <Route path="/Huanbai/news" element={<News/>} />
            <Route path="/Huanbai/psych" element={<Psych/>} />
            <Route path="/Huanbai/votes" element={<Votes/>} />
            <Route path="/Huanbai/voteRecord" element={<VoteRecord/>} />
            <Route path="/Huanbai/member" element={<Member/>} />
            <Route path="/Huanbai/order" element={<Order/>} />

           </Routes>
            </div>
           <Footer/>
          </div>
       
      );
}


export default App;
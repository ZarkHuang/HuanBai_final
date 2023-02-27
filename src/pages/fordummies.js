import React from 'react'
import Farm from '../component/fordummies/farm-invest/farm-invest';
import Hero from '../component/fordummies/hero/hero';
import HowIsWork from '../component/fordummies/how-is-works/how-is-works';
import Invest from '../component/fordummies/invest/invest';
import Opportunities from '../component/fordummies/Opportunities/Opportunities';


const Fordummies = () => {
  return (
    <div className="fordummies-container">
      <Hero/>
      <Opportunities/>
      <Invest/>
      <HowIsWork/>
      <Farm/>
    </div>
  )
}

export default Fordummies
import React from 'react'
import './farm.css'
import { Link } from 'react-router-dom'

const Farm = () => {
  return (
    <section class="farm-invest w-105">
    <h2 class="farm-invest__title">
      哪裡使用 <span>循環杯</span>？
    </h2>
    <Link to="/news/2" class="farm-btn btn__farm--invest">Learn More</Link>
  </section>

  )
}

export default Farm
import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

const EmptyList = () => {
  return (
    <>
      <Link to="/#" className='blog-goBack' >
        <span> &#8592; </span> <span>Go Back</span>
      </Link>
    <div className='emptyList-wrap'>
      <div className='img-box'>
        <img src='/assets/images/13525.gif' alt="404" />
        </div>
        <div className='words'>
        <h2>404</h2>
        <p>Page Not Found.</p>
        </div>
    </div>
    </>
  )
}

export default EmptyList



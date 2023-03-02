import React from 'react'
import Chip from '../../../common/Chip/chip'
import { Link } from 'react-router-dom'
import './style.css'


const BlogItem = ({
    blog:{
        id,
        title,
        category,
        subCategory,
        description1,
        description2,
        authorName,
        authorAvatar,
        createdAt,
        cover,
        subtitle,
        contentCover
        },
        }) => {
  return (
    <div className='blogItem-box'>
    <Link className='blogItem-wrap'>
      <div className='blogItem-cover-Box'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      </div>
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description1}</p>
      <footer className='article-footer'>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/news/${id}`}>
          ➝
        </Link>
      </footer>
    </Link>
    </div>
  )
};

export default BlogItem
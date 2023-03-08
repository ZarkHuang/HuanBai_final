
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { blogList } from '../../component/articleComponents/config/data';
import Chip from '../../component/articleComponents/common/Chip/chip'
import EmptyList from '../../component/articleComponents/common/EmptyList/Emptylist';
import './style.css'
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js';
import ToTop from '../../component/ToTop';

const News = () => {
  const {id} = useParams()
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    /* 下面是 componentDidMount*/
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if(blog){
      setBlog(blog);
    }
    /* 第二個參數是用來限定當哪些變數被改變時useEffect要觸發 */
  }, []);

  return (
    <>
    <ToTop/>
      <ScrollToTop />
      
      {blog ? (
        <div className='blog-wrap'>
          <header>

          <Link to="/news" className='blog-goBack' >
        <span> &#8592; </span> <span>Go Back</span>
      </Link>

          <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1 className='blog-title'>{blog.title}</h1>

          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description1}</p>
          <h5 className='blog-subtitle'>{blog.subtitle}</h5>
          <p className='blog-desc'>{blog.description2}</p>

          <div className='detail'>
          <p className='blog-cc'>詳細（PR TIMES）</p>
          <div class="form-group">
              <a  href={blog.cypher} target="_blank" type="submit" class="form-btn btn__farm--invest" value="Send">Learn more</a>
          </div>
          </div>
          
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default News;
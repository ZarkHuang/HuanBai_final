import React , { useState }from 'react'
import BlogList from '../../components/Home/BlogList/bloglist'
import { blogList } from '../../components/config/data'
import EmptyList from '../../components/common/EmptyList/Emptylist'
import './style.css'

const Page = () => {
  const [ blogs, setBlogs] = useState(blogList);
  const [ searchkey , setSearchKey ] = useState('');


  return (
    <div className='container'>
      {/* Article List & Empty List */}
      <div className='conetent'>
      {!blogs.length ? <EmptyList /> : <BlogList />}
      </div>
    </div>

  );
};

export default Page
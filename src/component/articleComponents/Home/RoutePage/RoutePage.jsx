import 'bootstrap/dist/css/bootstrap.min.css';
import React , { useState }from 'react'
import BlogList from '../BlogList/bloglist'
import { blogList , tavel } from '../../config/data'
import EmptyList from '../../common/EmptyList/Emptylist'
import './style.css'


const  RoutePage =() => {

  const [ blogs, setBlogs] = useState(blogList);
  const [toggle,setToggle] = useState(1)
  const [searchKey, setSearchKey] = useState(blogList);
  const [Active, setActive] = useState('#64C676');



  function updateToggle(id){
    setToggle(id);
    setBlogs(blogList);
    setSearchKey('');
    setActive(id); // 新增的狀態
  }

  function updateToggleNews(id){
    setToggle(id);
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
    blog.category.toLowerCase().includes("news")
    );
    setBlogs(filteredBlogs);
  }



  function updateToggleArticle(id){
    setToggle(id);
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
    blog.category.toLowerCase().includes("cooking")
    );
    setBlogs(filteredBlogs);
  }



  return (
    <div className=' align-center justify-content-center'>
      <div className='col-12 tab p-5'>
        <ul className='d-flex routerpage'>
        <li className={toggle === 1 ? 'flex-fill active' : 'flex-fill'} onClick={()=>updateToggle(1)}>全部</li>
        <li className={toggle === 2 ? 'flex-fill active' : 'flex-fill'} onClick={()=>updateToggleNews(2)}>新聞</li>
        <li className={toggle === 3 ? 'flex-fill active' : 'flex-fill'} onClick={()=>updateToggleArticle(3)}>文章</li>

        </ul>
        <div className={toggle === 1 ? "show-content" : "content"}>
          {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs}/>} 
        </div>

        <div className={toggle === 2 ? "show-content" : "content"}>
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs}/>} 
        </div>

        <div className={toggle === 3 ? "show-content" : "content"}>
          {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs}/>} 
        </div>

      </div>
    </div>
  );
}

export default RoutePage;
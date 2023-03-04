import React , { useState }from 'react'
import Header from '../../component/articleComponents/Home/Header/header'
import { blogList } from '../../component/articleComponents/config/data'
import './style.css'
import RoutePage from '../../component/articleComponents/Home/RoutePage/RoutePage'
import ToTop from '../../component/ToTop'



const ArticleHome = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchSubmit = event => {
    event.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
    blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };



  return (
    <div className='container'>
      <ToTop/>
      {/* Header */}
    <Header />
    <div>
     {/* Route page */}
     <RoutePage/>
      {/* Article List & Empty List */}
      {/* {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs}/>} */}

    </div>
    </div>
  );
};

export default ArticleHome


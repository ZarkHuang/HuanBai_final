import React from 'react';

import { Route,Routes  } from 'react-router-dom';
import EmptyList from '../component/articleComponents/common/EmptyList/Emptylist';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './News';
import ArticleHome from './articlehome';



const Article = () => (
    <div className=''>
      <Routes>
      <Route path='/' exact element={<ArticleHome/>} />
      <Route path='/news/:id' element={<News/>}/>
      <Route path='/page1' element={<EmptyList />}/>
      <Route path='/page2' element={<EmptyList/>}/>
      <Route path='*' element={<EmptyList/>}/>
      </Routes>
    </div>
  );


export default Article;
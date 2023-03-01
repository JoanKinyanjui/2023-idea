import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css'

function OneArticle({article}) {
  return (
    <div className='pb-12'>
        <div>
        <img src={article.image} className='one-article-img' />
        </div>
  <div className='one-article-content'>
  <p className='py-2'>{article.title}</p>
        <div className='article-readmore w-full flex justify-content-center italic  text-green-600'>
          <Link to='/blog/singlepage'>Read more</Link>
        </div>
  </div>
    </div>
  )
}

export default OneArticle
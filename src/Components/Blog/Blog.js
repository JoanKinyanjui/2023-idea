import React from 'react'
import Articles from './Articles/Articles';
import BlogHero from './BlogHero';
import BlogNav from './BlogNav';
import Events from './Events/Events';
import SinglePage from './SinglePage/SinglePage';
import Stories from './Stories/Stories';

function Blog() {
  return (
    <div>
      <BlogNav />
      <Articles />
      <Stories />
      <Events />
      <BlogHero />
      
    
    </div>
  )
}

export default Blog;
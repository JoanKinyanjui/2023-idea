import React from 'react'
import Articles from './Articles/Articles';
import BlogHero from './BlogHero';
import BlogNav from './BlogNav';
import Events from './Events/Events';
import Stories from './Stories/Stories';

function Blog() {
  return (
    <div>
      <BlogNav />
      <BlogHero />
      <Articles />
      <Stories />
      <Events />
    </div>
  )
}

export default Blog;
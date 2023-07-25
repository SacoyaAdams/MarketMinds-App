import React from 'react';
import Carousel from './Carousel';
import Post2 from './Post2'; 
import Post3 from './Post3';
import Post4 from './Post4';
const HomePage = () => {
  return (
    <div>
      <h1>"Discover, Blog, and Prosper - Unleash Your Market Mind!"</h1>
      <Carousel />
      <Post4 />
      <Post2 /> 
      <Post3 />
    </div>
  );
};

export default HomePage;
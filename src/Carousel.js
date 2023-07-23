import React from 'react';
import './carousel.css';

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUN1xQfvjh-sWV6lItj88u20YXx8mSzM0Wag&usqp=CAU" alt="..." className="carousel-image" />
          <div className="carousel-caption d-none d-md-block">
            <h5>EXPLORE THE MARKETS</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_se1P1kmxVRm_LwJTHYpvxmUfc_8gwgsSYQ&usqp=CAU" className="d-block w-100 carousel-image" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>CREATE YOUR BLOG</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTVW9wrjbIHj283Fnh4zNvdF1WwklxSmapg&usqp=CAU" className="d-block w-100 carousel-image" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>LEARN HOW TO BUDGET</h5>
            <p>Some representative placeholder content for the third slide.</p>
            <div className="slide-btn">
              <button className="btn btn-1">Our Service</button>
              <button className="btn btn-2">Explore</button>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

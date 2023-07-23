import React from 'react';

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
          <img src="https://img.money.com/2022/11/News-Why-Keep-Investing-Even-Balance-Shrinking.jpg?crop=0px%2C146px%2C2880px%2C1620px&quality=60&w=800" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRIT58rIKsev_CmXHMhC-Quy2pCdIV8QcTg&usqp=CAU" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTVW9wrjbIHj283Fnh4zNvdF1WwklxSmapg&usqp=CAU" className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
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

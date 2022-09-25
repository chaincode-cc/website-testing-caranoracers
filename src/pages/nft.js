import React from "react";
import wheel from '../assets/images/wheel.png'
import './nft.css'

const NFTS = () => {
    return(
        <>
        <span class="anchor" id='nfts'></span>
        <section  className="d-flex flex-column carousel-wrapper">
          <h3>NFTs</h3>
        <div>
        <div id="carouselCars" class="carousel carouselCars" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselCars" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselCars" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselCars" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
          <p>CARS</p>
    <div class="carousel-item active">
      <img src={wheel} class="d-flex " alt="..." />
    </div>
    <div class="carousel-item">
      <img src={wheel} class="d-flex " alt="..." />
    </div>
    <div class="carousel-item">
      <img src={wheel} class="d-flex " alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselCars" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselCars" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div>
        <div id="carouselExampleIndicators1" class="carousel carouselExampleIndicators1 " data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
<p>DRIVERS</p>
    <div class="carousel-item active">
      <img src={wheel} class="d-flex " alt="123" />
    </div>
    <div class="carousel-item">
      <img src={wheel} class="d-flex " alt="123" />
    </div>
    <div class="carousel-item">
      <img src={wheel} class="d-flex " alt="123" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</section>
  </>
    )
}

export default NFTS
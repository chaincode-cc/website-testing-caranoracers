/* eslint-disable jsx-a11y/anchor-is-valid */


import React from "react";
import './nft.css'
import nft1 from '../assets/videos/Car1.mp4'
import nft2 from '../assets/videos/Racer1.MP4'


const NFTTitles = {
  Cars:{  
    one:"Normal Car",
    two:"Cool Car",
    three:"Crazy Car",
  },
  Racer:{  
      one:"Normal Racer",
      two:"Cool Racer",
      three:"Crazy Racer",
  }
}

const NFTS = () => {
    return(
        <div className="mt-4 text-center">
        {/* CARS */}
        <h3>CARS</h3>
  <div class="d-flex align-content-around justify-content-around flex-wrap">
  
    <div class="card bg-secondary d-flex justify-content-center align-items-center">
      <div class="card-body bg-secondary">
      <div class="ribbon ribbon-top-right"><span>Common</span></div>
        <h5 class="card-title fontAutoSized">{NFTTitles.Cars.one}</h5>
        <video src={nft1} muted loop autoPlay className="nft1">
          Your browser does not support the video tag.
        </video>
      </div>
        <a href="#" class="btn btn-primary fontAutoSized"><span>Buy</span></a>
    </div>
  
    <div class="card bg-secondary d-flex justify-content-center align-items-center">
      <div class="card-body bg-secondary">
      <div class="ribbon ribbon-top-right"><span>uncommon</span></div>
        <h5 class="card-title fontAutoSized">{NFTTitles.Cars.two}</h5>
        <video src={nft1} muted loop autoPlay className="nft1">
          Your browser does not support the video tag.
        </video>
      </div>
        <a href="#" class="btn btn-primary fontAutoSized"><span>Buy</span></a>
    
  </div>
  
    <div class="card bg-secondary d-flex justify-content-center align-items-center">
      <div class="card-body bg-secondary">
      <div class="ribbon ribbon-top-right"><span>rare</span></div>
        <h5 class="card-title fontAutoSized">{NFTTitles.Cars.three}</h5>
        <video src={nft1} muted loop autoPlay className="nft1">
          Your browser does not support the video tag.
        </video>
      </div>
        <a href="#" class="btn btn-primary fontAutoSized"><span>Buy</span></a>
    </div>
</div>   

{/* DRIVERS */}
<h3 className="mt-4">RACERS</h3>
<div class="d-flex align-content-around justify-content-around flex-wrap">
  
  <div class="card bg-secondary d-flex justify-content-center align-items-center">
    <div class="card-body bg-secondary">
    <div class="ribbon ribbon-top-right"><span>Common</span></div>

      <h5 class="card-title fontAutoSized">{NFTTitles.Racer.one}</h5>
      <video src={nft2} muted loop autoPlay className="nft2">
        Your browser does not support the video tag.
      </video>
    </div>
      <a href="#" class="btn btn-primary fontAutoSized"><span>Buy</span></a>
  </div>

  <div class="card bg-secondary d-flex justify-content-center align-items-center">
    <div class="card-body bg-secondary">
    <div class="ribbon ribbon-top-right"><span>uncommon</span></div>

      <h5 class="card-title fontAutoSized">{NFTTitles.Racer.two}</h5>
      <video src={nft2} muted loop autoPlay className="nft2">
        Your browser does not support the video tag.
      </video>
    </div>
      <a href="#" class="btn btn-primary fontAutoSized"><span>Buy</span></a>
  
</div>

  <div class="card bg-secondary d-flex justify-content-center align-items-center">
    <div class="card-body bg-secondary">
    <div class="ribbon ribbon-top-right"><span>rare</span></div>

      <h5 class="card-title fontAutoSized">{NFTTitles.Racer.three}</h5>
      <video src={nft2} muted loop autoPlay className="nft2">
        Your browser does not support the video tag.
      </video>
    </div>
      <a href="#" class="btn btn-primary fontAutoSized"><span>Buy</span></a>
  </div>

</div>   
<button type="button" class="btn mt-3 btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
  WHOLE COLLECTION
</button>
    </div>
    )
}

export default NFTS
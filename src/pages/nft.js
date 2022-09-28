/* eslint-disable jsx-a11y/anchor-is-valid */


import React from "react";
import './nft.css'
import nft1 from '../assets/videos/Car1.mp4'

const NFTTitles = {
  Cars:{  
    one:"Normal Car",
    two:"Cool Car",
    three:"Crazy Car",
  },
  Racer:{  
      one:"Normal Racer",
      two:"Cool Car",
      three:"Crazy Car",
  }
}

const NFTS = () => {
    return(
        <>
  <div class="d-flex align-content-around justify-content-around flex-wrap">
  
    <div class="card bg-secondary d-flex justify-content-center align-items-center">
      <div class="card-body bg-secondary">
        <h5 class="card-title fontAutoSized">{NFTTitles.Cars.one}</h5>
        <video src={nft1} muted loop autoPlay className="nft1">
          Your browser does not support the video tag.
        </video>
      </div>
        <a href="#" class="btn btn-primary fontAutoSized"><span>Buy</span></a>
    </div>
  
    <div class="card bg-secondary d-flex justify-content-center align-items-center">
      <div class="card-body bg-secondary">
        <h5 class="card-title fontAutoSized">{NFTTitles.Cars.two}</h5>
        <video src={nft1} muted loop autoPlay className="nft1">
          Your browser does not support the video tag.
        </video>
      </div>
        <a href="#" class="btn btn-primary fontAutoSized"><span>Buy</span></a>
    
  </div>
  
    <div class="card bg-secondary d-flex justify-content-center align-items-center">
      <div class="card-body bg-secondary">
        <h5 class="card-title fontAutoSized">{NFTTitles.Cars.three}</h5>
        <video src={nft1} muted loop autoPlay className="nft1">
          Your browser does not support the video tag.
        </video>
      </div>
        <a href="#" class="btn btn-primary fontAutoSized"><span>Buy</span></a>
    </div>
  
</div>   

    </>
    )
}

export default NFTS
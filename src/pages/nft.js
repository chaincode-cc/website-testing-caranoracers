/* eslint-disable jsx-a11y/anchor-is-valid */


import React from "react";
import './nft.css'
import nft1 from '../assets/videos/Car1.mp4'
import nft2 from '../assets/videos/Racer1.MP4'


let carOne = {
      title: "Normal Car",
      ribon: "common",
      image:nft1
    }
let carTwo = {
      title: "Cool Car",
      ribon: "rare",
      image:nft1
    }
let carThree ={
      title: "Crazy Car",
      ribon: "epic",
      image:nft1
    }

let cars = [carOne, carTwo, carThree]
  
  let racerOne = {
    title: "Normal Racer",
    ribon: "common",
    image:nft2
  }
  let racerTwo = {
    title: "Cool Racer",
    ribon: "rare",
    image:nft2
  }
let racerThree = {
    title: "Crazy Racer",
    ribon: "epic",
    image:nft2
  }

let racers = [racerOne,racerTwo,racerThree ]

const NFTS = () => {

  function styling (ribbon){
    if (ribbon === "rare"){
      return {backgroundColor: "purple"}}
      else if (ribbon === "epic") {
        return {backgroundColor: "#e1ad21"}
      }
    else return {backgroundColor: "#3498db"}
  }
    return(
        <div className="mt-4 text-center">
  
  {/* CARS */}
  
  <h3>CARS</h3>
  <div className="d-flex align-content-around justify-content-around flex-wrap">
      {cars.map((car,y) =>
        <div key={y} className="card bg-secondary d-flex justify-content-center align-items-center">
        <div className="card-body bg-secondary">
        <div className="ribbon ribbon-top-right" ><span style={styling(car.ribon)}>{car.ribon}</span></div>
          <h5 className="card-title fontAutoSized">{car.title}</h5>
          <video src={car.image} muted loop autoPlay className="nft1">
            Your browser does not support the video tag.
          </video>
        </div>
          <a href="#" className="btn btn-primary fontAutoSized"><span>Buy</span></a>
      </div>
    )}
</div>   

{/* DRIVERS */}
<h3 className="mt-4">RACERS</h3>
<div className="d-flex align-content-around justify-content-around flex-wrap">
      {racers.map((car,y) =>
        <div key={y} className="card bg-secondary d-flex justify-content-center align-items-center">
        <div className="card-body bg-secondary">
        <div className="ribbon ribbon-top-right" ><span style={styling(car.ribon)}>{car.ribon}</span></div>
          <h5 className="card-title fontAutoSized">{car.title}</h5>
          <video src={car.image} muted loop autoPlay className="nft1">
            Your browser does not support the video tag.
          </video>
        </div>
          <a href="#" className="btn btn-primary fontAutoSized"><span>Buy</span></a>
      </div>
    )}
</div>  
<button type="button" className="btn mt-3 btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
  WHOLE COLLECTION
</button>
    </div>
    )
}

export default NFTS
import React from "react";
import '../styles/nft.css'
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
        <div className="mt-4 text-center card-container " >
  
  {/* CARS */}

  <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="true"> 
{cars.map( (car ,index) =>
      <><div className="carousel-indicators">

    <button type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide-to={index === 0 && index} className="active" aria-current="true" aria-label={`Slide ${index}`}></button>
    <button type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide-to={index > 0 && index} aria-current="true" aria-label={`Slide ${index}`}></button>
  </div><div className="carousel-inner">

      {index === 0 ? <div className="carousel-item active">
        <div key={index} className="card bg-secondary d-flex justify-content-center align-items-center">
          <div className="card-body bg-secondary">
            <div className="ribbon ribbon-top-right"><span style={styling(car.ribon)}>{car.ribon}</span></div>
            <h5 className="card-title fontAutoSized">{car.title}</h5>{index}
            <video src={car.image} muted loop autoPlay className="nft1">
              Your browser does not support the video tag.
            </video>
          </div>
          <button className="btn m-2 fontAutoSized btn-dark "><span>Buy</span></button>
        </div>
      </div> :
        <div className="carousel-item">
          <div key={index} className="card bg-secondary d-flex justify-content-center align-items-center">
            <div className="card-body bg-secondary">
              <div className="ribbon ribbon-top-right"><span style={styling(car.ribon)}>{car.ribon}</span></div>
              <h5 className="card-title fontAutoSized">{car.title}</h5>{index}
              <video src={car.image} muted loop autoPlay className="nft1">
                Your browser does not support the video tag.
              </video>
            </div>
            <button className="btn m-2 fontAutoSized btn-dark "><span>Buy</span></button>
          </div>
        </div>}
    </div><button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button><button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button></>
        )}
        </div> 





  <h3>CARS</h3>
  <div className="d-flex align-content-around  justify-content-around flex-wrap">
      {cars.map((car,y) =>
        <div key={y} className="card bg-secondary d-flex justify-content-center align-items-center">
        <div className="card-body bg-secondary">
        <div className="ribbon ribbon-top-right" ><span style={styling(car.ribon)}>{car.ribon}</span></div>
          <h5 className="card-title fontAutoSized">{car.title}</h5>
          <video src={car.image} muted loop autoPlay className="nft1">
            Your browser does not support the video tag.
          </video>
        </div>
          <button className="btn m-2 fontAutoSized btn-dark "><span>Buy</span></button>
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
          <button href="#" className="btn btn-dark m-2  fontAutoSized"><span>Buy</span></button>
      </div>
    )}
</div>  
<button type="button" className="btn mt-3 btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-title="This top tooltip is themed via CSS variables.">
  WHOLE COLLECTION
</button>
    </div>
    )
}

export default NFTS
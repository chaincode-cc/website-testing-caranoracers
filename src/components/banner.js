import React from "react";
import './banner.css'
import logo1 from '../assets/images/10-01.png'
// import vid1 from '../assets/videos/cool.gif'
import vid2 from '../assets/videos/cool.mp4'




const Banner = () => {
    return(
        <>
  <div >
  <img src={logo1} alt='some' className="main-logo" />
<video src={vid2} muted loop autoPlay className="banner-video">
  Your browser does not support the video tag.
</video>

</div>
      
      {/* <div className="main-logo" > 
      <img src={logo1} alt='some' className="main-logo" />
      </div> */}
      
        </>
    )
}

export default Banner
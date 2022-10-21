import React from "react";
import './banner.css'
// import vid1 from '../assets/videos/cool.gif'
import vid2 from '../assets/videos/banner.mp4'




const Banner = () => {
    return(
        <>
  <div id='top'>
<video src={vid2} muted autoPlay className="banner-video">
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
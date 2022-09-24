import React from "react";
import './banner.css'
// import logo from '../assets/images/wheel.png'; 
import logo1 from '../assets/images/10-01.png'

const Banner = () => {
    return(
        <>
          <div className="App">
    <header className="App-header"> 
    <div className="bg-screener">
      <img src={logo1} alt='some' className="main-logo" />
      </div>
      {/* <img src={logo} className="App-logo" alt="logo" /> 
      <p className='mt-5'> Coming soon! </p>  */}
    </header> 
  </div> 
        </>
    )
}

export default Banner
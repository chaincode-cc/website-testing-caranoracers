/* eslint-disable jsx-a11y/anchor-is-valid */


import React from "react";
import './nft.css'

const NFTS = () => {
    return(
        <>
  <div class="d-flex align-content-around justify-content-around flex-wrap">
  
    <div class="card m-2">
      <div class="card-body bg-secondary">
        <h5 class="card-title fontAutoSized">Special title treatment</h5>
        <p class="card-text fontAutoSized">IMG</p>
        <a href="#" class="btn btn-primary fontAutoSized">Go somewhere</a>
      
    </div>
  </div>
  
    <div class="card">
      <div class="card-body bg-secondary">
        <h5 class="card-title fontAutoSized">Special title treatment</h5>
        <p class="card-text fontAutoSized">IMG</p>
        <a href="#" class="btn btn-primary fontAutoSized">Go somewhere</a>
      </div>
    
  </div>
  
    <div class="card">
      <div class="card-body bg-secondary">
        <h5 class="card-title fontAutoSized">Special title treatment</h5>
        <p class="card-text fontAutoSized">IMG</p>
        <a href="#" class="btn btn-primary fontAutoSized">Go somewhere</a>
      </div>
    </div>
  
</div>   

    </>
    )
}

export default NFTS
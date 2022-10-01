/* eslint-disable jsx-a11y/anchor-is-valid */

function TopNavBar() {

function setToggler () {
  console.log("Clicked")
}

  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
  <div className="container-fluid" >
    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand f1font" href="#">CARDANO RACERS</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ps-1">
        <li className="nav-item">
          <a className="nav-link f1font" onClick={setToggler} aria-current="page" href="#intro">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link f1font" onClick={setToggler} href="#howtoplay">HOW TO PLAY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link f1font" onClick={setToggler} href="#nfts">NFTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link f1font" onClick={setToggler} href="#contact">CONTACT US</a>
        </li>
        <li className="nav-item">
          <button className="f1font btn btn-secondary" id='garage' data-bs-toggle="modal" data-bs-target="#exampleModal">GARAGE</button>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
    </div>
  </div>
</nav>

<div className="modal fade "  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable " >
    <div className="modal-content" style={{background:"#969696"}}>
      <div className="modal-header" >
        <h5 className="modal-title f1font"  id="exampleModalLabel">Your Garage</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Here I will ask you to connect your wallet if not connected or I will show you your garage with your NFTs.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default TopNavBar;
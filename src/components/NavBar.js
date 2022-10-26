import WalletConnector from "../wallet-service/connector";

function TopNavBar() {
  
  
function collapseItem () {
  console.log("HII")
  document.getElementById("navbarNav").className = "collapse navbar-collapse"
}

  return (
    <>
    <nav className="navbar sticky-top navbar-dark bg-dark">
  <div className="container-fluid" >
    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand f1font" href="/#">CARDANO RACERS</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ps-1">
        <li className="nav-item">
          <a className="nav-link f1font" onClick={collapseItem} href="/#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link f1font" onClick={collapseItem} href="/garage">Testing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link f1font" onClick={collapseItem} href="/#howtoplay">HOW TO PLAY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link f1font" onClick={collapseItem} href="/#nfts">NFTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link f1font" onClick={collapseItem} href="/#contact">CONTACT US</a>
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
        <h5 className="modal-title f1font" id="exampleModalLabel">Your Garage</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <WalletConnector/>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default TopNavBar;
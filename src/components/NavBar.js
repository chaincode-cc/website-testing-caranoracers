/* eslint-disable jsx-a11y/anchor-is-valid */

function TopNavBar() {

function setToggler () {
  console.log("Clicked")
}

  return (
    <>
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
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
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default TopNavBar;
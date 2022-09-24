/* eslint-disable jsx-a11y/anchor-is-valid */

function TopNavBar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand f1font" href="#">Cardano Racers</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ps-1">
        <li class="nav-item">
          <a class="nav-link f1font" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link f1font" href="#">HOW TO PLAY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link f1font" href="#">NFTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link f1font ">CONTACT US</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default TopNavBar;
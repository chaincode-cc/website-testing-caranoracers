/* eslint-disable jsx-a11y/anchor-is-valid */

function TopNavBar() {
  return (
    <>
    <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Cardano Racers</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">HOW TO PLAY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">NFTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">CONTACT US</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default TopNavBar;
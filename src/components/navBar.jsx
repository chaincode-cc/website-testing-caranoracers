/* eslint-disable react/react-in-jsx-scope */
import WalletConnector from '../wallet-service/connector';

import { useNavigate } from 'react-router-dom';


function TopNavBar() {

	const navigate = useNavigate();

	function collapseItem(url) {
		document.getElementById('navbarNav').className = 'collapse navbar-collapse';
		navigate(url);
	}

	return (
		<>
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<span className="navbar-brand f1font" style={{ cursor:'default'}}  >
            CARDANO RACERS
					</span>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ps-1">
							<li className="nav-item">
								<a className="nav-link f1font" style={{ cursor:'pointer	'}} onClick={() => collapseItem('/')}>
                  HOME
								</a>
							</li>
							
							<li className="nav-item">
								<a className="nav-link f1font" style={{ cursor:'pointer	'}} onClick={() => collapseItem('/races')}>

                  RACES
								</a>
							</li>
						
						
							<li className="nav-item">
								<a
									className="nav-link f1font"
									onClick={collapseItem}
									style={{ cursor:'pointer'}}
									data-bs-toggle="modal"
									data-bs-target="#exampleModal"
								>
                  GARAGE
								</a>
							</li>
						</ul>
					</div>
					<div className="collapse navbar-collapse" id="navbarNav"></div>
				</div>
			</nav>

			<div
				className="modal fade "
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
					<div className="modal-content" style={{ background: '#969696' }}>
						<div className="modal-header">
							<h5 className="modal-title f1font" id="exampleModalLabel">
                Your Garage
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<WalletConnector />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TopNavBar;

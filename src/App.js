import './styles/App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Banner from './components/banner';
import Intro from './pages/intro';
import NFTS from './nfts/nft';
import HowTo from './pages/howto';
import Contact from './pages/contact';
import FollowUs from './pages/followus';
import WalletConnector from './wallet-service/connector';
import GamePage from './Game/gamePage';
import StartBtn from './Game/startBtn';




function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Banner />
							<div className="main-wrapper">
								<NFTS />
								<Intro />
								<HowTo />
								<Contact />
								<FollowUs />
							</div>
						</>
					}
				/>
				<Route path="/garage" element={<WalletConnector />} />
				<Route path="/game" element={<GamePage />} />
				<Route path="/ready" element={
					<div className='d-flex justify-content-center mainBg'>
						<StartBtn />
					</div>
				} />

			</Routes>
		</Router>
	);
}

export default App;

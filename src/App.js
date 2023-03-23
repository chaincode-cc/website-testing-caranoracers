import './styles/App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopNavBar from './components/navBar';
import Banner from './components/banner';
import Intro from './pages/intro';
import NFTS from './nfts/nft';
import HowTo from './pages/howto';
import Contact from './pages/contact';
import FollowUs from './pages/followus';
import WalletConnector from './wallet-service/connector';
import GamePage from './Game/gamePage';
import RacesPage from './Game/racesPage';




function App() {
	return (
		<Router>
			<TopNavBar />
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
				<Route path="/races" element={<RacesPage />} />

			</Routes>
		</Router>
	);
}

export default App;

import './styles/App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Banner from './components/banner';
import Intro from './pages/intro';
import NFTS from './nfts/nft';
import HowTo from './pages/howto';
import Contact from './pages/contact';
import FollowUs from './pages/followus';
import CountDown from './components/countdown';
import WalletConnector from './wallet-service/connector';
import GamePage from './pages/gamePage';
import GamePage2 from './pages/gamePageTest';


const THREE_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

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
								<CountDown targetDate={dateTimeAfterThreeDays} />
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
				<Route path="/game2" element={<GamePage2 />} />

			</Routes>
		</Router>
	);
}

export default App;

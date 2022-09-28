
import './styles/App.css';
import 'boxicons'

import Banner from './components/banner';
import Intro from './pages/intro';
import NFTS from './pages/nft';
import HowTo from './pages/howto';
import Contact from './pages/contact';
import FollowUs from './pages/followus';
import CountDown from './components/countdown';

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

function App() {
return ( 
<div className="main-wrapper"> 
<Banner />
<CountDown targetDate={dateTimeAfterThreeDays} />
<NFTS />
<Intro />
<HowTo />
<Contact />
<FollowUs />

</div> 
); 
}; 

export default App;


import './styles/App.css';
import 'boxicons'

import Banner from './components/banner';
import Intro from './pages/intro';
import NFTS from './pages/nft';
import HowTo from './pages/howto';
import Contact from './pages/contact';
import FollowUs from './pages/followus';

function App() {
return ( 
<div className="main-wrapper"> 
<Banner />
<Intro />
<HowTo />
<NFTS />
<Contact />
<FollowUs />
</div> 
); 
}; 

export default App;

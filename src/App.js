
import './styles/App.css';

import Banner from './components/banner';
import Intro from './pages/intro';
import NFTS from './pages/nft';

function App() {
return ( 
<div className="main-wrapper"> 
<Banner />
<Intro />
<NFTS />

</div> 
); 
}; 

export default App;

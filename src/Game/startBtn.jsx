import React from 'react';
import { Link } from 'react-router-dom';


const StartBtn = () =>{
 
	return(
		<>
			<Link to={'/game'}><button className='btn btn-lg btn-secondary startBtn'>START GAME</button></Link>
		</>
	);
};


export default StartBtn;
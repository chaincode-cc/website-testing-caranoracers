import React from 'react';


const StartBtn = () =>{
 
	return(
		<div className='d-flex flex-column'>
			<div className="card text-center noLink text-body" style={{width:'200%', height:'34vh', marginTop:'20%'}}>
				<div className="card-header">
        Featured Race
				</div>
				<div className="card-body">
					<h5 className="card-title text-body">HEAD TO HEAD</h5>
					<p className="card-text text-body">NUMBER OF PARTICIPANTS: {1}/{2} PLAYERS</p>
					<p className="card-text text-body">ENTRY FEE: 10 NITRO</p>
					<p className="card-text text-body">PLACES PAID: 1st PLACE</p>
					<p className="card-text text-body">PRIZE: 10 ADA</p>

					<a href="/game" className="btn btn-primary">ENTER RACE</a>
				</div>
			</div> 

			<div className="card text-center noLink text-body" style={{width:'200%', height:'30vh', marginTop:'20%'}}>
				<div className="card-body">
					<h5 className="card-title text-body">TURBO</h5>
					<p className="card-text text-body">NUMBER OF PARTICIPANTS: {8}/{12} PLAYERS</p>
					<p className="card-text text-body">ENTRY FEE: 20 NITRO</p>
					<p className="card-text text-body">PLACES PAID: 1st PLACE</p>
					<p className="card-text text-body">PRIZE: 20 ADA</p>

					<a href="/game" className="btn btn-primary">ENTER RACE</a>
				</div>
			</div> 

			<div className="card text-center noLink text-body" style={{width:'200%', height:'44vh', marginTop:'20%'}}>
				<div className="card-body">
					<h5 className="card-title text-body">FREE ROLL</h5>
					<p className="card-text text-body">NUMBER OF PARTICIPANTS: {12}/{25} PLAYERS</p>
					<p className="card-text text-body">ENTRY FEE: NONE</p>
					<p className="card-text text-body">PLACES PAID: <ul className="list-group list-group-flush">
						<li className="list-group-item">1st PLACE: 40 ADA</li>
						<li className="list-group-item">2nd PLACE: 30 ADA</li>
						<li className="list-group-item">3rd PLACE: 20 ADA</li>
					</ul></p>
					<p className="card-text text-body">PRIZE: 90 ADA</p>

					<a href="/game" className="btn btn-primary">ENTER RACE</a>
				</div>
			</div> 
			
				

		</div>
	);
};


export default StartBtn;
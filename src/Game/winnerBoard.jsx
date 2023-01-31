import React from 'react';

const WinnerBoard = () =>{
 
	return(
		<>
			<div className="modal fade" id="winnerModal" aria-hidden="true" aria-labelledby="winnerModalLabel" tabIndex="-1">
				<div className="modal-dialog modal-lg modal-dialog-centered">
					<div className="modal-content" style={{backgroundColor:'rgba(49, 49, 49, 0)'}}>
						<div className="modal-body d-flex flex-column justify-content-center  align-items-center">
							
							<button className="btn btn-dark mt-2" data-bs-target="#winnerModal2" data-bs-toggle="modal" data-bs-dismiss="modal">CHECK RESULTS</button>
						</div>
						
					</div>
				</div>
			</div>
		</>
	);
};


export default WinnerBoard;
import React from 'react';
import vid from '../assets/videos/start.mp4';
import { useState, useEffect } from 'react';
import { setShowResults, setThrowConfetti } from './nftSlice';
import { useDispatch } from 'react-redux';

function StartAnimation() {
	const [showButton, setShowButton] = useState(false);
	const [showModal, setShowModal] = useState(true);
	const dispatching = useDispatch();

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowButton(true);
			dispatching(setShowResults(true));
			dispatching(setThrowConfetti(true));
			setShowModal(false);
		}, 5000 );

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	
	

	return (
		<div className={`modal ${showModal ? 'show fade' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
			<div className="modal-dialog modal-fullscreen">
				<div className="modal-content h-100">
					<div className="modal-body h-100" style={{ position: 'relative', backgroundColor:'#282c34' }}>
						<video
							src={vid }
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								opacity: showButton ? 0 : 1,
								transition: 'opacity 1s',
							}}
							autoPlay
							muted
						></video>
					
					</div>
				</div>
			</div>
		</div>
	);
}

export default StartAnimation;

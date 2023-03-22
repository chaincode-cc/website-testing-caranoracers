import React from 'react';
import vid from '../assets/videos/start.mp4';
import { useState, useEffect } from 'react';
import { setShowResults, setThrowConfetti } from './nftSlice';
import { useDispatch } from 'react-redux';

function StartAnimation() {
	const [showButton, setShowButton] = useState(false);
	const [showModal, setShowModal] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowButton(true);
		}, 5000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	const dispatching = useDispatch();
	const handleClose = () => {
		dispatching(setShowResults(true));
		dispatching(setThrowConfetti(true));
		setShowModal(false);
	};

	return (
		<div className={`modal ${showModal ? 'show fade' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
			<div className="modal-dialog modal-fullscreen">
				<div className="modal-content h-100">
					<div className="modal-body h-100" style={{ position: 'relative', backgroundColor:'#282c34' }}>
						<video
							src={vid}
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
						{showButton && (
							<button
								style={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
									width: '50%',
									height: 'auto',
									opacity: showButton ? 1 : 0,
									transition: 'opacity 1s',
								}}
								className="btn btn-primary"
								onClick={handleClose}
							>
                Check results
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default StartAnimation;

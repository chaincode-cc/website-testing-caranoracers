import React from 'react';
import vid from '../assets/videos/weather.mp4';
import { useState, useEffect } from 'react';

function WeatherAnimation() {
	const [showButton, setShowButton] = useState(false);
	const [showModal, setShowModal] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowButton(true);
			setShowModal(false);
		}, 9000);

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

export default WeatherAnimation;

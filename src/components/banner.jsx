import React from 'react';
import '../styles/banner.css';
import vid2 from '../assets/videos/introVid.mp4';

const Banner = () => {
	return (
		<div className="banner">
			<video muted autoPlay className="banner-video">
				<source src={vid2} type="video/mp4" />
        Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default Banner;

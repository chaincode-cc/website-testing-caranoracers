import React from 'react';
import '../styles/followus.css';
import youtube from '../assets/images/youtube-logo.png';
import discord from '../assets/images/discord.png';
import telegram from '../assets/images/telegram.png';
import twitter from '../assets/images/twitter.png';
import email from '../assets/images/email.png';

const FollowUs = () => {
	return (
		<>
			<section className="text-center">
				<h3 className=" fontAutoSized">Follow us</h3>
				<div className="d-flex ms-5 me-5 links justify-content-center">
					<a target="_blank" className="social-media" href="nothingget">
						<img src={youtube} alt="youtube" />
					</a>
					<a target="_blank" className="social-media" href="nothingget">
						<img src={discord} alt="discord" />
					</a>
					<a target="_blank" className="social-media" href="nothingget">
						<img src={telegram} alt="telegram" />
					</a>
					<a target="_blank" className="social-media" href="nothingget">
						<img src={twitter} alt="twitter" />
					</a>
					<a target="_blank" className="social-media" href="nothingget">
						<img src={email} alt="email" />
					</a>
				</div>
			</section>
		</>
	);
};

export default FollowUs;

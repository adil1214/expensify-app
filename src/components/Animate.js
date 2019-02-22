import React from 'react';
import Anime from 'react-anime';

let animeProps = {
	easing: 'easeOutElastic',
	duration: 1000,
	direction: 'normal',
	translateX: ['-15rem', 0],
	opacity: [0, 1],
	delay: (el, index) => index * 240
};

const Animate = ({ children, ...rest }) => {
	return (
		<Anime {...animeProps} {...rest}>
			{children}
		</Anime>
	);
};

export default Animate;

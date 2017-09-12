import React, { Component } from 'react';

export default function Video(props){
	return(
		<div className="videoContainer">
			<div className="videoDiv">
				<iframe src="https://www.youtube.com/embed/i3fi_RqpEOo?ecver=2&showinfo=0" 
						width="640" 
						height="360" 
						frameBorder="0" allowFullScreen>
				</iframe>
			</div>
		</div>
	)
}
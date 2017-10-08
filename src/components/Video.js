import React, { Component } from 'react';

export default function Video(props){
	return(
		<div className="video-container">
		 <div className="row align-items-center">
			<div className="videoDiv embed-responsive embed-responsive-21by9 col-sm-6">
			  <iframe src="https://www.youtube.com/embed/i3fi_RqpEOo?ecver=2&showinfo=0" 
			        className="embed-responsive-item"
					allowFullScreen>
			  </iframe>
			</div>
			<div className="video-info col-sm-6">
				<h2> Our Products </h2>
				<h5>
				<b>5% of profits donated for homeless pests</b>
				We all love our fur babies and there are too many pets out there with out a home! 5% of profits will be donated to small, non-profit organizations that protect the welfare of these animals and make sure they find their forever homes!
				</h5>
			</div>
		 </div>
		</div>
	)
}
import React, { Component } from 'react';

export default function Video(props){
	return(
		<div className="video-container">
		 <div className="container">
		 <div className="row justify-content-center">
			<div className="videoDiv embed-responsive embed-responsive-21by9 col-12 col-lg-10">
			  <iframe src="https://www.youtube.com/embed/i3fi_RqpEOo?ecver=2&showinfo=0" 
			        className="embed-responsive-item"
					allowFullScreen>
			  </iframe>
			</div>
		 </div>
		 </div>
		</div>
	)
}
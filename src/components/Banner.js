import React, { Component } from 'react';



export default function Banner(){
	return(
		<div className="bannerContainer">
			<img src={require('../../public/images/gallery/macCharCity1.jpg')} className="img-fluid" alt="Responsive image" />
			<div className="banText">
				<h3> BEACUSE FARTS ARE FUNNY </h3>
				<h4> and every pet deserves a home </h4>
			</div>
		</div>
	)
}

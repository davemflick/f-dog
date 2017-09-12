import React, { Component } from 'react';


export default function Banner(){
	return(
		<div className="bannerContainer">
			<img src={require('../../public/images/gallery/charlie5.jpg')} className="img-fluid" alt="Responsive image" />
		</div>
	)
}

import React, { Component } from 'react';
import Banner from '../components/Banner';
import Video from '../components/Video';


const HomePage = function(){
	return(
		<div>
			<Banner />
			<h1 className="titleHeader"> The Farting Dog Company </h1>
			<Video />
		</div>
	)
}

module.exports = HomePage;
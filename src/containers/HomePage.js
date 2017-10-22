import React, { Component } from 'react';
import Banner from '../components/Banner';
import Video from '../components/Video';
import HomeInfo from '../components/Home-Info'


const HomePage = function(){
	return(
		<div>
			<div className="fixed-banner">
				&nbsp;
			</div>
			<Banner />
			<h1 className="titleHeader"> The Farting Dog Company </h1>
			<Video />
			<HomeInfo />
		</div>
	)
}

module.exports = HomePage;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Video from './components/Video';

const App = function(){
	return(
		<div>
			<Navbar />
			<Banner />
			<h1 className="titleHeader"> The Farting Dog Company </h1>
			<Video />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
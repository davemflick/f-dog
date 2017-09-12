import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

const App = function(){
	return(
		<div>
			<Navbar />
			<Banner />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
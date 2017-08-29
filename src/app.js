import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';

const App = function(){
	return(
		<div>
			<Navbar />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import ReactRoutes from './containers/ReactRoutes';



const App = function(){
	return(
		<div>
			<Navbar />
			<ReactRoutes />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
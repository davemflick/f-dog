import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import ReactRoutes from './containers/ReactRoutes';
import Footer from './containers/Footer';



const App = function(){
	return(
		<div>
			<Navbar />
			<ReactRoutes />
			<Footer />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
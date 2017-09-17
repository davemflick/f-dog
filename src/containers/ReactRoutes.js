import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './HomePage';

class ReactRoutes extends Component{
	render(){
		return(
			<Router>
			  <Switch>
			    <Route path="/" exact component={HomePage} />
			  </Switch>
			</Router>
		)
	}
}

module.exports = ReactRoutes;

// <Route path="/new-user" component={NewUser} />
// 		    <Route path="/login" component={Login} />
// 		    <Route path="/create-toy" component={CreateToy} />
// 		    <Route path="/add-photos" component={AddPhotos} />
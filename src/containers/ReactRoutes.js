import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import HomePage from './HomePage';

class ReactRoutes extends Component{
	constructor(props){
		super(props);
		this.state = {
			toys: []
		}
	}

	componentDidMount(){
		axios.get('/get-toys')
			.then((res)=>{
				let toys = res.data.toy;
				this.setState({toys: toys});
			}).catch((err)=>{
				console.log("axios error: " + err)
			})
	}

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
import React, { Component } from 'react';
import axios from 'axios';


export default class AllToys extends Component{
	constructor(props){
		super(props);
		this.state = {
			toys: []
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps != this.props){
			this.setState(nextProps);
		}
	}

	createEachToyInstance(){
		let toyData = this.state.toys;
		let toys = toyData.map((t, i)=>{
			return(
				<div className="single-toy col-md-6" key={"t-" + i}>
					<h2> {t.name}</h2>
					<p> {t.description} </p>
					<img className="img img-fluid"  src={t.images[0]} />
				</div>
			)
		});
		return toys;
	}

	render(){
		return(
			<div className="row">
				{this.createEachToyInstance()}
			</div>
		)
	}
}
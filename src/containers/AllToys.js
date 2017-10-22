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
				<div className="single-toy col-12" key={"t-" + i}>
					<div className="row justify-content-center">
					  <div className="col-md-6">
					  <img className="img img-fluid"  src={t.images[0]} />
					  </div>
					  <div className="col-md-6">
					    <h2> {t.name}</h2>
						<p> {t.description} </p>
						<p>{"Price: $"  + t.price}</p>
					  </div>
					</div>
				</div>
			)
		});
		return toys;
	}

	render(){
		return(
			<div className="container">
				<div className="row">
					{this.createEachToyInstance()}
				</div>
			</div>
			
		)
	}
}
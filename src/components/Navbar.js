import React, { Component } from 'react';
import ReactDrom from 'react-dom'

export default class Navbar extends Component{
	render(){
		return(
			<nav className='navbar navabar-expand-lg navbar-toggleable-sm navbar-light bg-light justify-content-between'>
			  <button className='navbar-toggler' type='button' data-toggle='collapse' data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    			<ul className="navbar-nav">
			      <li className="nav-item active">
			        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#">Link</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link disabled" href="#">Disabled</a>
			      </li>
			    </ul>
			   </div>
			   <a className='navbar-brand' href='/'>
			   	<img src={require('../../public/images/logo.png')}/>
			   </a>
			   <ul className='navbar-nav navbar-right'>
			     <li className='nav-item'>
			       <button className='btn btn-primary'>Shop Now!</button>
			     </li>
			   </ul>
			</nav>
		)
	}
		
}
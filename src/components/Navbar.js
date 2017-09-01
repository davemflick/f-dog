import React, { Component } from 'react';
import ReactDrom from 'react-dom'

export default class Navbar extends Component{
	render(){
		return(
			<nav className='navbar navabar-expand sm navbar-light bg-light'>
			  <button className='navbar-toggler' type='button' data-toggle='collapse'>
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    			<ul className="navbar-nav mr-auto">
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
			   <ul className='navbar-nav mr-auto navbar-right'>
			     <li className='nav-item'>
			       <button className='btn btn-primary'>Shop Now!</button>
			     </li>
			   </ul>
			</nav>
		)
	}
		
}
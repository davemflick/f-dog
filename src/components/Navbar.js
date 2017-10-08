import React, { Component } from 'react';
import ReactDrom from 'react-dom';
import Social from './Social';

export default class Navbar extends Component{
	render(){
		return(
			<div className="navContainer">
			<Social />
			<nav className='navbar navabar-expand-lg navbar-toggleable-sm navbar-light bg-light justify-content-between'>
			  <button className='navbar-toggler' type='button' data-toggle='collapse' data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    			<ul className="navbar-nav">
			      <li className="nav-item">
			        <a title="About-Page" className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
			        <a title="Toys Link" className="nav-link" href="/toys">Toys <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
			        <a title="Gallery Page" className="nav-link" href="#">Gallery</a>
			      </li>
			      <li className="nav-item">
			        <a title="Events Page" className="nav-link" href="#">Events</a>
			      </li>
			      <li className="nav-item">
			        <a title="FAQ page" className="nav-link" href="#">FAQ's</a>
			      </li>
			    </ul>
			   </div>
			  <a className='nav-brand logo-mid' href='/'>
			   	<img src={require('../../public/images/logo.png')}/>
			  </a>
			   <ul className='navbar-nav navbar-right'>
			     <li className='nav-item'>
			       <button className='btn btn-primary'>Shop Now!</button>
			     </li>
			   </ul>
			</nav>
			<a className='nav-logo' href='/'>
			   	<img src={require('../../public/images/logo.png')}/>
			</a>
			</div>
		)
	}
		
}
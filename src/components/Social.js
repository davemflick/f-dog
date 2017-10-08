import React, { Component } from 'react';

const Social = function(){
	return(
		<div className="social-icons">
		  <a title="Farting Dog Facebook" href="https://www.facebook.com/fartingdog/" target="_blank">
		    <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
		  </a>
		  <a title="Farting Dog Instagram" href="https://www.instagram.com/thefartingdog/" target="_blank">
		    <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
		  </a>
		  <a title="Farting Dog Twitter" href="https://twitter.com/thefartdog" target="_blank">
		    <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
		  </a>
		</div>
	)
}

module.exports = Social;
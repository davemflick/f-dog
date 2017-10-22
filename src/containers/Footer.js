import React from 'react';
import Social from '../components/Social';

const Footer = function(){
	return(
		<section id="footer">
			<div className="container">
			  <div className="row main-foot">
			    <div className="col-sm-6 col-12">
			    	<h2> The Farting Dog Company</h2>
			    </div>
			    <div className="col-sm-2 col-6" >
		    	  <ul>
		    	  <li><a href="/about" title="To About Page">About</a></li>
		    	  <li><a href="/toys" title="To All Toys">Toys</a></li>
		    	  <li><a href="/gallery" title="To Gallery Page">Gallery</a></li>
		    	  <li><a href="/Events" title="To Events Page"></a></li>
		    	  <li><a href="#" id="faq-modal">FAQs</a></li>
		    	  </ul>
			    </div>
			    <div className="col-sm-4 col-6">
			      <div id="footer-social">
			        <Social  />
			      </div>
			    </div>
			  </div>
			</div>
			  <div className="row copyright">
			  	<div className="col-12">
			  	  <p> Copyright © 2017 The Farting Dog Company, LLC </p>
			  	</div>
			  </div>
		</section>
	)
}

module.exports = Footer;
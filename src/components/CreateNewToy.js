import React, { Component } from 'react';

const CreateNewToy = function(){
	return(
		<div className="container">
		  <h1> Create A New Toy </h1>
		  	<form className="create-toy-form" action="/admin/create-new" method="POST">
		  <div className="form-group">
		  	<input type="text" name="name" required placeholder="Name" />
		  </div>
		  <div className="form-group">
		    <input type="text" name="description" required placeholder="Description" />
		  </div>
		  <div className="form-group">
		    <input type="text" name="price" placeholder="Price" />
		  </div>
		  <div className="form-group">
		    <input type="text" name="images" required placeholder="Image" />
		  </div>
		  <div className="form-group">
		  	<input type="text" name="colors" placeholder="Colors" />
		  </div>
		  <div className="form-group">
		  	<input className="btn btn-primary" type="submit" />
		  </div>
		</form>
		</div>
	)
}


module.exports = CreateNewToy;
var mongoose = require("mongoose");

var photoGallerySchema = new mongoose.Schema(
{
	title: String,
	image: {type: String, default: __dirname + "/public/images/logo.png"},
	timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model("PhotoGallery", photoGallerySchema);
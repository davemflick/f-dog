var mongoose = require("mongoose");

var dogToySchema = new mongoose.Schema(
{
	name: String,
	description: String,
	price: Number,
	colors: {type: Array, default:[]},
	images: {type:Array, default:[]},
	timestamp: {type: Date, default: Date.now}
});

module.exports = mongoose.model("DogToys", dogToySchema);
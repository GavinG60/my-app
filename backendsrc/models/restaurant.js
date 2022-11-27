const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: { type: String, required: true },       // title 
    address: { type: String, required: true },     // address
    imglink: { type: String, required: true },       // image link: url
    price: { type: String, required: true },       // price
    description: { type: String, required: true }, // description
    rating: { type: String, required: true },      // rating
    weblink: { type: String, required: true },     // website: url
    foodtype: { type: String, required: true },        // food : type
    hours: { type: String, required: true }        // hours
}, { collection: "Restaurants"});

module.exports = mongoose.model('Restaurant', restaurantSchema); // create the restaurant model
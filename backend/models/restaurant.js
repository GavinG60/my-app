const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    title: { type: String, required: true },       // title 
    address: { type: String, required: true },     // address
    image: { type: String, required: true },       // image link: url
    price: { type: String, required: true },       // price
    description: { type: String, required: true }, // description
    rating: { type: String, required: true },      // rating
    website: { type: String, required: true },     // website: url
    food: { type: String, required: true },        // food : type
    hours: { type: String, required: true }        // hours
});

module.exports = mongoose.model('Restaurant', restaurantSchema); // create the restaurant model
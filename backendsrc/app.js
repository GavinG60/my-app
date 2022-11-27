const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const Restaurant = require("./models/restaurant");
app.use(cors());
app.use(bodyParser.json());

let data = [];
function setData(newdata) {
    data = newdata;
    console.log("xd");
}

// connect the backend to the mongodb database using the connection URI supplied by mongodb
// this allows mongoose commands like Restaurant.save() or Restaurant.find() to access the database
mongoose
    .connect("mongodb+srv://rfuser1:rfpass1@rfcluster.m10drdd.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to database")
    })
    .catch(err => {
        console.log(err);
    });

// use cors to allow front/backend to coexist in same domain
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});

// THE METHOD BELOW HANDLES RECEIPT OF NEW RESTAURANT INFO AND CREATION OF NEW RESTAURANT DOCUMENT
// ON THE HOME SCREEN
app.post('/', (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const imglink = req.body.imglink;
    const price = req.body.price;
    const description = req.body.description;
    const rating = req.body.rating;
    const weblink = req.body.weblink;
    const foodtype = req.body.foodtype;
    const hours = req.body.hours;

    //const newRestaurant = new Restaurant({name: name, address: address, imglink: imglink, price: price, description: description, rating: rating, weblink: weblink, foodtype: foodtype, hours: hours});
    const newRestaurant = new Restaurant({name: "XD", address: "XD2", imglink: "XD3", price: "XD4", description: "XD5", rating: "XD6", weblink: "XD7", foodtype: "XD8", hours: "XD9"});
    newRestaurant.save()
        .then(() => res.json("Restaurant added!"))
        .catch(err => res.status(400).json("Error: " + err));
        
})

// THE METHOD BELOW HANDLES THE INITIAL RETRIEVAL OF ALL THE RESTAURANT ITEMS IN THE DATABASE
app.get('/', (req, res) => {
    Restaurant.find()
        .then(restaurants => res.json(restaurants))
        .then(newdata => setData(newdata))
        .catch(err => res.status(400).json("Err: " + err));
        console.log(data[0]);
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})



/*
Code from the app.js in the places example, for reference



const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/api/places', placesRoutes); // => /api/places...

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(5000);
*/
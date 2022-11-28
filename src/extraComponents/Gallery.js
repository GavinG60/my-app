import './Gallery.css';
import React from 'react';
import '../primaryComponents/DetailedView'
import { Link } from "react-router-dom";

function Card(props) {
    function setCurrentRestaurant() {
        //props.currentRestaurant[0] = String(props.cardData.name)
        props.currentRestaurant[0] ="The Place";
    }

    function removeCard() {
        const reqBody = {
            name: String(props.cardData.name),
          }
        
        fetch("/remove", {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(reqBody)
        })
        .then()

        props.updateCards()
    }
    
    function renderRemoveButton() {
        // props.isLoggedIn[0]
        if (true) {
            return <button class="removeButton" onClick={removeCard}>Remove card</button>
        }
    }

    function renderEditButton() {
        // props.isLoggedIn[0]
        if (true) {
            return (<Link to ="/editcard">
                <button class="removeButton" onClick={setCurrentRestaurant}>
                    Edit Card
                </button>
            </Link>)
        }
    }

    
    
    return (
        <div className="Card">
            <h1>{props.cardData.name}</h1>
            <h2>{props.cardData.address}</h2>
            <img className="cardImage" src={props.cardData.imglink} alt="Restaurant" height="100px"/>
            <p>Price: {props.cardData.price}</p>
            <p>Cuisine: {props.cardData.foodtype}</p>
            <p>{props.cardData.rating}</p>
            <Link to ="/detailedview">
                <button id="detailViewButton" onClick={setCurrentRestaurant}>
                    View More Info
                </button>
            </Link>
            {renderRemoveButton()}
            {renderEditButton()}
        </div>
    )
}

function PlusCard({submitHandler}) {
    return (
        <div id="Pluscard">
            <form onSubmit={submitHandler}>
            <br></br>
                <label for="name">Name: </label>
                <input type="text" id="Name"/><br></br>
                <br></br>
                <label for="address">Address: </label>
                <input type="text" id="Address"/><br></br>
                <br></br>
                <label for="imgLink">Image Link: </label>
                <input type="text" id="ImgLink"/><br></br>
                <br></br>
                <label for="price">Price: </label>
                <input type="text" id="Price"/><br></br>
                <br></br>
                <label for="description">Description: </label>
                <input type="text" id="Description"/><br></br>
                <br></br>
                <label for="rating">Rating: </label>
                <input type="text" id="Rating"/><br></br>
                <br></br>
                <label for="rating">Website Link: </label>
                <input type="text" id="WebLink"/><br></br>
                <br></br>
                <label for="rating">Food Type: </label>
                <input type="text" id="FoodType"/><br></br>
                <br></br>
                <label for="rating">Hours: </label>
                <input type="text" id="Hours"/><br></br>
                <br></br>
                <button id="createButton" type="submit">Create Card</button>
            </form>
        </div>
    )
}

export {Card, PlusCard}
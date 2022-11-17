import './Gallery.css';
import ReactDOM from "react-dom/client";
import {createRoot} from "react-dom/client";
import React from 'react';
import { render } from '@testing-library/react';

function Card(props) {
    function removeCard() {
        props.cardInfo.splice(props.cardIndex, 1)
        for (let i = 0; i < props.cardInfo.length; i++) {
            props.cardInfo[i][6] = i;
        }
        props.setNumCards(props.numCards - 1)
        
    }

    function renderRemoveButton() {
        // TO DO: replace true with conditional for logged in: if user is logged in,
        // remove button should be shown
        if (true) {
            return <button id="removeButton" onClick={removeCard}>Remove card</button>
        }
    }
    
    return (
        <div className="Card">
            <h1>{props.name}</h1>
            <h2>{props.address}</h2>
            <img id="cardImage" src={props.imgLink} alt="Restaurant" height="100px"/>
            <p>Price: {props.price}</p>
            <p>{props.description}</p>
            <p>{props.rating}</p>
            <p>View More Info</p>
            {renderRemoveButton()}
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
                <button id="createButton" type="submit">Create Card</button>
            </form>
        </div>
    )
}

function NewCardForm() {
    return (
        <div class="test">
            <p>PLACEHOLDER TEXT: This is where the form to create a new card will go</p>
        </div>
    )
}

export {Card, PlusCard, NewCardForm}
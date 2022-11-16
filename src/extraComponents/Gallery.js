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
        alert(props.cardInfo.length)
    }

    function renderRemoveButton() {
        // TO DO: replace true with conditional for logged in: if user is logged in,
        // remove button should be shown
        if (true) {
            return <button onClick={removeCard}>Remove card</button>
        }
    }
    
    return (
        <div className="Card">
            <h1>{props.name}</h1>
            <h2>{props.address}</h2>
            <img src={props.imgLink} alt="Restaurant" height="100px"/>
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
                <input type="text" id="Name"/>
                <input type="text" id="Address"/>
                <input type="text" id="ImgLink"/>
                <input type="text" id="Price"/>
                <input type="text" id="Description"/>
                <input type="text" id="Rating"/>
                <button type="submit">Create Card</button>
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
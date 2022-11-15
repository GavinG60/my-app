import './Gallery.css';
import ReactDOM from "react-dom/client";
import {createRoot} from "react-dom/client";
import React from 'react';

function Card(props) {
    return (
        <div className="Card">
            <h1>{props.name}</h1>
            <h2>{props.address}</h2>
            <img src={props.imgLink} alt="Restaurant" height="100px"/>
            <p>Price: {props.price}</p>
            <p>{props.description}</p>
            <p>{props.rating}</p>
            <p>View More Info</p>
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
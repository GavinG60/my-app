import './Gallery.css';
import React from 'react';
import '../primaryComponents/DetailedView'
import { Link } from "react-router-dom";

function Card(props) {
    function removeCard() {
        props.cardInfo.splice(props.cardIndex, 1)
        for (let i = 0; i < props.cardInfo.length; i++) {
            props.cardInfo[i][6] = i;
        }
        props.setNumCards(props.numCards - 1)
        //alert(props.cardInfo.length)
    }

    function renderRemoveButton() {
        if (props.isLoggedIn[0]) {
            return <button class="removeButton" onClick={removeCard}>Remove card</button>
        
    }

    }

    function renderEditButton() {
        if (props.isLoggedIn[0]) {
            return (<Link to ="/editcard">
                <button onClick={setDVIndex}>
                    Edit Card
                </button>
            </Link>)
        }
    }

    function setDVIndex() {
        props.detailedViewIndex[0] = props.cardIndex
    }
    
    return (
        <div className="Card">
            <h1>{props.cardInfo[props.cardIndex][0]}</h1>
            <h2>{props.cardInfo[props.cardIndex][1]}</h2>
            <img id="cardImage" src={props.cardInfo[props.cardIndex][2]} alt="Restaurant" height="100px"/>
            <p>Price: {props.cardInfo[props.cardIndex][3]}</p>
            <p>Cuisine: {props.cardInfo[props.cardIndex][8]}</p>
            <p>{props.cardInfo[props.cardIndex][5]}</p>
            <Link to ="/detailedview">
                <button id="detailViewButton" onClick={setDVIndex}>
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
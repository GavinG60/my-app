import {Card, PlusCard} from '../extraComponents/Gallery.js';
import {useRef} from 'react';
//import InputField from './InputField';
import './Cardgrid.css';
import {useState, useEffect} from 'react';
import {Card} from '../extraComponents/Gallery.js';

function Cardgrid(props) {
    const [data, setData] = useState(null);

   
    useEffect(() => {
        fetch("/restaurants")
            .then((res) => res.json())
            .then((data) => setData(data))

    }, [ ])

    function updateCards() {
        fetch("/restaurants")
        .then((res) => res.json())
        .then((data) => setData(data))
    }

    const addCard = (event) => {
      event.preventDefault();
      let name = document.getElementById("Name").value
      document.getElementById("Name").value = ""
      let address = document.getElementById("Address").value
      document.getElementById("Address").value = ""
      let imgLink = document.getElementById("ImgLink").value
      document.getElementById("ImgLink").value = ""
      let price = document.getElementById("Price").value
      document.getElementById("Price").value = ""
      let description = document.getElementById("Description").value
      document.getElementById("Description").value = ""
      let rating = document.getElementById("Rating").value
      document.getElementById("Rating").value = ""
      let webLink = document.getElementById("WebLink").value
      document.getElementById("WebLink").value = ""
      let foodType = document.getElementById("FoodType").value
      document.getElementById("FoodType").value = ""
      let hours = document.getElementById("Hours").value
      document.getElementById("Hours").value = ""

      const newRestaurantInfo = {
        name: String(name),
        address: String(address),
        imglink: String(imgLink),
        price: String(price),
        description: String(description),
        rating: String(rating),
        weblink: String(webLink),
        foodtype: String(foodType),
        hours: String(hours)
      }
      
       fetch("/restaurants", {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(newRestaurantInfo)
        })
        .then()

        fetch("/restaurants")
            .then((res) => res.json())
            .then((data) => setData(data))

        /*
      useEffect(() => {
        fetch("/restaurants")
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(newRestaurantInfo))
        }, []).then

      })
      */
    }

    const removeCard = () => {
    
    }

    //<Card name="The Place" address="229 E Broad St, Athens, GA 30608" imgLink="https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/1627577291840-GYFM98AA0MU7V9HLCO8B/image-asset.jpeg" price="Low" description="Cool, brick-lined standby offering Southern comfort food, clever cocktails & craft beer on tap." rating="4.6 Stars"/>
    
    
    let cards = [];
    if (data) {
    for (let i = 0; i < data.length; i++) {
        cards.push(<Card currentRestaurant={props.currentRestaurant} isLoggedIn={props.isLoggedIn} cardData ={data[i]} updateCards={updateCards}/>)
    }
}
    
    

    function renderPlusCard() {
        // TO DO: replace true with conditional for logged in: if user is logged in,
        // plus card should be shown
        //props.isLoggedIn[0]
        if (true) {
            return <PlusCard submitHandler={addCard} isLoggedIn={props.isLoggedIn} removeHandler={removeCard}/>
        }
    }

    //<Card name="The Place" address="229 E Broad St, Athens, GA 30608" imgLink="https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/1627577291840-GYFM98AA0MU7V9HLCO8B/image-asset.jpeg" price="Low" description="Cool, brick-lined standby offering Southern comfort food, clever cocktails & craft beer on tap." rating="4.6 Stars"/>
    const inputRef = useRef(null); // collect current form 
    const [card, setCard] = useState({ 
        name: "The place", 
        address: "229 E Broad St, Athens, GA 30608",
        imgLink: "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/1627577291840-GYFM98AA0MU7V9HLCO8B/image-asset.jpeg",
        price: "Low",
        description: "Cool, brick-lined standby offering Southern comfort food, clever cocktails & craft beer on tap.",
        rating: "4.6 Stars"
    }); // setup initial state

    function AddChild() { // was addChild : not a component? or something else that it needs to be
        //const form = inputRef.current
        
        // add a new object 
        this.setState(this.state.concat([{
            name: `${inputRef['Restaurant'].value}`,  // get values from current form
            address: `${inputRef['Address'].value}`,
            imgLink:`${inputRef['ImgLink']}`,
            price: `${inputRef['Price']}`,
            description: `${inputRef['Description']}`,
            rating: ``
        }])) 

    }
    // Capitalized to differentiate between state vars and input names
    // once new data is added to the state, for each item (state) get 
    // each value to create a New card

    return (
        <div>
            <div className="Cardgrid">
            {!data ?  "Loading restaurants" : cards}
                {renderPlusCard()}
            </div>
        </div>
    )
}

export default Cardgrid;
/*
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
        </div> */
/*
        <h1>{props.name}</h1>
            <h2>{props.address}</h2>
            <img src={props.imgLink} alt="Restaurant" height="100px"/>
            <p>Price: {props.price}</p>
            <p>{props.description}</p>
            <p>{props.rating}</p> 
            */
import './EditCard.css';
import {useState, useEffect} from 'react';

const EditCard = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const reqBody = {
            name: String(props.currentRestaurant[0]),
        }

        fetch("/details", {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(reqBody)
        })
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [])


    
    const onSubmit = (event) => {
        event.preventDefault();
        let name = document.getElementById("Name").value
        let address = document.getElementById("Address").value
        let imgLink = document.getElementById("ImgLink").value
        let price = document.getElementById("Price").value
        let description = document.getElementById("Description").value
        let rating = document.getElementById("Rating").value
        let webLink = document.getElementById("WebLink").value
        let foodType = document.getElementById("FoodType").value
        let hours = document.getElementById("Hours").value

        const editedInfo = {
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

          console.log(price)

        fetch("/edit", {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(editedInfo)
        })        
        .then()

        alert("Changes saved!")
    }

    function renderForm() {
        if (!data) {
            return <p>Loading...</p>
        } else {
            return (<div className="editCardDiv">
            <h2>Edit Card</h2>
            <form onSubmit={onSubmit}>
            <br></br>
                <label for="name">Name: </label>
                <input type="text" id="Name" defaultValue={data.name}/><br></br>
                <br></br>
                <label for="address">Address: </label>
                <input type="text" id="Address" defaultValue={data.address}/><br></br>
                <br></br>
                <label for="imgLink">Image Link: </label>
                <input type="text" id="ImgLink" defaultValue={data.imglink}/><br></br>
                <br></br>
                <label for="price">Price: </label>
                <input type="text" id="Price" defaultValue={data.price}/><br></br>
                <br></br>
                <label for="description">Description: </label>
                <input type="text" id="Description" defaultValue={data.description}/><br></br>
                <br></br>
                <label for="rating">Rating: </label>
                <input type="text" id="Rating" defaultValue={data.rating}/><br></br>
                <br></br>
                <label for="rating">Website Link: </label>
                <input type="text" id="WebLink" defaultValue={data.weblink}/><br></br>
                <br></br>
                <label for="rating">Food Type: </label>
                <input type="text" id="FoodType" defaultValue={data.foodtype}/><br></br>
                <br></br>
                <label for="rating">Hours: </label>
                <input type="text" id="Hours" defaultValue={data.hours}/><br></br>
                <br></br>
                <button id="createButton" type="submit">Submit Changes</button>
            </form>
        </div>)
        }
    }

    return (<div>{renderForm()}</div>)
};

export default EditCard;

/*
<input type="text" id="Name" value={data.name}/><br></br>
                <br></br>
                <label for="address">Address: </label>
                <input type="text" id="Address" value={data.address}/><br></br>
                <br></br>
                <label for="imgLink">Image Link: </label>
                <input type="text" id="ImgLink" value={data.imglink}/><br></br>
                <br></br>
                <label for="price">Price: </label>
                <input type="text" id="Price" value={data.price}/><br></br>
                <br></br>
                <label for="description">Description: </label>
                <input type="text" id="Description" value={data.description}/><br></br>
                <br></br>
                <label for="rating">Rating: </label>
                <input type="text" id="Rating" value={data.rating}/><br></br>
                <br></br>
                <label for="rating">Website Link: </label>
                <input type="text" id="WebLink" value={data.weblink}/><br></br>
                <br></br>
                <label for="rating">Food Type: </label>
                <input type="text" id="FoodType" value={data.foodtype}/><br></br>
                <br></br>
                <label for="rating">Hours: </label>
                <input type="text" id="Hours" value={data.hours}/><br></br>
*/
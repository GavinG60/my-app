import './EditCard.css';

const EditCard = (props) => {
    const onSubmit = (event) => {
        event.preventDefault()
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

        if (name !== '') props.cardInfo[props.DVIndex[0]][0] = name
        if (address !== '') props.cardInfo[props.DVIndex[0]][1] = address
        if (imgLink !== '') props.cardInfo[props.DVIndex[0]][2] = imgLink
        if (price !== '') props.cardInfo[props.DVIndex[0]][3] = price
        if (description !== '') props.cardInfo[props.DVIndex[0]][4] = description
        if (rating !== '') props.cardInfo[props.DVIndex[0]][5] = rating
        if (webLink !== '') props.cardInfo[props.DVIndex[0]][6] = webLink
        if (foodType !== '') props.cardInfo[props.DVIndex[0]][7] = foodType
        if (hours !== '') props.cardInfo[props.DVIndex[0]][8] = hours

        alert("Changes saved!")
    } 


    return (
        <div className="editCardDiv">
            <h2>Edit Card</h2>
            <form onSubmit={onSubmit}>
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
                <p>Note: Changes will only be saved to non-blank fields.</p>
                <button id="createButton" type="submit">Submit Changes</button>
            </form>
        </div>
    )
};

export default EditCard;
import {PlusCard} from '../extraComponents/Gallery.js';
import './Cardgrid.css';
import {useState} from 'react';
import {Card} from '../extraComponents/Gallery.js';

function Cardgrid(props) {
    const [numCards, setNumCards] = useState(props.cardInfo.length);
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


      props.cardInfo.push([name, address, imgLink, price, description, rating, props.cardInfo.length, webLink, foodType, hours])
      setNumCards(numCards + 1)
      //alert(props.cardInfo.length)
  }

    //<Card name="The Place" address="229 E Broad St, Athens, GA 30608" imgLink="https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/1627577291840-GYFM98AA0MU7V9HLCO8B/image-asset.jpeg" price="Low" description="Cool, brick-lined standby offering Southern comfort food, clever cocktails & craft beer on tap." rating="4.6 Stars"/>
    let cards = [];
    for (let i = 0; i < numCards; i++) {
        cards.push(<Card cardIndex={props.cardInfo[i][6]} cardInfo={props.cardInfo} numCards={numCards} setNumCards={setNumCards} isLoggedIn={props.isLoggedIn} detailedViewIndex={props.detailedViewIndex}/>)
    }

    function renderPlusCard() {
        // TO DO: replace true with conditional for logged in: if user is logged in,
        // plus card should be shown
        if (props.isLoggedIn[0]) {
            return <PlusCard submitHandler={addCard} isLoggedIn={props.isLoggedIn}/>
        }
    }

    return (
        <div>
            <div className="Cardgrid">
                {cards}
                {renderPlusCard()}
            </div>
        </div>
    )
}

export default Cardgrid;
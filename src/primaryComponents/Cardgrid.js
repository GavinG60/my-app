import {PlusCard} from '../extraComponents/Gallery.js';
import './Cardgrid.css';
import {useState} from 'react';
import {Card} from '../extraComponents/Gallery.js';

function Cardgrid(props) {
    const [numCards, setNumCards] = useState(2);
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
      props.cardInfo.push([name, address, imgLink, price, description, rating, props.cardInfo.length])
      setNumCards(numCards + 1)
      alert(props.cardInfo.length)
  }

    //<Card name="The Place" address="229 E Broad St, Athens, GA 30608" imgLink="https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/1627577291840-GYFM98AA0MU7V9HLCO8B/image-asset.jpeg" price="Low" description="Cool, brick-lined standby offering Southern comfort food, clever cocktails & craft beer on tap." rating="4.6 Stars"/>
    let cards = [];
    for (let i = 0; i < numCards; i++) {
        cards.push(<Card name={props.cardInfo[i][0]} address={props.cardInfo[i][1]} imgLink={props.cardInfo[i][2]} price={props.cardInfo[i][3]} description={props.cardInfo[i][4]} rating={props.cardInfo[i][5]} cardIndex={props.cardInfo[i][6]} cardInfo={props.cardInfo} numCards={numCards} setNumCards={setNumCards}/>)
    }

    function renderPlusCard() {
        // TO DO: replace true with conditional for logged in: if user is logged in,
        // plus card should be shown
        if (true) {
            return <PlusCard submitHandler={addCard}/>
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
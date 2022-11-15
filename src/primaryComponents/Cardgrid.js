import {Card, PlusCard} from '../extraComponents/Gallery.js';
import './Cardgrid.css';
import {useState} from 'react';

function Cardgrid(props) {
    const [numCards, setNumCards] = useState(2);
    var thePlaceDescription = "Cool, brick-lined standby offering Southern comfort food, clever cocktails & craft beer on tap.";
    var thePlaceIMGLink = "https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/1627577291840-GYFM98AA0MU7V9HLCO8B/image-asset.jpeg";
    var tedsBestDescription = "Pizza & casual Italian eats served in a rehabbed tire garage with outdoor seating & a bocce court.";
    var tedsBestIMGLink = "https://static.rootsrated.com/image/upload/s--T6my01Iz--/t_rr_large_traditional/bhyhujvnsnnueov4zg2r.jpg";
  
    //Order of info in array: Name, Address, IMGLink, Price, Description, Rating
    var thePlaceInfo = ["The Place", "229 E Broad St, Athens, GA 30608", thePlaceIMGLink, "Low", thePlaceDescription, "4.6 Stars"];
    var tedsBestInfo = ["Ted's Most Best", "254 W Washington St, Athens, GA 30601", tedsBestIMGLink, "Medium", tedsBestDescription, "4.4 Stars"];
    var cardInfo = [thePlaceInfo, tedsBestInfo];
    const cards = [];
    for (let i = 0; i < numCards; i++) {
        cards.push(<Card name={cardInfo[i][0]} address={cardInfo[i][1]} imgLink={cardInfo[i][2]} price={cardInfo[i][3]} description={cardInfo[i][4]} rating={cardInfo[i][5]}/>)
    }

    function increaseCardCount() {
        let name = document.getElementById("Name").value;
        let address = document.getElementById("Address").value;
        let imgLink = document.getElementById("ImgLink").value;
        let price = document.getElementById("Price").value;
        let description = document.getElementById("Description").value;
        let rating = document.getElementById("Rating").value;
        cardInfo.push([name, address, imgLink, price, description, rating]);
        setNumCards(numCards + 1);
    }
    //<Card name="The Place" address="229 E Broad St, Athens, GA 30608" imgLink="https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/1627577291840-GYFM98AA0MU7V9HLCO8B/image-asset.jpeg" price="Low" description="Cool, brick-lined standby offering Southern comfort food, clever cocktails & craft beer on tap." rating="4.6 Stars"/>
    return (
        <div>
            <div className="Cardgrid">
                {cards}
                <PlusCard submitHandler={increaseCardCount}/>
            </div>
        </div>
    )
}

export default Cardgrid;
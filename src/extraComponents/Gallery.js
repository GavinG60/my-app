import './Gallery.css';
import ReactDOM from "react-dom/client";

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

function PlusCard() {
    function buttonPressed() {
        //alert('Plus!');
        let thisbutton = document.getElementById('Pluscard');
        //thisbutton.removeChild(thisbutton.firstChild);
        const heading = (<h1>XD</h1>);
        //thisbutton.props.children.add(heading);
        //let newdiv = document.createElement("p");
        //newdiv.append("XD");
        //thisbutton.render(newdiv);
        thisbutton.append("XD");
    }

    return (
        <div id="Pluscard">
            <button onClick={buttonPressed}><img src="plus.jpg" alt="plus sign" height="300"/></button>
        </div>
    )
}

function NewCardForm() {
    return (
        <p>PLACEHOLDER TEXT: This is where the form to create a new card will go</p>
    )
}

export {Card, PlusCard, NewCardForm}
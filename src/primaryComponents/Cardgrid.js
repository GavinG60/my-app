import {Card, PlusCard} from '../extraComponents/Gallery.js';
import './Cardgrid.css';

function Cardgrid(props) {
    return (
        <div>
            <div className="Cardgrid">
                <Card name="The Place" address="229 E Broad St, Athens, GA 30608" imgLink="https://images.squarespace-cdn.com/content/v1/60f1a66e2f550d47d6487a3c/1627577291840-GYFM98AA0MU7V9HLCO8B/image-asset.jpeg" price="Low" description="Cool, brick-lined standby offering Southern comfort food, clever cocktails & craft beer on tap." rating="4.6 Stars"/>
                <Card name="Ted's Most Best" address="254 W Washington St, Athens, GA 30601" imgLink="https://static.rootsrated.com/image/upload/s--T6my01Iz--/t_rr_large_traditional/bhyhujvnsnnueov4zg2r.jpg" price="Medium" description="Pizza & casual Italian eats served in a rehabbed tire garage with outdoor seating & a bocce court." rating="4.4 Stars"/>
                <PlusCard/>
            </div>
        </div>
    )
}

export default Cardgrid;
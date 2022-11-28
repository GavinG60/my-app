import './DetailedView.css';
import {useState, useEffect} from 'react';

const DetailedView = (props) => {
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
            .then((data) => setData(data))

    }, [])

    /*
    return (
        <div className="detailedViewDiv">
            <h2>Detailed Restaurant View</h2>
            <p>{props.cardInfo[props.DVIndex[0]][0]}</p>
            <p>{props.cardInfo[props.DVIndex[0]][1]}</p>
            <img src={props.cardInfo[props.DVIndex[0]][2]} alt="Restaurant" height="300px"/>
            <p>{props.cardInfo[props.DVIndex[0]][4]}</p>
            <p>Price: {props.cardInfo[props.DVIndex[0]][3]}</p>
            <p>Rating: {props.cardInfo[props.DVIndex[0]][5]}</p>
            <p>Cuisine: {props.cardInfo[props.DVIndex[0]][8]}</p>
            <p>Hours: {props.cardInfo[props.DVIndex[0]][9]}</p>
            <a href={props.cardInfo[props.DVIndex[0]][7]} target="_blank">Go to website</a>
        </div>
    )
    */

    function renderInfo() {
        if (!data) {
            return <p>Loading...</p>
        } else {
            return (
                <div className="detailedViewDiv">
                    <h2>Detailed Restaurant View</h2>
                    <p>{data.name}</p>
                    <p>{data.address}</p>
                    <img src={data.imglink} alt="Restaurant" height="300px"/>
                    <p>Price: {data.price}</p>
                    <p>Rating: {data.rating}</p>
                    <p>Cuisine: {data.foodtype}</p>
                    <p>Hours: {data.hours}</p>
                    <a href={data.weblink} target="_blank">Go to website</a>
                </div>
            )
        }
    }

   return (
    <div>
        {renderInfo()}
    </div>
   )
};

export default DetailedView;
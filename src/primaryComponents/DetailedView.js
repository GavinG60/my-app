import './DetailedView.css';

const DetailedView = (props) => {
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
            <p>Hours: {props.cardInfo[props.DVIndex[0]][8]}</p>
            <a href={props.cardInfo[props.DVIndex[0]][7]} target="_blank">Go to website</a>
        </div>
    )
};

export default DetailedView;
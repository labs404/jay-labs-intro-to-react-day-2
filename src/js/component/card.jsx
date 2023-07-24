import React from 'react';
import propTypes from "prop-types";

let style = {
    width: "18rem"
}

//"destructured" example of card component.
// const Card = (fullName, age) => {
const Card = (props) => {

    return (
        <>
            {/* <div className="card" style={{width: "18rem"}}> */}
            <div className="card" style={style}>
                <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.fullName}</h5>
                    <p className="card-text">Hello {props.fullName}! You are {props.age}.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    ); 
}

//name of jsx file/object
Card.propTypes = {
	fullName: propTypes.string,
    age: propTypes.number
}

export default Card;
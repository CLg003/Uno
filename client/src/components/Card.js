import React from 'react';

const Card = ({id, colour, symbol, image}) => {

    return (
        <img id="card" src={`${process.env.PUBLIC_URL}${image}`} alt="card face"/>
    );
    
}

export default Card;
import React from 'react';

const Card = ({id, colour, symbol, image, playerTurn}) => {

    return (
        <img className="card" src={`${process.env.PUBLIC_URL}${image}`} alt="card face"/>
    );
    
}

export default Card;
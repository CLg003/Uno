import React from 'react';

const Card = ({id, index, colour, symbol, image, playerTurn, onCardClick}) => {

    const handleClick = function() {
        onCardClick(index);
        console.log(`Clicked on ${colour} ${symbol}`);
        console.log({index});
    }

    return (
        <img className="card" onClick={handleClick} src={`${process.env.PUBLIC_URL}${image}`} alt="card face"/>
    );
    
}

export default Card;
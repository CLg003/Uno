import React from 'react';

const CardInPlay = ({id, colour, symbol, image, playerCards}) => {

    return (
        // <div ref={drop}>
            <img className="card" src={`${process.env.PUBLIC_URL}${image}`} alt="card face"/>
        // </div>
    );

}

export default CardInPlay;
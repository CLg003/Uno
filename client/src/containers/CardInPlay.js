import React from 'react';

const CardInPlay = ({id, colour, symbol, image, playCard, playerCards}) => {

    // ADD ACCEPTED DRAGGED CARD TO DISCARD PILE AND SET AS NEW CARD IN PLAY
    // const dropCard = (id) => {
    //     const draggedCard = playerCards.filter((card) => id === card._id)[0];
    //     const newPlayerCards = playerCards.filter((card) => id !== card._id);
    //     playCard(draggedCard, newPlayerCards);
    // }

    return (
        // <div ref={drop}>
            <img src={`${process.env.PUBLIC_URL}${image}`} alt="card face"/>
        // </div>
    );

}

export default CardInPlay;
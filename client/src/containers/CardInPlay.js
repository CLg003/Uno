import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const CardInPlay = ({id, colour, symbol, image, playCard, playerCards}) => {

    // SET TYPE ACCEPTED FOR DISCARD PILE
    const [typeAccepted, setTypeAccepted] = useState(null)

    // DROP ZONE MONITORING
    const [{isOver}, drop] = useDrop(() => ({
        accept: colour,
        drop: (playerCard) => {
            dropCard(playerCard.id);
            console.log("Card accepted");
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    // ADD ACCEPTED DRAGGED CARD TO DISCARD PILE AND SET AS NEW CARD IN PLAY
    const dropCard = (id) => {
        const draggedCard = playerCards.filter((card) => id === card._id)[0];
        const newPlayerCards = playerCards.filter((card) => id !== card._id);
        playCard(draggedCard, newPlayerCards);
    }

    return (
        // <div ref={drop}>
            <img ref={drop} src={`${process.env.PUBLIC_URL}${image}`} alt="card face"/>
        // </div>
    );

}

export default CardInPlay;
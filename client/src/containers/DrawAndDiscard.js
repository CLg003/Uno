import React from 'react';
import CardInPlay from './CardInPlay';

const DrawAndDiscard = ({cardInPlay, playerTurn, player1Cards, player2Cards, onDrawClick, choosePlayOrKeep}) => {

    const handleClick = function() {
        onDrawClick();
        console.log(`Clicked on draw pile`);
    }

    return (
        <div className="cards-displayed" id="draw-discard-piles">
            {/* CARD DRAWN - TO PLAY OR KEEP */}
            <Card key={index} index={index} id={card._id} colour={card.colour} symbol={card.symbol} image={card.image} playerTurn={playerTurn} onCardClick={onCardClick}/>
            
            {/* DRAW PILE */}
            <img className="card" onClick={handleClick} src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`} alt="card back"/>

            {/* CARD IN PLAY (DISCARD PILE) */}
            {cardInPlay 
            ?
            <CardInPlay id={cardInPlay._id} colour={cardInPlay.colour} symbol={cardInPlay.symbol} image={cardInPlay.image} playerCards={playerTurn === 1 ? player1Cards : player2Cards}/>
            :
            null}
        </div>


    );

}

export default DrawAndDiscard;
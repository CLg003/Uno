import React from 'react';
import CardInPlay from './CardInPlay';

const DrawAndDiscard = ({cardInPlay, playerTurn, player1Cards, player2Cards}) => {

        return (
            <div className="cards-displayed" id="draw-discard-piles">
                {/* DRAW PILE */}
                <img className="card" src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`} alt="card back"/>

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
import React from 'react';
import CardInPlay from './CardInPlay';

const DrawAndDiscard = ({dealCards, handleDeal, cardInPlay, invalidStartCardSymbols, turnOverTopCard, playerTurn, playCard, player1Cards, player2Cards}) => {

        return (
            <div id="draw-discard-piles">
                <div className="cards">
                    {/* DRAW PILE */}
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`} alt="card back"/>

                    {/* DISCARD PILE aka DROP ZONE */}

                    {/* CARD IN PLAY */}
                    {cardInPlay 
                    ?
                    <CardInPlay id={cardInPlay._id} colour={cardInPlay.colour} symbol={cardInPlay.symbol} image={cardInPlay.image} playCard={playCard} playerCards={playerTurn === 1 ? player1Cards : player2Cards}/>
                    :
                    null}
                </div>

                {/* DEAL BUTTON */}
                {!dealCards 
                ?
                <button id="deal-button" onClick={handleDeal}>Deal</button>
                : 
                null}

                {/* TURN OVER TOP CARD BUTTON */}
                {dealCards && !cardInPlay
                ?
                <button onClick={turnOverTopCard}>Click to turn over top card of draw pile</button>
                :
                null}

                {/* INVALID START CARD BUTTON */}
                {cardInPlay && invalidStartCardSymbols.includes(cardInPlay.symbol)
                ?
                <button onClick={turnOverTopCard}>Invalid start card - click to turn over another card</button>
                :
                null}
            </div>


        );

}

export default DrawAndDiscard;
import React from 'react';

const Deal = ({dealCards, handleDeal, cardInPlay, turnOverTopCard, playerTurn, startGame}) => {

    const invalidStartCardSymbols = ["miss", "reverse", "plus2", "wild", "plus4"];

    return (
        <div>
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
            {!playerTurn && cardInPlay && invalidStartCardSymbols.includes(cardInPlay.symbol)
            ?
            <button onClick={turnOverTopCard}>Invalid start card - click to turn over another card</button>
            :
            null}

            {/* PLAYER 1 TO START GAME */}
            {!playerTurn && cardInPlay && !invalidStartCardSymbols.includes(cardInPlay.symbol)
            ?
            <button onClick={startGame}>Player 1, click to start!</button>
            :
            null}

        </div>
    );

}

export default Deal;
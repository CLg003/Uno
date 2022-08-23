import React from 'react';

const GamePlayHints = ({dealCards, handleDeal, cardInPlay, turnOverTopCard, playerTurn, startGame}) => {

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

            {/* PLAYER 1 TO PLAY */}
            {(playerTurn === 1)
            ?
            <p>Click on one of your cards to play it or click to take a card from the draw pile</p>
            :
            null}
        </div>
    );

}

export default GamePlayHints;
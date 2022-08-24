import React from 'react';
import Card from "../components/Card";

const Player1 = ({player1Cards, playerTurn, handleClickCard}) => {
        
    const p1CardNodes = player1Cards.map((card, index) => {
        return (
            <Card key={index} id={card._id} colour={card.colour} symbol={card.symbol} image={card.image} playerTurn={playerTurn}/>
        );
    });

    return (
        <div id="player-1" className="player-cards">

            <p>Player 1 here</p>

            {(player1Cards.length > 0) 
            ?
            <ul className="cards-displayed">
                {p1CardNodes}
            </ul>
            :
            <p>No cards here</p>}

            {/* PLAYER 1 TO PLAY */}
            {(playerTurn === 1)
            ?
            <p>Click on one of your cards to play or click the draw pile to pick up a card</p>
            :
            null}

        </div>
    );

}

export default Player1;
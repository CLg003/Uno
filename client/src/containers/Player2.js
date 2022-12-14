import React from 'react';
import Card from "../components/Card";
import SelectColour from '../components/SelectColour';

const Player2 = ({player2Cards, playerTurn, onCardClick, rejectCard, selectColour, wildColourChoice}) => {

    const p2CardNodes = player2Cards.map((card, index) => {
        return (
            <Card key={index} index={index} id={card._id} colour={card.colour} symbol={card.symbol} image={card.image} playerTurn={playerTurn} onCardClick={onCardClick}/>
        );
    });

    return (
        <div id="player-2" className="player-cards">

            <p>Player 2 here</p>

            {/* PLAYER 2 TO PLAY */}
            {(playerTurn === 2)
            ?
            <p>Click on one of your cards to play or click the draw pile to pick up a card</p>
            :
            null}

            {/* REJECT CARD */}
            {(playerTurn === 2 && rejectCard)
            ?
            <p>You can't play this card!</p>
            :
            null}

            {/* SELECT COLOUR */}
            {(playerTurn === 2 && selectColour)
            ?
            <SelectColour wildColourChoice={wildColourChoice}/>
            :
            null}


            {(player2Cards.length > 0) 
            ?
            <ul className="cards-displayed">
                {p2CardNodes}
            </ul>
            :
            <p>No cards here</p>}

        </div>
    );

}

export default Player2;
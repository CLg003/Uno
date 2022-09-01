import React from 'react';
import Card from "../components/Card";
import SelectColour from '../components/SelectColour';
import PlayOrKeep from '../components/PlayOrKeep';

const Player1 = ({player1Cards, playerTurn, onCardClick, rejectCard, selectColour, wildColourChoice, choosePlayOrKeep}) => {
        
    const p1CardNodes = player1Cards.map((card, index) => {
        return (
            <Card key={index} index={index} id={card._id} colour={card.colour} symbol={card.symbol} image={card.image} playerTurn={playerTurn} onCardClick={onCardClick}/>
        );
    });

    return (
        <div id="player-1" className="player-cards">

            {(player1Cards.length > 0) 
            ?
            <ul className="cards-displayed">
                {p1CardNodes}
            </ul>
            :
            <p>No cards here</p>}

            <p>Player 1 here</p>

            {/* PLAYER 1 TO PLAY */}
            {(playerTurn === 1)
            ?
            <p>Click on one of your cards to play or click the draw pile to pick up a card</p>
            :
            null}

            {/* REJECT CARD */}
            {(playerTurn === 1 && rejectCard)
            ?
            <p>You can't play this card!</p>
            :
            null}

            {/* SELECT COLOUR */}
            {(playerTurn === 1 && selectColour)
            ?
            <SelectColour wildColourChoice={wildColourChoice}/>
            :
            null}

            {/* CHOOSE TO PLAY OR KEEP CARD FROM DRAW PILE */}
            {(playerTurn === 1 && choosePlayOrKeep)
            ?
            <PlayOrKeep />
            :
            null}

        </div>
    );

}

export default Player1;
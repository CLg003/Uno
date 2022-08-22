import React from 'react';
import Card from "../components/Card";

const Player2 = ({player2Cards}) => {

    const p2CardNodes = player2Cards.map((card, index) => {
        return (
            <Card key={index} index={index} id={card._id} colour={card.colour} symbol={card.symbol} image={card.image}/>
        );
    });

    return (
        <div id="player-2" className="player-cards">
            <p>Player 2 here</p>
            {(player2Cards.length > 0) 
            ?
            <ul className="cards">
                {p2CardNodes}
            </ul>
            :
            <p>No cards here</p>}
        </div>
    );

}

export default Player2;
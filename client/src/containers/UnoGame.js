import {useEffect, useState} from 'react';
import Player1 from './Player1';
import Player2 from './Player2';

const UnoGame = ({cards, user}) => {

    {/* STATES */}
    {/* States for player 1, player 2 (both 7 cards on dealing from shuffled/random-sorted cards), newGame, dealCards, pick-up pile (top card=[0], .shift from start of array), discard pile (top card=[0], .unshift into start of array) */}

    const [player1Cards, setPlayer1Cards] = useState([]);
    const [player2Cards, setPlayer2Cards] = useState([]);
    const [newGame, setNewGame] = useState(true);
    const [dealCards, setDealCards] = useState(false);

    const discardPile = [];
    // let lastDiscarded;
    // if (discardPile.length > 0) {
    //     lastDiscarded = discardPile[0];
    // }

    // useEffect(() => {setNewGame(false)}, [dealCards]);
    // useEffect(() => {setDealCards(true)}, [!newGame]);

    {/* HANDLE NEW GAME */}
    const handleNewGame = () => {
        setNewGame(true);
        setPlayer1Cards([]);
        setPlayer2Cards([]);
        setDealCards(false);
    }

    {/* SHUFFLING & DEALING CARDS */}
    {/* Randomise order of cards then deal 7 to each of player 1 and player 2, 
    remaining cards to pick-up pile, then top card [0] shift/unshift to play/discard pile (top card) */}

    const shuffleCards = (cardsToShuffle) => {
        let shuffledDeck = cardsToShuffle.sort(function(a, b) {return Math.random() - 0.5}).map(card => card);
        return shuffledDeck;
    }

    const handleDeal = () => {
        let shuffled = shuffleCards(cards);
        // console.log(shuffled);
        let p1Cards = [];
        let p2Cards = [];
        for (let i = 1; i <= 7; i++) {
            p1Cards.push(shuffled.shift());
            setPlayer1Cards(p1Cards);
            p2Cards.push(shuffled.shift());
            setPlayer2Cards(p2Cards);
        }
        setNewGame(false);
        setDealCards(true);
    }

    const handleDiscard = () => {
        discardPile.unshift(cards.shift());
        console.log(discardPile[0]);
        console.log(discardPile[0].image);
        console.log(discardPile.length);
    }

    {/* DRAG n DROP REQUIREMENTS */}
    {/* Need 3 areas to drag items from - player 1, player 2 and pick-up pile*/}
    {/* Need 3 dropzones - player 1, player 2, play/discard pile */}
    {/* Acceptable types should be equal to current discard pile colour/symbol/wild */}

    if(cards) {
        return (
            <div id="uno-game-container">
                <p>Uno card game here</p>
                <button onClick={handleNewGame}>New Game</button>

                <p>card access test - top card in discard pile is "{cards[0].colour}, {cards[0].symbol}"</p>
                
                <Player1 player1Cards={player1Cards}/>
                
                {/* PLACEHOLDER CARDS FOR LAYOUT */}
                {/* <div id="player-1" className="player-cards">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                </div> */}

                <div id="draw-discard-piles">

                    {/* PLACEHOLDER CARDS FOR LAYOUT */}
                    {/* <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}${cards[0].image}`} alt="picture"/> */}
                    
                    {/* DRAW PILE */}
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>

                    {/* DISCARD PILE */}
                    {(discardPile.length > 0) ?
                    <p>{discardPile[0].colour}, {discardPile[0].symbol}</p>
                    :
                    <p>Not turned over</p>}

                </div>
                
                {!dealCards ?
                <button id="deal-button" onClick={handleDeal}>Deal</button>
                : 
                null}

                {(dealCards) ?
                <button onClick={handleDiscard}>Turn over top card to start</button>
                :
                null}

                <Player2 player2Cards={player2Cards}/>

                {/* PLACEHOLDER CARDS FOR LAYOUT */}
                {/* <div id="player-2" className="player-cards">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                </div>   
                              */}
            </div>
        );
    }

}

export default UnoGame;
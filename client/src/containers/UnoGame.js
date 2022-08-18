import {useEffect, useState} from 'react';
import Player1 from './Player1';
import Player2 from './Player2';
import DrawAndDiscard from './DrawAndDiscard';

const UnoGame = ({cards, user}) => {

    {/* STATES */}
    {/* States for player 1, player 2 (both 7 cards on dealing from shuffled/random-sorted cards), newGame, dealCards, pick-up pile (top card=[0], .shift from start of array), discard pile (top card=[0], .unshift into start of array) */}

    const [player1Cards, setPlayer1Cards] = useState([]);
    const [player2Cards, setPlayer2Cards] = useState([]);
    const [dealCards, setDealCards] = useState(false);
    const [cardInPlay, setCardInPlay] = useState(null);

    // useEffect(() => {setNewGame(false)}, [dealCards]);
    // useEffect(() => {setDealCards(true)}, [!newGame]);

    {/* HANDLE NEW GAME */}
    const handleNewGame = () => {
        setPlayer1Cards([]);
        setPlayer2Cards([]);
        setCardInPlay(null);
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
        setCardInPlay(cards.shift());
        setDealCards(true);
    }

    const displayTopCard = () => {

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

                <DrawAndDiscard cards={cards} dealCards={dealCards} handleDeal={handleDeal} cardInPlay={cardInPlay}/>

                <Player2 player2Cards={player2Cards}/>

            </div>
        );
    }

}

export default UnoGame;
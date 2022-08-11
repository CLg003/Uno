import {useState} from 'react';
import Player1 from './Player1';

const UnoGame = ({cards, user}) => {

    {/* STATES */}
    {/* States for player 1, player 2 (both 7 cards on dealing from shuffled/random-sorted cards), pick-up pile (top card=[0], .shift from start of array), discard pile (top card=[0], .unshift into start of array) */}

    const [player1Cards, setPlayer1Cards] = useState([]);
    const [player2Cards, setPlayer2Cards] = useState([]);

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
        for (let i = 1; i <= 7; i++) {
            p1Cards.push(shuffled.shift());
            setPlayer1Cards(p1Cards);
        }
    }

    {/* DRAG n DROP REQUIREMENTS */}
    {/* Need 3 areas to drag items from - player 1, player 2 and pick-up pile*/}
    {/* Need 3 dropzones - player 1, player 2, play/discard pile */}
    {/* Acceptable types should be equal to current discard pile colour/symbol/wild */}

    if(cards) {
        return (
            <div id="uno-game-container">
                <p>Uno card game here</p>

                <p>card access test - First card in pile is "{cards[0].colour}, {cards[0].symbol}"</p>
                
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
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}${cards[0].image}`} alt="picture"/>
                </div>

                <button id="deal-button" onClick={handleDeal}>Deal</button>

                {/* PLACEHOLDER CARDS FOR LAYOUT */}
                <div id="player-2" className="player-cards">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                </div>                
            </div>
        );
    }

}

export default UnoGame;
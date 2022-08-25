import React from 'react';
import {useState} from 'react';
import Player1 from './Player1';
import Player2 from './Player2';
import DrawAndDiscard from './DrawAndDiscard';
import Deal from './Deal';

const UnoGame = ({cards, user}) => {

    // STATES
    // States for player 1, player 2 (both 7 cards on dealing from shuffled/random-sorted cards), newGame, dealCards, pick-up pile (top card=[0], .shift from start of array), discard pile (top card=[0], .unshift into start of array)

    const [player1Cards, setPlayer1Cards] = useState([]);
    const [player2Cards, setPlayer2Cards] = useState([]);
    const [dealCards, setDealCards] = useState(false);
    const [cardInPlay, setCardInPlay] = useState(null);
    const [drawCards, setDrawCards] = useState([]);
    const [playerTurn, setPlayerTurn] = useState(null);
    const [rejectCard, setRejectCard] = useState(false);
    const [selectColour, setSelectColour] = useState(false);
    const [wildColour, setWildColour] = useState(null);

    // useEffect(() => {setNewGame(false)}, [dealCards]);
    // useEffect(() => {setDealCards(true)}, [!newGame]);

    // HANDLE NEW GAME
    const handleNewGame = () => {
        setPlayer1Cards([]);
        setPlayer2Cards([]);
        setDealCards(false);
        setCardInPlay(null);
        setDrawCards([]);
        setPlayerTurn(null);
        setRejectCard(false);
        setSelectColour(false);
        setWildColour(null);
    }

    // SHUFFLE & DEAL CARDS
    // Randomise order of cards then deal 7 to each of player 1 and player 2, remaining cards to pick-up pile

    const shuffleCards = (cardsToShuffle) => {
        let shuffledDeck = cardsToShuffle.sort(function(a, b) {return Math.random() - 0.5}).map(card => card);
        return shuffledDeck;
    }

    const handleDeal = () => {
        let shuffled = shuffleCards(cards);
        let p1Cards = [];
        let p2Cards = [];
        for (let i = 1; i <= 7; i++) {
            p1Cards.push(shuffled.shift());
            setPlayer1Cards(p1Cards);
            p2Cards.push(shuffled.shift());
            setPlayer2Cards(p2Cards);
        }
        setDealCards(true);
        setDrawCards(shuffled);
    }

    const turnOverTopCard = () => {
        const cardToTurn = drawCards.shift();
        setCardInPlay(cardToTurn);        
    }

    const startGame = () => {
        setPlayerTurn(1);
    }

    // onClick PLAY
    // 2 onClick possible - Card (player 1 & player 2) and Draw pile - to place in discard pile (CardInPlay)
    // Acceptable cards equal to cardInPlay colour/symbol

    const rejectClickedCard = function() {
        setRejectCard(true);
        console.log("rejected");
    }

    const onCardClick = function(index) {
        if (playerTurn) {
            const cardsInHand = ((playerTurn === 1) ? player1Cards : player2Cards);
            const cardToPlay = cardsInHand[index];
            console.log(`${cardToPlay.colour}, ${cardToPlay.symbol}`)
            console.log("Card clicked");
            
            if (cardInPlay.colour === "wild") {
                cardInPlay.colour = wildColour;
            }
            
            if (cardToPlay.symbol === "plus4") {
                if (cardsInHand.filter(card => card.colour === cardInPlay.colour).length === 0) {
                    playCard(cardToPlay, cardsInHand);
                } else {
                    rejectClickedCard();
                }
            } else {
                if ((cardToPlay.colour === cardInPlay.colour) || (cardToPlay.symbol === cardInPlay.symbol) || (cardToPlay.symbol === "wild")) {
                    playCard(cardToPlay, cardsInHand);
                } else {
                    rejectClickedCard();
                }
            }
        }
    }

    // if (cardInPlay.symbol === "plus2")

    // if (cardInPlay.symbol === "wild")

    // if (cardInPlay.symbol === "plus4")

    // const onDrawClick = function() {

    // }
    
    // PLAY CARD
    const playCard = (cardPlayed, cardsInHand) => {
        setCardInPlay(cardPlayed);
        const newCardsInHand = cardsInHand.filter((card) => card._id !== cardPlayed._id);
        (playerTurn === 1 ? setPlayer1Cards(newCardsInHand) : setPlayer2Cards(newCardsInHand));
        setRejectCard(false);
        if (cardPlayed.colour === "wild") {
            setSelectColour(true);
        } else if ((cardPlayed.symbol !== "miss") && (cardPlayed.symbol !== "reverse")) {
            nextPlayer();
        }
    }

    // WILD - COLOUR CHOICE
    const wildColourChoice = function(colour) {
        setWildColour(colour);
        setSelectColour(false);
        nextPlayer();
    }
    
    // SET NEXT PLAYER
    const nextPlayer = () => {
        if (!playerTurn) {
            setPlayerTurn(1);
        } else {
            (playerTurn === 1) ? setPlayerTurn(2) : setPlayerTurn(1);
        }
    }

    if(cards) {
        return (
            <div id="uno-game-container">
                <button onClick={handleNewGame}>New Game</button>

                { cardInPlay ?
                <p>card access test - card in play is "{cardInPlay.colour}, {cardInPlay.symbol}"</p>
                :
                null
                } 
                
                <Player1 player1Cards={player1Cards} playerTurn={playerTurn} onCardClick={onCardClick} rejectCard={rejectCard} selectColour={selectColour} wildColourChoice={wildColourChoice}/>

                <DrawAndDiscard cardInPlay={cardInPlay} playerTurn={playerTurn} player1Cards={player1Cards} player2Cards={player2Cards}/>
                
                <Deal dealCards={dealCards} handleDeal={handleDeal} cardInPlay={cardInPlay} turnOverTopCard={turnOverTopCard} playerTurn={playerTurn} startGame={startGame}/>

                <Player2 player2Cards={player2Cards} playerTurn={playerTurn} onCardClick={onCardClick} rejectCard={rejectCard} selectColour={selectColour} wildColourChoice={wildColourChoice}/>
                
            </div>
        );
    }

}

export default UnoGame;
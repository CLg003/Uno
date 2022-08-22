import React from 'react';
import {useEffect, useState} from 'react';
import Player1 from './Player1';
import Player2 from './Player2';
import DrawAndDiscard from './DrawAndDiscard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const UnoGame = ({cards, user}) => {

    {/* STATES */}
    {/* States for player 1, player 2 (both 7 cards on dealing from shuffled/random-sorted cards), newGame, dealCards, pick-up pile (top card=[0], .shift from start of array), discard pile (top card=[0], .unshift into start of array) */}

    const [player1Cards, setPlayer1Cards] = useState([]);
    const [player2Cards, setPlayer2Cards] = useState([]);
    const [dealCards, setDealCards] = useState(false);
    const [cardInPlay, setCardInPlay] = useState(null);
    const [drawCards, setDrawCards] = useState([]);
    const [playerTurn, setPlayerTurn] = useState(null);

    // useEffect(() => {setNewGame(false)}, [dealCards]);
    // useEffect(() => {setDealCards(true)}, [!newGame]);

    {/* HANDLE NEW GAME */}
    const handleNewGame = () => {
        setPlayer1Cards([]);
        setPlayer2Cards([]);
        setDealCards(false);
        setCardInPlay(null);
        setDrawCards([]);
        setPlayerTurn(null);
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
        setDealCards(true);
        setDrawCards(shuffled);
    }

    const nextPlayer = () => {
        if (!playerTurn) {
            setPlayerTurn(1);
        } else {
            (playerTurn == 1) ? setPlayerTurn(2) : setPlayerTurn(1);
        }
    }

    const invalidStartCardSymbols = ["miss", "reverse", "plus2", "wild", "plus4"];

    const checkStartCardValidity = cardToPlay => {
        if (!invalidStartCardSymbols.includes(cardToPlay.symbol)) {
            nextPlayer();
        }
    }

    const turnOverTopCard = () => {
        const cardToPlay = drawCards.shift();
        checkStartCardValidity(cardToPlay);
        setCardInPlay(cardToPlay);
    }

    const playCard = (card, playerCards) => {
        setCardInPlay(card);
        (playerTurn == 1 ? setPlayer1Cards(playerCards) : setPlayer2Cards(playerCards));
    }

    {/* DRAG n DROP REQUIREMENTS */}
    {/* Need 3 areas to drag items from - player 1, player 2 and pick-up pile*/}
    {/* Need 3 dropzones - player 1, player 2, play/discard pile */}
    {/* Acceptable types should be equal to current discard pile colour/symbol/wild */}

    if(cards) {
        return (
            <div id="uno-game-container">
                <button onClick={handleNewGame}>New Game</button>

                { cardInPlay ?
                <p>card access test - card in play is "{cardInPlay.colour}, {cardInPlay.symbol}"</p>
                :
                null
                } 

                {/* DnD FUNCTIONALITY WRAPPER */}
                <DndProvider backend={HTML5Backend}>
                    <Player1 player1Cards={player1Cards}/>

                    <DrawAndDiscard dealCards={dealCards} handleDeal={handleDeal} cardInPlay={cardInPlay} invalidStartCardSymbols={invalidStartCardSymbols} turnOverTopCard={turnOverTopCard} playerTurn={playerTurn} playCard={playCard} player1Cards={player1Cards} player2Cards={player2Cards}/>

                    <Player2 player2Cards={player2Cards}/>
                </DndProvider>
            </div>
        );
    }

}

export default UnoGame;
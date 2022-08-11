
const UnoGame = ({cards, user}) => {

    if(cards) {
        return (
            <div id="uno-game-container">
                <p>Uno card game here</p>
                {/* Need 3 areas to drag items from - player 1, player 2 and pick-up pile*/}
                {/* Need 3 dropzones - player 1, player 2, play/discard pile */}
                {/* Acceptable types should be equal to current discard pile colour/symbol/wild */}
                {/* States for player 1, player 2 (both 7 cards on dealing from shuffled/random-sorted cards), pick-up pile (top card=[0], .shift from start of array), discard pile (top card=[0], .unshift into start of array) */}
                {/* Randomise order of cards then deal 7 to each of player 1 and player 2, 
                remaining cards to pick-up pile, then top card [0] shift/unshift to play/discard pile (top card) */}
                <p>card access test - First card in pile is "{cards[0].colour}, {cards[0].symbol}"</p>
                <div id="draw-discard-piles">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>
                    <img src={`${process.env.PUBLIC_URL}${cards[0].image}`} alt="picture"/>
                </div>
                <p>Back of card</p>
                
            </div>
        );
    }

}

export default UnoGame;
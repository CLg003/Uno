import Card from "../components/Card";

const DrawAndDiscard = ({dealCards, handleDeal, cardInPlay, invalidStartCardSymbols, turnOverTopCard}) => {

        return (
            <div id="draw-discard-piles">
                <div className="cards">
                    {/* DRAW PILE */}
                    <img src={`${process.env.PUBLIC_URL}/assets/images/UNO-back.png`}/>

                    {/* CARD IN PLAY */}
                    {cardInPlay 
                    ?
                    <img src={`${process.env.PUBLIC_URL}${cardInPlay.image}`}/>
                    :
                    null}
                </div>

                {/* DEAL BUTTON */}
                {!dealCards 
                ?
                <button id="deal-button" onClick={handleDeal}>Deal</button>
                : 
                null}

                {/* TURN OVER TOP CARD BUTTON */}
                {dealCards && !cardInPlay
                ?
                <button onClick={turnOverTopCard}>Click to turn over top card of draw pile</button>
                :
                null}

                {/* INVALID START CARD BUTTON */}
                {cardInPlay && invalidStartCardSymbols.includes(cardInPlay.symbol)
                ?
                <button onClick={turnOverTopCard}>Invalid start card - click to turn over another card</button>
                :
                null}
            </div>


        );

}

export default DrawAndDiscard;
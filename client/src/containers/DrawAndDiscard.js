import Card from "../components/Card";

const DrawAndDiscard = ({cards, dealCards, handleDeal, cardInPlay}) => {

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
                    <p>No card in play</p>}

                    {/* DISCARD PILE */}
                </div>

                {/* DEAL BUTTON */}
                {!dealCards 
                ?
                <button id="deal-button" onClick={handleDeal}>Deal</button>
                : 
                null}

            </div>


        );

}

export default DrawAndDiscard;
import Card from "./Card";

const DiscardPile = ({discardPile, discardedCard}) => {

    const discardedCardNode = discardPile.filter((card, index) => index === 0).map((card, index) => {
        return (
            <Card key={index} index={index} id={card._id} colour={card.colour} symbol={card.symbol} image={card.image}/>
        );
    });
    
    if (discardedCard) {
        return (
            <ul>
                {discardedCardNode}
            </ul>
        );
    } 
    //  else {
    //     return (
    //         null
    //     );
    //  }

}

export default DiscardPile;
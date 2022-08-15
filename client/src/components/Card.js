
const Card = ({index, id, colour, symbol, image}) => {

    return (
        <img id="card" src={`${process.env.PUBLIC_URL}${image}`}/>
    );
    
}

export default Card;
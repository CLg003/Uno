import React from 'react';
import { useDrag } from 'react-dnd';

// ITEM TO DRAG
const Card = ({id, colour, symbol, image}) => {

    // MONITORING THE ITEM BEING DRAGGED
    const [{isDragging}, drag] = useDrag(() => ({
        type: colour,
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <img id="card" src={`${process.env.PUBLIC_URL}${image}`} alt="card face" ref={drag} style={{ opacity: isDragging ? "0.15" : "1"}}/>
    );
    
}

export default Card;
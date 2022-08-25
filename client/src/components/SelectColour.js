import React from 'react';

const SelectColour = ({wildColourChoice}) => {

    const handleChange = function(event) {
        console.log(event.target.value);
        wildColourChoice(event.target.value);
    }

    return (
        // <p>select the colour!!!</p>
        <div id="select-colour">
            <div id="colour-radio" onChange={handleChange}>
                <input type="radio" id="red" name="colour" value="red"/>
                <label htmlFor="red">Red</label>
                <input type="radio" id="yellow" name="colour" value="yellow"/>
                <label htmlFor="yellow">Yellow</label>
                <input type="radio" id="green" name="colour" value="green"/>
                <label htmlFor="green">Green</label>
                <input type="radio" id="blue" name="colour" value="blue"/>
                <label htmlFor="blue">Blue</label>
            </div>
        </div>
    );

}

export default SelectColour;
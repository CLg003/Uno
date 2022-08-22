import React from 'react';
import {useState} from 'react';

const EnterUserName = ({inputUserName}) => {

    const [nameInput, setNameInput] = useState('');

    const handleNameInput = (event) => {
        setNameInput(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        inputUserName(nameInput);
    }

    return (
        <div id="enter-user-name">
            <form onSubmit={handleFormSubmit}>
                <p>Enter user name form here</p>
                <label htmlFor="user">Enter your name: </label>
                <input type="text" id="user" value={nameInput} onChange={handleNameInput} placeholder="Your name here" required/>
                <input type="submit" id="submit" value="Play Uno"/>
            </form>
        </div>
    );
    
}

export default EnterUserName;
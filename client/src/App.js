import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import EnterUserName from './containers/EnterUserName';
import UnoGame from './containers/UnoGame';
import { getCards } from './services/CardsService';

function App() {

    const [user, setUser] = useState(null);
    const [cards, setCards] = useState(null);

    const inputUserName = (name) => {
        setUser(name);
    }

    useEffect(() => {
        getCards()
        .then((data) => {
            setCards(data);
        });
    }, []);

    return (
        <div id="app">
            <Header/>
            {/* MAIN CONTENT HERE */}
            { !user ?
            <EnterUserName inputUserName={inputUserName}/>
            :
            <UnoGame cards={cards} user={user}/>
            }
            <footer>&copy;2022 Claire Laing</footer>
        </div>
    );
}

export default App;

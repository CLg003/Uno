import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import EnterUserName from './containers/EnterUserName';
import UnoGame from './containers/UnoGame';

function App() {

    const [user, setUser] = useState(null);

    const inputUserName = (name) => {
      setUser(name);
    }

    return (
        <div id="app">
            <Header/>
            {/* MAIN CONTENT HERE */}
            { !user ?
            <EnterUserName inputUserName={inputUserName}/>
            :
            <UnoGame/>
            }
            <footer>&copy;2022 Claire Laing</footer>
        </div>
    );
}

export default App;

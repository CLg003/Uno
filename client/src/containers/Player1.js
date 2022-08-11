import Player1Cards from "../components/Player1Cards";

const Player1 = ({player1Cards}) => {
        
        return (
            <div id="player-1" className="player-cards">
                <p>Player 1 here</p>
                {
                (player1Cards.length > 0) 
                ?
                <Player1Cards player1Cards={player1Cards}/>
                :
                <p>No cards here</p>
                }
            </div>
        );

}

export default Player1;
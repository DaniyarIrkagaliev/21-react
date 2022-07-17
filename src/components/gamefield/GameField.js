import React, {useState} from 'react';
import Deck from "../gameDeck/Deck";

const GameField = () => {
    const [game, setGame] = useState(0);
    const [player, setPlayer] = useState({
        name: 'player',
        score: 0,
        deck: [],
    });

    const [dealer, setDealer] = useState({
        name: 'dealer',
        score: 0,
        deck: [],
    });

    const [winner, setWinner] = useState({
        winner: '',
        state: false,
    });

    return (
        <div>
            <Deck/>
            {game === 1 ?
                <div>
                    <button>
                        Пас
                    </button>
                    <button>
                        Еще!
                    </button>
                </div>
                :
                <div>
                    <button onClick={() => setGame(1)}>
                        Start
                    </button>
                </div>
            }

            {console.log(game)}
        </div>
    );
};

export default GameField;
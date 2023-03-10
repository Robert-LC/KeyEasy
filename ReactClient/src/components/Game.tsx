import React, { useState } from 'react';
import { notes } from '../helpers';
import '../styles/Game.css';
import Piano from './Piano';
import scales from '../scaleList.json';

type Props = {

}

const Game: React.FC<Props> = () => {

    //State Variables
    const [scaleToGuess, setScaleToGuess] = useState("C MAJOR"); 
    const [currentScore, setCurrentScore] = useState(0);
    const [guesssedNotes, setGuessedNotes] = useState<string[]>([]);

    return( 
        <div>
            <h1 className='scale-text'>{scaleToGuess}</h1>
            <Piano notes={notes} />
        </div>
    );
}

export default Game;
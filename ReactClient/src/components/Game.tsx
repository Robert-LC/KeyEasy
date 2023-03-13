import React, { useState } from 'react';
import { notes } from '../helpers';
import '../styles/Game.css';
import Piano from './Piano';
import scales from '../scales.json';
import _ from 'lodash';

type Props = {

}

/**
 * The Game Component keeps track of the user's score as well as giving the user a random scale.
 * @returns The Game Component
 */
const Game: React.FC<Props> = () => {

    //State Variables
    const [scaleToGuess, setScaleToGuess] = useState(getRandomScale()); 
    const [currentScore, setCurrentScore] = useState(0);
    const [guesssedNotes, setGuessedNotes] = useState<string[]>([]);

    return( 
        <div>
            <h1 className='scale-text'>{scaleToGuess?.name}</h1>
            <Piano notes={notes} />
        </div>
    );
}

const getRandomScale = () => _.sample(scales);

export default Game;
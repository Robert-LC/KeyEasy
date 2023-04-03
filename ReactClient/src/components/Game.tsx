import React, { useState } from 'react';
import { notes } from '../helpers';
import Piano from './Piano';

import '../styles/Game.css';

import GameService from '../services/GameService';
import ScaleService from '../services/ScaleService';



type Props = {
    gameSvc: GameService;
    scaleSvc: ScaleService;
}

/**
 * The Game Component keeps track of the user's score as well as giving the user a random scale.
 * @returns The Game Component
 */
const Game: React.FC<Props> = ({gameSvc, scaleSvc}: Props) => {

    //State Variables
    const [scaleToGuess, setScaleToGuess] = useState(scaleSvc.selectRandomScale()); 
    const [currentScore, setCurrentScore] = useState(0);
    const [guesssedNotes, setGuessedNotes] = useState<string[]>([]);

    return( 
        <div>
            <h1 className='scale-text'>{scaleToGuess?.name}</h1>
            <Piano notes={notes} />
        </div>
    );
}


export default Game;
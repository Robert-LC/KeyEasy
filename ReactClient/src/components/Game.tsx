import React, { useState } from 'react';
import { notes } from '../helpers';
import Piano from './Piano';

import '../styles/Game.css';

import ScaleService from '../services/ScaleService';
import NoteModel from '../Models/NoteModel';



type Props = {
    scaleSvc: ScaleService;
}

/**
 * The Game Component keeps track of the user's score as well as giving the user a random scale.
 * @returns The Game Component
 */
const Game: React.FC<Props> = ({scaleSvc}: Props) => {

    //State Variables
    const [scaleToGuess, setScaleToGuess] = useState(scaleSvc.selectRandomScale()); 
    const [currentScore, setCurrentScore] = useState("0/84");
    const [currentNoteToGuess, setCurrentNoteToGuess] = useState(new NoteModel("C"));
    const [guesssedNotes, setGuessedNotes] = useState<string[]>([]);

    return( 
        <div>
            <div className='info-div'>
                <h1 className='scale-text'>Current Scale: <p className='highlight-text'>{scaleToGuess?.Name}</p></h1>
                <h1 className='scale-text'>Score: {currentScore}</h1>
            </div>
            
            <h1 className='note-prompt'>Click the <p className='highlight-text'>{currentNoteToGuess?.Name}</p> Note</h1>
            <Piano notes={notes} />
        </div>
    );
}


export default Game;
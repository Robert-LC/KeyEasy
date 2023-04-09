import React, { useState, useEffect } from 'react';
import { notes } from '../helpers';
import Piano from './Piano';

import '../styles/Game.css';

import GameModel from '../Models/GameModel';
import { useGameService } from '../contexts/GameServiceContext';
import { useScaleService } from '../contexts/ScaleServiceContext';
import ScaleType from '../enums/ScaleType';
import ScaleModel from '../Models/ScaleModel';
import ScaleService from '../services/ScaleService';


/**
 * Game displays the piano and accompanying information to the user
 */
const Game: React.FC = () => {
    const scaleSvc: ScaleService = useScaleService();
    const gameModel: GameModel = new GameModel(ScaleType.Major, scaleSvc); 
   
    //State Variables
    const [scaleToGuess, setScaleToGuess] = useState<ScaleModel>(gameModel.currentScale!); 
    const [currentScore, setCurrentScore] = useState<number>(gameModel.currentScore);
    const [currentNote, setCurrentNoteToGuess] = useState<number>(1);
    const [guesses, setGuesses] = useState<number>(3);


    const handleGuess = (note: string) => {
        // console.log(note);
        // console.log(scaleToGuess!.Notes[currentNote - 1])
        // if (note === scaleToGuess!.Notes[currentNote - 1]) {
        //     console.log('Correct Guess');
        //     setCurrentNoteToGuess(currentNote + 1);
        //     setGuesses(3);
        // } else {
        //     console.log('Incorrect Guess');
        //     setGuesses(guesses - 1);
        //     nextNote();
        // }
    }

    // const isCorrectGuess = (note: string): boolean => {
    //     return note === scaleToGuess?.Notes[currentNote];
    // };

    const nextNote = () => {
        if (currentNote + 1 < scaleToGuess!.Notes.length) {
            setCurrentNoteToGuess(currentNote + 1);
            setGuesses(3);
        } 
    };

    return( 
        <div>
            <div className='info-div'>
                <h1 className='scale-text'>Current Scale: <p className='highlight-text'>{scaleToGuess?.Name}</p></h1>
                <h1 className='scale-text'>Score: {currentScore}/{gameModel.maxScore}</h1>
            </div>
            
            <h1 className='note-prompt'>Click the <p className='highlight-text'>{currentNote}</p> Note</h1>
            <Piano 
                notes={notes} 
                onKeyClick={handleGuess}
            />
        </div>
    );
}

export default Game;
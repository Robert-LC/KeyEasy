import React, { useState } from 'react';
import { notes } from '../helpers';
import Piano from './Piano';

import '../styles/Game.css';
import { NoteStatus } from '../helpers';

import GameModel from '../Models/GameModel';
import { useScaleService } from '../contexts/ScaleServiceContext';
import ScaleType from '../enums/ScaleType';
import ScaleModel from '../Models/ScaleModel';
import ScaleService from '../services/ScaleService';
import NoteModel from '../Models/NoteModel';

/**
 * Game displays the piano and accompanying information to the user
 */
const Game: React.FC = () => {
    const scaleSvc: ScaleService = useScaleService();
    const gameModel: GameModel = new GameModel(ScaleType.Major, scaleSvc); 
   
    //State Variables
    const [scaleToGuess] = useState<ScaleModel>(gameModel.currentScale!); 
    const [currentScore, setCurrentScore] = useState<number>(gameModel.currentScore);
    const [currentNote, setCurrentNoteToGuess] = useState<number>(1);
    const [guesses, setGuesses] = useState<number>(3);

    const [noteStatuses, setNoteStatuses] = useState<Record<string, NoteStatus>>({});

    const handleGuess = (note: NoteModel) => {
        //TODO: Break most logic off into GameService.

        if (note.Name === scaleToGuess!.Notes[currentNote - 1].Name) {
            console.log('Correct Guess');
            setCurrentNoteToGuess(currentNote + 1);
            setCurrentScore(currentScore + 1);
            setGuesses(3);
    
            // Update the noteStatuses state
            setNoteStatuses(prevNoteStatuses => ({
                ...prevNoteStatuses,
                [note.Name]: 'correct',
            }));
        } else {
            console.log('Incorrect Guess');
            setGuesses(guesses - 1);
            if (guesses === 0) {
                // When the user has no more guesses left, highlight the correct key orange
                setNoteStatuses((prevNoteStatuses) => ({
                ...prevNoteStatuses,
                [scaleToGuess!.Notes[currentNote - 1].Name]: 'missedCorrect',
                }));

                nextNote();
            }
        }
    }

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
                noteStatuses={noteStatuses}
            />
        </div>
    );
}

export default Game;